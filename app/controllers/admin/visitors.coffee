Lively.Controllers["/admin/visitors"] =
	before: ->
		Lively.find "visitor", { chatbox: Lively.Vars.chatbox_key }