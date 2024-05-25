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
      name: "Invincible VIII",
      date: "6/1/24 - 6/2/24",
      location: "Madison, WI, USA",
      description: "10,000+ Square Feet Heart of downtown Madison, in walking distance of great restaurants & entertainment. Attached hotel, additional hotels close by Flying in Dane County Regional Airport (MSN) is located 20 minutes away from Union South.",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/invincible8.png?raw=true",
      link: "https://www.start.gg/tournament/invincible-viii/details",
      rankImg: false
    },
    {
      name: "The Black Market",
      date: "6/22/24",
      location: "Calgary, AB, Canada",
      description: "A celebration of Smash Bros. fan games!Featuring HDR Singles, HDR Doubles and P+ Singles as paid events, along with plenty of free side events such as HDR Amateur brackets, Smash Remix, Rivals of Aether and Sonic Adventure 2!",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/blackmarket.png?raw=true",
      link: "https://www.start.gg/tournament/the-black-market/details",
      rankImg: false
    },
    {
      name: "SUPER CLOUDY SCUFFLE",
      date: "6/22/24",
      location: "Oshawa, ON, Canada",
      description: "Karamel is proud to present: SUPER CLOUDY SCUFFLE! A Durham Regional 🐈 In collaboration with No Style Esports, ft. Ultimate, Melee, Rivals of Aether 2, Project+ and HDR This tournament is dedicated to Karamel's late cat, Cloudy. Her likeness appearing in every iteration of any event hosted by them, hidden in Ontario twitch emotes, and making cameos in many livestreams. This tournament is a final send off for her. Please feel free to take Cloudy merch off of the floor, tables and chair throughout the event.",
      imageUrl: "https://github.com/pkzstar/HDReport/blob/main/images/upcoming%20events/super%20cloudy%20scuffle.png?raw=true",
      link: "https://www.start.gg/tournament/super-cloudy-scuffle-a-durham-regional/details",
      rankImg: false
    },{
    name: ":FF 2024",
    date: "6/23/24",
    location: "Esp. Erasme, France",
    description:"🦁 To enter this tournament, you must be registered also here :GG 2024! You can register for :GG 2024 only participating in HDR. To do so, you have to purchase the venue fee Pass 1 jour (10€) and not pick any event.We know this procedure is weird, given that these two events have absolutely nothing to do with each other.",
    imageUrl: "https://github.com/pkzstar/HDReport/blob/main/images/upcoming%20events/ff.png?raw=true",
    link: "https://www.start.gg/tournament/ff-2024/details",
    rankImg: false
  },
    {
      name: "Terminal Velocity",
      date: "7/14/24",
      location: "Boston, MA, USA",
      description: "📍Terminal Velocity takes place Sunday, July 14, at Balance Patch on Commonwealth Avenue in Boston.",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/terminal.png?raw=true",
      link: "https://www.start.gg/tournament/terminal-velocity/details",
      rankImg: false
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
