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
  const videoUrl = "https://www.youtube.com/embed/NV4TId1dDec?autoplay=1";
  iframe.src = videoUrl;
  iframe.style.display = 'block'; 
  document.querySelector('.video-thumbnail3').style.display = 'none'; 
}

function playVideo4() {
  const iframe = document.getElementById('video4');
  const videoUrl = "https://www.youtube.com/embed/gP2gc39oPwM?autoplay=1";
  iframe.src = videoUrl;
  iframe.style.display = 'block'; 
  document.querySelector('.video-thumbnail4').style.display = 'none'; 
}

function playVideo5() {
  const iframe = document.getElementById('video5');
  const videoUrl = "https://www.youtube.com/embed/jfA-ZXq7RpM?autoplay=1";
  iframe.src = videoUrl;
  iframe.style.display = 'block'; 
  document.querySelector('.video-thumbnail5').style.display = 'none'; 
}
