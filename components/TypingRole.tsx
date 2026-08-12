"use client";

import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Backend Developer",
  "Systems Programmer",
];

export default function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout: NodeJS.Timeout;

    if (!deleting && text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, 75);
    } else if (!deleting && text.length === currentRole.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1500);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length - 1));
      }, 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <div className="typing-role">
      <span>A {text}</span>
      <span className="typing-cursor">|</span>
    </div>
  );
}