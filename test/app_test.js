const assert = require("assert");
const request = require("supertest");
const app = require("../app");

describe("Express App", () => {
  it("handles a get request to /api/v1", done => {
    request(app)
      .get("/api/v1")
      .end((err, response) => {
        assert(response.body.status === "Running");
        done();
      });
  });
});
