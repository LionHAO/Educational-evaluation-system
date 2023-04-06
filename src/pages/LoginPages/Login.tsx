import AnimateText from "../../common/components/animateText"
import './LoginStyle.css'
import '@/common/components/commonWrapper.css'
import { BaseLoading } from "@/common/components/BaseLoading/BaseLoading";
import { Button } from "antd";
import { MouseEventHandler, useState } from "react";
import { log } from "console";
import { useMutation } from "@tanstack/react-query";
import { useLogin } from "@/server/fetchLogin";
import axios from "axios";


export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { mutate: loginMutate } = useLogin(username, password);


    const handleClick = async () => {
        loginMutate()

        // axios({
        //     url: '/api/sys-user/login',
        //     method: 'post',
        //     data: {
        //         username: 'test',
        //         password: '123456'
        //     },
        // }).then((res) => console.log("res", res))
        //     .catch(err => console.log("err", err));
    }

    return (
        <>
            <div className='LoginWrapper'>
                <div className="LoginForm">
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>WelCome  :)</p>
                    <AnimateText texts={['This is a Teaching evaluation system demo']} />
                    <input placeholder="username" className="input" name="username" type="text" onChange={e => setUsername(e.target.value)}></input>
                    <input placeholder="PassWord" className="input" name="PassWord" type="password" onChange={e => setPassword(e.target.value)}></input>
                    <Button type="primary" onClick={handleClick}>LOGIN IN</Button>
                </div>
            </div>
        </>
    )
}



export default Login