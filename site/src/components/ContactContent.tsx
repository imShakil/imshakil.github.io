'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';
import { profile } from '@/data/profile';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Enterprise IAM & SSO',
    timeline: 'Within 2-4 Weeks',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const day = now.getUTCDate();
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = monthNames[now.getUTCMonth()];
      const year = now.getUTCFullYear();
      const time = `${hours}:${minutes} (UTC+00), ${day} ${month}, ${year}`;
      const formattedMessage = `[Service Needed]: ${formData.service}\n[Timeline]: ${formData.timeline}\n\n[Message]:\n${formData.message}`;

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || `Inquiry: ${formData.service}`,
          message: formattedMessage,
          time,
          to_email: profile.email,
          reply_to: formData.email,
        }
      );

      console.log('Email sent successfully:', result);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        service: 'Enterprise IAM & SSO',
        timeline: 'Within 2-4 Weeks',
        subject: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (submitError) {
      console.error('Error submitting form:', submitError);
      setError('Failed to send message. Please try again or contact me directly via email.');
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = profile.contactMethods;

  const renderIcon = (icon: (typeof profile.contactMethods)[number]['icon']) => {
    if (icon === 'whatsapp') {
      return (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      );
    }

    if (icon === 'telegram') {
      return (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.923z" />
        </svg>
      );
    }

    if (icon === 'email') {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    }

    if (icon === 'linkedin') {
      return (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.574 4.251 4.963v5.908zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.957.77-1.715 1.958-1.715 1.187 0 1.927.758 1.927 1.715 0 .953-.74 1.715-1.97 1.715zm1.946 11.597H3.392V9.806h3.891v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      );
    }

    return (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    );
  };

  return (
    <main className="min-h-screen flex flex-col">
      <section className="py-20 px-6 md:px-20 border-b border-emerald-500/20">
        <div className="max-w-4xl mx-auto space-y-6 slide-in-up">
          <p className="terminal-label">Contact / {profile.name}</p>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">Get In Touch</h1>
          <p className="text-xl text-emerald-100/70">{profile.connectSummary}</p>
        </div>
      </section>

      <section className="flex-1 py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Direct 1-Click Cal.com Scheduling Option */}
          <div className="terminal-panel p-6 md:p-8 bg-gradient-to-r from-emerald-950/50 via-slate-950 to-slate-950 border border-emerald-400/40 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(51,243,140,0.08)]">
            <div className="space-y-2 text-center lg:text-left">
              <span className="px-3 py-1 rounded text-xs font-mono uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                Recommended / Fastest Option
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-100">
                Schedule a Direct Discovery Call
              </h3>
              <p className="text-sm text-emerald-100/70 max-w-xl">
                Pick a slot on my live calendar. We&apos;ll diagnose your deployment bottlenecks, cloud infrastructure setup, or enterprise IAM/SSO requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={profile.cal15min}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-button whitespace-nowrap px-5 py-3 text-sm flex items-center justify-center gap-2"
              >
                <span>Book 15-Min Intro</span>
                <span className="text-emerald-300 font-mono text-xs">→</span>
              </a>
              <a
                href={profile.cal30min}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-button terminal-button-secondary whitespace-nowrap px-5 py-3 text-sm flex items-center justify-center gap-2"
              >
                <span>Book 30-Min Deep Dive</span>
                <span className="text-emerald-300 font-mono text-xs">→</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-emerald-100">Direct Contact Channels</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-panel p-6 hover:border-emerald-400/40 transition-all duration-300 group"
                >
                  <div className="text-emerald-300 mb-4 group-hover:scale-110 transition-transform">
                    {renderIcon(method.icon)}
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-100 mb-2">{method.title}</h3>
                  <p className="text-sm text-emerald-100/70 mb-3">{method.value}</p>
                  <p className="text-sm text-emerald-100/50">{method.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-emerald-100">Send a Project Scope or Inquiry</h2>

            <form onSubmit={handleSubmit} className="terminal-panel overflow-hidden">
              <div className="px-5 py-3 border-b border-emerald-500/20 bg-black/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-300/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
                </div>
                <p className="text-xs text-emerald-200/70 font-mono uppercase tracking-[0.2em]">inquiry-console.sh</p>
              </div>

              <div className="space-y-6 p-6 md:p-8">
                <p className="text-sm text-emerald-200/70 font-mono">
                  <span className="text-emerald-400">ops@mhosen:~$</span> send_project_inquiry --to {profile.email}
                </p>

                {submitted && (
                  <div className="p-4 rounded-lg border border-emerald-400/30 bg-emerald-400/10">
                    <p className="text-emerald-100 font-semibold font-mono">[ok] Inquiry sent successfully! I will respond within 24 hours.</p>
                  </div>
                )}

                {error && (
                  <div className="p-4 rounded-lg border border-red-400/30 bg-red-500/10">
                    <p className="text-red-200 font-semibold font-mono">[error] {error}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-[0.18em] text-emerald-300 mb-2">
                      &gt; your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="terminal-input font-mono"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-[0.18em] text-emerald-300 mb-2">
                      &gt; work email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="terminal-input font-mono"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="service" className="block text-xs font-mono uppercase tracking-[0.18em] text-emerald-300 mb-2">
                      &gt; service needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="terminal-input font-mono bg-slate-950 text-emerald-100"
                    >
                      <option value="Enterprise IAM & SSO">Enterprise IAM & SSO (SAML / OAuth2 / Keycloak)</option>
                      <option value="Cloud Infrastructure & IaC">Cloud Infrastructure & IaC (Terraform / AWS / Azure)</option>
                      <option value="CI/CD Pipeline Automation">End-to-End CI/CD Pipeline Automation</option>
                      <option value="48-Hour DevOps Architecture Audit">48-Hour DevOps & Cloud Audit</option>
                      <option value="Monthly DevOps Retainer">Monthly DevOps Retainer / Advisory</option>
                      <option value="Other Project Inquiry">Other Project Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-xs font-mono uppercase tracking-[0.18em] text-emerald-300 mb-2">
                      &gt; estimated timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="terminal-input font-mono bg-slate-950 text-emerald-100"
                    >
                      <option value="Immediate / Urgent">Immediate / Urgent (Next few days)</option>
                      <option value="Within 2-4 Weeks">Within 2 - 4 Weeks</option>
                      <option value="Next Quarter">Next Quarter</option>
                      <option value="Exploring Options">Exploring Options / Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-[0.18em] text-emerald-300 mb-2">
                    &gt; subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="terminal-input font-mono"
                    placeholder="Brief summary of your project or challenge"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-[0.18em] text-emerald-300 mb-2">
                    &gt; project details & current bottlenecks
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="terminal-input resize-none font-mono"
                    placeholder="Describe your current cloud architecture, deployment stack, or IAM challenge..."
                  />
                </div>

                <button type="submit" disabled={loading} className="terminal-button w-full disabled:opacity-50 disabled:cursor-not-allowed font-mono uppercase tracking-[0.16em]">
                  {loading ? 'transmitting...' : '$ send_message --secure'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
