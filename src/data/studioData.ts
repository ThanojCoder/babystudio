export interface ServiceItem {
  id: string;
  title: string;
  categoryName: string;
  tagline: string;
  description: string;
  primaryImage: string;
  galleryImages: string[];
  startingPrice: string;
  duration: string;
  deliverables: string[];
  features: string[];
  cameraGear: string;
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Wedding' | 'Baby Shoots' | 'Portfolio' | 'Concept' | 'Videography';
  src: string;
  subtitle: string;
  gearTag: string;
  aspect?: 'portrait' | 'landscape' | 'square';
  featured?: boolean;
}

export interface PricingPackage {
  id: string;
  serviceCategory: string;
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  duration: string;
  deliverablesSummary: string;
  features: string[];
  bestFor: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  serviceType: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
  avatar?: string;
}

export interface StudioFeature {
  icon: string;
  title: string;
  description: string;
}

export const STUDIO_INFO = {
  name: "Snaps by Nav",
  tagline: "Fine Art Photography & Haute Cinematography",
  subtitle: "Hyderabad's Premier Luxury Photography & Cinema Studio",
  description: "Specializing in cinematic weddings, enchanting baby milestones, high-fashion model portfolios, avant-garde concept shoots, and 4K commercial cinematography.",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "bookings@snapsbynav.com",
  address: "Studio 404, Signature Boulevard, Road No. 36, Jubilee Hills, Hyderabad, Telangana",
  hours: "Monday – Sunday: 9:30 AM – 7:30 PM (Private Consultations & Shoots by Prior Appointment)",
  instagram: "@snapsbynav",
  googleRating: "4.98",
  reviewCount: "640+",
  experienceYears: "9+",
  shootsCompleted: "1,800+",
};

// Available For: The 5 Core Studio Services
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "weddings",
    title: "Wedding Photography",
    categoryName: "Weddings",
    badge: "Signature Excellence",
    tagline: "Royal Celebrations, Raw Emotion & Fine Art Portraits",
    description: "From intimate traditional rituals and candid emotional moments to grand destination nuptials. We blend high-fashion bridal editorial with discreet documentary storytelling that captures your love in timeless grace.",
    primaryImage: "/images/hero-wedding.jpg",
    galleryImages: [
      "/images/hero-wedding.jpg",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85",
    ],
    startingPrice: "₹45,000",
    duration: "Full Day / Multi-Day Coverage",
    cameraGear: "Sony A1 & FX3 Cinema • GM 35mm f/1.4 • 85mm f/1.4 • Profoto Lighting",
    deliverables: [
      "350+ Master Color-Graded High-Resolution Images",
      "48-Hour Rapid Delivery Social Teaser Gallery",
      "Handcrafted Flush-Mount Italian Leather / Velvet Album",
      "Pre-Wedding Couple Editorial Golden-Hour Session",
      "Complete RAW & Uncompressed High-Res Archive"
    ],
    features: [
      "Dedicated 3-Photographer Cinema Crew",
      "Art Direction & Bridal Posing Mastery",
      "Drone Aerial Cinematography included",
      "Available across Hyderabad & Destination Worldwide"
    ]
  },
  {
    id: "baby-shoots",
    title: "Baby Shoots",
    categoryName: "Baby & Milestones",
    badge: "100% Baby-Safe Studio",
    tagline: "Enchanting Newborn Wraps, Sitters & 1st Birthday Celebrations",
    description: "Crafted exclusively for your little one with medical-grade sanitization, pediatric temperature controls, and gentle baby-led pacing. Featuring 20+ ready physical theme sets from fairytale garden swings to traditional Indian temple backdrops.",
    primaryImage: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=85",
      "/images/gallery/gallery-02.jpeg",
      "/images/themes/theme-01.jpeg",
    ],
    startingPrice: "₹9,999",
    duration: "2 – 3 Hours (Baby-Paced Cushion)",
    cameraGear: "Sony Alpha Full Frame • 50mm f/1.2 GM • Diffused Silent Studio Strobe",
    deliverables: [
      "2 to 3 Custom Selected Physical Theme Sets",
      "20 to 35 Fine-Art Retouched High-Res Images",
      "80+ Sanitized Designer Outfits & Props Included",
      "Complimentary Hardcover Milestone Keepsake Album",
      "Family & Grandparents Portraits Included"
    ],
    features: [
      "Private Feeding & Diaper Sanitization Lounge",
      "Constant 26°C Pediatrician-Recommended Warmth",
      "Certified Baby Sitter & Assistant Support",
      "Zero Rush: Session pauses whenever baby needs care"
    ]
  },
  {
    id: "portfolio-shoots",
    title: "Portfolio Shoots",
    categoryName: "Fashion & Modeling",
    badge: "Editorial High Fashion",
    tagline: "Model & Actor Portfolios, Lookbooks & Executive Branding",
    description: "Designed for aspiring models, actors, creators, and modern founders. We create publication-grade editorial books, casting headshots, and comp cards with striking studio light, contour sculpting, and authentic creative presence.",
    primaryImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=85",
    ],
    startingPrice: "₹14,999",
    duration: "3 – 4 Hours Studio & Location",
    cameraGear: "Hasselblad & Sony Alpha 61MP • Broncolor / Profoto Octaboxes • 85mm & 135mm Primes",
    deliverables: [
      "4 Distinct Wardrobe & Styling Changes",
      "18 Magazine-Grade Frequency Separation Retouched Looks",
      "Agency-Ready Digital Comp Cards & Casting Headshots",
      "High-Resolution Lookbook for Print & Digital Casting",
      "Behind-the-Scenes 4K Instagram Fashion Reel"
    ],
    features: [
      "In-House Professional Hair & Makeup Artist available",
      "Dynamic Posing Direction tailored to your body lines",
      "Moodboard & Wardrobe Styling Consultation",
      "Commercial Usage Licensing Included"
    ]
  },
  {
    id: "concept-shoots",
    title: "Concept Shoots",
    categoryName: "Creative Fine Art",
    badge: "Avant-Garde Productions",
    tagline: "Cinematic Noir, Prismatic Lighting & Themed Surrealism",
    description: "Where creative imagination knows no bounds. We build bespoke artistic worlds—from neon cyberpunk and cinematic smoke noir to vintage 70s analog vibes and haute couture fine art storytelling that stands out on any magazine cover.",
    primaryImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=85",
    ],
    startingPrice: "₹18,500",
    duration: "Half Day Studio Production",
    cameraGear: "Cinema Grade Primes • RGB Haze & Atmospheric Smoke • Optical Snoot & Prisms",
    deliverables: [
      "Bespoke Visual Concept Scripting & Moodboard",
      "15 Master Fine-Art Masterpieces with Creative Grading",
      "Custom Studio Set Build & Atmospheric Effects",
      "Cinematic Motion Teaser (60 seconds, 4K)",
      "High-Resolution Fine-Art Print (18x24 Frame)"
    ],
    features: [
      "Experimental Lighting & Optical Prisms",
      "Stylist & Prop Coordinator on set",
      "High-concept wardrobe curation",
      "Full digital rights for album art & exhibitions"
    ]
  },
  {
    id: "videography",
    title: "Cinematic Videography",
    categoryName: "Films & Cinema",
    badge: "4K 60fps Cinema",
    tagline: "High-End Wedding Films, Music Videos & Commercial Ads",
    description: "Cinematic storytelling rendered on professional Netflix-approved cinema cameras with anamorphic lenses and fluid 3-axis gimbals. We produce emotionally moving wedding highlights, high-energy music videos, and cinematic brand commercials.",
    primaryImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=85"
    ],
    startingPrice: "₹28,000",
    duration: "Project-Based / Multi-Day",
    cameraGear: "Sony FX3 / FX6 • Sirui Anamorphic & GM Glass • DJI Ronin RS3 Pro • DJI Mavic 3 Cine",
    deliverables: [
      "4K Master Cinematic Film (3 – 8 mins)",
      "9:16 Vertical Instagram Reels with Custom Audio Design",
      "Licensed Hollywood-Grade Soundtrack & Foley Sound",
      "4K Drone Aerial Cinematic B-Roll Footage",
      "High-Fidelity Audio Multi-Mic Recording for Vows & Speeches"
    ],
    features: [
      "DaVinci Resolve Studio Film Color Grading",
      "Director & Cinematographer Multi-Cam Crew",
      "Turnaround within 14 Days with 48h Teaser Reel",
      "Delivered on Customized Luxe Wooden USB Keepsake"
    ]
  }
];

// Rich Curated Portfolio for All 5 Categories
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Wedding Photography
  {
    id: "w-1",
    title: "Eternal Golden Vows",
    category: "Wedding",
    src: "/images/hero-wedding.jpg",
    subtitle: "Royal Celebrations & Intimate Vows",
    gearTag: "Sony A1 • 85mm f/1.4 GM",
    aspect: "portrait",
    featured: true
  },
  {
    id: "w-2",
    title: "Royal Bridal Regalia",
    category: "Wedding",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Heritage Kundan & Zardozi Couture",
    gearTag: "Sony A7R V • 50mm f/1.2",
    aspect: "portrait"
  },
  {
    id: "w-3",
    title: "The Veil & Morning Light",
    category: "Wedding",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Intimate Bridal Prep & Reflections",
    gearTag: "35mm f/1.4 • Natural Soft Light",
    aspect: "portrait"
  },
  {
    id: "w-4",
    title: "Twilight Promenade",
    category: "Wedding",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Candid Promenade at Lake Como",
    gearTag: "Sony FX3 • 24-70mm GM II",
    aspect: "landscape"
  },
  {
    id: "w-5",
    title: "The Auspicious Flame",
    category: "Wedding",
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Sacred Saptapadi Moments",
    gearTag: "85mm f/1.4 • Ambient Diya Light",
    aspect: "portrait"
  },

  // Baby Shoots
  {
    id: "b-1",
    title: "Sweet Slumber in Soft Cashmere",
    category: "Baby Shoots",
    src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1000&q=85",
    subtitle: "14-Day Newborn Fine Art Wrap",
    gearTag: "50mm f/1.2 • Softbox Diffused",
    aspect: "portrait",
    featured: true
  },
  {
    id: "b-2",
    title: "Little Giggles & Floral Swing",
    category: "Baby Shoots",
    src: "/images/gallery/gallery-02.jpeg",
    subtitle: "Milestone Sitter on Handcrafted Swing",
    gearTag: "Nav Signature Theme Set 01",
    aspect: "portrait"
  },
  {
    id: "b-3",
    title: "Wonder in Pure Light",
    category: "Baby Shoots",
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Bright-Eyed 8-Month Sitter",
    gearTag: "Sony 50mm GM • Natural Daylight",
    aspect: "portrait"
  },
  {
    id: "b-4",
    title: "1st Birthday Cake Smash Joy",
    category: "Baby Shoots",
    src: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Organic Cream Smash Celebration",
    gearTag: "35mm f/1.4 • Studio Warm Glow",
    aspect: "portrait"
  },
  {
    id: "b-5",
    title: "The Royal Grand Piano",
    category: "Baby Shoots",
    src: "/images/themes/theme-03.jpeg",
    subtitle: "Miniature White Grand Piano & Blooms",
    gearTag: "Nav Signature Theme Set 03",
    aspect: "landscape"
  },

  // Portfolio Shoots
  {
    id: "p-1",
    title: "Haute Editorial Stance",
    category: "Portfolio",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Vogue Feature & Agency Comp Card",
    gearTag: "Sony A7R V • 85mm f/1.4 GM",
    aspect: "portrait",
    featured: true
  },
  {
    id: "p-2",
    title: "Actor Cinematic Headshot",
    category: "Portfolio",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Dramatic Rim Light Casting Profile",
    gearTag: "Profoto B10X • 135mm Prime",
    aspect: "portrait"
  },
  {
    id: "p-3",
    title: "Contemporary Silhouette",
    category: "Portfolio",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
    subtitle: "High-Fashion Lookbook Line",
    gearTag: "50mm f/1.2 • Soft Contrast",
    aspect: "portrait"
  },
  {
    id: "p-4",
    title: "Monochrome Elegance",
    category: "Portfolio",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Editorial Runway Casting Series",
    gearTag: "Black & White Fine Art Grade",
    aspect: "portrait"
  },
  {
    id: "p-5",
    title: "Warm Studio Radiance",
    category: "Portfolio",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Beauty & Skincare Lookbook",
    gearTag: "Macro 90mm GM • Beauty Dish",
    aspect: "portrait"
  },

  // Concept Shoots
  {
    id: "c-1",
    title: "Cinematic Noir & Crimson Haze",
    category: "Concept",
    src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Atmospheric Smoke & Dramatic Shadows",
    gearTag: "Haze Machine • Red Gel Rim Lights",
    aspect: "portrait",
    featured: true
  },
  {
    id: "c-2",
    title: "Cyberpunk Neon Mirage",
    category: "Concept",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Futuristic Violet & Cyan Reflections",
    gearTag: "RGB Tube Lighting • 35mm GM",
    aspect: "portrait"
  },
  {
    id: "c-3",
    title: "Prismatic Light Fracture",
    category: "Concept",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Crystal Prism Optical Refraction",
    gearTag: "Optical Crystal Prism • 50mm",
    aspect: "portrait"
  },
  {
    id: "c-4",
    title: "Vintage 1970s Film Grain",
    category: "Concept",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Retro Kodak Portra Analog Tones",
    gearTag: "Analog Emulation • Warm Tungsten",
    aspect: "portrait"
  },
  {
    id: "c-5",
    title: "Flora & Fine Art Portraiture",
    category: "Concept",
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Botanical Haute Couture",
    gearTag: "Studio Octabox • 85mm f/1.4",
    aspect: "portrait"
  },

  // Videography
  {
    id: "v-1",
    title: "The Director's Vision",
    category: "Videography",
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Live 4K Cinema Framing on Set",
    gearTag: "Sony FX6 • Atomos Ninja V",
    aspect: "landscape",
    featured: true
  },
  {
    id: "v-2",
    title: "Cinema Rig on Production",
    category: "Videography",
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Full Mattebox & Anamorphic Glass",
    gearTag: "Sirui 50mm Anamorphic • Tilta Rig",
    aspect: "landscape"
  },
  {
    id: "v-3",
    title: "Gimbal Motion Tracking",
    category: "Videography",
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Dynamic 60fps Wedding Couple Run",
    gearTag: "DJI Ronin RS3 Pro • FX3",
    aspect: "landscape"
  },
  {
    id: "v-4",
    title: "Anamorphic Bokeh & Flare",
    category: "Videography",
    src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=85",
    subtitle: "True Oval Bokeh & Horizontal Flare",
    gearTag: "Anamorphic 1.6x Squeeze Glass",
    aspect: "landscape"
  },
  {
    id: "v-5",
    title: "Sky Aerial Perspectives",
    category: "Videography",
    src: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=85",
    subtitle: "Destination Palace Drone Cinematography",
    gearTag: "DJI Mavic 3 Cine ProRes",
    aspect: "landscape"
  }
];

// Curated Studio Pricing Packages for Nav's studio
export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "pkg-wedding-luxury",
    serviceCategory: "Weddings",
    name: "Royal Heritage Wedding",
    subtitle: "Complete Candid Photo + Cinematic Film Coverage",
    price: "₹1,25,000",
    originalPrice: "₹1,50,000",
    popular: true,
    duration: "2-Day Complete Wedding & Reception",
    deliverablesSummary: "400+ Retouched Photos, 4K Cinema Film (5-7m) + 60s Teaser Reel",
    bestFor: "Grand Weddings, Pre-Wedding shoots & Luxury Receptions",
    features: [
      "Dedicated Senior Photographers & 2 Cinematographers",
      "Handcrafted Flush-Mount 12x18 Velvet Photo Album",
      "4K Drone Aerial Coverage for Baraat & Mandap",
      "48-Hour Rapid Teaser Gallery for Social Media",
      "Complete RAW Photo & Video Hard Drive Archive",
      "Complimentary Golden-Hour Pre-Wedding Couple Session"
    ]
  },
  {
    id: "pkg-baby-milestone",
    serviceCategory: "Baby & Milestones",
    name: "Little Monarch Milestone",
    subtitle: "Our Signature 1st Birthday & Milestone Experience",
    price: "₹15,999",
    originalPrice: "₹19,500",
    popular: false,
    duration: "2.5 Hours Baby-Paced Session",
    deliverablesSummary: "25 Master Retouched Fine Art Photos + Hardcover Photobook",
    bestFor: "1st Birthdays, Sitters (6-12 Months) & Family Milestone",
    features: [
      "Choice of 2 Signature Handcrafted Physical Theme Sets",
      "Free Cake Smash Setup (Complimentary organic sanitized cake)",
      "Parent, Grandparent & Sibling Portraits Included",
      "80+ Sanitized Designer Baby Costumes & Wraps",
      "Online Private Gallery Access for 1 Full Year",
      "High-Resolution Print-Ready Delivery within 7 Days"
    ]
  },
  {
    id: "pkg-portfolio-elite",
    serviceCategory: "Fashion & Modeling",
    name: "Editorial Lookbook & Portfolio",
    subtitle: "For Fashion Models, Actors, Artists & Executives",
    price: "₹18,500",
    originalPrice: "₹22,000",
    popular: false,
    duration: "3.5 Hours Studio & Creative Sets",
    deliverablesSummary: "4 Distinct Outfits • 18 Frequency Separation Retouched Looks",
    bestFor: "Agency Castings, Fashion Lookbooks, Personal Branding",
    features: [
      "4 Stylized Wardrobe & Creative Lighting Setups",
      "High-End Magazine Skin Retouching (Retaining Pore Texture)",
      "Digital Comp Card & Agency Headshots Template",
      "Commercial Rights for Portfolio, Website & Socials",
      "Behind-The-Scenes 4K Instagram Fashion Reel (30s)",
      "Complete Selection of Uncompressed High-Res JPEGs"
    ]
  },
  {
    id: "pkg-concept-fineart",
    serviceCategory: "Creative Fine Art",
    name: "Avant-Garde Concept Production",
    subtitle: "Custom Lighting, Cinematic Smoke & High Art Direction",
    price: "₹24,000",
    originalPrice: "₹28,500",
    popular: false,
    duration: "Half Day Dedicated Studio Production",
    deliverablesSummary: "15 Fine-Art Artworks + 60s Cinematic Concept Film",
    bestFor: "Music Album Art, Thematic Editorial & Creative Personal Projects",
    features: [
      "Bespoke Moodboard & Creative Art Direction Call",
      "Atmospheric Smoke, RGB Prismatic Strobe & Gels",
      "Cinematic 4K Motion Reel with Sound Design",
      "Museum-Grade 18x24 Framed Wall Art Piece",
      "Collaborative Stylist & Prop Assistant on set",
      "Full Commercial & Exhibition Licensing"
    ]
  },
  {
    id: "pkg-cinema-film",
    serviceCategory: "Films & Cinema",
    name: "Haute Cinematography Reel",
    subtitle: "Netflix-Approved Cinema Cameras & Hollywood Grade Color",
    price: "₹38,000",
    originalPrice: "₹45,000",
    popular: true,
    duration: "Full Production Shoot",
    deliverablesSummary: "4K Master Film (3-5 mins) + 2 Vertical Reels for Instagram",
    bestFor: "Commercial Brand Commercials, Music Videos & Wedding Teasers",
    features: [
      "Sony FX3 Cinema Rig + Anamorphic Cine Glass",
      "DJI Ronin RS3 Gimbal Dynamic Stabilization",
      "DaVinci Resolve Film Emulation Color Grading",
      "Licensed Hollywood Soundscapes & Foley Mixing",
      "Drone Aerial 4K Cinematography included",
      "Delivered on Luxe Engraved Wooden Keepsake Drive"
    ]
  }
];

// Studio Features / Why Nav
export const STUDIO_FEATURES: StudioFeature[] = [
  {
    icon: "Sparkles",
    title: "Haute Editorial Direction",
    description: "Every session is led with personalized moodboards, bespoke lighting schemes, and flattering posing direction that captures your genuine personality."
  },
  {
    icon: "Film",
    title: "Cinema-Grade Optics & Gear",
    description: "We shoot with full-frame Sony FX cinema bodies, G-Master f/1.2 primes, anamorphic lenses, Profoto studio strobes, and fluid 3-axis gimbals."
  },
  {
    icon: "Palette",
    title: "Master Skin & Color Grading",
    description: "No cheap plastic filters. We use frequency separation retouching for pristine skin texture and custom film emulation luts for timeless color harmony."
  },
  {
    icon: "ShieldCheck",
    title: "Sanitized & Private Lounge",
    description: "Our Jubilee Hills studio features medical-grade UV sanitation for baby sets, climate-controlled warmth, and private changing dressing suites."
  },
  {
    icon: "Clock",
    title: "48-Hour Teaser Guarantee",
    description: "We understand your excitement to share. Your curated high-res teaser gallery and 4K reel arrive within 48 hours of your shoot."
  },
  {
    icon: "Plane",
    title: "Pan-India & Destination Ready",
    description: "From royal palaces in Rajasthan to scenic beach retreats in Goa and international destinations, Nav & team travel worldwide for your milestone."
  }
];

// Testimonials across all disciplines
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    clientName: "Meera & Siddharth Varma",
    serviceType: "Wedding Photography & Cinema",
    rating: 5,
    comment: "Nav and his crew were the absolute highlight of our wedding in Udaipur! Their ability to capture candid, tearful moments without being intrusive is world-class. Our 4K cinematic film made our entire family cry all over again. Pure art!",
    date: "Hyderabad & Udaipur • 3 weeks ago",
    location: "Destination Wedding"
  },
  {
    id: "t-2",
    clientName: "Rohan Kapoor",
    serviceType: "Model & Fashion Portfolio",
    rating: 5,
    comment: "I needed a fresh agency portfolio for upcoming casting calls in Mumbai. Nav directed my angles and expressions like an absolute maestro. The studio lighting was breathtaking, and I landed two commercial shoots within two weeks of sharing the book!",
    date: "Jubilee Hills Studio • 1 month ago",
    location: "Fashion Portfolio"
  },
  {
    id: "t-3",
    clientName: "Pooja & Abhinav Rao",
    serviceType: "Baby 1st Birthday Shoot",
    rating: 5,
    comment: "We were nervous because our baby gets cranky quickly, but Nav's team has endless patience and warmth. The physical grand piano and garden swing sets were immaculate and completely sanitized. The framed print is now the crown jewel of our living room!",
    date: "Hyderabad • 2 weeks ago",
    location: "1st Birthday Milestone"
  },
  {
    id: "t-4",
    clientName: "Ayesha Sen",
    serviceType: "Concept Shoot & Album Art",
    rating: 5,
    comment: "For my music EP launch, I wanted a futuristic, neo-noir cinematic concept with smoke and colored prisms. Snaps by Nav exceeded every expectation. The visual storytelling was mind-bending and gave my album the exact mood I dreamt of.",
    date: "Banjara Hills • 3 weeks ago",
    location: "Concept Fine Art"
  }
];

// Comprehensive FAQs
export const FAQS = [
  {
    q: "What types of shoots is 'Snaps by Nav' available for?",
    a: "We specialize in 5 dedicated pillars: Wedding Photography & Royal Destination Celebrations, Baby & Milestone Shoots (including 1st Birthday cake smashes & 20+ theme sets), Fashion & Actor Portfolios, Avant-Garde Concept Shoots, and 4K Cinematic Videography & Brand Commercials."
  },
  {
    q: "Where is the studio located, and do you travel for destination shoots?",
    a: "Our flagship private studio is located on Road No. 36, Jubilee Hills, Hyderabad. We frequently travel Pan-India (Goa, Jaipur, Udaipur, Bangalore, Kerala) and internationally for luxury destination weddings and brand campaigns."
  },
  {
    q: "How does the booking process work?",
    a: "You can select your desired service on our interactive booking wizard on this page, or reach out directly on WhatsApp. We schedule a creative moodboard consultation, confirm your date with a reservation advance, and share customized wardrobe and styling guides."
  },
  {
    q: "How soon do we receive our photos and cinematic video?",
    a: "We deliver a private digital 'First Look' teaser gallery within 48 to 72 hours. Complete master color-graded high-resolution photos are delivered in 7 to 14 days, and cinematic 4K highlight films and custom flush-mount velvet photobooks within 2 to 3 weeks."
  },
  {
    q: "For Baby Shoots, what safety and hygiene measures are in place?",
    a: "Our studio maintains pediatrician-recommended 26°C warmth, medical-grade UV sanitation for all fabrics and props, and a completely baby-led schedule. If baby needs nursing or soothing, our shoot gently pauses. We never rush."
  },
  {
    q: "Do you provide hair, makeup, and wardrobe styling for Portfolios & Concepts?",
    a: "Yes! We work with top-tier editorial hair and makeup artists in Hyderabad. For baby shoots, we have an inventory of 80+ sanitized outfits and wraps. For portfolios and concepts, we offer full wardrobe moodboarding and styling support."
  }
];
