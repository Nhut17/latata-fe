import React from 'react'
import { useForm } from "react-hook-form";
const ChangePassword = () => {
    const { register, handleSubmit} = useForm();
    return (
        <>
            <span>Mật khẩu hiện tại</span>
            <input type="password" {...register("password")} />

            <span>Mật khẩu mới</span>
            <input type="password" {...register("new-password")} />

            <span>Xác nhận mật khẩu</span>
            <input type="password" {...register("comfirm-password")} />
        </>
    )
}

export default ChangePassword