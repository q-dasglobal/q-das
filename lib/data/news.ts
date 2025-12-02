export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Tech" | "Inside QDAS" | "Featured" | "Newsroom";
  date: string;
  author: string;
  image: string;
};

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "team-qdas-hosts-annual-innovation-week-2025",
    title: "Team Q-DAS Hosts Annual Innovation Week 2025",
    excerpt:
      "Creativity took center stage at QDAS Global's Innovation Week, where teams showcased cutting-edge ideas and collaborative projects shaping the future of technology and connectivity.",
    content: `
      <p>At QDAS Global, innovation is more than a buzzword — it’s part of our DNA. This year’s Annual Innovation Week 2025 brought together bright minds from across departments to collaborate, experiment, and showcase forward-thinking solutions that reflect our commitment to shaping the future of technology.</p>
      <p>Held at our headquarters, the week-long event featured a series of interactive workshops, design challenges, product demos, and tech talks focused on redefining what’s possible in digital transformation, telecommunications, and enterprise solutions. Teams were encouraged to think beyond conventional limits — developing ideas that not only enhance internal operations but also deliver greater value to our partners and clients.</p>
      <p>In his opening remarks, the Managing Director emphasized the importance of "curiosity-driven innovation" and the role it plays in maintaining QDAS Global’s position as a trusted leader in technology and connectivity.</p>
      <h3>"Every idea, no matter how small, holds the potential to change how we work, serve, and impact the world," he said.</h3>
      <p>Some standout projects included AI-powered customer engagement tools, automated monitoring dashboards, and smart digital infrastructure concepts that aim to improve scalability and efficiency across multiple sectors.</p>
      <p>The event also highlighted QDAS Global’s culture of collaboration — creating a space for team members to share insights, learn from one another, and celebrate creativity at every level.</p>
      <p>As the curtain closed on Innovation Week 2025, one thing became clear: QDAS Global’s strength lies in its people — innovators, thinkers, and builders who continually push boundaries to create technology that transforms businesses and lives.</p>
    `,
    category: "Inside QDAS",
    date: "November 12, 2025",
    author: "Hassan Umar",
    image:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "2",
    slug: "ai-powered-insights-transforming-business",
    title: "AI-Powered Insights: Transforming Business Decision-Making",
    excerpt:
      "The latest QDAS Innovation leverages artificial intelligence to deliver real-time analytics and predictive insights, empowering organizations to make smarter, data-driven decisions.",
    content: `
      <p>In today's fast-paced business environment, data is the new oil. However, raw data alone is not enough; it's the insights derived from that data that drive competitive advantage. QDAS Global is proud to announce its latest suite of AI-powered analytics tools designed to transform how businesses make decisions.</p>
      <p>Our new platform integrates seamlessly with existing enterprise systems to ingest, process, and analyze vast amounts of data in real-time. By leveraging advanced machine learning algorithms, we can identify patterns and trends that would be impossible for humans to detect manually.</p>
      <p>Key features include:</p>
      <ul>
        <li>Predictive Analytics: Forecast market trends and customer behavior with high accuracy.</li>
        <li>Automated Reporting: Generate comprehensive reports instantly, saving hours of manual work.</li>
        <li>Real-time Dashboards: Visualize key performance indicators (KPIs) as they happen.</li>
      </ul>
      <p>This launch marks a significant milestone in our mission to empower organizations with intelligent solutions. We believe that by democratizing access to advanced AI, we can help businesses of all sizes unlock their full potential.</p>
    `,
    category: "Tech",
    date: "November 10, 2025",
    author: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "3",
    slug: "future-of-work-digital-transformation",
    title: "The Future of Work: QDAS Global on Digital Transformation Trends",
    excerpt:
      "As industries embrace hybrid models and automation, QDAS Global shares insights on how businesses can stay agile in the evolving digital landscape.",
    content: `
      <p>The workplace is undergoing a seismic shift. Remote work, once a necessity, has become a preference for many. Automation is reshaping job roles, and digital tools are becoming the backbone of collaboration. At QDAS Global, we are at the forefront of this transformation, helping businesses adapt to the future of work.</p>
      <p>Our recent whitepaper explores the key trends driving this change:</p>
      <p>1. **Hybrid Work Models**: Finding the right balance between remote and in-office work to maximize productivity and employee satisfaction.</p>
      <p>2. **Digital Collaboration Tools**: Implementing platforms that enable seamless communication across distributed teams.</p>
      <p>3. **Cybersecurity**: Ensuring that remote access does not compromise sensitive corporate data.</p>
      <p>We believe that the future of work is not just about technology; it's about culture. Organizations that foster a culture of agility and continuous learning will thrive in the digital age.</p>
    `,
    category: "Featured",
    date: "November 9, 2025",
    author: "David Chen",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "4",
    slug: "driving-sustainability-through-tech",
    title: "Driving Sustainability Through Tech Innovation",
    excerpt:
      "QDAS Global is championing eco-conscious technology by integrating green data solutions and sustainable practices into its operations and client offerings.",
    content: `
      <p>Sustainability is no longer a choice; it's a responsibility. The technology sector has a significant role to play in reducing carbon footprints and promoting environmental stewardship. QDAS Global is committed to leading by example.</p>
      <p>We are integrating sustainable practices into every aspect of our operations, from energy-efficient data centers to green coding practices. Our "Green Tech" initiative aims to help our clients reduce their environmental impact through optimized IT infrastructure.</p>
      <p>By migrating to the cloud, optimizing server utilization, and extending the lifecycle of hardware, businesses can significantly lower their energy consumption. We are dedicated to providing solutions that are not only good for business but also good for the planet.</p>
    `,
    category: "Featured",
    date: "November 9, 2025",
    author: "Amara Okeke",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format&q=80",
  },
];
