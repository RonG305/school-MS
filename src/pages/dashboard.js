import Expenditure from "../components/expenditure"
import MembersInfo from "../components/membersInfo"
import ProjectsInfo from "../components/projectsInfo"
import Revenue from "../components/revenue"
import TasksInfo from "../components/tasksInfo"

const Dashboard = () => {
    return (
        <div className=" md:flex gap-4 mt-3">
            <ProjectsInfo />
            <MembersInfo />
            <TasksInfo />
            <Revenue />
            <Expenditure />

        </div>
    )
}


export default Dashboard