const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-16 px-6 md:px-12 border-t border-white/10 select-none relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Top Section: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-2xl font-black text-red-600 tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_15px_rgba(79,70,229,0.9)]">
              PREETHIKA<span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
            </div>
            <p className="text-xs font-mono text-white/50 tracking-widest uppercase">
              // NETFLIX DEVELOPER SERIES &bull; SEASON 2026
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap gap-6 md:gap-8 text-xs font-mono uppercase tracking-widest text-white/70">
            <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-red-500 transition-colors">About</a>
            <a href="#expertise" className="hover:text-red-500 transition-colors">Expertise</a>
            <a href="#skills" className="hover:text-red-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-red-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
          </nav>
        </div>

        {/* Middle Section: Socials & External Profiles */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-white/60">
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/bommu-preethika-9b098a268/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors uppercase tracking-wider"
            >
              LinkedIn //
            </a>
            <a 
              href="https://github.com/preethikabommu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors uppercase tracking-wider"
            >
              GitHub //
            </a>
          </div>

          <div className="text-white/40 tracking-widest uppercase">
            BENGALURU, IN
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono text-white/60">
          <a href="mailto:satyapreethika@gmail.com" className="hover:text-red-500 transition-colors uppercase tracking-wider">
            satyapreethika@gmail.com
          </a>
          <span className="tracking-widest uppercase">+91 94903 10177</span>
        </div>

        {/* Bottom Copyright & Cinematic Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5 text-[11px] font-mono text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Preethika Bommu. All Rights Reserved.</p>
          <p className="text-red-500/80">STREAMING WORLDWIDE &bull; BUILT WITH REACT & GSAP</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;