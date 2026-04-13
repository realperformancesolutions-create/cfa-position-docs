/* ============================================================
   CHEER FLORIDA ALL-STARS — POSITION AGREEMENTS & HIERARCHY
   Design: Command Authority
   Dark navy #0D1B2A, Crimson #C8102E, Gold #C9A84C, Bebas Neue + DM Sans
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Download, ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const CFA_PDF_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/EryPe9N36963woYHYBNvb9/Cheer_Florida_Program_Responsibilities_b003fca4.pdf";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/EryPe9N36963woYHYBNvb9/cheer_florida_logo_840125e7.png";

const HERO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/EryPe9N36963woYHYBNvb9/cfa-hero-v5_e760c270.jpg";

// ── Data ──────────────────────────────────────────────────────────────────────

const roles = [
  {
    id: "gtm-director",
    code: "ROLE-01",
    title: "GTM DIRECTOR",
    subtitle: "Program Vision · System Architecture · Hiring Authority · Growth Strategy · Final Approval",
    overview:
      "The GTM (Go-To-Market) Director is the strategic architect of the Cheer Florida program. This role is responsible for program growth, system creation, high-level standards, and the long-term development of both athletes and staff. The GTM Director holds ultimate authority over program direction, hiring, and all operational frameworks, ensuring consistency and excellence across every team. Every director, every coach, and every athlete on the floor operates within the framework this role establishes.",
    tagline: "The GTM Director does not manage the day-to-day — they build the systems that make the day-to-day possible.",
    sections: [
      {
        title: "DAILY TO DO",
        items: [
          "Review enrollment and lead generation metrics",
          "Monitor overall gym culture and staff professionalism",
          "Audit practice plans for alignment with program systems",
          "Coach assigned teams",
          "Review end-of-day reports from Admin Manager and All-Star Director",
          "Address high-level parent escalations (only when escalated by All-Star Director)",
        ],
      },
      {
        title: "WEEKLY TO DO",
        items: [
          "Lead Director-level strategy meeting (All-Star Director & Tumbling Director)",
          "Review weekly KPI tracking (retention, progression, performance trends)",
          "Evaluate coach training progress and system adherence",
          "Plan upcoming staff education and training sessions",
          "Review marketing and community outreach efforts",
          "Audit program-wide communication for consistency and professionalism",
        ],
      },
      {
        title: "MONTHLY TO DO",
        items: [
          "Conduct full program numbers review (classes, all-star, retention rates)",
          "Lead full staff meeting and ongoing coach training",
          "Review budget and financial health of the competitive program",
          "Assess tumbling and flexibility program progress against benchmarks",
          "Update long-term athlete development models based on current progress",
        ],
      },
      {
        title: "QUARTERLY TO DO",
        items: [
          "Conduct performance reviews for Director-level staff",
          "Evaluate and update program systems (tryout structure, practice models)",
          "Plan seasonal marketing pushes and enrollment drives",
          "Review competitive success trends and adjust strategies",
          "Track salaried employee thresholds and overall payroll efficiency",
        ],
      },
      {
        title: "SEMI-ANNUALLY TO DO",
        items: [
          "Finalize and publish tryout packets and program handbooks",
          "Oversee major program transitions (tryouts, mid-season evaluations)",
          "Conduct comprehensive staff evaluations",
          "Set strategic goals for the upcoming 6-month cycle",
        ],
      },
      {
        title: "ANNUALLY TO DO",
        items: [
          "Complete final hiring decisions for all coaching and director staff",
          "Set the overarching schedule philosophy for the season",
          "Finalize choreography and music budgets and vendor selections",
          "Update employee coaching eligibility and certification systems",
          "Deliver annual 'State of the Program' presentation to staff",
        ],
      },
      {
        title: "ADDITIONAL RESPONSIBILITIES",
        items: [
          "Complete authority over all hiring and firing decisions",
          "Final approval on all team placements and rosters",
          "Final say on all program policies, schedules, and disciplinary actions",
          "Creation and implementation of all standard operating procedures (SOPs)",
          "Coaching teams as assigned",
          "Select and schedule choreographers and music vendors",
          "Plan and oversee stunt camps and specialty clinics",
        ],
      },
    ],
    autonomy: [
      "All program-wide systems, policies, and operational frameworks",
      "Final hiring, firing, and all formal disciplinary decisions",
      "Final team placements, rosters, and competitive scheduling",
      "Budget approval and major financial commitments",
      "All program-wide communications and brand representation",
      "Staff compensation, role changes, and performance reviews",
      "Choreography and music vendor selection and scheduling",
    ],
    approval: [
      "Major facility or lease decisions — deferred to Gym Ownership",
      "Business-level financial decisions beyond program budget — Gym Ownership",
      "Any decisions that affect the gym's legal standing or insurance — Ownership",
    ],
  },
  {
    id: "allstar-director",
    code: "ROLE-02",
    title: "ALL-STAR DIRECTOR",
    subtitle: "Floor Operations · Coach Management · Parent Communication · Team Readiness",
    overview:
      "The All-Star Director is the operational leader of the competitive program. This role is responsible for the daily execution of practices, managing the coaching staff on the floor, handling direct parent communication, and ensuring teams are competition-ready. The All-Star Director takes the systems built by the GTM Director and makes them come alive in the gym. All major decisions require GTM Director approval.",
    tagline: "The All-Star Director runs the floor. Every team, every practice, every coach — this role owns the daily execution.",
    sections: [
      {
        title: "DAILY TO DO",
        items: [
          "Ensure daily office check-in and staff attendance",
          "Respond to direct parent and coach emails/messages",
          "Submit end-of-day reports to GTM Director",
          "Manage injury report follow-ups",
          "Review and approve daily practice plans from coaches",
          "Handle day-to-day parent meetings (escalate serious issues to GTM Director)",
          "Conduct pre/post-practice coaching meetings",
          "Monitor team and class attendance on the floor",
          "Enforce gym rules, dress code, and behavioral standards",
        ],
      },
      {
        title: "WEEKLY TO DO",
        items: [
          "Attend Director-level strategy meeting led by GTM Director",
          "Lead operations meeting for the coaching staff",
          "Ensure all competition readiness checks are completed",
          "Review weekly practice flow and make real-time adjustments",
          "Check in with Tumbling Director on team integration",
          "Submit weekly staff performance notes to GTM Director",
        ],
      },
      {
        title: "MONTHLY TO DO",
        items: [
          "Track and report Flyer Flex and specialized class attendance",
          "Meet with Tumbling Director to review team tumbling progress",
          "Review parent communication logs to ensure issues are resolved",
          "Assess overall team morale and staff engagement",
          "Report monthly team performance summary to GTM Director",
        ],
      },
      {
        title: "QUARTERLY TO DO",
        items: [
          "Track C.I.T. (Coach In Training) rotation and progress",
          "Review team scoring trends from early competitions",
          "Adjust practice schedules based on competition feedback",
          "Assist GTM Director with staff performance reviews",
        ],
      },
      {
        title: "SEMI-ANNUALLY TO DO",
        items: [
          "Assist with mid-season evaluations and team adjustments",
          "Provide input on employee reviews for coaching staff",
          "Prepare gym for major showcases and events",
        ],
      },
      {
        title: "ANNUALLY TO DO",
        items: [
          "Assist with tryout execution and evaluations",
          "Provide team placement recommendations to GTM Director (GTM has final approval)",
          "Assist with choreography and camp scheduling execution",
        ],
      },
      {
        title: "ADDITIONAL RESPONSIBILITIES",
        items: [
          "Act as the primary point of contact for parents on day-to-day team issues",
          "Manage the daily flow of the gym floor",
          "Execute the systems and standards set by the GTM Director",
          "Maintain competition readiness and athlete accountability",
        ],
      },
    ],
    autonomy: [
      "Running daily practices and managing the floor flow",
      "Directing coaches during practice and making real-time adjustments",
      "Handling day-to-day parent communication and minor conflict resolution",
      "Enforcing attendance, effort, and behavior standards for athletes",
      "Holding coaches accountable to the daily schedule and practice plans",
      "Submitting daily/weekly reports and updates to GTM Director",
    ],
    approval: [
      "Final team placements, crossovers, or any roster changes",
      "Hiring, firing, or any formal disciplinary action involving staff",
      "Creating, changing, or overriding any program system or policy",
      "Finalizing competition schedules or committing to major budget items",
      "Any communication that affects the entire program or brand reputation",
      "Responding to media, social media posts on behalf of the program, or press",
      "Offering or negotiating any staff compensation or role changes",
    ],
  },
];

const hierarchy = [
  { level: "1", label: "OWNERSHIP", role: "Gym Owners", desc: "Final financial decisions, facility, business strategy. GTM Director & Admin Manager report here." },
  { level: "2", label: "EXECUTIVE", role: "GTM Director", desc: "Program vision, growth, all hiring/firing, systems, KPIs, final approval on all operations." },
  { level: "3A", label: "OPERATIONS", role: "All-Star Director", desc: "Daily practice execution, coach management, parent communication, team readiness." },
  { level: "3B", label: "OPERATIONS", role: "Tumbling Director", desc: "Tumbling curriculum execution, athlete progression tracking, tumbling class management." },
  { level: "4", label: "ADMIN", role: "Admin Manager", desc: "Front desk, billing, registration, customer service, facility coordination." },
  { level: "5", label: "STAFF", role: "All-Star Coaches", desc: "Execute practice plans, athlete development, adhere to program systems." },
  { level: "5", label: "STAFF", role: "Tumbling Coaches", desc: "Execute tumbling curriculum, track athlete progress, adhere to program standards." },
];

const commFlow = [
  { direction: "Information Flows DOWN", path: "GTM Director → All-Star Director / Tumbling Director → Coaches → Athletes", note: "GTM Director sets systems. Directors train coaches. Coaches execute daily." },
  { direction: "Escalation Flows UP", path: "Athletes/Parents → All-Star Director → GTM Director (if unresolved)", note: "Day-to-day issues stay with All-Star Director. Structural or policy issues go to GTM Director." },
  { direction: "Staff Questions", path: "Coaches → All-Star Director → GTM Director (if needed)", note: "Coaches do NOT bypass the All-Star Director to reach the GTM Director for routine matters." },
];

// ── Components ────────────────────────────────────────────────────────────────

function RoleCard({ role }: { role: typeof roles[0] }) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [showBoundaries, setShowBoundaries] = useState(false);

  const toggle = (title: string) =>
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <section id={role.id} className="mb-16">
      {/* Role header */}
      <div className="border-l-4 border-[#C8102E] pl-6 mb-6">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs font-mono text-[#C9A84C] tracking-widest uppercase">{role.code}</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-2">{role.title}</h2>
        <p className="text-sm text-[#C9A84C] tracking-wider uppercase font-medium">{role.subtitle}</p>
      </div>

      {/* Overview */}
      <div className="bg-[#0D1B2A] border border-[#1E3A5F] rounded-sm p-6 mb-6">
        <p className="text-gray-300 leading-relaxed text-sm">{role.overview}</p>
        <div className="mt-4 pt-4 border-t border-[#1E3A5F]">
          <p className="text-[#C8102E] font-semibold italic text-sm">"{role.tagline}"</p>
        </div>
      </div>

      {/* Duty sections */}
      <div className="space-y-2 mb-6">
        {role.sections.map((section) => (
          <div key={section.title} className="border border-[#1E3A5F] rounded-sm overflow-hidden">
            <button
              onClick={() => toggle(section.title)}
              className="w-full flex items-center justify-between px-5 py-3 bg-[#0D1B2A] hover:bg-[#112236] transition-colors"
            >
              <span className="text-xs font-mono tracking-widest text-[#C9A84C] uppercase">{section.title}</span>
              {openSections[section.title] ? (
                <ChevronUp className="w-4 h-4 text-[#C9A84C]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#C9A84C]" />
              )}
            </button>
            {openSections[section.title] && (
              <div className="px-5 py-4 bg-[#071220] border-t border-[#1E3A5F]">
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C8102E] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Authority & Boundaries toggle */}
      <button
        onClick={() => setShowBoundaries(!showBoundaries)}
        className="flex items-center gap-2 text-xs font-mono tracking-widest text-white uppercase border border-[#C8102E] px-4 py-2 hover:bg-[#C8102E]/10 transition-colors rounded-sm mb-4"
      >
        {showBoundaries ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        Authority & Boundaries
      </button>

      {showBoundaries && (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-emerald-800 rounded-sm overflow-hidden">
            <div className="bg-emerald-900/40 px-4 py-2 border-b border-emerald-800">
              <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">✔ Full Autonomy — You Own These</span>
            </div>
            <ul className="p-4 space-y-2">
              {role.autonomy.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-emerald-300">
                  <span className="mt-1 text-emerald-500 shrink-0">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-red-900 rounded-sm overflow-hidden">
            <div className="bg-red-900/30 px-4 py-2 border-b border-red-900">
              <span className="text-xs font-mono tracking-widest text-red-400 uppercase">✘ Requires Approval — Do Not Proceed Without It</span>
            </div>
            <ul className="p-4 space-y-2">
              {role.approval.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-300">
                  <span className="mt-1 text-red-500 shrink-0">✘</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

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

  return (
    <div className="min-h-screen bg-[#060E18] text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#060E18]/95 backdrop-blur border-b border-[#1E3A5F]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="CFA Logo" className="h-10 w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => scrollTo(r.id)}
                className="text-xs font-mono tracking-widest text-gray-400 hover:text-[#C9A84C] uppercase transition-colors"
              >
                {r.title}
              </button>
            ))}
            <button onClick={() => scrollTo("hierarchy")} className="text-xs font-mono tracking-widest text-gray-400 hover:text-[#C9A84C] uppercase transition-colors">
              Hierarchy
            </button>
            <a
              href={CFA_PDF_URL}
              download
              className="flex items-center gap-2 bg-[#C8102E] hover:bg-[#a50d26] text-white text-xs font-mono tracking-widest uppercase px-4 py-2 transition-colors"
            >
              <Download className="w-3 h-3" />
              Download PDF
            </a>
          </div>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#060E18] border-t border-[#1E3A5F] px-6 py-4 space-y-3">
            {roles.map((r) => (
              <button key={r.id} onClick={() => scrollTo(r.id)} className="block text-xs font-mono tracking-widest text-gray-400 hover:text-[#C9A84C] uppercase">
                {r.title}
              </button>
            ))}
            <button onClick={() => scrollTo("hierarchy")} className="block text-xs font-mono tracking-widest text-gray-400 hover:text-[#C9A84C] uppercase">
              Hierarchy
            </button>
            <a href={CFA_PDF_URL} download className="flex items-center gap-2 bg-[#C8102E] text-white text-xs font-mono tracking-widest uppercase px-4 py-2 w-fit">
              <Download className="w-3 h-3" />
              Download PDF
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <img src={HERO_URL} alt="CFA Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060E18] via-[#060E18]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060E18] via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
          <div className="max-w-2xl">
            <p className="text-xs font-mono tracking-[0.3em] text-[#C9A84C] uppercase mb-3">Internal Operations Document</p>
            <h1 className="font-display text-5xl md:text-7xl text-white tracking-wide leading-none mb-4">
              POSITION<br />
              <span className="text-[#C8102E]">AGREEMENTS</span><br />
              & HIERARCHY
            </h1>
            <p className="text-gray-400 text-sm max-w-md mb-8">
              Cheer Florida All-Stars — Staff Role & Accountability Guide. This document defines the authority, responsibilities, and boundaries for each position within the program.
            </p>
            <a
              href={CFA_PDF_URL}
              download
              className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a50d26] text-white font-mono text-xs tracking-widest uppercase px-6 py-3 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Full Document
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Role cards */}
        {roles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}

        {/* Hierarchy */}
        <section id="hierarchy" className="mb-16">
          <div className="border-l-4 border-[#C9A84C] pl-6 mb-8">
            <p className="text-xs font-mono text-[#C9A84C] tracking-widest uppercase mb-1">Structure</p>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide">PROGRAM HIERARCHY</h2>
          </div>

          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#C9A84C]">
                  <th className="text-left px-4 py-3 text-[#0D1B2A] font-mono text-xs tracking-widest uppercase">Level</th>
                  <th className="text-left px-4 py-3 text-[#0D1B2A] font-mono text-xs tracking-widest uppercase">Role</th>
                  <th className="text-left px-4 py-3 text-[#0D1B2A] font-mono text-xs tracking-widest uppercase">Core Responsibilities</th>
                </tr>
              </thead>
              <tbody>
                {hierarchy.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[#1E3A5F] ${i % 2 === 0 ? "bg-[#0D1B2A]" : "bg-[#071220]"}`}
                  >
                    <td className="px-4 py-4">
                      <div className="text-white font-bold text-sm">{row.level}</div>
                      <div className="text-[#C9A84C] text-xs font-mono tracking-wider mt-0.5">{row.label}</div>
                    </td>
                    <td className="px-4 py-4 text-white font-semibold">{row.role}</td>
                    <td className="px-4 py-4 text-gray-400 leading-relaxed">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Communication Flow */}
          <div className="border-l-4 border-[#C9A84C] pl-6 mb-6">
            <h3 className="font-display text-3xl text-white tracking-wide">COMMUNICATION FLOW</h3>
          </div>
          <div className="space-y-3 mb-8">
            {commFlow.map((row, i) => (
              <div key={i} className={`grid md:grid-cols-3 gap-4 p-4 border border-[#1E3A5F] rounded-sm ${i % 2 === 0 ? "bg-[#0D1B2A]" : "bg-[#071220]"}`}>
                <div className="text-[#C9A84C] font-semibold text-sm">{row.direction}</div>
                <div className="text-white text-sm">{row.path}</div>
                <div className="text-gray-400 text-sm italic">{row.note}</div>
              </div>
            ))}
          </div>

          {/* Golden Rule */}
          <div className="bg-[#0D1B2A] border border-[#C9A84C] p-6 text-center">
            <p className="text-white font-semibold text-base leading-relaxed">
              THE GOLDEN RULE: The GTM Director has final say on all decisions. The All-Star Director runs the floor. Coaches execute the plan. Everyone works within the system.
            </p>
          </div>
        </section>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#1E3A5F] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={LOGO_URL} alt="CFA Logo" className="h-8 w-auto object-contain opacity-70" />
          <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">
            Cheer Florida All-Stars — Position Agreements & Hierarchy — Internal Document
          </p>
          <a
            href={CFA_PDF_URL}
            download
            className="flex items-center gap-2 text-xs font-mono text-[#C9A84C] hover:text-white tracking-widest uppercase transition-colors"
          >
            <Download className="w-3 h-3" />
            Download PDF
          </a>
        </div>
      </footer>
    </div>
  );
}
