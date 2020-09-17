import React from "react";
import "./signInSignUp.scss";
import SignIn from "../../sign-in/signIn";
import SignUp from "../../sign-up/signUp";
const SignInSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
