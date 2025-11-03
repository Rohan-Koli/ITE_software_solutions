import { FileText, FileSignature, ClipboardCheck, Touchpad, FormInput, Banknote } from "lucide-react";
import { FaMoneyBillWave, FaRocket, FaUsers, FaHandshake } from "react-icons/fa";
export const panelData = [
  {
    id: 1,
    lightIcon: "/assets/images/template/icon-diamond.svg",
    darkIcon: "/assets/images/template/icon-diamond-dark.svg",
    altText: "impact-icon",
    title: "Make an impact",
    description:
      "We’re building something big. Something that has the power to change the trajectory of any sized business for the better.",
  },
  {
    id: 2,
    lightIcon: "/assets/images/template/icon-trophy.svg",
    darkIcon: "/assets/images/template/icon-trophy-dark.svg",
    altText: "crown-icon",
    title: "Learn",
    description:
      "Teams are masters of their craft though we’re all experts in our respective fields, we always make time to expand our minds.",
  },
  {
    id: 3,
    lightIcon: "/assets/images/template/icon-crown.svg",
    darkIcon: "/assets/images/template/icon-crown-dark.svg",
    altText: "empathy-icon",
    title: "Empathy",
    description:
      "We strive to be empathetic to every customer and colleague and by doing so we provide a better experience for all.",
  },
];

export const features = [
  {
    id: 4,
    imgSrc: "/assets/images/template/feature-01.svg",
    imgAlt: "Share tools quickly and confidently in minutes",
    title: "Share tools quickly and confidently in minutes",
    description:
      "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.",
  },
  {
    id: 5,
    imgSrc: "/assets/images/template/feature-02.svg",
    imgAlt: "Connect every part of your entire business",
    title: "Connect every part of your entire business",
    description:
      "Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.",
    linkText: "See all integrations",
    linkHref: "#",
  },
  {
    id: 6,
    imgSrc: "/assets/images/template/feature-03.svg",
    imgAlt: "Maintain compliance and control your apps",
    title: "Maintain compliance and control your apps",
    description:
      "Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks and lock all legal information to prevent costly mistakes.",
  },
];

export const features2 = [
  {
    icon: FaHandshake,
    title: "Client Approach",
    description:
      "We have client centric approach,which sustains us in market optimizing your work.",
    backgroundColor: "bg-white dark:bg-gray-800",
  },
  {
    icon: FaUsers,
    title: "Dedicated Team",
    description:
      "Dedicated Team of 30 people are pioneers in technology that make technology feasible",
    backgroundColor: "bg-primary text-white",
  },
  {
    icon: FaRocket,
    title: "Speed and Process",
    description:
      "Less time and better process is our USP, we work on latest trends for clients",
    backgroundColor: "bg-white dark:bg-gray-800",
  },
  {
    icon: FaMoneyBillWave,
    title: "Affordable Pricing",
    description:
      "The pricing is reasonable at ITE software solution compared to market",
    backgroundColor: "bg-white dark:bg-gray-800",
  },
];

export const features3 = [
  {
    id: 1,
    imgSrc: "/assets/images/template/feature-01.svg",
    altText: "Web Systems",
    step: "01.",
    title: "Share tools quickly and confidently in minutes",
    description: `This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.`,
    testimonial: {
      quote: `“Most of our time used to be taken up by administrative work whereas now we can focus on building out programs to help our employees.”`,
      imgSrc: "/assets/images/avatars/01.png",
      name: "Mark Zellers",
      role: "Director of Human Resources.",
    },
  },
  {
    id: 2,
    imgSrc: "/assets/images/template/feature-02.svg",
    altText: "Connect every part of your entire business",
    step: "02.",
    title: "Connect every part of your entire business",
    description: `Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.`,
    link: {
      href: "#",
      text: "See all integrations",
    },
    testimonial: {
      quote: `“I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”`,
      imgSrc: "/assets/images/avatars/02.png",
      name: "Matt Henderson",
      role: "Client Success Manager",
    },
  },
  {
    id: 3,
    imgSrc: "/assets/images/template/feature-03.svg",
    altText: "Maintain compliance and control your apps",
    step: "03.",
    title: "Maintain compliance and control your apps",
    description: `Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks and lock all legal information to prevent costly mistakes.`,
    testimonial: {
      quote: `“This powerful tool eliminates the need to leave Salesforce to get things done.”`,
      imgSrc: "/assets/images/avatars/04.png",
      name: "Natalia Larsson",
      role: "Director of Sales Operations",
    },
  },
  {
    id: 4,
    imgSrc: "/assets/images/template/feature-04.svg",
    altText: "Review quickly and confidently",
    step: "04.",
    title: "Review quickly and confidently",
    description: `Get real-time access to approvals, comments and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.`,
    testimonial: {
      quote: `“We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers than comply with this regulation.”`,
      imgSrc: "/assets/images/avatars/03.png",
      name: "Sarah Edrissi",
      role: "Lead Marketing",
    },
  },
];

export const features4 = [
  {
    icon: "FileText",
    title: "Proposals",
    description:
      "Share Tools in minutes with pre-built, customizable templates.",
  },
  {
    icon: "FileSignature",
    title: "Quotes",
    description:
      "Find out in real time when they’re opened, viewed and signed.",
  },
  {
    icon: "ClipboardCheck",
    title: "Contracts",
    description:
      "Use our native CRM integrations to pull customer data into your Tools fast.",
  },
  {
    icon: "Touchpad",
    title: "eSignatures",
    description:
      "Keep your data secure with our legally-binding e-Signature software.",
  },
  {
    icon: "FormInput",
    title: "Forms",
    description:
      "Share via direct link or by embedding them on your website, no coding necessary.",
  },
  {
    icon: "Banknote",
    title: "Payments",
    description:
      "Collect them instantly right from your contract, while increasing your close rate by 36%.",
  },
];

export const featureItems = [
  {
    imageSrc: "/assets/images/template/home-four-feature-01.png",
    altText: "Ensuring timely delivery and maximum efficiency",
    title: "Ensuring timely delivery and maximum efficiency",
    description:
      "We offers advanced project management features such as Gantt charts, task dependencies, and resource allocation",
    linkText: "Let's find out",
    icon: "unicon-cloud-download",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-02.png",
    altText: "No more digging endless reports and spreadsheets",
    title: "No more digging endless reports and spreadsheets",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    linkText: "See all spreadsheets",
    icon: "unicon-course",
    reverseOrder: true,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-03.png",
    altText: "Share files, and communicate with your team in real-time",
    title: "Share files, and communicate with your team in real-time",
    description:
      "You can easily assign tasks, share files, and communicate with your team in real-time, no matter where they are located.",
    linkText: "See apps & integrations",
    icon: "unicon-volume-block-storage",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-04.png",
    altText: "Collaboration is made seamless with Lexend",
    title: "Collaboration is made seamless with Lexend",
    description:
      "Get real-time access to approvals, comments and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.",
    linkText: "Let's find out",
    icon: "unicon-model",
    reverseOrder: true,
  },
];

export const featureItems2 = [
  {
    order: "order-1 lg:order-0",
    iconSrc: "/assets/images/common/icons/zap.svg",
    alt: "feature-icon",
    title: "Web Systems",
    description:
      "WebSystems is your trusted technology partner in building high-performance, scalable, and secure web solutions.though it is irreplaceable",
  },
  {
    order: "order-0",
    iconSrc: "/assets/images/common/icons/database.svg",
    alt: "feature-icon",
    title: "SEO",
    description:
      "We optimize your online presence through strategic SEO techniques, driving organic traffic, higher rankings, and measurable business growth.",
    bgClass:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-bottom-end-0 lg:rounded-bottom-0",
  },
  {
    order: "order-2 sm:order-1 lg:order-0",
    iconSrc: "/assets/images/common/icons/puzzle.svg",
    alt: "feature-icon",
    title: "App Development",
    description:
      "We design and develop high-performance mobile apps that deliver seamless user experiences and scalable solutions across Android and iOS platforms.",
  },
  {
    order: "order-1 lg:order-0",
    iconSrc: "/assets/images/common/icons/target.svg",
    alt: "feature-icon",
    title: "Digital Marketing",
    description:
      "Our digital marketing solutions blend creativity with data, driving engagement, brand awareness, and conversions across all major digital platforms.",
    bgClass:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-start-0 lg:rounded-top-end-0 lg:rounded-start-1-5",
  },
  {
    order: "order-3 lg:order-0",
    iconSrc: "/assets/images/common/icons/line-chart.svg",
    alt: "feature-icon",
    title: "Blockchain Development",
    description:
      "We build secure, scalable blockchain solutions tailored for your business—empowering trust, transparency, and efficiency.",
  },
  {
    order: "order-2 lg:order-0",
    iconSrc: "/assets/images/common/icons/settings.svg",
    alt: "feature-icon",
    title: "Azure Web Consulting",
    description:
      "We build secure, scalable blockchain solutions tailored for your business—empowering trust, transparency, and efficiency.",
    bgClass:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-top-end-0 lg:rounded-top-start-0 lg:rounded-top-end-1-5",
  },
];

export const features5 = [
  {
    iconSrc: "/assets/images/common/icons/zap.svg",
    alt: "feature-icon",
    title: "Drag-and-Drop Interface",
  },
  {
    iconSrc: "/assets/images/common/icons/database.svg",
    alt: "feature-icon",
    title: "Pre-Designed Templates",
  },
  {
    iconSrc: "/assets/images/common/icons/puzzle.svg",
    alt: "feature-icon",
    title: "Fully Responsive Design",
  },
  {
    iconSrc: "/assets/images/common/icons/target.svg",
    alt: "feature-icon",
    title: "Website Customization",
  },
  {
    iconSrc: "/assets/images/common/icons/line-chart.svg",
    alt: "feature-icon",
    title: "UI Elements Library",
  },
  {
    iconSrc: "/assets/images/common/icons/settings.svg",
    alt: "feature-icon",
    title: "Global & Local Styles",
  },
  {
    iconSrc: "/assets/images/common/icons/puzzle.svg",
    alt: "feature-icon",
    title: "Third-Party Integrations",
  },
];

export const features6 = [
  {
    id: 1,
    imgSrc: "/assets/images/template/feature-01.svg",
    imgAlt: "Share tools quickly and confidently in minutes",
    title: "Web Development Services",
    description:
      "At ITE Software Solutions, we build high-performance, responsive, and scalable websites tailored to your unique business goals. Our expert web development team combines cutting-edge technologies with user-centric design to deliver seamless digital experiences.",
    link:  {text: "Know more about this", href: "/page-contact"},
  },
  {
    id: 2,
    imgSrc: "/assets/images/template/feature-02.svg",
    imgAlt: "Connect every part of your entire business",
    title: "Azure Cloud Consulting",
    description:
      "Unlock the full potential of Microsoft Azure with expert guidance from ITE Software Solutions. Our Azure Cloud Consulting Services help businesses modernize infrastructure, enhance scalability, and reduce operational costs through tailored cloud strategies.",
    link: { text: "Know more about this", href: "/page-contact" },
  },
  {
    id: 3,
    imgSrc: "/assets/images/template/feature-03.svg",
    imgAlt: "Maintain compliance and control your apps",
    title: "Blockhain Development",
    description:
      "Empower your business with the transparency, security, and decentralization of blockchain technology. At ITE Software Solutions, we offer end-to-end blockchain development services to help you build innovative, and future ready applications for yourself.",
    link: { text: "Know more about this", href: "/page-contact"},
  },
  {
    id: 4,
    imgSrc: "/assets/images/template/feature-04.svg",
    imgAlt: "Review quickly and confidently",
    title: "Digital Marketing",
    description:
      "In the digital age, visibility is everything—and at ITE Software Solutions, we help you rise above the noise. Our Digital Marketing Services are designed to attract, engage, and convert your ideal audience through data-driven strategies and creative execution.",
    link: { text: "Know more about this", href: "/page-contact"},
  },
  {
    id: 5,
    imgSrc: "/assets/images/template/feature-04.svg",
    imgAlt: "Review quickly and confidently",
    title: "Application Development",
    description:
      "Transform your business ideas into powerful, scalable, and user-centric applications with ITE Software Solutions. Our application development services are designed to deliver intuitive, high-performance apps that meet the unique needs of your users—on any device, at any scale.",
    link: { text: "Know more about this", href: "/page-contact"},
  },
  {
    id: 6,
    imgSrc: "/assets/images/template/feature-04.svg",
    imgAlt: "Review quickly and confidently",
    title: "Search Engine Optimization",
    description:
      "Dominate search engine rankings and grow your online presence with expert SEO services from ITE Software Solutions. We craft tailored SEO strategies that enhance your website’s visibility, attract qualified traffic, and deliver measurable business growth.",
    link: {text: "Know more about this", href: "/page-contact"},
  },
];
