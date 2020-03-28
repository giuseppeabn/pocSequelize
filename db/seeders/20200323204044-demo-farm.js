'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Farms', 
      [{
        name: 'Agricola 2',
        rup: '12.1.01.0288',
        phone: '89999999',
        addres: 'direccion',
      },
      {
        name: 'Agricola 3',
        rup: '12.1.01.0288',
        phone: '89999999',
        addres: 'direccion',
      }], {});
  
  },
  down: (queryInterface, Sequelize) => {   
      return queryInterface.bulkDelete('Farms', null, {});   
  }
};
