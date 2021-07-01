import { useEffect, useState, useCallback } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const useFetchContent = () => {

    const [packageC, setPackageC] = useState([])
    const [email, setemail] = useState('')
    const getContent = async() => {
        let route = `https://courierdemo.azurewebsites.net/api/packages/getPending?username=${email}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },


        }
        const res = await fetch(route, options);

        const data = await res.json();

        console.log(data)
        setPackageC(data.responseObject)


    }


    useEffect(() => {
        if (!cookies.get("email")) {
            window.location.href = './'
        }
        setemail(cookies.get("email"))

        console.log(email)
        getContent()
    }, [email]);




    return [packageC, ];

}