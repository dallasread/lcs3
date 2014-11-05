Lively.Routes =
	"/install": true
	"/prompter": true
	"/chatbox":
		"/signin": true
		"/register": true
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