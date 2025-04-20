function onClick() {
  var dropdown = document.querySelector('.dropdown_content_wrapper')
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none'
}

const auctionCars = [
    {
      image: "/Assets/images/aston-martin-auction.png",
      name: "Aston Martin DBS",
      year: "2020",
      mileage: "35,349 km",
      damage: "Front",
      condition: "Fair",
      sellType: "No reserve",
      currentprice: "89,888 $",
      price: "93,888 $",
    },

    {
      image: "/Assets/images/mclaren-auction.jpg",
      name: "McLaren 720S",
      year: "2020",
      mileage: "18,364 km",
      damage: "No",
      condition: "Excellent",
      sellType: "Reserve auction",
      currentprice: "259,629 $",
      price: "304,057 $",
    },

    {
      image: "/Assets/images/nissan-gtr-auction.png",
      name: "Nissan GT-R",
      year: "2018",
      mileage: "36,156 km",
      damage: "No",
      condition: "Good",
      sellType: "Unconditional sale",
      currentprice: "101,685 $",
      price: "121,685 $",
    },

    {
      image: "/Assets/images/corvette-auction.avif",
      name: "Corvette Z06",
      year: "2017",
      mileage: "51,839 km",
      damage: "Front",
      condition: "Good",
      sellType: "No reserve",
      currentprice: "$110,100 $",
      price: "$129,900 $",
    },
    
    {
      image: "/Assets/images/jaguar-auction.jpg",
      name: "Jaguar F-Type",
      year: "2020",
      mileage: "53,234 km",
      damage: "No",
      condition: "Excellent",
      sellType: "Reserve auction",
      currentprice: "62,750 $",
      price: "85,325 $",
    },

    {
      image: "/Assets/images/pagani-auction.jpg",
      name: "Pagani Huayra",
      year: "2017",
      mileage: "18,822 km",
      damage: "No",
      condition: "Excellent",
      sellType: "Unconditional sale",
      currentprice: "540,084 $",
      price: "590,524 $",
    },

    {
      image: "/Assets/images/alfa-romeo-auction.png",
      name: "Alfa Romeo Giulia",
      year: "2024",
      mileage: "37,838 km",
      damage: "Rear",
      condition: "Fair",
      sellType: "No reserve",
      currentprice: "39,690 $",
      price: "41,690 $",
    },

    {
      image: "/Assets/images/cadillac-auction.avif",
      name: "Cadillac CT5-V",
      year: "2018",
      mileage: "52,042 km",
      damage: "No",
      condition: "Excellent",
      sellType: "Unconditional sale",
      currentprice: "91,440 $",
      price: "92,900 $",
    },

    {
      image: "/Assets/images/supra-auction.png",
      name: "Toyota Supra GR",
      year: "2023",
      mileage: "25,920 km",
      damage: "Front and back",
      condition: "Bad",
      sellType: "Reserve auction",
      currentprice: "$30,725 $",
      price: "$35,900 $",
    },

    {
      image: "/Assets/images/shelby-auction.avif",
      name: "Shelby GT500",
      year: "2019",
      mileage: "24,115 km",
      damage: "No",
      condition: "Excellent",
      sellType: "Unconditional sale",
      currentprice: "80,815",
      price: "82,315",
    },

    {
      image: "/Assets/images/mazda-auction.jpeg",
      name: "Mazda RX-7",
      year: "2022",
      mileage: "50,095 km",
      damage: "Front",
      condition: "Fair",
      sellType: "Unconditional sale",
      currentprice: "16,372 $",
      price: "19,372 $",
    },

    {
      image: "/Assets/images/acura-auction.png",
      name: "Acura NSX",
      year: "2021",
      mileage: "47,827 km",
      damage: "Rear",
      condition: "Fair",
      sellType: "Reserve auction",
      currentprice: "159,500 $",
      price: "164,900 $",
    },

    {
      image: "/Assets/images/lotus-auction.png",
      name: "Lotus Emira",
      year: "2019",
      mileage: "7,209 km",
      damage: "Minor",
      condition: "Excellent",
      sellType: "Reserve auction",
      currentprice: "93,900 $",
      price: "101,900 $",
    },

    {
      image: "/Assets/images/genesis-auction.jpg",
      name: "Genesis G70",
      year: "2017",
      mileage: "26,272 km",
      damage: "No",
      condition: "Excellent",
      sellType: "Reserve auction",
      currentprice: "52,300 $",
      price: "54,999 $",
    },

    {
        image: "/Assets/images/subaru-auction.avif",
        name: "Subaru WRX STI",
        year: "2021",
        mileage: "7,546 km",
        damage: "No",
        condition: "Excellent",
        sellType: "Reserve auction",
        currentprice: "22,747 $",
        price: "30,970 $",
      },

      {
        image: "/Assets/images/lexus-auction.avif",
        name: "Lexus RC F",
        year: "2024",
        mileage: "50,294 km",
        damage: "No",
        condition: "Fair",
        sellType: "Unconditional sale",
        currentprice: "60,050 $",
        price: "62,050 $",
      },

      {
        image: "/Assets/images/infiniti-auction.jpg",
        name: "Infiniti Q60",
        year: "2022",
        mileage: "6,701 km",
        damage: "Rear",
        condition: "ex",
        sellType: "No reserve",
        currentprice: "28,775 $",
        price: "31,775 $",
      },

      {
        image: "/Assets/images/kia-auction.jpg",
        name: "Kia Stinger",
        year: "2020",
        mileage: "28,294 km",
        damage: "no",
        condition: "Excellent",
        sellType: "Unconditional sale",
        currentprice: "34,125 $",
        price: "37,725 $",
      },

      {
        image: "/Assets/images/civic-auction.jpeg",
        name: "Civic Type R",
        year: "2024",
        mileage: "17,537 km",
        damage: "Front",
        condition: "Fair",
        sellType: "Unconditional sale",
        currentprice: "38,945 $",
        price: "39,945 $",
      },

      {
        image: "/Assets/images/golf-auction.jpeg",
        name: "Volkswagen Golf R",
        year: "2017",
        mileage: "51,613 km",
        damage: "Front",
        condition: "Fair",
        sellType: "No reserve",
        currentprice: "16,194 $",
        price: "21,194 $",
      },

      {
        image: "/Assets/images/hyundai-auction.avif",
        name: "Hyundai Elantra N",
        year: "2017",
        mileage: "27,726 km",
        damage: "No",
        condition: "Good",
        sellType: "Unconditional sale",
        currentprice: "21,085 $",
        price: "27,085 $",
      },

      {
        image: "/Assets/images/audi-auction.jpg",
        name: "Audi RS5",
        year: "2024",
        mileage: "12,657 km",
        damage: "No",
        condition: "Excellent",
        sellType: "Reserve auction",
        currentprice: "79,900 $",
        price: "83,959 $",
      },

      {
        image: "/Assets/images/porsche-auction.jpg",
        name: "Porsche Taycan",
        year: "2019",
        mileage: "28,967 km",
        damage: "No",
        condition: "Fair",
        sellType: "Unconditional sale",
        currentprice: "101,395 $",
        price: "124,999 $",
      },

      {
        image: "/Assets/images/bmw-auction.jpg",
        name: "BMW i8",
        year: "2017",
        mileage: "11,662 km",
        damage: "Front",
        condition: "Bad",
        sellType: "Reserve auction",
        currentprice: "76,195 $",
        price: "81,195 $",
      },

      {
        image: "/Assets/images/mercedes-auction.jpg",
        name: "Mercedes-AMG A45",
        year: "2023",
        mileage: "44,818 km",
        damage: "No",
        condition: "Good",
        sellType: "Unconditional sale",
        currentprice: "55,395 $",
        price: "61,795 $",
      },

      {
        image: "/Assets/images/tesla-auction.jpg",
        name: "Tesla Model S",
        year: "2021",
        mileage: "27,548 km",
        damage: "No",
        condition: "Excellent",
        sellType: "No reserve",
        currentprice: "78,190 $",
        price: "81,190, $",
      },

      {
        image: "/Assets/images/dodge-auction.png",
        name: "Dodge Demon",
        year: "2021",
        mileage: "13,029 km",
        damage: "No",
        condition: "Good",
        sellType: "Unconditional sale",
        currentprice: "129,222 $",
        price: "137,826 $",
      },
        
]

const container = document.getElementById("auction_container");
const searchInput = document.getElementById("searchInput");

function displayCars(cars) {
  container.innerHTML = "";

  cars.forEach(car => {
    const carProduct = document.createElement("div");
    carProduct.classList.add("auction_product");

    carProduct.innerHTML = `
      <div class="auction_image">
          <img src="${car.image}">
      </div>
      <div class="auction_info">
          <div class="name_price_convertor">
              <div class="car_name_year">
                  <h2>${car.name} <span>${car.year}</span> </h2>
              </div>
              <div class="currency_icon">
                  <button>$</button>
                  <button>₾</button>
              </div>
          </div>
          <div class="bid_wrapper">
              <div class="current_price">
                  <h4>Current price <span>0 bids</span></h4>
                  <h1>${car.currentprice}</h1>
              </div>
              <div class="price">
                  <h4>Buy now</h4>
                  <h1>${car.price}</h1>
              </div>
          </div>
          <div class="car_details_wrapper">
              <div class="car_details">
                  <h4>Mileage:</h4>
                  <p>${car.mileage}</p>
              </div>
              <div class="car_details">
                  <h4>Damage:</h4>
                  <p>${car.damage}</p>
              </div>
              <div class="car_details">
                  <h4>Condition:</h4>
                  <p>${car.condition}</p>
              </div>
              <div class="car_details">
                  <h4>Type of sale:</h4>
                  <p>${car.sellType}</p>
              </div>
          </div>
          <div class="countdown">
              <div class="time">⏳ 02 d. 22 h 15 n 14 s.</div>
              <div class="viewers">🔥 0 viewers</div>
          </div>
      </div>
    `;

    container.appendChild(carProduct);
  });
}

displayCars(auctionCars);

function filter() {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredCars = auctionCars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm)
  );

  displayCars(filteredCars);
}

searchInput.addEventListener("input", filter);



function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
}