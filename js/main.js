$("#taskinput").keydown(function () {	if(event.keyCode == 13){		var thisContent = $(this).val();		$("#itembox").prepend("<div class='each_item'><input type='checkbox' class='checktodo hide' /><span class='todocontent' contenteditable='true'>"+thisContent+"</span><span class='cancel hide'>&#10006;</span></div>");		$(this).attr('value','');	}})