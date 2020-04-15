"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "avatar",
      [
        {
          id: 900,
          id_usuario: 900,
          nome: "funcionario.png",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 999,
          id_usuario: 999,
          nome: "admin.png",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 1000,
          id_usuario: 1000,
          nome: "dcapassi.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 1001,
          id_usuario: 1001,
          nome: "matheussousa.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("avatar", null, {});
  },
};
