import { useEffect, useState } from "react"

const useOnline = () =>{
    const[isOnline,setIsOnline] = useState(true);

    useEffect(() => {
        window.addEventListener("online",() => {
            setIsOnline(true);
           });
           window.addEventListener("offline",() => {
            setIsOnline(false);
           });   
        
    },[]);

    return isOnline; // => its return boolean value;
};

export default useOnline;