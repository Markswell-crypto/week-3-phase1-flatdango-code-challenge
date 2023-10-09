# week-3-phase1-flatdango-code-challenge
An application that allows the user to purchase movie tickets from the server.
## Project Guidelines
Flatdango Movie Theatre is a web application that allows users to browse and purchase tickets for a selection of movies. This project demonstrates how to fetch movie data from a server, display movie details, and manage ticket availability.

## Technology used
1. HTML
2. CSS
3. Javascript
4. Bootstrap
5. JSON

## Core Deliverables:
### 1. As a user, you can:
See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** when the page loads. The number of available tickets will need to be derived by subtracting the number of `tickets_sold` from the theater's `capacity`. You will need to make a GET request to the following endpoint to retrieve the film data:
 

        GET /films/1

        Example Response:

        {

            "id": "1",

            "title": "The Giant Gila Monster",

            "runtime": "108",

            "capacity": 30,

            "showtime": "04:00PM",

            "tickets_sold": 27,

            "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",

            "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"

        }


### 2. As a user you can:
See a menu of all movies on the left side of the page in the `ul#films` element when the page loads. (_optional_: you can style each film in the list by adding the classes `film item` to each `li` element.) There is a placeholder `li` in the `ul#films` element that is hardcoded in the HTML — feel free to remove that element by editing the HTML file directly, or use JavaScript to remove the placeholder element before populating the list. You will need to make a GET request to the following endpoint to retrieve the film data:

 

        GET /films

        Example response:

        [

            {

                "id": "1",

                "title": "The Giant Gila Monster",

                "runtime": "108",

                "capacity": 30,

                "showtime": "04:00PM",

                "tickets_sold": 27,

                "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",

                "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"

            },

            {

                "id": "2",

                "title": "Manos: The Hands Of Fate",

                "runtime": "118",

                "capacity": 50,

                "showtime": "06:45PM",

                "tickets_sold": 44,

                "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",

                "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"

            }

        ]
 

### 3. As a user you can :
Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should see the number of available tickets decreasing on the frontend. I should not be able to buy a ticket if the showing is sold out (if there are 0 tickets available). **No persistence is needed for this feature**.
 

#### Bonus Deliverables:
Be able to click on a movie in the menu to replace the currently displayed movie's details with the new movie's details. Note that you may have to make an additional GET request to access the movie's details.
 
When a movie is sold out (when there are no available tickets remaining), indicate that the movie is sold out by changing the button text to "Sold Out". Also update the film item in the `ul#films` menu by adding a class of `sold-out` to the film. For reference, here's what the contents of the `ul#films` element should look like with a sold out film:

### Author
This Project was contributed by: Markswell Ogutu
 
 ### License:

This app is licensed under the MIT License.
Copyright (c) 2023 Markswell Osoro Ogutu

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

   