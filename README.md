# ProDash Analytics - Responsive Dashboard

ProDash Analytics is a professional-grade, responsive frontend dashboard application built with **React.js**. It features a modern UI, user authentication flow, data visualization, and dynamic profile management fetching data from a live mock API.

## 🚀 Features

- **Authentication System**: Functional Login/Signup pages with form validation (Email & Password).
- **Responsive Design**: Fully adaptive layout for Desktop, Tablet, and Mobile devices.
- **Data Visualization**: Interactive bar charts for revenue tracking using Recharts.
- **State Management**: Uses React **Context API** for global authentication state.
- **API Integration**: Fetches real-time data from JSONPlaceholder for user profiles and activity feeds.
- **Protected Routes**: Secure navigation ensuring only authenticated users can access the dashboard.

## 🛠️ Tech Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v7)
- **Charts**: Recharts
- **Icons**: Font Awesome 6
- **Typography**: Inter Font (Google Fonts)
- **API**: JSONPlaceholder (Mock API)

## 📁 Project Structure

```text
src/
├── components/         # Reusable UI elements (Sidebar, Navbar, StatCards)
├── context/            # Global state management (AuthContext)
├── pages/              # Main view components (Dashboard, Profile, Login)
├── types.ts            # TypeScript interfaces and shared types
├── App.tsx             # Root component & Routing logic
└── index.tsx           # Entry point
```

## ⚙️ Installation & Local Setup

To run this project on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Deepanshu9427/ProDash_Analytics.git
   cd prodash-analytics
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📸 UI Screenshots

### Login Page
![Login Screenshot](screenshots/Screenshot%202025-12-31%20122400.png)

### Dashboard Overview
![Dashboard Screenshot](screenshots/Screenshot%202025-12-31%20122456.png)

### User Profile
![Profile Screenshot](screenshots/Screenshot%202025-12-31%20122537.png)

## 📝 Dependencies Used

- `react`: Core library for UI.
- `react-dom`: Browser rendering.
- `react-router-dom`: SPA navigation.
- `recharts`: Charting library.
- `tailwindcss`: Utility-first CSS framework.
- `lucide-react` / `font-awesome`: Icon sets.

