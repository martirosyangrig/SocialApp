"use client";

import { ChangeEvent, useState } from "react";
import style from "./singup.module.scss";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className={style.wraper}>
      <div className={style.continer}>
        <h1>
          {" "}
          Sign up for a new
          <br />
          <span>account.</span>{" "}
        </h1>
        <form>
          <div className={style.formContiner}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onEmailChange}
              required
            />

            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onNameChange}
              required
            />

            <label htmlFor="email">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={onLastNameChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              required
            />

            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="password"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              required
            />
          </div>
          <button type="submit">Sign In →</button>
        </form>
        <div className={style.signinContiner}>
          <span className={style.singinInfo}>Already have an account?</span>
          <Link href={"/signin"} className={style.signin}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
