function createEventComponent(eventData) {
  // Create the main li element
  const eventLi = document.createElement('li');
  eventLi.classList.add('events');

  // Create the anchor tag for the event image
  const imgLink = document.createElement('a');
  imgLink.href = eventData.link;
  imgLink.target = '_blank';
  const eventImg = document.createElement('img');
  eventImg.classList.add('events-banners');
  eventImg.src = eventData.imageUrl;
  eventImg.alt = '';
  imgLink.appendChild(eventImg);
  eventLi.appendChild(imgLink);

  // Create the div for event details
  const eventDetailsDiv = document.createElement('div');
  eventDetailsDiv.style.flex = 'auto';
  eventDetailsDiv.classList.add('eventsContent');


  // Create the h1 element for event name
  const eventNameLink = document.createElement('a');
  eventNameLink.classList.add('black-link');
  eventNameLink.href = eventData.link;
  eventNameLink.target = '_blank';
  eventNameLink.textContent = eventData.name;
  const eventName = document.createElement('h1');
  eventName.style.flex = '100';
  eventName.classList.add('event-head');
  eventName.appendChild(eventNameLink);
  const lineBreak = document.createElement('br');
eventName.appendChild(lineBreak)

  // Check if rankImg should be visible
  if (eventData.rankImg) {
      const rankImg = document.createElement('img');
      rankImg.classList.add('pm-rank');
      rankImg.src = "https://github.com/pkzstar/plus-side/blob/main/images/pmrank.png?raw=true";
      rankImg.alt = '';
      eventDetailsDiv.appendChild(rankImg); // Append the rankImg to the eventName (div) element
  }

// Append the event location to the h1 element
const locationLabel = document.createElement('b');
locationLabel.classList.add('event-date');
locationLabel.style.display = 'inline-flex';
eventName.appendChild(locationLabel);
const location = document.createElement('b');
location.classList.add('event-date');
location.style.display = 'inline-flex';
location.textContent = eventData.location;
eventName.appendChild(location);


  const eventDate = document.createElement('p');
  eventDate.classList.add('event-date');
  eventDate.style.display = 'block';
  eventDate.textContent = eventData.date;
  eventName.appendChild(eventDate);
  eventDetailsDiv.appendChild(eventName);


  // Create paragraphs for event description
  const eventDescription = document.createElement('p');
  eventDescription.classList.add('events-text');
  eventDescription.textContent = eventData.description;
  eventDetailsDiv.appendChild(eventDescription);

  // Create the start.gg link
  const startGgLink = document.createElement('a');
  startGgLink.classList.add('start-gg');
  startGgLink.classList.add('start-gg-home');
  startGgLink.href = eventData.link;
  startGgLink.target = '_blank';
  startGgLink.textContent = 'start.gg';
  eventDetailsDiv.appendChild(startGgLink);

  // Append the event details div to the main li element
  eventLi.appendChild(eventDetailsDiv);

  return eventLi;
}

// Sample event data (replace this with actual event data)
const eventsData = [


      {
      name: "Keep it Chill #6",
      date: "8/3/24",
      location: "Portland, OR, USA",
      description: "KEEP IT CHILL: OREGON'S PREMIERE REGIONAL. FOOD & DRINK AVAILABLE AT EVENT. Across from Lucky Lab! Food options: Lucky Lab Pub, Ice Cream",
      imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F632796%2Fimage-f4693bc7d9c3126edd76e47beb7589e0-optimized.png&ehk=XH34e%2BOEvBnH7eVETknQjmfJUkdkh07MTT%2BnaDMXR%2Fc%3D&w=280&h=280&r=0",
      link: "https://www.start.gg/tournament/keep-it-chill-6-furret-s-fiesta-2/details",
      rankImg: false,
      trailer: ""
    },
    {
      name: "Lacombe Dome The Movie",
      date: "8/7/24 - 8/18/24",
      location: "Lacombe, AB T4L 0B6, Canada",
      description: "",
      imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F641692%2Fimage-45f598d07928666e7a2000ad17be87da-optimized.png&ehk=i4ux6d%2FfaynTqu9IelDimyU24TWUqSkLAEZ5uhQhBiA%3D&w=280&h=280&r=0",
      link: "https://www.start.gg/tournament/lacombe-dome-the-movie-1/details",
      rankImg: false,
      trailer: ""
    },
    {
      name: "Garden Brawl",
      date: "8/24/24",
      location: "Ridgewood, NJ, USA",
      description: "On August 24th, it's time to return to the garden. Over 4 years later, our namesake event is back! 🌼 Melee, Ultimate, P+, and HDR 🌼 256 Event Cap 🌼 Ridgewood, New Jersey",
      imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F673156%2Fimage-0a6f4b065a1ae1c4d91d5756129d7bb8-optimized.png&ehk=ba6JikL4X%2Frf5t3o54c5h95%2BdgVUtm66bGi3H2jzZV8%3D&w=280&h=280&r=0",
      link: "https://www.start.gg/tournament/garden-brawl/details",
      rankImg: false,
      trailer: "https://twitter.com/i/status/1797729780219224249"
    },
    {
      name: "Undertow 2024",
      date: "9/6/24 - 9/9/24",
      location: "Sandusky, OH, USA",
      description: "Thanks to the dedication of the Midwest Project+ and HDR communities, we're proud to continue the water park shadow major tradition in 2024!",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/undertow2024.png?raw=true",
      link: "https://www.start.gg/tournament/undertow-2024/details",
      rankImg: false
    },
    {
      name: "Infrared 2024",
      date: "10/6/24",
      location: "Westford, MA, USA",
      description: "This event will take place on Saturday, October 6th inside of the Wavelength 2024 Venue. You MUST be registered for Wavelength 2024 as a competitor or spectator in order to attend this event!",
      imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F689857%2Fimage-beb293c506128370f03dbac8b3301b61-optimized.jpg&ehk=USndSOdl8bTgh1izawrAwxr2nxvNn%2FTpocJgAGqoDY0%3D&w=280&h=280&r=0",
      link: "https://www.start.gg/tournament/infrared-2024/details",
      rankImg: false,
      trailer: "",
      stream: ""
    },
    {
      name: "Beachin",
      date: "11/2/24 - 11/3/24",
      location: "Sunny Isles Beach, FL, USA",
      description: "YachtClub Returns to Miami for another BANGER. Huge vibes going down on Saturday Night in the friendlies room of a certain major event down in Florida. HDR Singles Tournament",
      imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F686090%2Fimage-684569cc3ea9311290b0ea4112e96952-optimized.png&ehk=QzjLADSfuKgzgjCzafkZLcvUzaGH%2Fu69WSLcT4QYIMo%3D&w=280&h=280&r=0",
      link: "https://www.start.gg/tournament/beachin/details",
      rankImg: false,
      trailer: "",
      stream: ""
    },

    ];



// Create a single div element to contain all the lists
const eventsContainer = document.createElement('div');
eventsContainer.classList.add('eventsContainer');

// Create the event components for each pair of events
for (let i = 0; i < eventsData.length; i += 2) {
    // Create a new ul for each pair of events
    const eventList = document.createElement('ul');
    eventList.classList.add('eventsList');

    // Create and append the li elements for each event in the pair
    for (let j = i; j < i + 2 && j < eventsData.length; j++) {
        const eventData = eventsData[j];
        const eventComponent = createEventComponent(eventData);
        // Append the event component directly to the ul
        eventList.appendChild(eventComponent);
    }

// Check if there's only one li element in the ul and it's not on a screen less than 600px wide
const lis = eventList.querySelectorAll('li');
const screenWidthLessThan600 = window.matchMedia("(max-width: 600px)").matches;
if (lis.length === 1 && !screenWidthLessThan600) {
    // Apply max-width: 100% to the single li element
    lis[0].style.marginLeft = '25%';
}



    // Append the ul (with li inside) to the container div
    eventsContainer.appendChild(eventList);
}

// Append the container div to the eventsListDiv
document.addEventListener('DOMContentLoaded', function () {
    const eventsListDiv = document.getElementById('eventsList');
    eventsListDiv.appendChild(eventsContainer);
});
