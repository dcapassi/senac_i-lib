import Avatar from "../models/Avatar";
import * as Yup from "yup";

import fs from "fs";

class AvatarController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const userId = res.id;
    let validacao = await Avatar.findOne({
      where: { id_usuario: userId },
    }).catch((err) => {
      return res.status(400).json({ erro: err });
    });

    if (validacao != null) {
      let oldAvatar = validacao.dataValues.nome;
      console.log(oldAvatar);

      let response = await Avatar.update(
        {
          nome: path,
        },
        { returning: true, where: { id_usuario: userId } }
      ).catch((err) => {
        return res.status(400).json({ erro: err });
      });
      response = response[1][0].dataValues.nome;

      // delete old Avatar file
      fs.unlink(`temp/uploads/${oldAvatar}`, function (err) {
        if (err) throw err;
        console.log(`Avatar antigo removido: ${oldAvatar}`);
      });

      return res.json({ id_usuario: userId, arquivo: response });
    }

    let response = await Avatar.create({
      id_usuario: userId,
      nome: path,
    }).catch((err) => {
      return res.status(400).json({ erro: err });
    });
    response = response.dataValues.nome;
    return res.json({ id_usuario: userId, arquivo: response });
  }

  async show(req, res) {
    /**********************************
     * Validação de entrada
     * *******************************/
    const schema = Yup.object().shape({
      id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: "Falha no formato" });
    }

    /**********************************
     * Verificar se o Id existe
     * *******************************/
    const { id } = req.params;
    let validacao = await Avatar.findOne({
      where: { id_usuario: id },
    }).catch((err) => {
      return res.status(400).json({ erro: err.name });
    });

    if (validacao == null) {
      return res.status(400).json({ error: "Avatar não localizado" });
    }
    /**********************************
     * Mostrar Avatar
     * id,
     * usuario_id,
     * arquivo,
     *********************************/
    const { id: idAvatar, id_usuario, nome } = validacao;
    return res.json({ idAvatar, id_usuario, arquivo: nome });
  } //fim do método show
}

export default new AvatarController();
