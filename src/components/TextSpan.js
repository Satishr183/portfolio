import {motion, useAnimationControls} from "framer-motion"
import { useState } from "react"
const TextSpan = ({children})=>{

    const control=useAnimationControls()
    const [isPlay, SetIsPlay]=useState(false)
    const rubberBand = ()=>{
        control.start({
            transform:[
                "scale3d(1,1,1)",
                "scale3d(1.4,1,1)",
                "scale3d(1,.55,1)",
                "scale3d(.75,1.25,1)",
                "scale3d(1.25,.85,1)",
                "scale3d(.9,1.05,1)",
            ],
            transition:{
                times:[0, .4, .6, .7, .8, .9]
            }
        })
        SetIsPlay(true)
          
    }

   

    return (
        <motion.span animate={control}
        onMouseOver={()=>{
            if(!isPlay)
            rubberBand()
            }} onAnimationComplete={()=> SetIsPlay(false)}>
            {children}
        </motion.span>
    )
}

export default TextSpan