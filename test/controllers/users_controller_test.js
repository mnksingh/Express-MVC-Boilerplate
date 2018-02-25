const assert = require("assert");
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");

const User = require("../../models/user");

describe("Users Controller", () => {
  it("Get to /api/v1/user creates a new user", () => {
    User.count().then(count => {
      request(app)
        .post("/api/v1/user")
        .send({
          username: "mayank_cobold",
          email: "mayank@cobold.co",
          password: "123456"
        })
        .end(() => {
          User.count().then(newCount => {
            assert(count + 1 == newCount);
          });
        });
    });
  });
});
