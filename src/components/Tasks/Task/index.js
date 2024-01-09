import './styles.scss';
import { IoTrashBinSharp } from "react-icons/io5";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";




const Task = (props) => {
   
    const handleChangeStatusClick=()=>{ 
        const id = props.id;
       props.onHandleChange(id)
    };

    const handleRemoveStatus=()=>{
        props.onHandleRemove(props.id);
    }

    const styleStatus= props.status ?'style-Completed':'style-Uncompleted';

    const toggles= props.status ?<BsToggleOn/>:<BsToggleOff/>;
 
    return ( 
         <div className="task-component">
            <div className='inside'>
            <h3>{props.description}</h3>
            <div className='id'>Id: {props.id}</div>
            
            <div className='status'>Status: <span  className={styleStatus}>{props.status?'Completed':'Uncompleted'}</span></div> 
            </div>

            <div className='outside'>
                <div className='buttons'> 

                <div className='staus'>        
            
            <div 
                className='change'
                onClick={handleChangeStatusClick}>
                        {toggles}
                </div>Change Status
                </div>
            

                <div className='remove'>
                <IoTrashBinSharp className='insideRemove' onClick={handleRemoveStatus}/>Remove Task
                </div>
                </div>
            </div>

        </div>
        
        
 
     );
}
 
export default Task;