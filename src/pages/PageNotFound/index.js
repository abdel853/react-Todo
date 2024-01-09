import PageContainer from "../../components/PageContainer";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( <>

<PageContainer title='Page Not Found'  hasH1={true}>

            <article>Please, check the Address</article>
            <ul>
                <li>
                    <Link to='/'>Click here</Link> to go to Taks page
                </li>
            </ul>
        </PageContainer>
        
    </> );
}
 
export default PageNotFound;