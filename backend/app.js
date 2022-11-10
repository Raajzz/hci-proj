const express = require("express")
const app = express()
const errorHandlerMiddleWare = require("./middleware/errorHandler");
const routeNotFound = require("./middleware/routeNotFound");
const mongooseConnect = require("./config/databaseConnect");
const userRoutes = require("./routes/userRoutes")
const checkerRoutes = require("./routes/checkerRoutes")
require("dotenv").config({
  path: ".env"
})

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/checker", checkerRoutes);

app.use(routeNotFound);
app.use(errorHandlerMiddleWare);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await mongooseConnect(process.env.MONGO_LOCAL_URI);
    app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();