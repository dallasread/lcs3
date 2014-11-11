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
			, ->
				$(Lively.Config.container).find(".triggers tbody tr:visible:last input:visible, .triggers tbody tr:visible:last textarea:visible").first().focus()