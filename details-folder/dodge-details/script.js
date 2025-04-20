const data = [
    {
        name: "Dodge Charger SRT Hellcat",
        price: "💰$79,000",
        strength: "🔩 717 HP",
        motor: "⚙️ 6.2L Supercharged V8",
        time: "⏱️ 3.6s 0-100",
        speed: "💨 327 km/h",
        drive: "🛞 RWD",
        image: "/Assets/images/dodge-charger.avif",
        cardescription: "The Charger Hellcat is a supercharged muscle sedan built for domination and unapologetic power.",
        buttonone: "Contact Seller",
        buttontwo: "Schedule Test Drive"
    },
  ];
  
  const container = document.getElementById("dodge_sect");
  
  data.forEach(car => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("productDiv");
  
    productDiv.innerHTML = `
    <div class="wrapper">
      <div class="image_div">
        <img src="${car.image}">
      </div>
      <div class="performance_wrapper">
        <div class="dodge_context">
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
  