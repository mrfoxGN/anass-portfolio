export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "task-management",

    title: "Distributed Task Management API",

    type: "Backend REST API",

    description:
      "Spring Boot REST API for managing teams, projects and tasks with JWT authentication and role-based access.",

    longDescription:
      "A backend task management platform built with Spring Boot and PostgreSQL. The application follows a layered architecture and provides authentication, authorization, team management, project management, task tracking and collaboration features.",

    image: "/images/projects/task.png",

    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "REST API",
      "JWT",
    ],

    features: [
      "JWT authentication",
      "Role-based authorization",
      "User and team management",
      "Project management",
      "Task creation and assignment",
      "Task priorities and statuses",
      "Comments and collaboration",
      "PostgreSQL persistence",
      "Dockerized development environment",
    ],

    github: "https://github.com/mrfoxGN",

    featured: true,
  },

  {
    slug: "cloud-storage",

    title: "Mini Cloud File Storage",

    type: "File Storage Backend",

    description:
      "Secure backend for uploading, organizing and sharing files using Spring Boot, PostgreSQL and Docker.",

    longDescription:
      "A cloud-style file storage backend that allows authenticated users to upload, download, organize and manage files and folders. The system includes file ownership, sharing permissions, metadata persistence, validation and secure REST endpoints.",

    image: "/images/projects/cloud.png",

    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "REST API",
    ],

    features: [
      "File upload",
      "File download",
      "File deletion",
      "Folder organization",
      "File ownership",
      "Sharing permissions",
      "Metadata management",
      "Validation and error handling",
      "PostgreSQL persistence",
    ],

    github: "https://github.com/mrfoxGN",

    featured: true,
  },

  {
    slug: "ft-irc",

    title: "ft_irc",

    type: "IRC Chat Server",

    description:
      "Multi-client IRC server built in C++ using TCP/IP sockets, non-blocking I/O and IRC protocol commands.",

    longDescription:
      "A real-time IRC server written in C++ that supports multiple simultaneous clients using non-blocking sockets and event-based I/O. The server handles user registration, channels, private messages, channel operators, modes and IRC commands.",

    image: "/images/projects/irc.png",

    technologies: [
      "C++",
      "Sockets",
      "TCP/IP",
      "epoll",
      "IRC Protocol",
      "Linux",
    ],

    features: [
      "Multiple simultaneous clients",
      "TCP socket communication",
      "Non-blocking I/O",
      "epoll event management",
      "PASS / NICK / USER registration",
      "Channel creation and management",
      "Private messages",
      "TOPIC / INVITE / KICK / MODE commands",
      "Channel operators",
      "Client connection management",
    ],

    github: "https://github.com/mrfoxGN",

    featured: true,
  },

  {
    slug: "inception",

    title: "Inception",

    type: "Docker Infrastructure",

    description:
      "Containerized infrastructure using NGINX, WordPress and MariaDB with Docker Compose, networking, volumes and TLS.",

    longDescription:
      "A Docker infrastructure project where NGINX, WordPress and MariaDB run as isolated services. The infrastructure uses custom Dockerfiles, Docker Compose, persistent volumes, private networking, environment configuration and TLS.",

    image: "/images/projects/inception.png",

    technologies: [
      "Docker",
      "Docker Compose",
      "NGINX",
      "WordPress",
      "MariaDB",
      "Linux",
      "TLS",
    ],

    features: [
      "Custom Dockerfiles",
      "Docker Compose orchestration",
      "NGINX reverse proxy",
      "TLS / HTTPS configuration",
      "WordPress with PHP-FPM",
      "MariaDB database",
      "Persistent volumes",
      "Private Docker network",
      "Environment variable configuration",
      "Service dependencies",
    ],

    github: "https://github.com/mrfoxGN",

    featured: false,
  },
];