Lively.Controllers["/application"] =
	before: ->
		$("body").removeClass "lcs-fixed"

	actions:
		saveAttrs: (form) ->
			form.trigger "saveAttrs"