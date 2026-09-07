import { Metadata } from 'next';
import { metadataConfig } from '../../lib/metadata-config';
import Footer from '../../components/Footer';
import AboutTabs from '../../components/AboutTabs';
import { profile } from '@/data/profile';

export const metadata: Metadata = metadataConfig.about();

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Executive Dossier Header */}
      <section className="py-20 px-6 md:px-20 border-b border-emerald-500/20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header Bar */}
          <div className="space-y-4 slide-in-up">
            <p className="terminal-label">$ consultant_dossier --profile-details</p>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Engineering with Impact & Security
            </h1>
            <p className="text-xl text-emerald-100/75 max-w-3xl leading-relaxed">
              Bridging software engineering, zero-trust enterprise identity, and automated cloud delivery to help growing businesses eliminate deployment bottlenecks and close enterprise deals.
            </p>
          </div>

          {/* Profile Overview Card */}
          <div className="terminal-panel overflow-hidden">
            <div className="px-5 py-3 border-b border-emerald-500/20 bg-black/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-300/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
              </div>
              <p className="text-xs text-emerald-200/70 font-mono uppercase tracking-[0.2em]">profile-spec.yaml</p>
            </div>

            <div className="p-8 md:p-10 grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-4 flex justify-center">
                <div className="terminal-window w-fit shadow-2xl shadow-emerald-500/10">
                  <div className="terminal-window-header">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-100/40 ml-2">headshot.png</span>
                  </div>
                  <div className="relative">
                    <img
                      src="/me.jpeg"
                      alt={profile.name}
                      className="w-64 h-64 md:w-72 md:h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-cyan-400/10 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 space-y-6">
                <div>
                  <span className="px-3 py-1 rounded text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 uppercase tracking-widest inline-block mb-3">
                    Principal Consultant
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-100">{profile.name}</h2>
                  <p className="text-emerald-300 font-mono text-sm mt-1">{profile.title}</p>
                </div>

                <p className="text-emerald-100/80 leading-relaxed text-sm md:text-base">
                  {profile.aboutSummary}
                </p>

                {/* The Independent Advantage */}
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-black/40 border border-emerald-500/20">
                    <h4 className="text-emerald-300 font-mono text-xs uppercase tracking-wider font-bold mb-1">
                      Direct Senior Access
                    </h4>
                    <p className="text-xs text-emerald-100/70">
                      Zero delegation to junior staff. You partner directly with a seasoned systems architect on every sprint.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-black/40 border border-emerald-500/20">
                    <h4 className="text-emerald-300 font-mono text-xs uppercase tracking-wider font-bold mb-1">
                      Zero-Waste Execution
                    </h4>
                    <p className="text-xs text-emerald-100/70">
                      Outcome-driven sprints focused on tangible deliverables: codified IaC, automated releases, and compliant IAM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Content: Track Record, Standards, Tech Stack, Education */}
      <section className="flex-1 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <AboutTabs />
        </div>
      </section>

      {/* Closing Consultation CTA Card */}
      <section className="py-16 px-6 md:px-20 border-t border-emerald-500/20">
        <div className="max-w-4xl mx-auto terminal-panel p-8 md:p-12 text-center relative overflow-hidden bg-gradient-to-b from-slate-900/90 to-slate-950">
          <div className="space-y-6">
            <span className="terminal-label inline-block">$ schedule_intro --open-calendar</span>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-100">
              Ready to Modernize Your Infrastructure?
            </h2>
            <p className="text-emerald-100/75 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Book a direct consultation call to discuss your deployment bottlenecks, cloud infrastructure challenges, or enterprise IAM requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={profile.cal15min}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-button w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono uppercase tracking-[0.14em] text-xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Book 15-Min Intro Call
              </a>
              <a
                href={profile.cal30min}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-button terminal-button-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono uppercase tracking-[0.14em] text-xs"
              >
                Book 30-Min Architecture Sprint
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono text-emerald-200/60 border-t border-emerald-500/15">
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-emerald-200 transition underline underline-offset-4"
              >
                Direct: {profile.email}
              </a>
              <span>·</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-200 transition underline underline-offset-4"
              >
                LinkedIn Profile ↗
              </a>
              <span>·</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-200 transition underline underline-offset-4"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
