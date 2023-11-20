import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'
const CourseTimeLine=(props)=>{
    const{item}=props
    const{courseTitle,description,duration}=item
    const{ tagsList}=item
   const getTags=(each)=>{
        const{name,id}=each
        return(
            <button className='tagsl'>{each.name}</button>
        )
    }
    return(
        <div className="coursecontainer">
            <div className="courseone">
                <h1>{courseTitle}</h1>
                <div className='course11'>
                    <AiFillClockCircle/>
                    
                    <p>{duration}</p>
                </div>
            </div>
            <p>{description}</p>
            <div className='coursetwo'>
                {tagsList.map((each)=>(
                   <> {getTags(each)}</>
                ))}
            </div>
        </div>

    )
}
export default CourseTimeLine