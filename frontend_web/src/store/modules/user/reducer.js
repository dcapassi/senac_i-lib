export default function user(state = {}, action) {
  switch (action.type) {
    case `@user/LOGGED`:
      const usuario = action.response.data.usuario.nome;
      const tipo = action.response.data.usuario.tipo;
      const email = action.response.data.usuario.email;
      const token = action.response.data.token;

      return { nome: usuario, tipo, email, token };

    default:
      return state;
  }
}
