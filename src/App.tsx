// src/App.tsx

import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { QuizPage } from './pages/QuizPage';
import { Footer } from './components/layout/Footer';

type AppState = 'home' | 'quiz';

function App() {
  const [appState, setAppState] = useState<AppState>('home');

  const startQuiz = () => setAppState('quiz');
  const returnHome = () => setAppState('home');

  const renderContent = () => {
    switch (appState) {
      case 'quiz':
        return <QuizPage onReturnHome={returnHome} />;
      case 'home':
      default:
        return <HomePage onStartQuiz={startQuiz} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased bg-navy-deep text-slate-light">
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;