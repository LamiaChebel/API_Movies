document.addEventListener("DOMContentLoaded", function(){

    const div=document.querySelector("section").appendChild(document.createElement("div"));
    div.setAttribute("id","display");

    let url = new URL("https://api.themoviedb.org/3/trending/movie/week?api_key=58051e21a60016eadf0e959e12d53e24");


    fetch(url)
        .then(response => response.json())
        .then(response => {
            for (const result of response.results) {

                const article = document.createElement("article");
                document.querySelector("div").appendChild(article);

            
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


            }
            
        })
        .catch(err => console.error(err));


})