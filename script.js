//Get info about a place
async function getPlaceData() {
  const response = await fetch(`https://api.allorigins.win/get?url=https://www.wienerlinien.at/qando-fpa/route?aPP=1&aPD=1&aTI=1&aflT=1&walkMT=15&version=1.1&from=16.33491%3A48.22863%3AWGS84&to=60201184&date=2020-08-27T22%3A57%3A30.378%2B0200&deparr=dep&ptRO=ptMinTime&ptMC=0&ptWS=ptNormal&ptV=ptTrainR&ptV=ptTrainS&ptV=ptMetro&ptV=ptTram&ptV=ptAirportBus&ptV=ptTrainCAT&ptV=ptBusCity&ptV=ptBusNight&ptV=ptBusRegion&ptV=ptTaxi&ptMWT=30`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(JSON.parse(data.contents));
}

//Home --> Campus
//46: Schottentor>Absberggasse
//145: Aumannplatz>Schottentor

//http://www.wienerlinien.at/ogd_routing/XML_TRIP_REQUEST2?locationServerActive=1&outputFormat=JSON&type_origin=stopID&name_origin=Aumannplatz&type_destination=any&name_destination=Schottentor&ptOptionsActive=1&itOptionsActive=1&excludedMeans=4&changeSpeed=slow&routeType=LEASTINTERCHANGE&imparedOptionsActive=1&noSolidStairs=1&lowPlatformVhcl=1