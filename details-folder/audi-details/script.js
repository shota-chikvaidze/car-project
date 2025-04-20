const data = [
    {
        name: "Audi R8 V10 Performance",
        price: "💰$210,000",
        strength: "🔩 602 HP",
        motor: "⚙️ 5.2L V10 NA",
        time: "⏱️ 3.3s 0-100",
        speed: "💨 330 km/h",
        drive: "🛞 AWD",
        image: "/Assets/images/audi.avif",
        cardescription: "The R8 blends exotic V10 performance with Audi’s refined all-wheel-drive precision.",
        buttonone: "Contact Seller",
        buttontwo: "Schedule Test Drive"
    },
  ];
  
  const container = document.getElementById("audi_sect");
  
  data.forEach(car => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("productDiv");
  
    productDiv.innerHTML = `
    <div class="wrapper">
      <div class="image_div">
        <img src="${car.image}">
      </div>
      <div class="performance_wrapper">
        <div class="audi_context">
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
  