Lively.Routes =
	"/chatbox":
		"/signin": true
		"/prompter": true
	"/install": true
	"/admin":
		"/visitors":
			"/:visitor_id": "visitor"
		"/agents": true
		"/upgrade": true
		"/setup": true
		"/settings":
			"/triggers": true
			"/canned": true
			"/introducers": true
			"/me": true