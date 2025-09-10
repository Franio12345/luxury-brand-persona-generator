// src/components/core/PersonaCard.tsx

import { motion } from 'framer-motion';
import { BrandArchetype } from '@/constants/archetypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PersonaCardProps {
  archetype: BrandArchetype;
}

export const PersonaCard = ({ archetype }: PersonaCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-3xl mx-auto"
    >
      <Card className="shadow-xl bg-navy-deep/50 border-slate-light/20">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-center text-teal-brand">
            "{archetype.motto}"
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg leading-relaxed text-slate-light">
            {archetype.description}
          </p>
          <div className="mt-8">
            <h4 className="mb-4 font-semibold text-white-pristine">Core Keywords:</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {archetype.keywords.map((keyword) => (
                <div key={keyword} className="px-3 py-1 text-sm rounded-full bg-slate-light/10 text-teal-brand">
                  {keyword}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};