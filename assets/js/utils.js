function imgSlider(img, nomeproduto, texto){
  const starbucks = document.querySelector('.starbucks');
  const descricao = document.querySelector('.descricao-produto');

  starbucks.style.transform = `translateX(${100 * 10}%)`;
  descricao.style.opacity = 0; /* Esconde a descrição */

  setTimeout(function() {
    starbucks.src = img;
    descricao.innerHTML = nomeproduto;
    descricao.innerHTML += texto;
    // Aplica a transição desejada
    starbucks.style.transform = 'translateX(0)';
    descricao.style.opacity = 1; /* Mostra a descrição */
  }, 300); /* Aguarda 300 milissegundos para aplicar a transição após esconder a descrição */
}

window.addEventListener('DOMContentLoaded', function () {
   
  // Esconde o preloader
document.getElementById('preloader').style.display = 'none';

});