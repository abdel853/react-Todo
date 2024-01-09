import { NavLink } from 'react-router-dom';
import './styles.scss';

const MainMenu = () => {
    return ( 
        <nav className='main'>
            <NavLink to='/'>Taks</NavLink>
            <NavLink to='/add'>Add</NavLink>
            <NavLink to='/help'>Help</NavLink>
        </nav>
     );
}
 
export default MainMenu;