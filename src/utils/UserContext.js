import { createContext} from "react";
const UserContext = createContext(
         {
            user:{  
                name:"dummy Name",
                Email_id: "dummy@gmail.com",
    },
      
});

UserContext.displayName = "UserContext";

export default UserContext;
