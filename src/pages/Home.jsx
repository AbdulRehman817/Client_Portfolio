import React, { useEffect, useState } from "react";
import {
  Palette,
  CheckCircle,
  Layout,
  Share2,
  Megaphone,
  ArrowRight,
  MessageSquare,
  Lightbulb,
  Paintbrush,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";
import servicesPackages from "../assets/services-packages.png";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const services = [
    {
      icon: Palette,
      title: "Personal Brand Design: Business Branding",
      description:
        "Personal and business brand identities built for clarity, trust, and authority.",
      slug: "brand-design",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description:
        "User-centered interface design for web and mobile apps that delights users and drives conversions.",
      slug: "ui-ux-design",
    },
    {
      icon: Share2,
      title: "Social Media Content",
      description:
        "Engaging content strategies and designs that build your audience and grow your brand presence online.",
      slug: "social-media-content",
    },
    {
      icon: Megaphone,
      title: "Digital Strategy",
      description:
        "Strategic planning to position your brand, reach your audience, and achieve your business goals.",
      slug: "digital-strategy",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Discovery Call",
      description:
        "We start with a free consultation to understand your goals, challenges, and vision for the project.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy & Planning",
      description:
        "I create a detailed project plan with timelines, milestones, and deliverables tailored to your needs.",
    },
    {
      number: "03",
      icon: Paintbrush,
      title: "Design & Development",
      description:
        "I bring your vision to life with iterative design and development, keeping you involved every step.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Support",
      description:
        "After thorough testing, we launch your project and I provide ongoing support to ensure success.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D0D0D]/95 backdrop-blur-lg border-b border-[#2A2A2A]"
            : "bg-transparent"
        }`}
      >
        <div className="p-5 text-#F2F2F2]">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="bg-[#E53935] px-4 py-2 rounded-md text-lg font-semibold">
              Subhan
            </div>

            {/* Links */}
            <div className="hidden md:flex gap-8 text-[#999999]">
              <a href="#services" className="hover:text-white">
                Services
              </a>
              <a href="#work" className="hover:text-white">
                Work
              </a>
              <a href="#prices" className="hover:text-white">
                Prices
              </a>
              <a href="#testimonials" className="hover:text-white">
                Testimonials
              </a>
            </div>

            {/* CTA */}
            <button className="bg-[#E53935] px-4 py-2 rounded-md hover:bg-[#E53935]/90">
              Book a call
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4B8BF5]/9 via-transparent to-transparent" />

        <div className="container px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4B8BF5]/10 border border-[#4B8BF5]/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#4B8BF5] animate-pulse" />
              <span className="text-sm text-white">
                Available for new projects
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#F2F2F2] mb-6">
              I design & build <br />
              <span className="text-[#4B8BF5]">digital experiences</span> <br />
              that grow brands.
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mb-10">
              I help founders, coaches, and businesses stand out with branding,
              websites, and content that converts.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="flex items-center gap-2 px-8 py-4 bg-[#E53935] text-white rounded-lg text-lg hover:bg-[#E53935]/90 transition">
                Book a Free 1:1 Discovery Call
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="px-12 py-2 border-2 border-[#999999]/30 text-white rounded-lg text-lg hover:border-[#4B8BF5] hover:text-[#4B8BF5] transition   transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer ">
                View My Work
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {["5+ Years Experience", "50+ Projects", "100% Satisfaction"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[#A0A0A0]"
                  >
                    <CheckCircle className="w-5 h-5 text-[#4B8BF5]" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-24 bg-[#000000]/90">
        <div className="px-6">
          <div className="container">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-[#4B8BF5]/10 text-[#4B8BF5] text-sm font-medium mb-4">
                What I Do
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-[#F2F2F2] mb-4">
                Services tailored for{" "}
                <span className="text-[#4B8BF5]">your success</span>
              </h2>
              <p className="text-lg text-[#A0A0A0] font-body">
                I offer end-to-end solutions to help you build and grow your
                digital presence. Each project receives my full attention and
                expertise.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Link
                  key={service.title}
                  to={`/services/${service.slug}`}
                  className="group p-8 rounded-2xl bg-[#1A1A1A] border-[#999999]/30 border border-border hover:border-[#4B8BF5]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4B8BF5]/30"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#4B8BF5]/10 flex items-center justify-center transition-colors">
                      <service.icon className="w-7 h-7 text-[#4B8BF5]" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#999999] group-hover:text-[#4B8BF5] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-display text-[#F2F2F2] mb-3 group-hover:text-[#4B8BF5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#A0A0A0] font-body leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[1200px] mx-auto ">
            {/* Services Packages Image */}
            <div className="mt-16">
              <img
                src={servicesPackages}
                alt="Service packages and pricing"
                className="w-full rounded-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="process" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 text-[#4B8BF5] bg-[#4B8BF5]/10">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#fafafa]">
              A simple process for{" "}
              <span className="text-[#4B8BF5]">great results</span>
            </h2>
            <p className="text-lg" style={{ color: "#a1a1aa" }}>
              I've refined my workflow to make collaboration smooth and
              efficient. Here's what working with me looks like.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-12 left-full w-full h-[2px] -translate-x-1/2 z-0"
                    style={{ backgroundColor: "#27272a" }}
                  />
                )}

                <div className="relative z-10 text-center">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 mb-6 relative bg-[#18181b] border-[#27272a]">
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center bg-[#4B8BF5] text-white">
                      {step.number}
                    </span>
                    <step.icon className="w-10 h-10 text-[#4B8BF5]" />
                  </div>

                  <h3
                    className="text-lg font-serif mb-2"
                    style={{ color: "#fafafa" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#a1a1aa" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
