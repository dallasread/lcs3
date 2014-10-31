Lively.Controllers["/admin/settings/canned"] =
	before: ->
		Lively.find "canned", { chatbox: Lively.Vars.chatbox_key }

	actions:
		create: ->
			Lively.create "canned",
				hash: ""
				message:
					body: ""