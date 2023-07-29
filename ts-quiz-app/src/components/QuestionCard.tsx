import React from 'react';
import { QuestionCardProps } from '../types/Objects';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => (
    <Wrapper>
        <p className='number'>
            Question: {questionNr} / {totalQuestions}
        </p>
        {/*Learn more about [dangerouslySetInnerHTML]: https://blog.logrocket.com/using-dangerouslysetinnerhtml-in-a-react-application/*/}
        {/* TLDR: Avoid using unless you need formatted text in an HTML element. */}
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {
                answers.map((answer) => (
                    <ButtonWrapper key={answer} 
                                   correct={userAnswer?.correctAnswer === answer}
                                   userClicked={userAnswer?.answer === answer}>
                        <button disabled={userAnswer ? true : false}
                                value={answer}
                                onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))
            }
        </div>
    </Wrapper>
)

export default QuestionCard;