import React from 'react'
import icon from '../assets/Pie Chart.png';
import { libraryStats } from '../Data/libraryStats';
const UserView = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col '>
                <div className='names w-full flex items-end'>
                    <div className='flex '>
                        <div className='w-4 h-4 rounded-full flex items-center justify-center'></div>
                        <p>Ighor</p>
                    </div>
                </div>
                <div className='viewaas flex grid grid-cols-4 gap-2'>
                    <div className='flex items-start justify-center'>Hi Angel!</div>
                    <div className='flex items-start justify-center'>
                        <img src={icon} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p>Reading Stats</p>
                        <div className='flex flex-col'>
                            <p className='w-full text-[#7268D6]'>7hr 32 m</p>
                            <div className='flex items-end '>
                                <p className='text-xs text-[#7268D6]'>Read Time</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        {libraryStats.map((lib, index) => {
                            return (
                                <div key={index} className='flex gap-4'>
                                    <div className={`w-4 h-4 rounded-full text-[${lib.color}]`}></div>
                                    <p>{lib.textDesc}</p>

                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default UserView