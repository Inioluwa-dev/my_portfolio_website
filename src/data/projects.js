export const projects = [
  {
    id: "kefi",
    title: "Kefi - Social Media Platform",
    category: "fullstack",
    featured: true,
    image: "/project-images/kefi.png",
    shortDescription: "Full-featured social media platform with a Django backend, using Python, JavaScript, and MySQL.",
    description: "A comprehensive social media platform built with a powerful Django backend. It manages user authentication, posts, comments, likes, follower relationships, and feed algorithms.",
    technologies: ["Python", "Django", "JavaScript", "MySQL", "Bootstrap", "CSS3"],
    github: "https://github.com/Inioluwa_dev/Kefi_Beta_V1",
    demo: "https://kefi.onrender.com",
    status: "Completed",
    year: "2024",
    duration: "3 months",
    team: "Solo Project",
    client: "Personal Project",
    rating: 5.0,
    features: [
      "User authentication and profile customization",
      "Post creation with image and text sharing",
      "Real-time comments and like counter",
      "Follow/Unfollow user dynamic updates",
      "Algorithmic feed based on follow status",
      "Admin moderator dashboard"
    ],
    caseStudy: {
      problem: "Traditional social network projects often use flat data structures that do not scale when dealing with complex relational queries, such as calculating followers' feeds, resulting in huge database bottlenecks and slow load times.",
      solution: "Implemented an optimized MySQL schema utilizing foreign keys, index triggers, and Django's ORM select_related/prefetch_related methods to perform efficient multi-table joins. Created a modular Django view structure to handle social requests cleanly.",
      architecture: [
        "Frontend: Responsive HTML5 and Bootstrap templates styled with custom CSS variables.",
        "Backend: Django MVC architecture processing core business logic.",
        "Database: Normalized MySQL schema tracking User, Post, Follower, Like, and Comment tables.",
        "Static Media: Image files managed and served via local storage buffers."
      ],
      challenges: [
        {
          title: "Follower Feed Performance",
          desc: "Retrieving posts from only users that a visitor followed resulted in nested loops. Resolved by writing a filter lookup using Django's ORM __in operator combined with database query indexing."
        },
        {
          title: "Duplicate Like DB Queries",
          desc: "Multiple users spamming likes triggered race conditions. Resolved by implementing constraints at the database model level (unique_together constraint on User and Post keys)."
        }
      ],
      lessons: "Learned the critical value of query profiling and DB indexing. Moving from basic loops to sets of indexed SQL query filters cut page loading speed from 2.4s to under 150ms.",
      futureImprovements: [
        "Integrate Redis caching for active feeds.",
        "Add WebSockets/Django Channels for real-time chat between followed users."
      ]
    }
  },
  {
    id: "serguo-ai",
    title: "Serguo AI - OCR Platform",
    category: "fullstack",
    featured: true,
    image: "/project-images/serguo.png",
    shortDescription: "Image/PDF to text AI extractor using Gemini API, React, and Tailwind CSS.",
    description: "An AI-powered OCR application that converts images and PDFs to readable, copyable text. It integrates the Gemini Vision API for high-accuracy text extraction and layout parsing.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Gemini API", "HTML5", "Vite"],
    github: "https://github.com/Inioluwa_dev/serguo-ai",
    demo: "https://serguo-ai.web.app",
    status: "Completed",
    year: "2025",
    duration: "3 days (plus deployment)",
    team: "Solo Project",
    client: "Personal Project",
    rating: 5.0,
    features: [
      "AI-powered OCR text extraction",
      "PDF upload and document scanning",
      "Side-by-side comparison editor",
      "One-click 'Copy to Clipboard'",
      "Fast response rendering using static CDN hosting"
    ],
    caseStudy: {
      problem: "Traditional OCR engines (like basic Tesseract) struggle heavily with low-contrast images, handwritten letters, and multi-column document layouts, producing garbled or misaligned text.",
      solution: "Leveraged the visual reasoning capabilities of the Gemini Vision API (via secure serverless endpoints/client-side calls) to parse image layouts and extract text semantically. Built a fast, fluid React interface styled with Tailwind CSS for drag-and-drop file inputs.",
      architecture: [
        "Frontend UI: React components built on Vite, using Tailwind CSS for a frosted glass dark theme.",
        "API Integration: Fetch endpoints executing queries against Gemini Vision model headers.",
        "File Buffer: HTML5 Canvas API used to render PDF pages as images for Gemini upload formats.",
        "Deployment: Static files optimized and hosted on Firebase CDN."
      ],
      challenges: [
        {
          title: "Parsing PDFs on Client Side",
          desc: "Gemini Vision APIs accept image files, but not multi-page PDFs directly. Resolved by using client-side canvas rendering to rasterize PDF documents page-by-page into base64 images before transmission."
        },
        {
          title: "API Rate Limits",
          desc: "Spam uploads hit API limits quickly. Resolved by implementing client-side debouncing and size validation on files before sending requests."
        }
      ],
      lessons: "Discovered that modern LLMs can completely outperform traditional OCR on layout parsing. Learned how to manipulate canvas streams to convert file formats in the browser.",
      futureImprovements: [
        "Add multi-language translation toggles directly in the dashboard.",
        "Support DOCX/TXT download formats for extracted text."
      ]
    }
  },
  {
    id: "harth-bgremover",
    title: "Harth - AI Background Removal",
    category: "fullstack",
    featured: true,
    image: "/project-images/harth.png",
    shortDescription: "AI background removal tool built with a Python FastAPI backend and React frontend.",
    description: "An AI-powered web platform for editing image backdrops. It utilizes deep learning models (U2net/isnet) to isolate foreground subjects and replace backgrounds in real time.",
    technologies: ["Python", "FastAPI", "React", "Tailwind CSS", "Docker", "U2net", "isnet"],
    github: "https://github.com/Inioluwa_dev/Harth",
    demo: "https://harth-0.web.app",
    status: "Completed",
    year: "2025",
    duration: "2 weeks",
    team: "Solo Project",
    client: "Personal Project",
    rating: 5.0,
    features: [
      "AI-driven foreground isolation",
      "Instant background color swap",
      "Real-time canvas image editor",
      "High-resolution PNG download export",
      "Dockerized microservice backend"
    ],
    caseStudy: {
      problem: "Running deep-learning computer vision models for image segmentation requires extensive memory and CPU/GPU resources, making browser-only execution slow and server execution complex to scale.",
      solution: "Created a dedicated Python API microservice using FastAPI, encapsulating the U2net model weights. Packaged the entire server-side application into a Docker container, deploying it to scalable container registry servers to handle image streams.",
      architecture: [
        "Client UI: React frontend displaying an interactive comparison slider of original vs edited images.",
        "Backend REST: FastAPI application handling high-frequency binary image uploads.",
        "AI Segmentation: U2net model generating alpha channel masks on image arrays.",
        "Infrastructure: Dockerized image containing all neural net weights and PyTorch libraries."
      ],
      challenges: [
        {
          title: "Neural Network Size in Docker",
          desc: "The Docker image originally exceeded 3.5GB due to heavy framework dependencies. Resolved by stripping PyTorch down to CPU-only runtimes and caching weights outside the core image, reducing size to 1.1GB."
        },
        {
          title: "High Latency on Uploads",
          desc: "Transferring high-res images to the server was slow. Resolved by scaling down uploaded images client-side via canvas resampling before execution, reducing processing time by 75%."
        }
      ],
      lessons: "Gained comprehensive experience dockerizing machine learning microservices and managing canvas drawing buffers in React.",
      futureImprovements: [
        "Implement Redis queues for batch background removal processing.",
        "Add foreground touch-up brushes using Canvas drawing masks."
      ]
    }
  },
  {
    id: "konverter",
    title: "Konverter - Data Conversion Tool",
    category: "frontend",
    featured: false,
    image: "/project-images/konverter.png",
    shortDescription: "Data conversion utility built with React and Bootstrap, with CSV/JSON support and minification.",
    description: "A developer utility tool designed to convert CSV files to JSON and vice-versa, featuring additional utilities for code minification, cleaning, and formatting.",
    technologies: ["React", "JavaScript", "Bootstrap", "CSS3", "HTML5"],
    github: "https://github.com/Inioluwa_dev/Konverter",
    demo: "https://kon-verter.web.app",
    status: "Completed",
    year: "2024",
    duration: "2 months",
    team: "Solo Project",
    client: "Personal Project",
    rating: 5.0,
    features: [
      "CSV to JSON formatting parser",
      "JSON to CSV builder table",
      "Data minifier / whitespace stripper",
      "JSON unminifier / code formatter",
      "Drag-and-drop file uploading",
      "Data syntax validation alerts"
    ],
    caseStudy: {
      problem: "Online conversion tools are often loaded with invasive ads, slow server-side loops, or send private data to external servers, which is a major security risk for developer API keys or payloads.",
      solution: "Built a 100% client-side conversion suite in React. All parsing, validation, and minification run locally inside the visitor's browser thread, ensuring absolute data privacy and instantaneous processing speeds.",
      architecture: [
        "Frontend Framework: React structured with page-component layout controls.",
        "CSS System: Bootstrap grid system for responsive formatting panels.",
        "Parsing Logic: Regex engines and custom array mapping helpers converting rows to objects."
      ],
      challenges: [
        {
          title: "Parsing malformed CSVs",
          desc: "CSVs containing unescaped commas inside quote blocks broke standard string splitting. Resolved by writing a custom line-scanning parser that respects quote encapsulations."
        },
        {
          title: "Handling Huge Payloads",
          desc: "Large 50MB files froze the browser UI thread. Resolved by incorporating file chunking and rendering a progress spinner during execution."
        }
      ],
      lessons: "Deepened knowledge of regex, CSV RFC-4180 standards, and client-side performance limitations.",
      futureImprovements: [
        "Add XML and YAML conversion support.",
        "Integrate a visual Schema mapping canvas."
      ]
    }
  },
  {
    id: "upreadr",
    title: "UpReadr - The Distraction-Free Reading Engine",
    category: "frontend",
    featured: true,
    image: "/project-images/upreadr.png",
    shortDescription: "A distraction-free reading engine designed to transform PDFs into pristine, elegant digital books natively and locally in your browser.",
    description: "A local-first web application that converts sprawling PDF textbooks or articles into beautifully typeset, readable ebook layouts. All processing runs 100% locally in-browser to preserve privacy and allow full offline reading.",
    technologies: ["React", "IndexedDB", "JavaScript", "HTML5", "CSS3", "Service Workers"],
    github: null,
    demo: "https://upreadr.vercel.app",
    status: "Completed",
    year: "2026",
    duration: "1 month",
    team: "Solo Project",
    client: "Personal Project",
    rating: 5.0,
    features: [
      "Client-side PDF rendering and layout conversion",
      "Elegant typography customization (fonts, spacing, text sizing)",
      "Local-first library storage via IndexedDB",
      "Offline-enabled Progressive Web App (PWA) using Service Workers",
      "Progress tracking and automated bookmarks"
    ],
    caseStudy: {
      problem: "Standard PDF viewers are cluttered, show content in fixed static pages, and lack readability controls like font resizing, themes, or custom layouts, which hinders deep focus and makes study exhausting.",
      solution: "Developed a local-first browser reader in React. It parses PDFs page-by-page, rendering them into a clean, distraction-free environment with adjustable typography, reading themes (light, dark, sepia), and local library state preservation.",
      architecture: [
        "Frontend: React with modular components for the reading dashboard, settings panel, and book list.",
        "Local Storage: IndexedDB via Dexie.js to store user books, read progress, and application settings.",
        "Offline PWA: Service Workers to cache assets and allow 100% offline reading and app usage.",
        "PDF Rendering: Customized pdfjs-dist hooks to extract and rasterize PDF pages directly in client-side memory."
      ],
      challenges: [
        {
          title: "Browser Storage Size Limits",
          desc: "Large PDFs can exceed standard localStorage limits (5MB) or hit IndexedDB quota warnings. Resolved by storing PDF binary blobs directly in IndexedDB instead of Base64 strings, optimizing storage buffers."
        },
        {
          title: "Smooth Reader Scrolling Performance",
          desc: "Rendering a full 200-page PDF at once caused major lag. Resolved by implementing virtualized lists that only render pages currently visible in the viewport, maintaining 60fps."
        }
      ],
      lessons: "Learned how to design high-performance, local-first PWAs and optimize browser memory when handling large binary files.",
      futureImprovements: [
        "Integrate automated text-to-speech (TTS) utilizing Web Speech API.",
        "Support EPUB parsing in addition to PDF files."
      ]
    }
  },
  {
    id: "book-tracker",
    title: "Coursemate Book Tracker",
    category: "frontend",
    featured: false,
    image: "/project-images/book-tracker.png",
    shortDescription: "A local-first book allocation and payments tracker built for class governors to manage purchases, payments, profits, and global dues.",
    description: "A student book manager and financial tracking tool for department class governors. It allows them to catalog shared books, log payments, track profit margins, and calculate expected class dues with full offline capability.",
    technologies: ["JavaScript", "IndexedDB", "CSS3", "HTML5", "Supabase"],
    github: null,
    demo: "https://ini-book-tracker.vercel.app",
    status: "Completed",
    year: "2026",
    duration: "1 month",
    team: "Solo Project",
    client: "Personal Project",
    rating: 5.0,
    features: [
      "Department classmate database management",
      "Shared book inventory and pricing configuration",
      "Automatic profit margin and expected revenue calculation",
      "Supabase cloud sync backup options",
      "CSV data exporting capability"
    ],
    caseStudy: {
      problem: "Class governors must manually keep track of book purchases, student payments, outstanding balances, and class dues across dozens of students, which is prone to accounting errors and data loss on spreadsheets.",
      solution: "Created a lightweight student bookkeeping web app. Designed a clean, tabbed interface to manage students, calculate book costs, track profits, and monitor global class dues settings, storing all records locally.",
      architecture: [
        "Frontend: Structured vanilla HTML5, CSS custom properties, and modular JavaScript components.",
        "Database: Local-first IndexedDB utilizing a custom schema to track Student, Book, and Due tables.",
        "Cloud Integration: Optional cloud backup synchronization integrated with Supabase REST endpoints."
      ],
      challenges: [
        {
          title: "Ensuring Local Data Safety",
          desc: "Since all data runs in-browser, clearing browser cookies could delete governor records. Resolved by building a sitemapped cloud sync dashboard to push/pull backups dynamically using Supabase database triggers."
        },
        {
          title: "Complex Multi-Table Financial Calculations",
          desc: "Aggregating total costs, total revenues, and profit margins on the fly across dynamically assigned student listings caused UI freezes. Resolved by optimizing database queries to compute aggregates in unified reduce calls."
        }
      ],
      lessons: "Gained experience in vanilla JS application architecture, structured data flows, and designing robust schemas for IndexedDB systems.",
      futureImprovements: [
        "Implement automatic WhatsApp notifications for classmates regarding pending dues.",
        "Add multi-currency configuration options."
      ]
    }
  }
];
export const getProjectById = (id) => projects.find((p) => p.id === id);
