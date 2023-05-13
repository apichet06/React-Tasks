
import { Container, Button, Form, Row, Col, Card } from 'react-bootstrap';
export default function Addform(props) {


    const { title, setTitle, saveTask, validated, editId } = props;



    return (
        <>
            <h2 className='my-3 text-center'>แอพบริหารจัดการงาน</h2>
            <hr />

            <Container fluid>
                <Row className="justify-content-center text-secondary">
                    <Col md="5">
                        <Card>
                            <Card.Body>
                                <Form noValidate validated={validated} onSubmit={saveTask}>
                                    <Row className="justify-content-center">
                                        <Form.Group as={Col} md="9" sm="9" controlId="validationCustom04">
                                            <Form.Control type="text" placeholder="งานที่ต้องทำ" required value={title} onChange={(e) => setTitle(e.target.value)} />
                                            <Form.Control.Feedback type="invalid">
                                                กรุณากรอกข้อความ
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group md="3" sm="3" as={Col}>
                                            <Button type="submit" className="btn btn-success">{editId ? "อับเดด" : "เพิ่ม"}</Button>
                                        </Form.Group>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


            <hr />
        </>
    )
}

