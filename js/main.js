function initMap() {
    const icon = {
        url: './img/marker6.svg',
        scaledSize: new google.maps.Size(30, 30),
    };
    const sights = [
        {
            title: 'Києво-Печерська лавра',
            position: { lat: 50.4346375, lng: 30.5550671 },
            popup: `<div class="popup"><img src="./img/lavra.jpg" alt="lavra">
    <p>Свято-Успенська Києво-Печерська лавра – одна з найважливіших православних святинь</p></div>`,
        },
        {
            title: 'Батьківщина-мати',
            position: { lat: 50.4265249, lng: 30.5608634 },
            popup: `<div class="popup"><img src="./img/rodina.jpg" alt="rodina">
    <p>Батьківщина-мати — монументальна скульптура у Києві на правому березі Дніпра. Є п'ятою за величиною статуєю світу та найвищою в Україні</p></div>`,
        },
        {
            title: 'НСК Олімпійський',
            position: { lat: 50.4334058, lng: 30.5196673 },
            popup: `<div class="popup"><img src="./img/olympic.jpg" alt="olympic">
    <p>Національний спортивний комплекс «Олімпійський» - багатофункціональна спортивна арена для проведення футбольних матчів та легкоатлетичних змагань</p></div>`,
        },
        {
            title: 'Андріївський узвіз',
            position: { lat: 50.4590782, lng: 30.5086546 },
            popup: `<div class="popup"><img src="./img/descent.jpg" alt="descent">
    <p>Андріївський узвіз у Києві — один із старовинних шляхів, що з'єднують Верхнє місто, його центральну частину, з торговим Подолом</p></div>`,
        },
        {
            title: 'Майдан Незалежності',
            position: { lat: 50.450555, lng: 30.5187848 },
            popup: `<div class="popup"><img src="./img/maidan.jpg" alt="maidan">
    <p>Майдан Незалежності – центральна площа Києва</p></div>`,
        },
        {
            title: 'Маріїнський палац',
            position: { lat: 50.4483552, lng: 30.5331247 },
            popup: `<div class="popup"><img src="./img/palace.jpg" alt="palace">
    <p>Маріїнський палац – двоповерховий палац у Києві на високому правому березі Дніпра. Знаходиться поряд із будівлею Верховної Ради та є церемоніальною резиденцією Президента України</p></div>`,
        },
    ];
    const map = new google.maps.Map(document.querySelector('.map'), {
        center: { lat: 50.4442006, lng: 30.5329222 },
        zoom: 13,
        styles: [
            {
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#ebe3cd',
                    },
                ],
            },
            {
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#523735',
                    },
                ],
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#f5f1e6',
                    },
                ],
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#c9b2a6',
                    },
                ],
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#dcd2be',
                    },
                ],
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#ae9e90',
                    },
                ],
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#dfd2ae',
                    },
                ],
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#dfd2ae',
                    },
                ],
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#93817c',
                    },
                ],
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#a5b076',
                    },
                ],
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#447530',
                    },
                ],
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#f5f1e6',
                    },
                ],
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#fdfcf8',
                    },
                ],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#f8c967',
                    },
                ],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#e9bc62',
                    },
                ],
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#e98d58',
                    },
                ],
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#db8555',
                    },
                ],
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#806b63',
                    },
                ],
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#dfd2ae',
                    },
                ],
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#8f7d77',
                    },
                ],
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#ebe3cd',
                    },
                ],
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#dfd2ae',
                    },
                ],
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#b9d3c2',
                    },
                ],
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#92998d',
                    },
                ],
            },
        ],
    });
    const markers = [];

    sights.forEach((element) => {
        let marker = new google.maps.Marker({
            position: element.position,
            map,
            title: element.title,
            icon: icon,
            animation: google.maps.Animation.DROP,
            open() {
                let info = new google.maps.InfoWindow({
                    content: element.popup,
                });
                this.addListener('click', function () {
                    info.open(map, this);
                });
            },
            stop() {
                this.addListener('click', function () {
                    this.setAnimation(null);
                });
            },
            markerClick() {
                let sight = document.querySelectorAll('h2');
                for (let i = 0; i < sights.length; i++) {
                    sight[i].addEventListener('click', function () {
                        markers[i].setAnimation(google.maps.Animation.BOUNCE);
                        map.setCenter(sights[i].position);
                    });
                }
            },
        });
        markers.push(marker);
        marker.open();
        marker.stop();
        marker.markerClick();
    });
}

window.initMap = initMap;