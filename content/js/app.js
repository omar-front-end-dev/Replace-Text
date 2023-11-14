const areaReplace = document.querySelector(".area-replace");
const contentReplace = document.querySelector(".content-replace");
const formElement = document.querySelector(".form");




formElement.addEventListener("submit", (e) =>{
    e.preventDefault()
    let newText = areaReplace.value;
    let regURL = /https?:\/\/[^\s]+/gi;
    contentReplace.innerHTML = newText.replace(regURL,function(x) {
        return `<a href=${x} target="blank">${x}</a>`
    });
    areaReplace.value = ""
})