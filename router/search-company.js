const express = require("express");
const router = new express.Router();
const searchCompany = require("../model/search-company");
const connection = require("../db/connection");

router.get("/check/", async (req, res) => {
  const _id = req.body; // Access the id provided
  const searchParams = new searchCompany(req.body);
  if (req.body.seasonNo && req.body.episodeNo && req.body.deal) {
    try {
      let sql = `SELECT * FROM company_stocks WHERE season_id=? and episode_id=? and deal=?`;
      let result = {};
      connection.query(
        sql,
        [searchParams.seasonNo, searchParams.episodeNo, searchParams.deal],
        (error, results, fields) => {
          if (error) {
            return console.error(error.message);
          }
          result = results[0];
          console.log(result);
          res.status(201).send(results);
        }
      );

      connection.end();
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(404).send("seasonNo, episodeNo, deal are required");
  }
});

module.exports = router;
