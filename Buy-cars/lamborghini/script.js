const lamorghiniData = [
    {
        image: '/Assets/images/lamborghini-revulto.webp',
        name: 'Lamborghini Revuelto',
        year: '2024',
        price: "700,000 €",
        stats: "1,001 Hp",
        topSpeed: "350+ km/h",
        Torque: "1,062 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/lamborghini-huracan-tecnica.webp',
        name: 'Huracán Tecnica',
        year: '2024',
        price: "250,000 €",
        stats: "640 Hp",
        topSpeed: "325 km/h",
        Torque: "565 Nm",
        DriveType: "RWD",
      },
      {
        image: '/Assets/images/lamborghini-huracan-sterrato.jpg',
        name: 'Huracán Sterrato',
        year: '2024',
        price: "280,000 €",
        stats: "610 Hp",
        topSpeed: "260 km/h",
        Torque: "560 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/lamborghini-urus.webp',
        name: 'Urus Performante',
        year: '2024',
        price: "260,000 €",
        stats: "666 Hp",
        topSpeed: "306 km/h",
        Torque: "850 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/lamborghini-invincible.jpg',
        name: 'Lamborghini Invencible',
        year: '2024',
        price: "2,000,000 €",
        stats: "780 Hp",
        topSpeed: "350+ km/h",
        Torque: "720 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/lamborghini-autentica.webp',
        name: 'Lamborghini Auténtica',
        year: '2024',
        price: "2,000,000 €",
        stats: "780 Hp",
        topSpeed: "350+ km/h",
        Torque: "720 Nm",
        DriveType: "RWD",
      },
      
]

const lamborghiniContainer = document.getElementById('lamborghini_sect');

lamorghiniData.forEach(lamborghiniCar => {
    const lamborghiniCard = document.createElement("div")
    lamborghiniCard.classList.add('lamborghini_card')

    lamborghiniCard.innerHTML = `
        <div class="favorite_icon">
            <i class="fa-solid fa-heart" style="color: #ffffff;"></i>
        </div>
        <div class="lamborghini_card_img">
            <img src="${lamborghiniCar.image}" >
        </div>

        <div class="info">
            <div class="car_name_year">
                <h2>${lamborghiniCar.name} </h2>
                <p>${lamborghiniCar.year}</p>
            </div>
            <div class="price">
                <h1> ${lamborghiniCar.price} </h1>
                <button class="buy_btn">Buy Now</button>
            </div>
            <div class="car_details_wrapper">
                <div class="car_details">
                    <h4>Horse Power:</h4>
                    <p> ${lamborghiniCar.stats} </p>
                </div>
                <div class="car_details">
                    <h4>Top Speed:</h4>
                    <p> ${lamborghiniCar.topSpeed} </p>
                </div>
                <div class="car_details">
                    <h4>Torque:</h4>
                    <p> ${lamborghiniCar.Torque} </p>
                </div>
                <div class="car_details">
                    <h4>Drive Type:</h4>
                    <p> ${lamborghiniCar.DriveType} </p>
                </div>
            </div>
            <div class="more_info">
                <button class="more_info_btn">More Info</button>
            </div>
        </div>

    `
    lamborghiniContainer.appendChild(lamborghiniCard)
})
