        var works = [
        
          { 'name' : "Sassy Birds Series",
         'tbimage' : "thumbnails/sassybirbthumb.jpg",
         'image' : "images/sassybirdspart1.jpg",
         'description' : "A fun design project for my Redbubble store featuring some beloved garden birds. The series is planned to consist of 5 sassy birds, 2 of which are currently completed at present. Each image started off from traditional sketches and were completed in Photoshop as opposed to Illustrator to maintain the hand drawn but polished feel.",
         'year' : "February 2017 - Ongoing"
        },
        
          { 'name' : "Rebecca Young",
         'tbimage' : "thumbnails/RebeccaLogo.jpg",
         'image' : "images/RebeccaLogo.jpg",
         'description' : "A logo design created for a film maker and photographer created using a mix of traditional and digital media. The client wasn't initially sure what she wanted but after some discussion on her values and what she wanted to project with the logo, I was able to come up with an idea that met her requirements  (including her name, elements of nature and the colour green) while matching the visual style she wanted. Her portfolio is currently under construction but is availble "+ '<a href="http://www.rebecca-young.co.uk">here.</a>',
         'year' : "July 2016" 
        },
                   
         { 'name' : "Anthology of Lilys'",
         'tbimage' : "thumbnails/WebsiteDisplaythumb.jpg",
         'image' : "images/WebsiteDisplay.jpg",
         'description' : "A custom website portfolio build for a client who wanted a place to display their writing. The brief was to create a simple working portfolio to display poetry and short pieces of literature in a clean space with little to distract from the written content. The client also requested two accessibility features - the ability to enlarge and shrink the size of the text, and the ability to switch to white text on black. These were implemented using Javascript and Jquery. The site was build using Skeleton and SASS and includes a drop down menu and a javascript based system that allows the individual pieces to exist in their own page and pulled into others as required. This site should go live by July 2016.",
         'year' : "June 2016"
        },
        
        { 'name' : "Tiny Planets",
         'tbimage' : "thumbnails/nothersunset2.jpg",
         'image' : "images/nothersunset2.jpg",
         'description' : "One of latest in a series of panorama edits that started as a first year digital imaging project. I've continued to create them over the years and enjoy finding new locations to work with, especially the Northern Irish north coast. To see the rest of this series " + '<a href="tiny_planet_gallery.html">click here.</a>',
         'year' : "2015"
        },
        
        { 'name' : "Multifaceted",
         'tbimage' : "thumbnails/crystalredweb.png",
         'image' : "images/crystalredwebwhite.jpg",
         'description' : "Personal rebranding project. I wanted a logo that stood out while reflecting my personal values in some way. The result was Multifaceted Design, reprepresented through a vibrant crystal design. As a creative I have many aspects to them, as does my work wherever possible, and I try to incorporate a vibrant range of eye catching colours in my work as well. I used colours picked from this to use in this very portfolio.",
         'year' : "April 2016"
        },
        
        { 'name' : "NavSync",
         'tbimage' : "thumbnails/syncplain.png",
         'image' : "images/syncplain.jpg",
         'description' : "An illustration created using Adobe Illustrator, for a jQuery Plugin that helps with navigation on a webpage. The initial brief was 'buttery smooth 60fps' however when suggested during inital stages of the project, the client prefered a play on words around the name. This resulted in the above design of navigation of a ships wheel and a sink. The client asked for seperate svg vector files so they could animate it on their site, as "+ '<a href="http://ryanpark.co.uk/navsync/">seen here.</a>',
         'year' : "December 2015"
        },
        
         { 'name' : "ReGlitch",
         'tbimage' : "thumbnails/ReGlitch6colour1.jpg",
         'image' : "images/ReGlitch6colour.jpg",
         'description' : "A custom digital painting of a clients World of Warcraft character. <br>This particular piece took around three weeks to complete in total and had a lot of challenging textures, intricate details and reflected light sources that I wanted to include without muddying the overall appearance of the painting. The final image was my largest painting at over 6500 pixels across.",
         'year' : "October 2015"
        },
        
        { 'name' : "Stars",
         'tbimage' : "thumbnails/typography.jpg",
         'image' : "images/marilyn.png",
         'description' : "A typography piece created in Adobe Illustrator using a Marilyn Monroe quote to practice and further develop my skills using the software, and with typography in general.",
         'year' : "August 2015"
        },
        
        { 'name' : "Agent Of Agency",
         'tbimage' : "images/agentofagencycover.jpg",
         'image' : "images/agentofagencycover.jpg",
         'description' : "A mock up of PC Game box art for my final year project Agent of Agency, a game that was built on the research and theory of my written dissertation. On the whole that project involved coding, character design, artwork, animation and story writing. " + '<a href="agentofagency.html">More information on this project here.</a>',
       'year' : "March 2015"
        },
        
        { 'name' : "St. Columb's Park House",
         'tbimage' : "thumbnails/StColumbslogo.png",
         'image' : "images/StColumbslogo2.png",
         'description' : "A logo designed as part of a rebranding project for St. Columb's Park House in Derry/Londonderry as part of a final year group project. The concept was a medley of ideas that myself and the rest of the group that met the brief and the final design was illustrated by me. The House wanted a logo that would appeal to a younger demographic and represent more of the visitors to the park. This design was decided upon as the swings represented the two childrens parks, the dog represented all the dog walkers that used the park for leisure, St. Columb represented the heritage of the house and the oak tree represented the oak trees the park and Derry/Londonderry is well known for.",
         'year' : "February 2015"
        },
        
        
    ];
    
    var gallery = document.getElementById("gallery");
    
    function showGallery() {
            for (var i = 0; i < works.length; i++) {
        var imageholder = document.createElement("div");
        var thumbnail = document.createElement("img");       
        var content = document.createElement("div");
        imageholder.className = "six columns imageholder";
        thumbnail.className = "thumbnail";
        thumbnail.style.backgroundImage='url('+works[i].tbimage+')';
        thumbnail.style.backgroundPosition='center';
        thumbnail.setAttribute('href', works[i].tbimage);
        thumbnail.setAttribute('content', works[i].tbimage);
        thumbnail.setAttribute('data-worksnumber', i); 
        content.className = "holdercontent a";
        content.setAttribute('data-worksnumber', i); 
        content.innerHTML = works[i].name ;
        imageholder.appendChild(content);
        imageholder.appendChild(thumbnail);
        gallery.appendChild(imageholder);

                          };
                        };
    
    showGallery();

function trygallery (){
//$(document).ready(function(){
  var imgpage = document.getElementById("imgpage")
    $(".thumbnail, .holdercontent").click(function(){
        var THISNUMBERBETTERWORK = $(this).data("worksnumber");
        imgpage.style.cssText += "display:block;opacity:0;";
        //$(imgpage).fadeIn(250).css({"opacity":1}); 150;
        imgpage.style.cssText += "opacity:1";
        var containerstyle = document.getElementsByClassName("container")
        var i;
            for (i = 0; i < containerstyle.length; i++) {
                containerstyle[i].style.cssText += "-webkit-filter:blur(3px);filter:blur(3px);"
            };
    var fullimage = document.createElement("div");
        fullimage.className = "full_image";
        imgpage.appendChild(fullimage);
    var workinfo = document.createElement("div");
        workinfo.className = "workinfo";
        imgpage.appendChild(workinfo);
    var titlebox = document.createElement("div");
        titlebox.className = "work_title";
        workinfo.appendChild(titlebox);
    var datebox = document.createElement("div");
        datebox.className = "datebox";
        workinfo.appendChild(datebox);
    var descriptionbox = document.createElement("div");
        descriptionbox.className ="description";
        imgpage.appendChild(descriptionbox);
    var thumbnailimage = document.getElementById('thumbnail');
    var blaaaaaa = $(this).data("worksnumber");
        fullimage.setAttribute('style' , 'background-image:url(\"'+ works[blaaaaaa].image + '\");');
        titlebox.innerHTML= works[blaaaaaa].name ;
        datebox.innerHTML= works[blaaaaaa].year;
        descriptionbox.innerHTML=works[blaaaaaa].description ;
        document.getElementsByTagName("body")[0].style.cssText += "overflow:hidden;";
       // $(".headernav").css('display','none');
        //console.log(THISNUMBERBETTERWORK);
 
    }); };//); };

trygallery();     
    
    
function showgallery2(){
$(document).ready(function(){	
setTimeout(function(){ 
	$("#gallery")
		.fadeIn(100) 
        .css({"opacity":1});},500);


});
};
showgallery2();
$(".container").css("display", "block");


$(function(){
    var divs = $(".imageholder");
        if ($(window).width() > 960)  {
            for(var i = 0; i < divs.length; i+=2) {
            divs.slice(i, i+2).wrapAll("<div class ='band' />");
                };                  
            }
            else {
            for(var i = 0; i < divs.length; i+=1) {
            divs.slice(i, i+1).wrapAll("<div class ='band' />");
                               };
            }
});
  
    

    
$(document).ready(function(){
    $("#imgpage, .close" ).not('#next_button').click(function(){
    $(imgpage).css('opacity','0').fadeOut(500);
        $("#imgpage").css('display','none');
        $(".container").css('-webkit-filter','blur(0px)');
        $(".container").css('filter','blur(0px)');
        $('.full_image').remove();
        $('.workinfo').remove();
        $('.description').remove();
        $("body").css('overflow','auto');
        $(".headernav").css('display','block');
    });
     $("#next_button").click(function(e) {
        e.stopPropagation();
          });
    $("#prev_button").click(function(e) {
        e.stopPropagation();
          });
});
    
