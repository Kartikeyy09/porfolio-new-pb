// Add this export at the bottom of your existing portfolioData.js file
// (Keep all existing exports as they are)

export const COLOR_MAP = {
    coral: {
        text: 'c-coral',
        bg: 'bg-coral-10',
        bgDarker: 'bg-coral-20',
        bgSubtle: 'bg-coral-5',
        border: 'b-coral',
        borderSolid: 'b-coral-solid',
        glow: 'glow-coral',
        dot: 'dot-coral',
        gradient: 'gradient-sunset',
    },
    sky: {
        text: 'c-sky',
        bg: 'bg-sky-10',
        bgDarker: 'bg-sky-20',
        bgSubtle: 'bg-sky-5',
        border: 'b-sky',
        borderSolid: 'b-sky-solid',
        glow: 'glow-sky',
        dot: 'dot-sky',
        gradient: 'gradient-ocean',
    },
    mint: {
        text: 'c-mint',
        bg: 'bg-mint-10',
        bgDarker: 'bg-mint-20',
        bgSubtle: 'bg-mint-5',
        border: 'b-mint',
        borderSolid: 'b-mint-solid',
        glow: 'glow-mint',
        dot: 'dot-mint',
        gradient: 'gradient-ocean',
    },
    lavender: {
        text: 'c-lavender',
        bg: 'bg-lavender-10',
        bgDarker: 'bg-lavender-20',
        bgSubtle: 'bg-lavender-5',
        border: 'b-lavender',
        borderSolid: 'b-lavender-solid',
        glow: 'glow-lavender',
        dot: 'dot-lavender',
        gradient: 'gradient-berry',
    },
    sunny: {
        text: 'c-sunny',
        bg: 'bg-sunny-10',
        bgDarker: 'bg-sunny-20',
        bgSubtle: 'bg-sunny-5',
        border: 'b-sunny',
        borderSolid: 'b-sunny-solid',
        glow: 'glow-sunny',
        dot: 'dot-sunny',
        gradient: 'gradient-fire',
    },
    peach: {
        text: 'c-peach',
        bg: 'bg-peach-10',
        bgDarker: 'bg-peach-20',
        bgSubtle: 'bg-peach-5',
        border: 'b-peach',
        borderSolid: 'b-peach-solid',
        glow: 'glow-peach',
        dot: 'dot-peach',
        gradient: 'gradient-fire',
    },
    rose: {
        text: 'c-rose',
        bg: 'bg-rose-10',
        bgDarker: 'bg-rose-20',
        bgSubtle: 'bg-rose-5',
        border: 'b-rose',
        borderSolid: 'b-rose-solid',
        glow: 'glow-coral',
        dot: 'dot-coral',
        gradient: 'gradient-berry',
    },
}

export const personalInfo = {
    name: "Pratishtha Bhadoria",
    firstName: "Pratishtha",
    lastName: "Bhadoria",
    title: "Digital Marketing Strategist",
    subtitle: "Content Creator • Analytics Enthusiast • Brand Storyteller",
    tagline: "Turning Data Into Digital Magic ✨",
    email: "bhadoriapratishtha@gmail.com",
    phone: "+44-7404964963",
    location: "London, UK",
    linkedin: "https://www.linkedin.com/in/pratishtha-bhadoria-a37054270/",
    university: "University of Hertfordshire",
    degree: "MSc Strategic Marketing with Digital Media Management",
    bio: "I'm a first-year MSc Strategic Marketing student at the University of Hertfordshire with a BBA in Event Management & Media Entertainment. My hands-on experience at MakeMyTrip in sales and digital marketing taught me to create data-driven strategies that connect brands with real people. I live at the intersection of creativity and analytics — using tools like Power BI, Google Analytics, and social media platforms to craft campaigns that don't just look good, but deliver results.",
    shortBio: "I help brands tell their stories through data-driven digital strategies and creative content that truly resonates.",
    mission: "Bridging creativity and analytics to craft digital experiences that drive real business results.",
}

export const stats = [
    { number: "5", suffix: "+", label: "Projects", color: "coral" },
    { number: "7", suffix: "", label: "Certifications", color: "sky" },
    { number: "4", suffix: "", label: "Months Experience", color: "mint" },
    { number: "2", suffix: "", label: "Degrees", color: "lavender" },
]

export const skills = [
    {
        category: "Digital Marketing",
        items: ["Social Media Marketing", "SEO & SEM", "Content Strategy", "Email Marketing", "Lead Generation", "Campaign Analytics"],
        color: "coral",
        emoji: "📣"
    },
    {
        category: "Analytics & Data",
        items: ["Google Analytics", "Power BI", "Web Analytics", "MS Excel", "Financial Modelling", "Data Visualisation"],
        color: "sky",
        emoji: "📊"
    },
    {
        category: "Creative & Design",
        items: ["Content Creation", "Brand Identity", "Visual Storytelling", "Canva", "Social Media Design", "Presentation Design"],
        color: "lavender",
        emoji: "🎨"
    },
    {
        category: "Business Strategy",
        items: ["Market Research", "Competitive Analysis", "CRM Basics", "Client Servicing", "Business Development", "Event Management"],
        color: "mint",
        emoji: "💼"
    },
    {
        category: "Professional",
        items: ["Team Leadership", "Communication", "Problem Solving", "Time Management", "Adaptability", "Negotiation"],
        color: "sunny",
        emoji: "⚡"
    },
    {
        category: "Tools & Platforms",
        items: ["Google Ads", "Meta Business Suite", "Mailchimp", "Hootsuite", "WordPress/Wix", "MS Office Suite"],
        color: "peach",
        emoji: "🛠️"
    }
]

export const education = [
    {
        degree: "MSc Strategic Marketing with Digital Media Management",
        institution: "University of Hertfordshire",
        location: "Hertfordshire, UK",
        period: "Sep 2025 – Present",
        status: "Current",
        color: "coral",
        highlights: ["Digital media management specialisation", "SEO, UX design & digital analytics focus"]
    },
    {
        degree: "BBA – Event Management & Media Entertainment",
        institution: "Sage University",
        location: "Bhopal, India",
        period: "Oct 2022 – May 2025",
        color: "sky",
        highlights: ["CGPA: 7.5", "Event planning, media production & marketing"]
    },
    {
        degree: "Higher Secondary – Commerce",
        institution: "St. Joseph Co-ed School",
        location: "Bhopal, India",
        period: "May 2021 – June 2022",
        color: "mint",
        highlights: ["Percentage: 60%", "Business & commerce foundation"]
    }
]

export const experience = [
    {
        role: "Sales Executive & Digital Marketing Intern",
        company: "MakeMyTrip (Franchise)",
        location: "Bhopal, India",
        period: "Jul 2024 – Nov 2024",
        color: "coral",
        highlights: [
            "Supported end-to-end vacation planning and bookings; advised customers on flights, hotels, visas, and destination packages",
            "Generated and qualified leads via WhatsApp campaigns, Instagram promotions, and walk-ins",
            "Coordinated with vendors for itinerary customization and customer issue resolution",
            "Collaborated on promotional creatives and tracked marketing metrics to improve response rates"
        ]
    }
]

export const projects = [
    {
        id: 1,
        title: "Instagram Brand Awareness Campaign",
        subtitle: "EcoThreads — Sustainable Fashion",
        type: "Social Media Campaign",
        color: "coral",
        emoji: "📱",
        objective: "Design a 2-week Instagram campaign for fictional sustainable fashion brand 'EcoThreads' to boost brand awareness among 18–30 year-old eco-conscious UK consumers.",
        targetAudience: "Eco-conscious millennials and Gen Z (18–30) in the UK who value sustainability in fashion",
        strategy: "Applied the 80/20 content rule — 80% value-driven (tips, behind-the-scenes, user stories) and 20% promotional. Built a cohesive visual identity with earthy tones. Implemented a multi-tier hashtag strategy with branded, community, and trending tags. Planned Stories, Reels, and carousels for maximum engagement.",
        tools: ["Canva", "Instagram", "Meta Business Suite", "Later", "Google Sheets"],
        features: [
            "6 Instagram posts — carousels, Reels concepts & Stories",
            "Full content calendar with optimal posting schedule",
            "Branded hashtag strategy with 15 researched hashtags",
            "Engagement plan: polls, Q&As, UGC prompts",
            "KPI framework: reach, engagement rate, follower growth, saves"
        ],
        results: "Projected 15% engagement rate increase based on industry benchmarks. Templates praised for visual consistency and messaging clarity.",
        reflection: "This project deepened my understanding of how consistent brand storytelling drives engagement. Planning content pillars in advance creates cohesion. Next time I'd A/B test captions and post timing.",
        tags: ["Social Media", "Content Creation", "Brand Strategy", "Instagram"]
    },
    {
        id: 2,
        title: "SEO Blog: Digital Marketing Trends 2025",
        subtitle: "Search-Optimised Content Writing",
        type: "SEO Blog Post",
        color: "mint",
        emoji: "🔍",
        objective: "Write and optimise an SEO-friendly blog post for small business owners wanting to improve their digital presence, showcasing on-page SEO best practices.",
        targetAudience: "UK small business owners and entrepreneurs seeking practical digital marketing advice",
        strategy: "Keyword research via Ubersuggest and Google Keyword Planner. Primary keyword: 'digital marketing trends 2025'. Applied on-page SEO: proper H1–H3 hierarchy, meta title (<60 chars), meta description (<160 chars), internal/external linking, image optimisation with alt text, readability optimisation.",
        tools: ["WordPress", "Ubersuggest", "Google Keyword Planner", "Yoast SEO", "Grammarly", "Canva"],
        features: [
            "700-word blog with proper H1, H2, H3 heading structure",
            "Meta title: 'Top 5 Digital Marketing Trends for Small Businesses in 2025'",
            "Meta description crafted under 160 characters",
            "3 internal + 4 external authoritative links",
            "3 compressed images with descriptive alt text",
            "Keyword density maintained at 1.5–2%"
        ],
        results: "Scored 92/100 on Yoast readability. Keyword optimisation rated 'Good'. Page load under 2 seconds.",
        reflection: "SEO writing means balancing keywords with natural readability. Long-tail keywords often convert better than generic terms. Heading hierarchy directly impacts crawlability.",
        tags: ["SEO", "Content Writing", "Blog", "Keyword Research"]
    },
    {
        id: 3,
        title: "Email Welcome Sequence — EcoThreads",
        subtitle: "3-Email Nurture Campaign",
        type: "Email Marketing",
        color: "lavender",
        emoji: "📧",
        objective: "Design a 3-email welcome sequence for new EcoThreads subscribers to build brand affinity, educate on sustainability, and drive first purchase.",
        targetAudience: "New subscribers aged 20–35 who signed up via Instagram campaign or website — sustainability-conscious shoppers",
        strategy: "Applied the AIDA model across 3 emails. Email 1: Welcome + brand story (Attention/Interest). Email 2: Sustainability tips + bestsellers (Desire). Email 3: Exclusive 15% discount + urgency (Action). Mobile-first responsive templates with personalisation tokens and clear CTAs.",
        tools: ["Mailchimp", "Canva", "Google Docs"],
        features: [
            "3 fully designed mobile-responsive email templates",
            "A/B test subject lines for Email 1",
            "Personalisation: first name tokens & dynamic content",
            "Action-oriented CTA buttons",
            "GDPR-compliant unsubscribe & preference links",
            "Optimised preview text for mobile clients"
        ],
        results: "Projected 45–50% open rates and 8–12% CTR based on Mailchimp 2024 benchmarks. Sequence praised for logical flow and persuasive copy.",
        reflection: "Email marketing is more nuanced than expected. Subject lines, timing, and mobile rendering all matter. Gained deeper appreciation for UK GDPR compliance.",
        tags: ["Email Marketing", "Copywriting", "GDPR", "Customer Journey"]
    },
    {
        id: 4,
        title: "Travel Package Market Scan",
        subtitle: "Competitive Intelligence for MakeMyTrip",
        type: "Market Research",
        color: "sky",
        emoji: "🗺️",
        objective: "Conduct competitive analysis of holiday packages in Bhopal to identify pricing gaps and improve MakeMyTrip franchise package positioning.",
        targetAudience: "MakeMyTrip franchise management and sales team in Bhopal",
        strategy: "Collected data from 5 competitor agencies on pricing, inclusions, seasonal offers, and reviews across popular destinations (Goa, Rajasthan, Kerala, Thailand, Dubai). Applied SWOT analysis and created comparison matrices. Delivered actionable recommendations.",
        tools: ["MS Excel", "Google Sheets", "PowerPoint", "Google Maps", "WhatsApp Business"],
        features: [
            "Pricing matrix: 5 agencies × 8 destination packages",
            "SWOT analysis of franchise positioning",
            "Seasonal demand mapping (peak vs off-peak)",
            "Customer sentiment analysis from Google Reviews",
            "Actionable recommendations with visual summaries"
        ],
        results: "Directly influenced 3 new WhatsApp catalogue templates and 2 festive campaigns. Improved enquiry quality after implementing positioning changes.",
        reflection: "Real-world analysis requires both quantitative data and qualitative insights. Primary research directly feeds marketing execution.",
        tags: ["Market Research", "Competitive Analysis", "Strategy", "Data Analysis"]
    },
    {
        id: 5,
        title: "Sales & Booking Dashboard",
        subtitle: "Interactive Power BI Analytics",
        type: "Business Intelligence",
        color: "sunny",
        emoji: "📈",
        objective: "Build an interactive Power BI dashboard from booking data to track sales enquiries, conversions, revenue, and campaign performance for MakeMyTrip franchise.",
        targetAudience: "Franchise owner, sales manager, and marketing team",
        strategy: "Cleaned and structured raw Excel data. Built relational data model in Power BI. Created 4 dashboard pages: Overview, Sales Performance, Campaign Analytics, Customer Insights. Used DAX measures for KPIs. Added interactive slicers for dates, destinations, and channels.",
        tools: ["Power BI", "MS Excel", "DAX", "Google Sheets"],
        features: [
            "4-page interactive dashboard with consistent design",
            "KPI cards: enquiries, conversion rate, revenue, avg booking value",
            "Monthly trend charts and channel comparisons",
            "Drill-through pages for package-level analysis",
            "Date, destination, channel & package type slicers",
            "Colour-coded conditional formatting"
        ],
        results: "Revealed Instagram leads had 22% higher conversion than walk-ins. Showed Kerala packages had best margins despite Goa having highest volume.",
        reflection: "Visual analytics makes data accessible to non-technical stakeholders. Dashboard design and layout are as important as the underlying data.",
        tags: ["Power BI", "Data Analytics", "Dashboard", "Business Intelligence"]
    }
]

export const certifications = [
    { name: "Leadership and Management", color: "coral", emoji: "🏆" },
    { name: "Human Resource Management", color: "sky", emoji: "👥" },
    { name: "National Seminar on Industry", color: "mint", emoji: "🎓" },
    { name: "Power BI (Business Intelligence)", color: "lavender", emoji: "📊" },
    { name: "Financial Modelling", color: "sunny", emoji: "💰" },
    { name: "Web Analytics", color: "peach", emoji: "🌐" },
    { name: "Interpersonal Communication", color: "rose", emoji: "🗣️" },
]

export const interests = [
    { name: "Fitness & Dance", emoji: "💃" },
    { name: "Travel & Culture", emoji: "✈️" },
    { name: "Sports & Series", emoji: "🎬" },
    { name: "Volunteering", emoji: "🤝" },
]

export const languages = [
    { name: "Hindi", level: "Native", flag: "🇮🇳" },
    { name: "English", level: "Professional", flag: "🇬🇧" },
]