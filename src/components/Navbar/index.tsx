import Link from "next/link";
import Image from "next/image";
import MainLogo from "@/assets/icons8-logo-200.svg";
import SearchIcon from '@/assets/icons8-search.svg'
import style from "./mainNav.module.scss";

export default function MainNavbar() {
  return (
    <nav className={style.wraper}>
      <div className={style.continer}>
        <div className={style.logoInfo}>
          <Image src={MainLogo} alt="mainLogo" height={65} width={65} />
          <span>Welcome</span>
        </div>
        <div className={style.mainContent}>
          <span>Community</span>
          <div className={style.searchBar}>
            <input type="text" placeholder="Finds friends, pages..." />
            <button>
              <Image
                src={SearchIcon}
                alt="search"
                height={18}
                width={18}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
