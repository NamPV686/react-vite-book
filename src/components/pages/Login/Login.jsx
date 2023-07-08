import { Button, Divider, Form, Input } from "antd"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);

    const dispatch = useDispatch();

    const onFinish = async (values) => {
        const { username, password } = values;
        console.log(username);
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