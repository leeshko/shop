import React, { useState } from "react";
import {
  auth,
  signInAccount,
  signInWithGoogle,
} from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAccount(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (error) {}
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "email") {
      setEmail((prev) => value);
    } else {
      setPassword((prev) => value);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="password"
          required
          handleChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit" signin={true}>
            sign in
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn signin={true}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
