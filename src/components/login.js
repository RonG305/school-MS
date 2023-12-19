import { useState, useEffect } from "react"
import { Navigate, redirect, useNavigate,  } from "react-router-dom";


const Login = ({ isLoggedIn, setIsLoggedIn }) => {
   const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
      });


      const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginData({
          ...loginData,
          [name]: value,
        });
      };


  
        const handleSubmit = async (event) => {
            event.preventDefault();
            try {
              const response = await fetch("http://localhost:8000/api/login/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
        
                body: JSON.stringify(loginData),
              });
        
              console.log("Request Data:", loginData);
              console.log("Request Headers:", JSON.stringify(response.headers));
        
              if (response.ok) {
                  console.log('LOgin succesifull')
                  navigate('../projects')
                  localStorage.setItem('username')
              } else {
                console.log("Failed during data submission for login");
              
              }
            } catch (error) {
              console.log("An error occured in fetching form data", error);
           
            }
          };
        




    const containerStyle = " bg-blue-400 w-screen h-screen flex items-center justify-center"
    const subContainerStyle = " bg-gray-100 md:w-3/12 md:h-1/2 flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-md p-4"
    const inputStyle = " border border-gray-300 rounded-md px-2 py-1 outline-none"
    const submitStyle = " bg-blue-500 rounded-md px-3 py-1 text-white" 

    const validateUsername = loginData.username.length < 2
    const validatePassword = loginData.password.length < 8
    const validateSubmit = loginData.username.valueOf === '' && loginData.password.valueOf === ''
    
    
    
    return (
        <div className={containerStyle}>

            <div className={subContainerStyle}>
                <img className=" w-32 h-32" src="/logo.jpg" alt="logo" />
                <h3>Login to account</h3>
                <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>

                 {validateUsername && <p className=" text-sm text-red-500">* enter valid username</p> }   
                  
                <input
                    type='text'
                    placeholder="username"
                    className={inputStyle}
                    name='username'
                    value={loginData.username}
                    onChange={handleChange}
                />
                {validatePassword && <p className=" text-sm text-red-500">* enter valid password</p>  }
                  
                <input
                    type='password'
                    placeholder="passsword"
                    className={inputStyle}
                    name='password'
                    value={loginData.password}
                    onChange={handleChange}
                    
                />

                <button disabled ={validateSubmit ? true : false} className={submitStyle} type="submit">Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login