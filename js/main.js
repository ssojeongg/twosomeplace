// mobile menu 
{
  const navMenu = document.querySelector("nav");
  const open = document.querySelector("header .open");
  open.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
  })
}

// pc menu
{
  const navliMenu = document.querySelectorAll("nav>ul>li");
  console.log(navliMenu)
  const subMenu = document.querySelector("header .sub");
  navliMenu.forEach((element) => {
    element.addEventListener("mouseover",()=>{
      subMenu.classList.add('show')
    })
  })
  navliMenu.forEach((element) => {
    element.addEventListener("mouseleave",()=>{
      subMenu.classList.remove('show')
    })
  })
}

// top arrow button 
{
  const arrow = document.querySelector(".arrow");
    arrow.addEventListener("click", () => {
      gsap.to(window, .7,
        {scrollTo:0});
    });
}

// scroll-spy
{
const spyEls = document.querySelectorAll('.alist.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene ({
    triggerElement: spyEl,
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
})
}
// AOS scroll
{
  AOS.init({
    duration: 1200,
  })
}

