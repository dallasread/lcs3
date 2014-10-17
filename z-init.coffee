(($) ->
	# LCS.addStyleSheets = ->
	# 	$("head").append "<link rel=\"stylesheet\" type=\"text/css\" href=\"#{LCS.styleSheet}\">"
	# 
	# LCS.addStructure = ->
	# 	$(LCS.structure).appendTo "body"
	# 	LCS.structure = ""
	# 
	# LCS.install = ->
	# 	LCS.wrapper.addClass "installing"
	# 	LCS.installer.find("#install_field_token").val LCS.token
	# 	LCS.installer.show()
	# 	LCS.installer.find("#install_field_email").focus()
	# 
	# LCS.logout = ->
	# 	LCS.db.unauth()
	# 
	# LCS.start = ->
	# 	if LCS.user is null || typeof LCS.settings.admins[LCS.user.id] is null
	# 		LCS.wrapper.addClass "available"
	# 	else
	# 		# SHOULD REALLY JUST SHOW ICON IN BOTTOM RIGHT
	# 		LCS.setRoute "/admin/visitors"
	# 
	# LCS.init = ->
	# 	LCS.token = $("script[data-lively]").data("lively")
	# 	LCS.baseDB = new Firebase "https://lively-chat-support.firebaseio.com/"
	# 	LCS.db = LCS.baseDB.child LCS.token
  # 
	# 	LCS.addStyleSheets()
	# 	LCS.addStructure()
	# 	LCS.setVars()
	# 	
	# 	LCS.db.child("settings/agents").on "value", (snapshot) ->
	# 		LCS.agentCount = Object.keys(snapshot.val()).length if snapshot.val() isnt null
	# 	
	# 	LCS.db.child("settings").once "value", (snapshot) ->
	# 		LCS.wrapper.fadeIn()
	# 		
	# 		if snapshot.val() is null
	# 			LCS.install()
	# 		else
	# 			LCS.settings = snapshot.val()
	# 			LCS.start()
  # 
	# LCS.init()
) jQuery