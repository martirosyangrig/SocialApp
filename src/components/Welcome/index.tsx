import Link from "next/link";
import style from "./welcome.module.scss";

export default function Welcome() {
  return (
    <div className={style.wraper}>
      <div className={style.continer}>
        <div className={style.title}>
          <h1>Your Next Social Life.</h1>
          <span>
            Your new social media platform with stuff that actually matters.
          </span>
        </div>
        <Link href={"/signin"} className={style.button}>
          Get Started →
        </Link>
      </div>
    </div>
  );
}
