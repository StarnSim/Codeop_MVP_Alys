var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//GET all hobbies
router.get("/", async function (req, res) {
  try {
    const allHobbies = await db("SELECT * FROM hobbies ORDER BY id ASC;");
    res.send(allHobbies.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Simone this next endpoint is no longer being used but was connecting my events and hobbies
//GET all events from one hobby category 
router.get("/:id", async function (req, res) {
  try {
    const hobbyCats = await db(
      "SELECT hobbies.*, events.event_name, events.event_description FROM hobbies LEFT JOIN events ON hobbies.id = events.hobby_id ORDER BY events.id;"
    );
    res.send(hobbyCats.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;


// router.get("/:id", async function (req, res) {
//   try {
//     const hobbyCats = await db(
//       "SELECT hobbies.*, events.event_name, event_description FROM hobbies LEFT JOIN events ON hobbies.id = events.hobby_id ORDER BY events.id;"
//     );
//     res.send(hobbyCats.data);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

