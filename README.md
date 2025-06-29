# Anb Photography & Films

This is the official website for Anb Photography & Films, a professional photography and videography service specializing in timeless, editorial-style content.

**Contact:** anbstudio77@gmail.com

This project was bootstrapped with [Vite](https://vitejs.dev/) and is built with [React](https://react.dev/) and [Tailwind CSS v4](https://tailwindcss.com/).

## ✨ Features

- **Modern, Elegant Design**: A clean and sophisticated UI inspired by high-end photography portfolios.
- **Cinematic Video Experience**: A video splash screen on first visit and a dynamic video background on the home page.
- **Dual-Theme System**: Seamlessly switch between a beautiful light mode and a striking dark mode.
- **High-Performance Media**: All images and videos are served from [Cloudinary](https://cloudinary.com/) for automatic optimization and fast delivery via CDN.
- **Interactive Gallery**: A beautiful masonry-style gallery with a full-screen lightbox for viewing images.
- **Component-Based Architecture**: Built with reusable React components for maintainability and scalability.
- **Clean Git Workflow**: All features are developed on separate branches and merged via Pull Requests.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/)
- [GitHub CLI](https://cli.github.com/) (for managing pull requests)

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/Muadeel56/wedding-website.git
   ```
2. Navigate to the project directory:
   ```sh
   cd wedding-website
   ```
3. Install NPM packages:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## Project Structure & Workflow

- **Components**: Reusable components like `Header`, `Footer`, `Layout`, and `SplashScreen` are located in `src/components`.
- **Pages**: Main page components like `Home`, `Gallery`, `OurStory`, and `EventDetails` are in `src/pages`.
- **Media Handling**: All media assets (images, videos) should be uploaded to Cloudinary. The URLs are then used in the relevant components. This ensures the repository remains lightweight and the website performs optimally.
- **Routing**: Client-side routing is handled by `react-router-dom`. All routes are defined in `App.jsx`.
- **Styling**: The entire theme is controlled from `src/index.css` using CSS custom properties and Tailwind's `@theme` directive, with support for both light and dark modes.

## Scripts Available

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the code using ESLint and Prettier.
- `npm run preview`: Previews the production build locally.
