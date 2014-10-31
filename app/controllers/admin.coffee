Lively.Controllers["/admin"] =
	before: ->
		$("body").addClass "lcs-fixed"
		Lively.find "chatbox", { key: Lively.Glob["chatbox"] }, "settings"
		
	actions:
		closeAdmin: ->
			Lively.fetchPath "/"

		toggleStatus: ->
			$(".toggle_status").toggleClass "offline"
			$(".toggle_status").toggleClass "online"
		
		delete: (element, data) ->
			if confirm "Are you sure you want to delete this?"
				Lively.delete data._path