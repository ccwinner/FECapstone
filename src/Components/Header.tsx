import logo from '../logo.svg';
import '../App.css';
import { Text } from '@chakra-ui/react';

export const Header = () => {
  return (
    <header className="App-header">
    {/* <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p> */}
    {/* <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a> */}
    <img alt='Travel Advisor' className='App-logo' />
    <Text>Welcome to Travel Advisor!</Text>
    {/* <h1>Welcome to Travel Advisor!</h1> */}
    </header>
  );
}
