import Employee from "../components/employees"

const EmployeePage = ({isDarkMode}) => {
    return (
        <div className=" text-sm">
            <Employee isDarkMode={isDarkMode} />
        </div>
    )
}


export default EmployeePage