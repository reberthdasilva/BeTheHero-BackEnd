const connection = require("../database/connection");

module.exports = {
  async list(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await connection("incidents")
      .select("*")
      .where("ong_id", ong_id);

    return res.json(incidents);
  }
};
