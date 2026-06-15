fetch("data/Germanhvy.json")
  .then((response) => response.json())
  .then((data) => {
    const vehicleList = document.getElementById("vehicle-list");
    data.forEach((vehicle) => {
      const div = document.createElement("div");
      div.innerHTML = `
                <h2>${vehicle.name}</h2>
                <h3>${vehicle.faction}</h3>
                <h3>${vehicle.nation}</h3>
                <h4>${vehicle.br}</h4>
            `;
      vehicleList.appendChild(div);
    });
  });
