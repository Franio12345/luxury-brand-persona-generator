// src/pages/QuizPage.tsx

import { usePersonaFlow } from '@/hooks/usePersonaFlow';
import { QuizFlow } from '@/components/core/QuizFlow';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { PersonaResultPage } from './PersonaResultPage';

interface QuizPageProps {
  onReturnHome: () => void;
}

export const QuizPage = ({ onReturnHome }: QuizPageProps) => {
  const {
    currentQuestion,
    handleAnswerSelect,
    isComplete,
    result,
    currentQuestionNumber,
    totalQuestions,
    resetQuiz,
  } = usePersonaFlow();

  const handleReset = () => {
    resetQuiz();
    onReturnHome();
  };

  if (isComplete && result) {
    return <PersonaResultPage personaResult={result} onReset={handleReset} />;
  }

  return (
    <PageWrapper>
      {currentQuestion && (
        <QuizFlow
          question={currentQuestion}
          onAnswerSelect={handleAnswerSelect}
          questionNumber={currentQuestionNumber}
          totalQuestions={totalQuestions}
        />
      )}
    </PageWrapper>
  );
};