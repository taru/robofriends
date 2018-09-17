import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
                robots: [],
                searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({ robots: users }))
    }
// note that since componentDidMount is built into React, we omit the arrow function syntax

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // this will adjust the searchfield state to only include the search input. The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string!
    }

    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            // this makes everything lower case - good for comparison. Then says: if it includes anything that appears in the searchfield, then only return those robots. we moved this into render so that we could pass filteredRobots as a prop to the CardList. so it will cycle through only the robots that have been filtered out in the searchfield state. 
        })  
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;