import { useState, useCallback } from "react";
import questions from '../questions'

import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {

    const [userAnswer , setUserAnswer] = useState([]);

    const currentQuestion = userAnswer.length;

    const quizIsComplete = currentQuestion === questions.length;

   const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevAnswer)=>{
            return [...prevAnswer,selectedAnswer]
        });

    },[])

    const handleSkipAnswer = useCallback(()=> {
        handleSelectAnswer(null);
    },[handleSelectAnswer])

    if (quizIsComplete) {
        return <Summary userAnswer={userAnswer}/>
    }

    return(<>
    <div id="quiz">  
        <Question key={currentQuestion} index={currentQuestion} onSelectAnswer={handleSelectAnswer} onSkipAnswer={handleSkipAnswer}/>
    </div>
    </>);
}