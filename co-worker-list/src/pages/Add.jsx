import React from 'react';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import FormAdd from '../components/FormAdd';
import { Link } from 'react-router-dom';

function Add() {
    return (
        <main>
            <Grid>
                <Row className="show-grid">                    
                    <Col xs={8} >                           
                        <FormAdd/>
                    </Col>                                       
                </Row>
                <Row className="show-grid"> 
                    <Col xs={9}>
                        <Row className="show-grid"> 
                            <Col xs={3}>
                                <Link to="/add"><Button bsStyle="primary" type="submit">Сохранить и добавить еще</Button></Link>
                            </Col>
                            <Col xs={1}>
                                
                            </Col>
                            <Col xs={3}>
                                <Link to="/list"><Button bsStyle="primary" type="submit">Сохранить и вернуться в список</Button></Link>
                            </Col>
                        </Row>
                    </Col> 
                </Row>
            </Grid>            
        </main>
    );
}

export default Add;