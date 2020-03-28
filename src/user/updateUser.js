
const db = require('../../db/models/index');
const models = require('../../db/models/index');

const { sequelize } = db;

module.exports.updateUser = async (event, context, callback) => {

  const myContext = context;
  myContext.callbackWaitsForEmptyEventLoop = false;
  if (!event.queryStringParameters
     || !event.queryStringParameters.phone
     || !event.queryStringParameters.idUser) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        data: [],
      }),
    });
  }
  const { phone, idUser } = event.queryStringParameters;
  try {
    const response = await models.user.update({
      phone,
    }, {
      where: {
        id: idUser,
      },
    });
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        data: response,
      }, null, 2),
    });
  } catch (error) {
    callback({
      statusCode: 500,
      body: JSON.stringify({
        data: [],
      }),
    });
  }
};
