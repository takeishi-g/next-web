import Image from "next/image";
import styles from "./index.module.css"
import React from "react";
import Link from "next/link";
import Menu from "@/app/_components/Menu";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logolink}>
        <Image 
          src="/images/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}

export default Header;
