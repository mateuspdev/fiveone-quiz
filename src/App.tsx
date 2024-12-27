import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import { getRandomComparisonPair, categoryMetadata } from "./data/questions";
import { QuizCategory, CategoryScore, Statement } from "./types/quiz";
import StatementButton from "./components/StatementButton";

const TOTAL_QUESTIONS = 50; // Number of comparisons to show

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [categoryScores, setCategoryScores] = useState<
    Record<QuizCategory, number>
  >({
    [QuizCategory.APOSTOLO]: 0,
    [QuizCategory.PROFETA]: 0,
    [QuizCategory.EVANGELISTA]: 0,
    [QuizCategory.PASTOR]: 0,
    [QuizCategory.MESTRE]: 0,
  });
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [usedStatements, setUsedStatements] = useState<Set<number>>(new Set());
  const [currentPair, setCurrentPair] = useState<{
    statement1: Statement;
    statement2: Statement;
  } | null>(null);

  // Preload image when component mounts
  useEffect(() => {
    const img = new Image();
    img.src = logo;
  }, []);

  // Initialize the quiz with first pair
  useEffect(() => {
    if (quizStarted && !currentPair) {
      const pair = getRandomComparisonPair(usedStatements);
      if (pair) {
        setCurrentPair(pair);
        setUsedStatements(
          (prev) => new Set([...prev, pair.statement1.id, pair.statement2.id])
        );
      } else {
        setShowResults(true);
      }
    }
  }, [quizStarted, currentPair, usedStatements]);

  const onHandleChoice = (chosenCategory: QuizCategory) => {
    // Update scores
    setCategoryScores((prevScores) => ({
      ...prevScores,
      [chosenCategory]: prevScores[chosenCategory] + 1,
    }));

    // Check if quiz should end
    if (currentQuestion >= TOTAL_QUESTIONS - 1) {
      setShowResults(true);
      return;
    }

    // Get next question pair
    const newPair = getRandomComparisonPair(usedStatements);
    if (!newPair) {
      setShowResults(true);
      return;
    }

    // Update question state
    setCurrentQuestion((prev) => prev + 1);
    setCurrentPair(newPair);
    setUsedStatements(
      (prev) => new Set([...prev, newPair.statement1.id, newPair.statement2.id])
    );
  };

  const onHandleReset = () => {
    setQuizStarted(false);
    setShowResults(false);
    setCurrentQuestion(0);
    setCurrentPair(null);
    setUsedStatements(new Set());
    setCategoryScores(
      Object.values(QuizCategory).reduce(
        (acc, category) => ({ ...acc, [category]: 0 }),
        {} as Record<QuizCategory, number>
      )
    );
  };

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <img src={logo} alt="Quiz Logo" className="logo" />
        <h1>Quiz de aptidão 5 ministérios</h1>
        <p>
          Este quiz apresentará {TOTAL_QUESTIONS} pares de afirmações. Para cada
          par, escolha a afirmação que mais se identifica com você.
        </p>
        <p>
          Não existe resposta certa ou errada - seja honesto em suas escolhas
          para obter um resultado mais preciso.
        </p>
        <p>O teste leva em média 5-10 minutos para ser completado.</p>
        <button
          onClick={() => setQuizStarted(true)}
          className="start-button"
          aria-label="Iniciar o quiz"
        >
          Iniciar Quiz
        </button>
      </div>
    );
  }

  if (showResults) {
    // Calculate scores once instead of in the render
    const sortedScores: CategoryScore[] = Object.entries(categoryScores)
      .map(([category, score]) => ({
        category: category as QuizCategory,
        score: (score / TOTAL_QUESTIONS) * 100,
        metadata: categoryMetadata.find((c) => c.id === category)!,
      }))
      .sort((a, b) => b.score - a.score);

    return (
      <div className="quiz-container">
        <img src={logo} alt="Quiz Logo" className="logo" />
        <h2>Resultados</h2>
        <div className="results">
          {sortedScores.map(({ category, score, metadata }) => (
            <div key={category} className="result-item">
              <h3>{metadata.name}</h3>
              <p>{score.toFixed(0)}% de aptidão</p>
              <small>{metadata.description}</small>
            </div>
          ))}
        </div>
        <button
          onClick={onHandleReset}
          className="reset-button"
          aria-label="Reiniciar o quiz"
        >
          Reiniciar
        </button>
      </div>
    );
  }

  if (!currentPair) {
    return null;
  }

  return (
    <div className="quiz-container">
      <img src={logo} alt="Quiz Logo" className="logo" />
      <h2>
        Comparação {currentQuestion + 1} de {TOTAL_QUESTIONS}
      </h2>
      <p>Com qual dessas afirmações você mais se identifica?</p>
      <div className="statement-container">
        <StatementButton
          statement={currentPair.statement1}
          onHandleChoice={onHandleChoice}
        />
        <StatementButton
          statement={currentPair.statement2}
          onHandleChoice={onHandleChoice}
        />
      </div>

      {process.env.NODE_ENV === "development" && (
        <div className="debug-info">
          {[currentPair.statement1, currentPair.statement2].map(
            (statement, index) => (
              <p key={statement.id}>
                Categoria {index + 1}:{" "}
                {
                  categoryMetadata.find((c) => c.id === statement.category)
                    ?.name
                }
              </p>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default App;
