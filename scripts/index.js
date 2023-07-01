let btn = document.querySelector('#btn')

btn.addEventListener('click', mudar)

function mudar() {
  let btn2 = document.querySelector('.circle')

  let fundo = document.querySelector('.principal')

  btn2.classList.toggle('mode')

  btn.classList.toggle('fundo')

  fundo.classList.toggle('fundo-image')

  document.body.classList.toggle('body')

  document.querySelector('.rodape').classList.toggle('rodape-color')
}