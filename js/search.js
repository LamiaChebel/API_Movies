let query="";
let input = document.querySelector("input");

function getInput(){
    return input.value;
}


function fetchResults(){

    let url = new URL(`https://api.themoviedb.org/3/search/movie?api_key=58051e21a60016eadf0e959e12d53e24&language=en-US&query=${getInput()}`);
    
    fetch(url)
        .then(response => response.json())
        .then(response => {
                const searchPage = document.querySelector("#searchPage")
                    .appendChild(document.createElement("section"));
                searchPage.setAttribute("id", "searchResults");

                const h2 = document.querySelector("#searchResults")
                    .appendChild(document.createElement("h2"));
                h2.textContent = `Search results : ${response.results.length} movies`;


                for (const result of response.results) {

                    const article = document.createElement("article");
                    document.querySelector("#searchResults").appendChild(article);


                    const titleMovie = document.createElement("h3");
                    article.appendChild(titleMovie);
                    titleMovie.textContent = `${result.title}`;


                    const image = document.createElement("img");
                    article.appendChild(image);
                    image.setAttribute("src", `https://image.tmdb.org/t/p/w300/${result.poster_path}`);
                    image.setAttribute("alt", "");


                    const p1 = document.createElement("p");
                    article.appendChild(p1);
                    p1.textContent = `vote count : ${result.vote_count}`;


                    const p2 = document.createElement("p");
                    article.appendChild(p2);
                    p2.textContent = `vote average : ${result.vote_average}`;


                    const p3 = document.createElement("p");
                    article.appendChild(p3);
                    p3.textContent = `release : ${new Date(result.release_date).toLocaleDateString()}`;

                    const p4 = document.createElement("p");
                    article.appendChild(p4);
                    p4.textContent = `${result.overview}`;

                    const company = document.createElement("a");
                    console.log(company);
                    article.appendChild(a).setAttribute("href","");
                    company.textContent =""; 




                }
            
        })
        .catch(err => console.error(err));
}

function ResetResults(e){
    if(document.querySelector("#searchResults")){
        document.querySelector("#searchResults").remove();
    }
}

function submitRequest(e){
        e.preventDefault();
        ResetResults();
        getInput();
        fetchResults();    
        document.querySelector("form").reset();
    }

document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelector("form").addEventListener("submit", submitRequest );
    input.addEventListener("click",ResetResults);
})