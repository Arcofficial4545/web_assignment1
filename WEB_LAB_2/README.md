# ARC Enterprises - Premium Course Platform

A modern, responsive course platform built with HTML, CSS, JavaScript, and Tailwind CSS featuring dynamic course management, theme switching, and comprehensive form validation.

## Student Information
- **Name:** ABDUL REHMAN CH
- **SAP ID:** 70149114

## Project Description

ARC Enterprises is a premium online learning platform offering professional courses in FinTech, AI & Machine Learning, Cloud Architecture, and more. The platform features a sophisticated dark/light theme system, real-time course management, advanced filtering and sorting capabilities, and comprehensive form validation.

## File Structure

```
WEB_LAB_2/
├── index.html
├── script.js
├── styles.css
├── README.md
├── assets/
│   ├── audios/
│   ├── images/
│   ├── pdfs/
│   └── videos/
└── src/
    ├── about/
    │   └── index.html
    ├── contact/
    │   └── index.html
    ├── signin/
    │   └── index.html
    ├── signup/
    │   └── signup.html
    ├── pages/
    ├── constants/
    │   └── themeConstants.js
    ├── database/
    │   └── products.js
    └── utils/
        ├── crud.js
        ├── filters.js
        ├── stringHelpers.js
        └── theme.js
```

## How to Run Locally

1. **Option 1: Direct File Opening**
   - Navigate to the `WEB_LAB_2` folder
   - Open `index.html` in your web browser

2. **Option 2: Live Server (Recommended)**
   - Install Live Server extension in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server"

3. **Option 3: Local HTTP Server**
   ```bash
   cd WEB_LAB_2
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser

## JavaScript Features Implemented

### Array Methods (All 9 Required)
1. **map** - Transform courses for display with formatted prices and status
2. **filter** - Filter courses by category and availability status
3. **find** - Locate specific course by ID
4. **findIndex** - Get course position for updates and deletions
5. **some** - Check if any courses meet price criteria
6. **every** - Verify if all courses are in stock
7. **reduce** - Calculate total price of all courses
8. **sort** - Order courses by name or price (ascending/descending)
9. **forEach** - Render course cards to DOM

### String Methods (All 10 Required)
1. **toUpperCase** - Format category labels
2. **toLowerCase** - Normalize search terms for comparison
3. **trim** - Clean user input before processing
4. **includes** - Search for terms within course names
5. **startsWith** - Validate email prefixes
6. **endsWith** - Validate file extensions
7. **split** - Break full names into parts
8. **join** - Combine name parts back together
9. **replace** - Sanitize course names
10. **slice** - Extract course codes
11. **padStart** - Format course IDs with leading zeros
12. **padEnd** - Pad instructor names to fixed width

### Object CRUD Operations
- **CREATE** - Dynamically add new properties to course objects
- **READ** - Access and display course properties
- **UPDATE** - Modify existing course properties
- **DELETE** - Remove properties from course objects

### Array CRUD Operations
- **CREATE** - Add new courses to the database
- **READ** - Retrieve and display all courses
- **UPDATE** - Modify existing course details
- **DELETE** - Remove courses from the database

### DOM Manipulation
- Real-time course list rendering
- Live search with instant filtering
- Dynamic form updates
- Theme switching with smooth transitions
- Form validation with error messages

### Theme System
- Dark theme (default) with warm gold accents
- Light theme with clean professional styling
- Smooth toggle animation
- LocalStorage persistence across page refreshes
- CSS variables for consistent theming

### Search, Filter, and Sort
- **Live Search** - Character-by-character filtering as user types
- **Category Filter** - Dropdown to filter by course category
- **Sort Toggle** - Switch between name/price, ascending/descending
- All three controls work together on the same dataset

### Form Validation
- Email format validation
- Phone number validation
- Required field checking
- Real-time error clearing
- Visual error indicators

## Key Features

1. **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
2. **Theme Switching** - Toggle between dark and light modes
3. **Course Management** - Full CRUD operations on courses
4. **Advanced Filtering** - Search, filter by category, and sort
5. **Form Validation** - Comprehensive validation on all forms
6. **Modern JavaScript** - Arrow functions, template literals, const/let only
7. **Modular Code** - Organized utility functions and constants
8. **Persistent State** - Theme preference saved in localStorage

## Technologies Used

- HTML5
- CSS3 with CSS Variables
- JavaScript (ES6+)
- Tailwind CSS
- Google Fonts (Cormorant Garamond, Jost)
- Flowbite (for accordion component)

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

© 2026 ARC Enterprises. All rights reserved.
