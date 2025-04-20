const lexusData = [
    {
        image: '/Assets/images/lexus-lx.jpg',
        name: 'Lexus LX 700h',
        year: '2025',
        price: "130,000 €",
        stats: "464 Hp",
        topSpeed: "210 km/h",
        Torque: "790 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/lexus-rx.jpg',
        name: 'Lexus RX 500h F SPORT',
        year: '2025',
        price: "75,000 €",
        stats: "366 Hp",
        topSpeed: "210 km/h",
        Torque: "550 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/lexus-nx.jpg',
        name: 'Lexus NX 450h+',
        year: '2025',
        price: "60,000 €",
        stats: "304 Hp",
        topSpeed: "200 km/h",
        Torque: "450 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/lexus-rz.jpg',
        name: 'Lexus RZ 450e',
        year: '2025',
        price: "68,000 €",
        stats: "313 Hp",
        topSpeed: "160 km/h",
        Torque: "435 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/lexus-tx.avif',
        name: 'Lexus TX 550h+',
        year: '2025',
        price: "80,000 €",
        stats: "404 Hp",
        topSpeed: "180 km/h",
        Torque: "550 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/lexus-ux.jpg',
        name: 'Lexus UX 300h',
        year: '2025',
        price: "45,000 €",
        stats: "196 Hp",
        topSpeed: "180 km/h",
        Torque: "188 Nm",
        DriveType: "FWD / AWD",
      },
          
]

const lexusContainer = document.getElementById('lexus_sect');

lexusData.forEach(lexusCar => {
    const lexusCard = document.createElement("div")
    lexusCard.classList.add('lexus_card')

    lexusCard.innerHTML = `
        <div class="favorite_icon">
            <i class="fa-solid fa-heart" style="color: #ffffff;"></i>
        </div>
        <div class="lexus_card_img">
            <img src="${lexusCar.image}" >
        </div>

        <div class="info">
            <div class="car_name_year">
                <h2>${lexusCar.name} </h2>
                <p>${lexusCar.year}</p>
            </div>
            <div class="price">
                <h1> ${lexusCar.price} </h1>
                <button class="buy_btn">Buy Now</button>
            </div>
            <div class="car_details_wrapper">
                <div class="car_details">
                    <h4>Horse Power:</h4>
                    <p> ${lexusCar.stats} </p>
                </div>
                <div class="car_details">
                    <h4>Top Speed:</h4>
                    <p> ${lexusCar.topSpeed} </p>
                </div>
                <div class="car_details">
                    <h4>Torque:</h4>
                    <p> ${lexusCar.Torque} </p>
                </div>
                <div class="car_details">
                    <h4>Drive Type:</h4>
                    <p> ${lexusCar.DriveType} </p>
                </div>
            </div>
            <div class="more_info">
                <button class="more_info_btn">More Info</button>
            </div>
        </div>

    `
    lexusContainer.appendChild(lexusCard)
})
