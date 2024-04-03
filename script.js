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

                //Ghost town 2
             }else if(month === 4 && date === 11 && year === 2024) {
                // Example link with image
                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/ghost-town-2-call-of-the-lloyd-ft-zamu-spark/details";
                link.target = "_blank";

                let image = document.createElement("img");
                image.src = "https://github.com/pkzstar/HDReport/blob/main/images/upcoming%20events/Ghost%20Town%202.png?raw=true";

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

