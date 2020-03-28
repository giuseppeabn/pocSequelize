'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Farm', 'addres', {
      type: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Farm', 'addres');
  }
};
