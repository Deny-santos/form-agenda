const bars = document.querySelector(".bars")
const ul = document.querySelector("ul")

bars.onclick = () => {
    ul.classList.toggle("visible")
}