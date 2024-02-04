import Link from "next/link";
import style from "./navbar.module.scss";

export default function WelcomeNavbar() {
  return (
    <nav className={style.wraper}>
      <div className={style.continer}>
        <div>
          <h2 className={style.greetings}>Welcome</h2>
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
