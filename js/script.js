// fullscreen
$(window).resize(function(event){
	fullscreen();
});

function fullscreen() {
	var h=$(window).outerHeight();
	$('.fullscreen').css({
		height: h
	});
}
fullscreen();

// menu
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".menu__link");

window.addEventListener('scroll', menuScr);
function menuScr(){
    if(window.innerWidth >= 767.98){
        for(let i = 0; i < sections.length; i++){
            const sectionTop = sections[i].offsetTop;
            const sectionHeight = sections[i].offsetHeight;
            
            let startPoint = window.innerHeight / 2;
            if (scrollY + startPoint > sectionTop && scrollY + startPoint < (sectionTop + sectionHeight)) {
                links[i].style.fontWeight = 500;
            }else{
                links[i].style.fontWeight = 300;
            }
        }
    }
}
menuScr();

//pluses
const header = document.querySelector(".pluses__header");
const content = document.querySelector(".pluses__content");
const bottom = document.querySelector(".pluses__bottom");

const accs = document.querySelectorAll(".acc");
const values = [accs[0].innerHTML, accs[1].innerHTML, accs[2].innerHTML]
let executed = false;

window.addEventListener('scroll', floatingText);
function floatingText(){
    if(window.innerWidth >= 767.98){
        const plusesTop = sections[2].offsetTop;
        const plusesHeight = sections[2].offsetHeight;
        const headerHeight = header.offsetHeight + 160;
        const contentHeight = content.offsetHeight;
        
        let headerOffsetBottom = contentHeight - headerHeight + 60 + "px";
        let finishPoint = plusesTop + contentHeight;

        if (scrollY > plusesTop && scrollY < (plusesTop + plusesHeight)) {
            header.style.top = '';
            header.classList.add('pluses__header_fixed');

            if (scrollY > finishPoint - headerHeight){
                header.classList.remove('pluses__header_fixed');
                header.style.top = headerOffsetBottom;
                launchAcc();
            }
        }else{
            header.style.top = '';
            header.classList.remove('pluses__header_fixed');
        }
    }else{
        header.style.top = '';
        header.classList.remove('pluses__header_fixed');
    }
}

let acc = (i, j, value) => {
    if(j > value){
        return j;
    }else{
        accs[i].innerHTML = j;
        if(i == 0){
            return setTimeout(acc, 10, i, ++j, value);
        }
        if(i == 1){
            return setTimeout(acc, 10, i, j + 1000, value);
        }
        if(i == 2){
            return setTimeout(acc, 10, i, j + 2, value);
        }
    }
}
function launchAcc(){
    if (!executed){
        for(let i = 0; i < accs.length; i++){
            acc(i,0,values[i]);
        }
    }
    return executed = true;
}


//answers (spoilers)
$(document).ready(function() {
    $('.answers__title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

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