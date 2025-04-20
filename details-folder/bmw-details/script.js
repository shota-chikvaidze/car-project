const data = [
    {
        name: "BMW M4 Competition",
        price: "💰$85,000",
        strength: "🔩 503 HP",
        motor: "⚙️ Twin-Turbo I6",
        time: "⏱️ 3.8s 0-100",
        speed: "💨 250 km/h",
        drive: "🛞 RWD",
        image: "/Assets/images/bmwww.png",
        cardescription: "Track-ready performance meets daily comfort in the M4 Competition's twin-turbo beast.",
        buttonone: "Contact Seller",
        buttontwo: "Schedule Test Drive"
    },
  ];
  
  const container = document.getElementById("bmw_sect");
  
  data.forEach(car => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("productDiv");
  
    productDiv.innerHTML = `
    <div class="wrapper">
      <div class="image_div">
        <img src="${car.image}">
      </div>
      <div class="performance_wrapper">
        <div class="bmw_context">
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
  