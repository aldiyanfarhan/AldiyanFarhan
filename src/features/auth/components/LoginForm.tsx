import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";

function LoginForm() {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  return <div>LoginForm</div>;
}

export default LoginForm;
