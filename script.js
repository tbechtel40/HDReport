// Calendar Start
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

monthAndYear = document.getElementById("monthAndYear");
document.getElementById("monthAndYear").innerHTML = 20;
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");

                if (month === 0 && year === 2024) {
                    document.getElementById("previous").style.display = "none";
                } else {
                    document.getElementById("previous").style.display = "block";
                }

                
                //Bae
            if(month === 2 && date === 30 && year === 2024) {
                // Example link with image
                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/bae-03-2024/details";
                link.target = "_blank";

                let image = document.createElement("img");
                image.src = "https://github.com/pkzstar/HDReport/blob/main/images/upcoming%20events/bae.png?raw=true";

                image.classList.add("calendarImg");


                link.appendChild(image);
                cell.appendChild(link);


                //Shenanigames 4
             }else if(month === 4 && date === 4 && year === 2024) {
                // Example link with image
                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/shenanigames-4/details";
                link.target = "_blank";

                let image = document.createElement("img");
                image.src = "https://github.com/pkzstar/HDReport/blob/main/images/upcoming%20events/Shenanigames%204.png?raw=true";

                image.classList.add("calendarImg");


                link.appendChild(image);
                cell.appendChild(link);

        //Ghost Town and creed
      } else if (month === 4 && (date === 11) && year === 2024) { 
                    
        const events = [

        {   
            link: "https://www.start.gg/tournament/ghost-town-2-call-of-the-lloyd-ft-zamu-spark/details",
            imageSrc: "https://raw.githubusercontent.com/pkzstar/plus-side/main/images/past-events/ghost-town.png"
            
        },
        {
            link: "https://www.start.gg/tournament/creed-iii/details",
            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/creed.png?raw=true"
        }
    ];


    let currentIndex = 0; // Initialize current index
    let link = document.createElement("a");
    link.target = "_blank";

    let image = document.createElement("img");

    image.classList.add("calendarImg");


    link.appendChild(image);
    cell.appendChild(link);

    // Function to fade in/out the image and link
    function fadeInOut(element) {
        let opacity = 0;
        let increasing = true;
        let interval = setInterval(function() {
            if (increasing) {
                opacity += 0.05;
            } else {
                opacity -= 0.05;
            }
            element.style.opacity = opacity;
            if (opacity >= 1) {
                increasing = false;
                setTimeout(() => {
                    increasing = true;
                    updateLinkAndImage(); // Update link and image after fully visible
                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
            } else if (opacity <= 0) {
                clearInterval(interval);
                fadeInOut(element); // Restart the fading animation
            }
        }, 100); // Adjust the timing as needed
    }

    // Function to update the link and image
    function updateLinkAndImage() {
        link.href = events[currentIndex].link;
        image.src = events[currentIndex].imageSrc;
        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
    }

    updateLinkAndImage(); // Initially update link and image
    fadeInOut(image); // Start fade-in/out animation // Start cycling events


                     //Get Out of My Venue & Game 5 in the D
                    } else if (month === 4 && (date === 18) && year === 2024) {

                      const events = [
                          {   
                              link: "https://www.start.gg/tournament/game-5-in-the-d/details",
                              imageSrc: "https://raw.githubusercontent.com/pkzstar/plus-side/main/images/past-events/game5In.png"
                              
                          },
                          {
                              link: "https://www.start.gg/tournament/get-out-of-my-venue/details",
                              imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Canada_%28leaf%29.svg/630px-Flag_of_Canada_%28leaf%29.svg.png"
                          }
                      ];
                      let currentIndex = 0; // Initialize current index
  
                      let link = document.createElement("a");
                      link.target = "_blank";
  
                      let image = document.createElement("img");
  
                      image.classList.add("calendarImg");
  
                      link.appendChild(image);
                      cell.appendChild(link);
  
                      // Function to fade in/out the image and link
                      function fadeInOut(element) {
                          let opacity = 0;
                          let increasing = true;
                          let interval = setInterval(function() {
                              if (increasing) {
                                  opacity += 0.05;
                              } else {
                                  opacity -= 0.05;
                              }
                              element.style.opacity = opacity;
                              if (opacity >= 1) {
                                  increasing = false;
                                  setTimeout(() => {
                                      increasing = true;
                                      updateLinkAndImage(); // Update link and image after fully visible
                                  }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                              } else if (opacity <= 0) {
                                  clearInterval(interval);
                                  fadeInOut(element); // Restart the fading animation
                              }
                          }, 100); // Adjust the timing as needed
                      }
                  
                      // Function to update the link and image
                      function updateLinkAndImage() {
                          link.href = events[currentIndex].link;
                          image.src = events[currentIndex].imageSrc;
                          currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                      }
                  
                      updateLinkAndImage(); // Initially update link and image
                      fadeInOut(image); // Start fade-in/out animation // Start cycling events
  

                  //Get Out of My Venue
             } else if(month === 4 && date === 17 && year === 2024) {
                // Example link with image
                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/get-out-of-my-venue/details";
                link.target = "_blank";
            
                let image = document.createElement("img");
                image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Canada_%28leaf%29.svg/630px-Flag_of_Canada_%28leaf%29.svg.png";
            
                image.classList.add("calendarImg");
            
            
                link.appendChild(image);
                cell.appendChild(link);
            
                      //SuperTps
                    } else if (month === 4 && (date === 24) && year === 2024) {


                        let link = document.createElement("a");
                        link.href = "https://www.start.gg/tournament/tripoint-smash-presents-super-tps-iii/details";
                        link.target = "_blank";
    
                        let image = document.createElement("img");
                        image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/supertps.png?raw=true";
    
                        image.classList.add("calendarImg");
    
    
                        link.appendChild(image);
                        cell.appendChild(link);
    
                              //invincible
             } else if(month === 5 && date === 1 && year === 2024) {
                // Example link with image
                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/invincible-viii/details";
                link.target = "_blank";
            
                let image = document.createElement("img");
                image.src = "https://raw.githubusercontent.com/pkzstar/plus-side/main/images/upcoming%20events/invincible8.png";
            
                image.classList.add("calendarImg");
            
            
                link.appendChild(image);
                cell.appendChild(link);

                
            } else if(month === 5 &&  date === 2 && year === 2024) {
                // Example link with image
                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/invincible-viii/details";
                link.target = "_blank";
            
                let image = document.createElement("img");
                image.src = "https://raw.githubusercontent.com/pkzstar/plus-side/main/images/upcoming%20events/invincible8.png";
            
                image.classList.add("calendarImg");
            
            
                link.appendChild(image);
                cell.appendChild(link);


                //Undertow 2024
            } else if (month === 8 && (date === 6 || date === 7 || date === 8) && year === 2024) {


                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/undertow-2024/details";
                link.target = "_blank";

                let image = document.createElement("img");
                image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/undertow2024.png?raw=true";

                image.classList.add("calendarImg");


                link.appendChild(image);
                cell.appendChild(link);

                } else {
                    // Create and append the date text only if there is no image
                    cellText = document.createTextNode(date);
                    cell.appendChild(cellText);
                }

                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date

                row.appendChild(cell);
                date++;
            }
        }

        tbl.appendChild(row); // appending each row into calendar body.
    }
}



// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}


document.addEventListener('DOMContentLoaded', function() {
    const hoverImage = document.getElementsById('calendarImg');
    const hoverContent = document.getElementsById('Exodus');
  
    hoverImage.addEventListener('mouseover', function() {
      // Change the URL to the page you want to load content from
      fetch('https://plusside.net/')
        .then(response => response.text())
        .then(html => {
          hoverContent.innerHTML = html;
          hoverContent.style.display = 'flex';
        })
        .catch(error => console.error('Error fetching HTML:', error));
    });
  
    hoverImage.addEventListener('mouseout', function() {
      hoverContent.style.display = 'none';
    });
  });

//Calendar End

//Past events button

// Function to toggle the dropdown content
function toggleDropdown(event) {
  let dropdownContent = document.getElementById("dropdown-content");
  if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
    dropdownContent.style.display = "grid";
    // Add event listener to hide dropdown when clicking outside of it
    document.addEventListener('click', hideDropdownOnClickOutside);
  } else {
    dropdownContent.style.display = "none";
    // Remove event listener when hiding dropdown
    document.removeEventListener('click', hideDropdownOnClickOutside);
  }
  // Stop event propagation
  event.stopPropagation();
}

// Function to hide dropdown when clicking outside of it
function hideDropdownOnClickOutside(event) {
  let dropdown = document.getElementById("dropdown-content");
  let button = document.getElementById("past-events-drop-btn");
  if (!dropdown.contains(event.target) && !button.contains(event.target)) {
    dropdown.style.display = "none";
    document.removeEventListener('click', hideDropdownOnClickOutside);
  }
}


//image zoom in and out
function ToggleZoom(imageId) {
    let isZoomed = false;
    let zoomIn = document.getElementById(imageId);
    let zoomInStyle = window.getComputedStyle(zoomIn);

    if (zoomInStyle.cursor === "zoom-out") {
        zoomIn.classList.add("zoomed");
        zoomIn.style.cursor = "zoom-in";

    } else {
        zoomIn.style.cursor = "zoom-out";
        zoomIn.classList.remove("zoomed");

    }
}

