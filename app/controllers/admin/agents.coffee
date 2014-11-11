Lively.Controllers["/admin/agents"] =
	before: ->
		Lively.find "agent", { chatbox: Lively.Vars.chatbox_key }
	
	actions:
		create: ->
			Lively.create "agent",
				name: ""
				email: ""
				online: false