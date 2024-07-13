import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from "./_components/ButtonLink";

import { News } from "./_libs/microcms";
import NewsList from "./_components/NewsList";


const data: {
  cotents: News[];
} = {
  cotents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP3に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テスト記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    },
  ],
};

export default function Home() {
  const name = "世界";
  const sliceData = data.cotents.slice(0,2)
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
        <Image
          className={styles.bgimg}
          src="/images/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData}/>
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
