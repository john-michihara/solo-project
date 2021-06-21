'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notebooks', [
      {
        userId: 1,
        title: 'Gardening',
        coverUrl: 'https://images.unsplash.com/photo-1624160719218-33eb1081919c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      },
      {
        userId: 1,
        title: 'Cooking',
        coverUrl: 'https://images.unsplash.com/photo-1624160719183-b3b9010a77c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
      },
      {
        userId: 1,
        title: 'Photography',
        coverUrl: 'https://images.unsplash.com/photo-1624102615561-5f182ed03116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1066&q=80'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
