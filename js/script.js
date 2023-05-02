// menu-burger
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
// menu-burger

// ANCHORS 
const anchors = document.querySelectorAll(".arrow-down");

anchors.forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();

        const id = anchor.getAttribute("href");

        const elem = document.querySelector(id);

        window.scroll({
            top:  elem.offsetTop - 44,
            behavior: 'smooth'
        })
    });
});
// ANCHORS 