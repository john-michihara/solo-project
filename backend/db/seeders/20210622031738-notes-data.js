'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notes', [
      {
        userId: 1,
        notebookId: 1,
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        color: 'red'
      },
      {
        userId: 1,
        notebookId: 1,
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        color: 'red'
      },
      {
        userId: 1,
        notebookId: 1,
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        color: 'red'
      },
      {
        userId: 1,
        notebookId: 1,
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        color: 'red'
      },
      {
        userId: 1,
        notebookId: 1,
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        color: 'red'
      },
      {
        userId: 1,
        notebookId: 1,
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        color: 'red'
      },
      {
        userId: 1,
        notebookId: 1,
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        color: 'red'
      },
      {
        userId: 1,
        notebookId: 1,
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        color: 'red'
      },
      {
        userId: 1,
        notebookId: 1,
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        color: 'red'
      },
      {
        userId: 1,
        notebookId: 1,
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        color: 'red'
      },
      {
        userId: 1,
        notebookId: 2,
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        color: 'red'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notes', null, {});
  }
};
