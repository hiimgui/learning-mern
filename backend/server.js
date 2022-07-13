const express = require("express");
const app = express();
const workoutRoutes = require('./routes/workouts.js')

//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/workouts', workoutRoutes)
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
});


