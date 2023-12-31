import React, { useState } from 'react'
import { QuestTxtStyle } from './QuestTxt.styled'

import VocabularyPh from '../../assets/img/vocabulary.png'
import { Vocabulary } from '../Vocabulary/Vocabulary'

export const QuestTxt = ({questTitle, questTask}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenVocabulary = () => {
        setIsOpen(!isOpen);
    }

  return (
    <QuestTxtStyle>
        <h2>
            {questTitle}
        </h2>
        <p>
            {questTask}
        </p>
        <button className="vocabulary" onClick={handleOpenVocabulary}>
            <img src={VocabularyPh} alt="book ph" />
            <p>
                Vocabulary
            </p>
        </button>

        {isOpen ? <Vocabulary onClose={() => setIsOpen(false)}/> : null }
    </QuestTxtStyle>
  )
}
