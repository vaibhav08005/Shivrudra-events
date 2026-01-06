# 📸 Shivrudra Events Studio

A modern, professional photography studio website built with React, TypeScript, and Vite. Features a stunning hero video, interactive gallery, and smooth animations.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)
![Vite](https://img.shields.io/badge/Vite-6.2.0-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎥 **Hero Video Background** - Eye-catching video background with parallax effects
- 🖼️ **Interactive Gallery** - Expandable photo gallery with lightbox view (18+ photos)
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI/UX** - Clean, minimalist design with smooth animations
- 🔊 **Video Controls** - Mute/unmute functionality for hero video
- 🎯 **Smooth Navigation** - Sticky navbar with scroll effects
- 💼 **Service Showcase** - Display photography services and packages
- 💬 **Testimonials** - Customer reviews section
- 📞 **Contact Form** - Easy-to-use contact section
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:vaibhav08005/photo_studio.git
   cd photo_studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

## 📂 Project Structure

```
nanded-snaps-studio/
├── components/          # React components
│   ├── Hero.tsx        # Hero section with video background
│   ├── Navbar.tsx      # Navigation bar
│   ├── Gallery.tsx     # Photo gallery with lightbox
│   ├── Services.tsx    # Services section
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer section
│   └── CameraShowcase.tsx # Camera equipment showcase
├── public/             # Static assets
│   └── hero_video.mp4  # Hero background video
├── App.tsx             # Main app component
├── index.tsx           # App entry point
├── types.ts            # TypeScript type definitions
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies

```

## 🛠️ Built With

- **[React](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS (configured in index.html)
- **[Lucide React](https://lucide.dev/)** - Icon library

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Changing the Hero Video

Replace the video file at `public/hero_video.mp4` with your own video, or update the source in `components/Hero.tsx`:

```tsx
<source src="/your-video.mp4" type="video/mp4" />
```

### Adding Gallery Photos

Edit the `galleryItems` array in `components/Gallery.tsx`:

```tsx
const galleryItems: GalleryItem[] = [
  { id: 1, src: 'your-image-url.jpg', category: 'Wedding', alt: 'Description' },
  // Add more items...
];
```

### Updating Contact Information

Modify the contact details in `components/Contact.tsx` and `components/Footer.tsx`.

### Styling

The project uses Tailwind CSS classes. Customize colors and styles by modifying the className attributes in components.

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://www.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### Deploy to GitHub Pages

```bash
npm run build
# Then deploy the 'dist' folder to GitHub Pages
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Vaibhav**
- GitHub: [@vaibhav08005](https://github.com/vaibhav08005)

## 🙏 Acknowledgments

- Stock photos from [Unsplash](https://unsplash.com)
- Icons from [Lucide Icons](https://lucide.dev)
- Inspiration from modern photography websites

## 📧 Contact

For questions or support, please open an issue on GitHub or contact through the website.

---

<div align="center">
  Made with ❤️ for photographers
</div>
