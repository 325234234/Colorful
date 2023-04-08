const colors = [
    document.getElementById("color1"),
    document.getElementById("color2"),
    document.getElementById("color3"),
    document.getElementById("color4"),
    document.getElementById("color5")
]
const colorLabels = [
    document.getElementById("label1"),
    document.getElementById("label2"),
    document.getElementById("label3"),
    document.getElementById("label4"),
    document.getElementById("label5")
]
const schemeMenu = document.getElementById("colorschemes")
const colorPicker = document.getElementById("colorpicker")

document.getElementById("colorpicker").addEventListener("change", updateColors)
document.getElementById("colorschemes").addEventListener("change", updateColors)

function updateColors() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.substring(1)}&mode=${schemeMenu.value}&count=5`)
        .then(resp => resp.json())
        .then(data => renderColors(data))
}

function renderColors(data) {
    for (let i=0; i<5; i++) {
        colors[i].style.backgroundColor = data.colors[i].hex.value
        colorLabels[i].innerText = data.colors[i].hex.value
    }
}