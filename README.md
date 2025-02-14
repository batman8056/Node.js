# 🚀 Backend Learning Journey

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>  <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> </p>

## Here's a structured learning path for mastering backend development in order of chapters, covering the core topics and gradually advancing to more complex concepts



## **📌 Chapter 1: The Backend**

### **Servers, Applications, and Databases**
- **Server**: A computer running 24/7 to handle requests.
- **Application**: Contains logic to process requests and responses.
- **Database**: Stores and manages user data.

### **Backend Tools and Technologies**
- **Languages**: JavaScript (Node.js), Java (Spring Boot), Ruby (Rails), PHP, C# (ASP.NET), Python (Django)
- **Frameworks**: Provide reusable functionality (File handling, Data Streams, Debugging, Error Codes, etc.)

### **Node.js Overview**
✅ Free, open-source JavaScript runtime for web applications, servers, and scripts.  
✅ **Cross-platform**: Runs on Windows, Linux, macOS, and more.  
✅ **Event-driven & asynchronous**: Optimized for scalability and performance.  
✅ **Lightweight & non-blocking architecture**.

### **Using Node.js**
- **REPL (Read-Eval-Print Loop)**: Interactive execution of JavaScript.
- **Core Modules**: Built-in modules like `fs`, `path`, `http`, `url`, etc.
- **Node Package Manager (NPM)**: Installs third-party libraries.

---

## **📌 Chapter 2: Command Line Arguments & File System**

### **Command Line Arguments in Node.js**
- Used to receive user input via CLI.

Example Files:
- `arg.js`, `calc.js`, `calcyargs.js`

### **File System Operations**
✅ **Organizing and retrieving files**  
✅ Includes operations like reading, writing, renaming, and deleting files.

Example Files:
- `open.js`, `get.js`, `write.js`, `read.js`, `rename.js`, `append.js`, `delete.js`

### **Working with JSON in Node.js**
- **JSON (JavaScript Object Notation)** is used for storing and exchanging data.
- Example Files: `jsondata.js`, `json1.json`, `modjson.js`

---

## **📌 Chapter 3: Express.js & HTTP Requests**

### **Express.js in Node.js**
✅ **Minimal & flexible framework** for web and mobile applications.  
✅ **Improves readability** with less code.  
✅ **Middleware support** for handling requests efficiently.

### **HTTP Request Methods**
- **GET**: Retrieve resources.
- **POST**: Send data.
- **PUT/PATCH**: Update resources.
- **DELETE**: Remove resources.

### **HTTP Response Status Codes**
1. **Informational (100-199)**
2. **Success (200-299)**
3. **Redirection (300-399)**
4. **Client Errors (400-499)**
5. **Server Errors (500-599)**

Example Files:
- `index.js`

---

## **📌 Chapter 3.1: Asynchronous JavaScript & Event Loop**

### **Synchronous vs Asynchronous Programming**
✅ **Synchronous**: Code execution is blocking and sequential.
✅ **Asynchronous**: Code execution happens simultaneously using event loops.

### **Key Concepts**
- **Callback Functions**: Functions passed as arguments to execute later.
- **Call Stack & Callback Queue**: Manages function execution order.
- **Promises**: Handle asynchronous operations using `then()`, `catch()`, and `finally()`.
- **Async/Await**: Syntactic sugar for handling promises in a cleaner way.

Example Files:
- `callStack.js`, `promise.js`

---

## **📌 Chapter 4: Authentication & Building APIs**

### **Building APIs**
✅ **Data Gathering → Preprocessing → Services → Algorithms → Product**  
✅ **RESTful APIs** follow standard HTTP methods and JSON response formats.

### **Private/Internal APIs**
✅ Used within an organization for secure data sharing.  
✅ Example: User authentication APIs.

### **Testing APIs with Postman**
✅ **API Endpoints for CRUD Operations**:
- **GET**: Retrieve jokes.
- **POST, PUT, PATCH**: Create & update jokes.
- **DELETE**: Remove jokes.

Example Files:
- `DIY API Folder`, `Blog API Project`

---

## **📌 Chapter 4.1: Building Your Own API**

### **API Development Process**
✅ **Data Gathering → Data Preprocessing → Services → Algorithm → API Product**
✅ **Understanding Monetized APIs**
✅ **RESTful API Design Best Practices**

Example Files:
- `API Folder`, `Blog API Project`

---

## **📌 Chapter 5: Databases & SQL Queries**

### **Types of Databases**
1. **SQL Databases**: Structured data in tables (MySQL, PostgreSQL, MS SQL Server).
2. **NoSQL Databases**: Flexible data storage (MongoDB, Firebase, Redis).

### **CRUD Operations in SQL**
✅ **Create**: `CREATE TABLE` and `INSERT INTO`  
✅ **Read**: `SELECT * FROM table_name`  
✅ **Update**: `UPDATE table_name SET column=value WHERE condition`  
✅ **Delete**: `DELETE FROM table_name WHERE condition`

Example Files:
- `world_food.sql`, `product.sql`, `employees.sql`

### **Relationships & Joins in SQL**
✅ **One-to-One Relationship**
✅ **One-to-Many Relationship**
✅ **Many-to-Many Relationship**

Example:
```sql
SELECT orders.order_number, customer.FirstName
FROM orders
INNER JOIN customer ON orders.customer_id = customer.customer_id;
```

## **📌 Chapter 7: Building Real-World Applications**

### **Projects Covered**
✅ **DIY API Project** (Creating APIs with Express.js)  
✅ **Blog API Project** (Handling CRUD operations)  
✅ **Family Travel Tracker** (SQL joins & data relations)  
✅ **Permalist Project** (User authentication & API security)

---
## **📌 Chapter 8: Authentication and Security Handling Credentials**

### **Web Authentication**
✅ A process to verify user identity to access a website.  
✅ **Authentication Flow:**
```
HOME -> REGISTER -> SECRETS -> LOGIN -> SECRETS
```

### **Types of Web Authentication**
1. **Basic Authentication** - Email and password.
2. **Token-Based Authentication**.
3. **OAuth** - Third-party authentication.
4. **WebAuthn**.

### **Basic Authentication (Email & Password)**
✅ **Encryption and Hashing** using bcrypt.
✅ **Encryption**: Converts data into a secure code to prevent unauthorized access.

📌 **Refer the Authentication Folder**

---

## **📌 Managing Cookies and Sessions**
✅ Users stay logged in without re-entering credentials.  
✅ **Environment Variables**: Secure way to store credentials without exposing them.

📌 **Refer the Sessions and Cookies Folder**

---

## **📌 OAuth Implementation - Sign in with Google**
✅ OAuth allows authentication via third-party services (e.g., Google, Facebook).

### **OAuth Steps:**
1. **Set up App in Developer Console** - Obtain Client ID.
2. **Redirect to Authentication Page**.
3. **User logs in via third-party provider (Google, Facebook, etc.)**.
4. **User grants permissions**.
5. **Authorization Code is generated**.
6. **Exchange Auth Code for Access Token**.

📌 **Refer the Secrets Project Folder**

---

## **🚀 Next Steps**
- Learn **GraphQL, WebSockets, and Microservices**.  
- Explore **Advanced Authentication & Security Best Practices**.  
- Build **Scalable Backend Architectures**.

---

### **🌟 Connect with Me**
If you found this repository useful, **give it a ⭐!** 😊

