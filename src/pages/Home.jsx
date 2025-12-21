import { ArrowRight, CheckCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Navbar */}
      <section className="bg-transparent min-h-screen">
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-[#0D0D0D]/95 backdrop-blur-lg border-b border-[#2A2A2A] shadow-sm"
              : "bg-transparent"
          }`}
        >
          <div className="bg-gradient-to-br from-[#4B8BF5]/5 via-transparent to-transparent text-[#F2F2F2] p-5">
            <div className="flex justify-between items-center">
              <div className="bg-[#E53935] text-center text-[#F2F2F2] ml-[3px] text-[1.5rem] p-1 w-27.5  border-red-500 rounded-md border-0">
                <p className="relative bottom-[10px]">Subhan</p>
              </div>
              <div className="flex gap-8 bg-transparent text-[#999999]">
                <div>Services</div>
                <div>Work</div>
                <div>Prices</div>
                <div>Testimonials</div>
              </div>
              <div className="bg-[#E53935] text-center text-[#F2F2F2] text-[1.2rem] p-1 w-27.5  border-red-500 rounded-md border-0">
                <span className="relative bottom-[10px]">Book a call</span>
              </div>
            </div>
          </div>
        </nav>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0D0D]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4B8BF5]/5 via-transparent to-transparent" />
          <div className="container px-6 pt-32 pb-20 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4B8BF5]/10 border border-[#4B8BF5]/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#4B8BF5] animate-pulse" />
                <span className="text-sm font-medium text-[#F2F2F2]">
                  Available for new projects
                </span>
              </div>
              <div className="space-y-6 mb-10">
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-serif leading-tight text-[#F2F2F2]">
                  I design & build
                  <br />
                  <span className="text-[#4B8BF5]">digital experiences</span>
                  <br />
                  that grow both personal and business brands.
                </h1>
                <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl leading-relaxed">
                  As a brand & content designer, I specialize in creating
                  compelling visual identities, websites, and content strategies
                  that help founders, coaches, and businesses stand out.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mb-12">
                <button className="flex items-center gap-2 px-8 py-4 bg-[#E53935] hover:bg-[#E53935]/90 text-white rounded-lg font-medium text-lg transition-colors group">
                  Book a Free 1:1 Discovery Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-[#2A2A2A] text-[#F2F2F2] hover:bg-[#1A1A1A] rounded-lg font-medium text-lg transition-colors">
                  View My Work
                </button>
              </div>
              <div className="flex flex-wrap gap-6">
                {[
                  "5+ years experience",
                  "50+ projects delivered",
                  "100% satisfaction",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2 text-[#A0A0A0]"
                  >
                    <CheckCircle className="w-5 h-5 text-[#4B8BF5]" />
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;

// import { useState, useEffect } from "react";
// import { Menu, X, ArrowRight, CheckCircle } from "lucide-react";

// const navItems = [
//   { label: "Services", href: "#services" },
//   { label: "Work", href: "#work" },
//   { label: "Pricing", href: "#pricing" },
//   { label: "Testimonials", href: "#testimonials" },
// ];

// const Home = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Navbar */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-[#0D0D0D]/95 backdrop-blur-lg border-b border-[#2A2A2A] shadow-sm"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="container  px-6 py-4">
//           <div className="flex items-center justify-between">
//             <a
//               href="/"
//               className="text-2xl font-serif px-3 py-1 bg-[#E53935] text-white rounded"
//             >
//               Subhan
//             </a>
//             <div className="hidden md:flex items-center gap-8">
//               {navItems.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors duration-200 text-sm font-medium"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//             <a
//               href="#booking"
//               className="hidden md:flex items-center gap-2 px-6 py-3 bg-[#E53935] hover:bg-[#E53935]/90 text-white rounded-lg font-medium transition-colors"
//             >
//               Book a Free 1:1 Discovery Call
//             </a>
//             <button
//               className="md:hidden text-[#F2F2F2]"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//           {isMobileMenuOpen && (
//             <div className="md:hidden mt-4 pb-4">
//               {navItems.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="block py-2 text-[#A0A0A0] hover:text-[#F2F2F2]"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//               <a
//                 href="#booking"
//                 className="mt-4 block text-center px-6 py-3 bg-[#E53935] text-white rounded-lg"
//               >
//                 Book a Free 1:1 Discovery Call
//               </a>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero */}
//       <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0D0D]">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#4B8BF5]/5 via-transparent to-transparent" />
//         <div className="container  px-6 pt-32 pb-20 relative z-10">
//           <div className="max-w-4xl">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4B8BF5]/10 border border-[#4B8BF5]/20 mb-8">
//               <span className="w-2 h-2 rounded-full bg-[#4B8BF5] animate-pulse" />
//               <span className="text-sm font-medium text-[#F2F2F2]">
//                 Available for new projects
//               </span>
//             </div>
//             <div className="space-y-6 mb-10">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-[#F2F2F2]">
//                 I design & build
//                 <br />
//                 <span className="text-[#4B8BF5]">digital experiences</span>
//                 <br />
//                 that grow both personal and business brands.
//               </h1>
//               <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl leading-relaxed">
//                 As a brand & content designer, I specialize in creating
//                 compelling visual identities, websites, and content strategies
//                 that help founders, coaches, and businesses stand out.
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-4 mb-12">
//               <button className="flex items-center gap-2 px-8 py-4 bg-[#E53935] hover:bg-[#E53935]/90 text-white rounded-lg font-medium text-lg transition-colors group">
//                 Book a Free 1:1 Discovery Call
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="px-8 py-4 border border-[#2A2A2A] text-[#F2F2F2] hover:bg-[#1A1A1A] rounded-lg font-medium text-lg transition-colors">
//                 View My Work
//               </button>
//             </div>
//             <div className="flex flex-wrap gap-6">
//               {[
//                 "5+ years experience",
//                 "50+ projects delivered",
//                 "100% satisfaction",
//               ].map((point) => (
//                 <div
//                   key={point}
//                   className="flex items-center gap-2 text-[#A0A0A0]"
//                 >
//                   <CheckCircle className="w-5 h-5 text-[#4B8BF5]" />
//                   <span className="text-sm font-medium">{point}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
// export default Home;
