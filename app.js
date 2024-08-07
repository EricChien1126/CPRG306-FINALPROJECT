// Sample data for beverages with images
const beverages = [
  { name: 'Classic Milk Tea', price: '$4.00', image: 'https://www.kawalingpinoy.com/wp-content/uploads/2022/05/boba-milk-tea-8-680x680.jpg' },
  { name: 'Taro Milk Tea', price: '$4.50', image: 'https://tyberrymuch.com/wp-content/uploads/2022/07/taro-milk-tea-recipe-1-735x735.jpg' },
  { name: 'Matcha Milk Tea', price: '$4.75', image: 'https://greenheartlove.com/wp-content/uploads/2023/05/matcha-boba-tea-1-683x1024.jpg' },
  { name: 'Mango Smoothie', price: '$5.00', image: 'https://www.liveeatlearn.com/wp-content/uploads/2020/08/mango-smoothie-vert.jpg' },
  { name: 'Strawberry Smoothie', price: '$5.00', image: 'https://www.crazyforcrust.com/wp-content/uploads/2023/08/how-to-make-strawberry-smoothie-1.jpg' },
  { name: 'Wintermelon Tea', price: '$3.75', image: 'https://delightfulplate.com/wp-content/uploads/2021/07/Vietnamese-Winter-Melon-Tea-Nuoc-Sam-Bi-Dao.jpg' },
  { name: 'Oolong Tea', price: '$3.50', image: 'https://images.healthshots.com/healthshots/en/uploads/2021/01/20175533/oolong-tea.jpg' }
];

// Function to display the beverage menu and populate the beverage dropdown
function displayMenu() {
  const beverageList = document.getElementById('beverage-list');
  const beverageSelect = document.getElementById('beverage');
  beverages.forEach(beverage => {
      const listItem = document.createElement('li');
      const img = document.createElement('img');
      img.src = beverage.image;
      img.alt = beverage.name;
      img.style.width = '100px'; // Set a suitable width for images
      listItem.appendChild(img);
      const text = document.createElement('p');
      text.textContent = `${beverage.name} - ${beverage.price}`;
      listItem.appendChild(text);
      beverageList.appendChild(listItem);

      const option = document.createElement('option');
      option.value = beverage.name;
      option.textContent = beverage.name;
      beverageSelect.appendChild(option);
  });
}

// Handle order form submission
document.getElementById('order-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const beverage = document.getElementById('beverage').value;
  const size = document.getElementById('size').value;
  const toppings = Array.from(document.getElementById('toppings').selectedOptions).map(option => option.value);
  console.log('Order placed:', { beverage, size, toppings });

  alert(`Order placed!\nBeverage: ${beverage}\nSize: ${size}\nToppings: ${toppings.join(', ')}`);
});

// Display the menu on page load
document.addEventListener('DOMContentLoaded', displayMenu);
