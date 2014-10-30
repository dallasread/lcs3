Lively.Controllers["/admin"] =
	init: ->
		$("body").addClass "lcs-fixed"
		Lively.find "chatbox", { id: Lively.Glob["chatbox"] }, "settings"
		
	actions:
		closeAdmin: ->
			Lively.fetchPath "/"

		toggleStatus: ->
			$(".toggle_status").toggleClass "offline"
			$(".toggle_status").toggleClass "online"
		
		delete: (element, data) ->
			if confirm "Are you sure you want to delete this?"
				Lively.delete data