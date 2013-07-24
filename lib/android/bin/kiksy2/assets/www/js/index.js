Zepto(function($){
	$.ajax({
		  type: 'GET',
		  url: 'http://www.kieronhoward.co.uk/api/get_recent_posts/',
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

