export type ServiceFeature = {
  title: string;
  desc: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  image: string;
};

export const services: Service[] = [
  {
    id: "software-development",
    title: "Software & Application Development",
    description:
      "We design and develop intelligent, scalable, and user-centric software solutions that drive digital transformation and empower business agility. At Q-DAS Global, our development teams apply modern engineering practices, agile methodologies, and emerging technologies to build high-performance applications across platforms.",
    features: [
      {
        title: "Mobile Application Development",
        desc: "Native and cross-platform apps for iOS, Android, Windows, and Amazon Kindle, optimized for performance and UX.",
      },
      {
        title: "Web Apps & PWAs",
        desc: "Responsive and dynamic web experiences using HTML5, CSS3, Ruby on Rails, Node.js, and React.",
      },
      {
        title: "Cloud-Native Architecture",
        desc: "Building modular, scalable apps that run seamlessly in cloud environments.",
      },
      {
        title: "API Integration & Data Handling",
        desc: "Seamless system connectivity using RESTful APIs, GraphQL, XML, and JSON formats.",
      },
      {
        title: "Cross-Platform Integration",
        desc: "Apps for Apple TV, Chromecast, IoT devices, and platforms like J2ObjC.",
      },
      {
        title: "AI-Driven Apps",
        desc: "Infusing apps with machine learning, chatbots, and predictive analytics.",
      },
    ],
    image: "/services/SOFTWARE & APPLICATION DEVELOPMENT 1.webp",
  },
  {
    id: "managed-it-services",
    title: "Managed IT Services",
    description:
      "Our Managed IT Services enable you to focus on innovation and growth while we take full responsibility for your technology environment. With 24/7 support from our expert Service Desk, Q-DAS Global ensures your systems remain secure, agile, and always available.",
    features: [
      {
        title: "End-to-End IT Lifecycle",
        desc: "Proactive monitoring, maintenance, and support for all critical systems.",
      },
      {
        title: "AI-Powered Automation",
        desc: "Reduce downtime and streamline routine IT operations using AI and intelligent workflows.",
      },
      {
        title: "Cloud Services",
        desc: "Seamless cloud migration, resource optimization, and hybrid/multi-cloud management.",
      },
      {
        title: "Advanced Cybersecurity",
        desc: "Enterprise-grade solutions for real-time threat detection and regulatory compliance.",
      },
      {
        title: "On-Demand Support",
        desc: "Remote and on-site technical support based on customized Service Level Agreements (SLAs).",
      },
      {
        title: "IT Strategy & Road Mapping",
        desc: "Aligning technology with business objectives for long-term success.",
      },
    ],
    image: "/services/MANAGED IT SERVICES 1.webp",
  },
  {
    id: "infrastructure-solutions",
    title: "Infrastructure Solutions",
    description:
      "Our Infrastructure Solutions are engineered to create a secure, high-performing digital foundation for your business. We design, implement, and manage intelligent systems that adapt as your needs grow — from core networking to next-gen infrastructure technologies.",
    features: [
      {
        title: "Unified Networking",
        desc: "End-to-end network design, switching, IP telephony, and wireless connectivity.",
      },
      {
        title: "Enterprise Security",
        desc: "Firewalls, IDS, edge-to-endpoint encryption, and zero-trust architecture.",
      },
      {
        title: "Scalable Storage",
        desc: "High-performance data storage for on-premise, cloud, or hybrid environments.",
      },
      {
        title: "Virtualization",
        desc: "Complete virtualization strategies for desktop, application, and server layers.",
      },
      {
        title: "Next-Gen Connectivity",
        desc: "Integrated communication platforms including GSM data, V-SAT, and CUG telephony.",
      },
      {
        title: "IoT Infrastructure",
        desc: "Connect, monitor, and manage smart devices for real-time visibility and automation.",
      },
      {
        title: "Cloud Computing",
        desc: "Scalable cloud infrastructure coupled with big data analytics.",
      },
    ],
    image: "/services/Infrastructure Solutions 2 1.webp",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description:
      "Our Consulting Expertise covers IT & Digital Transformation Strategy, AI & Machine Learning Integration, Data Governance & Analytics Road Mapping, and Change Management & Technology Adoption.",
    features: [
      {
        title: "Digital Transformation Strategy",
        desc: "Guiding enterprises through modernization efforts — from cloud migration to platform adoption.",
      },
      {
        title: "AI & ML Integration",
        desc: "Leveraging automation and predictive analytics to enhance decision-making.",
      },
      {
        title: "Data Governance",
        desc: "Establishing frameworks for secure, compliant, and insightful data use.",
      },
      {
        title: "Change Management",
        desc: "Ensuring smooth implementation and organization-wide buy-in for new systems.",
      },
    ],
    image: "/services/IT Consulting 1.webp",
  },
  {
    id: "professional-support",
    title: "Professional Support & ICT Maintenance",
    description:
      "Our Professional Support and ICT Maintenance Services are designed to ensure your technology infrastructure runs efficiently, reliably, and with minimal disruption. At Q-DAS Global, we deliver proactive, SLA-driven support that keeps your systems performing at their peak.",
    features: [
      {
        title: "24/7 Technical Support",
        desc: "Real-time system oversight and rapid response to incidents.",
      },
      {
        title: "On-Site Technical Experts",
        desc: "Deployment of experienced IT professionals to manage complex issues.",
      },
      {
        title: "Hardware Maintenance",
        desc: "Comprehensive care for physical assets — from installation to decommissioning.",
      },
      {
        title: "Procurement of ICT Consumables",
        desc: "Reliable sourcing of quality ICT equipment at competitive prices.",
      },
      {
        title: "SLA Guarantees",
        desc: "Clearly defined metrics and performance standards tailored to your needs.",
      },
    ],
    image: "/services/Professional Support 1.webp",
  },
];
