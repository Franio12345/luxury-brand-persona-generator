// src/components/core/QuizFlow.tsx

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { QuizQuestion, QuizOption } from '@/constants/quizQuestions';

interface QuizFlowProps {
  question: QuizQuestion;
  onAnswerSelect: (archetype: QuizOption['archetype']) => void;
  questionNumber: number;
  totalQuestions: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const QuizFlow = ({
  question,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
}: QuizFlowProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <motion.div
        key={question.id} // This key is crucial for re-triggering the animation
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="w-full max-w-2xl"
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 text-lg text-gray-serene"
        >
          Question {questionNumber} / {totalQuestions}
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="mb-12 font-serif text-3xl md:text-4xl text-white-pristine"
        >
          {question.text}
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {question.options.map((option) => (
            <motion.div variants={itemVariants} key={option.text}>
              <Button
                variant="outline"
                className="w-full h-auto px-6 py-4 text-base whitespace-normal"
                onClick={() => onAnswerSelect(option.archetype)}
              >
                {option.text}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};