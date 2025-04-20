const audiData = [
    {
        image: '/Assets/images/audi-rs-tron.jpg',
        name: 'RS e-tron GT Performance',
        year: '2025',
        price: "167,000 €",
        stats: "912 Hp",
        topSpeed: "250 km/h",
        Torque: "1,000 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/audi-a6.jpg',
        name: 'A6 e-tron',
        year: '2025',
        price: "70,000 €",
        stats: "476 Hp",
        topSpeed: "210 km/h",
        Torque: "800 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/audi-q6.jpg',
        name: 'Q6 e-tron',
        year: '2025',
        price: "75,000 €",
        stats: "510 Hp",
        topSpeed: "210 km/h",
        Torque: "800 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/audi-rs6.jpg',
        name: 'RS6 Avant Performance',
        year: '2025',
        price: "150,000 €",
        stats: "630 Hp",
        topSpeed: "305 km/h",
        Torque: "850 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/audi-q5.avif',
        name: 'Q5 Hybrid',
        year: '2025',
        price: "60,000 €",
        stats: "265 Hp",
        topSpeed: "210 km/h",
        Torque: "370 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/audi-a5.avif',
        name: 'A5',
        year: '2025',
        price: "55,000 €",
        stats: "204 Hp",
        topSpeed: "240 km/h",
        Torque: "320 Nm",
        DriveType: "FWD",
      },      
]

const audiContainer = document.getElementById('audi_sect');

audiData.forEach(audiCar => {
    const audiCard = document.createElement("div")
    audiCard.classList.add('audi_card')

    audiCard.innerHTML = `
        <div class="favorite_icon">
            <i class="fa-solid fa-heart" style="color: #ffffff;"></i>
        </div>
        <div class="audi_card_img">
            <img src="${audiCar.image}" >
        </div>

        <div class="info">
            <div class="car_name_year">
                <h2>${audiCar.name} </h2>
                <p>${audiCar.year}</p>
            </div>
            <div class="price">
                <h1> ${audiCar.price} </h1>
                <button class="buy_btn">Buy Now</button>
            </div>
            <div class="car_details_wrapper">
                <div class="car_details">
                    <h4>Horse Power:</h4>
                    <p> ${audiCar.stats} </p>
                </div>
                <div class="car_details">
                    <h4>Top Speed:</h4>
                    <p> ${audiCar.topSpeed} </p>
                </div>
                <div class="car_details">
                    <h4>Torque:</h4>
                    <p> ${audiCar.Torque} </p>
                </div>
                <div class="car_details">
                    <h4>Drive Type:</h4>
                    <p> ${audiCar.DriveType} </p>
                </div>
            </div>
            <div class="more_info">
                <button class="more_info_btn">More Info</button>
            </div>
        </div>

    `
    audiContainer.appendChild(audiCard)
})
