
export default function loadMenu() {

    const content = document.getElementById("content");

    const allMeals = document.createElement("div");
    const hamburgerDiv = document.createElement("div");
    const steakDiv = document.createElement("div");
    const meatballsDiv = document.createElement("div");
    const hamburgerImg = document.createElement("img");
    const steakImg = document.createElement("img");
    const meatballsImg = document.createElement("img");
    let hamburgerp = document.createElement("p");
    let steakp = document.createElement("p");
    let meatballsp = document.createElement("p");

    // Altering the textcontents

    hamburgerp.textContent = "Hamburger";
    steakp.textContent = "Steak";
    meatballsp.textContent = "Meatballs";
    allMeals.classList.add("menus");

    // Adjusting the images for every meal

    hamburgerImg.src = "./images/hamburger.jpg";
    steakImg.src = "./images/steak.jpg";
    meatballsImg.src = "./images/meatballs.jpg";

    // Appending the childs to the parents

    
    content.appendChild(allMeals);

    allMeals.appendChild(hamburgerDiv);
    allMeals.appendChild(steakDiv);
    allMeals.appendChild(meatballsDiv);

    hamburgerDiv.appendChild(hamburgerImg);
    hamburgerDiv.appendChild(hamburgerp);

    steakDiv.appendChild(steakImg);
    steakDiv.appendChild(steakp);

    meatballsDiv.appendChild(meatballsImg);
    meatballsDiv.appendChild(meatballsp);


}



