$('document').ready(function(){
	initializeImages();
	setInterval('rotateImages()', 4000);
   
});

function initializeImages(){
    
    // hide all imgs when page loads
    $('#photoShow img').css('opacity',0);
    
    // show only 1st img when page loads
    $('#photoShow img:first').css('opacity',1);
    
    // get dims of 1st img
  var firstImageWidth = $('#photoShow img:first').width();
  var firstImageHeight = $('#photoShow img:first').height();
    
    
    // set DIV dim to match 1st img
  $('#photoShow').width(firstImageWidth + 'px');
  $('#photoShow').height(firstImageHeight + 'px');

}   // end initializeImages

function rotateImages(){
	var currentPhoto = $('#photoShow img.current');
	var nextPhoto = currentPhoto.next();
	if(nextPhoto.length == 0){
		nextPhoto = $('#photoShow img:first');
        
}   // end if
    
	currentPhoto.removeClass('current').addClass('previous').animate({opacity:0});
    
    // dims of next img
  var newWidth = nextPhoto.width();
  var newHeight = nextPhoto.height();
    
    //animate container's dims
    $('#photoShow').animate({'width':newWidth, 'height':newHeight});
    nextPhoto.css({opacity:0.0}).addClass('current').animate({opacity:1.0}, 2000, function(){
	currentPhoto.removeClass('previous');
	}); // end callback
}   // end rotateImages
