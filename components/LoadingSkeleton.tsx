import Image from 'next/image';
import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className='flex justify-center items-center mt-4 w-full'>
        <div className="bg-gray-300 animate-pulse rounded-lg p-40  w-[150px]">
        </div>
    </div>
  )
}

export default LoadingSkeleton;