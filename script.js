function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.jpeg")
  }

  // mudando o texto alternativo da imagem

  // pegar o texto da imagem
  const text = document.querySelector("#profile img")

  // substituir o texto da imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar o texto da imagem light
    text.setAttribute('alt', 'Imagem de Gabriel Augusto usando camiseta preta com parede azul e branca ao fundo')
  } else {
    // se tiver sem light mode, manter o texto da imagem normal
    text.setAttribute('alt')
  }
}