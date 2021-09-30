import * as React from 'react';
import Dropdown from './Dropdown';
// import Timeline from './Timeline';
import { Container, Row, Col } from 'react-grid-system';
import { FaUserAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';


export default function Update() {
    return (
        <Container>
            <Row>
            <div class="Nav">
                    <Col>
                        <div class="Logo">
                            <img alt="app logo" class="App-logo" src="/reya-logo.webp"/>
                        </div> 
                    </Col>
                    <Col>
                        <div class="Avatar">
                            <FaUserAlt />
                        </div>
                    </Col>
                </div>
            </Row>
            <Row>
                <Col>
                    <div class="Dropdown">
                        <Dropdown/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    {/* <Timeline /> */}
                </Col>
            <div class="Checkbox">
                <h3>Symptoms</h3>
                <div class="pretty p-default">
                <Row>
                    <Col>
                        <div>
                            <input type="checkbox" />
                        </div>
                        <div class="state p-danger">
                            <label>Spotting between periods</label>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <input type="checkbox" />
                        </div>
                        <div class="state p-danger">
                            <label>Weight gain</label>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <input type="checkbox" />
                        </div>
                        <div class="state p-danger">
                            <label>Nausea</label>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <input type="checkbox" />
                        </div>
                        <div class="state p-danger">
                            <label>Mood Change</label>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <input type="checkbox" />
                        </div>
                        <div class="state p-danger">
                            <label>Breast tenderness</label>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <input type="checkbox" />
                        </div>
                        <div class="state p-danger">
                            <label>Missed periods</label>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <input type="checkbox" />
                        </div>
                        <div class="state p-danger">
                            <label>Headaches and migraine</label>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <input type="checkbox" />
                        </div>
                        <div class="state p-danger">
                            <label>Decreased libido</label>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <input type="checkbox" />
                        </div>
                        <div class="state p-danger">
                            <label>Vaginal Discharge</label>
                        </div>
                    </Col>
                    <Col>
                        <input type="checkbox" />
                        <div class="state p-danger">
                            <label>Eye Changes</label>
                        </div>
                    </Col>
                </Row>
                </div> 
            </div>
            </Row>
            <Row>
                <Col>
                <Button>Submit</Button>
                </Col>
            </Row>
        </Container>
    )
}



