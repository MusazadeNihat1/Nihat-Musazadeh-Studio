/*document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const contentDiv = document.getElementById('content');
    
    const updateContent = (tabId) => {
    switch (tabId) {
    case 'tab1':
    contentDiv.innerHTML = '<div class="abcd"> <h1>Salam ayeee<h1>';
    break;
    case 'tab2':
    contentDiv.innerHTML = '<p>Content for Tab 2</p>';
    break;
    case 'tab3':
    contentDiv.innerHTML = '<p>Content for Tab 3</p>';
    break;
    default:
    contentDiv.innerHTML = '<p>Select a tab to see the content.</p>';
    }
    };
    
    tabButtons.forEach(button => {
    button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    updateContent(tabId);
    });
    });
    
    // Check the URL parameter and update the content accordingly
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam) {
    updateContent(tabParam);
    }
    });
*/

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.service-info');
    const tabContents = document.querySelectorAll('.tab-content');

    const showContent = (tabId) => {
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === `${tabId}-content`) {
                content.classList.add('active');
            }
        });
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            showContent(tabId);
        });
    });

    // Check the URL parameter and update the content accordingly
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam) {
        showContent(tabParam);
    }
});

const accordions = document.querySelectorAll('.accordion');


// I will be creating a different pen with touch support but right // now I have no time for it due to school

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 2;
let next = 1;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 2 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  if (next == 3) {
    next = 0;
  }

  if (prev == -1) {
    prev = 2;
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
}