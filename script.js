//Get info about a place
async function getPlaceData() {
  const response = await fetch(`https://www.wienerlinien.at/ogd_realtime/monitor?stopId=147&activateTrafficInfo=stoerungkurz&activateTrafficInfo=stoerunglang&activateTrafficInfo=aufzugsinfo`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'https://ivanburda1986.github.io/nextBim/',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'no-cors'
    }
  });
  console.log(response.json());
}