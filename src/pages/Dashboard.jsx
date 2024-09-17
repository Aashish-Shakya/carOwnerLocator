import { useEffect, useState } from "react";
import { account, database } from "../appwrite/config";
import { useNavigate } from 'react-router-dom';
 
export const Dashboard = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPass] = useState();
    // const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        isLogin();
    }, [])

    const isLogin = async () => {
        try {
            var x = await account.get("current");
            setEmail(x.email);
            setName(x.name);
            // console.log(x)
        } catch (e) {

            navigate("/dashboard")
        }
    };


    const logout = async () => {
        if(addUser == ""){
            alert("ENter something")
        }
        try {
            var x = await account.deleteSession("current");
            navigate("/signin")

        } catch (e) {
            console.log(e)

        }

    }

const addUser = async() =>{
    // try{
        // var x = await database.createDocument('66e423730021a0910a61','66e423e5000ce57d157b', 'unique()', {
        //     Email:email,
        //     Name:name,
        //     Passoword:password
        // })
        // console.log(x)

    // }catch(e){
    //     console.log(e)
    // }
}

    return (

        <div className="dashboard-content">

            <div className="dashboard-container">


                <div className="user-info">
                    {email && name ? <>
                        {/* <p><strong>Name:</strong> {name}</p>

                        <p><strong>Email:</strong> {email}</p> */}
                        <button className="logout-button" onClick={logout}>  Logout
                        </button>



                        <br /><br /><br />

                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your Password"
                            onChange={(e) => setPass(e.target.value)}
                        />

<button   onClick={addUser}>  Add
</button>
                    </> : <>
                        <h1>Loading....</h1>
                    </>}

                </div>

            </div>
        </div>

    );
};

