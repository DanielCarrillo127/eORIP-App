// import axios from "axios";
// import React, { useState, FC }  from 'react';

// export const UserContext: FC = ({ children }) => {
//   const [user, setUser] = useState([]);
  
//   const userInfo = (user:[]) => {
//     setUser(user)
//   };
// localStorage.clear();
  
//   return (
//     <UserContext.Provider
//     value={{user,userInfo}}
//     >
//       {children}
//     </UserContext.Provider>
//   )
// }
import React from 'react'

export const userContext = () => {
  return (
    <div>userContext</div>
  )
}


