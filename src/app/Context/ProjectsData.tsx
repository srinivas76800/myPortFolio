'use client'
import React, { Children, createContext, useState } from 'react'

export const ProjectsData = createContext(null);

export default function ProjectComponent({ children }) {

  const html = 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png';
  const css = 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png';
  const javaScript = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
  const TypeScript = "https://www.svgrepo.com/show/354478/typescript-icon.svg"
  const Reactjs = "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25085005/reactjs-inner.svg"
  const nextjs = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s"
  const nestjs = "https://ih1.redbubble.net/image.1084299841.8155/tst,small,507x507-pad,600x600,f8f8f8.jpg"
  const reactNative = "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25082439/reactnative-inner.svg"
  const framerMotion = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwrNikmpK8Ebm4saB_9ajuoH-UUY_JXK1RWg&s"
  
  const projectsItem = [
    {
      id: 0,
      title: 'Dashboads',
      // link:'',
      rating: 4,
      images: [
        "/dashboad.png",
        "/TrainingDashboard2.png",
        "/TrainingDashboard3.png",
        "/dashboad.png"
      ],
      role: 'Front end devloper',
      tools: 'Next.js React.js, trailwindCSS, TypeScript',
      description: `Training Dashboard – Full Stack Web Application

        A scalable and performance-driven Training Dashboard built using Next.js, designed to manage training programs, users, and progress tracking efficiently. The application follows modern UI/UX standards with server-side rendering and optimized routing for fast load times. It supports role-based access, dynamic dashboards, and real-time data handling to simulate an industry-level training management system.

        Key Features:

        Role-based dashboards (Admin / Trainer / Trainee)
        Authentication & protected routes
        Training program creation and management
        User enrollment and progress tracking
        Interactive dashboards with analytics
        Responsive and mobile-friendly UI
        Modular and reusable component architecture
        API integration for dynamic data handling
        Optimized performance using Next.js features (SSR / routing)

        Tech Stack:
        Next.js, React.js, JavaScript/TypeScript, Tailwind CSS / Bootstrap, REST APIs`
    },
    {
      id: 1,
      title: 'Tracking system',
      // link:'',
      rating: 4,
      images: [
        "/bustrackingsystem.png",
        "/TrainingDashboard2.png",
        "/TrainingDashboard3.png",
        "/dashboad.png"
      ],
      role: 'Front end devloper',
      tools: 'Next.js React.js, trailwindCSS, TypeScript',
      description: `Bus Tracking System – Web Application

        A real-time Bus Tracking System web application designed to monitor and manage live bus locations with high accuracy and low latency. Built using a modern full-stack architecture, the platform delivers instant location updates through WebSockets, ensuring smooth, real-time tracking on the web. The system focuses on reliability, scalability, and user experience, making it suitable for smart transport and logistics use cases.

        Key Features

        Live bus location tracking in real time
        WebSocket-based updates for low-latency communication
        Interactive map view with route visualization
        Role-based access (Admin / Driver / Conductor / Passenger)
        Secure authentication & protected routes
        Bus, route, and schedule management
        Real-time alerts & notifications
        Emergency SOS and status indicators
        Responsive UI optimized for all screen sizes
        Modular and scalable backend architecture

        Tech Stack

        Frontend: HTML, CSS, JavaScript / React / Next.js
        Backend: NestJS, Node.js, REST APIs, WebSockets
        Database: PostgreSQL
        Auth & Messaging: JWT, OTP, NodeMailer`
    },
    {
      id: 2,
      title: 'News application',
      link:'https://news-box-eight.vercel.app',
      rating: 4,
      images: [
        "/news.jpg",
        "/news2.jpg",
        "/news3.jpg",
        "/news4.jpg"
      ],
      role: 'Front end devloper',
      tools: 'React.js, Bootstrap, JavaScript, APIs',
      description: `News Application – Web Platform (Next.js)

        A fast and responsive News Application built using Next.js, designed to deliver real-time and category-based news with a smooth user experience. The application leverages modern Next.js features for optimized performance, SEO-friendly pages, and efficient data fetching. Users can explore trending headlines, filter news by categories, and search for specific topics through an intuitive interface.

        Key Features

        Latest and trending news updates
        Category-wise news filtering
        Search functionality for news articles
        SEO-optimized pages using Next.js
        Server-side / API-based data fetching
        Clean and responsive UI for all devices
        Dark mode support
        Error handling and loading states
        Modular and reusable component structure

        Tech Stack

        Frontend: Next.js, React.js, JavaScript / TypeScript
        Styling: Tailwind CSS / CSS Modules
        APIs: News APIs for dynamic content`
    },
    {
      id: 3,
      title: 'E-commerce',
      // link:'https://gooogle.com',
      rating: 4,
      images: [
        "/groceri1.jpg",
        "/groceri2.jpg",
        "/groceri3.jpg",
        "/groceri4.jpg",
      ],
      role: 'Front end devloper',
      tools: 'HTML5, css3, javaScript (ES6+)',
      description: `Grocery Website – Frontend Project

        A responsive and user-friendly grocery website built using HTML, CSS, Bootstrap, and JavaScript. The platform allows users to browse grocery products with a clean UI, smooth navigation, and mobile-first design. Bootstrap is used for responsive layouts, while JavaScript handles dynamic interactions such as product display and basic user actions. The project focuses on performance, accessibility, and real-world e-commerce UI patterns.

        Tech Stack: HTML, CSS, Bootstrap, JavaScript
        Key Features: Responsive design, clean UI, product listing, interactive elements`
    },
    {
      id: 4,
      title: 'E-commerce',
      // link:'https://gooogle.com',
      rating: 4,
      images: [
        "/ecommerce1.jpg",
        "/ecommerce2.jpg",
        "/ecommerce3.jpg",
        "/ecommerce4.jpg",
      ],
      role: 'Front end devloper',
      tools: 'HTML5, css3, javaScript (ES6+), reactDOM, reactjs, Nextjs trailwindcss',
      description: `E-Commerce Website – Product & Category Based Platform A modern e-commerce web application designed to showcase and manage products across multiple categories with a smooth and intuitive shopping experience. The platform allows users to browse products by category, view detailed product information, and interact with a clean, responsive interface optimized for all devices. The system follows real-world e-commerce patterns with scalable structure and user-friendly navigation.

        Key Features

        Category-based product browsing
        Dynamic product listings with details pages
        Clean and intuitive UI for easy navigation
        Responsive design for mobile, tablet, and desktop
        Search and filter products by category
        Reusable and modular component architecture
        Optimized performance and fast page loads
        Scalable structure for adding new products and categories
        Tech Stack (example – adjust if needed)
        Frontend: HTML, CSS, JavaScript / React / Next.js
        Styling: Bootstrap / Tailwind CSS`
    },
    {
      id: 5,
      title: 'Tracking system (Mobile application)',
      // link:'https://gooogle.com',
      rating: 4,
      images: [
        "/trackingapp.jpg",
        "/TrainingDashboard2.png",
        "/TrainingDashboard3.png",
        "/dashboad.png"
      ],
      role: 'Full stack developer',
      tools: 'React Native, Express.js, Nest.js, NodeMailer, Expo go, trailwindCSS, TypeScript',
      description: `Bus Tracking System – Full Stack Mobile Application

        A real-time Bus Tracking System mobile application built using React Native for cross-platform support and a robust NestJS + Node.js backend. The application enables users to track live bus locations with low latency using WebSockets, ensuring instant location updates and smooth user experience. Designed with scalability, security, and performance in mind, the system reflects real-world transport and logistics use cases.

        Key Features

        Real-time bus location tracking using WebSockets
        Cross-platform mobile app (Android & iOS) with React Native
        Secure authentication with OTP / JWT-based flow
        Role-based access (Admin / Driver / Conductor / Passenger)
        Live dashboard for bus status and route visibility
        Fallback tracking via conductor device for reliability
        Push/email notifications using NodeMailer
        SOS & alert system for emergency situations
        Optimized API architecture with NestJS
        Scalable backend with modular services and controllers
        PostgreSQL integration with structured data models
        Environment-based config & secure secrets handling

        Tech Stack

        Frontend: React Native, Expo, Tailwind / Native UI
        Backend: NestJS, Node.js, REST APIs, WebSockets
        Database: PostgreSQL
        Auth & Messaging: JWT, OTP, NodeMailer
        Tools & Concepts: Real-time systems, event-driven architecture, scalable APIs`
    },
    {
      id: 6,
      title: 'Ai Notes App (Mobile application)',
      // link:'https://gooogle.com',
      rating: 4,
      images: [
        "/notes.ai.jpeg",
        "/TrainingDashboard2.png",
        "/TrainingDashboard3.png",
        "/dashboad.png"
      ],
      role: 'Full stack developer',
      tools: 'React Native, Express.js, Node.js, Expo go, trailwindCSS, TypeScript',
      description: `Notes AI – Smart Note-Taking Mobile Application

        A next-gen AI-powered note-taking mobile application that blends traditional note capture with intelligent conversational insights. Built with a modern full-stack architecture, the app enables users to create, organize, and interact with notes using natural language and AI-driven responses. The system leverages advanced AI integration to summarize content, answer queries, and elevate note interactivity beyond static text.

        Key Features

        Create, edit, and organize rich multimedia notes (text, images, audio)
        AI-powered summarization and contextual insights
        Conversational interaction with notes via chat-style AI responses
        Intelligent search across notes with natural language queries
        Personal AI assistant for brainstorming and idea expansion
        User authentication and secure data handling
        Clean, responsive mobile UI optimized for usability

        Tech Stack

        Frontend: React Native (cross-platform mobile)
        Backend: NestJS, Node.js, REST APIs / GraphQL
        AI Integration: OpenAI / AI model services
        Database: PostgreSQL / NoSQL (choice depends on your implementation)
        Notifications & Sync: Real-time updates and device sync`
    },
    {
      id: 7,
      title: 'Company websites',
      // link:'https://gooogle.com',
      rating: 4,
      images: [
        "/companysite.jpg",
        "/TrainingDashboard2.png",
        "/TrainingDashboard3.png",
        "/dashboad.png"
      ],
      role: 'Front end devloper',
      tools: 'Next.js React.js, trailwindCSS, TypeScript',
      description: "Grocery Website – Frontend Project A responsive and user-friendly grocery website built using HTML, CSS, Bootstrap, and JavaScript. The platform allows users to browse grocery products with a clean UI, smooth navigation, and mobile-first design. Bootstrap is used for responsive layouts, while JavaScript handles dynamic interactions such as product display and basic user actions. The project focuses on performance, accessibility, and real-world e-commerce UI patterns. Tech Stack: HTML, CSS, Bootstrap, JavaScript Key Features: Responsive design, clean UI, product listing, interactive elements"

    },
    {
      id: 8,
      title: 'Static landing pages',
      // link:'https://gooogle.com',
      rating: 4,
      images: [
        "/Staticlandingpages1.jpg",
        "/TrainingDashboard2.png",
        "/TrainingDashboard3.png",
        "/dashboad.png"
      ],
      role: 'Front end devloper',
      tools: 'Next.js React.js, trailwindCSS, TypeScript',
      description: "Grocery Website – Frontend Project A responsive and user-friendly grocery website built using HTML, CSS, Bootstrap, and JavaScript. The platform allows users to browse grocery products with a clean UI, smooth navigation, and mobile-first design. Bootstrap is used for responsive layouts, while JavaScript handles dynamic interactions such as product display and basic user actions. The project focuses on performance, accessibility, and real-world e-commerce UI patterns. Tech Stack: HTML, CSS, Bootstrap, JavaScript Key Features: Responsive design, clean UI, product listing, interactive elements"

    },
  ]

  return (
    <ProjectsData.Provider value={{ projectsItem }}>
      {children}
    </ProjectsData.Provider>
  )
}
