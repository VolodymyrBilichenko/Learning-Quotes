import React, { useEffect, useState } from 'react'
import { BookQuestStyle } from './BookQuest.styled'
import { QuestTxt } from '../QuestTxt/QuestTxt'
import { NavigationQuest } from '../NavigationQuest/NavigationQuest'
import { QuestionsQuest } from '../QuestionsQuest/QuestionsQuest'
import { QuestOptions } from '../QuestOptions/QuestOptions'
import { ListeningQuestion } from '../ListeningQuestion/ListeningQuestion'
import { QuestResult } from '../QuestResult/QuestResult'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import getCookie from '../../functions/getCookie'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addAnswer, setQuest } from '../../redux/toolkitSlice'
import { toast } from 'react-toastify'

export const BookQuest = ({QuestData}) => {
  const [currentQuestionIn, setCurrentQuestionIn] = useState(0);
  const [questResult, setQuestResult] = useState(false);
  const [ansQuestin, setAnsQuestion] = useState([]);
  const [endedQuest, setEndedQuest] = useState({});
  const [answerSelected, setAnswerSelected] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const QuestStore = useSelector((state) => state.toolkit.quest);
  const AnswerQuestStore = useSelector((state) => state.toolkit.answerQuest);

  const isLastQuestion = QuestStore?.questions && currentQuestionIn === QuestStore?.questions?.length - 1;
  const numQuest = currentQuestionIn + 1

  const questStoreAudio = QuestStore?.questions && QuestStore?.questions[currentQuestionIn]?.audio_file
  const questStoreItem = QuestStore?.questions && QuestStore?.questions[currentQuestionIn]

  const handleNextQuestion = () => {
    if (!answerSelected) return;

    const currentAnswers = {
      id: QuestStore?.questions[currentQuestionIn]?.id,
      answers_id: ansQuestin,
    };

    if (currentQuestionIn < QuestStore?.questions?.length - 1) {
      setCurrentQuestionIn((prevIndex) => prevIndex + 1);
    } else if (currentQuestionIn === QuestStore?.questions?.length - 1) {
      setQuestResult(true);
    }

    dispatch(addAnswer(currentAnswers));

    setAnswerSelected(false);
  };

  const handleEndQuest = () => {
    handleNextQuestion();
  };


  useEffect(() => {

    if (AnswerQuestStore?.length === QuestStore?.questions?.length) {      

      // if (levelId === 'dlpt') {
      //   axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
      //   axios.post(getApiLink(`/api/quest/dlpt_end?id=${QuestStore.id}`), AnswerQuestStore)
      //     .then(({ data }) => {
      //       setEndedQuest(data)
      //     })
      //     .catch((err) => {
      //       console.error(err);
      //       toast.error(err?.response?.data?.detail)
      //       navigate('/map');
      //     }) 
      // } else {
        axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
        axios.post(getApiLink(`/api/quest/end?id=${QuestStore.id}`), AnswerQuestStore)
          .then(({ data }) => {
            setEndedQuest(data)
          })
          .catch((err) => {
            console.error(err);
            toast.error(err?.response?.data?.detail)
            navigate('/map');
          }) 
      // }
    } else return;

  }, [AnswerQuestStore])

  useEffect(() => {
    if (QuestStore?.id) return;

    // if (levelId === 'dlpt') {
    //     axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
    //     axios.get(getApiLink("/api/quest/active_dlpt"))
    //         .then(({ data }) => {
    //             dispatch(setQuest(data));
    //             navigate(`/listening-quest/dlpt`)
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //             toast.error(err?.response?.data?.detail)
    //             navigate('/map');
    //         }) 
    // } else {
        axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
        axios.get(getApiLink("/api/quest/active_quest"))
            .then(({ data }) => {
                dispatch(setQuest(data));
                console.log(data);
                return navigate(`/listening-quest/:levelId`)
            })
            .catch((err) => {
                console.error(err);
                toast.error(err?.response?.data?.detail)
                navigate('/map');
            })
    // }
  }, []);


  return (
    <BookQuestStyle>
      <div className="book">
        <div className="book__lft">

          {questStoreAudio ? (
            <ListeningQuestion 
              questStoreItem={questStoreItem}
              questTitle={questStoreItem?.name}
            />
          ) : (

            <QuestTxt
              dataItem={QuestStore}
              questStoreItem={questStoreItem}
            />                    
          )}

        </div>

        <div className="book__rht">

          <QuestionsQuest
            dataItem={questStoreItem}
            questionTxt={`Question №${numQuest}`}
            
          />
          <QuestOptions 
            currentQuestion={questStoreItem} 
            dataItem={ QuestData?.questions && QuestData?.questions[currentQuestionIn]} 
            setAnsQuestion={setAnsQuestion}
            setAnswerSelected={setAnswerSelected}
          />

        </div>

      </div>
        <NavigationQuest
          nextPage={handleNextQuestion}
          isLastQuestion={isLastQuestion}
          handleEndQuest={handleEndQuest}
        />

      {questResult && <QuestResult endedQuest={endedQuest} onClose={() => setQuestResult(false)}/>}
      

    </BookQuestStyle>
  )
}
