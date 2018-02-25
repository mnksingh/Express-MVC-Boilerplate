const mongoose = require("mongoose");
before(done => {
  mongoose.connect("mongodb://localhost/sample_test");
  mongoose.connection
    .on("error", err => {
      console.warn("Warning", err);
    })
    .once("open", () => {
      done();
    });
});

beforeEach(done => {
  const { users } = mongoose.connection.collections;
  mongoose.connection.db
    .dropDatabase()
    .then(() => {
      done();
    })
    .catch(() => {
      done();
    });
});
