import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { QuestResultStyle } from './QuestResult.styled'
import { useDispatch, useSelector } from 'react-redux'
import { setAnswer } from '../../redux/toolkitSlice'

import CorrectIc from '../../assets/img/icons/correct.svg'
import InCorrectIc from '../../assets/img/icons/incorrect.svg'
import CloseIc from '../../assets/img/icons/close.svg'
import { toast } from 'react-toastify'

export const QuestResult = ({ endedQuest }) => {

    const dataEndQuest = endedQuest.questions;
    const dataQuest = useSelector(state => state.toolkit.answerQuest);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(dataEndQuest);

    const closeResult = () => {
        navigate('/map');
        dispatch(setAnswer([]));
        toast.success('You have successfully completed the quest');
    }

  return (
    <QuestResultStyle>
        <div className='results_bgd' onClick={closeResult}></div>
        <div className="results">
            <NavLink to={'/map'} className='close__btn' onClick={closeResult}>
                <img src={CloseIc} alt='close ic' />
            </NavLink>
            <h2>
                Results
            </h2>
            <ul className='question'>
                    {dataEndQuest?.map(item => (
                        <li key={item.id}>
                            <h3>{item.question}</h3>
                            <div className="question__inner">

                                {item?.options
                                    ?.filter(answerOption => {
                                        const currQuestion = dataQuest?.filter(ansOptionStore => ansOptionStore?.id === item?.id)[0];
                                        return currQuestion?.answers_id?.some(selectedOption => selectedOption === answerOption?.id);                           
                                    })
                                    ?.map(question => (
                                        <div className="question__answer">
                                            <p>
                                                {question.value}
                                            </p>
                                            {question.is_correct === true ? <img src={CorrectIc} alt="correct ic" /> : <img src={InCorrectIc} alt="incorrect ic" />}
                                            
                                        </div>                                      
                                    ))
                                }
                                {item?.explanation && 
                                    <div className="question__desc">
                                        <span>
                                            Explanation:
                                        </span>
                                        <p>{item?.explanation}</p>
                                    </div>
                                }
                                {item?.text_of_audio && 
                                    <div className="question__desc">
                                        <span>
                                            Description:
                                        </span>
                                        <p>{item?.text_of_audio}</p>
                                    </div>
                                }
                            </div>
                        </li>
                    ))}
            </ul>

            <button onClick={closeResult} className='ok__btn'>OK</button>
        </div>
    </QuestResultStyle>
  )
}
