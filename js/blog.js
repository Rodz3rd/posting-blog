function postblog() {
	var title 		 = document.getElementById('title');
	var author 		 = document.getElementById('author');
	var content 	 = document.getElementById('content');

	var error_title 	  = document.getElementById('error-title');
	var error_author 	  = document.getElementById('error-author');
	var error_content 	  = document.getElementById('error-content');

	var is_complete = true;
	if ( title.value == "" ) {
		error_title.innerHTML = 'required *';
		is_complete = false;
	} else {
		error_title.innerHTML = "";
	}

	if ( author.value == "" ) {
		error_author.innerHTML = 'required *';
		is_complete = false;
	} else {
		error_author.innerHTML = "";
	}

	if ( content.value == "" ) {
		error_content.innerHTML = 'required *';
		is_complete = false;
	} else if ( content.value.length <= 100 ) {
		error_content.innerHTML = 'Blog content must have atleast 100 characters.';
		is_complete = false;
	} else {
		error_content.innerHTML = "";
	}

	if (is_complete) {
		var blog_section = document.getElementById('blog-section');
		var article =  "<article>"
					+		"<header>"
					+			"<hgroup>"
					+				"<h1>"+title.value+"</h1>"
					+			"</hgroup>"
					+		"</header>"
					+		"<p>"+content.value+"</p>"
					+		"<footer>- "+author.value+"</footer>"
					+	"</article>";

		title.value   = "";
		author.value  = ""
		content.value = "";
		blog_section.innerHTML += article;
	}

	return false;
}