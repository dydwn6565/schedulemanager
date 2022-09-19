import { useState, useRef } from "react";
import LoginAndSignup from "./components/LoginAndSignup";
import bcrypt from "bcryptjs";
import { Link } from "react-router-dom";
function SignUp() {
  const [duplicateUserError, setDuplicateUserError] = useState(false);

  const errorMessage = "This user name is taken please type another";

  const linkToLogin = useRef<HTMLAnchorElement | null>(null);
  const signUphandler = async (userId: string, password: string) => {
    console.log("userId " + userId);
    console.log("password " + password);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const fetchedData = await fetch("https://venv-liart-one.vercel.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;  charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        query: `mutation {
            createUser(userId:"${userId}",password:"${hashedPassword}"){user{
                userId
                
            }}}`,
      }),
    });
    if (fetchedData.status === 200) {
      const jsonData = await fetchedData.json();
      if (jsonData.data.createUser === null) {
        setDuplicateUserError(true);
      } else {
        if (null !== linkToLogin.current) {
          linkToLogin.current.click();
        }
      }
      console.log(jsonData.data.createUser);
    }
  };
  return (
    <div>
      <LoginAndSignup
        userInput={"Sign up"}
        signUphandler={signUphandler}
        duplicateUserError={duplicateUserError}
        errorMessage={errorMessage}
      />
      <Link ref={linkToLogin} to="/login" />
    </div>
  );
}

export default SignUp;
