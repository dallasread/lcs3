Lively.Controllers["/admin"] =
	vars: {}
	init: ->
		$("body").css "overflow", "hidden"
		# alert "from admin ctlr."
	actions: ->
		closeAdmin: ->
			Lively.fetchPath "/"