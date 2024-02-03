"use client";
import { ChangeEvent, useState } from "react";
import style from "./sigin.module.scss";
import Link from "next/link";

export default function Signin() {
  const [email, setEmail] = useState<string>();
  const [password, setpassword] = useState<string>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setpassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style.wraper}>
      <div className={style.continer}>
        <h1>Sign in to your account.</h1>
        <form>
          <div className={style.emailContiner}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onEmailChange}
              required
            />
          </div>
          <div className={style.emailContiner}>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={onPasswordChange}
              required
            />
            <button onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button>Sign In →</button>
        </form>
        <div>
          <span className={style.singupInfo}>Don't have an account?</span>
          <Link href={"/signup"} className={style.signup}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
