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
		"/activate": true
		"/setup": true
		"/settings":
			"/triggers": true
			"/canned": true
			"/introducers": true
			"/me": true