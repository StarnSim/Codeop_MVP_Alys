var express = require("express");
var router = express.Router();
const db = require("../model/helper");

    //GET all event results
    router.get("/", async function (req, res, next) {
      try {
        const {
          event_location,
          event_date,
          event_time,
          skill_level,
          equip_needed,
          hobby_id,
          event_price,
          event_description,
        } = req.query;
    
        // generate a dynamic query based on the query string (if the fields are present)
        let query = `SELECT * FROM events WHERE 1=1`;
        if (event_location) query += ` AND event_location LIKE "%${event_location}%"`;
        if (event_date) query += ` AND event_date = "${event_date}"`;
        if (event_time) query += ` AND event_time = "${event_time}"`;
        if (skill_level) query += ` AND skill_level = "${skill_level}"`;
        if (equip_needed) query += ` AND equip_needed = ${equip_needed}`;
        if (hobby_id) query += ` AND hobby_id = ${hobby_id}`;
        if (event_price) query += ` AND event_price BETWEEN 0 AND ${event_price}`;
        if (event_description) query += ` AND event_description LIKE "%${event_description}%"`;
        
    
        const searchResult = await db(query);
        //want to add price in BETWEEN once i've sorted the form out
        res.send(searchResult.data);
      } catch (err) {
        res.status(500).send(err);
      }
    });
  //POST create new event
  router.post("/", async function(req, res) {
    try{
        const { event_name,
            event_location,
            event_description,
            skill_level,
            hobby_id,
            equip_needed,
            event_price,
           } = req.body;

           const {user_id} = req;
            await db(
              `INSERT INTO events (event_name, event_location, event_description, skill_level, hobby_id, equip_needed, event_price) VALUES ("${event_name}", "${event_location}", "${event_description}", "${skill_level}", ${hobby_id}, ${equip_needed}, ${event_price});`
              );
    res.status(201).send({ message: "Event was inserted" });
} catch (err) {
  res.status(500).send(err);
  }
});

module.exports = router;

// Select * from events WHERE user Id = 1