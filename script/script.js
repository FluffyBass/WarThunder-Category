fetch("data/Germanhvy.json")
  .then((response) => response.json())
  .then((data) => {
    const vehicleList = document.getElementById("vehicle-list");
    data.forEach((vehicle) => {
      const div = document.createElement("div");
      div.innerText = `
                ${vehicle.name}
                ${vehicle.faction}
                ${vehicle.nation}
                ${vehicle.br}
                ${vehicle.Description}
            `;
      vehicleList.appendChild(div);
    });
  });
