"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Stage =
  | "hidden"
  | "enter"
  | "look"
  | "inspect"
  | "wait"
  | "wow"
  | "impressed"
  | "bluff"
  | "leave";

/* =========================================================
   SPEECH BUBBLE
========================================================= */

type BubbleProps = {
  children: ReactNode;
  width?: number;
  height?: number;
};

function Bubble({
  children,
  width = 300,
  height = 86,
}: BubbleProps) {
  const x = 18;
  const y = 38;

  return (
    <motion.g
      initial={{
        opacity: 0,
        scale: 0.92,
        y: 8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.96,
        y: -4,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="18"
        fill="rgba(250,249,245,0.98)"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d={`
          M ${x + width - 68} ${y + height - 3}
          L ${x + width - 45} ${y + height + 22}
          L ${x + width - 34} ${y + height - 3}
        `}
        fill="rgba(250,249,245,0.98)"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {children}
    </motion.g>
  );
}

/* =========================================================
   FUNNY RUN — POSE A

   Same exaggerated running style as Hero.
========================================================= */

function RunPoseA() {
  return (
    <g>
      <circle
        cx="2"
        cy="-50"
        r="18"
        fill="rgba(250,249,245,0.97)"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <circle
        cx="-3"
        cy="-53"
        r="2"
        fill="currentColor"
      />

      <circle
        cx="8"
        cy="-53"
        r="2"
        fill="currentColor"
      />

      <path
        d="M-4 -41 Q3 -37 9 -42"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* leaning body */}

      <path
        d="
          M1 -32
          L-4 27
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* arm behind */}

      <path
        d="
          M0 -16
          L-26 -1
          L-38 19
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* arm forward */}

      <path
        d="
          M0 -16
          L27 -29
          L42 -13
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* leg back */}

      <path
        d="
          M-4 27
          L-31 39
          L-49 57
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* leg forward */}

      <path
        d="
          M-4 27
          L20 48
          L43 48
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

/* =========================================================
   FUNNY RUN — POSE B
========================================================= */

function RunPoseB() {
  return (
    <g>
      <circle
        cx="1"
        cy="-51"
        r="18"
        fill="rgba(250,249,245,0.97)"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <circle
        cx="-4"
        cy="-54"
        r="2"
        fill="currentColor"
      />

      <circle
        cx="7"
        cy="-54"
        r="2"
        fill="currentColor"
      />

      <path
        d="M-5 -42 Q2 -38 8 -42"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="
          M0 -33
          L-3 27
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* opposite arms */}

      <path
        d="
          M0 -16
          L-27 -28
          L-42 -11
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="
          M0 -16
          L27 0
          L39 20
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* opposite legs */}

      <path
        d="
          M-3 27
          L20 48
          L45 57
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="
          M-3 27
          L-29 43
          L-48 43
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

/* =========================================================
   NORMAL STANDING
========================================================= */

function StandingPose() {
  return (
    <g>
      <circle
        cx="0"
        cy="-53"
        r="19"
        fill="rgba(250,249,245,0.98)"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <circle
        cx="-6"
        cy="-56"
        r="2"
        fill="currentColor"
      />

      <circle
        cx="6"
        cy="-56"
        r="2"
        fill="currentColor"
      />

      <path
        d="M-6 -44 L6 -44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M0 -34 L0 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="
          M0 -16
          L-23 7
          L-29 22
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="
          M0 -16
          L23 7
          L29 22
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="
          M0 30
          L-18 52
          L-27 70
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="
          M0 30
          L18 52
          L27 70
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  );
}

/* =========================================================
   LOOKING AT ABOUT
========================================================= */

function LookingPose() {
  return (
    <g>
      <circle
        cx="0"
        cy="-53"
        r="19"
        fill="rgba(250,249,245,0.98)"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      {/* eyes looking left */}

      <circle
        cx="-9"
        cy="-56"
        r="2.2"
        fill="currentColor"
      />

      <circle
        cx="2"
        cy="-56"
        r="2.2"
        fill="currentColor"
      />

      <ellipse
        cx="-4"
        cy="-44"
        rx="3"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M0 -34 L0 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* points toward About */}

      <path
        d="
          M0 -15
          L-29 -24
          L-51 -25
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="
          M0 -15
          L22 7
          L29 21
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M0 30 L-18 52 L-27 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M0 30 L18 52 L27 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    </g>
  );
}

/* =========================================================
   INSPECT
========================================================= */

function InspectPose() {
  return (
    <g>
      <circle
        cx="0"
        cy="-53"
        r="19"
        fill="rgba(250,249,245,0.98)"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <circle
        cx="-9"
        cy="-56"
        r="2"
        fill="currentColor"
      />

      <circle
        cx="2"
        cy="-56"
        r="2"
        fill="currentColor"
      />

      <path
        d="
          M-9 -44
          Q-2 -47
           5 -43
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M0 -34 L3 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="
          M1 -15
          L22 8
          L29 20
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* arm holding magnifying glass */}

      <path
        d="
          M1 -15
          L-28 -24
          L-49 -37
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle
        cx="-65"
        cy="-48"
        r="17"
        fill="rgba(250,249,245,0.72)"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <path
        d="
          M-53 -36
          L-43 -26
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M3 30 L-14 52 L-23 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M3 30 L21 52 L30 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    </g>
  );
}

/* =========================================================
   WOW
========================================================= */

function WowPose() {
  return (
    <g>
      <circle
        cx="0"
        cy="-53"
        r="19"
        fill="rgba(250,249,245,0.98)"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <circle
        cx="-7"
        cy="-57"
        r="3"
        fill="currentColor"
      />

      <circle
        cx="7"
        cy="-57"
        r="3"
        fill="currentColor"
      />

      <ellipse
        cx="0"
        cy="-43"
        rx="5"
        ry="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M0 -34 L0 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* both hands up */}

      <path
        d="
          M0 -15
          L-28 -40
          L-39 -65
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="
          M0 -15
          L28 -40
          L39 -65
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M0 30 L-18 52 L-27 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M0 30 L18 52 L27 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    </g>
  );
}

/* =========================================================
   BLUFF
========================================================= */

function BluffPose() {
  return (
    <g>
      <circle
        cx="0"
        cy="-53"
        r="19"
        fill="rgba(250,249,245,0.98)"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <circle
        cx="-6"
        cy="-55"
        r="2.3"
        fill="currentColor"
      />

      <circle
        cx="6"
        cy="-55"
        r="2.3"
        fill="currentColor"
      />

      <path
        d="
          M-7 -44
          Q0 -39
           7 -44
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M0 -34 L0 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* crossed arms */}

      <path
        d="
          M0 -15
          L-25 3
          L22 12
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="
          M0 -15
          L25 3
          L-22 12
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M0 30 L-18 52 L-27 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M0 30 L18 52 L27 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    </g>
  );
}

/* =========================================================
   COMPONENT
========================================================= */

export default function AboutStickman() {
  const reduceMotion =
    !!useReducedMotion();

  const containerRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const played =
    useRef(false);

  const timers =
    useRef<
      ReturnType<typeof setTimeout>[]
    >([]);

  const [
    stage,
    setStage,
  ] = useState<Stage>(
    "hidden"
  );

  const [
    runFrame,
    setRunFrame,
  ] = useState(false);

  /* =======================================================
     START WHEN ABOUT ENTERS VIEW
  ======================================================= */

  useEffect(() => {
    if (
      reduceMotion ||
      !containerRef.current
    ) {
      return;
    }

    const element =
      containerRef.current;

    const observer =
      new IntersectionObserver(
        (entries) => {
          const entry =
            entries[0];

          if (
            !entry.isIntersecting ||
            entry.intersectionRatio <
              0.2 ||
            played.current
          ) {
            return;
          }

          played.current = true;

          const later = (
            callback: () => void,
            delay: number
          ) => {
            const timer =
              setTimeout(
                callback,
                delay
              );

            timers.current.push(
              timer
            );
          };

          /* ===============================================
             STORY
          ================================================ */

          setStage("enter");

          /*
           * Funny run entrance.
           */

          later(
            () =>
              setStage("look"),
            2100
          );

          /*
           * He notices the About section.
           */

          later(
            () =>
              setStage("inspect"),
            3700
          );

          /*
           * Inspects for a while.
           */

          later(
            () =>
              setStage("wait"),
            5500
          );

          /*
           * "wait..."
           */

          later(
            () =>
              setStage("wow"),
            7600
          );

          /*
           * "woooow..."
           */

          later(
            () =>
              setStage(
                "impressed"
              ),
            10000
          );

          /*
           * compliment
           */

          later(
            () =>
              setStage(
                "bluff"
              ),
            12800
          );

          /*
           * final punchline
           */

          later(
            () =>
              setStage("leave"),
            15700
          );

          /*
           * funny run out
           */

          later(
            () =>
              setStage("hidden"),
            18000
          );

          observer.disconnect();
        },
        {
          threshold: [
            0.2,
            0.35,
          ],
        }
      );

    observer.observe(
      element
    );

    return () => {
      observer.disconnect();

      timers.current.forEach(
        clearTimeout
      );
    };
  }, [reduceMotion]);

  /* =======================================================
     FUNNY TWO-FRAME RUN

     Same speed/style when entering AND leaving.
  ======================================================= */

  useEffect(() => {
    if (
      stage !== "enter" &&
      stage !== "leave"
    ) {
      setRunFrame(false);
      return;
    }

    const interval =
      setInterval(() => {
        setRunFrame(
          (previous) =>
            !previous
        );
      }, 185);

    return () =>
      clearInterval(
        interval
      );
  }, [stage]);

  /* =======================================================
     CHARACTER MOVEMENT
  ======================================================= */

  const characterPosition =
    (() => {
      switch (stage) {
        /*
         * He starts off-screen on the RIGHT
         * and RUNS toward his position.
         */

        case "enter":
          return {
            x: 205,
            y: 270,
            opacity: 1,
          };

        case "look":
          return {
            x: 205,
            y: 270,
            opacity: 1,
          };

        case "inspect":
        case "wait":
          return {
            x: 205,
            y: 270,
            opacity: 1,
          };

        case "wow":
        case "impressed":
          return {
            x: 205,
            y: 270,
            opacity: 1,
          };

        case "bluff":
          return {
            x: 205,
            y: 270,
            opacity: 1,
          };

        /*
         * Funny run back toward RIGHT.
         */

        case "leave":
          return {
            x: 430,
            y: 270,
            opacity: 0,
          };

        default:
          return {
            x: 430,
            y: 270,
            opacity: 0,
          };
      }
    })();

  return (
    <div
      ref={containerRef}
      className="about-stickman"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 360 430"
        role="presentation"
      >
        {/* =================================================
            CHARACTER
        ================================================= */}

        <motion.g
          initial={{
            x: 430,
            y: 270,
            opacity: 0,
          }}
          animate={
            characterPosition
          }
          transition={{
            duration:
              stage === "enter"
                ? 2
                : stage === "leave"
                  ? 2
                  : 0.55,

            ease:
              stage === "enter" ||
              stage === "leave"
                ? "linear"
                : [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
          }}
        >
          {/* ===============================================
              FUNNY RUN ENTRANCE
          ================================================ */}

          {stage === "enter" &&
            (runFrame ? (
              <RunPoseA />
            ) : (
              <RunPoseB />
            ))}

          {/* ===============================================
              STOP AND LOOK
          ================================================ */}

          {stage === "look" && (
            <LookingPose />
          )}

          {/* ===============================================
              INSPECT
          ================================================ */}

          {[
            "inspect",
            "wait",
          ].includes(stage) && (
            <InspectPose />
          )}

          {/* ===============================================
              WOW
          ================================================ */}

          {[
            "wow",
            "impressed",
          ].includes(stage) && (
            <WowPose />
          )}

          {/* ===============================================
              FINAL REACTION
          ================================================ */}

          {stage === "bluff" && (
            <BluffPose />
          )}

          {/* ===============================================
              FUNNY RUN EXIT
          ================================================ */}

          {stage === "leave" &&
            (runFrame ? (
              <RunPoseA />
            ) : (
              <RunPoseB />
            ))}
        </motion.g>

        {/* =================================================
            WAIT
        ================================================= */}

        <AnimatePresence>
          {stage === "wait" && (
            <Bubble
              key="wait"
              width={190}
            >
              <text
                x="72"
                y="91"
                fontFamily="monospace"
                fontSize="18"
                fontWeight="600"
                fill="rgba(58,55,50,0.82)"
              >
                wait...
              </text>
            </Bubble>
          )}
        </AnimatePresence>

        {/* =================================================
            WOW
        ================================================= */}

        <AnimatePresence>
          {stage === "wow" && (
            <Bubble
              key="wow"
              width={230}
            >
              <text
                x="55"
                y="91"
                fontFamily="monospace"
                fontSize="23"
                fontWeight="700"
                fill="rgba(58,55,50,0.86)"
              >
                woooow...
              </text>
            </Bubble>
          )}
        </AnimatePresence>

        {/* =================================================
            IMPRESSED
        ================================================= */}

        <AnimatePresence>
          {stage ===
            "impressed" && (
            <Bubble
              key="impressed"
              width={325}
              height={94}
            >
              <text
                x="39"
                y="78"
                fontFamily="monospace"
                fontSize="13"
                fontWeight="700"
                fill="rgba(58,55,50,0.84)"
              >
                okay... that&apos;s actually
              </text>

              <text
                x="83"
                y="105"
                fontFamily="monospace"
                fontSize="18"
                fontWeight="700"
                fill="rgba(58,55,50,0.86)"
              >
                impressive.
              </text>
            </Bubble>
          )}
        </AnimatePresence>

        {/* =================================================
            FINAL JOKE
        ================================================= */}

        <AnimatePresence>
          {stage === "bluff" && (
            <Bubble
              key="bluff"
              width={310}
              height={94}
            >
              <text
                x="70"
                y="78"
                fontFamily="monospace"
                fontSize="14"
                fontWeight="600"
                fill="rgba(58,55,50,0.82)"
              >
                I thought he was
              </text>

              <text
                x="104"
                y="105"
                fontFamily="monospace"
                fontSize="19"
                fontWeight="700"
                fill="rgba(58,55,50,0.86)"
              >
                bluffing.
              </text>
            </Bubble>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
}