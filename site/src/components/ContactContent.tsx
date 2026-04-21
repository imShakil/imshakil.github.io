'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';
import { profile } from '@/data/profile';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time,
          to_email: profile.email,
          reply_to: formData.email,
        }
      );

      console.log('Email sent successfully:', result);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
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

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="terminal-panel p-4">
              <div className="text-2xl font-bold text-emerald-300">15+</div>
              <div className="text-sm text-emerald-100/60">Projects</div>
            </div>
            <div className="terminal-panel p-4">
              <div className="text-2xl font-bold text-emerald-300">5+</div>
              <div className="text-sm text-emerald-100/60">Years Exp</div>
            </div>
            <div className="terminal-panel p-4">
              <div className="text-2xl font-bold text-emerald-300">24h</div>
              <div className="text-sm text-emerald-100/60">Response</div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-1 py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-emerald-100">Contact Methods</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
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
            <h2 className="text-3xl font-bold text-emerald-100">Send Me a Message</h2>

            <form onSubmit={handleSubmit} className="terminal-panel overflow-hidden">
              <div className="px-5 py-3 border-b border-emerald-500/20 bg-black/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-300/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
                </div>
                <p className="text-xs text-emerald-200/70 font-mono uppercase tracking-[0.2em]">message-console.sh</p>
              </div>

              <div className="space-y-6 p-6 md:p-8">
                <p className="text-sm text-emerald-200/70 font-mono">
                  <span className="text-emerald-400">ops@mhosen:~$</span> compose_message --to {profile.email}
                </p>

                {submitted && (
                  <div className="p-4 rounded-lg border border-emerald-400/30 bg-emerald-400/10">
                    <p className="text-emerald-100 font-semibold font-mono">[ok] Message queued successfully. I will get back to you soon.</p>
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
                      &gt; name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="terminal-input font-mono"
                      placeholder="your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-[0.18em] text-emerald-300 mb-2">
                      &gt; email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="terminal-input font-mono"
                      placeholder="you@example.com"
                    />
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
                    required
                    className="terminal-input font-mono"
                    placeholder="project discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-[0.18em] text-emerald-300 mb-2">
                    &gt; message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    className="terminal-input resize-none font-mono"
                    placeholder="write your message..."
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
