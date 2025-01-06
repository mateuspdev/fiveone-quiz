import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import prayingIcon from "./assets/icons/praying.png";
import priestIcon from "./assets/icons/priest.png";
import pulpitIcon from "./assets/icons/pulpit.png";
import shepherdIcon from "./assets/icons/shepherd.png";
import bibleIcon from "./assets/icons/bible.png";
import { getRandomComparisonPair, categoryMetadata } from "./data/questions";
import { CategoryEnum, Statement } from "./types/quiz";
import StatementButton from "./components/StatementButton";

const categoryIcons: Record<CategoryEnum, string> = {
  [CategoryEnum.APOSTOLO]: prayingIcon,
  [CategoryEnum.PROFETA]: priestIcon,
  [CategoryEnum.EVANGELISTA]: pulpitIcon,
  [CategoryEnum.PASTOR]: shepherdIcon,
  [CategoryEnum.MESTRE]: bibleIcon,
};

const TOTAL_QUESTIONS = 50; // Number of comparisons to show

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [categoryScores, setCategoryScores] = useState<
    Record<CategoryEnum, number>
  >({
    [CategoryEnum.APOSTOLO]: 0,
    [CategoryEnum.PROFETA]: 0,
    [CategoryEnum.EVANGELISTA]: 0,
    [CategoryEnum.PASTOR]: 0,
    [CategoryEnum.MESTRE]: 0,
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

  const onHandleChoice = (chosenCategory: CategoryEnum) => {
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
      Object.values(CategoryEnum).reduce(
        (acc, category) => ({ ...acc, [category]: 0 }),
        {} as Record<CategoryEnum, number>
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
    const sortedScores = Object.entries(categoryScores)
      .map(([category, score]) => ({
        categoryEnum: category as CategoryEnum,
        score: (score / TOTAL_QUESTIONS) * 100,
        metadata: categoryMetadata.find((c) => c.id === category)!,
      }))
      .sort((a, b) => a.score - b.score); // Order is reversed to work with wrap-reverse

    const userName = "Confira seu resultado"; // You might want to make this dynamic

    return (
      <div className="quiz-container">
        <img src={logo} alt="Quiz Logo" className="logo" />
        <div className="results-header">
          <h2>Parabéns, seu resultado está pronto!</h2>
          <p>
            Leia com atenção as informações abaixo para tirar o máximo de
            proveito do seu teste. Nele você vai ver qual dos 5 dons você tem
            uma maior inclinação e como isso se aplica a sua vida.
          </p>
        </div>
        <div className="result-name">{userName}</div>
        <div className="results">
          {sortedScores.map(({ categoryEnum: category, score, metadata }) => (
            <div
              key={category}
              className={`result-item ${category.toLowerCase()}`}
            >
              <img
                src={categoryIcons[category]}
                alt={`${metadata.name} icon`}
                className="category-icon"
              />
              <div className="category-title">
                <h3>{metadata.name}</h3>
                <div
                  className="info-icon"
                  role="tooltip"
                  aria-label={metadata.description}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                    <path d="M7 6h2v6H7zm0-2h2v2H7z" />
                  </svg>
                  <span className="tooltip">{metadata.description}</span>
                </div>
              </div>
              <p>{score.toFixed(1)}%</p>
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
