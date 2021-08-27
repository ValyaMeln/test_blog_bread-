let closeButton = document.querySelector(".fas.fa-times")
closeButton.addEventListener("click",
    function () {
        let a = document.querySelector(".post.post_yellow.no_results")
        a.remove()
    })

let searchButton = document.querySelector(".fas.fa-search")
searchButton.addEventListener("click",
    function () {
        let input = document.querySelector("header .header_search input")
        input.style.display = "inline-block"
    })