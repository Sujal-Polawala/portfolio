# 🌐 Developer Portfolio – [Your Name]

A sleek, modern developer portfolio built using **React.js** and **Tailwind CSS**, designed to showcase my skills, projects, and contact information. Deployed on **Vercel** and connected to the **GitHub API** to dynamically display my latest repositories.

## 🚀 Live Demo

👉 [View Live Portfolio](https://portfolio-alpha-beige-45.vercel.app/)

---

## ✨ Features

- 📁 **Dynamic Projects Section** – Fetched directly from GitHub using the GitHub API with caching
- 📱 **Responsive Design** – Fully mobile-friendly and optimized
- ⚡ **Fast & Optimized** – Built with performance in mind
- 🎨 **Styled with Tailwind CSS** – Clean and customizable design system

---

## 🛠 Tech Stack

- **Frontend:** React.js (Vite or Create React App)
- **Styling:** Tailwind CSS
- **APIs:** GitHub REST API
- **Deployment:** Vercel

---

## 🧠 How It Works

- On page load, the Projects page fetches repositories from GitHub and caches them in `localStorage` for 24 hours.
- Uses React `useEffect` hook for lifecycle management.
- Custom components like `ProjectCardSkeleton` are used for loading states.
- Layout and typography are powered by Tailwind CSS utility classes.

---

## 📦 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sujal-Polawala/portfolio
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   npm run dev    # or npm start for Create React App
   ```

4. **(Optional)**: Add a GitHub token for higher rate limits:
   - Create a `.env` file:
     ```
     REACT_APP_GITHUB_TOKEN=your_github_token
     ```
   - Add the token in your fetch call headers.

5. **Deploy to Vercel:**
   - Push your code to GitHub
   - Import your repo on [Vercel](https://vercel.com/import)
   - Set up environment variables if needed

---

## 📬 Contact

Feel free to reach out if you'd like to collaborate!

- Portfolio: [sujalpolawala.dev](https://portfolio-alpha-beige-45.vercel.app/)
- Email: [sujalpolawala@gmail.com](mailto:sujalpolawala@gmail.com)
- LinkedIn: [linkedin.com/in/sujalpolawaka](https://linkedin.com/in/sujalpolawala)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).