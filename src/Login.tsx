import { useState, useRef } from "react";
import bcrypt from "bcryptjs";
import LoginAndSignup from "./components/LoginAndSignup";
import { Link } from "react-router-dom";
function Login() {
  const [noUserError, setnoUserError] = useState(false);
  const errorMessage = "Please check your userId and password";
  const linkToHome = useRef<HTMLAnchorElement | null>(null);
    const logInhandler = async(userId: string, password: string) => {
      // const hashedPassword = await bcrypt.hash(password, 10);

      const fetchedData = await fetch("http://127.0.0.1:5000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `mutation{
            auth(userId:"${userId}",password:"${password}"){
              accessToken
              refreshToken
            }
          }`,
        }),
      });
      if(fetchedData.status ===200){
        const jsonData = await fetchedData.json()
        if(jsonData.data.auth.accessToken ===null){
          setnoUserError(true)
        }else{
            if (null !== linkToHome.current) {

              localStorage.setItem("accessToken", jsonData.data.auth.accessToken);
              localStorage.setItem(
                "refreshToken",
                jsonData.data.auth.refreshToken
              );

              linkToHome.current.click();
            }
        }

      }
    };
  return (
    <div>
      <LoginAndSignup
        userInput={"Log in"}
        signUphandler={logInhandler}
        duplicateUserError={noUserError}
        errorMessage={errorMessage}
      />
      <Link ref={linkToHome} to="/" />
    </div>
  );
}

export default Login;
