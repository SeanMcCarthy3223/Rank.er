import React, {Component} from 'react';
import Nav from './components/Nav.jsx';
import EmployeeView from './components/EmployeeView.jsx';
import Filter from './components/Filter.jsx';
import axios from 'axios';

//TODO: FIX DATA IN DB MISSING 42 AND AROHAN NEEDS 43

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company: 'hratx43',
            displayAll: true,
            currentTop: [],
            currentBottom: [],
            employees: []
        };
    }

    componentDidMount() {
        axios.get('/allEmployees', {params: {company: this.state.company}})
        .then(employees => {
            console.log(employees);
            this.setState({employees: employees.data});
        })
        .catch(err => {
            console.error(err);
        });
    }

    onCompanyChange (company) {
        this.setState({company: company});
    }
    
    onDisplayChange (display) {
        this.setState({displayAll: display});
    }

    render() {
        return (
            <div id="ranker-main">
                <div>Hello from app.jsx!!</div>
                <Nav company={this.state.company} />
                <EmployeeView 
                    company={this.state.company}
                    displayAll={this.state.displayAll}
                    currentTop={this.state.currentTop}
                    currentBottom={this.state.currentBottom}
                    employees={this.state.employees}
                    />
                <Filter displayAll={this.state.displayAll} />
            </div>
        )
    }
}

export default App;