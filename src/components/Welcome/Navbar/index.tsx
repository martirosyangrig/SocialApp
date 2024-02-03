import style from "./navbar.module.scss";

export default function WelcomeNavbar() {
  return (
    <nav className={style.wraper}>
      <div className={style.continer}>
        <div>
          <h2 className={style.greetings}>Greetings</h2>
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
