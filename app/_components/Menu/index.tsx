"use client";

import Link from "next/link";
import React, { useState } from "react";
import cx from "classnames"
import styles from "./index.module.css";
import Image from "next/image";

function Menu() {
  const [ isOpen, setOpen ] = useState<boolean>(false)
  const open = () => setOpen(true)
  const close = () => setOpen(false)

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <img 
            src="/images/close.svg"
            alt="閉じる"
            width={24}
            height={24}
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <img src="/images/menu.svg" alt="" width={24} height={24}/>
      </button>
    </div>
  );
}

export default Menu;
