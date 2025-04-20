const data = [
    {
        name: "Ferrari LaFerrari",
        price: "💰$1,500,000",
        strength: "🔩 950 HP",
        motor: "⚙️ V12 Hybrid",
        time: "⏱️ 2.6s 0-100",
        speed: "💨 350 km/h",
        drive: "🛞 RWD",
        image: "/Assets/images/ferrari-laferari.png",
        cardescription: "LaFerrari blends V12 power with hybrid tech to create Ferrari’s most advanced road car.",
        buttonone: "Contact Seller",
        buttontwo: "Schedule Test Drive"
    },
  ];
  
  const container = document.getElementById("ferrari_sect");
  
  data.forEach(car => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("productDiv");
  
    productDiv.innerHTML = `
    <div class="wrapper">
      <div class="image_div">
        <img src="${car.image}">
      </div>
      <div class="performance_wrapper">
        <div class="ferrari_context">
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
  