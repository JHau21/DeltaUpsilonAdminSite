exports.handler = function (context, event, callback) {
	const { ACCOUNT_SID, SYNC_SERVICE_SID, API_SID, API_SECRET } = context;

	const IDENTITY = "handler";

	const access = Twilio.jwt.AccessToken;
	const syncGrant = access.syncGrant;

	const grant = new syncGrant({
		serviceSid: SYNC_SERVICE_SID,
	});

	const accessToken = new access(ACCOUNT_SID, API_SID, API_SECRET);

	accessToken.addGrant(grant);
	accessToken.identity = IDENTITY;

	const response = new Twilio.Response();

	const headers = {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Origin": "GET",
		"Access-Control-Allow-Origin": "Content-Type",
	};

	response.setBody({ token: accessToken.toJwt() });
	response.setHeader(headers);

	callback(null, response);
};
