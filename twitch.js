const clientId = 'jzi4wknhgac3jdhie2s5i5y14uffp0';
const streamerLogin = 'yachtclubhq';

fetch(`https://api.twitch.tv/helix/streams?user_login=${streamerLogin}`, {
    headers: {
        'Client-ID': clientId,
    },
})
.then(response => response.json())
.then(data => {
    const isLive = data.data.length > 0;
    if (isLive) {
        // Streamer is live, embed Twitch player
        // Replace 'PLAYER_ELEMENT_ID' with the ID of your HTML element where you want to embed the Twitch player
        // Replace 'STREAMER_USERNAME' with the actual username of the streamer
        const playerElement = document.getElementById('ycStream');
        playerElement.innerHTML = `<iframe src="https://player.twitch.tv/?channel=STREAMER_USERNAME&parent=hdr.report/Streams.html" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>`;
    } else {
        // Streamer is offline, do something else (e.g., display a message)
        console.log('Streamer is offline.');
    }
})
.catch(error => console.error('Error fetching stream status:', error));
