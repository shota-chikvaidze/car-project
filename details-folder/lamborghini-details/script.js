const data = [
    {
        name: "Lamborghini Huracán",
        price: "💰$210,000",
        strength: "🔩 631 HP",
        motor: "⚙️ 5.2L V10 NA",
        time: "⏱️ 2.9s 0-100",
        speed: "💨 325 km/h",
        drive: "🛞 AWD",
        image: "/Assets/images/lamborghini.png",
        cardescription: "The Huracán strikes with V10 fury, razor-sharp design, and pure all-wheel-drive dominance.",
        buttonone: "Contact Seller",
        buttontwo: "Schedule Test Drive",
    },
  ];
  
  const container = document.getElementById("lamborghini_section");
  
  data.forEach(car => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("productDiv");
  
    productDiv.innerHTML = `
    <div class="wrapper">
      <div class="image_div">
        <img src="${car.image}">
      </div>
      <div class="performance_wrapper">
        <div class="lamborghini_context">
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
  