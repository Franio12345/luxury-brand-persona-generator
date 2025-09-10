// src/pages/HomePage.tsx

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";

interface HomePageProps {
  onStartQuiz: () => void;
}

export const HomePage = ({ onStartQuiz }: HomePageProps) => {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-serif text-5xl font-bold text-white-pristine md:text-7xl">
            Discover Your Brand's Soul
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-serene">
            In the heart of every luxury brand lies a timeless archetype. Our digital atelier guides you through a journey of discovery to unveil your brand's unique persona, crafting a narrative that captivates and endures.
          </p>
          <Button onClick={onStartQuiz} className="mt-8 group" size="lg">
            Begin Your Journey
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </PageWrapper>
  );
};