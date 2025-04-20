const data = [
    {
      name: "Mercedes-AMG GT",
      price: "💰$155,000",
      strength: "🔩 577 HP",
      motor: "⚙️ V8 Biturbo",
      time: "⏱️ 3.5s 0-100",
      speed: "💨 317 km/h",
      drive: "🛞 RWD",
      image: "/Assets/images/mercedes-amg.png",
      cardescription: "The AMG GT delivers raw V8 power with sleek German design and precision handling.",
      buttonone: "Contact Seller",
      buttontwo: "Schedule Test Drive",
    },
  ];
  
  const container = document.getElementById("mercedes_section");
  
  data.forEach(car => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("productDiv");
  
    productDiv.innerHTML = `
    <div class="wrapper">
      <div class="image_div">
        <img src="${car.image}">
      </div>
      <div class="performance_wrapper">
        <div class="mercedes_context">
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
  