<<<<<<< HEAD
# Responsive Product List

This project is a responsive web page built with React that displays a list of products. Each product has a name, image, description, and price. The design adjusts to different screen sizes (desktop, tablet, mobile). The page includes a navigation bar and a search bar to filter products by name.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Components](#components)
  - [Navbar](#navbar)
  - [ProductCard](#productcard)
  - [ProductList](#productlist)
  - [SearchBar](#searchbar)
  - [Home](#home)

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HumairaBashir/Task-1-responsive-product-list.git
   cd Task-1-responsive-product-list
    ```
2. Install dependencies
    ```bash
   npm install
    ```

## Running the Project
```bash
   npm start
```

## Project Structure
```bash
src/
├── components/
│   ├── Navbar.js
│   ├── ProductCard.js
│   ├── ProductList.js
│   ├── SearchBar.js
├── pages/
│   └── Home.js
├── App.js
├── index.js
├── index.css
```
## Components

### Navbar
File: src/components/Navbar.js
Description: A simple navigation bar that includes a logo and links to different sections of the site.
Structure:
NavbarContainer: Styled container for the navigation bar.
Logo: Styled logo text.
NavItems: Container for navigation links.
NavItem: Individual navigation link.

### ProductCard
File: src/components/ProductCard.js
Description: Displays individual product information including image, name, description, and price.
Props:
product: An object containing product details (id, name, image, description, price).
Structure:
Card: Styled container for the product card.
ProductImage: Styled image of the product.
ProductName: Styled name of the product.
ProductDescription: Styled description of the product.
ProductPrice: Styled price of the product.
### ProductList

File: src/components/ProductList.js
Description: Displays a list of ProductCard components.
Props:
products: An array of product objects.
Structure:
Grid: Styled container that arranges ProductCard components in a grid layout.
SearchBar
File: src/components/SearchBar.js
Description: Input field for filtering products by name.
Props:
searchTerm: Current search term.
setSearchTerm: Function to update the search term.
Structure:
SearchContainer: Styled container for the search bar.
SearchInput: Styled input field for entering search terms.

### Home
File: src/pages/Home.js
Description: Main page that combines the Navbar, SearchBar, and ProductList components.
State:
searchTerm: State to hold the current search term.
Logic:
Filters the product list based on the search term.
Structure:
Container: Styled container for the main content.
=======
# Task-1-responsive-product-list
>>>>>>> origin/main
