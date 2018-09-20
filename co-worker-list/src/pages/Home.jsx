import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <main>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12}>
                        <h1 className="mdc-typography--display1">Список сотрудников</h1>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={12} >
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis amet quibusdam nobis eius suscipit. 
                            Eius vel dolores, sapiente ipsa, eligendi saepe, soluta ex praesentium perspiciatis cupiditate libero 
                            veniam magni, unde.
                        </h4>
                    </Col>                    
                </Row>
            </Grid>            
        </main>
    );
}

export default Home;