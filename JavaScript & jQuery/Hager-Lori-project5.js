$(document).ready(function(){			// initialize document or que functions
	displayFactsOnly();					// display only facts paragraph
	linkColors();						
});  
    
function displayFactsOnly() {						// function created for displayFactsOnly
	var factsOnly = $('p:not(:first)').hide();		// hide all paragraphs except the first one
}
    
function linkColors(){											// function created for linkColors
    $('#choices a').click(function(){                           // user clicks on anchor tag of a color in choices id 
        var linkColors = $(this).text();                        // returns text content matched to anchor tag that was clicked by user
        $('body').attr('class', linkColors);                    // changing attribute 'class' to function I named - linkColors
		$('p').hide();                                          // hides all paragraphs
        $('#' + linkColors).show();                             // shows text for color clicked per its id
        $('#choices a').removeClass('selectedColor');           // removes class that highlights current
        $(this).addClass('selectedColor');                      // adds a class back
		$('img').attr('src','images/' + linkColors + '.jpg').show();   // shows image for color clicked
        $('img').attr('title','sample of ' + linkColors);		       // shows title (tool tip) when cursor is on image
});
}  // end function 
        