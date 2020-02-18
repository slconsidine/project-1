const urlParams = new URLSearchParams(window.location.search);
const petAddress = urlParams.get('petAddress');
const usrAddress = urlParams.get('usrLocation');
console.log(petAddress);
console.log(usrAddress);
var map;
var directionsManager;

function GetMap()
{
    map = new Microsoft.Maps.Map('#myMap', {});
    console.log(map);

    //Load the directions module.
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        //Create an instance of the directions manager.
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

        //Specify where to display the route instructions.
        directionsManager.setRenderOptions({ itineraryContainer: '#directionsItinerary' });

        //Create waypoints to route between.
        var petWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: petAddress });
        directionsManager.addWaypoint(petWaypoint);

        var usrWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: usrAddress });
        directionsManager.addWaypoint(usrWaypoint);

        //Specify the element in which the itinerary will be rendered.
        directionsManager.setRenderOptions({ itineraryContainer: '#directionsItinerary' });

        //Calculate directions.
        directionsManager.calculateDirections();
    });
}