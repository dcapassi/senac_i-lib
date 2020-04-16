export default function user(state = {}, action) {
  switch (action.type) {
    case `@user/LOGGED`: {
      const usuario = action.response.data.usuario.nome;
      const id = action.response.data.usuario.id;
      const tipo = action.response.data.usuario.tipo;
      const email = action.response.data.usuario.email;
      const token = action.response.data.token;

      return { nome: usuario, tipo, email, token, id };
    }
    case `@user/SIGN_OUT`: {
      return {};
    }
    default:
      return state;
  }
}
