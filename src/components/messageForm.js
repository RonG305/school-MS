import { useState, useEffect } from "react"


const MessageForm = ({ project }) => {
    const username = localStorage.getItem('username')
    const [formData, setFormData] = useState({
        content: '',
        sender: username,
        projectId: project
    })

    console.log(project)
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        try {
            const response = await fetch(`http://localhost:8000/api/messages/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                console.log('message sent succesifully')
            } else {
                console.log('message failed')
            }

        } catch (error) {
            console.log('error occured while sending message')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className=" ">
                <input
                    type='text'
                    className=" md:w-1/2 w-full rounded-md px-2 py-2 outline bg-white outline-none text-gray-800 "
                    placeholder="type your message ..."
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name="projectId"
                    value={formData.projectId}
                    onChange={handleChange}
                    hidden={true}
                
                />
                <input
                    type="text"
                    name="sender"
                    value={formData.sender}
                    onChange={handleChange}
                    hidden={true}
                
                
                />
                <button className=" py-1 px-3 pflexy-1 bg-blue-500 rounded-md text-white ml-2" type="submit"> send</button>
            </form>

        </div>
    )
}

export default MessageForm