import React, {memo} from 'react'

const Button = ({text, textColor, bgColor, IcAfter, onClick, fullWidth}) => {
   // console.log('re-render');
  return (
    <button
    type='button'
    className={`p-2 ${textColor} ${bgColor} ${fullWidth && 'w-full'} outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
    onClick={onClick}
    >
        <span> {text} </span>
        
    </button>
  )
}

export default memo(Button)