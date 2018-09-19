import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <main>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12}>
                    <code>{<h1 className="mdc-typography--display1">Библиотека JavaScript-разработчика</h1>}</code>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={12} >
                    <code>
                        {
                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis amet quibusdam nobis eius suscipit. 
                                Eius vel dolores, sapiente ipsa, eligendi saepe, soluta ex praesentium perspiciatis cupiditate libero 
                                veniam magni, unde.
                            </h4>
                        }
                    </code>
                    </Col>                    
                </Row>
            </Grid>            
        </main>
    );
}

export default Home;