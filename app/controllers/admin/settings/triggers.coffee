Lively.Controllers["/admin/settings/triggers"] =
	init: ->
		Lively.find "trigger", { chatbox: Lively.Glob["chatbox"] }
	
	actions:
		create: ->
			Lively.create "trigger",
				delay: 1000
				active: false
				exclude: ""
				include: "*"
				message:
					body: ""