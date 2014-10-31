Lively.Controllers["/admin"] =
	before: ->
		$("body").addClass "lcs-fixed"
		Lively.find "agent", { chatbox: Lively.Vars.chatbox_key }
	
	after: ->
		if Lively.Vars["agents"][Lively.Vars.currentUserKey]["online"]
			$(".toggle_status").removeClass("offline").addClass("online")
		
	actions:
		closeAdmin: ->
			Lively.fetchPath "/"

		toggleStatus: ->
			$(".toggle_status").toggleClass("offline").toggleClass("online")
			Lively.update "/agents/#{Lively.Vars.currentUserKey}/online", $(".toggle_status").hasClass("online")
		
		delete: (element, data) ->
			if confirm "Are you sure you want to delete this?"
				Lively.delete data._path