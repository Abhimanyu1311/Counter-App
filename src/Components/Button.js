import React from 'react'

const Button = ({
  funCtion,buttonName
})=>{
  return(
    <button className={`w-20 flex border-4  bg-red-300 text-white rounded-full justify-center cursor-pointer 
                      items-center mx-1 mt-3  text-2xl`} onClick={funCtion}>
      {buttonName}
    </button>
  );
}



export default Button;