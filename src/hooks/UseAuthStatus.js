// import React, { useEffect, useState } from "react";

// export const UseAuthStatus = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [checkingStatus, setCheckingStatus] = useState(true);

//   useEffect(() => {
//     if (isMounted) {
//       const auth = getAuth();
//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           setLoggedIn(true);
//         }
//         setCheckingStatus(false);
//       });
//     }
//   });
//   return { loggedIn, checkingStatus };
// };
