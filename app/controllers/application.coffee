Lively.Controllers["/application"] =
	init: ->
		$("body").removeClass "lcs-fixed"

	actions:
		saveAttrs: (form) ->
			form.trigger "saveAttrs"