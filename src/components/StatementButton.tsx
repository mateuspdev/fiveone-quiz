import React from "react";
import { QuizCategory } from "../types/quiz";
import { Statement } from "../types/quiz";

interface StatementButtonProps {
  statement: Statement;
  onHandleChoice: (category: QuizCategory) => void;
}

const StatementButton: React.FC<StatementButtonProps> = ({
  statement,
  onHandleChoice,
}) => {
  return (
    <button
      onClick={() => onHandleChoice(statement.category)}
      className="statement-button"
      aria-label={`Selecionar: ${statement.text}`}
    >
      {statement.text}
    </button>
  );
};

export default StatementButton;
