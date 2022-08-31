

export default function loadHome() {
    const content = document.getElementById("content");
    
    // Creating needed elements
    const imageDiv = document.createElement("div");
    const imageTag = document.createElement("img");

    // Changing the textcontexts of the elements

    imageDiv.classList.add("foto");
    imageTag.src = "./images/1.jpg";

    // Appending the childs to their parents

    
    imageDiv.appendChild(imageTag);
    content.appendChild(imageDiv);
}
