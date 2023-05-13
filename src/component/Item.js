import { BsTrash, BsFillPencilFill } from "react-icons/bs";
import { Button, Card, Col, Row } from 'react-bootstrap'
export default function Item(props) {
    const { data, deleteTask, editTask } = props;

    return (

        <Row className="justify-content-center mb-1 text-secondary">
            <Col md="5">
                <Card>
                    <Card.Body>
                        <Row md="6">
                            <Col md="9">
                                <strong>{data.title}</strong>
                            </Col>
                            <Col md="3" className="text-center">
                                <Button type="submit" variant="outline-danger" size="sm" onClick={() => deleteTask(data.id)}><BsTrash /></Button>{' '}
                                <Button type="sunmit" variant="outline-warning" size="sm" onClick={() => editTask(data.id)}><BsFillPencilFill /></Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    )
}
