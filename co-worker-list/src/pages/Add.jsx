import React from 'react';
import { Grid, Row, Col, Table, ButtonToolbar, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

function Add() {
    return (
        <main>
            <Grid>
                <Row className="show-grid">                    
                    <Col xs={8} >
                        <code>
                            {
                            <form>
                            
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Должность</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Подразделение</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                            <ButtonToolbar>
                                <Button type="submit" bsStyle="primary">Сохранить и добавить еще</Button>
                                <Button type="submit" bsStyle="primary">Сохранить и вернуться в список</Button>    
                            </ButtonToolbar>  
                          </form>
                            }
                        </code>
                    </Col> 
                    <Col xs={8}>  
                                                                                            
                    </Col>                   
                </Row>
            </Grid>            
        </main>
    );
}

export default Add;