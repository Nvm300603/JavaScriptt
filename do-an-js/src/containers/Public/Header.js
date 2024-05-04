import React, {useCallback} from 'react'
import logo from '../../assets/logo1.png'
import { Button } from '../../components'
import icons from '../../ultils/icons'
import { useNavigate } from 'react-router-dom'
import { path } from '../../ultils/constant'
import Navigation from './Navigation'

const {AiOutlinePlusCircle} =icons

const Header = () => {
  const navigate= useNavigate()
  const goLogin = useCallback(()=>{
    navigate(path.LOGIN)

  },[])
  
  return (
    <div className='w-full flex items-center justify-between bg-green-400'> 
    <img src={logo}
      alt="logo"
      className='w-[150px] h-[70px] object-contain' 
      />
      <div className='flex items-center gap-1'>
        <small>Phongtrogiare.com xin chào !</small>
        <Button 
        text={'Đăng ký'} 
        textColor="text-white" 
        bgColor="bg-[#3961fb]" 
        onClick={goLogin}/>
        <Button 
        text={'Đăng nhập'} 
        textColor="text-white" 
        bgColor="bg-[#3961fb]" 
        onClick={goLogin}/>
        <Button 
        text={'Đăng tin mới'} 
        textColor="text-white" 
        bgColor='bg-red-600'/>
    </div>
    </div>
  )
}

export default Header