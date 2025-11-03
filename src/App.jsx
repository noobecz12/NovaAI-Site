import React from "react";
import Plasma from "./Plasma";
import "./styles.css";

export default function App() {
  return (
    <div className="app-container">
      <Plasma
        color="#8b5cf6"
        speed={0.6}
        direction="forward"
        scale={1.3}
        opacity={0.9}
        mouseInteractive={true}
      />

      <header className="navbar">
        <div className="logo">
          <svg
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8v4l3 3"></path>
          </svg>
          <span>NovaBot</span>
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Docs</a>
        </nav>
      </header>

      <main className="hero">
        <button className="badge">✨ Smart Discord Assistant</button>
        <h1>Empower your server with NovaBot</h1>
        <p>
          Manage roles, automate tasks, and make your community more engaging
          — all in one bot.
        </p>
        <div className="buttons">
          <a
            href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&scope=bot"
            className="add-bot"
          >
            Add Bot
          </a>
          <a href="#" className="docs">
            Docs
          </a>
        </div>
      </main>
    </div>
  );
}
