Lively.Controllers["/admin/agents"] =
	init: ->
		Lively.find "agent", { chatbox: Lively.Glob["chatbox"] }
	
	actions:
		create: ->
			Lively.create "agent",
				name: ""
				email: ""
				active: false
				online: false