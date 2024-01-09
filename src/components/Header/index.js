import './styles.scss'
import appName from "../../includes/variables"
import { developer } from "../../includes/variables";
// import { AiOutlineClear } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import MainMenu from '../MainMenu';


export default function Header(){
    return(
      <>
        <header className="container">            
           
           <div className="appName">
            <AiOutlineBars/> 
            {appName} 
            </div>
          <div className='developer'>  {developer}</div>
          
        </header>
        <MainMenu />
        </>
    )
}