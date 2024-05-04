import React from 'react'
import { InputForm, Button } from '../../components'

const Login = () => {
  return (
    <div className='bg-white mw-[1000px] p-[100px] p-[150px] rounded-md shadow-sm '>
      <h3 className='font-semibold text-2xl mb-3'>Đăng nhập</h3>
      <div className='w-full flex flex-col'>
        <InputForm label={'SỐ ĐIỆN THOẠI: '}/>
        <InputForm label={'MẬT KHẨU: '}/>
        <Button 
      text='Đăng nhập'
      bgColor='bg-[#3961fb]'
      textColor='text-white'
      fullwidth 
      />
      </div>
      <div className='mt-7 flex items-center justify-between'>
        <small className='text-[blue] hover:text-[orange] cursor-pointer'>
          Quên mật khẩu?
        </small>
        <small className='text-[blue] hover:text-[orange] cusor-pointer'>
          Tạo tài khoản mới
        </small>
      </div>
      
    </div>
  )
}

export default Login