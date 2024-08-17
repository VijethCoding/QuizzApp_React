import styled from "styled-components";

const Questionbank = ({ question, option,handleAnswer,answer}) => {
  return (
    <QuestionConatiner>
      <h1>{question}</h1>
      <ul>
        {option.map((option, index) => (
          <StyledLi key={index} onClick={() =>handleAnswer(option)} isSelected={option===answer} >{option}</StyledLi>
        ))}
      </ul>
    </QuestionConatiner>
  );
};

export default Questionbank;

const QuestionConatiner = styled.div`
    h1{
        font-size: 35px;
        font-weight: 500;
        font-family:  "Roboto", sans-serif;
    }
    ul{
        list-style: none;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-weight: 500;
        margin-top: 25px;
    }

    
`
const StyledLi = styled.li`
  max-width: 430px;
  padding: 13px 30px;
  background-color: ${(props) => (props.isSelected ? '#FECC2B' : '#F7F7F7')};
  border-radius: 10px;
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
  cursor: pointer;
`;


