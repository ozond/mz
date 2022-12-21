const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".menu__link");
const html = document.querySelector("html");

function menuScr(){
    for(let i = 0; i < sections.length; i++){
        let s = sections[i].offsetTop;
        let h = sections[i].offsetHeight;

        //console.log(html.scrollTop);
        if(html.scrollTop + 400 >= s && html.scrollTop + 400 < (s + h)){
            links[i].style.fontWeight = 500;
        }else{
            links[i].style.fontWeight = 300;
        }
    }
}
if(window.innerWidth > 767.98){
    document.querySelector("body").onscroll = (event) => {
        menuScr();
    };
    menuScr();
}

//Smooth scroll
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
    
            // Store hash
            var hash = this.hash;
    
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        } // End if
    });
});