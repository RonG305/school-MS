import { users } from "../globalData/users"

const RightBar = () => {
    return (
        <div className="w-[120px] border rounded-md h-full ">
            {users.map((user, index) => (
                <div key={index} className="w-full p-3">
                    <p>{user.user}</p>
                    <p>{user.role}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}


export default RightBar