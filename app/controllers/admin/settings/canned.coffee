Lively.Controllers["/admin/settings/canned"] =
	init: ->
		Lively.find "canned", { chatbox: Lively.glob["chatbox"] }
	actions:
		new: ->
			alert "canned new"
		create: ->
			canned =
				id: "awesome"
				body: "What an awesome thing!"
			Lively.DS.create "canned", canned
			alert "canned created"
		delete: ->
			alert "canned deleted"
	# SET BY EXTENSION
	# before: ->
	# 	SHOW LOADING
	# after: ->
	# 	HIDE LOADING
	# 	START LISTENING TO NEWLY PLACED MODELS (attrs, loops, values)
		