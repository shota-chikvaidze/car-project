function onClick() {
    var dropdown = document.querySelector('.dropdown_content_wrapper')
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none'
}

const track = document.getElementById("carousel_track")
const prevBtn = document.getElementById("prev_btn")
const nextBtn = document.getElementById("next_btn")

var currentSlide = 0;
var totalCards = document.querySelectorAll(".product_1").length
var visibleCards = 5
var cardWidth = 300;

nextBtn.addEventListener("click", () => {
    if(currentSlide < totalCards - visibleCards) {
        currentSlide++;
        track.style.transform = `translateX(-${currentSlide * cardWidth}px)`

    }
})

prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    }
});


const cars = [
    {
        name: "Ferrari LaFerrari",
        image: '/Assets/images/ferrari-laferari.png',
        specs: "986 HP · Hybrid · 2.5s",
        price: "💰$1,200,000",
        button: " View details ",
        link: "/details-folder/ferrari-details/index.html#featured_sect"
    },
    {
        name: "BMW M4 Competition",
        image: '/Assets/images/bmwww.png',
        specs: "503 HP · Twin-Turbo I6 · 3.8s",
        price: "💰$85,000",
        button: " View details ",
        link: "/details-folder/bmw-details/index.html"
    },
    {
        name: "Mercedes-AMG GT",
        image: '/Assets/images/mercedes-amg.png',
        specs: "577 HP · V8 Biturbo · 3.5s",
        price: "💰$155,000",
        button: " View details ",
        link: "/details-folder/mercedes-details/index.html",
    },
    {
        name: "Lamborghini Huracán",
        image: '/Assets/images/lamborghini.png',
        specs: "631 HP · V10 NA · 2.9s",
        price: "💰$230,000",
        button: " View details ",
        link: "/details-folder/lamborghini-details/index.html",
    },
    {
        name: "Porsche 911 GT3 RS",
        image: '/Assets/images/porche.png',
        specs: " 518 HP · Flat-6 NA · 3.0s",
        price: "💰$220,000",
        button: " View details ",
        link: "/details-folder/porche-details/index.html",
    },
    {
        name: "Ferrari SF90 Stradale",
        image: '/Assets/images/ferrari-sf90.png',
        specs: "986 HP · Hybrid V8 · 2.5s",
        price: "💰$1,200,000",
        button: " View details ",
        link: "/details-folder/ferrariSF-details/index.html",
    },
    {
        name: "Rolls-Royce Wraith",
        image: '/Assets/images/rolls.png',
        specs: "624 HP · V12 Twin-Turbo · 4.4s",
        price: "💰$330,000",
        button: " View details ", 
        link: "/details-folder/rollsroyce-details/index.html",
    },
    {
        name: "Dodge Charger",
        image: '/Assets/images/dodge-charger.avif',
        specs: "552 HP · V10 NA · 3.7s",
        price: "💰$800,000",
        button: " View details ",
        link: "/details-folder/dodge-details/index.html",
    },
    {
        name: "Audi R8",
        image: '/Assets/images/audi.avif',
        specs: "602 HP · V10 NA · 3.3s",
        price: "💰$195,000",
        button: " View details ",
        link: "/details-folder/audi-details/index.html",
    },
]


const container = document.getElementById("featured_container")

cars.forEach(car => {
    const product = document.createElement("div")
    product.classList.add("product_div")

    if(car.name === "Dodge Charger") {
        product.classList.add("correct_margins")
    }

    if(car.name === "Porsche 911 GT3 RS") {
        product.classList.add("correct_margins_2")
    }


    product.innerHTML = `
    <div class="featured_listing_wrapper">
        <div class="featured_list_img_wrapper">
            <img src="${car.image}">
        </div>
        <div class="carousel_text_wrapper">
            <div class="carousel_text">
                <h3>${car.name}</h3>
                <p>${car.specs}</p>
                <p>${car.price}</p>
                <button onclick="window.location.href='${car.link}'">${car.button}</button>
            </div>
        </div>
    </div>
    `

    container.appendChild(product)
})

function goToBmw() {
    window.location.href = "/details-folder/bmw-page/index.html"
}

function signIn() {
    window.location.href = "/signIn/index.html"
}

function mainPage() {
    window.location.href = "/main-page/index.html"
}




function bmw_details() {
    window.location.href = "/Buy-cars/bmw/index.html"
}

function ferrariDetails() {
    window.location.href = "/Buy-cars/ferrari/index.html"
}

function mercedesDetails() {
    window.location.href = "/Buy-cars/mercedes/index.html"
}

function lamborghiniDetails() {
    window.location.href = "/Buy-cars/lamborghini/index.html"
}

function porcheDetails() {
    window.location.href = "/Buy-cars/porsche/index.html"
}

function rollsDetails() {
    window.location.href = "/Buy-cars/rolls-royce/index.html"
}

function audiDetails() {
    window.location.href = "/Buy-cars/audi/index.html"
}

function lexusDetails() {
    window.location.href = "/Buy-cars/lexus/index.html"
}


function sellCar() {
    window.location.href = "/main-page/index.html#sell_Your_car";
}

function exploreCar() {
    window.location.href = "/main-page/index.html#featured_sect";
}



const mainAuction = [
    {
        image: '/Assets/images/mclaren-720s.jpg',
        yearName: '2024 - McLaren 750S ',
        price: '324,000 $',
        carFuelType: 'Gasoline',
        carType: 'Jeep',
        auctionViewers: '🔥 14 viewers',
    },
    
    {
        image: '/Assets/images/ferrari-purosangue.webp',
        yearName: '2022 - Ferrari Purosangue',
        price: '402,050 $',
        carFuelType: 'Diesel',
        carType: 'Jeep',
        auctionViewers: '🔥 9 viewers',
    },
]

const mainAuctionSect = document.getElementById("auction_cars_on_main")

mainAuction.forEach(auctionMain => {

    const auctionCarsOnMainDiv = document.createElement("div")
    auctionCarsOnMainDiv.classList.add("auctionCarsOnMainDiv")

    auctionCarsOnMainDiv.innerHTML = `
        <div class="car_description">
            <div class="car_description_img">
                <img src="${auctionMain.image}">
            </div>
            <div class="description_price_div">
                <div class="location_name">
                    <p>Georgia</p>
                    <h4>${auctionMain.yearName}</h4>
                </div>
                <div class="car_type">
                    <p> ${auctionMain.carFuelType} </p>
                    <h4>${auctionMain.carType}</h4>
                </div>
            </div>
        </div>
        <div class="car_description_left">
            <div class="car_description_left_price_div">
                <h4>On going price <span> ${auctionMain.price} </span> </h4>
            </div>
            <div class="time_view_bids">
                <div class="time">
                    ⏳ 3 days
                </div>
                <div class="viewers">
                    ${auctionMain.auctionViewers}
                </div>
                <div class="bids">
                    0 Bids
                </div>
            </div>
        </div>
    `
    

    mainAuctionSect.appendChild(auctionCarsOnMainDiv)
})

function scrollToSection(featured_sect) {
    document.getElementById(featured_sect).scrollIntoView({
      behavior: "smooth"
    });
}
  
function scrollToSellSect(sell_Your_car) {
    document.getElementById(sell_Your_car).scrollIntoView({
      behavior: "smooth"
    });
}