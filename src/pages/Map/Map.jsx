import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'animate.css';

import { MapStyle } from './Map.styled'
import setCookie from '../../functions/setCookie'
import getCookie from '../../functions/getCookie'

import BigMap from '../../assets/img/Map.png'
import ArrowDesc from '../../assets/img/icons/arrow-descrip.svg'
import LeaderBoards from '../../assets/img/leaderBoards.png'
import TrainingSwamp from '../../assets/img/trainingSwamp.png'
import FirstLvl from '../../assets/img/firstLvl.png'
import SecondLvl from '../../assets/img/secondLvl.png'
import SecondLvlPlus from '../../assets/img/secondLvlPlus.png'
import ShipLvl from '../../assets/img/shipLvl.png'
import DlptLvl from '../../assets/img/dlptLvl.png'
import ThirdLvl from '../../assets/img/third-lvl.png'
import Cast from '../../assets/img/csastle.png'

const tutorialCookie = 'tutorialCompleted'

export const Map = () => {
    const [popUpId, setPopUpId] = useState(0);
    const [popUp, setPopUp] = useState(false);

    const mapTxt = [
        {
            title: 'Meadow',
            desc: "Begin your journey in the Meadow, where you'll tackle foundational language challenges suitable for beginners. Perfect for getting a taste of what's to come",
            style:{
                bottom: '40px',
                left: '50%',
                transform: 'translate(-50%)'
            },
            arrowStyle:{
                top: '60px',
                right: '-55px'
            }
        },
        {
            title: 'Village',
            desc: "Advance to the Village to enhance your language skills. Here, the tasks get tougher, testing your growing knowledge and preparing you for intermediate challenges.",
            style:{
                bottom: '50px',
                left: '76px'
            },
            arrowStyle:{
                top: '-10px',
                right: '-55px'
            }
        },
        {
            title: 'Gilded Tower',
            desc: "Ascend the Gilded Tower, where intricate language puzzles await. These tasks are designed for those who have mastered the basics and are ready to delve into more complex language constructs.",
            style:{
                top: 'calc(50% + 100px)',
                left: '50%',
                transform: 'translate(-50%, -50%)'          
            },
            arrowStyle:{
                top: '-35px',
                right: '-45px'
            }
        },
        {
            title: 'Library',
            desc: "Wander through the Library, the realm of expert linguists. Here, the language tasks are extremely challenging, requiring top-tier proficiency and sharp wits.",
            style:{
                top: '50%',
                left: '227px',
                transform: 'translate(-50%)'
            },
            arrowStyle:{
                top: '-55px',
                right: '0px',
                transform: 'rotateZ(315deg)'
            }
        },
        {
            title: 'Tavern (Leaderboards)',
            desc: "Visit the Tavern to see how you stack up against other adventurers. Check out the leaderboards to find your rank and compete with friends.",
            style:{
                top: '510px',
                right: '300px',
            },
            arrowStyle:{
                top: '-50px',
                right: '-40px',
                transform: 'rotateZ(325deg)'
            }
        },
        {
            title: 'Castle (DLPT):',
            desc: "Challenge yourself with a full DLPT simulation at the Castle. Take comprehensive tests to evaluate your readiness and see if you can achieve a knightly score",
            style:{
                top: 'calc(50% + 73px)',
                left: 'calc(50% - 100px)',
                transform: 'translate(-50%, -50%)'
            },
            arrowStyle:{
                top: '-60px',
                right: '20px',
                transform: 'rotateZ(270deg)'
            }
        },
        {
            title: 'Training Swamp',
            desc: "Dive into extra practice sessions in the Training Swamp. Here you can focus on specific skills and vocabulary to strengthen your command of the language.",
            style:{
                bottom: '72px',
                right: '285px'
            },
            arrowStyle:{
                top: '-45px',
                right: '-40px',
                transform: 'rotateZ(-20deg)'
            }
        },
        {
            title: 'Castle (The Citadel of Mastery):',
            desc: "The Voyager's Skiff awaits the brave linguists seeking to navigate the vast seas of language. Future updates will unlock this journey, expanding horizons beyond the current shores of knowledge",
            style:{
                bottom: '111px',
                left: '73px'
            },
            arrowStyle:{
                top: '-50px',
                right: '80px',
                transform: 'rotateZ(220deg)'
            }
        },
        {
            title: "Boat (The Voyager's Skiff):",
            desc: "The Citadel of Mastery stands tall for those who have conquered the linguistic landscape. It will be the future bastion for the most challenging tests and the crowning achievements of language mastery.",
            style:{
                bottom: '141px',
                left: '73px'
            },
            arrowStyle:{
                top: '-50px',
                right: '80px',
                transform: 'rotateZ(220deg)'
            }
        },
    ]

    const nextDescription = () => {
        setPopUp(false);

        const timeout = setTimeout(() => {
            setPopUpId((prevIndex) => prevIndex + 1)
            setPopUp(true);
        }, 300)
        return () => clearTimeout(timeout);
    }

    const endDescription = (() => {
        setPopUp(false)
        setCookie(tutorialCookie, 'true')
    })

    useEffect(() => {
        const completedTutorial = getCookie(tutorialCookie) === 'true';

        const timeout = setTimeout(() => {
            if (!completedTutorial) {
                setPopUp(true);
            }
        }, 1500)

        return () => clearTimeout(timeout);
    }, [])

  return (
    <div className='container-main-pages'>
        <MapStyle>
            <div className="map__main">
                <div className="map__container">
                    <img className='big__map' src={BigMap} alt="main big map"/>
                    <h2>
                        Map
                    </h2>

                    <NavLink to={'/leader-board'} className='leader__board animate__animated animate__fadeIn animate__delay-1s'>
                        <img src={LeaderBoards} alt="LeaderBoards ph" />
                    </NavLink>
                    <NavLink to={'/quiz-start'} className='training__swamp animate__animated animate__fadeIn animate__delay-1s'>
                        <img src={TrainingSwamp} alt="trainingSwamp ph" />
                    </NavLink>
                    <NavLink to={'/quiz-start'} className='first__lvl animate__animated animate__fadeIn animate__delay-1s'>
                        <img src={FirstLvl} alt="firstLvl ph" />
                    </NavLink>
                    <NavLink to={'/quiz-start'} className='second__lvl animate__animated animate__fadeIn animate__delay-1s'>
                        <img src={SecondLvl} alt="secondLvl ph" />
                    </NavLink>
                    <NavLink to={'/quiz-start'} className='second__lvl__plus animate__animated animate__fadeIn animate__delay-1s'>
                        <img src={SecondLvlPlus} alt="secondLvlPlus ph" />
                    </NavLink>
                    <NavLink to={'/quiz-start'} className='ship__lvl animate__animated animate__fadeIn animate__delay-1s'>
                        <img src={ShipLvl} alt="shipLvl ph" />
                    </NavLink>
                    <NavLink to={'/quiz-start'} className='dlpt__lvl animate__animated animate__fadeIn animate__delay-1s'>
                        <img src={DlptLvl} alt="dlpt ph" />
                    </NavLink>
                    <NavLink to={'/quiz-start'} className='third__lvl animate__animated animate__fadeIn animate__delay-1s'>
                        <img src={ThirdLvl} alt="dlpt ph" />
                    </NavLink>
                    <NavLink to={'/quiz-start'} className='cast__lvl animate__animated animate__fadeIn animate__delay-1s'>
                        <img src={Cast} alt="dlpt ph" />
                    </NavLink>

                    {popUp && (
                        <div className="description" style={mapTxt[popUpId].style}>
                            <img src={ArrowDesc} alt="arrow desc" style={mapTxt[popUpId].arrowStyle}/>
                            <h3>
                                {mapTxt[popUpId].title}
                            </h3>
                            <p>
                                {mapTxt[popUpId].desc}
                            </p>

                            {popUpId < mapTxt.length - 1 ? (
                                <button onClick={nextDescription}>Next</button>
                            ) : (
                                <button onClick={endDescription}>Lets Start</button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </MapStyle>
    </div>
  )
}
