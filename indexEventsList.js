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

  // Create the h1 element for event name
  const eventNameLink = document.createElement('a');
  eventNameLink.classList.add('black-link');
  eventNameLink.href = eventData.link;
  eventNameLink.target = '_blank';
  eventNameLink.textContent = eventData.name;
  const eventName = document.createElement('h1');
  eventName.style.flex = '100';
  eventName.classList.add('article-head');
  eventName.appendChild(eventNameLink);

  // Check if rankImg should be visible
  if (eventData.rankImg) {
      const rankImg = document.createElement('img');
      rankImg.classList.add('pm-rank');
      rankImg.src = "https://github.com/pkzstar/plus-side/blob/main/images/pmrank.png?raw=true";
      rankImg.alt = '';
      eventName.appendChild(rankImg); // Append the rankImg to the eventName (h1) element
  }

  const eventDate = document.createElement('p');
  eventDate.classList.add('article-date');
  eventDate.style.display = 'block';
  eventDate.textContent = eventData.date;
  eventName.appendChild(eventDate);
  eventDetailsDiv.appendChild(eventName);

  // Create the div for event location
  const eventLocationDiv = document.createElement('div');
  eventLocationDiv.classList.add('article-head');
  eventLocationDiv.style.flex = 'auto';
  const locationLabel = document.createElement('b');
  locationLabel.classList.add('article-date');
  locationLabel.style.display = 'inline-flex';
  locationLabel.textContent = 'Location :' + '\u00A0';
  eventLocationDiv.appendChild(locationLabel);
  const location = document.createElement('b');
  location.classList.add('article-date');
  location.style.display = 'inline-flex';
  location.textContent = eventData.location;
  eventLocationDiv.appendChild(location);
  eventDetailsDiv.appendChild(eventLocationDiv);

  // Create paragraphs for event description
  const eventDescription = document.createElement('p');
  eventDescription.classList.add('events-text');
  eventDescription.textContent = eventData.description;
  eventDetailsDiv.appendChild(eventDescription);

  // Create the start.gg link
  const startGgLink = document.createElement('a');
  startGgLink.classList.add('start-gg');
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
        name: "Shenanigames 4",
        date: "05/04/24",
        location: "Sapulpa, OK, USA",
        description: "Shenanigames returns and everyone is invited! The goal here is to mainly relax, chill with the homies, and have a ball! While we'll still run competitive stuff during the day, the main point of the event is to stay for the after party for we won't be closing doors until 4am! The Waypoint Lounge is the Tulsa metro-area's premiere destination for gaming and esports. Located in the town of Sapulpa, it features a state of the art production facility with a 36-ft spectator screen, a wide selection of board and video games, and a Japanese-German fusion bar and kitchen menu!",
        imageUrl: "https://github.com/pkzstar/HDReport/blob/main/images/upcoming%20events/Shenanigames%204.png?raw=true",
        link: "https://www.start.gg/tournament/shenanigames-4/details",
        rankImg: false
    },
    {
        name: "Ghost Town 2",
        date: "05/11/24",
        location: "Portland, OR, USA",
        description: "Portland's fighting game community will be renting out a 500 person capacity event room inside of the Lloyd Center in the middle of NE Portland.",
        imageUrl: "https://github.com/pkzstar/HDReport/blob/main/images/upcoming%20events/Ghost%20Town%202.png?raw=true",
        link: "https://www.start.gg/tournament/ghost-town-2-call-of-the-lloyd-ft-zamu-spark/details",
        rankImg: false
    },
    {
      name:"Get Out of My Venue",
      date: "5/17/24 - 5/18/24",
      location: "Toronto, ON, Canada",
      description: "HDR/P+ SILLY MAJOR AT GOML. P+ - FRIDAY NIGHT 6:30 - FINISH - BO3 UNTIL TOP 8. HDR- SATURDAY NIGHT 8:30 - FINISH - BO3 UNTIL TOP 8. Times subject to change depending on GOML schedule.  HDR will be on Nightly unless the Smashline 2 update is pushed to beta. 2 week cutoff for nightly patch.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Canada_%28leaf%29.svg/630px-Flag_of_Canada_%28leaf%29.svg.png",
      link: "https://www.start.gg/tournament/get-out-of-my-venue/details",
      rankImg: false
    },
    {
        name: "Game 5 In The D #3",
        date: "05/18/24",
        location: "Detroit, MI, USA",
        description: "We welcome all valiant competitors to our local P+ scene's return-to-form! Featuring a professional stream, custom tournament badges, your favorite players, and much, much more, this will be an event you won't want to miss!",
        imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true",
        link: "https://www.start.gg/tournament/game-5-in-the-d-3-1/details",
        rankImg: false
      },      
    {
      name: "Super TPS III",
      date: "5/24/24",
      location: "Romeoville, IL, USA",
      description: "The Romeoville Project+ Tournament Returns! Taking place Combo Breaker weekend, ILPM and UGS are once again bringing you a premier P+ event, featuring our massive venue, top quality livestream production with MULTIPLE streams, and plenty of setups!",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/supertps.png?raw=true",
      link: "https://www.start.gg/tournament/tripoint-smash-presents-super-tps-iii/details",
      rankImg: false
    },

    ];



// Create the event components for each event
const eventComponents = eventsData.map(eventData => createEventComponent(eventData));

// Append the event components to the eventsList div
document.addEventListener('DOMContentLoaded', function () {
    const eventsList = document.createElement('ul');
    eventsList.classList.add('eventsList');
    eventComponents.forEach(eventComponent => eventsList.appendChild(eventComponent));
    
    const eventsListDiv = document.getElementById('eventsList');
    eventsListDiv.parentNode.insertBefore(eventsList, eventsListDiv);
});

// Append the past event element to a container (e.g., a div with id 'pastListContainer')
const pastListContainer = document.getElementById('pastListContainer');
pastListContainer.appendChild(pastEventElement);