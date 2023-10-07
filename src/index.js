document.addEventListener("DOMContentLoaded", () => {
fetch("http://localhost:3000/films")
.then(res => res.json())
.then(movies => {
    movies.forEach(movie => {
        let movieList = document.getElementById("dividedlist")
// Create a new list item
        let filmListItem = document.createElement("li"); 
// Set the text content of the list item        
        filmListItem.textContent = movie.title; 
// Append the list item to the movieList        
        movieList.appendChild(filmListItem); 
    })
})
})