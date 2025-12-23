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
  Check,
  ArrowUpRight,
  Quote,
  Calendar,
  Clock,
  Video,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import servicesPackages from "../assets/services-packages.png";
import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(
        `Booking confirmed for ${selectedDate.toDateString()} at ${selectedTime}`
      );
    }
  };

  const prevMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  const nextMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );

  const testimonials = [
    {
      quote:
        "Working with him was a game-changer for our startup. He understood our vision and delivered beyond expectations.",
      author: "Sarah Chen",
      role: "CEO, TechVentures",
      avatar: "SC",
    },
    {
      quote:
        "Incredible attention to detail and truly cares about the end result. The process was smooth from start to finish.",
      author: "Marcus Johnson",
      role: "Founder, StartupLab",
      avatar: "MJ",
    },
    {
      quote:
        "Professional, creative, and efficient. He delivered a website that perfectly captures our brand identity.",
      author: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      avatar: "ER",
    },
  ];

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

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development • UI/UX",
      image: portfolio1,
      description: "Full-stack e-commerce solution with custom checkout flow",
    },
    {
      title: "SaaS Dashboard",
      category: "Product Design • Development",
      image: portfolio2,
      description: "Analytics dashboard for a growing startup",
    },
    {
      title: "Brand Identity",
      category: "Branding • Strategy",
      image: portfolio3,
      description: "Complete rebrand for a tech company",
    },
  ];

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small projects and MVPs",
      price: "$2,500",
      duration: "starting at",
      features: [
        "Single page website or landing page",
        "Mobile responsive design",
        "Basic SEO setup",
        "2 rounds of revisions",
        "1 week delivery",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Best for growing businesses",
      price: "$5,000",
      duration: "starting at",
      features: [
        "Multi-page website (up to 5 pages)",
        "Custom UI/UX design",
        "CMS integration",
        "Advanced SEO optimization",
        "3 rounds of revisions",
        "2-3 weeks delivery",
        "30 days support included",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For complex web applications",
      price: "Custom",
      duration: "quote",
      features: [
        "Full web application development",
        "Custom features & integrations",
        "Database design & setup",
        "User authentication",
        "API development",
        "Unlimited revisions",
        "Priority support",
      ],
      popular: false,
    },
  ];
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
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
            <div className="bg-[#E53935] ml-[4px] px-4 py-2 rounded-md text-lg font-semibold">
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
        <div className="px-6">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 text-[#4B8BF5] bg-[#4B8BF5]/10">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#4B8BF5]">
              A simple process for{" "}
              <span className="text-[#4B8BF5]">great results</span>
            </h2>
            <p className="text-lg" style={{ color: "#a1a1aa" }}>
              I've refined my workflow to make collaboration smooth and
              efficient. Here's what working with me looks like.
            </p>
          </div>

          {/* Steps */}
          <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1500px]">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] -translate-x-1/2 z-0 bg-[#27272a]" />
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
                    style={{ color: "#4B8BF5" }}
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

      {/* ================= PORTFOLIO ================= */}
      <section
        id="work"
        className="py-24"
        style={{ backgroundColor: "#0A0A0B" }}
      >
        <div className="px-6">
          {/* Section Header */}
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="inline-block bg-[#4B8BF5]/10 px-4 py-2 rounded-full text-sm font-medium mb-4 text-[#4B8BF5]">
                My Work
              </span>
              <h2
                className="text-3xl md:text-4xl font-serif"
                style={{ color: "#4B8BF5" }}
              >
                Featured <span className="text-[#4B8BF5]">projects</span>
              </h2>
            </div>
            <p className="max-w-md mt-4 md:mt-0 text-[#A1A1AA]">
              A selection of recent work I'm proud of. Each project represents a
              unique challenge and solution.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="group cursor-pointer">
                {/* Image Container */}
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6"
                  style={{ backgroundColor: "#1A1A1D" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10, 10, 11, 0.6), transparent, transparent)",
                    }}
                  />

                  {/* Hover Icon */}
                  <div className="absolute bottom-4 bg-[#4B8BF5] right-4 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight
                      className="w-5 h-5"
                      style={{ color: "#FFFFFF" }}
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <span
                    className="text-sm mb-2 block"
                    style={{ color: "#A1A1AA" }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="text-xl font-serif mb-2 transition-colors group-hover:text-[#4B8BF5]"
                    style={{ color: "#4B8BF5" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#A1A1AA" }}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}

      <section
        id="pricing"
        className="py-24"
        style={{ backgroundColor: "#1A1A1D" }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 text-[#4B8BF5] bg-[#4B8BF5]/10">
              Pricing
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#4B8BF5" }}
            >
              Transparent pricing for{" "}
              <span style={{ color: "#4B8BF5" }}>every budget</span>
            </h2>
            <p className="text-lg" style={{ color: "#A1A1AA" }}>
              Choose a package that fits your needs, or let's discuss a custom
              solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border-[#999999]/30 transition-all duration-300 bg-transparent border-1 ${
                  plan.popular
                    ? "border-[#4B8BF5] shadow-[0_0_12px_#4B8BF5]"
                    : " shadow-none"
                } hover:-translate-y-2 hover:border-[#4B8BF5] hover:shadow-[0_0_12px_#4B8BF5]`}
              >
                {plan.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: "#4B8BF5", color: "#FFFFFF" }}
                  >
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#4B8BF5" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-sm" style={{ color: "#A1A1AA" }}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "#4B8BF5" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm ml-2" style={{ color: "#A1A1AA" }}>
                    {plan.duration}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: "#4B8BF5" }}
                      />
                      <span className="text-sm" style={{ color: "#A1A1AA" }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 group"
                  style={{
                    backgroundColor: plan.popular ? "#4B8BF5" : "transparent",
                    color: plan.popular ? "#FFFFFF" : "#4B8BF5",
                    border: plan.popular ? "none" : "1px solid #4B8BF5",
                  }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-sm mt-12" style={{ color: "#A1A1AA" }}>
            Need something different?{" "}
            <a
              href="#booking"
              style={{ color: "#4B8BF5" }}
              className="hover:underline"
            >
              Schedule a call
            </a>
          </p>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section
        id="testimonials"
        className="py-24"
        style={{ backgroundColor: "#1A1A1D" }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 text-[#4B8BF5] bg-[#4B8BF5]/10">
              Testimonials
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#4B8BF5" }}
            >
              What clients <span style={{ color: "#4B8BF5" }}>say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="p-8 rounded-2xl border-[#999999]/30  bg-transparent border-1 border-solid   hover:border-[#4B8BF5]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4B8BF5]/30 "
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-[#4B8BF5]/10">
                  <Quote className="w-5 h-5" style={{ color: "#4B8BF5" }} />
                </div>

                <p
                  className="leading-relaxed mb-8"
                  style={{ color: "#FAFAFA" }}
                >
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#4B8BF5]/10">
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#4B8BF5" }}
                    >
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: "#4B8BF5" }}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm" style={{ color: "#A1A1AA" }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOOK A CALL ================= */}
      <section
        id="booking"
        className="py-24"
        style={{ backgroundColor: "#0A0A0B" }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 text-[#4B8BF5] bg-[#4B8BF5]/10">
              Book a Call
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4B8BF5]">
              Let's discuss your{" "}
              <span style={{ color: "#4B8BF5" }}>project</span>
            </h2>
            <p className="text-lg" style={{ color: "#A1A1AA" }}>
              Schedule a free 30-minute discovery call to explore how we can
              work together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Calendar */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "#1A1A1D",
                border: "1px solid #27272A",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevMonth}
                  className="p-2 rounded-lg hover:opacity-80"
                  style={{ backgroundColor: "#27272A" }}
                >
                  <ChevronLeft
                    className="w-5 h-5"
                    style={{ color: "#FAFAFA" }}
                  />
                </button>
                <h3 className="font-semibold" style={{ color: "#FAFAFA" }}>
                  {currentMonth.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </h3>
                <button
                  onClick={nextMonth}
                  className="p-2 rounded-lg hover:opacity-80"
                  style={{ backgroundColor: "#27272A" }}
                >
                  <ChevronRight
                    className="w-5 h-5"
                    style={{ color: "#FAFAFA" }}
                  />
                </button>
              </div>

              <div
                className="grid grid-cols-7 gap-2 text-center text-sm mb-2"
                style={{ color: "#A1A1AA" }}
              >
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div key={day} className="py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {emptyDays.map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {days.map((day) => {
                  const date = new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth(),
                    day
                  );
                  const isSelected =
                    selectedDate?.toDateString() === date.toDateString();
                  const isPast =
                    date < new Date(new Date().setHours(0, 0, 0, 0));

                  return (
                    <button
                      key={day}
                      onClick={() => !isPast && setSelectedDate(date)}
                      disabled={isPast}
                      className="p-2 rounded-lg text-sm font-medium transition-all"
                      style={{
                        backgroundColor: isSelected ? "#4B8BF5" : "transparent",
                        color: isPast
                          ? "#52525B"
                          : isSelected
                          ? "#FFFFFF"
                          : "#FAFAFA",
                        cursor: isPast ? "not-allowed" : "pointer",
                      }}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slots */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "#1A1A1D",
                border: "1px solid #27272A",
              }}
            >
              <h3 className="font-semibold mb-6" style={{ color: "#FAFAFA" }}>
                {selectedDate
                  ? `Available times for ${selectedDate.toLocaleDateString()}`
                  : "Select a date first"}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      disabled={!selectedDate}
                      className="py-3 px-4 rounded-lg text-sm font-medium transition-all hover:opacity-80"
                      style={{
                        backgroundColor: isSelected ? "#4B8BF5" : "#27272A",
                        color: "#FAFAFA",
                        opacity: !selectedDate ? 0.5 : 1,
                        cursor: !selectedDate ? "not-allowed" : "pointer",
                      }}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>

              {selectedDate && selectedTime && (
                <button
                  onClick={handleBooking}
                  className="w-full mt-6 py-3 px-6 rounded-lg font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: "#4B8BF5", color: "#FFFFFF" }}
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </div>

          {/* Info Cards */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: "30 Minutes",
                desc: "Quick discovery call",
              },
              { icon: Video, title: "Video Call", desc: "Via Google Meet" },
              { icon: Calendar, title: "Free", desc: "No obligation" },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  backgroundColor: "#1A1A1D",
                  border: "1px solid #27272A",
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#4B8BF5]/10">
                  <Icon className="w-5 h-5" style={{ color: "#4B8BF5" }} />
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "#4B8BF5" }}>
                    {title}
                  </div>
                  <div className="text-sm" style={{ color: "#A1A1AA" }}>
                    {desc}
                  </div>
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
