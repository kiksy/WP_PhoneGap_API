
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var id = getParameterByName('id');

Zepto(function($){
	$.ajax({
		  type: 'GET',
		  url: 'http://www.kieronhoward.co.uk/api/get_post/?post_id='+id,
		  data: { callback: 'callback' },
		  dataType: 'jsonp',
		  timeout: 5000,
		  context: $('body'),
		  success: function(data){
		      
		       var source   = $("#blog-template").html();
	           var template = Handlebars.compile(source);
	           var blogData = template(data);
	           $('#blog-data').html(blogData);	         
	           
	           window.localStorage.setItem("posts", data);	          
	 	      
		  },
		  error: function(xhr, type){
			  var data = window.localStorage.getItem("posts");
		  }
	});
});

