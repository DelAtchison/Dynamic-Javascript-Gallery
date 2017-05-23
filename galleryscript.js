Gallery();

function Gallery() { //Everything goes in here to keep it tidy and avoid global variables messing up your day
    
/* This is the entire Gallery entry for the site, it's all in here. All of it. Really */
        var works = [

              { 'name' : "Bamboo",
             'tbimage' : "thumbnails/bambooleaf.jpg",
             'image' : "images/bambooleaf.jpg",
             'description' : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec porttitor tellus. Nullam ultrices sit amet sapien sit amet sagittis. Ut sit amet consectetur nulla, a euismod magna. Sed eget blandit turpis. Vivamus facilisis et lacus nec pharetra. Phasellus ligula erat, viverra ut dui at, mattis ultricies felis. Nullam nulla ex, vestibulum sit amet tortor id, luctus fringilla neque. Cras dignissim varius aliquam. Fusce congue lacus sed pulvinar finibus. Ut finibus ex id nunc tristique ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed feugiat eleifend risus, non dignissim massa vestibulum eu. ",
             'year' : "2012"
            },

              { 'name' : "Orange Sunsets",
             'tbimage' : "thumbnails/orange.jpg",
             'image' : "images/orange.jpg",
             'description' : "Sed lacinia condimentum tellus, condimentum fermentum nisl convallis vitae. Praesent auctor, nisl eget tempus laoreet, elit nunc feugiat metus, id mollis nibh ligula at turpis. Mauris in sagittis sem. Curabitur porttitor id justo a suscipit. Curabitur sit amet finibus metus. Nulla mollis pharetra diam, et vulputate purus. Sed rutrum at dolor nec rhoncus. Proin vehicula ipsum tortor, ac sodales leo viverra nec. Quisque egestas sagittis hendrerit. Duis pretium mi fringilla felis tristique, non porttitor risus pretium. Cras accumsan leo augue, sit amet maximus ex euismod sed. Maecenas vitae risus dui. Suspendisse sit amet consequat nulla, nec commodo felis. ",
             'year' : "2013" 
            },

             { 'name' : "Pool Floats",
             'tbimage' : "thumbnails/poolfloats.jpg",
             'image' : "images/poolfloats.jpg",
             'description' : "Nulla dignissim quis augue ut imperdiet. Ut eget cursus nulla. Sed ac hendrerit arcu, sit amet pretium justo. Cras vitae magna nec ligula blandit condimentum. Morbi porttitor, est quis egestas mollis, nunc justo accumsan lectus, id sollicitudin ipsum augue a turpis. Sed suscipit vulputate sagittis. Nunc ac rutrum erat. Integer nec velit mollis, dapibus mi nec, imperdiet arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam a mauris sed sem dignissim consectetur ac quis orci. Nulla faucibus elit vitae turpis vehicula, sit amet convallis magna hendrerit. ",
             'year' : "2014"
            },

            { 'name' : "Red Leaves",
             'tbimage' : "thumbnails/redleaf.jpg",
             'image' : "images/redleaf.jpg",
             'description' : "Vestibulum pretium mi ornare, posuere sem a, iaculis felis. Etiam accumsan tortor ut metus dignissim facilisis. Maecenas facilisis, tortor quis mollis viverra, ligula metus lacinia diam, vitae dapibus magna ligula vel arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras eget feugiat urna. Quisque fringilla tellus in magna lobortis consequat. Curabitur pharetra blandit convallis.",
             'year' : "2012"
            },

            { 'name' : "Sleeping Ducks",
             'tbimage' : "thumbnails/sleepingduckslie.jpg",
             'image' : "images/sleepingduckslie.jpg",
             'description' : "Quisque dictum, urna facilisis placerat egestas, sapien lacus volutpat arcu, ac molestie tellus ex in purus. Nulla lacinia semper ipsum, at vehicula nunc laoreet at. Vestibulum porta mi ac commodo tristique. Donec vitae quam dictum, semper nibh nec, porttitor metus. Sed condimentum, libero sed cursus euismod, eros diam tristique sapien, non imperdiet justo nisl non nisl. Curabitur ut mi vehicula, consequat eros quis, maximus diam. Praesent imperdiet sem a ex varius sagittis vitae ac felis. Fusce rutrum non quam at sollicitudin. Donec ultricies, neque non malesuada scelerisque, nunc ligula vestibulum ex, vitae gravida velit turpis nec ante. Phasellus gravida turpis non fermentum pharetra. Morbi eget luctus lorem. ",
             'year' : "2014"
            },

            { 'name' : "Succulent 2",
             'tbimage' : "thumbnails/succulent2_1920.jpg",
             'image' : "images/succulent2_1920.jpg",
             'description' : "Curabitur a justo ut nunc cursus sollicitudin ut ac ligula. Nullam fringilla in eros quis suscipit. Vestibulum a maximus lacus, a fermentum mi. Phasellus molestie dui in lectus pretium, non maximus diam dictum. Nunc dictum massa eget quam euismod, at facilisis urna finibus. Praesent ipsum turpis, dignissim nec erat at, varius auctor tortor. Maecenas maximus commodo enim ut iaculis. Nunc non mattis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisl elit, eleifend sed augue eget, sollicitudin pharetra ex. Maecenas suscipit ipsum sed nisi feugiat maximus. In hac habitasse platea dictumst. Praesent bibendum interdum metus a lacinia. Donec mollis dui non risus egestas aliquam. Nunc accumsan tempus justo, eu scelerisque orci porta ut. ",
             'year' : "2015"
            },

             { 'name' : "Winter Wonderland",
             'tbimage' : "thumbnails/winterwonderland4.jpg",
             'image' : "images/winterwonderland4.jpg",
             'description' : "Suspendisse potenti. Pellentesque vestibulum ullamcorper sapien vitae sodales. In in viverra leo. Quisque ultrices eros at lorem tristique condimentum. Praesent nulla lectus, accumsan eu rhoncus at, vestibulum eu diam. Suspendisse potenti. Pellentesque nec orci finibus, tempor leo ac, mattis odio. Aliquam quis orci maximus, euismod ex eget, dictum dui. Donec tristique, dui ac vehicula pellentesque, ipsum tellus viverra dui, egestas tincidunt nisi erat non metus. Praesent egestas dignissim consequat. Donec faucibus ex sit amet volutpat lobortis. Aliquam non purus fermentum, feugiat tortor et, sagittis lorem. ",
             'year' : "2013"
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