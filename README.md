# Madeline Nguyen - Portfolio

A modern, retro-inspired portfolio website built with React and TypeScript. The design features overlapping desktop-style tabs with a clean, minimalist aesthetic.

## 🎨 Design Features

- **Retro Computer Aesthetic**: Desktop-style tabs with window controls
- **Color Palette**: 
  - White (#FEFEFE)
  - Light Yellow-Green (#D3D977)
  - Dark Green (#29301B)
  - Light Pink (#F9CFD9)
- **Typography**: Jersey 10, DM Sans, and DM Serif Display
- **Grid Background**: Subtle grid pattern for visual interest
- **Drop Shadows**: Sharp, unblurred shadows for depth

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ContactButton.tsx
│   ├── DesktopTab.tsx
│   ├── Header.tsx
│   └── WindowControls.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   └── Work.tsx
├── styles/             # Global styles and themes
│   └── GlobalStyles.ts
├── types/              # TypeScript type definitions
│   └── index.ts
└── assets/             # Static assets (images, etc.)
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Styled Components** - CSS-in-JS styling
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 🎯 Key Components

### DesktopTab
A reusable component that creates desktop-style windows with:
- Window controls (3 circles + arrow)
- Drop shadows without blur
- Customizable background colors
- Overlapping positioning

### ContactButton
Interactive buttons with:
- Outlined icons filled with pink
- Hover effects with shadow
- Consistent styling

### WindowControls
The classic desktop window controls featuring:
- Three circular buttons
- Back/forth arrow icon
- Customizable header background

## 🎨 Customization

### Colors
Update the CSS variables in `src/styles/GlobalStyles.ts`:
```css
:root {
  --white: #FEFEFE;
  --light-yellow-green: #D3D977;
  --dark-green: #29301B;
  --light-pink: #F9CFD9;
  --black: #000000;
}
```

### Fonts
The project uses Google Fonts:
- **Jersey 10** (fallback: Arial Black)
- **DM Sans** - Body text
- **DM Serif Display** - Headings

## 📱 Responsive Design

The portfolio is designed to be responsive and work well on:
- Desktop computers
- Tablets
- Mobile devices

## 🚀 Deployment

To build for production:
```bash
npm run build
```

The build folder will contain the optimized production files.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Madeline Nguyen**
- LinkedIn: [Madeline Nguyen](https://linkedin.com/in/madeline-nguyen)
- Email: madeline@example.com

---

Built with ❤️ using React and TypeScript
