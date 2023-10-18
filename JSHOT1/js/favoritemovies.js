const $ = (id) => document.getElementById(id);

let favoritemovies = ["Fast & Furious", "Transformers", "Avengers"];

function addMovie() {
    let movieInput = $("movieInput").value;
    favoritemovies.push(movieInput);
    displayMovies();
}

function displayMovies() {
    let movieListDiv = $("movieList");
    movieListDiv.innerHTML = "";
    let displaystring = "<ul>";

    for (var i = 0; i < favoritemovies.length; i++) {
        displaystring += "<li>";
        displaystring += favoritemovies[i];
        displaystring += "</li>";
    }
    displaystring += "</ul>";
    movieListDiv.innerHTML = displaystring;
}

