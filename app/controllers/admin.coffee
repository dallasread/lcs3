Lively.Controllers["/admin"] =
	init: ->
		Lively.find "chatbox", { id: Lively.glob["chatbox"] }, "settings"
		$("body").addClass "lcs-fixed"
		
	actions:
		closeAdmin: ->
			Lively.fetchPath "/"

		toggleStatus: ->
			$(".toggle_status").toggleClass "offline"
			$(".toggle_status").toggleClass "online"
		
		delete: (element, data) ->
			if confirm "Are you sure you want to delete this?"
				Lively.delete data