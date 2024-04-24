import React from 'react'
import { ListeningQuestionStyle } from './ListeningQuestion.styled'
import { QuizAudio } from '../QuizAudio/QuizAudio'

import AudioImg from '../../assets/img/listening.png'

export const ListeningQuestion = ({ questTitle, questDesc, audioUrls, questStoreItem }) => {
  return (
    <ListeningQuestionStyle className='animate__animated animate__fadeInLeft'>
        <h2>
          {questTitle}
        </h2>
        <p>
          {questDesc}
        </p>

        <QuizAudio audioUrls={questStoreItem.audio_file}/>

        <img src={AudioImg} alt="listen ph" />

    </ListeningQuestionStyle>
  )
}
