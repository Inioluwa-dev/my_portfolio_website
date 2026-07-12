export const twinKnowledgeBase = {
  personality: {
    greeting: "Hey! I'm Inioluwa's Digital Twin (his virtual clone). Select an option below to learn about his experience, projects, or how to contact him!",
    fallback: "I might not have a pre-programmed answer for that right now, but you can contact me directly at misterhge@gmail.com or fill out the contact form on this website!"
  },
  dialogueTree: {
    root: {
      text: "Hey! I'm Inioluwa's Digital Twin (his virtual clone). What would you like to know about me today?",
      options: [
        { label: "🚀 Projects & Tech Stack", next: "projects_menu" },
        { label: "👨‍💻 Journey & Philosophy", next: "journey_menu" },
        { label: "📄 Career & Résumé", next: "career_menu" },
        { label: "📬 Get in Touch", next: "contact_menu" }
      ]
    },
    projects_menu: {
      text: "I specialize in building AI-powered web tools, secure backend microservices, and high-fidelity frontends. Which project or area would you like to explore?",
      options: [
        { label: "Serguo AI (OCR Platform)", next: "project_serguo" },
        { label: "Harth AI (Bg Remover)", next: "project_harth" },
        { label: "Kefi (Social Media App)", next: "project_kefi" },
        { label: "Konverter (CSV/JSON Tool)", next: "project_konverter" },
        { label: "What is your primary tech stack?", next: "tech_stack" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    project_serguo: {
      text: "Serguo AI is an OCR text-extraction platform built in 2025. It uses Python/FastAPI and the Gemini Vision API on the backend to parse text from images and PDFs, with a responsive React frontend. What details interest you?",
      options: [
        { label: "What challenges did you face?", next: "serguo_challenges" },
        { label: "Explore another project", next: "projects_menu" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    serguo_challenges: {
      text: "OCR and PDF parsing are heavy CPU-bound operations. Running them directly inside FastAPI's async event loop was causing latency bottlenecks. I resolved this by offloading processing to concurrent Python ThreadPoolExecutors, keeping the async server responsive for incoming traffic.",
      options: [
        { label: "Explore another project", next: "projects_menu" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    project_harth: {
      text: "Harth AI is a professional background removal service. It exposes a custom Python FastAPI backend running deep learning (U2net) image extraction models inside a Docker container, linked to a React frontend. What would you like to know?",
      options: [
        { label: "What challenges did you face?", next: "harth_challenges" },
        { label: "Explore another project", next: "projects_menu" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    harth_challenges: {
      text: "Deploying machine learning weights inside Docker containers on cloud runtimes often results in massive container image sizes (3GB+) and slow cold starts. I optimized the Docker build using multi-stage compilation, python-slim images, and local caching, reduction size by over 60%.",
      options: [
        { label: "Explore another project", next: "projects_menu" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    project_kefi: {
      text: "Kefi is a full-stack social media platform I developed in 2024. The backend is built with Python and Django, using a MySQL database to manage users, posts, follower schemas, and news feeds. It includes real-time comment and follower updates.",
      options: [
        { label: "Explore another project", next: "projects_menu" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    project_konverter: {
      text: "Konverter is a utility web application built in 2024 for developers. It converts CSV data to JSON and vice-versa, with client-side validation and automatic minification. I built it with React, JS, and Bootstrap.",
      options: [
        { label: "Explore another project", next: "projects_menu" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    tech_stack: {
      text: "My primary technical stack includes:\n• Backend: Python, Django REST Framework, FastAPI\n• Frontend: React, JavaScript (ES6+), Vanilla CSS (Flexbox, Grid), Bootstrap, Tailwind\n• Cache & DB: Redis (caching patterns), PostgreSQL, MySQL\n• DevOps: Docker, Git versioning, Render, Firebase deployments.",
      options: [
        { label: "Explore projects", next: "projects_menu" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    journey_menu: {
      text: "I am a self-taught engineer based in Lagos, Nigeria. What part of my background or coding history would you like to know about?",
      options: [
        { label: "How did you start coding?", next: "coding_start" },
        { label: "What is your engineering philosophy?", next: "eng_philosophy" },
        { label: "What are you learning now?", next: "learning_now" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    coding_start: {
      text: "My programming journey started over 8 years ago (in 2018) when I first began learning Python. Initially writing scripts on a mobile device, I later attended intensive bootcamps to master database schema design, and I have spent the last 3+ years teaching coding and software logic to students.",
      options: [
        { label: "Your engineering philosophy", next: "eng_philosophy" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    eng_philosophy: {
      text: "I advocate for 'performance-first, clean code'. Web apps should load instantly (under 1s), use responsive, accessible CSS without dependency bloat, and have a highly modular folder structure to remain scale-proof.",
      options: [
        { label: "What are you learning now?", next: "learning_now" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    learning_now: {
      text: "I'm currently exploring Next.js for server-rendered React applications, Go (Golang) for building high-concurrency microservices, and advanced client-side RAG search patterns.",
      options: [
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    career_menu: {
      text: "I balance my time between freelance software contracts, open-source work, and teaching programming. I am also studying B.Sc. Mathematics, applying mathematical logic to algorithm designs. What can I tell you?",
      options: [
        { label: "Professional experience summary", next: "work_history" },
        { label: "Certifications", next: "certs_info" },
        { label: "How can I download your CV?", next: "download_cv" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    work_history: {
      text: "I have over 3 years of experience building Python (FastAPI/Django) backend microservices and React UIs for freelance clients, combined with over 3 years of instructing students in programming fundamentals and algorithms.",
      options: [
        { label: "Certifications", next: "certs_info" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    certs_info: {
      text: "I hold certifications as a FastAPI REST API Expert, a Full-Stack Python Developer, and in Responsive Web Design.",
      options: [
        { label: "Download CV", next: "download_cv" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    download_cv: {
      text: "You can download my professional CV directly on the Resume page. It is compiled as a printable PDF CV containing my full employment history and skills matrix.",
      options: [
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    contact_menu: {
      text: "I'd love to hear from you! What is the nature of your inquiry?",
      options: [
        { label: "Hire me for freelance / full-time", next: "hire_info" },
        { label: "Collaborate on a project", next: "collab_info" },
        { label: "Just wanted to say hello!", next: "hello_info" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    hire_info: {
      text: "Excellent! You can email me at misterhge@gmail.com, call me at +234 9133770970, or go to the Contact page of this site to submit your project requirements directly.",
      options: [
        { label: "Go to Contact page", next: "route_contact" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    collab_info: {
      text: "I love collaborating on interesting projects! Check out my GitHub profile (@Inioluwa-dev) or reach out directly at misterhge@gmail.com.",
      options: [
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    hello_info: {
      text: "Hello! Always happy to connect with other developers and technology enthusiasts. Reach out via email at misterhge@gmail.com or say hi on GitHub!",
      options: [
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    },
    fallback_info: {
      text: "I don't have a specific response for that question in my virtual clone knowledge base, but you can message me directly over email (misterhge@gmail.com) or use the Contact form!",
      options: [
        { label: "Go to Contact page", next: "route_contact" },
        { label: "⬅️ Back to Main Menu", next: "root" }
      ]
    }
  }
};
