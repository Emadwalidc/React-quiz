import quizComplete from '../assets/quiz-complete.png';
import questions from '../questions';

export default function Summary ({userAnswer}) {

    const skippedAnswers = userAnswer.filter((answer) => answer === null);
    const correctAnswers = userAnswer.filter((answer,index) => answer === questions[index].answers[0] )

    const skippedShare = Math.round(
        (skippedAnswers.length / userAnswer.length) * 100
    );
    const correctdShare = Math.round(
        (correctAnswers.length / userAnswer.length) * 100
    );

    const wrongShare = 100 - skippedShare - correctdShare;

    return(

        <div id="summary">
            <img src={quizComplete} alt="quiz complete" />
            <h2>Quiz is complete</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedShare}%</span>
                    <span className='text'>Skipped </span>
                </p>
                <p>
                    <span className='number'>{correctdShare}%</span>
                    <span className='text'>Answered correct </span>
                </p>
                <p>
                    <span className='number'>{wrongShare}%</span>
                    <span className='text'>Answered incorrectly </span>
                </p>
            </div>
            <ol>
                {userAnswer.map((answer , index) =>{
                    let cssClass = 'user-answer';
                    if(answer === null) {
                        cssClass+= ' skipped';
                    } else if(answer === questions[index].answers[0]) {
                        cssClass+= ' correct';
                    } else {
                        cssClass+= ' wrong';
                    }
                    return( 
                <li key={index}>
                    <h3>{index + 1}</h3>
                    <p className='question'>{questions[index].text}</p>
                    <p className={cssClass}>{answer ?? 'Skipped'}</p>
                </li>)      
                })}
          
            </ol>
        </div>
    );
}