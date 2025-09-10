# Luxury Brand Persona Generator

A sophisticated web application designed as a digital atelier to help visionary founders and boutique brands discover their core archetype, tone, and audience. This project merges the art of luxury storytelling with a refined, modern tech stack, creating an emotionally intelligent and technically polished user experience.

Authored by **Hussein Salim**, a full-stack developer and digital brand strategist blending luxury hospitality excellence with modern technology.

**Live Demo:** [https://luxury-brand-persona-generator.vercel.app/]

![Luxury Brand Persona Generator Showcase](<img width="1190" height="665" alt="social-preview" src="https://github.com/user-attachments/assets/be86f951-0b67-4631-aef5-73a1af3390c5" />)


---

## ✨ Vision & Mission

The mission of this project is to serve as a cornerstone portfolio piece for **DigitalHus.com**, reflecting a unique capability to merge hospitality excellence, luxury storytelling, and technology into client-winning digital experiences.

The application guides users through an interactive quiz to reveal one of twelve primary brand archetypes (e.g., The Sage, The Creator, The Ruler). The experience culminates in a beautiful, shareable summary card that outlines the brand's core identity, complete with a dynamically generated tagline.

## 🛠️ Technical Showcase & Features

This project was built from the ground up to demonstrate a command of modern, professional web development practices. The code is clean, scalable, and adheres to the highest standards of quality.

### Core Features:

*   **Interactive Archetype Quiz:** A multi-step questionnaire that intelligently maps user choices to a specific brand persona.
*   **Dynamic Persona Reveal:** An elegant results page featuring smooth animations and a detailed breakdown of the user's archetype.
*   **AI-Powered Tagline Generation:** A modular integration with the OpenAI API that generates a unique brand tagline based on the quiz results.
    *   *Note: To manage operational costs for this public demo, the live OpenAI API calls have been replaced with a mocked response that simulates the network request and returns high-quality, pre-generated content. The full, production-ready code is available within the repository.*
*   **Professional State Management:** Clean separation of concerns using React Hooks and a stateful `App` component to manage the user flow.
*   **Polished UI/UX:** Built with **shadcn/ui** and styled with **Tailwind CSS**, featuring a custom, luxurious color palette, responsive design, and subtle animations powered by **Framer Motion**.

### Tech Stack:

*   **Framework:** React (Vite)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Component Library:** shadcn/ui
*   **Animations:** Framer Motion
*   **AI Integration:** OpenAI API
*   **Package Manager:** pnpm

---

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Hussein-Sonamreel/luxury-brand-persona-generator.git
    cd luxury-brand-persona-generator
    ```

2.  **Install dependencies:**
    This project uses `pnpm` for efficient package management.
    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a new file named `.env.local` in the root of the project and add your OpenAI API key.
    ```
    VITE_OPENAI_API_KEY="your-secret-api-key-here"
    ```
    *(Note: The project will function perfectly using the mocked API response if a key is not provided.)*

4.  **Run the development server:**
    ```bash
    pnpm dev
    ```
    The application will be available at `http://localhost:5173`.

---

## 👤 About the Author

**Hussein Salim** | Digital Brand Strategist & Full-Stack Developer

- **GitHub:** [@Hussein-Sonamreel](https://github.com/Hussein-Sonamreel)
- **Portfolio:** [DigitalHus.com](https://your-portfolio-link.com)
- **LinkedIn:** [Your LinkedIn Profile URL]

This project is a testament to a vision of creating digital experiences that are not just functional, but emotionally resonant and strategically impactful.
