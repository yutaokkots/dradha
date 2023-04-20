import React, {useContext} from 'react'
import ProgressBar from 'react-customizable-progressbar'
import { TimeContext } from '../../../Pages/Dashboard/Dashboard'

export default function ProgressBarComp() {
  const {sessionTimer, setSessionTimer, timerStarted, setTimerStarted, seconds, minutes, hours, pause, restart, isRunning, inputValue, setInputValue} = useContext(TimeContext)
  return (
    <>
        <ProgressBar
            radius={55}
            transition={'1s ease'}
            counterClockwise={true}
            strokeColor={'#9e5224'}
            inverse={true}
            progress={sessionTimer.elapsedSeconds}
            steps={sessionTimer.totalSeconds}
            />
    </>
  )
}
