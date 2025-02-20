import { notFound } from "next/navigation"
import Article from "@/app/_components/Artucle"
import ButtonLink from "@/app/_components/ButtonLink"
import { getNewsDetail } from "@/app/_libs/microcms"
import styles from "./page.module.css"

type Props = {
  params: {
    slug: string
  }
  // serchParams: {
  //   dk?: string
  // }
}


export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound)
  return (
    <>
      <Article data={data}/>
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  )
}