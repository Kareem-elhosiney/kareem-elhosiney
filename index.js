let nav=document.getElementById("navbar")
const navLinksall = document.querySelectorAll("a");

function show(){
    nav.style.transform="translateX(0)"
}

function hide(){
  nav.style.removeProperty("transform");
}

var typed = new Typed("#job", {
strings: ["FullStack Develober"],
typeSpeed: 100,
backSpeed: 50,
loop: true,
cursorChar:"|",
});



///////////////////////////////////////////////////////////////////////////////



const mq = window.matchMedia("(max-width: 600px)");

function handleScreenChange(e) {
  if (e.matches) {
    // الشاشة دلوقتي أقل من 600px
    navLinksall.forEach(link => {
      link.addEventListener('click', () => {
        nav.style.transform = "translateX(110%)";

        setTimeout(() => {
          nav.style.removeProperty("transform");
        }, 50);
      });
    });
  }
}

// شغّل الدالة مرة أول ما الصفحة تفتح
handleScreenChange(mq);

// اسمع لأي تغيير في حجم الشاشة
mq.addEventListener("change", handleScreenChange);






///////////////////////////////////////////////////////////////




//بينزل المحتوي تحت الهيدر عشان الهيدر واخد position:fixed 
navLinksall.forEach(link => {
  link.addEventListener("click", (e) => {

    const href = link.getAttribute("href");                   //////////////////
    // لو اللينك خارجي (يبدأ بـ http أو https) ما تمنعوش  ////////////////
    if (href.startsWith("http")) return;                     /////////////

    e.preventDefault(); // يمنع السلوك العادي
    const targetId = link.getAttribute("href").substring(1); // يشيل الـ #
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const offset = targetSection.offsetTop - (window.innerHeight * 0.15);
      window.scrollTo({
        top: offset,
        behavior: "smooth" // يعمل سكرول ناعم
      });
    }
  });
});




///////////////////////////////////////////////////////////////////////




// تفعيل اللينك بتاع السكشن اللي ظاهر
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".links a");

window.addEventListener("scroll", () => {
  let current = "";
  const headerHeight = document.querySelector("header").offsetHeight;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerHeight;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});




/////////////////////////////////////////////////////////////





  const boxes = document.querySelectorAll('[name="animation"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.3 });

  boxes.forEach(box => observer.observe(box));



  ////////////////////////////////////////////////////////



  function showCv(){
    open("cv.html")
  }
  

////////////////////////////////////////////////////////////////////


const bars = document.querySelectorAll('[name="progress"]');

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // اقرأ العرض النهائي من الـCSS
      const finalWidth = getComputedStyle(entry.target).getPropertyValue('--progress') || '100%';
      entry.target.style.width = finalWidth;
    } else {
      entry.target.style.width = '0';
    }
  });
}, { threshold: 0.3 });

bars.forEach(bar => observer2.observe(bar));



//////////////////////////////////////////////////////////////

let index = 0;
function nextSlide(){
    const slider = document.getElementById("slider");
    const cards = document.querySelectorAll(".project-card");
    const visibleCards = window.innerWidth <= 768 ? 1 : 3;

    if(index < cards.length - visibleCards){
        index++;
        slider.style.transform = `translateX(-${index * (cards[0].offsetWidth + 30)}px)`;
    }
}
function prevSlide(){
    const slider = document.getElementById("slider");
    const cards = document.querySelectorAll(".project-card");

    if(index > 0){
        index--;
        slider.style.transform = `translateX(-${index * (cards[0].offsetWidth + 30)}px)`;
    }
}



///////////////////////////////////////////////////////

















document.getElementById("ff").addEventListener("submit", function(e) {
  e.preventDefault(); // يمنع الريلود

  // هنا ممكن تحط كود الإرسال الحقيقي لو بتبعت بيانات للسيرفر

  // بعد الإرسال
  document.getElementById("successMessage").style.display = "block";

  // تمسح بيانات الفورم
  this.reset();

  // تخفي الرسالة بعد وقت معين (اختياري)
  setTimeout(() => {
    document.getElementById("successMessage").style.display = "none";
  }, 4000);
});

///////////////////////////////////////////////////////////



const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll("img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function updateSlider() {
  const slideWidth = slider.clientWidth;  // عرض الصورة = عرض container
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  prevBtn.style.display="block"
  if (currentIndex >= slides.length) currentIndex = slides.length - 1

  if(currentIndex==slides.length-1) nextBtn.style.display="none";

  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  nextBtn.style.display="block"
  if(currentIndex==0) prevBtn.style.display="none"
  if (currentIndex < 0) currentIndex = 0;
  updateSlider();
});

updateSlider();
prevBtn.style.display="none"

