
const db = require('../../db/models/index');
const models = require('../../db/models/index');

const { sequelize } = db;

module.exports.user = (event, context, callback) => {
  const myContext = context;
  myContext.callbackWaitsForEmptyEventLoop = false;


  models.user.findAll().then((users) => {
    console.log('All users:', JSON.stringify(users));
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        data: users,
      }, null, 2),
    });
  })
    .catch(() => callback({
      statusCode: 500,
      body: JSON.stringify({
        data: 'Error',
      }, null, 2),
    }));

  // sequelize.query('SELECT * FROM user', { type: sequelize.QueryTypes.SELECT })
  //   .then((users) => callback(null, {
  //     statusCode: 200,
  //     body: JSON.stringify({
  //       message: users,
  //     }, null, 2),
  //   }))
  //   .catch(() => callback({
  //     statusCode: 500,
  //     body: JSON.stringify({
  //       message: 'Error',
  //     }, null, 2),
  //   }));
};
