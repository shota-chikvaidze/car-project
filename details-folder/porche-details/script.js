const data = [
    {
        name: "Porsche 911 GT3 RS",
        price: "💰$223,800",
        strength: "🔩 518 HP",
        motor: "⚙️ 4.0L Flat-6 NA",
        time: "⏱️ 3.0s 0-100",
        speed: "💨 296 km/h",
        drive: "🛞 RWD",
        image: "/Assets/images/porche.png",
        cardescription: "The 911 GT3 RS is Porsche's ultimate track weapon — naturally aspirated, precision-tuned, and born to dominate both circuits and streets.",
        buttonone: "Contact Seller",
        buttontwo: "Schedule Test Drive"
    },
  ];
  
  const container = document.getElementById("porche_sect");
  
  data.forEach(car => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("productDiv");
  
    productDiv.innerHTML = `
    <div class="wrapper">
      <div class="image_div">
        <img src="${car.image}">
      </div>
      <div class="performance_wrapper">
        <div class="porche_context">
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
  