// src/pages/PersonaResultPage.tsx

import { useState, useEffect } from 'react';
import { PageWrapper } from "@/components/layout/PageWrapper";
import { PersonaCard } from "@/components/core/PersonaCard";
import { BrandSummary } from "@/components/core/BrandSummary";
import { ArchetypeName, archetypes, BrandArchetype } from "@/constants/archetypes";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { generateBrandTagline } from '@/lib/openai'; // Import our new AI function

interface PersonaResultPageProps {
  personaResult: ArchetypeName;
  onReset: () => void;
}

export const PersonaResultPage = ({ personaResult, onReset }: PersonaResultPageProps) => {
  const [archetypeData, setArchetypeData] = useState<BrandArchetype | null>(null);
  const [tagline, setTagline] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This function runs once when the component is first rendered.
    const findDataAndGenerateTagline = async () => {
      setIsLoading(true);
      const data = archetypes.find(a => a.name === personaResult);
      if (data) {
        setArchetypeData(data);
        const generatedTagline = await generateBrandTagline(data);
        setTagline(generatedTagline);
        setIsLoading(false);
      } else {
        // Handle the case where the archetype data isn't found
        setIsLoading(false);
      }
    };

    findDataAndGenerateTagline();
  }, [personaResult]); // The effect depends on the personaResult prop

  if (!archetypeData) {
    return (
      <PageWrapper className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="font-serif text-2xl text-white-pristine">
          {isLoading ? 'Unveiling your persona...' : 'Archetype not found.'}
        </h2>
        {!isLoading && (
          <Button onClick={onReset} className="mt-6">
            Try Again
          </Button>
        )}
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className="py-12 md:py-24">
      <div className="mb-12 text-center">
        <p className="font-semibold text-teal-brand">YOUR BRAND ARCHETYPE</p>
        <h1 className="mt-2 font-serif text-5xl md:text-6xl text-white-pristine">{archetypeData.name}</h1>
        {/* This paragraph will now dynamically display the AI-generated tagline */}
        <p className="h-8 mt-4 text-xl transition-opacity duration-500 text-gray-serene">
          {isLoading ? 'Crafting your brand voice...' : `"${tagline}"`}
        </p>
      </div>
      
      <PersonaCard archetype={archetypeData} />
      <BrandSummary archetype={archetypeData} />

      <div className="mt-12 text-center">
        <Button onClick={onReset} variant="ghost" className="group">
          <RefreshCw className="w-4 h-4 mr-2 transition-transform group-hover:rotate-180" />
          Start a New Discovery
        </Button>
      </div>
    </PageWrapper>
  );
};