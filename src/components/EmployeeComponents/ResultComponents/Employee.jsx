import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Employee extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    onLike() {
        if (!this.state.clicked) {
            axios.put('/updateLikes', {
                id: id
            })
            .then((res) => {
                console.log(res);
                this.setState({clicked: true});
            })
            .catch(err => {
                console.error(err);
            });
        }
    }

    onDislike() {

    }

    render() {
        return(
            <div className="color-card">
            <Card bg="dark" text="white" style={{ width: '24rem' }} id={this.props.employee.name}>
                <Card.Title>
                    <div className="color-title">
                        <h4>{this.props.employee.name}</h4>
                    </div>
                </Card.Title>
                <Card.Body>
                    <div className="card-body-container">
                        <div className="color-square" style={{backgroundColor: this.props.employee.color_code}}></div>
                        <div>
                            <h4 className="rating-header">Rating: {this.props.employee.rating}%</h4>
                            <Button onClick={() => this.onLike(this.props.employee.id)} variant="outline-success" className="like-button">Like</Button>
                            <Button variant="outline-danger">Dislike</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            </div>
        );
    }
}

export default Employee;