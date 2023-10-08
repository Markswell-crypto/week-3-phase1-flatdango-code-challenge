document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display the list of movies
    fetch("http://localhost:3000/films")
        .then((res) => res.json())
        .then((movies) => {
            const movieList = document.getElementById("dividedlist");

            movies.forEach((movie) => {
                // Create a new list item for each movie
                const filmListItem = document.createElement("li");
                filmListItem.textContent = movie.title;

                // Add a click event listener to each movie list item
                filmListItem.addEventListener("click", () => {
                    // Fetch and display the details of the clicked movie
                    fetch(`http://localhost:3000/films/${movie.id}`)
                        .then((response) => response.json())
                        .then((movieData) => {
                            const poster = document.getElementById("poster");
                            const title = document.getElementById("title");
                            const description = document.getElementById("description");
                            const runtime = document.getElementById("runtime");
                            const showtime = document.getElementById("showtime");
                            const ticketsAvailable = document.getElementById("tickets-available");
                            const buyTicketButton = document.getElementById("buyticket");

                            // Populate HTML elements with movie data
                            poster.src = movieData.poster;
                            title.textContent = "Title: " + movieData.title;
                            description.textContent = "Description: " + movieData.description;
                            runtime.textContent = "Runtime: " + movieData.runtime + " minutes";
                            showtime.textContent = "Showtime: " + movieData.showtime;

                            // Calculate available tickets by subtracting tickets_sold from capacity
                            let availableTickets = movieData.capacity - movieData.tickets_sold;
                            ticketsAvailable.textContent = "Tickets Available: " + availableTickets;

                            // Enable the "Buy Ticket" button
                            buyTicketButton.disabled = false;
                            buyTicketButton.textContent = "PURCHASE TICKET";

                            // Add a click event listener to the "Buy Ticket" button
                            buyTicketButton.addEventListener("click", () => {
                                // Check if there are available tickets
                                if (availableTickets > 0) {
                                    // Decrement tickets_sold count
                                    movieData.tickets_sold++;

                                    // Update available tickets
                                    availableTickets--;

                                    // Update the frontend to reflect the changes
                                    ticketsAvailable.textContent = "Tickets Available: " + availableTickets;

                                    // Check if all tickets are sold out
                                    if (availableTickets === 0) {
                                        // Disable the "Buy Ticket" button
                                        buyTicketButton.disabled = true;
                                        buyTicketButton.textContent = "Sold Out";
                                    }
                                } else {
                                    // No available tickets
                                    buyTicketButton.disabled = true;
                                    buyTicketButton.textContent = "Sold Out";
                                }
                            });
                        })
                        .catch((error) => {
                            console.error("Error fetching movie data:", error);
                        });
                });

                // Append the list item to the movieList
                movieList.appendChild(filmListItem);
            });
        })
        .catch((error) => {
            console.error("Error fetching movie list:", error);
        });
});
