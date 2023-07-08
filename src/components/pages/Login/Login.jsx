import { Button, Divider, Form, Input, message, notification } from "antd"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { callLogin } from "../../../services/api";
import { doLoginAction } from "../../../redux/account/accountSlice";

const Login = () => {

    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);

    const dispatch = useDispatch();

    const onFinish = async (values) => {
        const { username, password } = values;

        setIsSubmit(true);
        const res = await callLogin(username, password);
        setIsSubmit(false);

        if(res && res.data){
            localStorage.getItem('access_token', res.data.access_token);
            dispatch(doLoginAction(res.data.user));
            message.success('Đăng nhập thành công !');
            navigate('/');
        } else{
            notification.error({
                message: 'Có lỗi xảy ra',
                description: res.message && Array.isArray(res.message) ? res.message[0] : res.message,
                duration: 5
            });
        }
    }

    return (
        <div className="login-component">
            <div className='login-content'>
                <h1 style={{textAlign: 'center'}}>Đăng Nhập</h1>
                <Divider />
                <Form
                    name="basic"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                    labelCol={{ span: 24 }}
                    label="Email"
                    name="username"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                    labelCol={{ span: 24 }}
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                    <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={isSubmit}>
                        Submit
                    </Button>
                    </Form.Item>
                    <Form.Item>
                        <span>Bạn chưa có tài khoản? 
                            <Link to="/register"> Singup</Link>
                        </span>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login;