const express = require("express");
const router = express.Router();

//models
const Place = require("../models/place");

// routes
router.get("/", (req, res) => {
  Place.findAll().then((allPlaces) => res.json(allPlaces));
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const img = req.body.img;
  const address = req.body.address;
  const userEmail = req.body.userEmail;

  Place.create(name, img, address, userEmail).then((place) => res.json(place));
});

router.delete("/:id", (req, res) => {
  const placeId = req.params.id;

  Place.delete(placeId).then(() =>
    res.json({ message: "deleted successfully" })
  );
});

module.exports = router;
