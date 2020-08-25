//Get info about a place
async function getPlaceData() {
  const response = await fetch(`https://api.allorigins.win/get?url=http://www.wienerlinien.at/ogd_realtime/monitor?stopId=143`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json();
  console.log(JSON.parse(data.contents));
}