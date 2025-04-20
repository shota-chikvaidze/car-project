const ferrariData = [
    {
        image: '/Assets/images/ferrari-f80.jpeg',
        name: 'F80',
        year: '2025',
        price: "3,600,000 €",
        stats: "1,200Hp",
        topSpeed: "350 km/h",
        Torque: '1,100 Nm',
        DriveType: 'AWD / RWD',
    },
    {
        image: '/Assets/images/ferrari-laferari-aparta.jpg',
        name: 'LaFerrari Aparta',
        year: '2013',
        price: "1,300,000 €",
        stats: "963 Hp",
        topSpeed: "350 km/h",
        Torque: '900 Nm',
        DriveType: 'RWD',
    },
    {
        image: '/Assets/images/laferrari.jpg',
        name: 'LaFerrari',
        year: '2015',
        price: "3,286,875 €",
        stats: "950Hp",
        topSpeed: "350 km/h",
        Torque: '700 Nm',
        DriveType: 'RWD',
    },
    {
        image: '/Assets/images/enzo-ferrari.jpg',
        name: 'Enzo Ferrari',
        year: '2002',
        price: "3,449,900 €",
        stats: "660 Hp",
        topSpeed: "355 km/h",
        Torque: '657 Nm',
        DriveType: 'RWD',
    },
    {
        image: '/Assets/images/ferrari-f50.jpg',
        name: 'F 50',
        year: '1996',
        price: "3,000,000 €",
        stats: "512 Hp",
        topSpeed: "325 km/h",
        Torque: '471 Nm',
        DriveType: 'RWD',
    },
    {
        image: '/Assets/images/ferrari-f40.jpg',
        name: 'F 40',
        year: '1990',
        price: "2,658,231 €",
        stats: "471 Hp",
        topSpeed: "367 km/h",
        Torque: '426 Nm',
        DriveType: 'RWD',
    },
]

const ferrariContainer = document.getElementById('ferrari_sect');

ferrariData.forEach(ferrariCar => {
    const ferrariCard = document.createElement("div")
    ferrariCard.classList.add('ferrari_card')

    ferrariCard.innerHTML = `
        <div class="favorite_icon">
            <i class="fa-solid fa-heart" style="color: #ffffff;"></i>
        </div>
        <div class="ferrari_card_img">
            <img src="${ferrariCar.image}" >
        </div>

        <div class="info">
            <div class="car_name_year">
                <h2>${ferrariCar.name} </h2>
                <p>${ferrariCar.year}</p>
            </div>
            <div class="price">
                <h1> ${ferrariCar.price} </h1>
                <button class="buy_btn">Buy Now</button>
            </div>
            <div class="car_details_wrapper">
                <div class="car_details">
                    <h4>Horse Power:</h4>
                    <p> ${ferrariCar.stats} </p>
                </div>
                <div class="car_details">
                    <h4>Top Speed:</h4>
                    <p> ${ferrariCar.topSpeed} </p>
                </div>
                <div class="car_details">
                    <h4>Torque:</h4>
                    <p> ${ferrariCar.Torque} </p>
                </div>
                <div class="car_details">
                    <h4>Drive Type:</h4>
                    <p> ${ferrariCar.DriveType} </p>
                </div>
            </div>
            <div class="more_info">
                <button class="more_info_btn">More Info</button>
            </div>
        </div>

    `
    ferrariContainer.appendChild(ferrariCard)
})
