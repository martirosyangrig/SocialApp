import Link from "next/link";
import Image from "next/image";
import MainLogo from "@/assets/icons/icons8-logo-200.svg";
import SearchIcon from "@/assets/icons/icons8-search.svg";
import MessengerIcon from "@/assets/icons/icons8-facebook-messenger.svg";
import NotlificationIcon from "@/assets/icons/notifications.svg";

import style from "./mainNav.module.scss";

export default function MainNavbar() {
  return (
    <nav className={style.wraper}>
      <div className={style.continer}>
        <div className={style.logoInfo}>
          <Image src={MainLogo} alt="mainLogo" height={65} width={65} />
          <div className={style.searchBar}>
            <input type="text" placeholder="Finds friends, pages..." />
            <button>
              <Image src={SearchIcon} alt="search" height={18} width={18} />
            </button>
          </div>
        </div>
        <div className={style.title}>
          <span>MyFriend</span>
        </div>
        <div className={style.icons}>
          <div className={style.iconHandler}>
            <Image src={MessengerIcon} alt="messenger" height={30} width={30} />
          </div>
          <div className={style.iconHandler}>
            <Image
              src={NotlificationIcon}
              alt="notlification"
              height={30}
              width={30}
            />
          </div>
          <div className={style.iconHandler}></div>
        </div>
      </div>
    </nav>
  );
}
