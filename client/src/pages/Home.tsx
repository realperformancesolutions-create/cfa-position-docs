/* ============================================================
   WOODLANDS ELITE — POSITION AGREEMENTS & HIERARCHY
   Design: Tactical Command Center
   Dark #0A0A0A, Crimson #C8102E, Bebas Neue + DM Sans
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Download, ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const WE_PDF_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/EryPe9N36963woYHYBNvb9/Woodlands_Elite_Position_Agreements_and_Hierarchy_76b666eb.pdf";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/EryPe9N36963woYHYBNvb9/woodlands_logo_transparent_a88a4feb.png";

const HERO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/EryPe9N36963woYHYBNvb9/we-hero-banner-AC9okQg2j5vFRLU6HwkSUi.webp";

// ── Data ──────────────────────────────────────────────────────────────────────

const roles = [
  {
    id: "allstar-director",
    code: "ROLE-01",
    title: "ALL-STAR DIRECTOR",
    subtitle: "Program Leadership · Floor Operations · Staff Development · Athlete Growth · Competitive Excellence",
    overview:
      "The All-Star Director is the highest-ranking program authority at Woodlands Elite Cheer Company. This position carries full ownership of the All-Star program's direction, culture, competitive performance, and staff accountability across every level and every team. The All-Star Director does not simply manage — they lead. They set the standard, build the systems, develop the coaches, and drive the results that define this program's reputation. Every Level Director, every coach, and every athlete on the floor operates within the framework this role establishes. The All-Star Director reports directly to gym ownership and works in close operational partnership with the Operations Manager.",
    tagline: "If it happens on the floor, it is this role's responsibility. There are no excuses — only solutions.",
    sections: [
      {
        title: "PROGRAM LEADERSHIP — DAILY",
        items: [
          "Daily office check-in — review schedule, communications, and open items",
          "Manage and respond to all program-related emails",
          "Oversee all All-Star team practices and ensure floor schedule is followed",
          "Provide real-time coaching direction and feedback to Level Directors and coaches",
          "Ensure all practice plans are approved and being executed correctly on the floor",
          "Monitor athlete safety, conduct, and program culture standards",
          "Handle escalated parent concerns and staff issues — first point of contact",
          "Conduct injury report follow-ups and ensure all incidents are documented",
          "Monitor pro-shop operations and flag any issues",
          "Check team and class attendance — address gaps immediately",
          "Coach 2–3 assigned teams directly",
          "Submit structured end-of-day report to gym ownership",
        ],
      },
      {
        title: "PROGRAM LEADERSHIP — WEEKLY",
        items: [
          "Lead Monday all-staff meeting — agenda, accountability, and culture",
          "Attend weekly strategy meeting with Operations Manager and ownership",
          "Attend weekly operations meeting",
          "Review all Level Director weekly reports — attendance, athlete progress, issues",
          "Review pro-shop sales reports",
          "Verify all athletes are rostered correctly across all teams and levels",
          "Double-check routine numbers to ensure no scoring issues",
          "Confirm all legality videos are submitted and up to date",
          "Review floor performance reports from all Level Directors",
          "Manage USASF athlete and staff registration and compliance",
        ],
      },
      {
        title: "STAFF DEVELOPMENT",
        items: [
          "Lead all coach and Level Director training — set the development calendar",
          "Conduct regular staff evaluations and provide structured feedback",
          "Build and maintain individual coach development plans",
          "Identify coaching gaps and implement corrective training",
          "Ensure all coaches are certified and meet USASF requirements",
          "Enforce staff accountability standards — fines, write-ups, and escalations",
          "Redirect staff escalations requiring discipline to ownership",
          "New hire onboarding and orientation — ensuring staff are trained on systems and standards",
          "C.I.P. (Coach Intern Program) rotation management",
        ],
      },
      {
        title: "ATHLETE & PROGRAM GROWTH",
        items: [
          "Drive athlete retention across all levels — track and address drop-off patterns",
          "Lead tryout structure, evaluation parameters, and team placement philosophy",
          "Oversee choreography and music production scheduling for all teams",
          "Ensure all music and choreography is finalized before team reveals",
          "All teams must have music and choreography completed before first competition",
          "Develop and implement athlete progression standards across all levels",
          "Collaborate with Level Directors on athlete crossover and placement decisions",
          "Team choreography oversight — ensuring all teams have choreography completed on schedule",
          "Double-checking all team numbers to ensure scoring and legality compliance",
        ],
      },
      {
        title: "MONTHLY TO DO",
        items: [
          "Submit comprehensive monthly report: attendance, athlete progress, team performance",
          "Review Key Performance Indicators (KPIs): retention, attendance trends, drop-off",
          "Pull and review total class enrollment numbers",
          "Pull and review total All-Star program numbers",
          "Conduct individual check-ins with all Level Directors",
          "Review parent communication logs — ensure no unresolved issues",
          "Assess overall team morale and athlete engagement across all levels",
          "Approve or deny level-up and crossover requests from Level Directors",
        ],
      },
      {
        title: "QUARTERLY / SEMI-ANNUALLY / ANNUALLY",
        items: [
          "QUARTERLY: Review C.I.P. rotation list and update assignments",
          "QUARTERLY: Track salaried employee performance against compensation thresholds",
          "SEMI-ANNUALLY: Conduct comprehensive staff evaluations with ownership",
          "ANNUALLY: Conduct full employee reviews",
          "ANNUALLY: Prepare choreography and music expense report; select and schedule choreographers",
          "ANNUALLY: Plan and execute stunt camp",
          "ANNUALLY: Update employee coaching eligibility and certification systems",
          "ANNUALLY: Prepare and deliver staff training presentation",
          "Lead mid-season team evaluations and adjustments",
          "Prepare gym floor for major showcases and competitions",
          "Finalize tryout structure, evaluation rubrics, and placement philosophy",
          "Deliver annual State of the Program presentation to ownership",
        ],
      },
    ],
    autonomy: [
      "Full operational leadership of all All-Star teams and programs",
      "All day-to-day floor execution, schedule management, and real-time coaching direction",
      "Staff accountability — ensuring coaches submit practice plans, complete reports, and follow systems",
      "First-level corrections and consequences for staff non-compliance",
      "Active enforcement of attendance standards and athlete compliance requirements",
      "Day-to-day parent communication and initial staff conversations",
      "Structured daily and weekly reporting to ownership",
      "Athlete rostering verification and routine legality compliance",
      "Scheduling all music production and choreography from the approved vendor list",
      "Level Director oversight — reviewing reports, directing performance, and coaching development",
      "New hire onboarding and orientation",
      "Team choreography oversight",
      "C.I.P. (Coach Intern Program) rotation management",
    ],
    approval: [
      "Final team placements, crossovers, or any roster changes",
      "Attendance exceptions or final attendance decisions",
      "Athlete placement, development, or progression conversations with parents",
      "Hiring, firing, or any formal disciplinary action involving staff",
      "Creating, changing, or overriding any program system or policy",
      "Finalizing competition schedules or committing to major budget items",
      "Any communication that affects the entire program or gym brand reputation",
      "Offering or negotiating any staff compensation or role changes",
      "Injury reports or medical follow-ups — ownership manages these",
    ],
  },
  {
    id: "level-director",
    code: "ROLE-02",
    title: "LEVEL DIRECTOR",
    subtitle: "Level-Specific Leadership · Team Oversight · Athlete Development · Floor Accountability",
    overview:
      "The Level Director is the primary authority for their assigned competitive level (Levels 1–6) at Woodlands Elite. This is not a supervisory title — it is a full ownership role. The Level Director is accountable for every athlete's development, every coach's performance, every parent interaction, and every competitive result within their level. They run the floor, enforce the standards, and ensure that every practice is purposeful and every team is prepared. Level Directors report directly to the All-Star Director, execute the systems set by program leadership, and are expected to coach teams within their level in addition to their director responsibilities.",
    tagline: "A Level Director does not wait to be told what needs fixing — they see it, own it, and handle it.",
    sections: [
      {
        title: "FLOOR LEADERSHIP — DAILY",
        items: [
          "Arrive before practice begins — floor is set, coaches are briefed",
          "Ensure all coaches within your level have submitted and are executing approved practice plans",
          "Provide real-time feedback and direction to coaches during practice",
          "Monitor athlete attendance — report absences and flag patterns immediately",
          "Enforce all program culture standards on the floor",
          "Handle parent questions and concerns at the level — escalate only when necessary",
          "Submit end-of-practice report to All-Star Director",
        ],
      },
      {
        title: "TEAM & ATHLETE MANAGEMENT — WEEKLY",
        items: [
          "Attend weekly Level Director meeting with All-Star Director",
          "Submit weekly report: attendance, athlete progress, coaching performance, open issues",
          "Review and verify all team rosters — flag any discrepancies",
          "Confirm routine legality and scoring compliance for all teams in your level",
          "Conduct individual check-ins with each coach in your level",
          "Identify athletes who need additional support or are at risk of dropping",
        ],
      },
      {
        title: "COACHING OVERSIGHT",
        items: [
          "Review and approve all practice plans before practice begins",
          "Evaluate coach performance — provide structured, documented feedback",
          "Identify coaching gaps and escalate development needs to All-Star Director",
          "Ensure all coaches in your level are USASF certified and compliant",
          "Hold coaches accountable to attendance, punctuality, and conduct standards",
          "Mentor newer coaches within your level",
        ],
      },
      {
        title: "COMPETITIVE PREPARATION",
        items: [
          "Ensure all teams in your level have finalized routines before the first competition",
          "Verify music and choreography are complete and competition-ready",
          "Conduct pre-competition run-throughs and performance evaluations",
          "Submit competition readiness report to All-Star Director",
          "Debrief coaches and athletes after every competition",
          "Identify and implement adjustments based on competition results",
        ],
      },
      {
        title: "MONTHLY / SEASONAL",
        items: [
          "Submit monthly level report: team performance, athlete progress, coaching development",
          "Conduct athlete evaluations — identify crossover candidates and level-up requests",
          "Submit crossover and level-up recommendations to All-Star Director for approval",
          "Participate in all-staff evaluations and development sessions",
          "Contribute to tryout evaluation process for your level",
        ],
      },
    ],
    autonomy: [
      "Full floor ownership within your assigned level",
      "Day-to-day coaching direction and real-time feedback",
      "Practice plan review and approval within your level",
      "First-level parent communication and issue resolution",
      "Athlete attendance monitoring and initial follow-up",
      "Coach accountability and first-level performance conversations",
      "Routine legality and scoring compliance verification",
      "Weekly reporting to All-Star Director",
    ],
    approval: [
      "Athlete crossovers, level-ups, or roster changes — requires All-Star Director approval",
      "Formal coaching write-ups or disciplinary actions",
      "Any communication that affects the broader program",
      "Attendance exceptions or policy overrides",
      "Competition schedule changes or additions",
      "Any financial commitments or vendor engagements",
    ],
  },
  {
    id: "operations-manager",
    code: "ROLE-03",
    title: "OPERATIONS MANAGER",
    subtitle: "Gym Operations · Administration · Scheduling · Communications · Financial Oversight Support",
    overview:
      "The Operations Manager is the operational backbone of Woodlands Elite Cheer Company. While the All-Star Director owns the floor, the Operations Manager owns everything that makes the floor possible — scheduling, enrollment, parent communications, compliance, financials, and facility management. This role demands precision, proactive problem-solving, and the ability to manage multiple systems simultaneously without dropping a single detail. The Operations Manager works in close partnership with the All-Star Director, serves as the primary point of contact for families and administrative staff, and reports directly to gym ownership.",
    tagline: "A well-run operation is invisible — and that invisibility is the standard this role is held to.",
    sections: [
      {
        title: "DAILY OPERATIONS",
        items: [
          "Open and manage the front desk — first point of contact for all families and visitors",
          "Monitor and respond to all administrative emails and phone inquiries",
          "Process enrollments, registrations, and schedule changes",
          "Manage daily attendance records and flag issues to All-Star Director",
          "Coordinate facility setup and ensure gym is competition-ready for practice",
          "Handle all parent billing inquiries and payment processing",
          "Submit daily operations summary to ownership",
        ],
      },
      {
        title: "WEEKLY OPERATIONS",
        items: [
          "Attend weekly strategy meeting with All-Star Director and ownership",
          "Prepare and distribute weekly communications to families",
          "Review all enrollment numbers and flag retention concerns",
          "Coordinate scheduling for all program activities — practices, meetings, events",
          "Reconcile weekly revenue and submit financial summary to ownership",
          "Ensure all staff compliance documents are current",
          "Manage pro-shop inventory and sales reporting",
        ],
      },
      {
        title: "ENROLLMENT & COMMUNICATIONS",
        items: [
          "Manage all new family onboarding — enrollment packets, waivers, payment setup",
          "Maintain accurate athlete and family database",
          "Send all program-wide communications — schedule changes, events, competitions",
          "Coordinate with All-Star Director on athlete placement communications",
          "Manage social media and marketing calendar in coordination with ownership",
          "Handle all competition registration logistics — entries, fees, travel coordination",
        ],
      },
      {
        title: "FINANCIAL & COMPLIANCE",
        items: [
          "Process all tuition, competition fees, and program payments",
          "Track accounts receivable — follow up on outstanding balances",
          "Maintain all USASF registration and compliance records for athletes and staff",
          "Manage vendor relationships and purchase orders",
          "Prepare monthly financial reports for ownership review",
          "Ensure all facility permits, insurance, and compliance documents are current",
        ],
      },
      {
        title: "MONTHLY / ANNUALLY",
        items: [
          "Submit comprehensive monthly operations report to ownership",
          "Review and update all program policies and operational procedures",
          "Coordinate annual staff onboarding and compliance training",
          "Manage competition season logistics from registration through travel",
          "Prepare annual budget projections in collaboration with ownership",
          "Conduct annual review of all vendor contracts and service agreements",
        ],
      },
    ],
    autonomy: [
      "All front desk and administrative operations",
      "Family communications and parent inquiry management",
      "Enrollment processing and schedule management",
      "Pro-shop operations and inventory management",
      "Routine financial processing and payment collection",
      "Facility coordination and setup",
      "USASF compliance record management",
      "Competition registration logistics",
    ],
    approval: [
      "Any financial commitments above the approved threshold",
      "Policy changes or new operational procedures",
      "Staff scheduling changes that affect the floor",
      "Any communications that affect program direction or culture",
      "Vendor contract changes or new vendor engagements",
      "Athlete enrollment exceptions or tuition adjustments",
    ],
  },
];

const hierarchy = [
  { level: "1", label: "OWNERSHIP", role: "Gym Owners", desc: "Final financial authority, strategic direction, and ultimate decision-making for all gym operations and staff." },
  { level: "2", label: "PROGRAM", role: "All-Star Director", desc: "Senior program leader overseeing all teams, levels, staff development, athlete growth, and competitive performance." },
  { level: "3", label: "OPERATIONS", role: "Operations Manager", desc: "Day-to-day gym administration, scheduling, communications, enrollment, and financial operations support." },
  { level: "4", label: "LEVEL", role: "Level Directors (L1–L6)", desc: "Full ownership of all teams within assigned level — floor accountability, athlete development, coach oversight." },
  { level: "5", label: "STAFF", role: "Team Coaches", desc: "Execute approved practice plans, develop athletes, enforce program culture, manage team communication and competition readiness." },
];

const commFlow = [
  { type: "Parent Concerns", flow: "Parent → Level Director → All-Star Director (if needed)", rule: "Level Directors handle first. Escalate only when necessary." },
  { type: "Coach Issues", flow: "Coach → Level Director → All-Star Director → Ownership", rule: "Coaches do NOT bypass their Level Director for routine matters." },
  { type: "Staff Questions", flow: "Staff → Level Director → All-Star Director (if needed)", rule: "Respect the chain. Ownership is available but not the first stop." },
  { type: "Meeting Flow", flow: "All Directors attend weekly strategy meeting led by All-Star Director", rule: "Every director must know their metrics and come prepared with solutions." },
];

// ── Components ────────────────────────────────────────────────────────────────

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function DutyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#D0CCC8" }}>
          <span style={{ color: "#C8102E", flexShrink: 0, marginTop: "2px" }}>▸</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RoleSection({ role }: { role: typeof roles[0] }) {
  const [open, setOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  return (
    <RevealSection>
      <div
        id={role.id}
        className="we-role-card mb-8"
        style={{ background: "#111111", borderLeft: "3px solid #C8102E" }}
      >
        {/* Role Header */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span className="we-label block mb-1">{role.code}</span>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  letterSpacing: "0.06em",
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                {role.title}
              </h2>
              <p className="mt-1 text-xs tracking-widest uppercase" style={{ color: "#888" }}>
                {role.subtitle}
              </p>
            </div>
          </div>

          {/* Overview */}
          <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(200,16,46,0.25)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#C8C4C0" }}>
              <strong style={{ color: "#FFFFFF" }}>POSITION OVERVIEW: </strong>
              {role.overview}
            </p>
            <p className="mt-3 text-sm font-semibold italic" style={{ color: "#C8102E" }}>
              "{role.tagline}"
            </p>
          </div>
        </div>

        {/* Toggle Duties */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-6 py-3 text-xs tracking-widest uppercase font-medium transition-colors"
          style={{
            background: "#1A1A1A",
            color: open ? "#C8102E" : "#888",
            borderTop: "1px solid #222",
            borderBottom: open ? "1px solid #222" : "none",
          }}
        >
          <span>{open ? "HIDE DUTIES & RESPONSIBILITIES" : "VIEW FULL DUTIES & RESPONSIBILITIES"}</span>
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {open && (
          <div className="px-6 py-6 space-y-8">
            {role.sections.map((sec, i) => (
              <div key={i}>
                <div
                  className="we-section-bar mb-4"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    background: "#C8102E",
                    color: "#fff",
                    padding: "0.4rem 1rem",
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  {sec.title}
                </div>
                <DutyList items={sec.items} />
              </div>
            ))}

            {/* Authority & Boundaries */}
            <div>
              <button
                onClick={() => setShowAuth(!showAuth)}
                className="w-full flex items-center justify-between py-2 text-xs tracking-widest uppercase font-medium transition-colors"
                style={{ color: showAuth ? "#C8102E" : "#666", borderTop: "1px solid #222", paddingTop: "1rem" }}
              >
                <span>AUTHORITY & BOUNDARIES</span>
                {showAuth ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {showAuth && (
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <div>
                    <div
                      style={{
                        background: "rgba(34,197,94,0.1)",
                        border: "1px solid rgba(34,197,94,0.3)",
                        padding: "0.4rem 0.8rem",
                        marginBottom: "0.75rem",
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "0.8rem",
                        letterSpacing: "0.1em",
                        color: "#4ade80",
                      }}
                    >
                      FULL AUTONOMY — YOU OWN THESE
                    </div>
                    <DutyList items={role.autonomy} />
                  </div>
                  <div>
                    <div
                      style={{
                        background: "rgba(200,16,46,0.1)",
                        border: "1px solid rgba(200,16,46,0.3)",
                        padding: "0.4rem 0.8rem",
                        marginBottom: "0.75rem",
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "0.8rem",
                        letterSpacing: "0.1em",
                        color: "#C8102E",
                      }}
                    >
                      REQUIRES OWNERSHIP APPROVAL
                    </div>
                    <DutyList items={role.approval} />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </RevealSection>
  );
}

function HierarchySection() {
  return (
    <RevealSection>
      <div id="hierarchy" className="mb-8">
        <div
          style={{
            background: "#111111",
            borderLeft: "3px solid #C8102E",
          }}
        >
          {/* Header */}
          <div className="px-6 pt-6 pb-4">
            <span className="we-label block mb-1">ROLE-04</span>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                letterSpacing: "0.06em",
                color: "#FFFFFF",
                lineHeight: 1,
              }}
            >
              PROGRAM HIERARCHY & COMMUNICATION FLOW
            </h2>
            <p className="mt-1 text-xs tracking-widest uppercase" style={{ color: "#888" }}>
              Woodlands Elite Cheer Company — Organizational Structure
            </p>
          </div>

          <div className="px-6 pb-6 space-y-6">
            {/* Hierarchy Table */}
            <div style={{ borderTop: "1px solid rgba(200,16,46,0.25)" }} className="pt-4">
              <div
                className="grid grid-cols-12 gap-0 mb-1"
                style={{
                  background: "#C8102E",
                  padding: "0.5rem 1rem",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  color: "#fff",
                }}
              >
                <div className="col-span-2">LEVEL</div>
                <div className="col-span-3">ROLE</div>
                <div className="col-span-7">RESPONSIBILITIES</div>
              </div>
              {hierarchy.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 gap-0"
                  style={{
                    background: i % 2 === 0 ? "#161616" : "#111111",
                    borderBottom: "1px solid #222",
                  }}
                >
                  <div
                    className="col-span-2 flex flex-col items-center justify-center py-4"
                    style={{ background: "#0A0A0A", borderRight: "1px solid #222" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "1.8rem",
                        color: "#FFFFFF",
                        lineHeight: 1,
                      }}
                    >
                      {row.level}
                    </span>
                    <span className="text-xs tracking-widest mt-1" style={{ color: "#C8102E" }}>
                      {row.label}
                    </span>
                  </div>
                  <div
                    className="col-span-3 flex items-center px-4 py-4"
                    style={{ borderRight: "1px solid #222" }}
                  >
                    <span className="font-semibold text-sm" style={{ color: "#FFFFFF" }}>
                      {row.role}
                    </span>
                  </div>
                  <div className="col-span-7 flex items-center px-4 py-4">
                    <span className="text-sm leading-relaxed" style={{ color: "#C8C4C0" }}>
                      {row.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Communication Flow */}
            <div>
              <div
                style={{
                  background: "#C8102E",
                  padding: "0.4rem 1rem",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                COMMUNICATION FLOW
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#C8102E" }}>
                      <th className="text-left px-4 py-2 text-xs tracking-widest uppercase" style={{ color: "#fff", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}>COMMUNICATION TYPE</th>
                      <th className="text-left px-4 py-2 text-xs tracking-widest uppercase" style={{ color: "#fff", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}>STANDARD FLOW</th>
                      <th className="text-left px-4 py-2 text-xs tracking-widest uppercase" style={{ color: "#fff", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}>THE RULE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commFlow.map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? "#161616" : "#111111", borderBottom: "1px solid #222" }}>
                        <td className="px-4 py-3 font-medium" style={{ color: "#FFFFFF" }}>{row.type}</td>
                        <td className="px-4 py-3" style={{ color: "#C8C4C0" }}>{row.flow}</td>
                        <td className="px-4 py-3 italic text-xs" style={{ color: "#999" }}>{row.rule}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* The Rule */}
            <div
              style={{
                background: "#C8102E",
                padding: "1rem 1.5rem",
              }}
            >
              <p className="text-sm font-bold text-center" style={{ color: "#FFFFFF", lineHeight: 1.6 }}>
                THE RULE: Gym Owners hold final financial authority. The All-Star Director has final operational say. Every Level Director owns their level. Coaches execute the plan. Everyone works within the system and comes to meetings prepared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navLinks = [
    { label: "All-Star Director", href: "#allstar-director" },
    { label: "Level Director", href: "#level-director" },
    { label: "Operations Manager", href: "#operations-manager" },
    { label: "Hierarchy", href: "#hierarchy" },
  ];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileNavOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "#0A0A0A" }}>
      {/* ── Sticky Nav ── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #1A1A1A",
        }}
      >
        <img src={LOGO_URL} alt="Woodlands Elite" className="h-10 object-contain" />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-xs tracking-widest uppercase transition-colors hover:text-white"
              style={{ color: "#888", fontFamily: "'DM Sans', sans-serif" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href={WE_PDF_URL}
            download
            className="flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase font-semibold transition-all hover:brightness-110"
            style={{
              background: "#C8102E",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <Download size={13} />
            Download PDF
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          style={{ color: "#888" }}
        >
          {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Nav Dropdown */}
      {mobileNavOpen && (
        <div
          className="md:hidden fixed top-[57px] left-0 right-0 z-40 px-6 py-4 space-y-3"
          style={{ background: "#111111", borderBottom: "1px solid #222" }}
        >
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left text-sm tracking-widest uppercase py-2"
              style={{ color: "#888" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href={WE_PDF_URL}
            download
            className="flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase font-semibold w-full justify-center"
            style={{ background: "#C8102E", color: "#fff" }}
          >
            <Download size={13} />
            Download PDF
          </a>
        </div>
      )}

      {/* ── Hero ── */}
      <div
        className="relative flex flex-col justify-end"
        style={{
          backgroundImage: `url(${HERO_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "340px",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)",
          }}
        />
        <div className="relative container py-12">
          <div
            className="animate-slide-up"
            style={{ animationDelay: "0ms" }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-2"
              style={{ color: "#C8102E", fontFamily: "'JetBrains Mono', monospace" }}
            >
              INTERNAL OPERATIONS DOCUMENT
            </p>
            <h1
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                letterSpacing: "0.06em",
                color: "#FFFFFF",
                lineHeight: 0.95,
              }}
            >
              POSITION AGREEMENTS
              <br />
              <span style={{ color: "#C8102E" }}>&</span> HIERARCHY
            </h1>
            <p className="mt-3 text-sm" style={{ color: "#888" }}>
              Woodlands Elite Cheer Company — Staff Role & Accountability Guide
            </p>
          </div>
        </div>
        {/* Bottom crimson bar */}
        <div style={{ height: "4px", background: "#C8102E" }} />
      </div>

      {/* ── Content ── */}
      <main className="container py-12">
        {/* Intro */}
        <RevealSection>
          <div
            className="mb-10 p-6"
            style={{
              background: "#111111",
              borderLeft: "3px solid #C8102E",
            }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "#C8102E", fontFamily: "'JetBrains Mono', monospace" }}
            >
              DOCUMENT PURPOSE
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#C8C4C0" }}>
              This document defines the position agreements, role responsibilities, authority boundaries, and organizational hierarchy for Woodlands Elite Cheer Company. Every staff member is expected to know their role, operate within their defined authority, and execute the systems established by program leadership. This is not a suggestion guide — it is the operational standard.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={WE_PDF_URL}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase font-semibold transition-all hover:brightness-110"
                style={{ background: "#C8102E", color: "#fff" }}
              >
                <Download size={13} />
                Download Full Document (PDF)
              </a>
            </div>
          </div>
        </RevealSection>

        {/* Role Sections */}
        {roles.map((role) => (
          <RoleSection key={role.id} role={role} />
        ))}

        {/* Hierarchy */}
        <HierarchySection />
      </main>

      {/* ── Footer ── */}
      <footer
        className="py-6 px-6 text-center text-xs tracking-widest uppercase"
        style={{
          background: "#C8102E",
          color: "rgba(255,255,255,0.8)",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        Woodlands Elite Cheer Company — Position Agreements & Hierarchy · Internal Use Only
      </footer>
    </div>
  );
}
