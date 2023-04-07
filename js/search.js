let query="";

function onKeySearch(e){
    query = e.target.value;
    console.log(query);
    return query;

}

function submitRequest(){

        document.querySelector("section").appendChild(document.createElement("div"));

        
        const input = document.querySelector("#search");
        input.addEventListener("keyup", onKeySearch);


        let url = new URL(`https://api.themoviedb.org/3/search/movie?api_key=58051e21a60016eadf0e959e12d53e24&language=en-US&query=${onKeySearch(e)}&include_adult=false`);
    
    
        fetch(url)
            .then(response => response.json())
            .then(response => {
                for (const result of response.results) {
                    const article = document.createElement("article");
                    document.querySelector("div").appendChild(article);
                    article.style.flex = "0 1 30%";
    
                
                    const titleMovie = document.createElement("h3");
                    article.appendChild(titleMovie);
                    titleMovie.textContent = `${result.title}`;
                    titleMovie.style.textAlign="center";
    
    
                    const image = document.createElement("img");
                    article.appendChild(image);
                    image.setAttribute("src", `https://image.tmdb.org/t/p/w300${result.poster_path}`);
                    image.setAttribute("alt", "");
                    image.style.margin=" 10% 14%";
                    
    
    
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
    
    
                }
                
            })
            .catch(err => console.error(err));
    
    }

document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelector("form").addEventListener("submit", submitRequest );
})