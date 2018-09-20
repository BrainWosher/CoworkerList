import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

function List() {
    return (
        <main>
            <Grid>
                <Row className="show-grid">
                    <Col xs={6}>                        
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                <th>#</th>                                
                                <th>Фамилия</th>
                                <th>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                
                                <td>Otto</td>
                                <td>Developer</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                
                                <td>Thornton</td>
                                <td>Designer</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td>Bird</td>
                                <td>Manager</td>
                                </tr>
                            </tbody>
                        </Table>                            
                    </Col>                
                    <Col xs={6} >                        
                        <Table striped bordered condensed hover>
                            <tbody>
                                <tr>
                                    <th>Фамилия</th>
                                    <th>Октавиус</th>
                                </tr>
                                <tr>
                                    <th>Имя</th>
                                    <th>Otto</th>
                                </tr>
                                <tr>
                                    <th>Отчество</th>
                                    <th>Осьминогович</th>
                                </tr>
                                <tr>
                                    <th>Дата рождения</th>
                                    <th>20.07.1978</th>
                                </tr>
                                <tr>
                                    <th>Табельный номер</th>
                                    <th>1</th>
                                </tr>
                                <tr>
                                    <th>Должность</th>
                                    <th>Доктор</th>
                                </tr>
                                <tr>
                                    <th>Подразделение</th>
                                    <th>Лаборатория</th>
                                </tr>
                            </tbody>                                
                        </Table>                        
                    </Col>                    
                </Row>
            </Grid>            
        </main>
    );
}

export default List;