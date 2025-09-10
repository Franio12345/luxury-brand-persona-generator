// src/hooks/usePersonaFlow.ts

import { useState, useMemo } from 'react';
import { quizQuestions } from '@/constants/quizQuestions';
import { ArchetypeName } from '@/constants/archetypes';

// This defines the structure for storing the scores for each archetype.
type AnswerMap = {
  [key in ArchetypeName]?: number;
};

export const usePersonaFlow = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [isComplete, setIsComplete] = useState(false);
  const [result, setResult] = useState<ArchetypeName | null>(null);

  // Memoize the current question to prevent unnecessary recalculations.
  const currentQuestion = useMemo(() => {
    return quizQuestions[currentQuestionIndex];
  }, [currentQuestionIndex]);

  // Memoize the progress calculation.
  const progress = useMemo(() => {
    return ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (archetype: ArchetypeName) => {
    // Increment the score for the selected archetype.
    const newAnswers = { ...answers };
    newAnswers[archetype] = (newAnswers[archetype] || 0) + 1;
    setAnswers(newAnswers);

    // Check if we are on the last question.
    if (currentQuestionIndex < quizQuestions.length - 1) {
      // If not, advance to the next question.
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      // If it is the last question, calculate the result.
      calculateResult(newAnswers);
      setIsComplete(true);
    }
  };

  const calculateResult = (finalAnswers: AnswerMap) => {
    let highestScore = 0;
    let dominantArchetype: ArchetypeName | null = null;

    // Find the archetype with the highest score.
    for (const archetype in finalAnswers) {
      const score = finalAnswers[archetype as ArchetypeName]!;
      if (score > highestScore) {
        highestScore = score;
        dominantArchetype = archetype as ArchetypeName;
      }
    }
    setResult(dominantArchetype);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsComplete(false);
    setResult(null);
  };

  // Return all the necessary state and functions for the UI to use.
  return {
    currentQuestion,
    handleAnswerSelect,
    isComplete,
    result,
    progress,
    totalQuestions: quizQuestions.length,
    currentQuestionNumber: currentQuestionIndex + 1,
    resetQuiz,
  };
};