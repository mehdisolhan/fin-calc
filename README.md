# Fin-Calc

fin-calc is an average price calculator web application developed using Nuxt.js, Vue 3, JavaScript, and TailwindCSS.
This application was created to provide a cleaner and ad-free experience for calculating average prices, which I often
use.

## Features

- **Dark Mode**: Switch between light and dark themes for a comfortable viewing experience.
- **Multilingual Support**: Available in both Turkish and English.
- **Currency Selection**: Easily change the displayed currency values to match your preference.
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices.
- **Local Storage**: Saves your preferences and recent calculations.
- **Real-time Calculations**: Instant updates as you input values.
- **Clean UI**: Minimalist and intuitive user interface.

## Tech Stack

- **Framework**: [Nuxt.js](https://nuxtjs.org) - The Intuitive Vue Framework
- **Frontend**: [Vue 3](https://v3.vuejs.org) - The Progressive JavaScript Framework
- **Styling**: [TailwindCSS](https://tailwindcss.com) - A utility-first CSS framework
- **Package Manager**: [pnpm](https://pnpm.io) - Fast, disk space efficient package manager
- **Internationalization**: Nuxt I18n
- **Icons**: Nuxt Icon

## Requirements

- **Node.js**: 20.12.2 or higher
- **pnpm**: 9.0.4 or higher
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

## Project Structure

```
fin-calc/
├── .nuxt/               # Nuxt build directory
├── assets/             # Static assets (images, fonts, etc.)
├── components/         # Vue components
├── composables/        # Composable functions
├── layouts/            # Page layouts
├── locales/            # Translation files
├── pages/              # Application pages
├── plugins/            # Vue plugins
├── public/             # Public static files
├── stores/             # State management
└── utils/              # Utility functions
```

## Installation

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/mehdisolhan/fin-calc.git
   ```

2. Navigate to the project directory:

   ```sh
   cd fin-calc
   ```

3. Install dependencies using pnpm:

   ```sh
   pnpm install
   ```

4. Start the development server:
   ```sh
   pnpm run dev
   ```

The application will be available at `http://localhost:3000`.

## Usage

1. Navigate to the home page.
2. Enter the stock purchase details to calculate the average cost.
3. Toggle between dark mode and light mode using the theme switcher.
4. Switch languages between Turkish and English using the language selector.
5. Change the currency displayed for your convenience.
6. View the calculated average price and total investment.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

### Color Palette Reference

https://tailwindcss.com/docs/customizing-colors#color-palette-reference
