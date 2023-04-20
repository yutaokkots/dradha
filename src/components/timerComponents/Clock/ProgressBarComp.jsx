import React, {useContext} from 'react'
import ProgressBar from 'react-customizable-progressbar'
import { TimeContext } from '../../../Pages/Dashboard/Dashboard'

export default function ProgressBarComp() {
  const {second, totalSecond} = useContext(TimeContext)
  return (
    <>
        <ProgressBar
            radius={55}
            transition={'1s ease'}
            counterClockwise={true}
            inverse={true}
            progress={second}
            steps={totalSecond}
            />
    </>
  )
}
