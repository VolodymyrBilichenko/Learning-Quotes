import styled from "styled-components";

import BgdTaverna from '../../assets/img/taverna.jpg'
import BgdDesk1 from '../../assets/img/tavern-desc-1.png'
import BgdDesk2 from '../../assets/img/tavern-desc-2.png'
import BgdDesk3 from '../../assets/img/tavern-desc-3.png'
import BgdDesk4 from '../../assets/img/tavern-desc-4.png'

export const TavernStyle = styled.div`
    background: url(${BgdTaverna}) no-repeat;
    background-size: 100% 100%;
    padding: 57px 60px 200px;
    margin: 24px 0 52px;

    .back__btn{
        display: flex;
        align-items: center;
        margin-bottom: 96px;
        color: #FFF;
        font-size: 14px;
        font-weight: 700;
        line-height: 150%;
        transition: all .3s ease;
        &:hover{
            color: #F2CCB3;
        }


        img{
            width: 16px;
            height: 16px;
            margin-right: 6px;
        }
    }

    .desk{
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* Три стовпці в рядку */
        grid-template-rows: repeat(1, 1fr); /* Два рядки */
        gap: 30px;

        &__item{
            background: url(${BgdDesk1}) no-repeat;
            background-size: calc(100% + 70px);
            background-position: -35px -30px;
            width: 295px;
            height: 460px;
            padding: 20px 20px;
            margin: 0 auto;

            &:nth-child(2){
                background: url(${BgdDesk2});
                background-size: calc(100% + 70px);
                background-position: -35px -30px;
            }
            &:nth-child(3){
                background: url(${BgdDesk3});
                background-size: calc(100% + 70px);
                background-position: -20px -30px;
            }
            &:nth-child(4){
                background: url(${BgdDesk4});
                background-size: calc(100% + 70px);
                background-position: -25px -30px;
            }
        }

        h2{
            color: #FFF;
            font-size: 24px;
            font-weight: 700;
            line-height: 32px;
            text-align: center;
        }

    }

    .users{
        max-height: 310px;
        overflow-y: scroll;
        margin-top: 16px;

        &::-webkit-scrollbar{
            width: 5px;
        }
        &::-webkit-scrollbar-thumb{
            background: #783724;
            border-radius: 12px;
        }
        &::-webkit-scrollbar-track{
            background: #F2CCB3;
            border-radius: 12px;

        }

        &__item{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
            max-width: 224px;
            border-radius: 12px;
            background: #783724;
            box-shadow: 10px 10px 4px 0px #8C3716;
            padding: 12px 10px 15px;
            margin-bottom: 16px;
            margin-left: 10px;

            &:last-child{
                margin-bottom: 0;
            }
        }

        &__user{
            display: flex;
            align-items: center;
            gap: 6px;

            h3{
                color: #FFF;
                font-size: 16px;
                font-weight: 700;
                line-height: 150%;

            }

            &_ic{
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background-color: #8DAAC7;
                display: flex;
                justify-content: center;
                align-items: center;
                p{
                    color: #ECF0FF;
                    font-size: 13.5px;
                    font-weight: 700;
                    line-height: 130%;
                }
            }
        }

        &__percent{
            margin-left: auto;
            color: #FFF;
            font-size: 14px;
            font-weight: 700;
            line-height: 150%;

        }
    }

    .noData {
        margin-top: 30px;
    }

    @media screen and (max-width: 1390px){
        padding: 57px 20px 200px;

        .desk{
            gap: 10px;
        }
    }
    @media screen and (max-width: 1300px){
        padding: 57px 20px 50px;
        .desk{
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }

        .back__btn{
            margin-bottom: 30px;
        }
    }
    @media screen and (max-width: 700px){
        padding: 30px 20px;
        
        .desk{
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(4, 1fr);
        }
    }
`