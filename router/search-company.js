const express = require("express");
const router = new express.Router();
const searchCompany = require("../model/search-company");
const connection = require("../db/connection");

router.get("/check/", async (req, res) => {
  const _id = req.body; // Access the id provided
  const searchParams = new searchCompany(req.body);
<<<<<<< HEAD
  // if (req.body.seasonNo && req.body.episodeNo && req.body.deal) {
    if(true){
=======
  if (req.body.seasonNo && req.body.episodeNo && req.body.deal) {
>>>>>>> 21e8168dc9c8118db8210c6c6d30e681abe33eb3
    try {
      let sql = `SELECT * FROM company_stocks WHERE season_id=? and episode_id=? and deal=?`;
      let result = {};
      connection.query(
        sql,
<<<<<<< HEAD
        // [searchParams.seasonNo, searchParams.episodeNo, searchParams.deal],
        ['1','1','yes'],
=======
        [searchParams.seasonNo, searchParams.episodeNo, searchParams.deal],
>>>>>>> 21e8168dc9c8118db8210c6c6d30e681abe33eb3
        (error, results, fields) => {
          if (error) {
            return console.error(error.message);
          }
          result = results[0];
          console.log(result);
          res.status(201).send(results);
        }
      );

<<<<<<< HEAD
      // connection.end();
=======
      connection.end();
>>>>>>> 21e8168dc9c8118db8210c6c6d30e681abe33eb3
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(404).send("seasonNo, episodeNo, deal are required");
  }
});

module.exports = router;
