"use client";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import StickmanGag from "@/components/StickmanGag";

/* =========================================================
   DRAWING SETTINGS
========================================================= */

const DRAWING_START_OFFSET = 1;
const DRAWING_SPEED = 0.35;

/* =========================================================
   DRAW PATH
========================================================= */

type DrawPathProps = {
  d: string;
  delay: number;
  duration?: number;
  opacity?: number;
  width?: number;
  rough?: boolean;
};

function DrawPath({
  d,
  delay,
  duration = 1,
  opacity = 1,
  width = 1.25,
  rough = true,
}: DrawPathProps) {
  const reduceMotion = !!useReducedMotion();

  const finalDelay = reduceMotion
    ? 0
    : Math.max(
        0,
        delay - DRAWING_START_OFFSET
      ) * DRAWING_SPEED;

  const finalDuration = reduceMotion
    ? 0
    : duration * DRAWING_SPEED;

  return (
    <motion.path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      filter={
        rough
          ? "url(#pencilRough)"
          : undefined
      }
      initial={
        reduceMotion
          ? false
          : {
              pathLength: 0,
              opacity: 0,
            }
      }
      animate={{
        pathLength: 1,
        opacity,
      }}
      transition={{
        pathLength: {
          duration: finalDuration,
          delay: finalDelay,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        },

        opacity: {
          duration:
            reduceMotion
              ? 0
              : 0.08,

          delay: finalDelay,
        },
      }}
    />
  );
}

/* =========================================================
   HERO SKETCH
========================================================= */

export default function HeroSketch() {
  const reduceMotion = !!useReducedMotion();

  const getDelay = (
    delay: number
  ) =>
    reduceMotion
      ? 0
      : Math.max(
          0,
          delay - DRAWING_START_OFFSET
        ) * DRAWING_SPEED;

  const ambientStart =
    getDelay(8.6) + 0.4;

  return (
    <div
      className="hero-sketch"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid meet"
        role="presentation"
      >
        {/* =================================================
            FILTERS
        ================================================= */}

        <defs>
          <filter
            id="pencilRough"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018"
              numOctaves="2"
              seed="7"
              result="noise"
            />

            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1.3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          <filter
            id="graphiteSoft"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur
              stdDeviation="5"
            />
          </filter>
        </defs>

        {/* =================================================
            CONSTRUCTION LINES
        ================================================= */}

        <g opacity="0.35">
          <DrawPath
            d="
              M120 732
              C420 725
               720 736
               1030 730
              C1205 727
               1375 733
               1490 728
            "
            delay={0.2}
            duration={1.8}
            opacity={0.34}
            width={0.85}
          />

          <DrawPath
            d="
              M168 165
              L168 420
            "
            delay={0.5}
            duration={0.9}
            opacity={0.25}
            width={0.8}
          />

          <DrawPath
            d="
              M180 585
              C305 574
               450 580
               590 574
            "
            delay={0.75}
            duration={1}
            opacity={0.28}
            width={0.8}
          />

          <DrawPath
            d="
              M1170 165
              C1255 160
               1340 166
               1430 165
            "
            delay={0.9}
            duration={0.8}
            opacity={0.25}
            width={0.8}
          />

          <DrawPath
            d="
              M1180 410
              C1260 405
               1350 409
               1445 404
            "
            delay={1}
            duration={0.8}
            opacity={0.25}
            width={0.8}
          />

          <DrawPath
            d="
              M129 742
              C435 754
               730 746
               1030 750
              C1190 751
               1370 747
               1490 750
            "
            delay={1.1}
            duration={1.6}
            opacity={0.2}
            width={0.7}
          />
        </g>

        {/* =================================================
            LEFT WINDOW
        ================================================= */}

        <DrawPath
          d="
            M205 190
            L435 190
            L435 365
            L205 365
            Z
          "
          delay={1.2}
          duration={1.4}
          opacity={0.38}
          width={0.9}
        />

        <DrawPath
          d="
            M211 195
            L429 194
            L431 360
            L210 361
            Z
          "
          delay={1.65}
          duration={1.15}
          opacity={0.7}
          width={1.2}
        />

        <DrawPath
          d="
            M220 328
            C255 302
             285 307
             312 282
            C343 253
             376 275
             413 235
          "
          delay={2}
          duration={0.9}
          opacity={0.58}
          width={1}
        />

        <DrawPath
          d="
            M220 339
            C260 321
             296 332
             333 310
            C364 291
             391 301
             417 286
          "
          delay={2.15}
          duration={0.8}
          opacity={0.4}
          width={0.85}
        />

        <DrawPath
          d="M226 205 L208 225"
          delay={2.3}
          duration={0.3}
          opacity={0.25}
          width={0.7}
        />

        <DrawPath
          d="M245 194 L208 232"
          delay={2.35}
          duration={0.3}
          opacity={0.22}
          width={0.7}
        />

        <DrawPath
          d="M426 320 L405 351"
          delay={2.4}
          duration={0.3}
          opacity={0.2}
          width={0.7}
        />

        {/* =================================================
            DESK
        ================================================= */}

        <DrawPath
          d="
            M175 575
            C290 568
             436 574
             590 570
          "
          delay={2.45}
          duration={1.05}
          opacity={0.35}
          width={0.9}
        />

        <DrawPath
          d="
            M180 582
            C300 580
             442 582
             595 578
          "
          delay={2.8}
          duration={1.1}
          opacity={0.82}
          width={1.35}
        />

        <DrawPath
          d="
            M190 588
            L185 720
          "
          delay={3.05}
          duration={0.65}
          opacity={0.74}
          width={1.2}
        />

        <DrawPath
          d="
            M565 585
            L580 720
          "
          delay={3.2}
          duration={0.7}
          opacity={0.68}
          width={1.1}
        />

        {/* =================================================
            MONITOR
        ================================================= */}

        <DrawPath
          d="
            M265 402
            Q270 392
             283 392
            L478 392
            Q491 393
             492 406
            L492 524
            Q491 540
             476 541
            L283 541
            Q267 541
             267 525
            Z
          "
          delay={3.1}
          duration={1.35}
          opacity={0.34}
          width={0.85}
        />

        <DrawPath
          d="
            M271 407
            Q274 399
             285 400
            L476 400
            Q486 400
             487 412
            L487 525
            Q487 536
             476 537
            L285 537
            Q273 537
             272 525
            Z
          "
          delay={3.6}
          duration={1.35}
          opacity={0.88}
          width={1.35}
        />

        <DrawPath
          d="
            M274 405
            Q277 402
             287 402
            L474 402
          "
          delay={4}
          duration={0.75}
          opacity={0.28}
          width={0.8}
        />

        <DrawPath
          d="
            M379 539
            L380 563
          "
          delay={4.05}
          duration={0.4}
          opacity={0.78}
          width={1.2}
        />

        <DrawPath
          d="
            M338 564
            C365 561
             401 562
             425 565
          "
          delay={4.2}
          duration={0.55}
          opacity={0.72}
          width={1.1}
        />

        {/* =================================================
            MONITOR CODE
        ================================================= */}

        <DrawPath
          d="
            M294 428
            C332 425
             369 427
             413 425
          "
          delay={4.3}
          duration={0.55}
          opacity={0.32}
          width={0.75}
        />

        <DrawPath
          d="
            M294 445
            C339 442
             392 445
             456 442
          "
          delay={4.4}
          duration={0.65}
          opacity={0.38}
          width={0.75}
        />

        <DrawPath
          d="
            M294 462
            C324 459
             357 461
             386 459
          "
          delay={4.5}
          duration={0.5}
          opacity={0.3}
          width={0.7}
        />

        <DrawPath
          d="
            M318 480
            C360 478
             403 480
             455 477
          "
          delay={4.6}
          duration={0.6}
          opacity={0.26}
          width={0.7}
        />

        <DrawPath
          d="
            M294 497
            C342 494
             390 497
             427 493
          "
          delay={4.7}
          duration={0.55}
          opacity={0.26}
          width={0.7}
        />

        {/* =================================================
            KEYBOARD
        ================================================= */}

        <DrawPath
          d="
            M285 552
            C335 548
             404 549
             456 552
            L470 567
            C419 571
             330 570
             275 567
            Z
          "
          delay={4.8}
          duration={0.8}
          opacity={0.68}
          width={1}
        />

        <DrawPath
          d="M300 557 L446 557"
          delay={5.05}
          duration={0.55}
          opacity={0.25}
          width={0.65}
        />

        <DrawPath
          d="M309 562 L453 562"
          delay={5.12}
          duration={0.55}
          opacity={0.2}
          width={0.65}
        />

        {/* =================================================
            DESK LAMP
        ================================================= */}

        <DrawPath
          d="
            M207 566
            L231 519
            L210 458
          "
          delay={4.6}
          duration={0.85}
          opacity={0.74}
          width={1.2}
        />

        <DrawPath
          d="
            M209 458
            C189 445
             175 459
             173 476
            C192 489
             215 483
             231 468
            C223 462
             217 459
             209 458
            Z
          "
          delay={5}
          duration={0.75}
          opacity={0.82}
          width={1.25}
        />

        <DrawPath
          d="M182 468 L210 454"
          delay={5.25}
          duration={0.3}
          opacity={0.25}
          width={0.65}
        />

        <DrawPath
          d="M188 477 L221 460"
          delay={5.3}
          duration={0.3}
          opacity={0.25}
          width={0.65}
        />

        {/* =================================================
            COFFEE CUP
        ================================================= */}

        <DrawPath
          d="
            M500 521
            L502 558
            Q503 569
             515 569
            L538 569
            Q548 568
             549 557
            L550 521
            Z
          "
          delay={5.35}
          duration={0.7}
          opacity={0.74}
          width={1.1}
        />

        <DrawPath
          d="
            M551 530
            C575 527
             576 558
             551 557
          "
          delay={5.6}
          duration={0.5}
          opacity={0.72}
          width={1}
        />

        <DrawPath
          d="
            M513 508
            C506 498
             520 491
             514 479
          "
          delay={5.75}
          duration={0.55}
          opacity={0.22}
          width={0.7}
        />

        <DrawPath
          d="
            M532 508
            C525 496
             539 490
             533 477
          "
          delay={5.9}
          duration={0.55}
          opacity={0.18}
          width={0.7}
        />

        {/* =================================================
            CHAIR
        ================================================= */}

        <DrawPath
          d="
            M590 485
            C634 468
             680 488
             681 545
            L677 625
            C673 660
             638 673
             607 656
            C588 644
             582 625
             584 601
            Z
          "
          delay={4.3}
          duration={1.25}
          opacity={0.3}
          width={0.9}
        />

        <DrawPath
          d="
            M595 490
            C636 476
             674 493
             675 546
            L671 621
            C667 650
             639 663
             612 650
            C596 641
             590 623
             591 602
            Z
          "
          delay={5.15}
          duration={1.2}
          opacity={0.72}
          width={1.2}
        />

        <DrawPath
          d="M632 660 L632 713"
          delay={5.8}
          duration={0.5}
          opacity={0.7}
          width={1.1}
        />

        <DrawPath
          d="M632 713 L594 731"
          delay={5.95}
          duration={0.45}
          opacity={0.65}
          width={1}
        />

        <DrawPath
          d="M632 713 L671 731"
          delay={6.05}
          duration={0.45}
          opacity={0.65}
          width={1}
        />

        <DrawPath
          d="M603 526 L659 503"
          delay={6.1}
          duration={0.4}
          opacity={0.17}
          width={0.6}
        />

        <DrawPath
          d="M600 542 L667 515"
          delay={6.15}
          duration={0.4}
          opacity={0.18}
          width={0.6}
        />

        <DrawPath
          d="M598 559 L670 530"
          delay={6.2}
          duration={0.4}
          opacity={0.16}
          width={0.6}
        />

        {/* =================================================
            RIGHT WINDOW
        ================================================= */}

        <DrawPath
          d="
            M1180 171
            L1420 170
            L1421 386
            L1180 386
            Z
          "
          delay={2}
          duration={1.3}
          opacity={0.32}
          width={0.9}
        />

        <DrawPath
          d="
            M1185 175
            L1416 175
            L1416 381
            L1185 381
            Z
          "
          delay={2.7}
          duration={1.25}
          opacity={0.68}
          width={1.2}
        />

        <DrawPath
          d="
            M1300 175
            L1300 381
          "
          delay={3.25}
          duration={0.7}
          opacity={0.55}
          width={0.9}
        />

        <DrawPath
          d="
            M1185 278
            L1416 278
          "
          delay={3.4}
          duration={0.7}
          opacity={0.55}
          width={0.9}
        />

        {/* =================================================
            RIGHT SHELF
        ================================================= */}

        <DrawPath
          d="
            M1158 452
            C1247 446
             1350 450
             1452 447
          "
          delay={6.15}
          duration={0.8}
          opacity={0.72}
          width={1.15}
        />

        <DrawPath
          d="M1185 450 L1185 519"
          delay={6.45}
          duration={0.4}
          opacity={0.55}
          width={0.9}
        />

        <DrawPath
          d="M1213 450 L1213 515"
          delay={6.55}
          duration={0.4}
          opacity={0.5}
          width={0.9}
        />

        <DrawPath
          d="M1242 450 L1242 520"
          delay={6.65}
          duration={0.4}
          opacity={0.55}
          width={0.9}
        />

        <DrawPath
          d="M1271 450 L1271 508"
          delay={6.75}
          duration={0.4}
          opacity={0.48}
          width={0.9}
        />

        <DrawPath
          d="M1300 450 L1300 520"
          delay={6.85}
          duration={0.4}
          opacity={0.52}
          width={0.9}
        />

        {/* =================================================
            PLANT
        ================================================= */}

        <DrawPath
          d="
            M1265 645
            C1295 640
             1340 640
             1371 645
            L1356 713
            C1332 720
             1298 719
             1277 712
            Z
          "
          delay={6.4}
          duration={0.85}
          opacity={0.74}
          width={1.1}
        />

        <DrawPath
          d="
            M1318 646
            C1315 605
             1315 562
             1320 520
          "
          delay={6.9}
          duration={0.7}
          opacity={0.64}
          width={1}
        />

        <DrawPath
          d="
            M1318 589
            C1286 574
             1263 548
             1262 521
          "
          delay={7.05}
          duration={0.65}
          opacity={0.62}
          width={1}
        />

        <DrawPath
          d="
            M1318 605
            C1354 586
             1378 560
             1383 528
          "
          delay={7.2}
          duration={0.65}
          opacity={0.62}
          width={1}
        />

        <DrawPath
          d="
            M1319 568
            C1341 549
             1349 523
             1343 500
          "
          delay={7.35}
          duration={0.6}
          opacity={0.58}
          width={0.9}
        />

        <DrawPath
          d="
            M1262 521
            C1233 518
             1222 539
             1230 562
            C1253 564
             1271 549
             1262 521
            Z
          "
          delay={7.5}
          duration={0.65}
          opacity={0.68}
          width={1}
        />

        <DrawPath
          d="
            M1383 529
            C1409 521
             1424 540
             1418 564
            C1393 565
             1377 553
             1383 529
            Z
          "
          delay={7.65}
          duration={0.65}
          opacity={0.68}
          width={1}
        />

        <DrawPath
          d="
            M1343 500
            C1360 478
             1384 486
             1391 506
            C1374 521
             1351 522
             1343 500
            Z
          "
          delay={7.8}
          duration={0.65}
          opacity={0.65}
          width={1}
        />

        <DrawPath
          d="
            M1320 520
            C1304 496
             1280 500
             1270 519
            C1285 538
             1308 540
             1320 520
            Z
          "
          delay={7.95}
          duration={0.65}
          opacity={0.65}
          width={1}
        />

        <DrawPath
          d="M1284 661 L1355 648"
          delay={8.1}
          duration={0.4}
          opacity={0.18}
          width={0.6}
        />

        <DrawPath
          d="M1281 676 L1353 663"
          delay={8.15}
          duration={0.4}
          opacity={0.18}
          width={0.6}
        />

        <DrawPath
          d="M1280 691 L1350 679"
          delay={8.2}
          duration={0.4}
          opacity={0.16}
          width={0.6}
        />

        {/* =================================================
            FLOOR CABLE
        ================================================= */}

        <DrawPath
          d="
            M470 572
            C525 610
             520 674
             592 690
            C700 713
             760 679
             843 708
            C914 733
             988 718
             1040 690
          "
          delay={7.2}
          duration={1.5}
          opacity={0.34}
          width={0.85}
        />

        <DrawPath
          d="
            M469 574
            C524 613
             519 678
             590 693
            C697 716
             760 681
             842 711
          "
          delay={7.85}
          duration={1.2}
          opacity={0.14}
          width={0.65}
        />

        {/* =================================================
            GRAPHITE SHADOWS
        ================================================= */}

        <motion.ellipse
          cx="385"
          cy="727"
          rx="235"
          ry="15"
          fill="rgba(58,55,50,0.08)"
          filter="url(#graphiteSoft)"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: getDelay(8.4),
            duration:
              reduceMotion
                ? 0
                : 0.4,
          }}
        />

        <motion.ellipse
          cx="1325"
          cy="724"
          rx="110"
          ry="13"
          fill="rgba(58,55,50,0.07)"
          filter="url(#graphiteSoft)"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: getDelay(8.6),
            duration:
              reduceMotion
                ? 0
                : 0.35,
          }}
        />

        {/* =================================================
            AMBIENT COFFEE STEAM
        ================================================= */}

        {!reduceMotion && (
          <>
            <motion.path
              d="
                M513 508
                C506 498
                 520 491
                 514 479
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              filter="url(#pencilRough)"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [
                  0.1,
                  0.45,
                  0.2,
                  0.4,
                  0.1,
                ],

                y: [
                  0,
                  -4,
                  -8,
                  -13,
                  -18,
                ],

                x: [
                  0,
                  1,
                  -1,
                  2,
                  0,
                ],
              }}
              transition={{
                delay: ambientStart,
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.path
              d="
                M532 508
                C525 496
                 539 490
                 533 477
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              filter="url(#pencilRough)"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [
                  0.08,
                  0.36,
                  0.14,
                  0.34,
                  0.08,
                ],

                y: [
                  0,
                  -5,
                  -9,
                  -14,
                  -19,
                ],

                x: [
                  0,
                  -1,
                  1,
                  -1,
                  0,
                ],
              }}
              transition={{
                delay:
                  ambientStart + 0.3,

                duration: 3.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* =================================================
                MONITOR BLINKING CURSOR
            ================================================= */}

            <motion.path
              d="
                M300 514
                L312 514
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [
                  0,
                  0.75,
                  0.75,
                  0,
                ],
              }}
              transition={{
                delay: ambientStart,
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </>
        )}

        {/* =================================================
            STICKMAN EASTER EGG

            The complete slower cartoon story is
            handled inside StickmanGag.tsx.
        ================================================= */}

        <StickmanGag />
      </svg>
    </div>
  );
}