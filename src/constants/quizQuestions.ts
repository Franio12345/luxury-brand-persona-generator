// src/constants/quizQuestions.ts

import { ArchetypeName } from './archetypes';

export interface QuizOption {
  text: string;
  archetype: ArchetypeName;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "When a client experiences your brand, what emotion should they feel most deeply?",
    options: [
      { text: "Enlightened and informed.", archetype: "The Sage" },
      { text: "Inspired and awe-struck.", archetype: "The Creator" },
      { text: "Liberated and adventurous.", archetype: "The Explorer" },
      { text: "Cherished and desired.", archetype: "The Lover" },
    ],
  },
  {
    id: 2,
    text: "What is your brand's ultimate promise to its audience?",
    options: [
      { text: "To provide clarity and understanding.", archetype: "The Sage" },
      { text: "To bring a unique vision to life.", archetype: "The Creator" },
      { text: "To offer a path to freedom and self-discovery.", archetype: "The Explorer" },
      { text: "To create moments of exquisite connection.", archetype: "The Lover" },
    ],
  },
  {
    id: 3,
    text: "Your brand's voice is best described as:",
    options: [
      { text: "Authoritative and objective.", archetype: "The Sage" },
      { text: "Imaginative and expressive.", archetype: "The Creator" },
      { text: "Daring and authentic.", archetype: "The Explorer" },
      { text: "Passionate and sensual.", archetype: "The Lover" },
    ],
  },
  {
    id: 4,
    text: "What is the core motivation behind your brand's actions?",
    options: [
      { text: "To bring order and exert leadership.", archetype: "The Ruler" },
      { text: "To protect, nurture, and help others.", archetype: "The Caregiver" },
      { text: "To innovate and build a better world.", archetype: "The Creator" },
      { text: "To entertain and bring joy.", archetype: "The Jester" },
    ],
  },
  {
    id: 5,
    text: "How does your brand approach rules and conventions?",
    options: [
      { text: "It seeks to overturn and disrupt them.", archetype: "The Outlaw" },
      { text: "It aims to create and enforce them for stability.", archetype: "The Ruler" },
      { text: "It believes in simple, honest virtues.", archetype: "The Innocent" },
      { text: "It proves its worth through mastery and overcoming obstacles.", archetype: "The Hero" },
    ],
  },
  {
    id: 6,
    text: "What kind of experience does your brand want to create?",
    options: [
      { text: "A moment of magical transformation.", archetype: "The Magician" },
      { text: "A feeling of genuine, down-to-earth connection.", archetype: "The Everyman" },
      { text: "A sense of safety and profound care.", archetype: "The Caregiver" },
      { text: "An experience of pure, unadulterated fun.", archetype: "The Jester" },
    ],
  },
];