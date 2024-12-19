function playVideo() {
  const iframe = document.getElementById('video');
  const videoUrl = "https://www.youtube.com/embed/2-6pLqW8QGU?autoplay=1";
  iframe.src = videoUrl;
  iframe.style.display = 'block'; 
  document.querySelector('.video-thumbnail').style.display = 'none'; 
}
// 

function vermais() {
  const pontos = document.getElementById('pontos');
  const texto = document.getElementById('vermais');
  const btnvermais = document.getElementById('btn-vermais');

  if(pontos.style.display === 'none'){
    pontos.style.display = 'inline';
    texto.style.display = 'none';
    btnvermais.innerHTML = 'Leia Mais';
  } 
  else {
    pontos.style.display = 'none';
    texto.style.display = 'inline';
    btnvermais.innerHTML = 'Leia Menos';
  }
}

// 
// 
// 

function playVideo3() {
  const iframe = document.getElementById('video3');
  const videoUrl = "https://www.youtube.com/embed/2up7B0SClxI?autoplay=1";
  iframe.src = videoUrl;
  iframe.style.display = 'block'; 
  document.querySelector('.video-thumbnail3').style.display = 'none'; 
}

function playVideo4() {
  const iframe = document.getElementById('video4');
  const videoUrl = "https://www.youtube.com/embed/EO-fKonlCzQ?autoplay=1";
  iframe.src = videoUrl;
  iframe.style.display = 'block'; 
  document.querySelector('.video-thumbnail4').style.display = 'none'; 
}

function playVideo5() {
  const iframe = document.getElementById('video5');
  const videoUrl = "https://www.youtube.com/embed/g_NdJtW4Wpo?autoplay=1";
  iframe.src = videoUrl;
  iframe.style.display = 'block'; 
  document.querySelector('.video-thumbnail5').style.display = 'none'; 
}

// 
// 
// 
//  scroll metodo
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".metodo-item");

  const handleScroll = () => {
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;

    
      if (rect.top >= windowHeight * 0.15 && rect.bottom <= windowHeight * 0.60) {
        item.classList.add("box");
      } else {
        item.classList.remove("box");
      }
    });
  };

  
  window.addEventListener("scroll", handleScroll);

  
  handleScroll();
});
//  scroll p2
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".p2-item");

  const handleScroll = () => {
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;

    
      if (rect.top >= windowHeight * 0.05 && rect.bottom <= windowHeight * 0.80) {
        item.classList.add("box");
      } else {
        item.classList.remove("box");
      }
    });
  };

  
  window.addEventListener("scroll", handleScroll);

  
  handleScroll();
});
//  scroll aulas armario
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".capsula-item");

  const handleScroll = () => {
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;

    
      if (rect.top >= windowHeight * 0.35 && rect.bottom <= windowHeight * 0.60) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  
  window.addEventListener("scroll", handleScroll);

  
  handleScroll();
});
//  scroll aulas cor
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".cor-item");

  const handleScroll = () => {
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;

    
      if (rect.top >= windowHeight * 0.35 && rect.bottom <= windowHeight * 0.60) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  
  window.addEventListener("scroll", handleScroll);

  
  handleScroll();
});