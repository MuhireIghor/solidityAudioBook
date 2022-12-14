import React,{useState,useRef} from 'react'
import { musicCard } from '../Data/Musics';
import {FaChevronCircleLeft,FaChevronCircleRight} from 'react-icons/fa';

const Musics = () => {
    const musicRef = useRef(null);
    const[isScroll,setIsScroll] = useState(false);
    const handleClick = (direction) => {
        setIsScroll(true)
        if (musicRef.current) {
          const { scrollLeft, clientWidth } = musicRef.current;
    
          const scrollTo =
            direction === 'left'
              ? scrollLeft - clientWidth
              : scrollLeft + clientWidth
          musicRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
      }

  return (
    <div className='flex flex-col gap-2 '>
        <p className='text-white font-semibold text-black'>Your Recent Books</p>
        <div className='flex relative'>
            <div className={`flex basis-1/12  z-10 ${!isScroll && 'hidden'} `}><FaChevronCircleLeft onClick={()=>handleClick('left')} className='bg-white w-4 h-4 rounded-full '/></div>
        <div className=' basis-10/12 flex gap-2 grid grid-cols-6 overflow-x-scroll' ref={musicRef}>
            {musicCard.map((card,index)=>{
                return(
                    <div key={index} className='flex flex-col items-center justify-center p-4 gap-2 bg-gradient-to-r from-black via-transparent rounded-[4px] to-[gray] '>
                        <div className='w-full items-center justify-center p-4 h-3/4'>
                        <img src={card.image} className='w-full h-full'/>
                        </div>
                        <div className='flex flex-col gap-2 h-1/4 '>
<p className='text-white font-bold h-1/2'>{card.albumName}</p>
<p className='text-white font-extralight text-sm h-1/2'>{card.artist}</p>
                        </div>
                    </div>
                )
            })}

        </div>
            <div className='flex basis-1/12 z-10 '><FaChevronCircleRight onClick={()=>handleClick('right')} className='bg-white w-4 h-4 rounded-full'/></div>

        </div>
    </div>
  )
}

export default Musics