import PageContainer from "../../components/PageContainer";
import { NavLink,Outlet } from "react-router-dom";
import './styles.scss';


const Help = () => {
    return ( <>
          <PageContainer title='Help' className='Help'hasH1={true} > 
        <article>
            <Outlet />
        </article>

        <aside>
            <ul>
                <li><NavLink to='/help' end>Introduction</NavLink></li>
                <li><NavLink to='/help/adding-tasks'>Adding Tasks</NavLink></li>
                <li><NavLink to='/help/removing-tasks'>Removing Tasks</NavLink></li>
                <li><NavLink to='/help/changing-status'>Changing Status</NavLink></li>
            </ul>
        </aside>


     </PageContainer>
    </>
    );
}
 
export default Help;