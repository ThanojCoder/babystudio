export interface ThemeItem {
  id: string;
  title: string;
  category: string;
  src: string;
  originalName: string;
  tag: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
  originalName: string;
  ageGroup: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  themesCount: string;
  duration: string;
  outfits: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  parentName: string;
  babyName: string;
  themeUsed: string;
  rating: number;
  comment: string;
  date: string;
}

export interface StudioFeature {
  icon: string;
  title: string;
  description: string;
}

export const STUDIO_INFO = {
  name: "Babies Studio Hyd",
  tagline: "For Your Precious Moments",
  subtitle: "Hyderabad's Premier Luxury Baby, Milestone & 1st Birthday Photography Studio",
  phone: "+91 91234 56789",
  whatsapp: "+919123456789",
  email: "contact@babiesstudiohyd.com",
  address: "Road No. 36, Jubilee Hills / Kondapur, Hyderabad, Telangana",
  hours: "Tuesday – Sunday: 9:30 AM – 6:30 PM (By Prior Booking)",
  instagram: "@babiesstudiohyd",
  googleRating: "4.9",
  reviewCount: "480+",
};

// All 21 Studio Themes from user's themes folder
export const THEMES_LIST: ThemeItem[] = [
  {
    id: "t-1",
    title: "Enchanted Garden Swing",
    category: "Signature Sets",
    src: "/images/themes/theme-01.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.28 (2).jpeg",
    tag: "Most Popular",
    description: "Handcrafted rustic wooden swing adorned with blue, pink and orange blooms against a warm twilight backdrop."
  },
  {
    id: "t-2",
    title: "Outdoor Greenery & Bloom",
    category: "Nature & Boho",
    src: "/images/themes/theme-02.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.28.jpeg",
    tag: "Natural Light",
    description: "Sun-dappled open garden lawn setting with vibrant flowering bushes and gentle natural breeze."
  },
  {
    id: "t-3",
    title: "Royal White Grand Piano",
    category: "Signature Sets",
    src: "/images/themes/theme-03.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.29 (1).jpeg",
    tag: "1st Birthday Favorite",
    description: "Miniature white grand piano with floral cascades, blush silk drapes, and wooden ONE milestone blocks."
  },
  {
    id: "t-4",
    title: "Tropical Beach & Surf Holiday",
    category: "Fantasy & Adventure",
    src: "/images/themes/theme-04.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.31.jpeg",
    tag: "Summer Vibes",
    description: "Sunny seaside resort set with beach shack, surfboards, mini lounger chair, pink parasol and coconut palms."
  },
  {
    id: "t-5",
    title: "Boho Safari Teepee Jungle",
    category: "Nature & Boho",
    src: "/images/themes/theme-05.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.32.jpeg",
    tag: "Neutral Boho",
    description: "Macrame teepee tent with gentle plush wildlife friends, earthy pampas grass and chocolate milestone blocks."
  },
  {
    id: "t-6",
    title: "Little Police Officer HQ",
    category: "Cosplay & Roles",
    src: "/images/themes/theme-06.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.33.jpeg",
    tag: "Cute Cosplay",
    description: "Vintage brick station desk with emblem, mini lathi, handcuffs and jailhouse backdrop for brave little officers."
  },
  {
    id: "t-7",
    title: "Little Pediatrician Clinic",
    category: "Cosplay & Roles",
    src: "/images/themes/theme-07.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.37.jpeg",
    tag: "Cute Cosplay",
    description: "Charming sky-blue doctor clinic with mini stethoscope, consultation table, checkup bed and medicine trolley."
  },
  {
    id: "t-8",
    title: "Divine Mahadev & Temple Shrines",
    category: "Traditional & Culture",
    src: "/images/themes/theme-08.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.38 (1).jpeg",
    tag: "Traditional",
    description: "Auspicious temple backdrop with royal carved blue door, shivling, damru, glowing diyas and fresh marigold petals."
  },
  {
    id: "t-9",
    title: "Village Harvest & Bullock Cart",
    category: "Traditional & Culture",
    src: "/images/themes/theme-09.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.38.jpeg",
    tag: "Sankranti / Festive",
    description: "Authentic rustic harvest field with miniature bullock cart, thatched hut, golden hay, and village charm."
  },
  {
    id: "t-10",
    title: "Hogwarts Wizard Academy",
    category: "Fantasy & Adventure",
    src: "/images/themes/theme-10.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.39.jpeg",
    tag: "Magical",
    description: "Mystical library bookshelf with Hedwig owl, Gryffindor scarf, magic broom, spell books and vintage wooden school desk."
  },
  {
    id: "t-11",
    title: "Pastel Balloon Hot Air Dream",
    category: "Fantasy & Adventure",
    src: "/images/themes/theme-11.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.40 (1).jpeg",
    tag: "Dreamy Clouds",
    description: "Fluffy cloudscape with pastel hot air balloon basket, stars, and celestial lights."
  },
  {
    id: "t-12",
    title: "Royal Prince / Princess Throne",
    category: "Signature Sets",
    src: "/images/themes/theme-12.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.40 (2).jpeg",
    tag: "Royal Luxury",
    description: "Gilded baroque armchair, velvet drapery, and vintage ornate candle stands for little royalty."
  },
  {
    id: "t-13",
    title: "Little Chef Bakery Kitchen",
    category: "Cosplay & Roles",
    src: "/images/themes/theme-13.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.40.jpeg",
    tag: "Fun Foodie",
    description: "Miniature baker counter, rolling pins, flour dusters, cake displays and adorable chef toque outfit."
  },
  {
    id: "t-14",
    title: "Vintage Aviator & Pilot Flight",
    category: "Fantasy & Adventure",
    src: "/images/themes/theme-14.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.41 (1).jpeg",
    tag: "Adventure",
    description: "Handcrafted vintage biplane prop, pilot leather cap, goggles, luggage trunks and sky backdrop."
  },
  {
    id: "t-15",
    title: "Krishna Leela & Makhan Matka",
    category: "Traditional & Culture",
    src: "/images/themes/theme-15.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.41 (2).jpeg",
    tag: "Janmashtami",
    description: "Brindavan backdrop with peacock feathers, butter clay pots (makhan handi), bansuri flute and yellow drapes."
  },
  {
    id: "t-16",
    title: "Floral Garden Bed & Fairyland",
    category: "Nature & Boho",
    src: "/images/themes/theme-16.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.41.jpeg",
    tag: "Enchanted",
    description: "Bed of fresh pastel roses, eucalyptus garlands, and gentle glowing fairy lights."
  },
  {
    id: "t-17",
    title: "Retro Vintage Car Cruiser",
    category: "Signature Sets",
    src: "/images/themes/theme-17.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.42 (1).jpeg",
    tag: "Boys & Girls",
    description: "Classic miniature retro roadster car with checkered flags, fuel pump and route 66 props."
  },
  {
    id: "t-18",
    title: "Cozy Rustic Moon & Twinkle Stars",
    category: "Fantasy & Adventure",
    src: "/images/themes/theme-18.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.42 (2).jpeg",
    tag: "Newborn Cozy",
    description: "Carved wooden crescent moon cradle floating amid soft cotton clouds and glowing star constellations."
  },
  {
    id: "t-19",
    title: "Floral Bathtub Splash & Bubbles",
    category: "Signature Sets",
    src: "/images/themes/theme-19.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.42 (3).jpeg",
    tag: "Splash Session",
    description: "Vintage clawfoot mini tub with warm water bubbles, rubber ducks and fresh milk-flower bath."
  },
  {
    id: "t-20",
    title: "Traditional Pattu Pavadai Royal Courtyard",
    category: "Traditional & Culture",
    src: "/images/themes/theme-20.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.42.jpeg",
    tag: "Festive Heritage",
    description: "South Indian traditional urli with floating blossoms, brass lamps (kuthu vilakku) and silk backdrops."
  },
  {
    id: "t-21",
    title: "Autumn Boho Camping Campfire",
    category: "Nature & Boho",
    src: "/images/themes/theme-21.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.43.jpeg",
    tag: "Outdoor Camp",
    description: "Mini pine cone campfire, cozy wool blankets, lantern light and rustic woodland logs."
  }
];

// All 11 Gallery Shoots from user's gallery folder
export const GALLERY_LIST: GalleryItem[] = [
  {
    id: "g-1",
    title: "Outdoor Meadow Sunshine",
    category: "Outdoor & Nature",
    src: "/images/gallery/gallery-01.jpeg",
    originalName: "WhatsApp Image 2026-1-20 at 15.26.43.jpeg",
    ageGroup: "12 Months (1st Birthday)"
  },
  {
    id: "g-2",
    title: "Little Doll on Floral Swing",
    category: "Milestones",
    src: "/images/gallery/gallery-02.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.25 (1).jpeg",
    ageGroup: "10-12 Months"
  },
  {
    id: "g-3",
    title: "Sweet Giggles & Velvet Gown",
    category: "Milestones",
    src: "/images/gallery/gallery-03.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.25.jpeg",
    ageGroup: "1st Birthday Celebration"
  },
  {
    id: "g-4",
    title: "Melody Star at Pink Piano",
    category: "Themes in Action",
    src: "/images/gallery/gallery-04.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.26 (1).jpeg",
    ageGroup: "12 Months"
  },
  {
    id: "g-5",
    title: "Joyful Cookie Break & Smiles",
    category: "Themes in Action",
    src: "/images/gallery/gallery-05.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.26 (2).jpeg",
    ageGroup: "1 Year Milestone"
  },
  {
    id: "g-6",
    title: "Festive South Indian Village Belle",
    category: "Traditional",
    src: "/images/gallery/gallery-06.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.26.jpeg",
    ageGroup: "10-14 Months"
  },
  {
    id: "g-7",
    title: "Curious Explorer Sitter",
    category: "Milestones",
    src: "/images/gallery/gallery-07.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.27 (1).jpeg",
    ageGroup: "8-10 Months Sitter"
  },
  {
    id: "g-8",
    title: "Pure Happiness & Tiny Steps",
    category: "Milestones",
    src: "/images/gallery/gallery-08.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.27.jpeg",
    ageGroup: "1st Birthday"
  },
  {
    id: "g-9",
    title: "Blossom Garden Discovery",
    category: "Outdoor & Nature",
    src: "/images/gallery/gallery-09.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.28 (1).jpeg",
    ageGroup: "1 Year"
  },
  {
    id: "g-10",
    title: "Traditional Pattu Pavadai Wonder",
    category: "Traditional",
    src: "/images/gallery/gallery-10.jpeg",
    originalName: "WhatsApp Image 2026-10-20 at 15.26.29.jpeg",
    ageGroup: "1st Birthday Special"
  },
  {
    id: "g-11",
    title: "Rustic Village Bullock Cart Heritage",
    category: "Traditional",
    src: "/images/gallery/gallery-11.jpg",
    originalName: "unnamed.jpg",
    ageGroup: "12 Months"
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "package-mini",
    name: "Tiny Bloom",
    subtitle: "Ideal for Milestone Sitters & Quick Keepsakes",
    price: "₹7,999",
    originalPrice: "₹9,999",
    themesCount: "1 Signature Theme",
    duration: "60 - 75 Mins",
    outfits: "1 Baby Designer Outfit",
    features: [
      "1 Custom Selected Studio Theme",
      "10 High-Resolution Retouched Photos",
      "Access to Sanitized Props & Accessories",
      "Private Feeding & Diaper Change Area",
      "Online Private Gallery Access (1 Year)",
      "Printable High-Res Digital Delivery in 7 Days"
    ]
  },
  {
    id: "package-signature",
    name: "Milestone Celebration",
    subtitle: "Our Most Loved Package for 1st Birthdays",
    price: "₹14,999",
    originalPrice: "₹18,500",
    popular: true,
    themesCount: "2 Custom Themes + Family Shoot",
    duration: "2 - 2.5 Hours",
    outfits: "2-3 Outfits Provided + Parent Poses",
    features: [
      "2 Handpicked Creative Themes from Catalog",
      "Bonus Parent & Sibling Family Portraits",
      "22 Masterfully Retouched Fine Art Photos",
      "Cake Smash Setup Option (Cake complimentary)",
      "Complimentary Mini 8x8 Hardcover Photobook",
      "All Unedited High-Res JPEGs provided via Drive",
      "Full styling guidance and organic sanitized props"
    ]
  },
  {
    id: "package-royal",
    name: "Royal Heritage Luxe",
    subtitle: "The Ultimate Royal VIP Keepsake for Your Baby",
    price: "₹23,999",
    originalPrice: "₹29,999",
    themesCount: "3 Luxury Themes + Splash Bath",
    duration: "3 - 3.5 Hours (Baby-paced)",
    outfits: "Unlimited Wardrobe Changes",
    features: [
      "3 Signature Themes + Milk Bath Splash Bath",
      "Complete Family & Grandparents Included",
      "35 Signature Hand-Retouched Masterpieces",
      "Deluxe 12x12 Velvet Flush-Mount Luxury Album",
      "4K Cinematic 60-second Instagram Reel Video",
      "All Original Uncompressed RAW + JPEG Files",
      "VIP Priority 5-Day Delivery Guarantee",
      "Personalized Acrylic Photo Frame (16x24)"
    ]
  }
];

export const STUDIO_FEATURES: StudioFeature[] = [
  {
    icon: "ShieldCheck",
    title: "100% Medical-Grade Hygiene",
    description: "Every fabric, prop, wooden toy, and carpet is UV-sanitized and steam-cleaned prior to every single session."
  },
  {
    icon: "ThermometerSun",
    title: "Temperature & Cozy Climate",
    description: "Our studio maintains a pediatrician-recommended 26°C warmth with HEPA air filters, ensuring baby stays relaxed and warm."
  },
  {
    icon: "HeartHandshake",
    title: "Gentle Baby-Led Pacing",
    description: "We never rush. If your baby needs feeding, a catnap, or cuddles, our shoot pauses until your little star is happy."
  },
  {
    icon: "Sparkles",
    title: "20+ Ready Immersive Sets",
    description: "From vintage grand pianos to traditional bullock carts and magical Harry Potter academies, everything is fully physical & realistic."
  },
  {
    icon: "Crown",
    title: "Designer Wardrobe Included",
    description: "Over 80+ imported wraps, crowns, gowns, rompers, and traditional silks curated for newborn to 3-year-olds."
  },
  {
    icon: "Camera",
    title: "Award-Winning Color Grading",
    description: "True-to-skin tones with warm fine-art lighting that will look timeless 50 years from today."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    parentName: "Sneha & Karthik Reddy",
    babyName: "Ananya (1st Birthday)",
    themeUsed: "White Piano & Floral Swing",
    rating: 5,
    comment: "Babies Studio HYD made our baby girl's 1st birthday shoot feel so joyful! She usually gets grumpy with strangers, but the team's patience with warm smiles had her giggling the whole time. The photos are pure magic!",
    date: "Hyderabad, 2 weeks ago"
  },
  {
    id: "rev-2",
    parentName: "Dr. Rohini & Vikram Rao",
    babyName: "Aarav (8 Months)",
    themeUsed: "Little Doctor & Boho Safari",
    rating: 5,
    comment: "As a doctor myself, the clinic setup was beyond adorable and insanely detailed! Most importantly, their sanitization protocol gave us total peace of mind. Truly the best baby studio in Hyderabad.",
    date: "Madhapur, 1 month ago"
  },
  {
    id: "rev-3",
    parentName: "Priyanka & Sai Teja",
    babyName: "Dhruv (1 Year)",
    themeUsed: "Bullock Cart Harvest & Police HQ",
    rating: 5,
    comment: "The village harvest set is completely authentic! Our family and grandparents were emotional seeing Dhruv in traditional attire. The photobook quality is unbelievable. Highly recommended!",
    date: "Jubilee Hills, 3 weeks ago"
  }
];

export const FAQS = [
  {
    q: "When is the ideal age for a baby photoshoot?",
    a: "For milestone sitter shoots, 6 to 9 months (when baby can sit without support) is wonderful. For 1st birthday celebrations, 10 to 12 months is perfect. For newborn photography, within the first 7 to 20 days is ideal when babies sleep deeply."
  },
  {
    q: "What happens if my baby gets fussy, hungry, or cries during the shoot?",
    a: "Please don't worry at all! Our studio is strictly 'baby-paced'. We build ample cushion time into every session so you can nurse, feed, soothe, or change diapers whenever your baby needs."
  },
  {
    q: "Do we need to bring our own outfits and props?",
    a: "No! We have an extensive collection of sanitized baby outfits, wraps, tiaras, traditional turbans, and props for all 21 themes. You are also welcome to bring one special personal family outfit."
  },
  {
    q: "Are parents and elder siblings included in the photos?",
    a: "Yes! In our Milestone Celebration and Royal packages, family portraits with parents and siblings are happily included at no extra charge."
  },
  {
    q: "How soon do we receive our edited photos and album?",
    a: "You will receive the digital preview gallery within 48 to 72 hours. Your selected retouched high-resolution images are delivered within 7 to 10 days, and printed luxury photobooks within 2 to 3 weeks."
  },
  {
    q: "How can we book and reserve our preferred date?",
    a: "You can select your desired themes and date using our online booking wizard right here on the website, or tap the WhatsApp button to chat directly with our studio coordinator."
  }
];
