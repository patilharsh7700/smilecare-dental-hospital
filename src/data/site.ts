import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";
import aboutClinic from "@/assets/about-clinic.jpg";
import treatmentImplant from "@/assets/treatment-implant.jpg";
import treatmentSmile from "@/assets/treatment-smile.jpg";
import treatmentKids from "@/assets/treatment-kids.jpg";
import equipmentXray from "@/assets/equipment-xray.jpg";

export const images = {
  heroClinic,
  aboutClinic,
  treatmentImplant,
  treatmentSmile,
  treatmentKids,
  equipmentXray,
};

export const clinic = {
  name: "SmileCare Dental Hospital",
  tagline: "Healthy Smile, Healthy Life.",
  address: ["101, Sunshine Plaza", "MG Road", "Pune", "Maharashtra 411001"],
  phone: "+91 98765 43210",
  emergency: "+91 98765 43211",
  email: "info@smilecaredental.com",
  whatsapp: "919876543210",
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { days: "Sunday", time: "Emergency Only" },
  ],
  socials: [
    { icon: "fa-brands fa-facebook-f", label: "Facebook", href: "https://facebook.com" },
    { icon: "fa-brands fa-instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "fa-brands fa-x-twitter", label: "X", href: "https://x.com" },
    { icon: "fa-brands fa-linkedin-in", label: "LinkedIn", href: "https://linkedin.com" },
    { icon: "fa-brands fa-youtube", label: "YouTube", href: "https://youtube.com" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Treatments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export const services = [
  { icon: "fa-solid fa-tooth", title: "General Dentistry", desc: "Routine exams, fillings and cleanings that keep your teeth healthy for life." },
  { icon: "fa-solid fa-screwdriver-wrench", title: "Dental Implants", desc: "Titanium-grade implants with guided 3D planning and lifetime durability." },
  { icon: "fa-solid fa-syringe", title: "Root Canal Treatment", desc: "Single-sitting painless RCT with rotary endodontics and apex locators." },
  { icon: "fa-solid fa-grip-lines", title: "Braces & Aligners", desc: "Metal, ceramic and self-ligating braces designed by our orthodontists." },
  { icon: "fa-solid fa-wand-magic-sparkles", title: "Teeth Whitening", desc: "Clinically safe laser whitening with visible results in one session." },
  { icon: "fa-solid fa-face-smile", title: "Smile Makeover", desc: "Digital smile design combining veneers, whitening and gum contouring." },
  { icon: "fa-solid fa-layer-group", title: "Dental Veneers", desc: "Ultra-thin E-max veneers that correct shape, shade and spacing." },
  { icon: "fa-solid fa-child-reaching", title: "Pediatric Dentistry", desc: "Child-friendly care with sealants, fluoride therapy and gentle handling." },
  { icon: "fa-solid fa-teeth-open", title: "Wisdom Tooth Removal", desc: "Surgical extraction by oral surgeons with minimal swelling protocols." },
  { icon: "fa-solid fa-heart-pulse", title: "Gum Treatment", desc: "Laser-assisted periodontal therapy for bleeding and receding gums." },
  { icon: "fa-solid fa-crown", title: "Dental Crowns", desc: "Zirconia and metal-free crowns crafted in our in-house digital lab." },
  { icon: "fa-solid fa-teeth", title: "Dentures", desc: "Flexible, fixed and implant-supported dentures with a natural finish." },
  { icon: "fa-solid fa-truck-medical", title: "Emergency Dental Care", desc: "Same-day relief for trauma, swelling and unbearable tooth pain." },
  { icon: "fa-solid fa-hospital", title: "Oral Surgery", desc: "Cyst removal, biopsies and jaw procedures in a sterile OT setup." },
  { icon: "fa-solid fa-shield-heart", title: "Preventive Dentistry", desc: "Risk assessment, scaling and habit counselling to avoid future issues." },
  { icon: "fa-solid fa-x-ray", title: "Digital X-Ray", desc: "Up to 90% less radiation with instant chairside diagnostics." },
  { icon: "fa-solid fa-cube", title: "3D Dental Scan", desc: "CBCT imaging for precise implant, RCT and orthodontic planning." },
  { icon: "fa-solid fa-eye-slash", title: "Invisible Aligners", desc: "Clear aligners with virtual treatment simulation before you start." },
];

export const whyChooseUs = [
  { icon: "fa-solid fa-user-doctor", title: "Experienced Dentists", desc: "12 in-house specialists with 10+ years of clinical practice each." },
  { icon: "fa-solid fa-microchip", title: "Latest Technology", desc: "CBCT, intraoral scanners, lasers and rotary endodontics." },
  { icon: "fa-solid fa-x-ray", title: "Digital X-Ray", desc: "Instant, low-radiation imaging inside every operatory." },
  { icon: "fa-solid fa-feather", title: "Pain-Free Treatment", desc: "Painless anaesthesia delivery and sedation options." },
  { icon: "fa-solid fa-spray-can-sparkles", title: "Sterilized Equipment", desc: "Class B autoclaves and single-use disposables, always." },
  { icon: "fa-solid fa-indian-rupee-sign", title: "Affordable Pricing", desc: "Transparent estimates plus 0% EMI on major treatments." },
  { icon: "fa-solid fa-calendar-check", title: "Online Appointments", desc: "Book in under 60 seconds with instant confirmation." },
  { icon: "fa-solid fa-kit-medical", title: "Emergency Care", desc: "Dedicated emergency line answered 365 days a year." },
  { icon: "fa-solid fa-hand-holding-heart", title: "Friendly Staff", desc: "Multilingual coordinators guiding you at every step." },
  { icon: "fa-solid fa-building-shield", title: "Modern Infrastructure", desc: "Six operatories, in-house lab and sterile surgical theatre." },
  { icon: "fa-solid fa-file-invoice", title: "Transparent Consultation", desc: "Treatment plans explained on screen before you decide." },
  { icon: "fa-solid fa-chart-line", title: "High Success Rate", desc: "98% clinical success across 25,000+ treated patients." },
];

export const stats: { value: number; suffix: string; label: string; decimals?: number }[] = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 12, suffix: "+", label: "Specialist Doctors" },
  { value: 25000, suffix: "+", label: "Happy Patients" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
];

export const doctors = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Chief Dental Surgeon",
    experience: "15 Years Experience",
    specialization: "Dental Implant Specialist",
    qualification: "BDS, MDS – Prosthodontics",
    image: doctor1,
    bio: "Has placed over 6,000 implants and leads SmileCare's guided implantology programme.",
  },
  {
    name: "Dr. Priya Mehta",
    role: "Orthodontist",
    experience: "12 Years Experience",
    specialization: "Braces Expert",
    qualification: "BDS, MDS – Orthodontics",
    image: doctor2,
    bio: "Certified Invisalign provider handling complex bite corrections for teens and adults.",
  },
  {
    name: "Dr. Neha Kulkarni",
    role: "Cosmetic Dentist",
    experience: "10 Years Experience",
    specialization: "Smile Design Specialist",
    qualification: "BDS, Fellowship in Aesthetic Dentistry",
    image: doctor3,
    bio: "Designs digital smile previews so patients see the result before treatment begins.",
  },
  {
    name: "Dr. Amit Verma",
    role: "Oral Surgeon",
    experience: "14 Years Experience",
    specialization: "Wisdom Tooth Specialist",
    qualification: "BDS, MDS – Oral & Maxillofacial Surgery",
    image: doctor4,
    bio: "Performs minimally invasive extractions and jaw surgeries with rapid recovery protocols.",
  },
];

export const treatments = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    image: treatmentImplant,
    summary:
      "Replace missing teeth permanently with 3D-guided implant placement and same-week temporary crowns.",
    points: [
      "CBCT-guided surgical planning",
      "Swiss and Korean implant systems",
      "Single sitting immediate loading options",
      "10-year implant warranty",
    ],
  },
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    image: equipmentXray,
    summary:
      "Save an infected tooth in a single painless sitting using rotary endodontics and digital apex location.",
    points: [
      "Single visit RCT in 45–60 minutes",
      "Rubber dam isolation for sterility",
      "Post-treatment zirconia crown",
      "No post-operative pain in 96% of cases",
    ],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    image: treatmentSmile,
    summary:
      "Veneers, bonding, contouring and whitening to refine the shape, shade and symmetry of your smile.",
    points: [
      "Metal-free E-max veneers",
      "Laser gum depigmentation",
      "Composite edge bonding",
      "Shade matched to your skin tone",
    ],
  },
  {
    slug: "smile-design",
    title: "Smile Design",
    image: treatmentSmile,
    summary:
      "A complete digital smile makeover planned on screen, previewed with a mock-up, then delivered precisely.",
    points: [
      "Digital smile simulation",
      "Trial smile before finalising",
      "Facial proportion analysis",
      "In-house lab, faster delivery",
    ],
  },
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning & Polishing",
    image: aboutClinic,
    summary:
      "Ultrasonic scaling that removes tartar, stains and bacteria — the fastest way to fresher, brighter teeth.",
    points: [
      "Ultrasonic scaling and jet polishing",
      "Fluoride application included",
      "Gum health assessment",
      "Recommended every 6 months",
    ],
  },
  {
    slug: "braces",
    title: "Braces & Invisible Aligners",
    image: doctor2,
    summary:
      "Straighten crowded or spaced teeth with metal, ceramic, self-ligating braces or fully invisible aligners.",
    points: [
      "Free orthodontic evaluation",
      "Clear aligner simulation",
      "Monthly progress tracking",
      "0% EMI over 12 months",
    ],
  },
  {
    slug: "children-dentistry",
    title: "Children's Dentistry",
    image: treatmentKids,
    summary:
      "Gentle, playful care for kids — sealants, fluoride, habit correction and cavity treatment without fear.",
    points: [
      "Tell–show–do behaviour technique",
      "Pit and fissure sealants",
      "Thumb-sucking and habit appliances",
      "Kid-friendly operatory",
    ],
  },
  {
    slug: "emergency-dental",
    title: "Emergency Dental Care",
    image: heroClinic,
    summary:
      "Immediate relief for severe pain, dental trauma, swelling, broken crowns or knocked-out teeth.",
    points: [
      "Same-day emergency slots",
      "Dedicated emergency helpline",
      "Trauma splinting and re-implantation",
      "Open 365 days a year",
    ],
  },
];

export const gallery = [
  { src: heroClinic, category: "Clinic", title: "Advanced operatory suite" },
  { src: aboutClinic, category: "Clinic", title: "Reception & waiting lounge" },
  { src: equipmentXray, category: "Equipment", title: "CBCT & digital X-ray room" },
  { src: treatmentImplant, category: "Treatment", title: "Guided implant placement" },
  { src: treatmentSmile, category: "Before & After", title: "Smile makeover result" },
  { src: treatmentKids, category: "Patients", title: "Happy little patient" },
  { src: doctor1, category: "Doctors", title: "Dr. Rajesh Sharma" },
  { src: doctor2, category: "Doctors", title: "Dr. Priya Mehta" },
  { src: doctor3, category: "Doctors", title: "Dr. Neha Kulkarni" },
  { src: doctor4, category: "Doctors", title: "Dr. Amit Verma" },
  { src: treatmentSmile, category: "Patients", title: "Post-whitening review" },
  { src: treatmentImplant, category: "Before & After", title: "Implant crown delivery" },
];

export const galleryFilters = [
  "All",
  "Clinic",
  "Patients",
  "Treatment",
  "Before & After",
  "Equipment",
  "Doctors",
];

export const beforeAfter = [
  { title: "Smile Transformation", desc: "Veneers + gum contouring, 3 weeks", before: treatmentSmile, after: treatmentSmile },
  { title: "Teeth Whitening", desc: "Laser whitening, single session", before: treatmentSmile, after: treatmentSmile },
  { title: "Braces Results", desc: "Self-ligating braces, 14 months", before: doctor2, after: treatmentSmile },
  { title: "Dental Implants", desc: "Two implants with zirconia crowns", before: treatmentImplant, after: treatmentSmile },
  { title: "Smile Makeover", desc: "Full digital smile design, 6 weeks", before: aboutClinic, after: treatmentSmile },
];

export const testimonials = [
  {
    name: "Ananya Deshpande",
    treatment: "Root Canal Treatment",
    rating: 5,
    quote:
      "The doctors are extremely professional and caring. My root canal treatment was painless and finished in a single visit.",
  },
  {
    name: "Rohit Patil",
    treatment: "Dental Implants",
    rating: 5,
    quote:
      "Best dental clinic with modern equipment and friendly staff. The implant procedure was explained step by step before starting.",
  },
  {
    name: "Sneha Iyer",
    treatment: "Smile Makeover",
    rating: 5,
    quote:
      "My smile makeover exceeded my expectations. Highly recommended — I could see a digital preview before we even began.",
  },
  {
    name: "Kunal Joshi",
    treatment: "Invisible Aligners",
    rating: 5,
    quote:
      "Dr. Priya tracked my aligners every month and my teeth straightened in 11 months without anyone noticing them.",
  },
  {
    name: "Meera Nair",
    treatment: "Pediatric Dentistry",
    rating: 5,
    quote:
      "My six-year-old actually looks forward to his dental visits now. The team handles children beautifully.",
  },
  {
    name: "Sagar Kulkarni",
    treatment: "Emergency Care",
    rating: 5,
    quote:
      "Called the emergency number at 10 PM with a cracked tooth and was treated the same night. Truly grateful.",
  },
];

export const pricing = [
  {
    name: "Basic Dental Checkup",
    tag: "Starter",
    desc: "Complete oral examination with digital X-ray and a written treatment plan.",
    features: ["Full mouth examination", "Digital X-ray (as required)", "Written treatment plan", "Home-care guidance"],
    featured: false,
  },
  {
    name: "Professional Cleaning",
    tag: "Most Booked",
    desc: "Ultrasonic scaling, polishing and fluoride application for a fresh, healthy mouth.",
    features: ["Ultrasonic scaling", "Jet polishing", "Fluoride application", "Gum health report"],
    featured: false,
  },
  {
    name: "Smile Makeover",
    tag: "Premium",
    desc: "End-to-end digital smile design with veneers, whitening and gum aesthetics.",
    features: ["Digital smile simulation", "Trial smile mock-up", "E-max veneers", "Laser whitening session"],
    featured: true,
  },
  {
    name: "Root Canal Package",
    tag: "Value",
    desc: "Single-sitting root canal with a zirconia crown and follow-up review.",
    features: ["Single visit RCT", "Rotary endodontics", "Zirconia crown", "Free 1-month review"],
    featured: false,
  },
  {
    name: "Dental Implant Consultation",
    tag: "Consult",
    desc: "3D scan based implant assessment with bone quality analysis and a staged plan.",
    features: ["CBCT 3D scan review", "Bone density analysis", "Implant system options", "0% EMI planning"],
    featured: false,
  },
];

export const blogPosts = [
  {
    slug: "how-to-maintain-healthy-teeth",
    title: "How To Maintain Healthy Teeth",
    category: "Oral Care",
    date: "12 July 2026",
    read: "5 min read",
    image: treatmentSmile,
    excerpt:
      "Brushing twice is only the start. Here are the eight daily habits our dentists recommend for lifelong dental health.",
  },
  {
    slug: "importance-of-dental-checkups",
    title: "Importance Of Dental Checkups",
    category: "Preventive",
    date: "28 June 2026",
    read: "4 min read",
    image: aboutClinic,
    excerpt:
      "Most cavities are painless until they are expensive. A six-monthly checkup catches problems while they are still small.",
  },
  {
    slug: "dental-implant-guide",
    title: "Dental Implant Guide: What To Expect",
    category: "Implants",
    date: "14 June 2026",
    read: "7 min read",
    image: treatmentImplant,
    excerpt:
      "From the first 3D scan to your final crown — a complete walkthrough of the implant journey, timelines and aftercare.",
  },
  {
    slug: "braces-vs-aligners",
    title: "Braces vs Aligners: Which Is Right For You?",
    category: "Orthodontics",
    date: "02 June 2026",
    read: "6 min read",
    image: doctor2,
    excerpt:
      "Cost, comfort, visibility and treatment time compared, so you can pick the option that fits your lifestyle.",
  },
  {
    slug: "tips-for-kids-oral-care",
    title: "Tips For Kids Oral Care",
    category: "Pediatric",
    date: "20 May 2026",
    read: "5 min read",
    image: treatmentKids,
    excerpt:
      "Make brushing fun, cut hidden sugars and know exactly when your child's first dental visit should happen.",
  },
  {
    slug: "preventing-gum-disease",
    title: "Preventing Gum Disease",
    category: "Periodontics",
    date: "08 May 2026",
    read: "6 min read",
    image: equipmentXray,
    excerpt:
      "Bleeding gums are never normal. Learn the early warning signs of gingivitis and how laser therapy reverses it.",
  },
];

export const faqs = [
  {
    q: "Is dental treatment at SmileCare painful?",
    a: "No. We use painless anaesthesia delivery, topical numbing gels and, when needed, conscious sedation. 96% of our patients report no post-operative pain.",
  },
  {
    q: "Do I need an appointment or can I walk in?",
    a: "Walk-ins are welcome, but online appointments get priority slots with zero waiting time. Emergencies are always seen the same day.",
  },
  {
    q: "How long does a dental implant take?",
    a: "The implant placement itself takes 30–45 minutes. The final crown is delivered after 3–4 months of healing, or immediately in suitable immediate-loading cases.",
  },
  {
    q: "Do you offer EMI or insurance support?",
    a: "Yes. We offer 0% EMI for 3–12 months on major treatments and assist with cashless claims for most corporate dental insurance plans.",
  },
  {
    q: "How often should I get my teeth cleaned?",
    a: "Every six months for most patients, and every three to four months if you have gum disease, smoke or wear braces.",
  },
  {
    q: "Are aligners as effective as braces?",
    a: "For mild to moderate crowding, yes. Severe bite corrections still respond faster to fixed braces — our orthodontist will advise after a scan.",
  },
];

export const treatmentOptions = [
  "General Consultation",
  "Dental Implants",
  "Root Canal Treatment",
  "Braces & Aligners",
  "Teeth Whitening",
  "Smile Makeover",
  "Pediatric Dentistry",
  "Wisdom Tooth Removal",
  "Gum Treatment",
  "Emergency Dental Care",
];

export const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];
