import { useState, useEffect } from "react"

const MessageList = ({ isDarkMode, projectId }) => {
    const [messages, setMessages] = useState([])

    const fetchMessages = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/messages')
            const data = await response.json()
            setMessages(data)
            console.log(data)
            
        } catch (error) {
            console.log('an error occured while fetching messages')
        }
    }

    useEffect(() => {
        fetchMessages()
    }, [])


    return (
        <div>
            <div className="">
                {messages.map((message) => (
                     <div className={`border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}  px-3 py-1 rounded-md w-fit md:max-w-3/4 my-3 md: max-w-2xl overflow-x-hidden overflow-y-auto `}>
                     <h3 className="font-bold text-sm mb-2">Daniel Lauda</h3>
                        <p className=" text-xs">{message.content}</p>
                        <p className="text-xs mt-3">{ message.timestamp}</p>
                 </div>
                ))}
               


              
               
            </div>

        </div>
    )
}

export default MessageList