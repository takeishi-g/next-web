import { News } from "@/app/_libs/microcms"
import Category from "../Category"
import Date from "../Date"
import Image from "next/image"
import styles from "./index.module.css"
import parser from "html-react-parser"

type Props = {
  data: News
}

export default function Article({ data }: Props) {
  
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <Category category={data.category}/>
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <img 
          src={data.thumbnail.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: data.content
        }}
      />
    </main>
  )
}