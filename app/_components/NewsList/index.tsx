import Image from "next/image";
import Category from "../Category";
import Date from "../Date";
import styles from "./index.module.css";
import { News } from "@/app/_libs/microcms";
import Link from "next/link";





type Props = {
  news: 
  News[]
}

export default function NewsList({ news }: Props) {
  if(news.length === 0) {
    return <p>記事がありません。</p>
  }

  return (
    <ul>
    {news.map((article) => (
      <li key={article.id} className={styles.list}>
        <Link href={`/news/${article.id}`} className={styles.link}>
        {article.thumbnail ? (
          <img 
            src={article.thumbnail.url}
            alt=""
            className={styles.image}
            width={article.thumbnail.width}
            height={article.thumbnail.height}
          />
        ) : (

          <img
          className={styles.image}
          src="/images/no-image.png"
          alt="No Image"
          width={1200}
          height={630}
          />
        )}
          <dl className={styles.content}>
            <dt className={styles.newsItemTitle}>
              {article.title}
            </dt>
            <dd className={styles.meta}>
             <Category category={article.category}/>
             <Date date={article.publishedAt ?? article.createdAt}/>
            </dd>
          </dl>
        </Link>
      </li>
    ))}
  </ul>
  )
}