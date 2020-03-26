const connection = require("../database/conncection");

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return response.status(400).json({ error: "No Ong Found with this Id" });
    }

    return response.json(ong);
  }
};
