import * as React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface IAppProps {
}

interface IAppState {
  robots: Array<IRobot>;
  searchfield: string;
}
// common Typescript practice to pass in interface props, state in React
class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
// 'void' is passed in since there is nothing being 'returned'
  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }
// 'void' is passed in since there is nothing being 'returned'
  onSearchChange = (event:React.SyntheticEvent<HTMLInputElement>):void => {
    this.setState({ searchfield: event.currentTarget.value })
  }
// JSX.Element is returned so no 'void' here
  render():JSX.Element {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;