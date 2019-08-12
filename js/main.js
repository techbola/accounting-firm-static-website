function initMap(){
    // Your location
    const loc = { lat: 6.639270, lng: 3.355880 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 5,
        center: loc
    });
    // the marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}