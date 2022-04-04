const $stoneButtonP1 = document.querySelector(".button-stone-p1")
const $paperButtonP1 = document.querySelector(".button-paper-p1")
const $scissorsButtonP1 = document.querySelector(".button-scissors-p1")

const $stoneButtonP2 = document.querySelector(".button-stone-p2")
const $paperButtonP2 = document.querySelector(".button-paper-p2")
const $scissorsButtonP2 = document.querySelector(".button-scissors-p2")

const $fieldP1 = document.querySelector(".field-p1")
const $fieldP2 = document.querySelector(".field-p2")

$stoneButtonP1.addEventListener("click", function () {
    $fieldP1.innerHTML = '<img class="move-img" src="stone.png">'
})

$paperButtonP1.addEventListener("click", function () {
    $fieldP1.innerHTML = '<img class="move-img" src="paper.png">'
})

$scissorsButtonP1.addEventListener("click", function () {
    $fieldP1.innerHTML = '<img class="move-img" src="scissors.png">'
})


$stoneButtonP2.addEventListener("click", function () {
    $fieldP2.innerHTML = '<img class="move-img" src="stone.png">'
})

$paperButtonP2.addEventListener("click", function () {
    $fieldP2.innerHTML = '<img class="move-img" src="paper.png">'
})

$scissorsButtonP2.addEventListener("click", function () {
    $fieldP2.innerHTML = '<img class="move-img" src="scissors.png">'
})