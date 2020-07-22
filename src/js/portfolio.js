//prevent layering history
const links = document.querySelectorAll("a");


function pushNewHistory(event){
    event.preventDefault();
    location.replace(event.target.href)
}

links.forEach(link => {
    if (link.href.includes("portfolio/articles")){
        link.addEventListener("click", pushNewHistory);
    }
});