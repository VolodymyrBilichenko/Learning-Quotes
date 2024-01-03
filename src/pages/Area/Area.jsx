import React from 'react'
import { AreaStyle } from './Area.styled'
import { AreaPrize } from './components/AreaPrize/AreaPrize'
import { AreaStats } from './components/AreaStats/AreaStats'

export const Area = () => {
  return (
    <div className='container-login'>
        <AreaStyle>
            <div className="area__top">
                <AreaPrize/>

                {/* component from person icon */}
                
                <AreaStats/>
            </div>

            
        </AreaStyle>
    </div>
  )
}
