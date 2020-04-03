const connection = require('../database/connections');

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization; // eslint-disable-line camelcase

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incidents);
  },
};