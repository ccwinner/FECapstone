import './Navi.css';
import { Link } from 'react-router-dom';
import { HStack } from '@chakra-ui/react';

export const Navigation = () => {
  return (<nav className="navi-container">
    <HStack spacing={4} justify='center'>
      <Link to='/home'>Home</Link>
      <Link to='/detail'>Detail</Link>
      <Link to='/about'>About</Link>
    </HStack>
</nav>);
}
