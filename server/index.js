const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

const client = (accountSID, authToken);

const app = express();

app.use(cors()); // removes browser http/https restriction

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/send_message", (req, res) => {
	const { recipient, message } = req.query;

	console.log(recipient, message);

	client.messages
		.create({
			body: message,
			to: recipient,
			from: "+16075245881",
		})
		.then((message) => console.log(message.body));

	res.json({ respone: "Thank you for sending that message!" });
});

app.listen(4000, () => console.log("Running on port 4000..."));
