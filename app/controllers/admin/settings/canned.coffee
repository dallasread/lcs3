Lively.Controllers["/admin/settings/canned"] =
	init: ->
		Lively.find "canned", { chatbox: Lively.glob["chatbox"] }
	actions:
		create: ->
			Lively.create "canned",
				hash: ""
				body: ""