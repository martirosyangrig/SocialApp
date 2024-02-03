import style from "./welcome.module.scss";

export default function Welcome() {
  return (
    <div className={style.wraper}>
      <div className={style.continer}>
        <h1>Your Next Social Life</h1>
        <h5>
          Your new social media platform with stuff that actually matters.
        </h5>
        <button>Get Started →</button>
      </div>
    </div>
  );
}
