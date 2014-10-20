Lively.Controllers["/admin"] =
	init: ->
		Lively.find "chatbox", { id: Lively.glob["chatbox"] }, "settings"
	actions: ->
		closeAdmin: ->
			Lively.fetchPath "/"