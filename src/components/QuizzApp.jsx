import styled from "styled-components";
import { useState } from "react";
import Questionbank from "./Questionbank";

const QuizzApp = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is React? ",
      option: [
        "Testing Tool",
        "JavaScript Library",
        "JavaScript Framework",
        "Programming Language",
      ],
      answer: "JavScript Library",
    },
    {
      question: "React's main purpose?",
      option: ["Handle DBs", "Build UIs", "Style pages", "Server logic"],
      answer: "Build UIs",
    },
    {
      question: "How to pass data?",
      option: ["State", "Props", "Refs", "Context"],
      answer: "Props",
    },
    {
      question: "useState hook use?",
      option: ["Manage state", "Fetch data", "Update DOM", "Pass props"],
      answer: "Manage state",
    },
    {
      question: "Update state method?",
      option: ["setState()", "updateState()", "changeState()", "modifyState()"],
      answer: "setState()",
    },
    {
      question: "JSX stands for?",
      option: [
        "JavaScript XML",
        "JS Extension",
        "Java Syntax Ext",
        "JS Express",
      ],
      answer: "JavaScript XML",
    },
    {
      question: "React components are?",
      option: ["Class-based only", "Stateless", "Func or class", "Need Redux"],
      answer: "Func or class",
    },
    {
      question: "useEffect handles?",
      option: [
        "Side effects",
        "Create components",
        "Manage state",
        "Update DOM",
      ],
      answer: "Side effects",
    },
    {
      question: "Create a React app?",
      option: [
        "create-react-app",
        "react-new-app",
        "npx create-react-app",
        "npm react-app",
      ],
      answer: "npx create-react-app",
    },
    {
      question: "React fragment use?",
      option: [
        "Group without extra DOM",
        "Reusable UI",
        "Manage state",
        "Routing",
      ],
      answer: "Group without extra DOM",
    },
    {
      question: "Share logic with?",
      option: ["Hooks", "State", "Refs", "Components"],
      answer: "Hooks",
    },
  ];

  const handleAnswer = (option) => {
    setAnswer(option);
    if (option === questions[questionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setAnswer(null);
  };

  const restartBtn = () =>{
    setQuestionIndex(0)
  }

  return (
    <MainDiv>
      <div className="logo">
        <img src="./logo2.svg" alt="logo" />
      </div>
      {questionIndex < questions.length ? (
        <div className="heroSection">
          <img className="heroImage" src="./hero.svg" alt="" />
          <div className="questionAnswer">
            <Questionbank
              question={questions[questionIndex].question}
              option={questions[questionIndex].option}
              handleAnswer={handleAnswer}
              answer={answer}
            />
            <Button disabled={answer === null} onClick={handleQuestion}>
              Next Question
            </Button>
          </div>
        </div>
      ) : (
        <ScoreDiv>
          <div className="Score">
            <p>Your Score</p>
            <h1>{score}</h1>
          </div>
          <div className="btnDiv"><button onClick={restartBtn}>Restart</button></div>
          
        </ScoreDiv>
      )}
    </MainDiv>
  );
};

export default QuizzApp;

const MainDiv = styled.div`
  padding: 20px 70px;
  display: flex;
  flex-direction: column;

  .heroSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
  }
  .heroImage {
    height: 600px;
    width: 540px;
  }
  .questionAnswer {
    width: 600px;
    height: 600px;
    padding: 70px;
    box-shadow: 14px 14px 45px #ffde725e;
  }
`;

const Button = styled.button`
  all: unset;
  margin-top: 55px;
  background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#fcc822")};
  padding: 7px 15px;
  color: ${(props) => (props.disabled ? "#BDBDBD" : "#FFFFFF")};
  font-size: 14px;
  font-weight: 500;
  box-shadow: ${(props) =>
    props.disabled ? "none" : "0px 10px 22px -7px #ffdd72"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const ScoreDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  .Score {
    width: 700px;
    height: 565px;
    background: url("./bg.png");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    gap: 40px;
    p {
      font-size: 35px;
      font-weight: 600;
      line-height: 0px;
    }
    h1 {
      font-size: 225px;
      font-weight: 600;
      line-height: 225px;
    }
  }
  
  .btnDiv{
    position: absolute;
    bottom: 100px;
    right: 100px;
  }
  .btnDiv button {
    all: unset;
    margin-top: 55px;
    background-color: #fcc822;
    padding: 12px 40px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0px 10px 22px -7px #ffdd72;
    cursor: pointer;
  }
`;
