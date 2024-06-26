import styled from "styled-components";

import BgdDesk1 from '../../../../assets/img/graphic1.png'
import BgdDesk2 from '../../../../assets/img/graphic2.png'
import BgdDesk3 from '../../../../assets/img/graphic3.png'
import BgdDesk4 from '../../../../assets/img/graphic4.png'
import BgdDesk5 from '../../../../assets/img/graphic5.png'
import BgdDesk6 from '../../../../assets/img/graphic6.png'

export const AreaGraphicStyle = styled.div`

    .graphic{
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Три стовпці в рядку */
        grid-template-rows: repeat(2, 1fr); /* Два рядки */
        gap: 35px;
        justify-content: center;
        align-items: center;

        &__item{
            background: url(${BgdDesk1}) no-repeat;
            background-size: calc(100% + 70px);
            background-position: -35px;
            padding: 30px 25px;
            width: 340px;
            margin: 0 auto;

            &:nth-child(2){
                background: url(${BgdDesk2}) no-repeat;
                background-size: calc(100% + 45px);
                background-position: -30px -36px;
            }
            &:nth-child(3){
                background: url(${BgdDesk3}) no-repeat;
                background-size: calc(100% + 35px);
                background-position: -25px -25px;
            }
            &:nth-child(4){
                background: url(${BgdDesk4}) no-repeat;
                background-size: calc(100% + 45px);
                background-position: -30px;
            }
            &:nth-child(5){
                background: url(${BgdDesk5}) no-repeat;
                background-size: calc(100% + 35px);
                background-position: -20px;
                /* .column__red{
                    display: none;
                }
                .column__green{
                    background: #FFDFD6;
                } */
            }
            &:nth-child(6){
                background: url(${BgdDesk6}) no-repeat;
                background-size: calc(100% + 40px);
                background-position: -20px -35px;

                .column{
                    height: 110px;
                }
            }
        }

        h2{
            color: #FFF;
            font-size: 20px;
            font-weight: 700;
            line-height: normal;
        }

        &__con{
            margin-top: 15px;
            display: flex;
            gap: 10px;
            
            &_center{
                overflow: hidden;
                justify-content: center;
                margin-bottom: 10px;
            }
        }

        &__num{
            margin-bottom: -5px;

            li{
                margin-bottom: 15px;

                &:last-child{
                    margin-bottom: 0;
                }
            }

            p{
                color: #FFF;
                font-size: 10px;
                font-weight: 700;
                line-height: 12.589px;
            }
        }

        &__stats{
            display: flex;
            gap: 10px;

            p{
                color: #FFF;
                font-size: 9px;
                font-weight: 700;
                line-height: 1.574px;
                letter-spacing: 0.193px; 
                margin-top: 10px;
            }

            li{

              &:nth-child(1){
                .column__green{
                    max-height: 50%;
                }
                .column__red{
                    max-height: 50%;
                }
              }  
              &:nth-child(2){
                .column__green{
                    max-height: 30%;
                }
                .column__red{
                    max-height: 30%;
                }
              }  
              &:nth-child(3){
                .column__green{
                    max-height: 45%;
                }
                .column__red{
                    max-height: 45%;
                }
              }  
              &:nth-child(4){
                .column__green{
                    max-height: 45%;
                }
                .column__red{
                    max-height: 55%;
                }
              }  
              &:nth-child(5){
                .column__green{
                    max-height: 25%;
                }
                .column__red{
                    max-height: 75%;
                }
              }  
            }
        }
    }

    .column{
        height: 100%;
        width: 25px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;

        &__green{
            border-radius: 4px;
            background: #CEFFA7;
            margin-bottom: 2px;
            height: 100%;
            margin-top: auto;
            max-height: 0%;
        }

        &__red{
            border-radius: 4px;
            background: #FCA08B;
            height: 100%;
            max-height: 0%;
        }
    }

    .widget{

        span{
            color: #FFF;
            font-size: 30px;
            font-weight: 700;
            line-height: 16.721px;
            margin-bottom: 13px;
        }
    }

    #progress,
    #progress::before,
    #progress::after {
        background-color: transparent;
        box-sizing: border-box; 
        width: 8em;
        height: 4em;
    }

    #progress {
        display: flex;
        align-items: end;
        justify-content: center;  
        font-size: 1.5rem;
        position: relative; 
        
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        border: 1.25em solid #B49696;
        border-bottom: 0;
    }

    #progress::before{
        display: block;
        content: '';
        position:absolute;
        top: -1.25em;
        left: -1.25em;
    }

    #progress::before {  
        height: 8em;
        background-color: transparent;
        border-radius: 100px; 
        /* border: 1.25em solid #CEFFA7; */
        /* border-bottom-color: transparent; */
        border-right-color: transparent;
        /* width: 145%; */
        
        transform: rotate(-5deg);
    }

    #progress::after {
        top: initial;
        bottom: -4em;  
        width: 8em;
        z-index: 2;
    }

    @media screen and (max-width: 1200px) {        
        .graphic{
            gap: 20px 0;
            grid-template-columns: repeat(2, 1fr); /* Три стовпці в рядку */
            grid-template-rows: repeat(3, 1fr); /* Два рядки */
        }
    }

    @media screen and (max-width: 768px) {
        .graphic{
            grid-template-columns: 1fr;
            gap: 40px;
        }
    }



    .semicircle {
        position: relative;
        margin: 0 auto;
        margin-top: 10px;
        width: 230px;
        height: 115px;
        border-top-left-radius: 120px;
        border-top-right-radius: 120px;
        border-bottom: 0;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .semicircle .graph{
        /* content: ""; */
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 200%;
        border-radius: 50%;
        background-image: conic-gradient(#9c27b0, #3f51b5 calc(50% / 2), #ddd 0);
        transition: transform .5s ease-in-out;
        z-index: 1;
        transform: rotate(270deg);
    }

    .semicircle:after {
        content: "";
        position: absolute;
        display: block;
        /* background: #fff; */
        background: url(${BgdDesk6}) no-repeat;
        background-size: 208% 185%;
        background-position: -97px -166px;
        z-index: 2;
        width: calc(100% - 50px);
        height: calc(200% - 50px);
        border-radius: 50%;
        top: 23px;
        left: 25px;
    }

    .semicircle  span{
        color: #FFF;
        font-size: 44px;
        font-weight: 700;
        line-height: 16.721px;
        margin-top: 50px;
        z-index: 3;
    }
`