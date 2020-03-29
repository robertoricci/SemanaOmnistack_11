const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/conncection");

describe("ONg", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });
  it("should be able to create a new Ong", async () => {
    const response = await request(app)
      .post("/ongs")
      // .set('Authorization','xxx')
      .send({
        name: "APAD",
        email: "roberto.ricci@gmail.com",
        whatsapp: "1111111111",
        city: "itupeva",
        uf: "SP"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
