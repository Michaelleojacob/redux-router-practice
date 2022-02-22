import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div id="nav-container">
      <div>React-redux-router practice</div>
      <div id="nav-links">
        <Link to={'/'}>Home</Link>
        <Link to={'/counter'}>Counter</Link>
      </div>
    </div>
  );
};

export default Nav;
