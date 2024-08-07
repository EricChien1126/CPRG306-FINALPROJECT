Taiwanese Boba Shop
Welcome to the Taiwanese Boba Shop project! This web application allows users to browse a menu of boba tea and smoothie options, view details of each beverage, and place orders. The project is built with HTML, CSS, and JavaScript and is designed to be user-friendly and responsive.

Table of Contents
Project Overview
Features
Technologies Used
Getting Started
File Structure
Usage
Deployment
License
Project Overview
This project aims to create an online menu and ordering system for a Taiwanese Boba Shop. Users can view various beverages, check their details, and place orders with their preferred options.

Features
Menu Display: Lists various boba teas and smoothies with images and prices.
Beverage Details: Provides detailed information about each beverage, including price and description.
Order Form: Allows users to select a beverage, size, and toppings, and place an order.
Technologies Used
HTML5: Structure of the web pages
CSS3: Styling of the web pages
JavaScript: Functionality and interactivity
Getting Started
To get a local copy up and running follow these simple steps.

Prerequisites
Ensure you have the following installed on your local machine:

Git
A modern web browserInstallation
Clone the repository:
sh
Copy code
git clone https://github.com/yourusername/taiwanese-boba-shop.git
Navigate to the project directory:
sh
Copy code
cd taiwanese-boba-shop
File Structure
sh
Copy code
taiwanese-boba-shop/
├── index.html
├── details.html
├── styles.css
├── app.js
├── details.js
├── images/
│   ├── classic-milk-tea.jpg
│   ├── taro-milk-tea.jpg
│   ├── ...
Usage
Running the Application
Open index.html in your web browser to view the main menu.
Click on any beverage to view its details on the details.html page.
Fill out the order form on the main page and submit to place an order.
Functionality
Menu Display:

The index.html file contains the main menu which displays the list of beverages.
app.js populates the beverage list and the dropdown menu for the order form.
Beverage Details:

The details.html file provides detailed information about each beverage.
details.js handles displaying the specific details of the selected beverage.
Order Form:

The order form allows users to select a beverage, size, and toppings.
On form submission, the order details are logged in the console and an alert is displayed to the user.
Deployment
This project can be deployed using services like Vercel. Ensure your repository is linked to Vercel and any changes pushed to the main branch are automatically deployed.

Push your local changes to GitHub:
sh
Copy code
git add .
git commit -m "Your commit message"
git push origin main
Verify the deployment on your Vercel dashboard.
License
Distributed under the MIT License. See LICENSE for more information.
