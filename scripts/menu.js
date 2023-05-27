var mainHeader = document.getElementById("mainHeader")
var mainBtn = document.getElementById("mainBtn")

function menuSwitch() {
    if (mainHeader.style.right === "0vw") {
        mainHeader.style.right = "-50vw"
        mainBtn.style.transform = "rotate(0deg)"
    } else {
        mainHeader.style.right = "0vw"
        mainBtn.style.transform = "rotate(90deg)"
    }
}