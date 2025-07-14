# 💬 AI Email Reply Generator

A web-based application that generates professional email replies using AI.  
Built with **Spring Boot**, **Axios**, and **TypeScript**.

## 🚀 Features

- Paste an email, choose a tone, and get a smart AI-generated reply.
- Clean UI with React + Tailwind CSS.
- Backend powered by Java Spring Boot (Java 21).
- Fast and efficient integration via Axios and Google's Gemini API.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Axios  
- **Backend**: Spring Boot (Java 21), Maven  
- **AI Integration**: Gemini API  
- **Other**: RESTful API, JSON communication

## 📦 Prerequisites

Make sure the following are installed on your system:

- [Node.js](https://nodejs.org/) (use [NVM](https://github.com/nvm-sh/nvm) for managing versions)
- [Java 21](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
- [Maven](https://maven.apache.org/)
- A valid **Gemini API Key** and **Gemini API Endpoint URL** from [Google AI Studio](https://makersuite.google.com/app)

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sk-jiyad/AI_Email_Reply_Generator.git
cd AI_Email_Reply_Generator
```

### 2. Configure Gemini API

You must create a `.env` file or use application properties (depending on your setup) to store the following two values:

- `GEMINI_API_KEY` → Your secret Gemini API Key
- `GEMINI_API_URL` → The endpoint URL for the Gemini model (e.g., `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_KEY`)

> 🧠 You can get these by creating an account at [https://makersuite.google.com](https://makersuite.google.com)

**For example**, in your Spring Boot `application.properties` or `.env`:

```
gemini.api.key=YOUR_GEMINI_API_KEY
gemini.api.url=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_GEMINI_API_KEY
```

Make sure your backend is reading these values properly using `@Value` or a config class.

### 3. Start the Backend (Spring Boot)

```bash
cd email-writer-sb        # Navigate to the backend directory
mvn spring-boot:run
```

> 🔥 The backend server will start at `http://localhost:8080`

### 4. Start the Frontend (React)

```bash
cd email-writer-front   # Navigate to the frontend directory
npm install
npm run dev
```

> ⚡ The frontend will typically run on `http://localhost:3000`

## 📂 Folder Structure

```
AI_Email_Reply_Generator/
├── email-writer-sb/         # Spring Boot backend
└── email-writer-front/      # React + TypeScript frontend
```

## 📸 Preview


# 💬 AI Email Reply Generator

A web-based application that generates professional email replies using AI.  
Built with **Spring Boot**, **Axios**, and **TypeScript**.

## 🚀 Features

- Paste an email, choose a tone, and get a smart AI-generated reply.
- Clean UI with React + Tailwind CSS.
- Backend powered by Java Spring Boot (Java 21).
- Fast and efficient integration via Axios and Google's Gemini API.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Axios  
- **Backend**: Spring Boot (Java 21), Maven  
- **AI Integration**: Gemini API  
- **Other**: RESTful API, JSON communication

## 📦 Prerequisites

Make sure the following are installed on your system:

- [Node.js](https://nodejs.org/) (use [NVM](https://github.com/nvm-sh/nvm) for managing versions)
- [Java 21](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
- [Maven](https://maven.apache.org/)
- A valid **Gemini API Key** and **Gemini API Endpoint URL** from [Google AI Studio](https://makersuite.google.com/app)

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sk-jiyad/AI_Email_Reply_Generator.git
cd AI_Email_Reply_Generator
```

### 2. Configure Gemini API

You must create a `.env` file or use application properties (depending on your setup) to store the following two values:

- `GEMINI_API_KEY` → Your secret Gemini API Key
- `GEMINI_API_URL` → The endpoint URL for the Gemini model (e.g., `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_KEY`)

> 🧠 You can get these by creating an account at [https://makersuite.google.com](https://makersuite.google.com)

**For example**, in your Spring Boot `application.properties` or `.env`:

```
gemini.api.key=YOUR_GEMINI_API_KEY
gemini.api.url=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_GEMINI_API_KEY
```

Make sure your backend is reading these values properly using `@Value` or a config class.

### 3. Start the Backend (Spring Boot)

```bash
cd email-writer-sb        # Navigate to the backend directory
mvn spring-boot:run
```

> 🔥 The backend server will start at `http://localhost:8080`

### 4. Start the Frontend (React)

```bash
cd email-writer-front   # Navigate to the frontend directory
npm install
npm run dev
```

> ⚡ The frontend will typically run on `http://localhost:3000`

## 📂 Folder Structure

```
AI_Email_Reply_Generator/
├── email-writer-sb/         # Spring Boot backend
└── email-writer-front/      # React + TypeScript frontend
```

## 📸 Preview

[preview] (https://github.com/sk-jiyad/AI_Email_Reply_Generator/blob/main/Preview/Screenshot%202025-07-14%20114305.png)



## 🙌 Author

Made with ❤️ by [**sk-jiyad**](https://github.com/sk-jiyad)

## 📄 License

This project is open-source and available under the [MIT License](LICENSE)

## 🙌 Author

Made with ❤️ by [**sk-jiyad**](https://github.com/sk-jiyad)

## 📄 License

This project is open-source and available under the [MIT License](LICENSE)
