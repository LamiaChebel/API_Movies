let query="";
const article = document.createElement("article");

let input = document.querySelector("input");

function getInput(){
    return input.value;
}

// function onClickDetails(){

//     document.querySelectorAll("aside").classList.toggle('hide');

// }

function fetchResults(){

    let urlSearch = new URL(`https://api.themoviedb.org/3/search/movie?api_key=58051e21a60016eadf0e959e12d53e24&language=en-US&query=${getInput()}`);
    
    fetch(urlSearch)
        .then(response => response.json())
        .then(response => {
                const searchPage = document.querySelector("#searchPage")
                    .appendChild(document.createElement("section"));
                searchPage.setAttribute("id", "searchResults");

                const h2 = document.querySelector("#searchResults")
                    .appendChild(document.createElement("h2"));
                h2.textContent = `Search results : ${response.results.length} movies`;


                for (const result of response.results) {

                    document.querySelector("#searchResults").appendChild(article);


                    const titleMovie = document.createElement("h3");
                    article.appendChild(titleMovie);
                    titleMovie.textContent = `${result.title}`;


                    const image = document.createElement("img");
                    article.appendChild(image);
                    image.setAttribute("src", `https://image.tmdb.org/t/p/w300/${result.poster_path}`);
                    image.setAttribute("alt", "");

                    const aside = document.createElement(aside);
                    // aside.setAttribute("class","hide");
                    article.appendChild(aside);
                    console.log(aside);
                    
                
                    const p1 = document.createElement("p");
                    aside.appendChild(p1);
                    p1.textContent = `vote count : ${result.vote_count}`;
                
                
                    const p2 = document.createElement("p");
                    aside.appendChild(p2);
                    p2.textContent = `vote average : ${result.vote_average}`;
                
                
                    const p3 = document.createElement("p");
                    aside.appendChild(p3);
                    p3.textContent = `release : ${new Date(result.release_date).toLocaleDateString()}`;
                
                    const p4 = document.createElement("p");
                    aside.appendChild(p4);
                    p4.textContent = `${result.overview}`;
                
                    let urlDetails = new URL(`https://api.themoviedb.org/3/movie/${result.id}?api_key={58051e21a60016eadf0e959e12d53e24}&append_to_response=production_companies`)
                    
                    fetch(urlDetails)
                        .then(res=> res.json())
                            .then(res=> {
                               for(const prodName of res.production_companies) {
                                const company = document.createElement("a");
                                aside.appendChild(company);
                                const companyInfos={
                                    id:prodName.id,
                                    name:prodName.name,
                                };

                                console.log(companyInfos);
                               }
                               
                            });
               
                             
            
                };
            })
        .catch(err => console.error(err));
        };        
function ResetResults(){
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
    // document.querySelectorAll("img").addEventListener("click",onClickDetails);



});