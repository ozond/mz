const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".menu__link");

window.addEventListener('scroll', menuScroll);
function menuScroll() {
	if (window.innerWidth >= 767.98) {
		for(let i = 0; i < sections.length; i++){
			const section = sections[i];
			const sectionHeight = section.offsetHeight;
			const sectionOffset = offset(section).top;
			const start = 4;

			let startPoint = window.innerHeight - sectionHeight / start;
			if (sectionHeight > window.innerHeight) {
				startPoint = window.innerHeight - window.innerHeight / start;
			}

			if ((scrollY > sectionOffset - startPoint) && scrollY < (sectionOffset + sectionHeight)) {
				links[i].classList.add('_active');
			}else{
				links[i].classList.remove('_active');
			}
		}
	}
}

function offset(el) {
	const rect = el.getBoundingClientRect(),
		scrollLeft = window.scrollX || document.documentElement.scrollLeft,
		scrollTop = window.scrollY || document.documentElement.scrollTop;
	return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}