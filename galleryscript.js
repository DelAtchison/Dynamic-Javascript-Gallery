Gallery();

function Gallery() { //Everything goes in here to keep it tidy and avoid global variables messing up your day
    
/* This is the entire Gallery entry for the site, it's all in here. All of it. Really */
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
/* End of Gallery */
    
/* This bit puts the gallery images and info in the right places */
    
        var gallery = document.getElementById("gallery");
            for (var i = 0; i < works.length; i++) {
        var imageholder = document.createElement("div");
        var thumbnail = document.createElement("img");       
        var content = document.createElement("div");
        imageholder.className = "halfsize imageholder";
        thumbnail.className = "thumbnail clicker";
        thumbnail.style.backgroundImage='url('+works[i].tbimage+')';
        thumbnail.style.backgroundPosition='center';
        thumbnail.setAttribute('href', works[i].tbimage);
        thumbnail.setAttribute('content', works[i].tbimage);
                thumbnail.style.cssText += "background-repeat:no-repeat;background-size:cover;";
        thumbnail.setAttribute('data-worksnumber', +i); 
        content.className = "holdercontent a clicker";
        content.setAttribute('data-worksnumber', +i); 
        content.innerHTML = works[i].name ;
        imageholder.appendChild(content);
        imageholder.appendChild(thumbnail);
        gallery.appendChild(imageholder);
        gallery.style.opacity ="1";

                          };
    
/* This bit takes the relevant information associated with the image you clicked on, and puts it into a full page div so it looks like a cross between a lightbox and a 'new window' type effect */
    
        var imgpage = document.getElementById("imgpage");
        var thingamabob = document.getElementsByClassName('clicker');
        for (var i = 0; i < works.length*2; i++) { //listing 2 elements for each item doubles the number needed
                thingamabob[i].addEventListener('click',tester)
            };   
        function tester2(){alert(this.getAttribute("data-worksnumber"))};
        function tester(){
            //alert('works');
            
            if (!document.getElementById("full_image")) {   //if the divs for the full image view content DOESN'T exist, create them and add the data
                var imgpage = document.getElementById("imgpage");
                var thingamabob = document.getElementsByClassName('clicker');
                imgpage.style.cssText += "display:hidden;opacity:0;"; //not sure i need this but there used to be a fade in
                imgpage.style.cssText += "display:block;opacity:1";
                var containerstyle = document.getElementsByClassName("container")
                    for (i = 0; i < containerstyle.length; i++) {
                            containerstyle[i].style.cssText += "-webkit-filter:blur(3px);filter:blur(3px);"
                        };
                var fullimage = document.createElement("div");
                var workinfo = document.createElement("div");
                var titlebox = document.createElement("div");
                var datebox = document.createElement("div");
                var descriptionbox = document.createElement("div");
                var thumbnailimage = document.getElementById('thumbnail');        
                var contentnumber = this.getAttribute("data-worksnumber");
                fullimage.id = "full_image";
                imgpage.appendChild(fullimage);
                workinfo.className = "workinfo";
                imgpage.appendChild(workinfo);
                titlebox.id = "work_title";
                workinfo.appendChild(titlebox);
                datebox.id = "datebox";
                workinfo.appendChild(datebox);
                descriptionbox.id ="description";
                imgpage.appendChild(descriptionbox);
                fullimage.setAttribute('style' , 'background-image:url(\"'+ works[contentnumber].image + '\");'); 
                fullimage.setAttribute('data-worksnumber', +contentnumber);
                titlebox.innerHTML= works[contentnumber].name ;
                datebox.innerHTML= works[contentnumber].year;
                descriptionbox.innerHTML=works[contentnumber].description ;
                document.getElementsByTagName("body")[0].style.cssText += "overflow:hidden;";
            }
            else {                                       //if the divs that hold the full image view contend DOES exist, just edit the data in them
                var contentnumber2 = this.getAttribute("data-worksnumber");
                var imgpage = document.getElementById("imgpage");
                var fullimage = document.getElementById('full_image');
                var titlebox = document.getElementById("work_title");
                var datebox = document.getElementById("datebox");
                var descriptionbox = document.getElementById('description');

                imgpage.style.cssText += "display:hidden;opacity:0;"; //not sure i need this but there used to be a fade in
                imgpage.style.cssText += "display:block;opacity:1";
                fullimage.setAttribute('style' , 'background-image:url(\"'+ works[contentnumber2].image + '\");'); 
                fullimage.setAttribute('data-worksnumber', +contentnumber2);
                titlebox.innerHTML= works[contentnumber2].name ;
                datebox.innerHTML= works[contentnumber2].year;
                descriptionbox.innerHTML=works[contentnumber2].description ;
                document.getElementsByTagName("body")[0].style.cssText += "overflow:hidden;";
            };

/* This bit hides and/or removes all the divs and data and associated info so they can be replaced with the correct info again when you click on another gallery image */
    
        var closepage = document.getElementById('close');
        var closepage2 = document.getElementById('imgpage');
        var next_button = document.getElementById('next_button');
        var prev_button = document.getElementById('prev_button');
        closepage.addEventListener('click', hidethings);
        closepage2.addEventListener('click', hidethings);
        function hidethings(){
            var containerstyle = document.getElementsByClassName("container")
            for (i = 0; i < containerstyle.length; i++) {
                    containerstyle[i].style.cssText += "-webkit-filter:blur(0px);filter:blur(0px);"
                };
            var imgpage = document.getElementById("imgpage");
            var titlebox = document.getElementById("work_title");
            var fullimage = document.getElementById('full_image');
            var workinfo = document.getElementsByClassName('workinfo');
            var datebox = document.getElementById("datebox");
            var descriptionbox = document.getElementById('description');
            fullimage.setAttribute('style' , 'background-image:none'); 
            titlebox.innerHTML= " ";
            datebox.innerHTML= "";
            descriptionbox.innerHTML= "";
            titlebox.innerHTML="";
            document.getElementsByTagName("body")[0].style.cssText += "overflow:auto;";
            imgpage.style.cssText += "opacity:0;display:none;"; 
        };
    
      };  
    
/* Next and previous butons that find the current number of the content you're on and add or remove one from it to take you to the next or previous item in    the list, loops around if at the beginning or end of the list */
    
        next_button.addEventListener('click', next);
        function next(e){ 
            var currentnumber = document.getElementById('full_image').getAttribute("data-worksnumber");   
            currentnumber = parseInt(currentnumber, 10) + 1;
            currentnumber = currentnumber % works.length; // if we've gone too high, start from `0` again
            var fullimage = document.getElementById('full_image');
            var datebox = document.getElementById("datebox");
            var descriptionbox = document.getElementById('description');
            var titlebox = document.getElementById("work_title");
            fullimage.setAttribute('style' , 'background-image:url(\"'+ works[currentnumber].image + '\");'); 
            fullimage.setAttribute('data-worksnumber', +currentnumber);
            titlebox.innerHTML= works[currentnumber].name;
            datebox.innerHTML=works[currentnumber].year ;
            descriptionbox.innerHTML= works[currentnumber].description; 
            e.stopPropagation();
        };

        prev_button.addEventListener('click', prev);
        function prev(e){ 
            var currentnumber = document.getElementById('full_image').getAttribute("data-worksnumber");  
            if (currentnumber <= 0) { // i would become 0
                currentnumber = works.length; // so put it at the other end of the array
            };
            currentnumber = parseInt(currentnumber, 10) - 1;
            var fullimage = document.getElementById('full_image');
            var datebox = document.getElementById("datebox");
            var descriptionbox = document.getElementById('description');
            var titlebox = document.getElementById("work_title");
            fullimage.setAttribute('style' , 'background-image:url(\"'+ works[currentnumber].image + '\");'); 
            fullimage.setAttribute('data-worksnumber', +currentnumber);
            titlebox.innerHTML= works[currentnumber].name;
            datebox.innerHTML=works[currentnumber].year ;
            descriptionbox.innerHTML= works[currentnumber].description; 
            e.stopPropagation();
        };
    
};