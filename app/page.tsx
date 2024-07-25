import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from "./_components/ButtonLink";

import { News, getNewsList } from "./_libs/microcms";
import NewsList from "./_components/NewsList";
import { TOP_NEWS_LIMIT } from "./constants";



export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT })
  const name = "世界";
  // const sliceData: News = []
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
          <p className={styles.description}>
            私たちの市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <img
          className={styles.bgimg}
          src="/images/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
