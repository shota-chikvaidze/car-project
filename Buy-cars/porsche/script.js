const porcheData = [
    {
        image: '/Assets/images/porsche-carrera.webp',
        name: '911 Carrera GTS Hybrid',
        year: '2025',
        price: "160,000 €",
        stats: "485 Hp",
        topSpeed: "312 km/h",
        Torque: "570 Nm",
        DriveType: "RWD",
      },
      {
        image: '/Assets/images/porsche-turbo-s.jpg',
        name: 'Taycan Turbo S',
        year: '2024',
        price: "180,000 €",
        stats: "700 Hp",
        topSpeed: "260 km/h",
        Torque: "1,050 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/porsche-panamera.jpg',
        name: 'Panamera Turbo E-Hybrid',
        year: '2025',
        price: "235,000 €",
        stats: "670 Hp",
        topSpeed: "315 km/h",
        Torque: "930 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/porsche-macan.avif',
        name: 'Macan Turbo Electric',
        year: '2024',
        price: "120,000 €",
        stats: "639 Hp",
        topSpeed: "260 km/h",
        Torque: "1,130 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/porsche-cayenne.jpg',
        name: 'Cayenne Turbo E-Hybrid',
        year: '2024',
        price: "170,000 €",
        stats: "739 Hp",
        topSpeed: "295 km/h",
        Torque: "950 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/porsche-cayman.jpeg',
        name: '718 Cayman GT4 RS',
        year: '2024',
        price: "150,000 €",
        stats: "500 Hp",
        topSpeed: "315 km/h",
        Torque: "450 Nm",
        DriveType: "RWD",
      },
      
      
]

const porcheContainer = document.getElementById('porche_sect');

porcheData.forEach(porcheCar => {
    const porcheCard = document.createElement("div")
    porcheCard.classList.add('porche_card')

    porcheCard.innerHTML = `
        <div class="favorite_icon">
            <i class="fa-solid fa-heart" style="color: #ffffff;"></i>
        </div>
        <div class="porche_card_img">
            <img src="${porcheCar.image}" >
        </div>

        <div class="info">
            <div class="car_name_year">
                <h2>${porcheCar.name} </h2>
                <p>${porcheCar.year}</p>
            </div>
            <div class="price">
                <h1> ${porcheCar.price} </h1>
                <button class="buy_btn">Buy Now</button>
            </div>
            <div class="car_details_wrapper">
                <div class="car_details">
                    <h4>Horse Power:</h4>
                    <p> ${porcheCar.stats} </p>
                </div>
                <div class="car_details">
                    <h4>Top Speed:</h4>
                    <p> ${porcheCar.topSpeed} </p>
                </div>
                <div class="car_details">
                    <h4>Torque:</h4>
                    <p> ${porcheCar.Torque} </p>
                </div>
                <div class="car_details">
                    <h4>Drive Type:</h4>
                    <p> ${porcheCar.DriveType} </p>
                </div>
            </div>
            <div class="more_info">
                <button class="more_info_btn">More Info</button>
            </div>
        </div>

    `
    porcheContainer.appendChild(porcheCard)
})
