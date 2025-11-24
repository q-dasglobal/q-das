"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  HiArrowRight,
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineCube,
  HiOutlineLightBulb,
  HiOutlineAcademicCap,
  HiOutlineSupport,
  HiOutlineShieldCheck,
  HiOutlineUsers,
  HiOutlineTrendingUp,
  HiOutlineStar,
  HiChevronDown,
  HiCheckCircle,
} from "react-icons/hi";

const services = [
  {
    icon: HiOutlineCode,
    title: "Software & Application Development",
    description:
      "Custom software solutions tailored to your business needs. From web applications to mobile apps, we build scalable and robust solutions.",
    image: "/images/software-dev.jpg",
  },
  {
    icon: HiOutlineServer,
    title: "Managed IT Services",
    description:
      "Comprehensive IT management and support services. We handle your infrastructure so you can focus on your core business.",
    image: "/images/managed-it.jpg",
  },
  {
    icon: HiOutlineCube,
    title: "Infrastructure Solutions",
    description:
      "Design, deployment, and management of IT infrastructure. From data centers to cloud solutions, we build reliable foundations.",
    image: "/images/infrastructure.jpg",
  },
  {
    icon: HiOutlineLightBulb,
    title: "IT Consulting",
    description:
      "Strategic IT consulting to align technology with your business goals. Expert guidance for digital transformation initiatives.",
    image: "/images/consulting.jpg",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Training & Capacity Building",
    description:
      "Empower your team with cutting-edge technology skills. Customized training programs for lasting impact.",
    image: "/images/training.jpg",
  },
  {
    icon: HiOutlineSupport,
    title: "Technical Support & 24/7 Maintenance",
    description:
      "Round-the-clock technical support and system maintenance. We ensure your systems are always running smoothly.",
    image: "/images/support.jpg",
  },
];

const benefits = [
  {
    icon: HiOutlineShieldCheck,
    title: "Enterprise-Ready Solutions",
    description:
      "Built to scale with your business. Our solutions are designed for reliability, security, and performance at enterprise level.",
  },
  {
    icon: HiOutlineTrendingUp,
    title: "Client-Centric Approach",
    description:
      "Your success is our priority. We work closely with you to understand your needs and deliver solutions that drive results.",
  },
  {
    icon: HiOutlineUsers,
    title: "Scalable Solutions",
    description:
      "Grow without limits. Our infrastructure and applications are built to scale seamlessly as your business expands.",
  },
  {
    icon: HiOutlineStar,
    title: "Innovation & Reliability",
    description:
      "Cutting-edge technology meets proven reliability. We combine innovation with stability to deliver exceptional results.",
  },
];

const testimonials = [
  {
    name: "Obilade Kevin",
    role: "CEO, Tech Innovators",
    company: "Tech Innovators",
    content:
      "Working with Q-DAS Global has been transformative. Their team delivered a solution that exceeded our expectations. The level of professionalism and technical expertise is outstanding.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Amina Mohammed",
    role: "CTO, Digital Solutions",
    company: "Digital Solutions Ltd",
    content:
      "Q-DAS Global doesn't just deliver projects - they deliver value. Their strategic approach and attention to detail made all the difference in our digital transformation journey.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Chukwudi Okafor",
    role: "IT Director",
    company: "Enterprise Corp",
    content:
      "The team at Q-DAS Global brought our vision to life with exceptional skill and dedication. Their ongoing support has been invaluable to our operations.",
    avatar: "/images/avatar-3.jpg",
  },
];

const faqs = [
  {
    question: "What is Q-DAS?",
    answer:
      "Q-DAS Global is a leading IT solutions provider specializing in custom software development, infrastructure solutions, and IT consulting services. We partner with businesses to deliver innovative technology solutions that drive growth and efficiency.",
  },
  {
    question: "What services does Q-DAS offer?",
    answer:
      "We offer a comprehensive range of IT services including Software & Application Development, Managed IT Services, Infrastructure Solutions, IT Consulting, Training & Capacity Building, and 24/7 Technical Support & Maintenance.",
  },
  {
    question: "How can Q-DAS help my business?",
    answer:
      "Q-DAS helps businesses leverage technology to achieve their goals. Whether you need custom software, IT infrastructure, or strategic consulting, we provide tailored solutions that align with your business objectives and drive measurable results.",
  },
  {
    question: "What industries does Q-DAS serve?",
    answer:
      "We serve a diverse range of industries including finance, healthcare, government, education, retail, and manufacturing. Our team has deep expertise across multiple sectors and can adapt our solutions to any industry.",
  },
  {
    question: "How do I get started with Q-DAS?",
    answer:
      "Getting started is easy! Simply fill out our contact form or reach out to us directly via email or phone. We'll schedule an initial consultation to understand your needs and propose a tailored solution.",
  },
  {
    question: "What makes Q-DAS different from other IT companies?",
    answer:
      "Our combination of technical expertise, client-centric approach, and proven track record sets us apart. We focus on delivering real business value, not just technology. Our team works as your partner, ensuring success at every stage.",
  },
];

const techPartners = [
  { name: "Microsoft", logo: "/images/microsoft-logo.svg" },
  { name: "AWS", logo: "/images/aws-logo.svg" },
  { name: "Google Cloud", logo: "/images/google-cloud-logo.svg" },
  { name: "Huawei", logo: "/images/huawei-logo.svg" },
  { name: "Oracle", logo: "/images/oracle-logo.svg" },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-4 py-24 lg:py-32">
        <div className="container relative z-10 mx-auto">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-sm font-medium tracking-wide text-blue-200"
            >
              TECHNOLOGY SOLUTIONS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl"
            >
              Custom IT Solutions for Teams with Big Goals
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-blue-100 lg:text-xl"
            >
              Empowering businesses with innovative technology solutions. From
              software development to infrastructure management, we deliver
              excellence at every step.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-blue-900 transition-all hover:bg-blue-50 hover:shadow-lg"
              >
                Get Started
                <HiArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-2 py-3 font-medium text-blue-100 transition-colors hover:text-white"
              >
                View Our Services
              </a>
            </motion.div>

            {/* Stats badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 flex flex-wrap gap-8"
            >
              <div className="flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-blue-200">Projects Delivered</div>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-blue-200">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
          <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-300 blur-3xl"></div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="border-b border-gray-200 bg-white px-4 py-12">
        <div className="container mx-auto">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-gray-500">
            Powering Innovation Through Partnerships
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 grayscale hover:grayscale-0 transition-all duration-300">
            {techPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-12 items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <span className="text-lg font-semibold">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 px-4 py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-blue-600">
              OUR SERVICES
            </p>
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              Custom IT Solutions That Drive Growth
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We offer comprehensive IT services designed to meet your unique
              business challenges and accelerate your digital transformation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700">
                  <div className="flex h-full items-center justify-center">
                    <service.icon className="h-20 w-20 text-white opacity-50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium transition-colors hover:text-blue-700">
                    Learn more
                    <HiArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Q-DAS Section */}
      <section className="bg-white px-4 py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-blue-600">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              Why Choose Q-DAS Global
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We combine technical expertise with a client-first approach to
              deliver solutions that make a real difference.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-blue-600">
              TESTIMONIALS
            </p>
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              What Our Clients Say About Q-DAS
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-white p-8 shadow-md transition-all hover:shadow-xl"
              >
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-20 lg:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-blue-600">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              Answers To Questions You Might Have
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="overflow-hidden rounded-lg border border-gray-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between bg-white p-6 text-left transition-colors hover:bg-gray-50"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <HiChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="bg-gray-50 px-6 py-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 px-4 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-blue-600">
                GET IN TOUCH
              </p>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                Get in Touch
              </h2>
              <p className="mb-8 text-gray-600 leading-relaxed">
                Ready to take your business to the next level? Contact us today
                to discuss how we can help you achieve your goals.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <p className="flex items-center gap-3 text-gray-600">
                      <HiCheckCircle className="h-5 w-5 text-blue-600" />
                      info@qdasglobal.com
                    </p>
                    <p className="flex items-center gap-3 text-gray-600">
                      <HiCheckCircle className="h-5 w-5 text-blue-600" />
                      +234 800 000 0000
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 8:00am - 6:00pm</p>
                    <p>Saturday: 9:00am - 2:00pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-xl bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-xl font-semibold text-gray-900">
                  Start The Conversation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="+234 800 000 0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
