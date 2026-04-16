/* ============================================================
   CHEER FLORIDA ALL-STARS — POSITION AGREEMENTS & HIERARCHY
   Design: Dark navy #0B0F1A, Crimson #B91C1C, Bebas Neue + DM Sans
   Content: Matches Cheer_Florida_Program_Responsibilities PDF exactly
   ============================================================ */

import { useEffect, useState } from "react";
import { Download, ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const CFA_PDF_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/EryPe9N36963woYHYBNvb9/Cheer_Florida_Role_Definitions_and_Hierarchy_328ffb51.pdf";
const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/EryPe9N36963woYHYBNvb9/cheer_florida_logo_840125e7.png";
const HERO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/EryPe9N36963woYHYBNvb9/cfa-hero-v5_e760c270.jpg";

const RED = "#B91C1C";
const NAVY = "#1E3A8A";

const roles = [
  {
    id: "gym-owners",
    title: "GYM OWNERS",
    subtitle: "Financial Authority · Business Strategy · Final Approval",
    color: RED,
    description:
      "The Gym Owners hold final financial authority and business strategy oversight for Cheer Florida. Owners empower the Director of Program Development & Operations and program directors to make day-to-day and operational decisions, as they are the ones on the floor. Owners retain final approval on financial commitments, salaries, and major business decisions.",
    sections: [
      {
        title: "ONGOING RESPONSIBILITIES",
        items: [
          "Final approval on all salary decisions and compensation changes",
          "Final approval on all hiring and termination decisions",
          "Oversee overall financial health and budgeting of the gym",
          "Review and approve major financial expenditures",
          "Set overarching business goals and long-term vision",
          "Maintain facility ownership and legal/insurance compliance",
        ],
      },
      {
        title: "DELEGATED TO PROGRAM DIRECTOR",
        items: [
          "Day-to-day operational decisions",
          "Staff management and accountability",
          "Program systems, curriculum, and scheduling",
          "Athlete development and team placement decisions (subject to Owner final approval)",
          "Coach hiring recommendations (subject to Owner final approval)",
        ],
      },
      {
        title: "MEETING REQUIREMENTS",
        items: [
          "Attend mandatory Wednesday Upper Management Meeting (weekly, in-person required)",
          "Receive monthly financial and program performance reports from Program Director",
          "Participate in annual program planning and goal-setting sessions",
        ],
      },
    ],
    owns: [
      "Final say on all financial decisions and salary approvals",
      "Final approval on all hiring and firing decisions",
      "Final approval of all teams and team placements",
      "Oversee all program budgets and financial health across all programs",
      "USASF athlete registration and compliance management",
      "Empower the Director of Program Development & Operations to run the gym operationally",
    ],
    requires: [],
    requiresLabel: "",
  },
  {
    id: "program-director",
    title: "DIRECTOR OF PROGRAM DEVELOPMENT & OPERATIONS",
    subtitle: "Systems · Strategy · Staff Development · Culture · Final Operational Authority",
    color: NAVY,
    description:
      "The Director of Program Development & Operations is the strategic architect and operational authority of Cheer Florida. This role designs and owns all program systems, drives staff development, sets the standard for athlete progression and culture, and holds final say on all operational decisions, once aligned with the Gym Owners. The Director is not managing daily floor logistics — the Director is building the systems, analyzing performance, and making the decisions that shape the entire program.",
    sections: [
      {
        title: "DAILY TO DO",
        items: [
          "Approve and audit all practice plans before floor execution",
          "Analyze end-of-day reports from ASD and Gym Manager to identify trends",
          "Monitor the Cheer Florida Family Facebook page and engage as needed",
          "Respond to all emails and calls within 24 hours",
          "Coach 3–4 assigned teams",
          "Handle all injury reports and medical follow-ups",
          "Address escalated parent issues, athlete placement conversations, and staff escalations",
          "Monitor gym culture, staff professionalism, and program standards",
        ],
      },
      {
        title: "WEEKLY TO DO",
        items: [
          "Host mandatory Wednesday Upper Management Meeting with Owners and Gym Manager (in-person required)",
          "Meet with program leaders (ASD, Tumbling Director, Specialty Class leads) for weekly check-in",
          "Assign coaching fines and write-ups as warranted",
          "Review and audit program-wide communication for consistency",
        ],
      },
      {
        title: "MONTHLY TO DO",
        items: [
          "Lead full monthly staff meeting — required attendance, owned by Director",
          "Conduct full program numbers review: all-star, tumbling, flex, specialty, retention",
          "Approve or deny all Tumbling program level-up and level-down requests",
          "Review KPIs: retention, attendance trends, athlete progression, drop-off patterns",
          "Plan upcoming staff education sessions and identify coaching gaps",
          "Review marketing, enrollment, and community outreach efforts",
          "C.I.P. rotation list review and salaried employee threshold tracking",
          "Analyze athlete drop-off trends and use retention data to guide decisions",
        ],
      },
      {
        title: "QUARTERLY TO DO",
        items: [
          "Conduct performance reviews for all Director-level staff",
          "Build or update individual coach development plans based on identified gaps",
          "Review and update athlete progression standards across all programs",
          "Plan seasonal marketing pushes and enrollment drives",
          "Evaluate coach training progress and system adherence",
          "Review competitive success trends and adjust program strategy",
        ],
      },
      {
        title: "SEMI-ANNUALLY TO DO",
        items: [
          "Conduct comprehensive staff evaluations — in collaboration with Gym Owners",
          "Oversee major program transitions and mid-season evaluations",
          "Set strategic goals for the upcoming 6-month cycle",
          "Finalize hiring recommendations for all coaching and director staff",
          "Finalize choreography and music budgets — select and approve all vendors",
          "Set the overarching schedule philosophy for the season",
        ],
      },
      {
        title: "ANNUALLY TO DO",
        items: [
          "Build and implement tryout structure — set evaluation parameters and placement philosophy",
          "Finalize and publish tryout packets and program handbooks",
          "Build and own all program systems: practice planning, end-of-day reporting, flexibility, tumbling structure, specialty classes",
          "Create and implement all standard operating procedures (SOPs)",
          "Host annual staff training day — bring in guest speakers and outside experts",
          "Deliver annual 'State of the Program' presentation to staff",
          "Develop new programs: classes, clinics, and specialty offerings",
          "Update employee coaching eligibility and certification systems",
        ],
      },
    ],
    owns: [
      "All program systems: practice planning, reporting, flexibility, tumbling, specialty classes",
      "Final approval on all practice plans before floor execution",
      "Final approval or denial of all Tumbling level-up and level-down requests",
      "Final attendance decisions — ASD tracks and enforces, Director decides",
      "Staff development: weekly meetings, monthly full staff meetings, individual coaching plans",
      "Athlete development models, progression standards, and team placement philosophy",
      "Hiring recommendations for all coaching and director staff",
      "All injury reports, medical follow-ups, and athlete health decisions",
      "Escalated parent issues, athlete placement conversations, and staff escalations",
      "Culture ownership: staff culture, athlete accountability, parent expectations",
      "Choreography and music budget oversight — final vendor approval",
      "Retention strategy and KPI analysis across all programs",
      "Final say on all program policies, schedules, and disciplinary actions",
    ],
    requires: [
      "Final salary decisions and any compensation changes for staff",
      "Final hiring and termination decisions",
      "Major financial expenditures beyond operational budget",
      "Any legal, insurance, or facility-related commitments",
      "Major business strategy changes or new program launches",
    ],
    requiresLabel: "REQUIRES OWNER APPROVAL — DO NOT PROCEED WITHOUT IT",
  },
  {
    id: "gym-manager",
    title: "GYM MANAGER",
    subtitle: "Scheduling · Admin Operations · Communication · Floor Coaching",
    color: NAVY,
    description:
      "The Gym Manager oversees the day-to-day administrative operations of Cheer Florida. This role handles scheduling, gym communications, pro-shop operations, and front-facing customer service. The Gym Manager also coaches assigned teams and works closely with the Program Director to ensure smooth operational flow.",
    sections: [
      {
        title: "DAILY TO DO",
        items: [
          "Respond to gym emails and phone calls in a timely manner",
          "Manage front desk operations and customer check-in",
          "Address scheduling conflicts and day-to-day facility issues",
          "Coach assigned teams",
          "Ensure pro-shop is stocked and operational",
          "Escalate unresolved issues to Program Director",
        ],
      },
      {
        title: "WEEKLY TO DO",
        items: [
          "Attend Director-level strategy meeting",
          "Review and manage the master gym schedule",
          "Coordinate with program directors on scheduling needs",
          "Submit weekly operations summary to Program Director",
          "Know and report key metrics (attendance, enrollment, open slots)",
        ],
      },
      {
        title: "MONTHLY TO DO",
        items: [
          "Submit pro shop sales report to Program Director and Gym Owners",
          "Review and update gym schedule for the upcoming month",
          "Audit gym communications for response time and quality",
          "Report on enrollment and open class availability",
        ],
      },
      {
        title: "EVENT / SEASONAL",
        items: [
          "Run pro-shop sales during showcases, winter events, and competitions",
          "Coordinate facility setup and breakdown for gym events",
          "Assist with tryout logistics and scheduling",
          "Manage uniform and apparel orders as needed",
        ],
      },
    ],
    owns: [
      "Day-to-day gym scheduling and facility coordination",
      "Responding to gym emails, calls, and general customer inquiries",
      "Running pro-shop operations during events",
      "Coaching assigned teams",
      "Escalating unresolved scheduling or operational issues to Program Director",
    ],
    requires: [
      "Making permanent changes to the master gym schedule",
      "Committing to vendor orders or purchases beyond standard pro-shop restocking",
      "Any communication sent on behalf of the program to parents or staff at large",
      "Hiring, firing, or disciplinary actions involving any staff member",
      "Overriding program director decisions on scheduling or operations",
    ],
    requiresLabel: "REQUIRES PROGRAM DIRECTOR APPROVAL — DO NOT PROCEED WITHOUT IT",
  },
  {
    id: "all-star-director",
    title: "ALL-STAR DIRECTOR",
    subtitle: "Execution · Floor Operations · Staff Accountability · Half Year & Prep Program Ownership · Elite Team Support · Compliance",
    color: RED,
    description:
      "The All-Star Director is the operational leader of the gym floor and holds complete ownership of the Half Year and Full Season Prep programs. This role is fully responsible for the growth, choreography, development, and daily operations of those programs. The ASD also works closely alongside the Director of Program Development & Operations in the management of the elite teams — serving as a key partner in execution, staff accountability, and floor performance at the elite level. The ASD coaches 3–4 teams, manages day-to-day parent and staff communication, and provides structured reports to the Director.",
    sections: [
      {
        title: "HALF YEAR & PREP PROGRAMS — COMPLETE OWNERSHIP",
        items: [
          "Hold complete ownership of the Half Year and Full Season Prep programs — these programs are the ASD's domain",
          "Lead all growth, recruitment, and athlete retention for these programs",
          "Own all choreography planning, execution, and choreographer coordination",
          "Schedule all music production from the Program Director-approved vendor list",
          "Develop and implement staff training specific to these programs",
          "Manage team placements, crossovers, and roster decisions (Director approval required)",
          "Own all parent communication for athletes in these programs",
          "Drive program culture, athlete experience, and retention within Half Year and Prep",
        ],
      },
      {
        title: "ELITE TEAM MANAGEMENT — PARTNERSHIP WITH DIRECTOR",
        items: [
          "Assist the Director of Program Development & Operations with the management of the elite teams",
          "Serve as a key floor-level partner in elite team execution and staff accountability",
          "Support the Director in monitoring elite team performance, athlete development, and competition readiness",
          "Provide real-time floor feedback and daily reporting on elite team operations to the Director",
          "Help implement Director-approved systems and practice structures across elite teams",
          "Collaborate with the Director on elite team roster decisions and athlete progression (Director has final say)",
        ],
      },
      {
        title: "DAILY TO DO",
        items: [
          "Own all day-to-day floor execution — manage and maintain the floor schedule",
          "Direct coaches in real-time during practice; provide input and feedback on execution",
          "Ensure Program Director-approved practice plans are being executed correctly",
          "Hold coaches accountable: ensure practice plans are submitted, end-of-day reports are completed",
          "Handle first-level corrections and staff accountability on the floor",
          "Manage athlete attendance tracking — approve/deny based on Director standards",
          "Handle day-to-day parent questions and initial staff conversations",
          "Be present during any parent communication meetings involving coaches or the Program Director",
          "Ensure attendance is taken and submitted by all coaches daily — no exceptions",
          "Submit structured end-of-day report to Program Director",
          "Coach 3–4 assigned teams",
        ],
      },
      {
        title: "WEEKLY TO DO",
        items: [
          "Attend Director-level strategy meeting — know team metrics, attendance, and floor performance",
          "Submit weekly Flyer Flex attendance and completion report to Program Director",
          "Track and enforce athlete benchmark completion",
          "Verify athletes are rostered correctly across all teams",
          "Double-check routine numbers to ensure no scoring issues",
          "Confirm all legality videos are submitted and up to date",
          "Manage USASF athlete and staff registration and compliance",
          "Submit structured weekly floor performance report to Program Director",
        ],
      },
      {
        title: "MONTHLY TO DO",
        items: [
          "Submit structured monthly report to Program Director: attendance, floor performance, team morale, parent communication log",
          "Provide input on employee reviews for coaching staff",
          "Report Flyer Flex and specialized class attendance summary",
          "Support tryout execution and floor management under Director leadership",
          "Assess overall team morale and athlete engagement on the floor",
          "Provide team placement recommendations to Program Director (Director has final approval)",
        ],
      },
      {
        title: "CHOREOGRAPHY & MUSIC DEADLINES",
        items: [
          "Schedule all music and choreography from the Program Director-approved vendor list only",
          "All music and choreography must be finalized prior to team reveals — no exceptions",
          "All teams must have music and choreography completed before first competition — non-negotiable",
          "Submit full choreography and music scheduling timeline to Program Director at season start",
        ],
      },
    ],
    owns: [
      "Complete ownership of the Half Year and Full Season Prep programs — full authority over growth, operations, and culture",
      "All day-to-day floor execution, schedule management, and real-time coaching direction",
      "Staff accountability: ensuring coaches submit plans, complete reports, and follow systems",
      "First-level corrections and consequences for staff non-compliance",
      "Athlete attendance tracking, management, and enforcement of Director-set standards",
      "Active enforcement of Flyer Flex completion, benchmarks, and compliance requirements",
      "Day-to-day parent communication and initial staff conversations",
      "Structured daily and weekly reporting to Program Director",
      "Athlete rostering verification and routine legality compliance",
    ],
    requires: [
      "Practice plan approval — Director approves and audits; ASD ensures execution",
      "Final team placements, crossovers, or any roster changes",
      "Attendance exceptions or final attendance decisions",
      "Athlete placement, development, or progression conversations with parents",
      "Hiring, firing, or any formal disciplinary action involving staff",
      "Creating, changing, or overriding any program system or policy",
      "Finalizing competition schedules or committing to major budget items",
      "Any communication that affects the entire program or brand reputation",
      "Offering or negotiating any staff compensation or role changes",
      "Injury reports or medical follow-ups (Program Director manages these)",
    ],
    requiresLabel: "REQUIRES PROGRAM DIRECTOR APPROVAL — DO NOT PROCEED WITHOUT IT",
  },
  {
    id: "tumbling-director",
    title: "TUMBLING DIRECTOR",
    subtitle: "Curriculum · Staff Management · Athlete Progression · Parent Communication",
    color: NAVY,
    description:
      "The Tumbling Director is responsible for developing and executing the tumbling curriculum under the direction of the Program Director. This role manages tumbling staff, runs classes, communicates with parents, trains staff, and ensures athlete progress reports are submitted consistently. The Tumbling Director provides clear direction to parents on leveling up in classes and submits all level-up requests to the Program Director for final approval.",
    sections: [
      {
        title: "DAILY TO DO",
        items: [
          "Run assigned tumbling classes",
          "Ensure coaches are executing the approved curriculum on the floor",
          "Monitor athlete safety and technique standards",
          "Respond to parent inquiries regarding tumbling classes",
          "Ensure attendance is taken for all tumbling classes",
        ],
      },
      {
        title: "WEEKLY TO DO",
        items: [
          "Attend Director-level strategy meeting — know class metrics and attendance",
          "Review athlete progress across all tumbling classes",
          "Ensure all tumbling staff submit athlete progress reports",
          "Submit weekly class attendance and performance summary to Program Director",
          "Identify athletes ready for level-up and prepare requests for Program Director",
        ],
      },
      {
        title: "MONTHLY TO DO",
        items: [
          "Submit full attendance and progression report to Program Director",
          "Review curriculum effectiveness and update as needed",
          "Meet with tumbling staff to address performance and consistency",
          "Communicate with parents regarding athlete progression and next steps",
        ],
      },
      {
        title: "ADDITIONAL RESPONSIBILITIES",
        items: [
          "Train and develop tumbling coaching staff",
          "Create and maintain parent-facing materials explaining class levels and progression",
          "Submit all athlete level-up requests to Program Director for approval",
          "Ensure all staff are consistently submitting athlete progress reports",
          "Develop new curriculum material and present to Program Director for approval",
        ],
      },
    ],
    owns: [
      "Running and overseeing all tumbling classes",
      "Managing tumbling coaching staff day-to-day",
      "Communicating with parents about athlete progress and class expectations",
      "Ensuring all staff submit athlete progress reports on time",
      "Identifying athletes ready for level-up and preparing requests",
      "Submitting weekly attendance and progression reports to Program Director",
      "Training tumbling staff on curriculum and technique standards",
    ],
    requires: [
      "All athlete level-up approvals (must be submitted to Program Director)",
      "Any changes to the tumbling curriculum or class structure",
      "Hiring, firing, or formal disciplinary action involving tumbling staff",
      "Creating new parent-facing materials or communications at program level",
      "Any financial commitments or equipment purchases",
    ],
    requiresLabel: "REQUIRES PROGRAM DIRECTOR APPROVAL — DO NOT PROCEED WITHOUT IT",
  },
  {
    id: "flyer-flex-director",
    title: "FLYER FLEX DIRECTOR",
    subtitle: "Flexibility Instruction · Attendance · Curriculum Support · Communication",
    color: RED,
    description:
      "The Flyer Flex Director teaches flexibility classes for Cheer Florida, tracks attendance, and keeps the coaching staff and All-Star Director informed of absences. This role also contributes to improving the Flyer Flex curriculum under the direction of the Program Director.",
    sections: [
      {
        title: "DAILY TO DO",
        items: [
          "Teach assigned Flyer Flex classes",
          "Take attendance at every class",
          "Notify All-Star Director and relevant coaches of any absences same day",
          "Monitor athlete flexibility progress and technique",
          "Ensure a safe and productive class environment",
          "Communicate any recurring attendance issues to All-Star Director",
        ],
      },
      {
        title: "WEEKLY TO DO",
        items: [
          "Attend Director-level strategy meeting — know class numbers and attendance",
          "Submit weekly attendance report to All-Star Director and Program Director",
          "Review athlete progress and identify areas for curriculum improvement",
        ],
      },
      {
        title: "MONTHLY TO DO",
        items: [
          "Submit full monthly attendance summary to Program Director",
          "Review and assess curriculum effectiveness",
          "Provide feedback on athlete flexibility improvements to coaching staff",
        ],
      },
    ],
    owns: [
      "Teaching and managing all Flyer Flex classes",
      "Taking and submitting attendance for every class",
      "Notifying All-Star Director and coaches of absences same day",
      "Monitoring athlete flexibility progress",
      "Submitting weekly and monthly attendance reports",
      "Contributing curriculum improvement ideas to Program Director",
    ],
    requires: [
      "Any changes to the Flyer Flex curriculum or class structure",
      "Adding or removing athletes from classes",
      "Any parent communications beyond individual class updates",
      "Financial commitments or equipment purchases",
      "Hiring, firing, or disciplinary action involving any staff",
    ],
    requiresLabel: "REQUIRES PROGRAM DIRECTOR APPROVAL — DO NOT PROCEED WITHOUT IT",
  },
  {
    id: "team-coach",
    title: "TEAM COACH",
    subtitle: "Athlete Development · Routine Execution · Professionalism · Compliance",
    color: NAVY,
    description:
      "The Team Coach is responsible for executing approved practice plans, developing athletes, enforcing program culture, and managing team communication and competition readiness. Team Coaches report to the All-Star Director and operate within the systems set by the Program Director.",
    sections: [
      {
        title: "DAILY TO DO",
        items: [
          "Execute the Program Director-approved practice plan — no deviations without ASD approval",
          "Take attendance and submit to All-Star Director same day",
          "Enforce practice attire, behavior, and professionalism standards",
          "Submit end-of-day report to All-Star Director following each practice",
          "Full-outs are mandatory and must be run regularly once routines are set",
        ],
      },
      {
        title: "WEEKLY TO DO",
        items: [
          "Submit practice plan to All-Star Director for review prior to practice",
          "Track and document athlete skill progress in team binder",
          "Communicate with parents regarding team matters and attendance",
          "Attend Director-level strategy meeting when required",
        ],
      },
      {
        title: "MONTHLY TO DO",
        items: [
          "Submit monthly team performance summary to All-Star Director",
          "Review athlete development and flag any progression concerns to ASD",
          "Participate in monthly staff meeting — required attendance",
        ],
      },
      {
        title: "COMPETITION REQUIREMENTS",
        items: [
          "Arrive at all competitions on time — leaving early or arriving late is not permitted without Program Director approval",
          "Ensure all athletes are competition-ready: uniforms, hair, makeup, and compliance",
          "Confirm all legality videos are submitted and up to date before competition",
          "Maintain professional conduct at all competitions — you represent Cheer Florida",
        ],
      },
    ],
    owns: [
      "Day-to-day coaching and athlete instruction during your assigned practice times",
      "Enforcing practice attire, behavior, and professionalism standards on the floor",
      "Direct communication with your athletes and their parents regarding team matters",
      "Documenting attendance, skill progress, and team notes in your team binder",
      "Teaching technique and conditioning within the approved practice plan",
      "First-level corrections and accountability for athlete behavior during practice",
    ],
    requires: [
      "Any changes to the approved practice plan or routine structure",
      "Athlete skill progressions or level-up decisions",
      "Attendance exceptions or decisions to excuse an absence",
      "Any formal communication to parents regarding athlete placement or team changes",
      "Disciplinary actions beyond a verbal correction",
      "Committing to any outside training, privates, or events on behalf of the gym",
      "Leaving competition early or arriving late for any reason",
    ],
    requiresLabel: "REQUIRES ALL-STAR DIRECTOR OR PROGRAM DIRECTOR APPROVAL — DO NOT PROCEED WITHOUT IT",
  },
  {
    id: "class-coach",
    title: "CLASS COACH",
    subtitle: "Tumbling · Flexibility · Jumps · Specialty Classes · Curriculum Execution",
    color: RED,
    description:
      "The Class Coach is responsible for teaching and managing all assigned specialty classes including Tumbling, Flyer Flex, Jump Class, and any other specialty program class. Class Coaches execute the curriculum developed and approved by the Program Director and the relevant program director. Do not progress an athlete until they are absolutely ready.",
    sections: [
      {
        title: "CLASS RESPONSIBILITIES",
        items: [
          "Arrive on time and remain present for the full duration of every class",
          "Execute the approved class curriculum — no deviations without director approval",
          "Prioritize technique above all else — do not rush progressions",
          "Enforce proper class attire, hair up, no jewelry, and no gum",
          "Take accurate attendance at every class and submit to director same day",
          "Ensure no athlete is left alone at the gym after class",
          "Maintain conditioning boards and ensure athletes complete conditioning after privates",
        ],
      },
      {
        title: "ATHLETE PROGRESSION & REPORTING",
        items: [
          "Track and document each athlete's skill progression in their progress report",
          "Submit athlete progress reports on the schedule set by the program director",
          "Do not recommend a level-up without documented evidence of readiness",
          "All level-up requests must be submitted to the Program Director for approval",
          "Set clear, honest expectations with parents regarding athlete progression timelines",
          "Notify director immediately of any injury, behavioral issue, or safety concern",
        ],
      },
      {
        title: "PARENT COMMUNICATION",
        items: [
          "Maintain professional communication with all class parents",
          "Have all parent contact information on file for your assigned classes",
          "Communicate attendance concerns, skill updates, and any issues directly to parents",
          "Do not discuss athlete placement, level changes, or program policy with parents — escalate to director",
          "Maintain strictly professional relationships with all athletes at all times",
          "Do not offer rides to athletes under any circumstances",
        ],
      },
    ],
    owns: [
      "Teaching and instructing athletes within the approved class curriculum",
      "Enforcing class attire, behavior, and professionalism standards",
      "Taking and submitting attendance for every class",
      "Documenting athlete skill progress and reporting to your director",
      "Direct communication with class parents regarding attendance and general updates",
      "First-level corrections and accountability for athlete behavior during class",
    ],
    requires: [
      "Any changes to the approved class curriculum or progression structure",
      "Athlete level-up or level-down recommendations (must be submitted formally)",
      "Attendance exceptions or excused absences",
      "Any formal communication to parents regarding placement or program policy",
      "Disciplinary actions beyond a verbal correction",
      "Committing to outside training or events on behalf of the gym",
    ],
    requiresLabel: "REQUIRES DIRECTOR OR PROGRAM DIRECTOR APPROVAL — DO NOT PROCEED WITHOUT IT",
  },
  {
    id: "events-director",
    title: "DIRECTOR OF EVENTS, CAMPS & FUN",
    subtitle: "Camps · Pre-Team · Events · New Program Development",
    color: NAVY,
    description:
      "The Director of Events, Camps & Fun is responsible for the planning, staffing, execution, and marketing of all out-of-school activity camps and special events at Cheer Florida, including Summer Camp, Winter Break Camp, and Spring Break Camp. This role also owns both sessions of the Pre-Team program, leads Kids Night Out events, and is responsible for developing and launching two new programs: Mommy & Me and Home School / Open Gym.",
    sections: [
      {
        title: "CAMPS — PLANNING & OPERATIONS",
        items: [
          "Oversee Summer Camp — full planning, staffing, scheduling, and daily operations",
          "Plan and schedule Winter Break Camp, Spring Break Camp, and any school day-off camps",
          "Develop the full camp schedule, themed activities, and daily programming for each camp",
          "Set and manage the camp budget — submit to Gym Manager and Gym Owners for approval",
          "Recruit, hire, and assign camp staff — all hiring submitted to Program Director for approval",
          "Take and submit daily attendance for all campers; submit daily recap report to Gym Manager",
        ],
      },
      {
        title: "PRE-TEAM PROGRAM — OWNERSHIP",
        items: [
          "Oversee both sessions of the Pre-Team program (10-week class sessions)",
          "Pre-Team teaches a routine and performs at a showcase at the end of each 10-week session",
          "Manage all Pre-Team scheduling, staffing, and daily operations",
          "Oversee athlete enrollment, parent communication, and retention for Pre-Team",
          "Ensure all Pre-Team athletes are prepared and ready for the end-of-session showcase",
          "Submit Pre-Team attendance and progress reports to Program Director",
        ],
      },
      {
        title: "KIDS NIGHT OUT & SPECIAL EVENTS",
        items: [
          "Plan and execute a minimum of 8 Kids Night Out events per 11/12-month season",
          "Develop themes, activities, and programming for each Kids Night Out",
          "Manage staffing, registration, and parent communication for each event",
          "Market each Kids Night Out through social media, email, and gym communications",
          "Submit event recap and attendance report to Gym Manager after each event",
        ],
      },
      {
        title: "NEW PROGRAMS — MOMMY & ME / HOME SCHOOL",
        items: [
          "Develop and launch the Mommy & Me program from the ground up",
          "Build curriculum, class structure, and age-appropriate programming",
          "Develop and launch Home School classes and Open Gym programming",
          "Lead marketing efforts targeting the home school community",
          "Track attendance, growth, and feedback; report monthly to Program Director",
        ],
      },
    ],
    owns: [
      "Day-to-day camp operations, daily schedule management, and staff direction during camps",
      "Full ownership of both Pre-Team program sessions — scheduling, operations, parent communication",
      "Planning and execution of all Kids Night Out events (minimum 8 per season)",
      "Daily attendance tracking and parent communication for camps, Pre-Team, and events",
      "Marketing and promotional efforts for camps, Pre-Team, Kids Night Out, and new programs",
      "Development and launch planning for Mommy & Me and Home School / Open Gym programs",
    ],
    requires: [
      "All staff hiring, firing, or disciplinary actions",
      "Camp, Pre-Team, and new program budget approvals and any financial commitments",
      "New program launch — curriculum, pricing, and schedule must be approved",
      "Any changes to the approved camp or Pre-Team schedule or programming structure",
      "Any communication that affects the gym brand or program reputation",
      "Enrollment pricing, discounts, or refund decisions",
    ],
    requiresLabel: "REQUIRES GYM MANAGER OR PROGRAM DIRECTOR APPROVAL — DO NOT PROCEED WITHOUT IT",
  },
];

const hierarchy = [
  { level: "1", tier: "OWNERSHIP", role: "Gym Owners", responsibilities: "Final financial decisions, salary approvals, facility, business strategy." },
  { level: "2", tier: "EXECUTIVE", role: "Director of Program Development & Operations", responsibilities: "Full operational authority: systems, hiring recommendations, KPIs, all program decisions, final operational say." },
  { level: "3", tier: "ADMIN", role: "Gym Manager", responsibilities: "Scheduling, gym communications, pro-shop operations, front desk, coaches assigned teams." },
  { level: "4", tier: "OPERATIONS", role: "All-Star Director", responsibilities: "Floor execution, athlete rostering, routine legality, practice plan input, USASF compliance, parent communication." },
  { level: "4", tier: "OPERATIONS", role: "Tumbling Director", responsibilities: "Tumbling curriculum, staff management, athlete progression, parent communication, level-up requests to Program Director." },
  { level: "4", tier: "OPERATIONS", role: "Flyer Flex Director", responsibilities: "Flexibility instruction, attendance tracking, absence reporting to ASD and coaches, curriculum input." },
  { level: "4", tier: "OPERATIONS", role: "Director of Events, Camps & Fun", responsibilities: "Camps, Pre-Team program, Kids Night Out, Mommy & Me, Home School/Open Gym development." },
  { level: "5", tier: "STAFF", role: "Team Coaches", responsibilities: "Execute approved practice plans, develop athletes, enforce program culture, manage team communication and competition readiness." },
  { level: "5", tier: "STAFF", role: "Class Coaches", responsibilities: "Teach tumbling, flexibility, jumps, and specialty classes; track athlete progression, take attendance, report to program director." },
];

function RoleCard({ role }: { role: (typeof roles)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const [showBoundaries, setShowBoundaries] = useState(false);

  return (
    <div id={role.id} className="mb-6 border border-white/10 bg-white/[0.03] rounded-sm overflow-hidden">
      <div
        className="px-6 py-5 cursor-pointer flex items-start justify-between gap-4"
        style={{ borderLeft: `4px solid ${role.color}` }}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-1 min-w-0">
          <p className="text-xs tracking-[0.18em] mb-1 font-mono" style={{ color: role.color }}>
            {role.subtitle}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {role.title}
          </h2>
        </div>
        <div className="flex-shrink-0 mt-1">
          {expanded ? <ChevronUp className="text-white/40 w-5 h-5" /> : <ChevronDown className="text-white/40 w-5 h-5" />}
        </div>
      </div>

      {expanded && (
        <div className="px-6 pb-6">
          <p className="text-sm text-white/60 leading-relaxed mb-6 border-l-2 border-white/10 pl-4">
            {role.description}
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {role.sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs tracking-[0.15em] font-semibold mb-3 pb-2 border-b border-white/10 font-mono" style={{ color: role.color }}>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-white/70 leading-relaxed">
                      <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowBoundaries(!showBoundaries)}
            className="text-xs tracking-[0.15em] px-4 py-2 border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors rounded-sm font-mono"
          >
            {showBoundaries ? "HIDE" : "VIEW"} AUTHORITY & BOUNDARIES
          </button>

          {showBoundaries && (
            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs tracking-[0.15em] font-semibold mb-3 pb-2 border-b border-emerald-500/30 text-emerald-400 font-mono">
                  FULL AUTONOMY — YOU OWN THESE
                </h3>
                <ul className="space-y-2">
                  {role.owns.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-white/70 leading-relaxed">
                      <span className="flex-shrink-0 text-emerald-400 font-bold">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {role.requires.length > 0 && (
                <div>
                  <h3 className="text-xs tracking-[0.15em] font-semibold mb-3 pb-2 border-b border-red-500/30 text-red-400 font-mono">
                    {role.requiresLabel}
                  </h3>
                  <ul className="space-y-2">
                    {role.requires.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-white/70 leading-relaxed">
                        <span className="flex-shrink-0 text-red-400 font-bold">✘</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function CFA() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { label: "GYM OWNERS", id: "gym-owners" },
    { label: "PROGRAM DIRECTOR", id: "program-director" },
    { label: "GYM MANAGER", id: "gym-manager" },
    { label: "ALL-STAR DIRECTOR", id: "all-star-director" },
    { label: "TUMBLING", id: "tumbling-director" },
    { label: "FLYER FLEX", id: "flyer-flex-director" },
    { label: "TEAM COACH", id: "team-coach" },
    { label: "CLASS COACH", id: "class-coach" },
    { label: "EVENTS & CAMPS", id: "events-director" },
    { label: "HIERARCHY", id: "hierarchy" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#0B0F1A", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(11,15,26,0.97)" : "rgba(11,15,26,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <img src={LOGO_URL} alt="Cheer Florida" className="h-8 object-contain" />
          <div className="hidden xl:flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[10px] tracking-[0.12em] text-white/50 hover:text-white transition-colors font-mono"
              >
                {item.label}
              </button>
            ))}
            <a
              href={CFA_PDF_URL}
              download
              className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] px-3 py-1.5 rounded-sm text-white transition-colors font-mono"
              style={{ background: RED }}
            >
              <Download className="w-3 h-3" /> PDF
            </a>
          </div>
          <button className="xl:hidden text-white/60 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="xl:hidden border-t border-white/10 px-4 py-4 space-y-3" style={{ background: "rgba(11,15,26,0.98)" }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-xs tracking-[0.15em] text-white/60 hover:text-white py-1 font-mono"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <div className="absolute inset-0">
          <img src={HERO_URL} alt="" className="w-full h-full object-cover opacity-40" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(11,15,26,0.97) 45%, rgba(11,15,26,0.55) 75%, rgba(11,15,26,0.15) 100%)" }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex items-center" style={{ minHeight: "520px" }}>
          <div className="flex items-center justify-between w-full gap-8">
            {/* Left: text */}
            <div className="flex-1 py-16">
              <p className="text-xs tracking-[0.3em] mb-3 font-mono" style={{ color: RED }}>INTERNAL OPERATIONS DOCUMENT</p>
              <h1 className="font-bold tracking-wider text-white leading-none mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)" }}>
                ROLE DEFINITIONS
              </h1>
              <h1 className="font-bold tracking-wider leading-none mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", color: RED }}>
                &amp; HIERARCHY
              </h1>
              <p className="text-white/50 text-sm mb-6">Cheer Florida All-Star Program — Staff Role &amp; Accountability Guide</p>
              <a
                href={CFA_PDF_URL}
                download
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] px-5 py-2.5 text-white rounded-sm font-mono"
                style={{ background: RED }}
              >
                <Download className="w-3.5 h-3.5" /> DOWNLOAD FULL DOCUMENT (PDF)
              </a>
            </div>
            {/* Right: big logo */}
            <div className="hidden md:flex flex-shrink-0 items-center justify-center" style={{ width: "480px" }}>
              <img
                src={LOGO_URL}
                alt="Cheer Florida"
                style={{ width: "460px", maxWidth: "100%", filter: "drop-shadow(0 0 40px rgba(185,28,28,0.4)) drop-shadow(0 0 80px rgba(30,58,138,0.3))" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="border-l-4 pl-6 py-2 mb-12" style={{ borderColor: RED }}>
          <p className="text-xs tracking-[0.2em] mb-2 font-mono" style={{ color: RED }}>DOCUMENT PURPOSE</p>
          <p className="text-white/60 text-sm leading-relaxed max-w-3xl">
            This document defines the position agreements, role responsibilities, authority boundaries, and organizational hierarchy for Cheer Florida All-Star Program. Every staff member is expected to know their role, operate within their defined authority, and execute the systems established by program leadership. This is not a suggestion guide — it is the operational standard.
          </p>
        </div>

        {roles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}

        {/* Hierarchy Table */}
        <div id="hierarchy" className="mt-16 mb-8">
          <p className="text-xs tracking-[0.3em] mb-2 font-mono" style={{ color: RED }}>PROGRAM STRUCTURE</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-white mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            PROGRAM HIERARCHY & COMMUNICATION FLOW
          </h2>
          <p className="text-white/40 text-sm mb-8">Reporting Structure · Decision Authority · Escalation Paths</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: RED }}>
                  <th className="px-4 py-3 text-left text-white text-xs tracking-[0.15em] font-mono">LEVEL</th>
                  <th className="px-4 py-3 text-left text-white text-xs tracking-[0.15em] font-mono">TIER</th>
                  <th className="px-4 py-3 text-left text-white text-xs tracking-[0.15em] font-mono">ROLE</th>
                  <th className="px-4 py-3 text-left text-white text-xs tracking-[0.15em] font-mono">CORE RESPONSIBILITIES</th>
                </tr>
              </thead>
              <tbody>
                {hierarchy.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <td className="px-4 py-4 font-bold text-white text-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{row.level}</td>
                    <td className="px-4 py-4">
                      <span className="text-[10px] tracking-[0.15em] px-2 py-1 rounded-sm font-mono" style={{ background: "rgba(185,28,28,0.2)", color: "#F87171" }}>
                        {row.tier}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-semibold text-white">{row.role}</td>
                    <td className="px-4 py-4 text-white/60 leading-relaxed">{row.responsibilities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 border border-white/10 bg-white/[0.03] p-6 rounded-sm">
            <p className="text-xs tracking-[0.2em] mb-3 font-mono" style={{ color: RED }}>COMMUNICATION FLOW</p>
            <p className="text-white/70 text-sm leading-relaxed">
              <span className="text-white font-semibold">THE RULE:</span> Gym Owners hold final financial authority. The Program Director has final operational say. Every director owns their domain. Coaches execute the plan. Everyone works within the system and comes to meetings prepared.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={LOGO_URL} alt="Cheer Florida" className="h-7 object-contain opacity-60" />
          <p className="text-xs text-white/30 tracking-[0.1em] font-mono">
            CHEER FLORIDA ALL-STAR PROGRAM — CONFIDENTIAL INTERNAL DOCUMENT
          </p>
        </div>
      </footer>
    </div>
  );
}
