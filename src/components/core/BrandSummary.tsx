// src/components/core/BrandSummary.tsx

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandArchetype } from '@/constants/archetypes';

interface BrandSummaryProps {
  archetype: BrandArchetype;
}

export const BrandSummary = ({ archetype }: BrandSummaryProps) => {
  const handleExport = () => {
    // Placeholder logic for the export feature.
    // In a real application, this would trigger a PDF or HTML generation library.
    alert(`Exporting Brand Summary for: ${archetype.name}`);
    console.log("Exportable Data:", archetype);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      className="mt-12 text-center"
    >
      <h3 className="font-serif text-2xl text-white-pristine">Your Brand Blueprint</h3>
      <p className="mt-2 text-gray-serene">
        Download a summary of your brand persona for your vision board and client presentations.
      </p>
      <Button
        onClick={handleExport}
        className="mt-6 group"
        size="lg"
      >
        Download Your Summary
        <Download className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
    </motion.div>
  );
};