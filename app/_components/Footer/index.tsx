import React from 'react'
import sytles from "./index.module.css"

function Footer() {
  return (
    <footer className={sytles.footer}>
      <nav className={sytles.nav}>
        <ul className={sytles.items}>
          <li className={sytles.item}>
            <a href="/news">ニュース</a>
          </li>
          <li className={sytles.item}>
            <a href="/member">メンバー</a>
          </li>
          <li className={sytles.item}>
            <a href="/contact">お問い合わせ</a>
          </li>
        </ul>
        <p>© SIMPLE. All Rights Reserved 2024</p>
      </nav>
    </footer>
  )
}

export default Footer