exports.handler = function (context, event, callback) {
	// The pre-initialized Twilio Client is available from the `context` object
	const twiml = new Twilio.twiml.MessagingResponse();

	const reply = event.Body.toLowerCase();

	if (reply === "y") {
		twiml.message(
			"Thank you for confirming your attendance, Jack will be notified!"
		);
		twiml.message(
			{ to: "+13038594840" },
			`${event.From} will be attending.`
		);
	} else if (reply === "n") {
		twiml.message("Can you please tell me why you can't attend?");
	} else {
		twiml.message("Thank you, your message has been sent to Jack.");
		twiml.message(
			{ to: "+13038594840" },
			`${event.From} will not be attending, because ${event.Body}.`
		);
	}

	callback(null, twiml);
};
