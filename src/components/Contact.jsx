import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax translation for the big background text
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  const channels = [
    {
      label: 'Phone Line',
      value: '+91 94903 10177',
      href: 'tel:+919490310177',
      note: 'Direct call or WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      )
    },
    {
      label: 'Email',
      value: 'satyapreethika@gmail.com',
      href: 'mailto:satyapreethika@gmail.com',
      note: 'For proposals & queries',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/bommu-preethika-9b098a268',
      href: 'https://www.linkedin.com/in/bommu-preethika-9b098a268/',
      note: 'Let\'s connect professionally',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      )
    },
    {
      label: 'GitHub',
      value: 'github.com/preethikabommu',
      href: 'https://github.com/preethikabommu',
      note: 'Open source & projects',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.371.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={ref} id="contact" className="bg-[#0b0b0b] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-white/10 select-none">
      
      {/* Background Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* Huge Background Parallax Netflix Watermark Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12 opacity-10"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-red-600 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
        >
          CONTACT
        </h1>
      </motion.div>

      {/* Direct Contact Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#141414]/95 backdrop-blur-2xl border-t border-l border-white/15 w-full md:w-[90%] lg:w-[82%] p-8 md:p-16 text-white flex flex-col justify-between rounded-tl-[3rem] shadow-[0_-25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden"
        >
          {/* Subtle internal top magenta highlight glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-90"></div>

          <div className="flex items-center justify-between mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-xs font-mono uppercase tracking-widest text-red-500">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
              <span>EPISODE 04 // GET IN TOUCH</span>
            </div>
            <span className="text-xs font-mono text-white/40 tracking-wider hidden md:block">
              
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full">
            
            {/* Left: Intro */}
            <div className="lg:w-[36%] flex flex-col justify-between gap-10">
              <div className="space-y-5">
                <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
                  Open Direct Lines
                </h3>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-[0.95]">
                  REACH ME{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_25px_rgba(79,70,229,0.4)]">
                    DIRECTLY.
                  </span>
                </h2>
                <p className="text-sm text-white/60 font-light leading-relaxed max-w-md">
                  No forms, no waiting — my contact lines are always open. Call, email, or drop a message on any of my channels and I'll get back to you.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-white/40 tracking-widest uppercase">
                <span className="w-8 h-[1px] bg-red-600/60"></span>
                <span>Available for internships & collaboration</span>
              </div>
            </div>

            {/* Right: Contact Channel Cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {channels.map((channel, i) => (
                <a
                  key={i}
                  href={channel.href}
                  target={channel.href.startsWith('tel') || channel.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-xl p-6 flex flex-col justify-between gap-8 hover:border-red-600 hover:bg-red-600/10 transition-all duration-500 shadow-xl hover:scale-[1.02]"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(300px circle at 100% 0%, rgba(79,70,229,0.15), transparent 70%)' }}
                  ></div>

                  <div className="flex items-start justify-between relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600/30 to-purple-600/20 border border-white/10 flex items-center justify-center text-red-500 group-hover:text-red-400 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all">
                      {channel.icon}
                    </div>
                    <svg className="w-5 h-5 text-white/30 group-hover:text-red-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </div>

                  <div className="relative z-10 space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                      {channel.label}
                    </div>
                    <div className="text-base md:text-lg font-bold text-white break-all group-hover:text-red-400 transition-colors">
                      {channel.value}
                    </div>
                    <div className="text-xs font-light text-white/50">
                      {channel.note}
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-red-600 group-hover:shadow-[0_0_15px_#4F46E5] transition-all" />
                </a>
              ))}
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;