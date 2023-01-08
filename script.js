function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // Verifica se contém a classe light e altera seu valor;
  // Funciona da mesma forma que o if/else acima.
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar_light.png")
  } else {
    img.setAttribute("src", "./assets/avatar_dark.png")
  }
}
