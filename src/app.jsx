import React, {Component} from 'react';
import Nav from './components/Nav.jsx';
import EmployeeView from './components/EmployeeView.jsx';
import Filter from './components/Filter.jsx';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayAll: false,
            currentTop: [],
            currentBottom: [],
            employees: []
        };
    }

    componentDidMount() {
        axios.get('/allEmployees')
        .then(employees => {
            const topThree = this.getTopThree(employees);
            const bottomThree = this.getBottomThree(employees);
            this.setState({employees: employees.data, currentTop: topThree, currentBottom: bottomThree});
        })
        .catch(err => {
            console.error(err);
        });
    }

    getTopThree (employees) {
        let topThree = new Array(3).fill({rating: -1});
        for (let i = 0; i < employees.data.length; i++) {
            if (employees.data[i].total_votes) {
                employees.data[i].rating = Math.floor((employees.data[i].up_votes / employees.data[i].total_votes) * 100);
            } else {
                employees.data[i].rating = 0;
            }
            for (let j = 0; j < 3; j++) {
                if (employees.data[i].rating > (topThree[j].rating)) {
                    let temp = topThree[j];
                    let temp2;
                    topThree[j] = employees.data[i];
                    if ((j + 1) < 3 && temp.rating > topThree[j + 1].rating) {
                        temp2 = topThree[j + 1];
                        topThree[j + 1] = temp;
                        temp = temp2;
                    }
                    if ((j + 2) < 3 && temp.rating > topThree[j + 2].rating) {
                        topThree[j + 2] = temp;
                    }
                    break;
                }
            }
        }
        return topThree;
    }

    getBottomThree (employees) {
        let bottomThree = new Array(3).fill({rating: 101});
        for (let i = employees.data.length - 1; i >= 0; i--) {
            if (employees.data[i].total_votes) {
                employees.data[i].rating = Math.floor((employees.data[i].up_votes / employees.data[i].total_votes) * 100);
            } else {
                employees.data[i].rating = 0;
            }
            for (let j = 0; j < 3; j++) {
                if (employees.data[i].rating < (bottomThree[j].rating)) {
                    let temp = bottomThree[j];
                    let temp2;
                    bottomThree[j] = employees.data[i];
                    if ((j + 1) < 3 && temp.rating < bottomThree[j + 1].rating) {
                        temp2 = bottomThree[j + 1];
                        bottomThree[j + 1] = temp;
                        temp = temp2;
                    }
                    if ((j + 2) < 3 && temp.rating < bottomThree[j + 2].rating) {
                        bottomThree[j + 2] = temp;
                    }
                    break;
                }
            }
        }
        return bottomThree;
    }
    
    onDisplayChangeToAll () {
        this.setState({displayAll: true});
    }
    
    onDisplayChangeToLess () {
        this.setState({displayAll: false});
    }

    render() {
        return (
            <div id="ranker-main">
                <Nav />
                <EmployeeView 
                    displayAll={this.state.displayAll}
                    currentTop={this.state.currentTop}
                    currentBottom={this.state.currentBottom}
                    employees={this.state.employees}
                    />
                <div id="footer">
                    <Filter displayAll={this.state.displayAll}
                        onDisplayChangeToAll={this.onDisplayChangeToAll.bind(this)}
                        onDisplayChangeToLess={this.onDisplayChangeToLess.bind(this)}
                        />
                </div>
            </div>
        )
    }
}

export default App;