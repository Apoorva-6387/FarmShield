
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=881e372e64f2416086f6374d3bb23c83&lat=${latitude}&long=${longitude}`)
                    .then(response => response.json())
                    .then(data => {
                        const locationData = {
                            latitude: latitude,
                            longitude: longitude,
                            country: data.country_name,
                            state: data.state_prov,
                            city: data.city,
                            district: data.district,
                            zipcode: data.zipcode,
                            ip: data.ip,
                            timestamp: new Date().toISOString()
                        };
                        localStorage.setItem('userLocation', JSON.stringify(locationData));
                        
                        storeLocationInDB(locationData);
                    })
                    .catch(error => {
                        console.error('Error getting location details:', error);
                    });
            },
            function(error) {
                console.error('Error getting location:', error);
              
                getLocationByIP();
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
        getLocationByIP();
    }
}

function getLocationByIP() {
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=881e372e64f2416086f6374d3bb23c83`)
        .then(response => response.json())
        .then(data => {
            const locationData = {
                latitude: data.latitude,
                longitude: data.longitude,
                country: data.country_name,
                state: data.state_prov,
                city: data.city,
                district: data.district,
                zipcode: data.zipcode,
                ip: data.ip,
                timestamp: new Date().toISOString(),
                source: 'ip-only'
            };
            localStorage.setItem('userLocation', JSON.stringify(locationData));
            storeLocationInDB(locationData);
        })
        .catch(error => {
            console.error('Error getting IP-based location:', error);
        });
}

function storeLocationInDB(locationData) {
    fetch('http://localhost:5000/api/location', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(locationData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Location stored successfully:', data);
    })
    .catch(error => {
        console.error('Error storing location:', error);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    if (!sessionStorage.getItem('locationRequested')) {
        getUserLocation();
        sessionStorage.setItem('locationRequested', 'true');
    }
});