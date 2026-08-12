"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import {
  useEffect,
  useState,
} from "react";


/* =========================================================
   STORY
========================================================= */

type Stage =
  | "idle"
  | "run"
  | "fall"
  | "down"
  | "stand"
  | "nothing"
  | "monitor"
  | "shutup"
  | "point"
  | "bye"
  | "exit";


const FIRST_START = 4000;

/*
 * After the complete joke finishes,
 * give the page a long calm period.
 */
const REPEAT_PAUSE = 16000;


/* =========================================================
   SPEECH BUBBLE
========================================================= */

type BubbleProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  children: React.ReactNode;
  tail?: "left" | "right";
};

function Bubble({
  x,
  y,
  width,
  height,
  children,
  tail = "left",
}: BubbleProps) {
  return (
    <motion.g
      initial={{
        opacity: 0,
        scale: 0.92,
        y: 6,
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
        duration: 0.3,
        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="18"
        fill="rgba(250,249,245,0.97)"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      {tail === "left" ? (
        <path
          d={`
            M ${x + 38} ${y + height - 3}
            L ${x + 20} ${y + height + 24}
            L ${x + 58} ${y + height - 2}
          `}
          fill="rgba(250,249,245,0.97)"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d={`
            M ${x + width - 58} ${y + height - 2}
            L ${x + width - 20} ${y + height + 24}
            L ${x + width - 38} ${y + height - 3}
          `}
          fill="rgba(250,249,245,0.97)"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      )}

      {children}
    </motion.g>
  );
}


/* =========================================================
   STANDING BODY
========================================================= */

function StandingPose() {
  return (
    <g>
      {/* HEAD */}

      <circle
        cx="0"
        cy="-50"
        r="18"
        fill="rgba(250,249,245,0.97)"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      {/* EYES */}

      <circle
        cx="-6"
        cy="-53"
        r="2"
        fill="currentColor"
      />

      <circle
        cx="6"
        cy="-53"
        r="2"
        fill="currentColor"
      />

      {/* AWKWARD FACE */}

      <path
        d="M-6 -41 L6 -41"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* BODY */}

      <path
        d="
          M0 -32
          C-1 -10
           1 9
           0 27
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* ARMS */}

      <path
        d="
          M0 -16
          L-23 8
          L-30 20
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
          L22 8
          L29 20
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* LEGS */}

      <path
        d="
          M0 27
          L-17 48
          L-25 65
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="
          M0 27
          L17 48
          L25 65
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
   RUNNING — FRAME A
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

      {/* Leaning torso */}

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

      {/* Arms — fixed natural running pose */}

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

      {/* Legs */}

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
   RUNNING — FRAME B
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

      {/* Opposite arm pose */}

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

      {/* Opposite leg pose */}

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
   FALLING POSE
========================================================= */

function FallingPose() {
  return (
    <g>
      <circle
        cx="0"
        cy="-49"
        r="18"
        fill="rgba(250,249,245,0.97)"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      {/* BIG PANIC EYES */}

      <circle
        cx="-6"
        cy="-52"
        r="3"
        fill="currentColor"
      />

      <circle
        cx="6"
        cy="-52"
        r="3"
        fill="currentColor"
      />

      {/* O mouth */}

      <ellipse
        cx="0"
        cy="-40"
        rx="4"
        ry="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="
          M0 -31
          L0 27
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Arms thrown upward */}

      <path
        d="
          M0 -16
          L-32 -41
          L-51 -34
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
          L32 -43
          L52 -34
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Legs */}

      <path
        d="
          M0 27
          L-28 50
          L-44 40
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="
          M0 27
          L27 51
          L47 42
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
   POINTING POSE
========================================================= */

function PointingPose() {
  return (
    <g>
      <circle
        cx="0"
        cy="-50"
        r="18"
        fill="rgba(250,249,245,0.97)"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      {/* eyes looking left */}

      <circle
        cx="-8"
        cy="-53"
        r="2"
        fill="currentColor"
      />

      <circle
        cx="3"
        cy="-53"
        r="2"
        fill="currentColor"
      />

      {/* smile */}

      <path
        d="
          M-7 -42
          Q0 -36
           8 -42
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="
          M0 -32
          L0 27
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* BIG clear pointing arm */}

      <path
        d="
          M0 -15
          L-35 -23
          L-72 -28
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* finger */}

      <path
        d="
          M-72 -28
          L-86 -28
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      {/* other arm */}

      <path
        d="
          M0 -15
          L22 9
          L29 20
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M0 27 L-18 65"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M0 27 L19 65"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  );
}


/* =========================================================
   WAVING POSE
========================================================= */

function WavePose() {
  return (
    <g>
      <circle
        cx="0"
        cy="-50"
        r="18"
        fill="rgba(250,249,245,0.97)"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <circle
        cx="-6"
        cy="-53"
        r="2"
        fill="currentColor"
      />

      <circle
        cx="6"
        cy="-53"
        r="2"
        fill="currentColor"
      />

      <path
        d="
          M-7 -42
          Q0 -36
           8 -42
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M0 -32 L0 27"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Normal arm */}

      <path
        d="
          M0 -15
          L-23 8
          L-30 19
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Raised waving arm — static natural pose */}

      <path
        d="
          M0 -15
          L22 -33
          L26 -61
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* little hand */}

      <path
        d="M26 -61 L18 -70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M26 -61 L26 -73"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M26 -61 L34 -69"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M0 27 L-18 65"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M0 27 L19 65"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  );
}


/* =========================================================
   COMPONENT
========================================================= */

export default function StickmanGag() {
  const reduceMotion =
    !!useReducedMotion();

  const [
    stage,
    setStage,
  ] =
    useState<Stage>("idle");

  const [
    runFrame,
    setRunFrame,
  ] =
    useState(false);


  /* =======================================================
     STORY TIMELINE
  ======================================================= */

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const timers:
      ReturnType<
        typeof setTimeout
      >[] = [];


    let stopped = false;


    const later = (
      callback: () => void,
      delay: number
    ) => {
      const timer =
        setTimeout(
          callback,
          delay
        );

      timers.push(timer);
    };


    const runStory = () => {
      if (stopped) {
        return;
      }


      setStage("run");


      /*
       * Runs long enough for the visitor
       * to notice what is happening.
       */

      later(
        () =>
          setStage("fall"),
        2600
      );


      later(
        () =>
          setStage("down"),
        3300
      );


      /*
       * Stay on the floor.
       * This pause is important for the joke.
       */

      later(
        () =>
          setStage("stand"),
        4800
      );


      later(
        () =>
          setStage(
            "nothing"
          ),
        5800
      );


      /*
       * "You saw nothing."
       * stays for about 2 seconds.
       */

      later(
        () =>
          setStage(
            "monitor"
          ),
        7900
      );


      /*
       * Monitor has enough time
       * to answer.
       */

      later(
        () =>
          setStage(
            "shutup"
          ),
        9900
      );


      /*
       * Then the main punchline.
       */

      later(
        () =>
          setStage("point"),
        11100
      );


      later(
        () =>
          setStage("bye"),
        13600
      );


      later(
        () =>
          setStage("exit"),
        14900
      );


      later(
        () => {
          setStage("idle");


          later(
            runStory,
            REPEAT_PAUSE
          );
        },
        16300
      );
    };


    later(
      runStory,
      FIRST_START
    );


    return () => {
      stopped = true;

      timers.forEach(
        clearTimeout
      );
    };
  }, [reduceMotion]);


  /* =======================================================
     TWO-FRAME CARTOON RUN

     No rotating limbs.
     We simply switch between two hand-drawn poses.
  ======================================================= */

useEffect(() => {
  /*
   * Use the same two-frame cartoon run
   * when entering AND when leaving.
   */
  if (
    stage !== "run" &&
    stage !== "exit"
  ) {
    setRunFrame(false);
    return;
  }

  const interval =
    setInterval(() => {
      setRunFrame(
        previous =>
          !previous
      );
    }, 190);

  return () =>
    clearInterval(
      interval
    );
}, [stage]);


  if (
    reduceMotion ||
    stage === "idle"
  ) {
    return null;
  }


  /* =======================================================
     CHARACTER POSITION
  ======================================================= */

  const characterAnimation =
    (() => {
      switch (stage) {
        case "run":
          return {
            x: 1090,
            y: 625,
            rotate: 0,
            opacity: 1,
          };


        case "fall":
          return {
            x: 1015,
            y: 660,
            rotate: 72,
            opacity: 1,
          };


        case "down":
          return {
            x: 1015,
            y: 678,
            rotate: 84,
            opacity: 1,
          };


        case "stand":
        case "nothing":
        case "monitor":
        case "shutup":
          return {
            x: 1060,
            y: 625,
            rotate: 0,
            opacity: 1,
          };


        case "point":
          return {
            x: 1100,
            y: 625,
            rotate: 0,
            opacity: 1,
          };


        case "bye":
          return {
            x: 1240,
            y: 625,
            rotate: 0,
            opacity: 1,
          };


        case "exit":
          return {
            x: 1530,
            y: 625,
            rotate: 0,
            opacity: 0,
          };


        default:
          return {
            x: 1530,
            y: 625,
            rotate: 0,
            opacity: 0,
          };
      }
    })();


  const characterTransition =
    stage === "run"
      ? {
          duration: 2.6,
          ease:
            "linear" as const,
        }
      : stage === "fall"
        ? {
            duration: 0.7,
            ease:
              "easeIn" as const,
          }
        : stage === "stand"
          ? {
              duration: 0.9,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ] as [
                number,
                number,
                number,
                number,
              ],
            }
          : stage === "bye"
            ? {
                duration: 0.7,
                ease:
                  "easeInOut" as const,
              }
           : stage ===
    "exit"
  ? {
      duration: 1.6,
      ease:
        "linear" as const,
    }
              : {
                  duration: 0.25,
                };


  return (
    <g>
      {/* =================================================
          CHARACTER
      ================================================= */}

      <motion.g
        initial={{
          x: 1510,
          y: 625,
          opacity: 0,
        }}
        animate={
          characterAnimation
        }
        transition={
          characterTransition
        }
      >
        {/* ===============================================
            CLASSIC 2-FRAME RUN
        ================================================ */}

        {stage === "run" &&
          (runFrame ? (
            <RunPoseA />
          ) : (
            <RunPoseB />
          ))}


        {/* ===============================================
            FALL
        ================================================ */}

        {stage === "fall" && (
          <FallingPose />
        )}


        {/* ===============================================
            LYING ON FLOOR

            Same falling drawing, rotated by the
            parent. No weird limb movement.
        ================================================ */}

        {stage === "down" && (
          <FallingPose />
        )}


        {/* ===============================================
            STANDING / TALKING
        ================================================ */}

        {[
          "stand",
          "nothing",
          "monitor",
          "shutup",
        ].includes(stage) && (
          <StandingPose />
        )}


        {/* ===============================================
            POINT AT ANASS
        ================================================ */}

        {stage === "point" && (
          <PointingPose />
        )}


        {/* ===============================================
            WAVE
        ================================================ */}

        {stage === "bye" && (
          <WavePose />
        )}


       {/* ===============================================
    FUNNY RUNNING EXIT

    Same cartoon run as the entrance.
=============================================== */}

{stage === "exit" &&
  (runFrame ? (
    <RunPoseA />
  ) : (
    <RunPoseB />
  ))}

      </motion.g>


      {/* =================================================
          SLIP
      ================================================= */}

      <AnimatePresence>

        {stage === "fall" && (
          <motion.text
            key="slip"
            x="935"
            y="585"
            fontFamily="monospace"
            fontSize="28"
            fontWeight="700"
            fill="rgba(58,55,50,0.82)"
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 3,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            SLIP!
          </motion.text>
        )}

      </AnimatePresence>


      {/* =================================================
          MONITOR:
          OUCH.
      ================================================= */}

      <AnimatePresence>

        {(
          stage === "down" ||
          stage === "stand"
        ) && (
          <motion.g
            key="ouch"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <rect
              x="287"
              y="416"
              width="187"
              height="100"
              rx="5"
              fill="rgba(250,249,245,0.97)"
            />

            <text
              x="348"
              y="470"
              fontFamily="monospace"
              fontSize="21"
              fontWeight="600"
              fill="rgba(58,55,50,0.82)"
            >
              ouch HHH
            </text>
          </motion.g>
        )}

      </AnimatePresence>


      {/* =================================================
          YOU SAW NOTHING
      ================================================= */}

      <AnimatePresence>

        {stage ===
          "nothing" && (
          <Bubble
            key="nothing"
            x={970}
            y={420}
            width={285}
            height={78}
            tail="left"
          >
            <text
              x="1004"
              y="468"
              fontFamily="monospace"
              fontSize="18"
              fontWeight="700"
              fill="rgba(58,55,50,0.84)"
            >
              You saw nothing.
            </text>
          </Bubble>
        )}

      </AnimatePresence>


      {/* =================================================
          MONITOR ARGUES BACK
      ================================================= */}

      <AnimatePresence>

        {stage ===
          "monitor" && (
          <motion.g
            key="monitor-answer"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <rect
              x="287"
              y="416"
              width="187"
              height="100"
              rx="5"
              fill="rgba(250,249,245,0.97)"
            />

            <text
              x="303"
              y="457"
              fontFamily="monospace"
              fontSize="13"
              fontWeight="700"
              fill="rgba(58,55,50,0.84)"
            >
              I saw everything.
            </text>

            <text
              x="361"
              y="490"
              fontFamily="monospace"
              fontSize="22"
              fill="rgba(58,55,50,0.65)"
            >
              :)
            </text>


            {/* awkward silence */}

            <motion.text
              x="1050"
              y="535"
              fontFamily="monospace"
              fontSize="24"
              fontWeight="700"
              fill="rgba(58,55,50,0.55)"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [
                  0,
                  0,
                  1,
                ],
              }}
              transition={{
                duration: 1.1,
              }}
            >
              ...
            </motion.text>
          </motion.g>
        )}

      </AnimatePresence>


      {/* =================================================
          SHUT UP
      ================================================= */}

      <AnimatePresence>

        {stage ===
          "shutup" && (
          <Bubble
            key="shutup"
            x={965}
            y={445}
            width={170}
            height={66}
            tail="left"
          >
            <text
              x="1002"
              y="486"
              fontFamily="monospace"
              fontSize="16"
              fontWeight="700"
              fill="rgba(58,55,50,0.82)"
            >
              shut up.
            </text>
          </Bubble>
        )}

      </AnimatePresence>


      {/* =================================================
          MAIN PUNCHLINE
      ================================================= */}

      <AnimatePresence>

        {stage ===
          "point" && (
          <Bubble
            key="hire"
            x={1010}
            y={315}
            width={365}
            height={105}
            tail="left"
          >
            <text
              x="1045"
              y="360"
              fontFamily="monospace"
              fontSize="18"
              fontWeight="700"
              fill="rgba(58,55,50,0.85)"
            >
              Anyway... hire this guy.
            </text>

            <text
              x="1190"
              y="392"
              fontFamily="monospace"
              fontSize="12"
              fontStyle="italic"
              fill="rgba(58,55,50,0.55)"
            >
              pls.
            </text>
          </Bubble>
        )}

      </AnimatePresence>


      {/* =================================================
          GOODBYE
      ================================================= */}

      <AnimatePresence>

        {stage === "bye" && (
          <Bubble
            key="bye"
            x={1185}
            y={455}
            width={180}
            height={68}
            tail="right"
          >
            <text
              x="1220"
              y="497"
              fontFamily="monospace"
              fontSize="15"
              fontWeight="600"
              fill="rgba(58,55,50,0.78)"
            >
              okay bye.
            </text>
          </Bubble>
        )}

      </AnimatePresence>
    </g>
  );
}