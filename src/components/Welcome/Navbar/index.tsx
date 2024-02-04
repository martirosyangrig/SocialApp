import Link from "next/link";
import style from "./navbar.module.scss";

export default function WelcomeNavbar() {
  return (
    <nav className={style.wraper}>
      <div className={style.continer}>
        <div>
          <Link href={'/welcome'} className={style.greetings}>Welcome</Link>
        </div>
        <div>
          <Link href={"/signup"} className={style.button}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
