const express = require("express");
const oracledb = require("oracledb");
// Creating express server
const app = express();

// Handling request using router
app.get("/movies", async (req, res, next) => {
  try {
    const connection = await oracledb.getConnection({
      user: "hmyers02",
      password: "fL02526113",
      connectionString: "csdb2.csc.villanova.edu:1521",
    });

    console.log("successfully connected!");
  } catch (err) {
    console.log({ error: err });
  }

  res.send("Hopefully we will send back movies here eventually");
});

app.listen(3000, () => {
  console.log("Server is Running");
});
