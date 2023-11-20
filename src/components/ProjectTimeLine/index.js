import { SlCalender } from "react-icons/sl";
import './index.css'
const ProjectTimeLine=(props)=>{
    const{item}=props
    const{projectTitle,imageUrl,duration, description, projectUrl}=item
    return(
       <div className='projectcontainer'>
        <img src={imageUrl} className='imagi' alt="imagi"/>
        <div className='pone'>
            <h1>{projectTitle}</h1>
            <div className='p11'>
               <SlCalender />
                <p>{duration}</p>
            </div>
        </div>
        <p>{description}</p>
      
        <a href={projectUrl}>Visit</a>
       </div>
    )
}
export default ProjectTimeLine