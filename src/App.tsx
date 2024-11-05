import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import { getAllQuestions, categoryMetadata } from "./data/questions";
import { QuizCategory } from "./types/quiz";

function App() {
  const questions = getAllQuestions();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // Preload image when component mounts
  useEffect(() => {
    const img = new Image();
    img.src = logo;
  }, []);

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateCategoryScore = (category: QuizCategory): number => {
    const categoryQuestions = questions
      .map((q, index) => ({
        ...q,
        answer: answers[index],
      }))
      .filter((q) => q.category === category);

    const yesAnswers = categoryQuestions.filter((q) => q.answer).length;
    return (yesAnswers / categoryQuestions.length) * 100;
  };

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <img src={logo} alt="Quiz Logo" className="logo" />
        <h1>Quiz de aptidão 5 ministérios</h1>
        <p>Este quiz possui 100 perguntas dispostas em 5 categorias.</p>
        <p>
          Responda cada pergunta com Sim ou Não para descobrir sua aptidão em
          cada ministério.
        </p>
        <button onClick={() => setQuizStarted(true)} className="start-button">
          Iniciar
        </button>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="quiz-container">
        <img src={logo} alt="Quiz Logo" className="logo" />
        <h2>Resultados</h2>
        <div className="results">
          {categoryMetadata.map((category) => (
            <div key={category.id} className="result-item">
              <h3>{category.name}</h3>
              <p>
                {calculateCategoryScore(category.id).toFixed(0)}% de aptidão
              </p>
              <small>{category.description}</small>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setQuizStarted(false);
            setShowResults(false);
            setCurrentQuestion(0);
            setAnswers([]);
          }}
        >
          Reiniciar
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <img src={logo} alt="Quiz Logo" className="logo" />
      <h2>
        Pergunta {currentQuestion + 1} de {questions.length}
      </h2>
      <p>{questions[currentQuestion].question}</p>
      <div className="button-container">
        <button onClick={() => handleAnswer(true)}>Sim</button>
        <button onClick={() => handleAnswer(false)}>Não</button>
      </div>

      {process.env.NODE_ENV === "development" && (
        <p className="category">
          Categoria:{" "}
          {
            categoryMetadata.find(
              (c) => c.id === questions[currentQuestion].category
            )?.name
          }
        </p>
      )}
    </div>
  );
}

export default App;
