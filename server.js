const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// middlewares
const logger = require("./middlewares/logger");
const sessions = require("./middlewares/sessions");

// controllers
const placesController = require("./controllers/places_controller");
const usersController = require("./controllers/users_controller");
const sessionsController = require("./controllers/sessions_controller");

app.listen(port, () => console.log(`Server listening on ${port}`));

app.use(logger);
app.use(express.json());
app.use(sessions);

app.use("/api/allPlaces", placesController);
app.use("/api/users", usersController);
app.use("/api/sessions", sessionsController);

// Routes
app.get("/places", (req, res) => {
  // console.log(places)
  res.json({ places: places });
});

app.post("/places", (req, res) => {
  places = req.body.places;
  res.json({ places });
});

// Routes
app.get("/users", (req, res) => {
  // console.log(users)
  res.json({ users: users });
});

app.post("/users", (req, res) => {
  users = req.body.users;
  res.json({ users });
});

app.get("/googleMapsKey", (req, res) => {
  res.json(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
});

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}
