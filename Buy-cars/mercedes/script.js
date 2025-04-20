const mercedesData = [
    {
        image: '/Assets/images/mercedes-amg-gt.jpeg',
        name: 'AMG GT 63 S E PERFORMANCE',
        year: '2024',
        price: "195,000 €",
        stats: "843 Hp",
        topSpeed: "316 km/h",
        Torque: "1,470 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/mercedes-benz-eqs.avif',
        name: 'Mercedes-Benz EQS 580 4MATIC',
        year: '2023',
        price: "135,000 €",
        stats: "523 Hp",
        topSpeed: "210 km/h",
        Torque: "855 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/mercedes-benz-glc.jpg',
        name: 'Mercedes-Benz GLC 300 4MATIC',
        year: '2024',
        price: "60,000 €",
        stats: "258 Hp",
        topSpeed: "240 km/h",
        Torque: "400 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/mercedes-amg-sl.avif',
        name: 'Mercedes-AMG SL 55 4MATIC+',
        year: '2023',
        price: "145,000 €",
        stats: "476 Hp",
        topSpeed: "295 km/h",
        Torque: "700 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/mercedes-benz-cle.jpg',
        name: 'Mercedes-Benz CLE 300 Coupe',
        year: '2024',
        price: "70,000 €",
        stats: "258 Hp",
        topSpeed: "250 km/h",
        Torque: "400 Nm",
        DriveType: "RWD",
      },
      {
        image: '/Assets/images/mercedes-amg-c.jpeg',
        name: 'AMG C 63 S E PERFORMANCE',
        year: '2024',
        price: "120,000 €",
        stats: "680 Hp",
        topSpeed: "280 km/h",
        Torque: "1,020 Nm",
        DriveType: "AWD",
      },
      
]

const mercedesContainer = document.getElementById('mercedes_sect');

mercedesData.forEach(mercedesCar => {
    const mercedesCard = document.createElement("div")
    mercedesCard.classList.add('mercedes_card')

    mercedesCard.innerHTML = `
        <div class="favorite_icon">
            <i class="fa-solid fa-heart" style="color: #ffffff;"></i>
        </div>
        <div class="mercedes_card_img">
            <img src="${mercedesCar.image}" >
        </div>

        <div class="info">
            <div class="car_name_year">
                <h2>${mercedesCar.name} </h2>
                <p>${mercedesCar.year}</p>
            </div>
            <div class="price">
                <h1> ${mercedesCar.price} </h1>
                <button class="buy_btn">Buy Now</button>
            </div>
            <div class="car_details_wrapper">
                <div class="car_details">
                    <h4>Horse Power:</h4>
                    <p> ${mercedesCar.stats} </p>
                </div>
                <div class="car_details">
                    <h4>Top Speed:</h4>
                    <p> ${mercedesCar.topSpeed} </p>
                </div>
                <div class="car_details">
                    <h4>Torque:</h4>
                    <p> ${mercedesCar.Torque} </p>
                </div>
                <div class="car_details">
                    <h4>Drive Type:</h4>
                    <p> ${mercedesCar.DriveType} </p>
                </div>
            </div>
            <div class="more_info">
                <button class="more_info_btn">More Info</button>
            </div>
        </div>

    `
    mercedesContainer.appendChild(mercedesCard)
})
