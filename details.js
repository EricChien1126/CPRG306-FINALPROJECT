// details.js

// Sample data for beverages
const beverages = [
  { name: 'Classic Milk Tea', price: '$4.00', image: 'images/classic-milk-tea.jpg', description: 'A classic favorite with a rich, creamy flavor.' },
  { name: 'Taro Milk Tea', price: '$4.50', image: 'images/taro-milk-tea.jpg', description: 'A sweet and creamy tea with a unique taro flavor.' },
  // Add details for other beverages
];

// Function to get query parameters
function getQueryParams() {
  const params = {};
  window.location.search.substring(1).split('&').forEach(param => {
    const [key, value] = param.split('=');
    params[key] = decodeURIComponent(value);
  });
  return params;
}

// Function to display beverage details
function displayDetails() {
  const params = getQueryParams();
  const beverage = beverages.find(b => b.name === params.name);
  if (beverage) {
    const detailsSection = document.getElementById('beverage-details');
    detailsSection.innerHTML = `
      <h2>${beverage.name}</h2>
      <img src="${beverage.image}" alt="${beverage.name}">
      <p>Price: ${beverage.price}</p>
      <p>${beverage.description}</p>
    `;
  }
}

// Call the function to display details on page load
document.addEventListener('DOMContentLoaded', displayDetails);
