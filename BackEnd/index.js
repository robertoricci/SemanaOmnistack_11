const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ evento: "Ola", aluno: "Roberto" });
});

app.listen(3333);
