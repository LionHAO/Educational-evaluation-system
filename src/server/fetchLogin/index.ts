import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import cache from '@/util/cache'
import { client } from '..'


export const useLogin = (username: string, password: string) => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    return useMutation(
        () => {
            return client.post({
                url: '/sys-user/login',
                data: { username, password }
            })
        }, {
        onSuccess: (data) => {
            console.log(data)
            message.success('登录成功')
            queryClient.setQueryData(['token'], data.token)
            cache.setCache('token', data)
            // navigate('/home/class/teach')
        }
    }
    )
}