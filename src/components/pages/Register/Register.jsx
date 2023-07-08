import { Button, Divider, Form, Input, message, notification } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { callRegister } from "../../../services/api";

const Register = () => {

    const [ isSubmit, setIsSubmit ] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const { fullName, email, password, phone } = values;

        setIsSubmit(true);
        const res = await callRegister(fullName, email, password, phone);
        setIsSubmit(false);

        if(res && res.data){
            message.info('Đăng ký tài khoản thành công!');
            navigate('/login');
        } else{
            notification.error({
                message: 'Đã có lỗi xảy ra',
                description: res.message && Array.isArray(res.message) ? res.message[0] : res.message,
                duration: 5
            });
        }
    }

    return (
        <div className="register-component">
            <div className='register-content' style={{padding: '50px'}}>
                <h1 style={{textAlign: 'center'}}>Đăng Ký Tài Khoản</h1>
                <Divider />
                <Form
                    name="basic"
                    // style={{ maxWidth: 600, margin: '0 auto' }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                    labelCol={{ span: 24 }}
                    label="FullName"
                    name="fullName"
                    rules={[{ required: true, message: 'Please input your fullname!' }]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                    labelCol={{ span: 24 }}
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
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

                    <Form.Item
                    labelCol={{ span: 24 }}
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your phone!' }]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                        <Button type="primary" htmlType="submit" loading={isSubmit}>
                            Submit
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <span>Bạn đã có tài khoản? 
                            <Link to="/login"> Login</Link>
                        </span>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Register;