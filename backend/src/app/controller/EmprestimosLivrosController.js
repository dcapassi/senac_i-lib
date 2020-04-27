import { QueryTypes } from "sequelize";
import database from "../../database/index";

import * as Yup from "yup";
import EmprestimosLivros from "../models/EmprestimosLivros";
import Suspensoes from "../models/Suspensoes";

import { startOfHour, parseISO, isBefore, format } from "date-fns";
import pt from "date-fns/locale/pt";
import regras from "../../app/regrasNegocio/regrasNegocios";

import { Op } from "sequelize";

/****************************************
Rota para cadastrar Emprestimos de Livros

Campos obrigatórios:
id_usuario:
id_livro:
vencimento:
tipo: (0 | 1| 2) onde 0 = Aguardando aprovação, 1 = emprestado, 2 = finalizado

*****************************************/
//index
//show
//store
//update
//delete

class EmprestimosLivrosController {
  async index(req, res) {
    const { id } = req.params;
    const resultado = await database.connection
      .query(
        `select "emprestimosLivros".estado, "emprestimosLivros".vencimento, isbn.isbn, isbn.nome_livro, isbn.autor, isbn.idioma, isbn.autor,isbn.editora from "emprestimosLivros"  inner join livros on "emprestimosLivros".id_livro = livros.id inner join isbn on livros.id_isbn=isbn.isbn
        where "emprestimosLivros".id_usuario = '${res.id}'`,
        {
          type: QueryTypes.SELECT,
        }
      )
      .catch((err) => {
        return res.status(400).json({ erro: err });
      });

    return res.json(resultado);
  } // fim do método index

  async show(req, res) {
    /**********************************
     * Validação de entrada
     * *******************************/
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: "Falha no formato" });
    }

    /**********************************
     * Verificar se o Id existe
     * *******************************/
    const { id } = req.params;
    let validacao = await EmprestimosLivros.findByPk(id).catch((err) => {
      return res.status(400).json({ erro: err.name });
    });

    if (validacao == null) {
      return res.status(400).json({ error: "Id de Emprestimo não existe" });
    }
    /**********************************
     * Mostrar emprestimo
     * *******************************/
    const { id_usuario, id_livro, estado, vencimento } = validacao;
    return res.json({ id, id_usuario, id_livro, estado, vencimento });
  } // fim do método show

  async store(req, res) {
    /**********************************
     * Validação de entrada
     * *******************************/
    const schema = Yup.object().shape({
      id_livro: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Falha no formato" });
    }

    /****************************************************************
     * Garantir que usuario possa pegar livros emprestados
     * *************************************************************/
    const userId = res.id;

    let validacao = await Suspensoes.findOne({
      where: { id_usuario: userId },
    }).catch((err) => {
      return res.status(400).json({ erro: err });
    });
    if (validacao != null) {
      return res.status(400).json({ erro: "Usuários está suspenso!" });
    }

    //Verificar se livro já está em emprestimo com o usuário

    let verificaEmprestimos = await EmprestimosLivros.findOne({
      where: { [Op.and]: [{ id_livro: req.body.id_livro }, { estado: "0" }] },
    }).catch((err) => {
      return res.status(400).json({ erro: err });
    });

    if (verificaEmprestimos != null) {
      return res
        .status(400)
        .json({ erro: "Livro já está em processo de Emprestimo!" });
    }

    /**********************************
     * Gravar dados no Banco
     * *******************************/

    const diaAgora = new Date();
    const dia = diaAgora.getDate();
    const mes = diaAgora.getMonth() + 1;
    const ano = diaAgora.getFullYear();
    //const dataVencimento = `${mes}/${dia + regras.diasEmprestimo.alunos}/${ano}`;
    const dataVencimento = new Date(ano, mes, dia);
    dataVencimento.setDate(
      dataVencimento.getDate() + regras.diasEmprestimo.alunos
    );
    const {
      id_usuario,
      id_livro,
      estado,
      vencimento,
    } = await EmprestimosLivros.create({
      id_usuario: userId,
      id_livro: req.body.id_livro,
      estado: 0, //Cria emprestimos como Aguardando aprovação
      vencimento: dataVencimento,
    }).catch((err) => {
      return res.status(400).json({ erro: err });
    });
    return res.json({
      id_usuario,
      id_livro,
      estado,
      vencimento: dataVencimento,
    });
  } // fim do método store

  async update(req, res) {
    /**********************************
     * Verificar se o Id existe
     * *******************************/
    const { id } = req.params;
    let emprestimoExistente = await EmprestimosLivros.findByPk(id).catch(
      (err) => {
        return res.status(400).json({ erro: err.name });
      }
    );

    if (emprestimoExistente == null) {
      return res.status(400).json({ error: "Id de emprestimo não existe" });
    }

    /**********************************
     * Edita emprestimos
     * *******************************/
    const { id_usuario, id_livro, estado, vencimento } = req.body;
    let response = await EmprestimosLivros.update(req.body, {
      returning: true,
      where: { id },
    }).catch((err) => {
      return res.status(400).json({ erro: err.name });
    });

    return res.json({ id_usuario, id_livro, estado, vencimento });
  } // fim do método udpate

  async delete(req, res) {
    /**********************************
     * Validação de entrada
     * *******************************/
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: "Falha no formato" });
    }
    /**********************************
     * Verificar se o Id existe
     * *******************************/
    const { id } = req.params;
    let emprestimoExistente = await EmprestimosLivros.findByPk(id).catch(
      (err) => {
        return res.status(400).json({ erro: err.name });
      }
    );

    if (emprestimoExistente == null) {
      return res.status(400).json({ error: "Id de emprestimo não existe" });
    }

    /**********************************
     * Remove o emprestimo
     * *******************************/
    const respostaRemoção = await emprestimoExistente.destroy().catch((err) => {
      return res.status(400).json({ erro: err.name });
    });
    return res.json({ "Emprestimo removido": id });
  } // fim do método udpate
}

export default new EmprestimosLivrosController();
