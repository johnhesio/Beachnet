# Beachnet Website

A modern website for Beachnet, an internet service provider, built with Vue.js and Tailwind CSS.

## Technologies Used

- [Vue.js 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PrimeVue](https://primevue.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/)

## Features

- Responsive design for mobile and desktop
- Interactive navigation menu
- Service plan cards with pricing
- Image carousel for promotions
- Contact section with WhatsApp integration
- Location map integration
- Social media links

## Project Structure

```
src/
  ├── assets/        # Images and static assets
  ├── views/         # Vue components for each page section
  │   └── Home/      
  ├── router/        # Vue Router configuration
  ├── App.vue        # Root component
  ├── main.js        # Application entry point
  └── style.css      # Global styles
```

## Getting Started

1. Install dependencies:
```sh
npm install
```

2. Run development server:
```sh
npm run dev
```

3. Build for production:
```sh
npm run build
```

## Component Overview

- `Topbar`: Main navigation menu
- `Banner`: Hero section with image carousel
- `planos_fibra`: Internet service plans
- `planos_app`: Plans with included streaming apps
- `atendimento`: Contact information section
- `sobre_nos`: Company information
- `onde_estamos`: Location map
- `rodape`: Footer with additional links

## Customization

- Colors can be modified in Tailwind configuration
- Images can be replaced in `src/assets/Images/`
- Contact links and social media can be updated in respective components