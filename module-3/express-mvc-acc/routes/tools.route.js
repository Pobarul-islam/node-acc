const express = require("express");
const router = express.Router();

// router.get("/:id", (req, res) => {
//     res.send("tools found with id");

// })


// router.post("/tools", (req, res) => {
//     res.send("tool added");
// })


router
  .route("/")
  .get((req, res) => {
    res.send("tools found with id");
  })
  .post((req, res) => {
    res.send("tool added");
  });
    

module.exports = router;