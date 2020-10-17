

document.addEventListener('DOMContentLoaded', function() {               
    let renderMovies = movieArray => {

        let finalHtmlArray = movieArray.map(function(currentMovie) {
            return `

			    <div class="col-3 results card">
                        <img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title}"/></img>
                    <div class="card-body">
                        <h5 class="card-title movie-title">${currentMovie.Title}</h5>
                        <span class="year">${currentMovie.Year}</span>
                    <div><button onclick="saveToWatchlist('${currentMovie.imdbID}')" type="button" class="btn btn-primary render-button mt-1">Add</button></div>
                    </div>
                    
                </div>
           
        `

        })
    

        return finalHtmlArray.join('');

    }
       document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();
        document.getElementById('movie-container').innerHTML = renderMovies(movieData);

        }); 
});

