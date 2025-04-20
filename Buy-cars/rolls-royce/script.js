const rollsRoyceData = [
    {
        image: '/Assets/images/rolls-spectre.jpg',
        name: 'Spectre',
        year: '2025',
        price: "420,000 €",
        stats: "577 Hp",
        topSpeed: "250 km/h",
        Torque: "900 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/rolls-phantom.jpg',
        name: 'Phantom Series II',
        year: '2024',
        price: "460,000 €",
        stats: "563 Hp",
        topSpeed: "250 km/h",
        Torque: "900 Nm",
        DriveType: "RWD",
      },
      {
        image: '/Assets/images/rolls-ghost.jpg',
        name: 'Ghost Series II',
        year: '2024',
        price: "340,000 €",
        stats: "563 Hp",
        topSpeed: "250 km/h",
        Torque: "850 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/rolls-cullinan.jpg',
        name: 'Cullinan',
        year: '2025',
        price: "407,750 €",
        stats: "563 Hp",
        topSpeed: "250 km/h",
        Torque: "850 Nm",
        DriveType: "AWD",
      },
      {
        image: '/Assets/images/rolls-droptail.jpg',
        name: 'Droptail',
        year: '2024',
        price: "32,000,000 €",
        stats: "593 Hp",
        topSpeed: "250 km/h",
        Torque: "840 Nm",
        DriveType: "RWD",
      },
      {
        image: '/Assets/images/rolls-spectre-black.jpg',
        name: 'Black Badge Spectre',
        year: '2025',
        price: "470,000 €",
        stats: "659 Hp",
        topSpeed: "250 km/h",
        Torque: "1,075 Nm",
        DriveType: "AWD",
      },
]

const rollsContainer = document.getElementById('rolls_royce_sect');

rollsRoyceData.forEach(rollsCar => {
    const rollsCard = document.createElement("div")
    rollsCard.classList.add('rolls_card')

    rollsCard.innerHTML = `
        <div class="favorite_icon">
            <i class="fa-solid fa-heart" style="color: #ffffff;"></i>
        </div>
        <div class="rolls_card_img">
            <img src="${rollsCar.image}" >
        </div>

        <div class="info">
            <div class="car_name_year">
                <h2>${rollsCar.name} </h2>
                <p>${rollsCar.year}</p>
            </div>
            <div class="price">
                <h1> ${rollsCar.price} </h1>
                <button class="buy_btn">Buy Now</button>
            </div>
            <div class="car_details_wrapper">
                <div class="car_details">
                    <h4>Horse Power:</h4>
                    <p> ${rollsCar.stats} </p>
                </div>
                <div class="car_details">
                    <h4>Top Speed:</h4>
                    <p> ${rollsCar.topSpeed} </p>
                </div>
                <div class="car_details">
                    <h4>Torque:</h4>
                    <p> ${rollsCar.Torque} </p>
                </div>
                <div class="car_details">
                    <h4>Drive Type:</h4>
                    <p> ${rollsCar.DriveType} </p>
                </div>
            </div>
            <div class="more_info">
                <button class="more_info_btn">More Info</button>
            </div>
        </div>

    `
    rollsContainer.appendChild(rollsCard)
})
