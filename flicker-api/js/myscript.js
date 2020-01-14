function jsonFlickrFeed(data) {
	console.log(data);
	document.writeln(data.title);
	
	var output = '';
	for (var i=0; i < data.items.length; i++){
		var title = data.items[i].title;
		var link = data.items[i].media.m.substring(0, 56);
		
		output += '<img src="' + link + '_m.jpg" alt="' + title + '" />';
	}
			
	$('#photolist').html(output);

}
	
