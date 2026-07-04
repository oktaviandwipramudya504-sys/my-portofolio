"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok, FaEnvelope, FaCode, FaUser, FaCog, FaTimes } from "react-icons/fa";

const projects = [
  { title: "Analisis Ekosistem Budaya DIY", desc: "Analisis data ekosistem budaya.", tech: "Data Analytics", link: "https://github.com/oktaviandwipramudya504-sys/analisis-ekosistem-budaya-DIY", image: "/images/budaya-diy.jpg" },
  { title: "DIY HIV/AIDS PowerBI Analytics", desc: "Analisis data kesehatan.", tech: "Power BI", link: "https://github.com/oktaviandwipramudya504-sys/diy-hiv-aids-powerbi-analytics", image: "/images/hiv-aids-analytics.png" },
  { title: "Portofolio Data Analyst", desc: "Kumpulan proyek data.", tech: "Data Analysis", link: "https://github.com/oktaviandwipramudya504-sys/portofolio_data_analyst", image: "/images/data-analyst-portofolio.png" },
  { title: "Sales Analytics", desc: "Analisis data penjualan.", tech: "Python/SQL", link: "https://github.com/oktaviandwipramudya504-sys/sales-analytics", image: "/images/sales-analytics.png" },
  { title: "Spotify Data Analyst", desc: "Analisis data streaming musik.", tech: "Data Analytics", link: "https://github.com/oktaviandwipramudya504-sys/spotify-data-analyst-portfolio", image: "/images/spotify-analytics.png" },
  { title: "Frontend Home Project", desc: "Pengembangan antarmuka web.", tech: "Next.js", link: "https://github.com/oktaviandwipramudya504-sys/frontend-home-project", image: "/images/frontend-home.png" },
  { title: "Frontend Layout", desc: "Struktur layout web.", tech: "React", link: "https://github.com/oktaviandwipramudya504-sys/frontend-layout", image: "/images/frontend-layout.png" },
];

const certificates = [
  { title: "Sertifikat Teknisi & Sistem Komputer - Bagian 1", issuer: "Cyber Academy", date: "", image: "/images/sertif-cyber-1.png" },
  { title: "Sertifikat Teknisi & Sistem Komputer - Bagian 2", issuer: "Cyber Academy", date: "", image: "/images/sertif-cyber-2.png" },
  { title: "Sertifikat Kemampuan Bahasa Inggris", issuer: "Lembaga Bahasa", date: "", image: "/images/sertif-inggris.png" },
  { title: "Sertifikat Pelatihan Web Development", issuer: "Trainit", date: "", image: "/images/sertif-trainit.png" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [loading, setLoading] = useState(true);
  const [openCertificate, setOpenCertificate] = useState<null | { title: string; issuer: string; image: string }>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover z-0 opacity-50">
        <source src="/12336960-hd_1920_1028_60fps.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-black/60 z-0"></div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader" className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black" exit={{ opacity: 0, transition: { duration: 0.8 } }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex gap-8 text-2xl text-white mb-6">
              <FaCode /> <FaUser /> <FaCog />
            </motion.div>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-4xl font-bold tracking-[0.2em]">WELCOME</motion.h1>
          </motion.div>
        ) : (
          <motion.div className="relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: "easeInOut" }}>
            <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
              <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                <h1 className="text-xl font-bold tracking-[6px] cursor-pointer" onClick={() => setActiveTab("about")}>PORTOFOLIO</h1>
                <div className="flex gap-8 text-sm">
                  <button onClick={() => setActiveTab("about")} className="hover:text-cyan-400 transition">About</button>
                  <button onClick={() => setActiveTab("projects")} className="hover:text-cyan-400 transition">Projects</button>
                  <button onClick={() => setActiveTab("certificates")} className="hover:text-cyan-400 transition">Certificates</button>
                </div>
              </div>
            </nav>

            <section className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeTab === "about" && (
                  <motion.div key="about" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.6 }} className="max-w-4xl grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h1 className="text-5xl font-black mb-6">Oktavian<br />Dwi Pramudya</h1>
                      <p className="text-gray-400 text-md mb-8 leading-relaxed">
                        Saya adalah pengembang web dan spesialis analisis data yang berdedikasi dalam membangun solusi digital yang efisien. Dengan penguasaan pada sisi Frontend (HTML, CSS, Bootstrap) dan Backend (PHP, MySQL, Python), saya mampu merancang aplikasi web yang fungsional dan responsif. Selain pengembangan web, saya memiliki mampu dalam Data Mining dan membangun sistem analisis data yang kompleks. Saya memanfaatkan Power BI untuk menyajikan visualisasi data yang informatif, serta bekerja dengan presisi menggunakan VS Code dan Sublime Text untuk memastikan kualitas kode yang optimal.
                      </p>
                      <div className="flex gap-4 text-2xl text-gray-400">
                        <a href="https://github.com/oktaviandwipramudya504-sys" target="_blank" className="hover:text-white transition"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/oktavian-dwi-pramudya-3001a1411/" target="_blank" className="hover:text-blue-500 transition"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/oktavpramudya/" target="_blank" className="hover:text-pink-500 transition"><FaInstagram /></a>
                        <a href="https://www.tiktok.com/@oktav_pramudya" target="_blank" className="hover:text-cyan-400 transition"><FaTiktok /></a>
                        <a href="mailto:oktaviandwipramudya504@gmail.com" className="hover:text-red-500 transition"><FaEnvelope /></a>
                      </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }} className="relative w-full aspect-square max-w-sm rounded-[40px] overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/20 cursor-pointer">
                      <Image src="/images/foto-baru.jpg" alt="Profil" fill style={{ objectFit: "cover" }} />
                    </motion.div>
                  </motion.div>
                )}
                {activeTab === "projects" && (
                  <motion.div key="projects" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.6 }} className="max-w-7xl">
                    <h2 className="text-4xl font-black mb-12">Project</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                      {projects.map((p, i) => (
                        <motion.div 
                          key={i} 
                          layout 
                          onClick={() => setExpandedId(expandedId === i ? null : i)}
                          className={`bg-black/40 backdrop-blur-sm border border-blue-600 rounded-3xl p-5 hover:border-cyan-400 transition cursor-pointer ${expandedId === i ? "fixed inset-0 z-50 m-auto w-[90%] max-w-2xl h-fit max-h-[80vh] overflow-y-auto" : "animate-[float_3s_ease-in-out_infinite]"}`}
                        >
                          {expandedId === i && <div className="fixed inset-0 bg-black/80 -z-10" onClick={() => setExpandedId(null)} />}
                          
                          {/* Tombol Close */}
                          {expandedId === i && (
                            <button 
                              className="absolute top-6 right-6 z-[60] text-white bg-white/20 p-2.5 rounded-full hover:bg-white/40 transition backdrop-blur-md shadow-lg" 
                              onClick={(e) => { e.stopPropagation(); setExpandedId(null); }}
                            >
                              <FaTimes size={20} />
                            </button>
                          )}

                          <div className={`relative w-full ${expandedId === i ? "h-64" : "h-40"} mb-4 rounded-xl overflow-hidden bg-slate-900 transition-all`}>
                            <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} />
                          </div>
                          <h3 className="font-bold mb-2 text-xl">{p.title}</h3>
                          <p className={`text-gray-400 mb-4 ${expandedId === i ? "text-base" : "text-xs line-clamp-2"}`}>{p.desc}</p>
                          
                          {expandedId === i && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 pt-4 border-t border-white/10">
                              <p className="text-sm mb-4">Teknologi: <span className="text-cyan-400">{p.tech}</span></p>
                              <a href={p.link} target="_blank" className="inline-block bg-blue-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-cyan-600 transition">Lihat Repositori →</a>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
                {activeTab === "certificates" && (
                  <motion.div key="certificates" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                    <h2 className="text-4xl font-black mb-12">Certificate</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {certificates.map((c, i) => (
                        <button key={i} type="button" className="bg-black/40 backdrop-blur-sm p-4 rounded-3xl border border-blue-600 flex flex-col items-center text-center hover:border-cyan-400 transition cursor-pointer w-full animate-[float_3s_ease-in-out_infinite] hover:scale-105" onClick={() => setOpenCertificate(c)}>
                          <div className="relative w-full aspect-[4/3] mb-4 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                            <Image src={c.image} alt={c.title} fill style={{ objectFit: "cover" }} className="hover:scale-105 transition duration-300" />
                          </div>
                          <div className="w-full">
                            <h3 className="font-bold text-sm mb-1 line-clamp-2">{c.title}</h3>
                            <p className="text-xs text-gray-400">{c.issuer}</p>
                          </div>
                        </button>
                      ))}
                    </div>

                    <AnimatePresence>
                      {openCertificate && (
                        <motion.div className="fixed inset-0 z-[200] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <button type="button" className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpenCertificate(null)} />
                          <motion.div className="relative w-full max-w-2xl bg-black/40 backdrop-blur-sm border border-blue-600 p-2 rounded-2xl" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}>
                            <div className="relative w-full aspect-[4/3]">
                              <Image src={openCertificate.image} alt={openCertificate.title} fill style={{ objectFit: "contain" }} />
                            </div>
                            <button className="absolute -top-10 right-0 text-white bg-white/10 p-2 rounded-full" onClick={() => setOpenCertificate(null)}>Close</button>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </main>
  );
}