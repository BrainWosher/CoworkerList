import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import SettingsForm from '../components/SettingsForm';

function Settings() {
    return (
        <main>
            <Grid>
                <Row className="show-grid">                    
                    <Col xs={8} >                           
                        <SettingsForm/>
                    </Col>                                       
                </Row>
                <Row className="show-grid"> 
                    <Col xs={8}>                        
                        <Button bsStyle="primary" type="submit">Сохранить</Button> 
                    </Col> 
                </Row>
            </Grid>            
        </main>
    );
}

export default Settings;