Lively.customEvents = ->
	lcs = $(Lively.Config.container)
	
	lcs.on "keyup", ".has_moving_label input, .has_moving_label textarea", ->
		field = $(this).closest(".field")
		label = field.find(".moving_label")
		unless field.find(".field_error").length
			if $(this).val().length
				label.stop().fadeIn 150
			else
				label.stop().fadeOut 150

	lcs.on "click", ".signinout", ->
		if "me" of Lively.Vars
			Lively.Controllers["/application"].actions.signOut()
		else
			if Lively.currentPath.indexOf("signin") != -1
				Lively.fetchPath "/chatbox/register"
			else
				Lively.fetchPath "/chatbox/signin"
	
	lcs.on "click", ".show_more", ->
		$(this).closest(".rdr-template").find(".more").slideToggle()
		false