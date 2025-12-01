# Recipe Discovery App Frontend

Modern React app for browsing, searching, and viewing recipe details. Follows the **Ocean Professional** style with a clean layout and responsive design.

## Features

- **Modern UI**: Minimalist Ocean Professional palette (`#2563EB`, `#F59E0B`, etc. - see src/theme.js), rounded corners, subtle shadows, smooth transitions
- **Routing**: `/` for browse/search; `/recipe/:id` for details (react-router v6+)
- **Sidebar**: Search and filter panel on desktop, collapsible on mobile
- **Reusable Components**: `RecipeList`, `RecipeCard`, `FiltersPanel`, `SearchBar`, `RecipeDetail`
- **Responsive**: Fluid layout with main/aside regions
- **Mock Data/Live API**: Uses demo/mock data until `REACT_APP_API_BASE` is set in env

## Quickstart

```bash
npm install
npm start
```
App runs at [http://localhost:3000](http://localhost:3000).

## App Structure

- `src/components/`: All UI components
  - `Header.js` - Navigation/header
  - `RecipeList.js`, `RecipeCard.js` - Recipe browsing
  - `RecipeDetail.js` - Recipe details view
  - `SearchBar.js`, `FiltersPanel.js` - Sidebar
- `src/pages/`: Routing views
- `src/theme.js`: Exports theme colors/constants
- `src/data/`: Demo/mock data

## Theming

- Colors set in `theme.js` (Ocean Professional: blue, amber, white, minimal accent red for errors)
- CSS variables for easy theming, clean/app-specific overrides in `App.css`

## Environment Variables

Set `REACT_APP_API_BASE` to point to API. If not present, app uses local mock/demo data.

----
Original template documentation continues below.

# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

## Features

- **Lightweight**: No heavy UI frameworks - uses only vanilla CSS and React
- **Modern UI**: Clean, responsive design with KAVIA brand styling
- **Fast**: Minimal dependencies for quick loading times
- **Simple**: Easy to understand and modify

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Customization

### Colors

The main brand colors are defined as CSS variables in `src/App.css`:

```css
:root {
  --kavia-orange: #E87A41;
  --kavia-dark: #1A1A1A;
  --text-color: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles in `src/App.css`. 

Common components include:
- Buttons (`.btn`, `.btn-large`)
- Container (`.container`)
- Navigation (`.navbar`)
- Typography (`.title`, `.subtitle`, `.description`)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://reactjs.org/).
