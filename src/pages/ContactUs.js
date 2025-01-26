import { Col, Row, Form, Input, Select, Button } from 'antd'
import React from 'react'

const { TextArea } = Input;
const { Option } = Select;

const ContactUs = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form Submitted:', values);
    };

    const validateMessages = {
        required: "${label} is required!",
        types: {
            email: "${label} is not a valid email!",
        },
    };
    return (
        <section id="contactus" className="contact-us">
            <h2 className='heading'>Contact Us</h2>
            <Row gutter={[16, 16]}>
                <Col span={12} className='contact-info'>
                    <h5>Get in Touch with Us</h5>
                    <h3>We’re Here to Help</h3>
                    <p>Have a question or need assistance? Our team is dedicated to providing you with the support you need. Whether it’s a query about our services, feedback, or general inquiries, feel free to reach out.</p>
                    <p>Fill out the form, and we’ll get back to you as soon as possible. Your feedback and questions help us improve and serve you better.</p>
                </Col>
                <Col span={12}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        validateMessages={validateMessages}
                    >
                        <Form.Item
                            label="First Name"
                            name="firstName"
                            rules={[{ required: true }]}
                        >
                            <Input placeholder="Enter your first name" />
                        </Form.Item>

                        <Form.Item
                            label="Last Name"
                            name="lastName"
                            rules={[{ required: true }]}
                        >
                            <Input placeholder="Enter your last name" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ type: 'email', required: true }]}
                        >
                            <Input placeholder="Enter your email" />
                        </Form.Item>

                        <Form.Item
                            label="Subject"
                            name="subject"
                            rules={[{ required: true }]}
                        >
                            <Select placeholder="Select a subject">
                                <Option value="general">General Inquiry</Option>
                                <Option value="support">Support</Option>
                                <Option value="feedback">Feedback</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Message"
                            name="message"
                            rules={[{ required: true }]}
                        >
                            <TextArea rows={4} placeholder="Enter your message" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </section>
    )
}

export default ContactUs