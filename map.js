// map.js

// List of cities with lat/lng coordinates
const cities = [
  { name: "New Delhi", lat: 28.6139, lng: 77.2090 },
  { name: "Mumbai", lat: 19.0760, lng: 72.8777 },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "New York", lat: 40.7128, lng: -74.0060 }
];

// Initialize Google Map
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 2,
  center: { lat: 20, lng: 0 },
});

// Function to fetch AQI for a city using OpenAQ API
async function getAQI(cityName) {
  try {
    const response = await fetch(`https://api.openaq.org/v2/latest?city=${cityName}`);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      // Example: take PM2.5 value
      const pm25 = data.results[0].measurements.find(m => m.parameter === "pm25");
      return pm25 ? pm25.value : "N/A";
    }
    return "N/A";
  } catch (err) {
    console.error(err);
    return "N/A";
  }
}

// Add markers to the map
cities.forEach(async city => {
  const aqi = await getAQI(city.name);

  const marker = new google.maps.Marker({
    position: { lat: city.lat, lng: city.lng },
    map: map,
    title: city.name,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillColor: aqi <= 50 ? "green" : aqi <= 100 ? "yellow" : "red",
      fillOpacity: 0.8,
      strokeWeight: 0.5
    }
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `<div class="info-window"><strong>${city.name}</strong><br>AQI (PM2.5): ${aqi}</div>`
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
});
