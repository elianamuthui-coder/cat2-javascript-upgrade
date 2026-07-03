// Array of products
console.log("STEP 1: script is running");

const products = [
    {
        name: "African Clocks",
        price: "From KSh 8,000"
    },
    {
        name: "Decorative Mirrors",
        price: "From KSh 15,000"
    },
    {
        name: "African Artwork",
        price: "From KSh 5,000"
    }
];

// Get the container where the cards will appear
const priceCards = document.querySelector("#priceCards");

// Loop through the array and create a card for each product
products.forEach(function(product){

    // Create an article element
    let card = document.createElement("article");
    card.classList.add("card");

    // Add content to the card
    card.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    `;

    // Add the card to the webpage
    priceCards.appendChild(card);

});

// Task 2 - Wishlist Add & Remove

const addBtn = document.getElementById("addBtn");
const wishlistInput = document.getElementById("wishlistInput");
const wishlistItems = document.getElementById("wishlistItems");

addBtn.addEventListener("click", function () {

    const item = wishlistInput.value.trim();

    if (item === "") {
        alert("Please enter an item.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = item + " ";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    wishlistItems.appendChild(li);

    wishlistInput.value = "";
});