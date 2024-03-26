import React from 'react';
import PastEvents from './PastEvents';

//2024
function App() {
  const events = [
    {
      eventTitle: "Northstar II",
      imageUrl: "https://raw.githubusercontent.com/pkzstar/plus-side/main/images/upcoming%20events/northstar.png",
      eventUrl: "https://www.start.gg/tournament/northstar-ii-at-cloud-con/events/project-singles/brackets/1585325/2374365/standings",
      date: "March 10 2024",
      location: "Minnesota",
      entrants: 10,
      top3: ["Ben", "Perfect Sunset", "Cranky"],
      vodsUrl: ""
    }
  ];

  return (
    <div className="App">
    <ul className="pastList" id="pastList">
        {events.map((event, index) => (
          <PastEvents
            key={index}
            eventTitle={event.eventTitle}
            imageUrl={event.imageUrl}
            eventUrl={event.eventUrl}
            date={event.date}
            location={event.location}
            entrants={event.entrants}
            first={event.top3[0]}
            second={event.top3[1]}
            third={event.top3[2]}
            vodsUrl={event.vodsUrl}
            hideRankImage={ index === 0}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;