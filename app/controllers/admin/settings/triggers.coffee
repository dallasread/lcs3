Lively.Controllers["/admin/settings/triggers"] =
	before: ->
		Lively.find "trigger", { chatbox: Lively.Vars.chatbox_key }
	
	actions:
		create: ->
			Lively.create "trigger",
				delay: 1000
				active: false
				exclude: ""
				include: "*"
				message:
					body: ""