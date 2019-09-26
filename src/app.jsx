import React, {Component} from 'react';
import Nav from './components/Nav.jsx';
import EmployeeView from './components/EmployeeView.jsx';
import Filter from './components/Filter.jsx';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company: 'hratx43',
            displayAll: false,
            currentTop: [],
            currentBottom: []
        };
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
                    />
                <Filter displayAll={this.state.displayAll} />
            </div>
        )
    }
}

export default App;