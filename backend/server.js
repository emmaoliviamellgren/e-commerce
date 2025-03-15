const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3333;
const MONGOURI = process.env.MONGO_URI;

const mongoose = require("mongoose");

mongoose
	.connect(MONGOURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		serverSelectionTimeoutMS: 30000,
		socketTimeoutMS: 60000,
		keepAlive: true,
	})
	.then(() => {
		console.log("Successfully connected to MongoDB!");
		app.listen(PORT, () =>
			console.log("Server is running on: http://localhost:" + PORT)
		);
	})
	.catch((error) => console.log("Could not connect to MongoDB: " + error));
