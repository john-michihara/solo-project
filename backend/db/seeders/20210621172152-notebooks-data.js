"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notebooks",
      [
        {
          userId: 1,
          title: "Recipes to Try",
          coverUrl:
            "https://images.unsplash.com/photo-1517167685284-96a27681ad75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notebooks", null, {});
  },
};
