const data = [
    {
        name: "Ferrari SF90 Stradale",
        price: "💰$507,000",
        strength: "🔩 986 HP",
        motor: "⚙️ Twin-Turbo V8 Hybrid",
        time: "⏱️ 2.5s 0-100",
        speed: "💨 340 km/h",
        drive: "🛞 AWD",
        image: "/Assets/images/ferrari-sf90.png",
        cardescription: "The SF90 combines 986 hybrid horses with Ferrari's sharpest tech for ultimate speed and control.",
        buttonone: "Contact Seller",
        buttontwo: "Schedule Test Drive"
            
    },
  ];
  
  const container = document.getElementById("ferrariSF_sect");
  
  data.forEach(car => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("productDiv");
  
    productDiv.innerHTML = `
    <div class="wrapper">
      <div class="image_div">
        <img src="${car.image}">
      </div>
      <div class="performance_wrapper">
        <div class="ferrariSF_context">
          <h1>${car.name}</h1>
          <p>${car.price}</p>
        </div>
        <div class="performance_description">
          <div class="context_details">
            <p>${car.strength}</p>
            <p>${car.motor}</p>
            <p>${car.time}</p>
            <p>${car.speed}</p>
            <p>${car.drive}</p>
          </div>
          <div class="context_description">
            <p>${car.cardescription}</p>
          </div>
        </div>
        <div class="bmw_btns">
          <button class="Contact_seller"> ${car.buttonone} </button>
          <button class="test_drive"> ${car.buttontwo} </button>
        </div>
      </div>
    </div>
    `;
  
    container.appendChild(productDiv);
  });
  