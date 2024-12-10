import React from "react";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/signUp.component";
// import "./signInSignUp.styles.scss";

const SignInSignUp = () => {
  return (
    <>
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

export default SignInSignUp;
