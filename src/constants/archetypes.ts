// src/constants/archetypes.ts

export type ArchetypeName = 
  | "The Sage" | "The Creator" | "The Explorer" | "The Lover"
  | "The Innocent" | "The Hero" | "The Outlaw" | "The Magician"
  | "The Jester" | "The Everyman" | "The Caregiver" | "The Ruler";

export interface BrandArchetype {
  name: ArchetypeName;
  title: string;
  motto: string;
  description: string;
  keywords: string[];
}

export const archetypes: BrandArchetype[] = [
  // Existing Archetypes
  {
    name: "The Sage",
    title: "The Guide to Wisdom",
    motto: "The truth will set you free.",
    description: "Your brand is a source of wisdom, truth, and clarity. It seeks to understand the world and share its findings, trusting that knowledge is the path to fulfillment.",
    keywords: ["Wisdom", "Clarity", "Truth", "Objectivity", "Analysis"],
  },
  {
    name: "The Creator",
    title: "The Visionary Artist",
    motto: "If you can imagine it, it can be done.",
    description: "Your brand is driven by the desire to create things of enduring value and beauty. It thrives on imagination, self-expression, and innovation, bringing visions to life.",
    keywords: ["Innovation", "Imagination", "Artistry", "Expression", "Vision"],
  },
  {
    name: "The Explorer",
    title: "The Seeker of Freedom",
    motto: "Don't fence me in.",
    description: "Your brand craves adventure and discovery. It is independent, ambitious, and authentic, seeking to push boundaries and experience a more fulfilling life.",
    keywords: ["Freedom", "Adventure", "Authenticity", "Discovery", "Independence"],
  },
  {
    name: "The Lover",
    title: "The Purveyor of Intimacy",
    motto: "You're the only one.",
    description: "Your brand is all about creating intimacy and connection. It excels in making people feel special and desired, focusing on sensory pleasure and passionate relationships.",
    keywords: ["Intimacy", "Passion", "Connection", "Elegance", "Desire"],
  },

  // New Archetypes
  {
    name: "The Innocent",
    title: "The Dreamer of Purity",
    motto: "Free to be you and me.",
    description: "Your brand embodies simplicity, happiness, and optimism. It seeks to do things the right way, with a core desire for everyone to experience paradise.",
    keywords: ["Optimism", "Simplicity", "Honesty", "Purity", "Happiness"],
  },
  {
    name: "The Hero",
    title: "The Champion of Courage",
    motto: "Where there's a will, there's a way.",
    description: "Your brand is a champion of the people, rising to any challenge with courage and determination. It aims to inspire, protect, and empower others to achieve their best.",
    keywords: ["Courage", "Mastery", "Strength", "Inspiration", "Triumph"],
  },
  {
    name: "The Outlaw",
    title: "The Catalyst for Revolution",
    motto: "Rules are made to be broken.",
    description: "Your brand is a revolutionary at heart, challenging conventions and embracing radical freedom. It seeks to disrupt, liberate, and awaken a desire for change.",
    keywords: ["Rebellion", "Disruption", "Liberation", "Radical", "Freedom"],
  },
  {
    name: "The Magician",
    title: "The Weaver of Dreams",
    motto: "I make things happen.",
    description: "Your brand makes dreams come true through vision and transformation. It is charismatic, imaginative, and seeks to create magical moments and transformative experiences.",
    keywords: ["Transformation", "Vision", "Charisma", "Imagination", "Miracles"],
  },
  {
    name: "The Jester",
    title: "The Bringer of Joy",
    motto: "You only live once.",
    description: "Your brand lives in the moment, using humor and fun to connect with others. It encourages people to lighten up, enjoy life, and see the playful side of things.",
    keywords: ["Humor", "Playfulness", "Joy", "Irreverence", "Fun"],
  },
  {
    name: "The Everyman",
    title: "The Advocate for Belonging",
    motto: "All men and women are created equal.",
    description: "Your brand is approachable, authentic, and relatable. It believes in the inherent worth of every person and seeks to create a sense of belonging and community.",
    keywords: ["Belonging", "Authenticity", "Community", "Relatability", "Empathy"],
  },
  {
    name: "The Caregiver",
    title: "The Font of Compassion",
    motto: "Love your neighbor as yourself.",
    description: "Your brand is driven by compassion, generosity, and a desire to protect and care for others. It provides comfort, security, and a sense of being looked after.",
    keywords: ["Compassion", "Nurturing", "Generosity", "Protection", "Empathy"],
  },
  {
    name: "The Ruler",
    title: "The Icon of Power",
    motto: "Power isn't everything, it's the only thing.",
    description: "Your brand exudes leadership, control, and success. It creates order from chaos and promises quality, stability, and influence in a chaotic world.",
    keywords: ["Leadership", "Control", "Success", "Influence", "Excellence"],
  },
];