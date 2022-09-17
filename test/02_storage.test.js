const request = require("supertest");
const app = require("../app");
const { tokenSign } = require("../utils/handleJwt");
const { testAuthRegister } = require("./helper/helperData")
const { usersModel } = require("../models");
const { storageModel } = require("../models");
let JWT_TOKEN = "";
const filePath = `${__dirname}/dump/track.mp3`;

beforeAll(async () => {
  await usersModel.deleteMany({});
  await storageModel.deleteMany({});
  const user = usersModel.create(testAuthRegister);
  JWT_TOKEN = await tokenSign(user);
});
test("should create a return all", async () => {
  const res = await request(app)
    .get("/api/storage")
    .set("Authorization", `Bearer ${JWT_TOKEN}`);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  const { data } = body;
  expect(body).toHaveProperty("data");
});


test("pruebas test", async () => {
  const res = await request(app)
    .get("/api/storage")
    .set("Authorization", `Bearer ${JWT_TOKEN}`);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  const { data } = body;
  expect(body).toHaveProperty("data");
});

test("pruebas eliminar test", async () => {
  const res = await request(app)
    .get("/api/storage")
    .set("Authorization", `Bearer ${JWT_TOKEN}`);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  const { data } = body;
  expect(body).toHaveProperty("data");
});