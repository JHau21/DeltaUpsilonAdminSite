// This token function is for sync, I will leave this function in case I ever want to use sync
exports.handler = function (context, event, callback) {
	const { ACCOUNT_SID, SYNC_SERVICE_SID, API_SID, API_SECRET } = context;

	const IDENTITY = "handler";

	const access = Twilio.jwt.AccessToken;
	const syncGrant = access.SyncGrant;

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
		"Access-Control-Allow-Origin": "http://localhost:3000",
		"Access-Control-Allow-Methods": "GET",
		"Access-Control-Allow-Headers": "Content-Type",
	};

	response.setBody({ token: accessToken.toJwt(), status: 200 });
	response.setHeaders(headers);

	callback(null, response);
};
