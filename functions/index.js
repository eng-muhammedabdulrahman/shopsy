const functions = "firebase-functions";
const express = require("express");
const cors = require("cors");
const stripe = require("stripe");

// App config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

// Listen command
exports.api = functions.https.onRequest(app);

