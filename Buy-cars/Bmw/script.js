const bmwData = [
    {
        image: '/Assets/images/bmww-m8.avif',
        name: 'BMW M8 Competition',
        year: '2024',
        price: '160,000 €',
        stats: '625Hp',
        topSpeed: '305 km/h',
        Torque: '750 Nm',
        DriveType: 'AWD',
      },
      
      {
        image: '/Assets/images/BMW-i7.avif',
        name: 'BMW i7 M70 xDrive',
        year: '2023',
        price: '185,000 €',
        stats: '660Hp',
        topSpeed: '250 km/h',
        Torque: '1,100 Nm',
        DriveType: 'AWD (Electric)',
      },
      
      {
        image: '/Assets/images/bmw-xm.jpeg',
        name: 'BMW XM Label Red',
        year: '2024',
        price: '190,000 €',
        stats: '750Hp',
        topSpeed: '282 km/h',
        Torque: '1,000 Nm',
        DriveType: 'AWD (Hybrid)',
      },
      
      {
        image: '/Assets/images/bmw-m2.jpg',
        name: 'BMW M2 G87',
        year: '2023',
        price: '80,000 €',
        stats: '453Hp',
        topSpeed: '280 km/h',
        Torque: '550 Nm',
        DriveType: 'RWD',
      },
      
      {
        image: '/Assets/images/bmw-i4.webp',
        name: 'BMW i4 M50',
        year: '2023',
        price: '75,000 €',
        stats: '544Hp',
        topSpeed: '225 km/h',
        Torque: '795 Nm',
        DriveType: 'AWD (Electric)',
      },
      
      {
        image: '/Assets/images/bmw-5-series.jpg',
        name: 'BMW 5 Series G60',
        year: '2024',
        price: '95,000 €',
        stats: '601Hp',
        topSpeed: '230 km/h',
        Torque: '820 Nm',
        DriveType: 'AWD (Electric)',
      },
      
]

const bmwContainer = document.getElementById('bmw_sect');

bmwData.forEach(bmwCar => {
    const bmwCard = document.createElement("div")
    bmwCard.classList.add('bmw_card')

    bmwCard.innerHTML = `
        <div class="favorite_icon">
            <i class="fa-solid fa-heart" style="color: #ffffff;"></i>
        </div>
        <div class="bmw_card_img">
            <img src="${bmwCar.image}" >
        </div>

        <div class="info">
            <div class="car_name_year">
                <h2>${bmwCar.name} </h2>
                <p>${bmwCar.year}</p>
            </div>
            <div class="price">
                <h1> ${bmwCar.price} </h1>
                <button class="buy_btn">Buy Now</button>
            </div>
            <div class="car_details_wrapper">
                <div class="car_details">
                    <h4>Horse Power:</h4>
                    <p> ${bmwCar.stats} </p>
                </div>
                <div class="car_details">
                    <h4>Top Speed:</h4>
                    <p> ${bmwCar.topSpeed} </p>
                </div>
                <div class="car_details">
                    <h4>Torque:</h4>
                    <p> ${bmwCar.Torque} </p>
                </div>
                <div class="car_details">
                    <h4>Drive Type:</h4>
                    <p> ${bmwCar.DriveType} </p>
                </div>
            </div>
            <div class="more_info">
                <button class="more_info_btn">More Info</button>
            </div>
        </div>

    `
    bmwContainer.appendChild(bmwCard)
})