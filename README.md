# Birthday Calendar Web Application

This project is a web application that helps you keep track of birthdays. It allows you to add birthdays, delete birthdays, and set up alerts for upcoming birthdays. The application is built using webpack, tailwindcss, and date-fns.

## Features

- **Add Birthday:** You can add birthdays to the list by providing the name and date of birth. (Year is optional.) The application will store the information and display it on the list.

- **Delete Birthday:** If you no longer want to keep track of a particular birthday, you can delete it your list. This removes the birthday information from the application.

- **Alerts:** The application provides notifications for important celebrations. You can check who's birthday is today through the notifications, ensuring that you don't miss any birthday.

## Technologies Used

- **Webpack:** Webpack is a module bundler that is used to bundle the JavaScript modules in the application. It helps organize and optimize the code for efficient delivery to the browser.

- **Tailwind CSS:** Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed classes for building user interfaces. It allows for rapid development and customization of the application's visual appearance.

- **date-fns:** date-fns is a lightweight JavaScript library for manipulating and formatting dates. It provides various functions for working with dates, such as parsing, formatting, and calculating differences between dates. In this project, date-fns is used to handle date-related operations.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/moonhyerin/birthday-calendar.git
   ```

2. Navigate to the project directory:

   ```bash
   cd birthday-calendar
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Build the project:

   ```bash
   npm run build
   ```

5. Open the `index.html` file (/build/index.html) in your preferred web browser.
