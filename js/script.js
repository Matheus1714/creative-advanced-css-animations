const contentElement = document.getElementById("content")

for (let project of projects) {
  const card = document.createElement("section")
  card.classList.add("card")

  const cardImg = document.createElement("img")
  cardImg.src = project.imgSrc
  cardImg.alt = project.description

  const cardTitle = document.createElement("h2")
  cardTitle.textContent = project.title

  const cardContent = document.createElement("p")
  cardContent.textContent = project.description

  const cardLink = document.createElement("a")
  cardLink.textContent = "Go To Project"
  cardLink.href = project.src
  cardLink.target = "_blank"

  card.appendChild(cardImg)
  card.appendChild(cardTitle)
  card.appendChild(cardContent)
  card.appendChild(cardLink)

  contentElement.appendChild(card)
}
