import React from "react";
import QuestionHeader from "../components/QuestionComponents/QuestionHeader";
import QuestionBody from "../components/QuestionComponents/QuestionBody";

const QuestionsPage = () => {
  const [count, setCount] = React.useState("01");
  return (
    <div style={{ padding: "2%" }}>
      <QuestionHeader count={count} setCount={setCount} />
      <QuestionBody count={count} setCount={setCount} />
    </div>
  );
};

export default QuestionsPage;
