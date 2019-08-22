import React, {Component} from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';

class ExerciseList extends Component {
    state = {
        exerciseList: [],
    }

    componentDidMount() {
        console.log('in component did mount')
        axios.get('http://localhost:5000/api/exercise')
            .then(
                response => {
                    console.log('exercise list:', response.data);
                    this.setState({
                        exerciseList: response.data,
                    })
                }
            )
            .catch(error => console.log('error with get route', error))
    }
    
    render() {
        return(
            <Container>
                {JSON.stringify(this.state)}
                <Row>
                    <Col xs={0} md={3}>
                    </Col>
                    <Col xs={12} md={6}>
                        {this.state.exerciseList.map(exercise => 
                        <tr>
                            <td>{exercise.username}</td>
                            <td>{exercise.description}</td>
                            <td>{exercise.duration} min</td>
                            <td>{exercise.date}</td>
                        </tr>
                        
                        )}
                        
                    </Col>
                    <Col xs={0} md={3}>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ExerciseList;