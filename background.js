function background() 
{
    var img = $(".boxes > img").each(function() { // for each img found
    var src = $(this).attr("src"); // get the src
    var path = src.substring(0,src.lastIndexOf('/')); // get the path from the src 
    var fileName = src.substring(src.lastIndexOf('/')); // and filename
    var newSrc = path + "/large" + fileName; // re-assemble    

    $(this).attr("src",newSrc);
  });
}

$(document).ready(background);
