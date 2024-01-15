const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const ConnectDb = require("./config/db");
// const cors = require('cors');

//dotenv config-->Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
dotenv.config();

//mongoDb connection
ConnectDb();

//rest object
const app = express();

//middle wares start
//The app.use(express.json()) middleware in an Express.js application is used to parse incoming requests with JSON payloads. When a client sends data to the server using the HTTP POST request with a content type of "application/json," this middleware parses the JSON data in the request body and makes it available in the req.body object.
app.use(express.json());

//Morgan is a popular logging middleware for Node.js, and it provides a simple way to log information about HTTP requests and responses. The argument 'dev' specifies a pre-defined log format in which the logs are displayed in a concise, colorful manner, making it easy to read and understand during development.
//By adding this line to your Express application, you'll get detailed information about incoming HTTP requests and the corresponding responses, making it easier to debug and understand what is happening in your application during development. It's worth noting that in a production environment, you might want to use a more concise or customized log format for security and performance reasons.
app.use(morgan("dev"));
// app.use(cors());
//routes start
//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

//env-->environment variable -->humne jo niche line likhi hai uska matlb agar production pe koi port hoga to vo lelega otherwise vo 8080 lelega
const port = process.env.PORT || 8080;

//Listening to port
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgBlue.white
  );
});

