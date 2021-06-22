'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notebooks', [
      {
        userId: 1,
        title: 'Gardening',
        coverUrl: 'https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80'
      },
      {
        userId: 1,
        title: 'Cooking',
        coverUrl: 'https://images.unsplash.com/photo-1490535004195-099bc723fa1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80'
      },
      {
        userId: 1,
        title: 'Photography',
        coverUrl: 'https://images.unsplash.com/photo-1606017120350-8e283700004e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2466&q=80'
      },
      {
        userId: 1,
        title: 'Life',
        coverUrl: 'https://images.unsplash.com/photo-1513909894411-7d7e04c28ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2468&q=80'
      },
      {
        userId: 1,
        title: 'Travel',
        coverUrl: 'https://images.unsplash.com/photo-1595538742276-54d443f3b575?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80'
      },
      {
        userId: 1,
        title: 'Exercise',
        coverUrl: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notebooks', null, {});
  }
};

/*
'https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80'

'https://images.unsplash.com/photo-1490535004195-099bc723fa1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80'

'https://images.unsplash.com/photo-1606017120350-8e283700004e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2466&q=80'

'https://images.unsplash.com/photo-1550895030-823330fc2551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2468&q=80'

'https://images.unsplash.com/photo-1513909894411-7d7e04c28ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2468&q=80'

'https://images.unsplash.com/photo-1595538742276-54d443f3b575?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80'

'https://images.unsplash.com/photo-1605106901227-991bd663255c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'

'https://images.unsplash.com/photo-1579762714453-51d9913984e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2542&q=80'
*/
