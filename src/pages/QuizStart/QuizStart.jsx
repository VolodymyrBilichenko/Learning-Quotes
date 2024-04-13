import React from 'react'
import { QuizStartStyle } from './QuizStart.styled'
import { BackBtn } from '../../components/BackBtn/BackBtn'
import { QuizTitle } from '../../components/QuizTitle/QuizTitle'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import getCookie from '../../functions/getCookie'

import Listening from '../../assets/img/listening.png'
import Book from '../../assets/img/book.png'
import { useDispatch } from 'react-redux'
import { setQuest } from '../../redux/toolkitSlice'
import { toast } from 'react-toastify'


//  be8bc086-dfa4-494e-a5ed-a5963f7c4700 token as@gmail

export const QuizStart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const handleGetQuiz = () => {
    //     axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie('token')}`;

    //     axios.get(getApiLink('/api/quest/active_quest'))
    //         .then(({data}) => {
    //             console.log(data);
    //             dispatch(setQuest(data))
    //         })
    // }

    const handleStartQuiz = (type) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie('token')}`;
        axios.post(getApiLink(`/api/quest/start?type=${type}&level=1%2B&language=russian`))
            .then(({data}) => {
                console.log(data);
                dispatch(setQuest(data));
                navigate('/reading-quest');
            })
            .catch((error) => {
                console.log(error);
                if (error?.response?.data?.detail === 'You already have active quest') return navigate('/reading-quest')
                error?.response?.data?.detail && toast.error(error?.response?.data?.detail) 

            })            
    }

  return (
    <div className='container-login'>
        <QuizStartStyle>

            <BackBtn link={'/map'}/>

            <QuizTitle quizName={'DLPT 2 +'} quizTxt={'Choose type of tasks'} />

            <div className="select">
                {/* to={'/listening-quest'} */}
                <button className='animate__animated animate__fadeInLeft'>
                    <img src={Listening} alt="Listening ph" />
                    Listening <br />Comprehension
                </button>
                <button onClick={e => handleStartQuiz('reading')} className='animate__animated animate__fadeInRight'>
                    <img src={Book} alt="Book ph" />
                    Reading <br />Comprehension
                </button>
            </div>

            {/* <button className='animate__animated animate__fadeInUp'>Choose</button> */}

        </QuizStartStyle>
    </div>
  )
}
