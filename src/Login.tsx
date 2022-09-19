import { useState, useRef } from "react";

import LoginAndSignup from "./components/LoginAndSignup";
import { Link } from "react-router-dom";
function Login() {
  const [noUserError, setnoUserError] = useState(false);
  const [userTableId, setUserTableId] = useState();
  const errorMessage = "Please check your userId and password";
  const linkToHome = useRef<HTMLAnchorElement | null>(null);

  const logInhandler = async (userId: string, password: string) => {
    const fetchedData = await fetch(
      "https://sheltered-brook-33402.herokuapp.com/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          query: `mutation{
            auth(userId:"${userId}",password:"${password}"){
              usertableid
              accessToken
              refreshToken
            }
          }`,
        }),
      }
    );
    if (fetchedData.status === 200) {
      const jsonData = await fetchedData.json();
      if (
        jsonData.data.auth.accessToken === null ||
        jsonData.data.auth === null
      ) {
        console.log("hit");
        setnoUserError(true);
      } else {
        if (null !== linkToHome.current) {
          localStorage.setItem("accessToken", jsonData.data.auth.accessToken);
          localStorage.setItem("refreshToken", jsonData.data.auth.refreshToken);
          localStorage.setItem("usertableid", jsonData.data.auth.usertableid);

          // console.log("usertableid" + jsonData.data.auth.usertableid);

          linkToHome.current.click();
        }
      }
    }
  };
  return (
    <div>
      <>
        <LoginAndSignup
          userInput={"Log in"}
          signUphandler={logInhandler}
          duplicateUserError={noUserError}
          errorMessage={errorMessage}
        />
        {console.log(userTableId)}

        <Link ref={linkToHome} to="/" />
      </>
    </div>
  );
}

export default Login;
