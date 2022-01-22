const sendMessage = () => {
	const twilio = require("twilio");

	const accountSID = "AC1adfb150e03ea43ec8984fea0e20b302";
	const authToken = "285a65baf0bdb66f71115aed62975094";

	const client = (accountSID, authToken);

	client.messages
		.create({
			body: "Hello!",
			to: "+13038594840",
			from: "+16075245881",
		})
		.then((message) => console.log(message.body));
};
