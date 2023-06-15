const rating = document.getElementById("rating");
const thankYou = document.getElementById("thankYou");
const rateValue = document.getElementById("rate-value");
const submit = document.getElementById("btn");
const rateBtn = document.querySelectorAll(".rate")

function change(rate){
        rate.classList.add('active')
        rateValue.innerHTML = rate.innerHTML
}

submit.addEventListener("click", () => {
    rating.style.display = "none";
    thankYou.style.display = "flex";
})
