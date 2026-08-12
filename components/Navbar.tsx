"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Section = "home" | "about" | "projects" | "contact";

type NavItem = {
  id: Section;
  label: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V21h13V9.5" />
        <path d="M9.5 21v-6h5v6" />
      </svg>
    ),
  },

  {
    id: "about",
    label: "About",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21c.8-4.2 3-6.5 7-6.5s6.2 2.3 7 6.5" />
      </svg>
    ),
  },

  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 6.5h6l2 2h9v10h-17z" />
        <path d="M3.5 6.5V5h6l2 2h9v1.5" />
      </svg>
    ),
  },

  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="1.5"
        />

        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [activeSection, setActiveSection] =
    useState<Section>("home");

  /*
    When the user clicks a navigation item,
    we temporarily stop the scroll detector.

    Otherwise smooth scrolling through other
    sections makes the active item jump around.
  */
  const scrollingToSection = useRef<Section | null>(null);

  const unlockTimer = useRef<
    ReturnType<typeof setTimeout> | undefined
  >(undefined);

  useEffect(() => {
    /*
      Any projects page always highlights Projects.
    */

    if (pathname.startsWith("/projects")) {
      setActiveSection("projects");
      return;
    }

    if (pathname !== "/") {
      return;
    }

    const sections: Section[] = [
      "home",
      "about",
      "projects",
      "contact",
    ];

    const detectSection = () => {
      /*
        Do NOT update the active section
        while an automatic smooth scroll
        is happening.
      */

      if (scrollingToSection.current) {
        return;
      }

      const position =
        window.scrollY +
        window.innerHeight * 0.4;

      const pageBottom =
        window.innerHeight +
          window.scrollY >=
        document.documentElement.scrollHeight - 40;

      if (pageBottom) {
        setActiveSection("contact");
        return;
      }

      let current: Section = "home";

      for (const id of sections) {
        const element =
          document.getElementById(id);

        if (!element) {
          continue;
        }

        if (element.offsetTop <= position) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    detectSection();

    window.addEventListener(
      "scroll",
      detectSection,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      detectSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        detectSection
      );

      window.removeEventListener(
        "resize",
        detectSection
      );
    };
  }, [pathname]);

  const goToSection = (section: Section) => {
    /*
      If we're on /projects or /projects/[slug],
      go back to the homepage first.
    */

    if (pathname !== "/") {
      window.location.href = `/#${section}`;
      return;
    }

    const element =
      document.getElementById(section);

    if (!element) {
      return;
    }

    /*
      Lock active navigation.
    */

    scrollingToSection.current = section;

    setActiveSection(section);

    /*
      Smooth-scroll manually.
    */

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /*
      Remove an older timer if the user
      clicks another section quickly.
    */

    if (unlockTimer.current) {
      clearTimeout(unlockTimer.current);
    }

    /*
      Give the scroll detector control
      again after the animation finishes.
    */

    unlockTimer.current = setTimeout(() => {
      scrollingToSection.current = null;
    }, 750);
  };

  return (
    <aside className="sidebar">
      <nav
        className="sidebar-nav"
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const isActive =
            activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              className={
                isActive
                  ? "sidebar-link sidebar-link-active"
                  : "sidebar-link"
              }
              onClick={() =>
                goToSection(item.id)
              }
              aria-current={
                isActive ? "page" : undefined
              }
            >
              <span className="sidebar-icon">
                {item.icon}
              </span>

              <span className="sidebar-label">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}