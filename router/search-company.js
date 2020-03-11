const express = require("express");
const router = new express.Router();
const searchCompany = require("../model/search-company");
const connection = require("../db/connection");

router.get("/mainsearch/", async (req, res) => {
  const seasonNo = req.query.seasonNo || "";
  const episodeNo = req.query.episodeNo || "";
  const deal = req.query.deal || "";
  const gender = req.query.gender || "";
  const investor = req.query.investor || "";
  let paramArray = [];
  if (true) {
    let mainSql =
      "SELECT company_stocks.company_id,company_name,amount,episode_id,season_id FROM company_stocks\
    inner join company on company_stocks.company_id = company.id";
    let sql = "";
    try {
      if (seasonNo !== "") {
        sql += ` WHERE season_id=?`;
        paramArray.push(seasonNo);
      }
      if (episodeNo !== "") {
        sql += " and episode_id=?";
        paramArray.push(episodeNo);
      }
      if (deal !== "") {
        sql += " and deal=?";
        paramArray.push(deal);
      }
      if (gender !== "") {
        mainSql +=
          " inner join entrepreneur_gender on company.entrepreneur_gender_id = entrepreneur_gender.id";
        sql += " and entrepreneur_gender_id=?";
        paramArray.push(gender);
      }
      if (investor !== "") {
        mainSql +=
          "  inner join episode_and_investors on company_stocks.company_id = episode_and_investors.company_id";
        sql += " and investor_id=?";
        paramArray.push(investor);
      }

      mainSql += sql;
      console.log("mainSql :", mainSql);

      let result = {};
      connection.query(mainSql, paramArray, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        result = results[0];
        console.log(result);
        res.status(201).send(results);
      });

      // connection.end();
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(404).send("send url in proer format");
  }
});

router.get("/companyDetails/", async (req, res) => {
  const company_id = req.query.companyid;
  if (true) {
    try {
      let sql = `select company_id,company_name,amount,equity,valuation,sharks_count,amount_per_shark,deal,season_id,episode_id from company_stocks\
      inner join company on company_stocks.company_id = company.id\ 
      inner join entrepreneur_gender on company.entrepreneur_gender_id = entrepreneur_gender.id\
      WHERE company_stocks.company_id=?`;
      let result = {};
      connection.query(sql, company_id, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log("results :", results);
        res.status(201).send(results);
      });

      // connection.end();
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(404).send("send url in proper format");
  }
});

router.get("/seasonlist/", async (req, res) => {
  if (true) {
    try {
      let sql = `SELECT id as value FROM season`;
      let result = {};
      connection.query(sql, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log("results :", results);
        res.status(201).send(results);
      });

      // connection.end();
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(404).send("send url in proper format");
  }
});

router.get("/genderlist/", async (req, res) => {
  if (true) {
    try {
      let sql = `SELECT id,type as value FROM entrepreneur_gender`;
      let result = {};
      connection.query(sql, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        // result = results[0];
        // console.log(result);
        console.log("results :", results);
        res.status(201).send(results);
      });

      // connection.end();
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(404).send("send url in proper format");
  }
});

router.get("/genderlist/", async (req, res) => {
  if (true) {
    try {
      let sql = `SELECT type as value FROM entrepreneur_gender`;
      let result = {};
      connection.query(sql, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        // result = results[0];
        // console.log(result);
        console.log("results :", results);
        res.status(201).send(results);
      });

      // connection.end();
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(404).send("send url in proper format");
  }
});

router.get("/episodelist/", async (req, res) => {
  const seasonNo = req.query.seasonNo;
  if (true) {
    try {
      let sql = `select episode_no as value from seasonandepisode where season_no = ?`;
      let result = {};
      connection.query(sql, [seasonNo], (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log("results :", results);
        res.status(201).send(results);
      });

      // connection.end();
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(404).send("send url in proper format");
  }
});

router.get("/investorlist", async (req, res) => {
  if (true) {
    try {
      let sql = `select id, name as value from investor`;
      let result = {};
      connection.query(sql, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log("results :", results);
        res.status(201).send(results);
      });

      // connection.end();
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(404).send("send url in proper format");
  }
});

module.exports = router;
