import { NotFound } from "../components/NotFound/NotFound"
import { ReadingQuest } from "../components/ReadingQuest/ReadingQuest"
import { Area } from "../pages/Area/Area"
import { ChooseLang } from "../pages/ChooseLang/ChooseLang"
import { Faq } from "../pages/Faq/Faq"
import { Login } from "../pages/Login/Login"
import { Main } from "../pages/Main/Main"
import { Map } from "../pages/Map/Map"
import { NewPassword } from "../pages/NewPassword/NewPassword"
import { QuizPage } from "../pages/QuizPage/QuizPage"
import { QuizStart } from "../pages/QuizStart/QuizStart"
import { RestoreCode } from "../pages/RestoreCode/RestoreCode"
import { RestorePassword } from "../pages/RestorePassword/RestorePassword"
import { SignUp } from "../pages/SignUp/SignUp"
import { SignUpVerify } from "../pages/SignUpVerify/SignUpVerify"
import { Tavern } from "../pages/Tavern/Tavern"

export const routes = () => {
    return [
        {
            path: '/Learning-Quotes',
            element: <Main/>
        },
        {
            path: '/',
            element: <Main/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/restore-password',
            element: <RestorePassword/>
        },
        {
            path: '/restore-password-code',
            element: <RestoreCode/>
        },
        {
            path: '/new-password',
            element: <NewPassword/>
        },
        {
            path: '/sign-up',
            element: <SignUp/>
        },
        {
            path: '/sign-up-verify',
            element: <SignUpVerify/>
        },
        {
            path: '/choose-lang',
            element: <ChooseLang/>
        },
        {
            path: '/map',
            element: <Map/>
        },
        {
            path: '/leader-board',
            element: <Tavern/>
        },
        {
            path: '/area',
            element: <Area/>
        },
        {
            path: '/faq',
            element: <Faq/>
        },
        {
            path: '/quiz-start',
            element: <QuizStart/>
        },
        {
            path: '/listening-quest',
            element: <QuizPage/>
        },
        {
            path: '/reading-quest',
            element: <ReadingQuest/>
        },
        {
            path: '*',
            element: <NotFound/>
        },
    ]
}