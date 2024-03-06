var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var db = require("../model/helper");
var bcrypt = require("bcrypt");
const saltRounds = 10;
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");


const supersecret = process.env.SUPER_SECRET;

router.post("/saved_events", userShouldBeLoggedIn, async (req, res) => {
    try {
      const { event_id } = req.body;
      const  { user_id } = req;

      console.log(event_id, user_id);
      // save the event for the user in database
      await db(
        `INSERT INTO user_faves (user_id, event_id) VALUES (${user_id}, ${event_id});`
      );
  
      res.status(200).send({ message: "Event saved successfully" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

  router.get("/saved_events", userShouldBeLoggedIn, async (req, res) => {
    try {
      
      const  { user_id } = req;
      // Fetch the user's favorite events with details from the events table
      const favoriteEvents = await db(`
        SELECT * FROM user_faves INNER JOIN events ON user_faves.event_id = events.id WHERE user_faves.user_id = ${user_id};
      `);
  
      const responseData = {
        message: `Here are the favorite events for user ${user_id}`,
        favoriteEvents: favoriteEvents.data,
      };
  
      console.log(responseData); 
  
      res.send(responseData);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });
  router.delete("/saved_events/:event_id", userShouldBeLoggedIn, async (req, res) => {
    try {
      const { event_id } = req.params;
      const { user_id } = req;
  
    
      // Delete the saved event for the user in the database
      await db(`DELETE FROM user_faves WHERE user_id = ${user_id} AND event_id = ${event_id};`);
  
      res.status(200).send({ message: "Event deleted successfully" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });
  


  module.exports = router;

  // router.get("/", userShouldBeLoggedIn, async (req, res) => {
  //   try {
  //     const user_id = req.user_id;
  
  //     // Fetch the user's favorite events from the database
  //     const favoriteEvents = await db(
  //       `SELECT * FROM user_faves WHERE user_id = ${user_id}`
  //     );
  
  //     res.send({
  //       message: `Here are the favorite events for user ${user_id}`,
  //       favoriteEvents: favoriteEvents.data,
  //     });
  //   } catch (err) {
  //     res.status(500).send({ message: err.message });
  //   }
  // });
  
  // module.exports = router;