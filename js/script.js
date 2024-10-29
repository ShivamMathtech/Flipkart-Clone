document.getElementById("apply-filters").addEventListener("click", function () {
  let priceRange = document.getElementById("price-range").value;
  let selectedCategories = Array.from(
    document.querySelectorAll("input[type=checkbox]:checked")
  ).map((checkbox) => checkbox.value);
  let selectedRating = document.querySelector(
    'input[name="rating"]:checked'
  )?.value;

  // Example product list (this should ideally come from the server)
  let products = [
    {
      name: "Samsung Galaxy",
      category: "Electronics",
      price: 30000,
      rating: 4,
    },
    { name: "Apple iPhone", category: "Electronics", price: 70000, rating: 5 },
    {
      name: "Sony Headphones",
      category: "Electronics",
      price: 15000,
      rating: 4,
    },
    { name: "Men's Shirt", category: "Fashion", price: 2000, rating: 3 },
    {
      name: "Washing Machine",
      category: "Home Appliances",
      price: 25000,
      rating: 4,
    },
  ];

  // Filter the products
  let filteredProducts = products.filter((product) => {
    return (
      product.price <= priceRange &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      (!selectedRating || product.rating >= selectedRating)
    );
  });

  // Display filtered products
  displayProducts(filteredProducts);
});

// Update price range text dynamically
document.getElementById("price-range").addEventListener("input", function () {
  let priceValue = this.value;
  document.getElementById("price-value").textContent = `₹0 - ₹${priceValue}`;
});

// Function to display products
function displayProducts(products) {
  let productContainer = document.getElementById("products");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    let productItem = `
      <div class="product-item">
        <h4>${product.name}</h4>
        <p>Price: ₹${product.price}</p>
        <p>Category: ${product.category}</p>
        <p>Rating: ${product.rating}★</p>
      </div>
    `;
    productContainer.innerHTML += productItem;
  });
}
