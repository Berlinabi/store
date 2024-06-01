 // Replace this with your JavaScript code that sets the watch information
    const watchInfo = [
      {
        name: "Watch Name 1",
        description: "Description of Watch 1",
        caseSize: "40mm",
        caseMaterial: "Stainless Steel",
        waterResistance: "100 meters",
        movementType: "Automatic",
        complications: "Date",
        dialColor: "Black",
        strapMaterial: "Leather",
        additionalFeatures: "Chronograph"
      },
      {
        name: "Watch Name 2",
        description: "Description of Watch 2",
        caseSize: "42mm",
        caseMaterial: "Titanium",
        waterResistance: "200 meters",
        movementType: "Quartz",
        complications: "Chronograph",
        dialColor: "Silver",
        strapMaterial: "Nylon",
        additionalFeatures: "GPS"
      }
    ];

    // Render the watch information
    document.getElementById("watch-specs").innerHTML = "";
    for (const i in watchInfo) {
      const watch = watchInfo[i];
      const watchDiv = document.createElement("div");
      document.getElementById("watch-specs").appendChild(watchDiv);

      const h2 = document.createElement("h2");
      h2.textContent = `Watch ${i + 1}`;
      watchDiv.appendChild(h2);

      const watchInfoDiv = document.createElement("div");
      watchDiv.appendChild(watchInfoDiv);

      const h1 = document.createElement("h1");
      h1.textContent = `Watch Name: ${watch.name}`;
      watchInfoDiv.appendChild(h1);

      const p = document.createElement("p");
      p.textContent = `Description: ${watch.description}`;
      watchInfoDiv.appendChild(p);

      const ul = document.createElement("ul");
      watchInfoDiv.appendChild(ul);

      for (const key in watch) {
        const value = watch[key];
        if (key === "name" || key === "description") continue;
        const li = document.createElement("li");
        li.textContent = `${key}: ${value}`;
        ul.appendChild(li);
      }
    }
