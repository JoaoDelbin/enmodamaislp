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