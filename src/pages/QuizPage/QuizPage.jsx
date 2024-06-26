import React, { useState } from 'react'

import { ListeningQuest } from '../../components/ListeningQuest/ListeningQuest'
import { BookQuest } from '../../components/BookQuest/BookQuest'
import { useSelector } from 'react-redux';

export const QuizPage = () => {
  const [showComponent, setShowComponent] = useState(true);

  const QuestData = useSelector((state) => state.toolkit.quest);

  const handleNextQuest = () => {
    setShowComponent(!showComponent)
  }

  return (
    <div className='container-login'>

      {QuestData?.audio_file && showComponent ? <ListeningQuest onClickNext={handleNextQuest} QuestData={QuestData}/> : <BookQuest QuestData={QuestData}/>}
        
    </div>
  )
}
