Lively.Controllers["/admin/agents"] =
	before: ->
		Lively.find "agent", { chatbox: Lively.Glob["chatbox"] }
	
	actions:
		create: ->
			Lively.create "agent",
				name: ""
				email: ""
				active: false
				online: false