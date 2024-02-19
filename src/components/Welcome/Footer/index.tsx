import Image from "next/image";
import Link from "next/link";
import GithubLogo from "@/assets/icons/icons8-github.svg";
import LinkedInLogo from "@/assets/icons/icons8-linkedin.svg";

import style from "./footer.module.scss";

export default function WelcomeFooter() {
  return (
    <footer className={style.wraper}>
      <div className={style.continer}>
        <div className={style.myInfo}>
          Grigor Martirosyan © 2024 | All Rights Reserved.
        </div>
        <div className={style.links}>
          <Link href={"https://github.com/martirosyangrig"} target="_blank">
            <Image src={GithubLogo} alt="My Github" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/grigor-martirosyan/"}
            target="_blank"
          >
            <Image
              src={LinkedInLogo}
              alt="My LinkedIn"
              height={30}
              width={30}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
