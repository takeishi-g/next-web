import React from 'react'
import sytles from "./index.module.css"
import Link from 'next/link'

function Footer() {
  return (
    <footer className={sytles.footer}>
      <nav className={sytles.nav}>
        <ul className={sytles.items}>
          <li className={sytles.item}>
            <Link href="/news">ニュース</Link>
          </li>
          <li className={sytles.item}>
            <Link href="/members">メンバー</Link>
          </li>
          <li className={sytles.item}>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
        <p>© SIMPLE. All Rights Reserved 2024</p>
      </nav>
    </footer>
  )
}

export default Footer