
const db = require('../../db/models/index');
const models = require('../../db/models/index');

const { sequelize } = db;


module.exports.createUser = async (event, context, callback) => {

  const myContext = context;
  myContext.callbackWaitsForEmptyEventLoop = false;
  if (!event.queryStringParameters
     || !event.queryStringParameters.phone
     || !event.queryStringParameters.name) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        data: [],
      }),
    });
  }
  const { phone, name } = event.queryStringParameters;
  try {
    const newUser = {
      phone, name,
    };
    const response = await models.user.create(newUser);
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
