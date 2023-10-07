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
// Make a GET request to retrieve movie data
fetch("http://localhost:3000/films/1")
.then(response => response.json())
.then(movieData => {
    const poster = document.getElementById("poster");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const runtime = document.getElementById("runtime");
    const showtime = document.getElementById("showtime");
    const ticketsAvailable = document.getElementById("tickets-available");

    // Populate HTML elements with movie data
    poster.src = movieData.poster;
    title.textContent = "Title: " + movieData.title;
    description.textContent = "Description: " + movieData.description;
    runtime.textContent = "Runtime: " + movieData.runtime + " minutes";
    showtime.textContent = "Showtime: " + movieData.showtime;
    
    // Calculate available tickets by subtracting tickets_sold from capacity
    const availableTickets = movieData.capacity - movieData.tickets_sold;
    ticketsAvailable.textContent = "Tickets Available: " + availableTickets;
})
.catch(error => {
    console.error("Error fetching movie data:", error);
});
})