# 🎯 Modern Todo App

A sophisticated, modern todo application built with React featuring a unique dark theme with emerald green accents. Implements advanced UI/UX patterns including glassmorphism effects, smooth animations, and responsive design.

## ✨ Features

- 🎨 **Dark Theme Design** - Elegant dark space-inspired background
- 💎 **Glassmorphism UI** - Modern semi-transparent containers with backdrop blur
- 🎭 **Smooth Animations** - Hover effects, transitions, and micro-interactions
- 📱 **Responsive Layout** - Works perfectly on all device sizes
- 🔢 **Task Counter** - Real-time display of remaining tasks
- 📅 **Date Management** - Organize tasks with due dates
- 🎯 **Modern Visual Effects** - Custom shadows, gradients, and animations
- 🧩 **Component-Based Architecture** - Clean, maintainable React code

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Styling**: CSS3, CSS Modules
- **Build Tool**: Vite
- **UI Components**: Custom components with modern design
- **State Management**: React Hooks (useState)
- **Validation**: PropTypes for type checking

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd my-react-app
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

```bash
git add .
git commit -m "feat: redesign todo app with dark theme and emerald accents"
git push origin main
```

2. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect it's a Vite project

3. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your app automatically

### Manual Deployment

1. Build your app:

```bash
npm run build
```

2. The `dist` folder contains your production-ready files
3. Upload the contents of `dist` to your hosting provider

## 📁 Project Structure

```
my-react-app/
├── src/
│   ├── components/
│   │   ├── heading.jsx          # App header with task counter
│   │   ├── heading.module.css   # Header styles
│   │   ├── newTask.jsx          # Task input and form
│   │   ├── newTask.module.css   # Form styles
│   │   ├── items.jsx            # Task list display
│   │   └── items.module.css     # List styles
│   ├── main.jsx                 # Main app component
│   └── index.css                # Global styles
├── public/                      # Static assets
├── dist/                        # Production build (generated)
├── vercel.json                  # Vercel configuration
└── package.json                 # Dependencies and scripts
```

## 🎨 Design Features

- **Color Scheme**: Dark space theme with emerald green (#10b981) accents
- **Typography**: Modern Segoe UI font with proper hierarchy
- **Animations**: Smooth transitions, hover effects, and micro-interactions
- **Layout**: Glassmorphism containers with backdrop blur effects
- **Responsiveness**: Mobile-first design that scales to all devices

## 🔧 Customization

The app uses CSS custom properties and CSS modules, making it easy to customize:

- Colors are defined in CSS variables
- Component styles are modular and maintainable
- Theme changes can be made by updating CSS variables

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and modern web technologies
