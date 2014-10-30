Lively.Controllers["/admin/settings/canned"] =
	init: ->
		Lively.find "canned", { chatbox: Lively.Glob["chatbox"] }

	actions:
		create: ->
			Lively.create "canned",
				hash: ""
				message:
					body: ""