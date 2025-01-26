import React from "react";
import { Row, Col, Card, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import pic from '../assests/images/volunteers-posting-social-media.jpg'

const { Title, Paragraph } = Typography;

const About = () => {
    const navigate = useNavigate();
    const teamMembers = [
        {
            name: "John Doe",
            role: "Founder & CEO",
            image: pic,
        },
        {
            name: "Jane Smith",
            role: "Director of Operations",
            image: pic,
        },
        {
            name: "Sam Wilson",
            role: "Community Outreach Manager",
            image: pic,
        },
    ];

    return (
        <section style={{ padding: "40px 20px", background: "#f9f9f9" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* Mission Section */}
                <Row gutter={[16, 16]} justify="center">
                    <Col span={24} style={{ textAlign: "center" }}>
                        <Title level={2}>About Us</Title>
                        <Paragraph>
                            At BetterWorld Initiative, we aim to bring positive change to
                            underserved communities by addressing basic needs and creating
                            opportunities for growth.
                        </Paragraph>
                    </Col>
                </Row>

                {/* Vision, Mission, and Values */}
                <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
                    <Col xs={24} sm={8}>
                        <Card bordered hoverable>
                            <Title level={4}>Our Mission</Title>
                            <Paragraph>
                                To provide sustainable solutions that empower individuals and
                                communities to thrive.
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={8}>
                        <Card bordered hoverable>
                            <Title level={4}>Our Vision</Title>
                            <Paragraph>
                                A world where every individual has the tools and support to
                                build a better future.
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={8}>
                        <Card bordered hoverable>
                            <Title level={4}>Our Values</Title>
                            <Paragraph>
                                Compassion, Integrity, Sustainability, and Innovation are at
                                the heart of everything we do.
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>

                {/* Meet the Team */}
                <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
                    <Col span={24}>
                        <Title level={3} style={{ textAlign: "center" }}>
                            Meet Our Team
                        </Title>
                    </Col>
                    {teamMembers.map((member, index) => (
                        <Col xs={24} sm={8} key={index}>
                            <Card
                                cover={<img alt={member.name} src={member.image} />}
                                bordered
                                hoverable
                            >
                                <Title level={4}>{member.name}</Title>
                                <Paragraph>{member.role}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Call to Action */}
                <Row justify="center" style={{ marginTop: "40px" }}>
                    <Col>
                        <Card bordered hoverable style={{ textAlign: "center" }}>
                            <Title level={3}>Join Us in Making a Difference</Title>
                            <Paragraph>
                                Your support can help us bring positive change to more
                                communities around the world.
                            </Paragraph>
                            <Button type="primary" size="large" onClick={() => navigate('/contactus')}>
                                Donate Now
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default About;
