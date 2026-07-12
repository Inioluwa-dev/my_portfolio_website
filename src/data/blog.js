export const blogPosts = [
  {
    id: "building-ocr-fastapi",
    title: "Building a High-Performance OCR Platform with FastAPI and Tesseract",
    category: "Backend",
    date: "June 15, 2026",
    readTime: "8 min read",
    summary: "A deep dive into constructing a robust REST API for optical character recognition, covering file stream handling, thread pool execution, and Tesseract caching.",
    coverImage: "/project-images/blog_ocr_fastapi.png",
    tags: ["FastAPI", "Python", "OCR", "Deep Learning"],
    content: `
      <h2>The Challenge of Image Processing in Python</h2>
      <p>Optical Character Recognition (OCR) is inherently CPU-bound. When building a web application that extracts text from images, running raw blocking OCR processes directly in your asynchronous web framework will freeze the main event loop, causing massive latency spikes for all other requests.</p>
      
      <p>In this article, we'll walk through how to build a scalable OCR API using FastAPI, Python's <code>pytesseract</code> wrapper, and run CPU-heavy tasks off the main thread to ensure high concurrency.</p>

      <h2>Why FastAPI?</h2>
      <p>FastAPI is built on Starlette and Uvicorn, which utilize an asynchronous event loop. It excels at I/O-bound operations (like database calls and network requests). However, for CPU-bound tasks like OCR, we must offload execution using Python's concurrent thread pool executors or asynchronous worker queues.</p>

      <h2>Step 1: Setting up the FastAPI Endpoint</h2>
      <p>We'll create an endpoint that accepts an image file upload. We use FastAPI's <code>UploadFile</code> because it streams the file to memory or temporary files based on file size, avoiding memory exhaustion.</p>

      <pre><code>from fastapi import FastAPI, UploadFile, File, HTTPException
import pytesseract
from PIL import Image
import io
import asyncio
from concurrent.futures import ThreadPoolExecutor

app = FastAPI()
executor = ThreadPoolExecutor(max_workers=4)

def perform_ocr(image_bytes: bytes) -> str:
    image = Image.open(io.BytesIO(image_bytes))
    text = pytesseract.image_to_string(image)
    return text.strip()

@app.post("/api/v1/ocr")
async def extract_text(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Invalid file type. Image required.")
    
    file_bytes = await file.read()
    
    # Run the CPU-bound OCR task in a thread pool
    loop = asyncio.get_event_loop()
    extracted_text = await loop.run_in_executor(executor, perform_ocr, file_bytes)
    
    return {
        "filename": file.filename,
        "text": extracted_text,
        "length": len(extracted_text)
    }</code></pre>

      <h2>Step 2: Processing in the Thread Pool</h2>
      <p>By using <code>loop.run_in_executor</code>, we prevent Tesseract's CPU-intensive processing from blocking our async event loop. Other requests can continue to be received and processed by FastAPI while the thread pool executes the OCR operation in the background.</p>

      <h2>Step 3: Adding Image Pre-processing</h2>
      <p>Tesseract's accuracy is heavily dependent on the quality of the source image. Applying simple canvas filters (like converting to grayscale, binarization/thresholding, and noise removal) before passing the image to OCR can improve reading accuracy by over 40%.</p>
      
      <p>Using libraries like OpenCV or Pillow, you can binarize the image using adaptive thresholding:</p>
      
      <pre><code>import cv2
import numpy as np

def preprocess_image(image_bytes: bytes) -> Image.Image:
    # Convert bytes to numpy array
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)
    
    # Apply Otsu's thresholding
    _, th = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    
    # Convert back to PIL Image
    return Image.fromarray(th)</code></pre>

      <h2>Conclusion</h2>
      <p>FastAPI provides the perfect backbone for modern ML microservices. By combining it with lightweight thread pools and standard pre-processing pipelines, we can deliver high-speed, scalable APIs capable of executing complex tasks like OCR with ease.</p>
    `
  },
  {
    id: "react-folder-structures",
    title: "Scale-Proof React Folder Structures for Modern SPAs",
    category: "Frontend",
    date: "May 28, 2026",
    readTime: "6 min read",
    summary: "An opinionated guide on organizing your React codebase, separating routing, context, components, and hooks to keep codebases clean as they scale.",
    coverImage: "/project-images/blog_react_structure.png",
    tags: ["React", "Architecture", "JavaScript", "Clean Code"],
    content: `
      <h2>The Pitfalls of Flat React Structures</h2>
      <p>Many developers start React projects with a flat folder layout: a single <code>components/</code> folder containing dozens of files. As the project grows, finding files becomes difficult, imports turn into chaotic relative path messes (e.g. <code>../../../../components/Button</code>), and file reuse declines.</p>

      <h2>The Page-Component Pattern</h2>
      <p>To write maintainable code, you must separate **pages** (representing specific URL routes) from **components** (reusable visual blocks). This folder structure represents clean separation of concerns:</p>

      <pre><code>src/
├── assets/         # Static images, icons, and PDFs
├── components/     # UI components
│   ├── layout/     # Page-wide shells: Navbar, Footer, Loading
│   ├── ui/         # Base atoms: CustomCursor, Buttons, Modals
│   └── sections/   # Component sections: About, Contact, Hero
├── context/        # React Context providers (Theme, Auth)
├── data/           # Mock data and static content records
├── pages/          # Full page view wrappers mapped to routes
├── router/         # React Router config and wrappers
├── styles/         # CSS styles and design tokens
└── utils/          # Pure helper functions & engines</code></pre>

      <h2>Rules of Thumb for Clean imports</h2>
      <ul>
        <li><strong>Page components do not hold UI styles:</strong> Pages simply assemble section components and assign page-wide metadata (like SEO).</li>
        <li><strong>Section components are presentation-only:</strong> Avoid side-effects that modify global page head tags from within child elements.</li>
        <li><strong>Use Absolute Paths:</strong> Configure Vite with path aliases (e.g., <code>@/components</code>) to avoid relative nesting loops.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Investing 15 minutes into structuring your folder system correctly at the start of a project pays dividends later. It allows developers to quickly locate files, reuse atomic elements, and avoid circular import loops.</p>
    `
  },
  {
    id: "redis-caching-explained",
    title: "Redis Caching Explained: Accelerate Backend API Latency",
    category: "Database",
    date: "April 12, 2026",
    readTime: "10 min read",
    summary: "Learn how to cache database queries and API responses in Redis with automatic cache invalidation strategies.",
    coverImage: "/project-images/blog_redis_caching.png",
    tags: ["Redis", "Caching", "FastAPI", "Database"],
    content: `
      <h2>Why Database Query Latency Matters</h2>
      <p>Every time a user visits your portfolio, your server queries a database to fetch details. If your data doesn't change frequently, doing duplicate queries is a huge waste of CPU and database connections. In this guide, we'll configure Redis to cache query results and reduce API response time to under 10 milliseconds.</p>

      <h2>What is Redis?</h2>
      <p>Redis is an in-memory key-value database. Because it stores data directly in RAM, read/write speeds are incredibly fast (sub-millisecond). We can use it as a transient caching layer in front of relational databases like MySQL or PostgreSQL.</p>

      <h2>The Cache-Aside Pattern</h2>
      <p>In this pattern, the application checks the cache first. If the data is found (cache hit), it returns it. If not (cache miss), it queries the database, writes the result to the cache for future requests, and returns the data.</p>

      <pre><code>import redis
import json

# Connect to Redis
cache = redis.Redis(host='localhost', port=6379, db=0)

def get_project_details(project_id: int):
    # Check cache first
    cache_key = f"project:{project_id}"
    cached_data = cache.get(cache_key)
    
    if cached_data:
        print("Cache Hit!")
        return json.loads(cached_data)
        
    print("Cache Miss! Querying Postgres Database...")
    db_result = fetch_from_postgres(project_id)
    
    # Store in Redis with a 1-hour expiration time (TTL)
    cache.setex(cache_key, 3600, json.dumps(db_result))
    
    return db_result</code></pre>

      <h2>Cache Invalidation Strategies</h2>
      <p>A cache is only useful if it serves accurate data. If details change, we must update the cache. There are three common invalidation methods:</p>
      <ul>
        <li><strong>TTL (Time To Live):</strong> Set an expiration time (like 1 hour). The cache deletes itself after this time.</li>
        <li><strong>Write-Through Caching:</strong> Write to the database and the cache simultaneously on updates.</li>
        <li><strong>Explicit Invalidation:</strong> Trigger cache deletion directly when updates are saved in the admin panel.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Implementing a Cache-Aside pattern with Redis is one of the most effective ways to optimize application response speed. It relieves database stress and delivers instantaneous page loads for users.</p>
    `
  },
  {
    id: "optimizing-python-thread-pools",
    title: "Optimizing CPU-Bound Operations with Python Thread Pools in FastAPI",
    category: "Backend",
    date: "July 2, 2026",
    readTime: "9 min read",
    summary: "An advanced look at Python's Global Interpreter Lock (GIL) and how to configure custom ThreadPoolExecutors to handle concurrent CPU-bound tasks in web microservices.",
    coverImage: "/project-images/blog_python_concurrency.png",
    tags: ["Python", "FastAPI", "Concurrency", "GIL", "Multithreading"],
    content: `
      <h2>The Async vs. Sync Dilemma in Python APIs</h2>
      <p>Asynchronous web frameworks like FastAPI rely on a single event loop to handle thousands of requests concurrently. This works beautifully for I/O-bound requests. However, as soon as your API needs to perform image filtering, machine learning inference, or cryptographic hashing, the event loop freezes, blocking all other requests.</p>

      <h2>Understanding the GIL</h2>
      <p>Python's Global Interpreter Lock (GIL) prevents multiple native threads from executing Python bytecodes at once. This means multithreading won't bypass the CPU bottlenecks of pure Python computations. However, for operations wrapping C-extensions (like OpenCV, NumPy, Pillow) or subprocess calls (like Tesseract OCR binaries), the GIL is released during execution. Here, Thread Pools are highly effective.</p>

      <h2>Implementing a Custom ThreadPoolExecutor</h2>
      <p>By default, FastAPI routes synchronous endpoint functions (declared with <code>def</code> instead of <code>async def</code>) to an internal thread pool. However, to maintain fine-grained control over queue sizes and thread limits, you should instantiate and manage your own executors:</p>

      <pre><code>import asyncio
from concurrent.futures import ThreadPoolExecutor
from fastapi import FastAPI

app = FastAPI()

# Limit concurrent CPU-intensive tasks to avoid thread thrashing
cpu_executor = ThreadPoolExecutor(
    max_workers=4,
    thread_name_prefix="cpu_heavy"
)

def compute_heavy_hash(data: str) -> str:
    # Heavy hashing, database parsing, or image processing
    import hashlib
    result = data
    for _ in range(500_000):
         result = hashlib.sha256(result.encode()).hexdigest()
    return result

@app.post("/api/v1/compute")
async def run_computation(payload: dict):
    loop = asyncio.get_running_loop()
    
    # Run in your customized thread pool
    result = await loop.run_in_executor(
        cpu_executor, 
        compute_heavy_hash, 
        payload.get("data", "")
    )
    
    return {"status": "success", "result": result}</code></pre>

      <h2>Tuning max_workers</h2>
      <p>How many workers should your thread pool have? A good formula for CPU-bound tasks wrapping native libraries is:
      <br><code>max_workers = number_of_cpu_cores + 1</code>.
      <br>Setting this value too high leads to excessive context switching and thread thrashing, which degrades overall performance.</p>

      <h2>Conclusion</h2>
      <p>Understanding when to leverage asynchronous architectures and when to spin off threads is critical for backend engineering. Utilizing isolated ThreadPoolExecutors ensures your async web core remains stable, scalable, and responsive.</p>
    `
  },
  {
    id: "high-traffic-db-schemas",
    title: "Designing Resilient Database Schemas for High-Traffic Backends",
    category: "Database",
    date: "July 12, 2026",
    readTime: "11 min read",
    summary: "Architecting scale-proof database tables, choosing indexes (B-Tree, Hash, GIN), partitioning large datasets, and configuring Postgres connection pooling.",
    coverImage: "/project-images/blog_database_schema.png",
    tags: ["Database", "PostgreSQL", "SQL", "Database Indexing", "Scaling"],
    content: `
      <h2>The Breaking Point of Database Systems</h2>
      <p>In high-traffic systems, database bottlenecks are the most common source of application crashes. While frontend code scales easily behind load balancers, database layers represent shared state and must be architected carefully to handle heavy read/write ratios.</p>

      <h2>1. The Art of Indexing</h2>
      <p>An index accelerates select queries but slows down write operations (INSERT/UPDATE/DELETE) because the index tree must be updated. Choosing the correct index type makes a massive difference:</p>
      <ul>
        <li><strong>B-Tree Index:</strong> The default choice in most relational engines. Perfect for range queries (<code>WHERE age > 18</code>) and exact lookups.</li>
        <li><strong>Hash Index:</strong> Available in PostgreSQL. Optimized strictly for equality checks (<code>WHERE id = 'xyz'</code>) and faster than B-Tree for large strings.</li>
        <li><strong>GIN (Generalized Inverted Index):</strong> Critical for searching JSONB columns or text arrays (frequent in tag arrays).</li>
      </ul>

      <h2>2. SQL Schema Example: Tag Search Optimization</h2>
      <p>Here is how to optimize a project and tag schema in PostgreSQL using GIN indexes for array containment operators:</p>

      <pre><code>CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    metadata JSONB,
    tags TEXT[] NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a GIN index on the tags array for fast containment checks
CREATE INDEX idx_projects_tags ON projects USING GIN (tags);

-- Create a B-Tree index on the created_at column for fast sorting
CREATE INDEX idx_projects_created_at ON projects (created_at DESC);

-- Fast lookup query utilizing the GIN index
SELECT * FROM projects WHERE tags @> ARRAY['FastAPI'];</code></pre>

      <h2>3. Connection Pooling with PgBouncer</h2>
      <p>Each connection to a PostgreSQL database consumes roughly 10MB of RAM. If your API spins up hundreds of backend processes, your database server will quickly run out of memory. 
      Using connection poolers like PgBouncer allows you to reuse active connections across thousands of concurrent API requests, significantly saving RAM.</p>

      <h2>Conclusion</h2>
      <p>Scale-proof systems are built from the database up. By combining clean table structures, strategic index hierarchies, and connection pooling, you can ensure that your backend services remain fast and responsive even under intense user loads.</p>
    `
  }
];
