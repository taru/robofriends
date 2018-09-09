import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
                robots: robots,
                searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // this will adjust the searchfield state to only include the search input    
    }

    render() {
        const filterRobots = this.state.robots.filter(robot=> {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            // this makes everything lower case - good for comparison. Then says: if it includes anything that appears in the searchfield (also lower case - so compare searchfield text to robot names w/o worries of capitalization blocking results). if the name of the robots includes what is in the search filter, then only return robots that are in the searchfield. we moved this into render so that we could pass filteredRobots as a prop to the CardList. so it will cycle through only the robots that have been filtered out in the searchfield state. 
        })  
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filterRobots}/>
            </div>
        )
    }
}

export default App;