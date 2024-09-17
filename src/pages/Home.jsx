import { useEffect, useState } from "react";
import { account } from "../appwrite/config";
import { useNavigate } from "react-router-dom";

export const Home = () => {

    useEffect(() => {
        // console.log(account)
    }, [])


    const navigate = useNavigate()

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    // const [password, setPass] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        isLogin();
    }, [])

    const isLogin = async () => {
        try {
            var x = await account.get("current");
            setEmail(x.email);
            setName(x.name);
            setIsLoggedIn(true);

            console.log("nav"+x.name)
        } catch (e) {

            navigate("/dashboard")
        }
    };

    return (
        <>

            <h1>Hello {name}, Welcome in Home Page</h1>
            {isLoggedIn? <><h1>Yes</h1></> :  <><h1>No</h1></>}

            {/* Have to refereh in nva after using this line code  */}
    </>
    );
};

