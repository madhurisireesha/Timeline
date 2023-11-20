import { Chrono } from "react-chrono"
import CourseTimeLine from '../CourseTimeLine'
import ProjectTimeLine from '../ProjectTimeLine'
const TimelineView=(props)=>{
    const{items}=props
     const get1=(each)=>{
         //console.log(each)
        if(each.categoryId==='COURSE')
        {
            return <CourseTimeLine item={each} />
        }
        return <ProjectTimeLine item={each}/>
    }
        const getData=()=>{
            return(
                <Chrono items={items} mode="VERTICAL_ALTERNATING" 
                theme={{
                    primary:"#0967d2",
                    secondary:'white'
                }}>
                     {items.map((each)=>(get1(each)))} 
                </Chrono>
            )
        }
    return(
        <>
        {getData()}
        </>
    )
}
export default TimelineView