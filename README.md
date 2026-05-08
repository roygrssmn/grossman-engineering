# The Agentic Architect

Personal portfolio website for Roey Grossman. Built with React 19, Vite, and Tailwind CSS v4. The site features a clean, responsive design, dark mode, English/German bilingual support, and a custom lightweight single-page routing system optimized for static hosting on Cloudflare Pages.

## 🚀 How to Run

Ensure you have [Node.js](https://nodejs.org/) installed.

1. Clone the repository and navigate to the project directory.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

## 🛠 Useful Commands

- `npm run dev` - Starts the Vite development server with Hot-Module-Replacement (HMR).
- `npm run build` - Compiles and bundles the application for production into the `dist/` folder.
- `npm run preview` - Boots up a local static web server to serve the `dist/` folder (useful for testing the production build before deployment).
- `npm run lint` - Runs ESLint to check for code quality and formatting errors.

## 📁 Project Structure

```text
the-quality-architect/
├── public/                     # Static assets (favicon, robots.txt, sitemap.xml, _redirects)
├── src/
│   ├── selected_impact/           # Case study data and content
│   │   ├── projects.jsx        # Index file exporting all case studies
│   │   ├── rag.jsx             # Individual case study content
│   │   └── ...
│   ├── areas_of_expertise/     # Core competencies data
│   │   └── competencies.jsx    # Translations and content for the Expertise section
│   ├── App.jsx                 # Main application orchestrator & router
│   ├── MainView.jsx            # Homepage view component
│   ├── ProjectView.jsx         # Case study detail view component
│   ├── contactInfo.jsx         # Global configuration for personal info & links
│   └── ...                     # Other React components (Footer, Modals, Navigation)
├── index.html                  # HTML entry point with SEO meta tags
├── package.json                # Project scripts and dependencies
└── src/index.css               # Tailwind CSS entry point and custom styles
```

## 📝 Where to Edit

To quickly update the content of your site without digging through complex UI code, modify these central files:

* **Personal Info & Social Links:** Edit `src/contactInfo.jsx`. This will automatically update your email, address, GitHub, and LinkedIn links everywhere across the site (including the Impressum and Privacy Policy).
* **Core Competencies:** Edit `src/areas_of_expertise/competencies.jsx` to update the titles and descriptions (both EN and DE) of your main skills.
* **Translations:** Most static text translations (like headings and buttons) are handled inline using ternary operators (e.g., `language === 'en' ? 'English' : 'German'`) inside components like `MainView.jsx`, `Footer.jsx`, and `Modals.jsx`.

## ➕ How to Add a New Case Study

Case studies are highly modular. To add a new one, follow these 3 steps:

1. **Create the file:** Inside the `src/selected_impact/` folder, create a new `.jsx` file (e.g., `my-project.jsx`).
2. **Define the data:** Export a case study object. You can use the following template:

   ```jsx
   export const myProject = {
       title: 'My Awesome Project',
       role: 'Lead Engineer',
       tags: ['React', 'Node.js', 'AWS'],
       links: [
           { type: 'github', url: 'https://github.com/...', label: 'View Repository' },
           { type: 'reference', url: 'https://...', label: 'Live Site' } // Optional secondary link
       ],
       summary: 'A short description that appears on the homepage project card.',
       content: (
           <>
               <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Challenge</h2>
               <p className="mb-4">Describe the challenge here...</p>
               
               <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Solution</h2>
               <p className="mb-4">Describe the solution here...</p>
           </>
       )
   };
   ```

3. **Register the project:** Open `src/selected_impact/projects.jsx`, import your new file, and add it to the exported `projectData` object:

   ```jsx
   import { myProject } from './my-project.jsx';
   // ... other imports

   export const projectData = {
       // ... other projects,
       myProject
   };
   ```

The project will automatically appear on the homepage and generate its own valid URL route!