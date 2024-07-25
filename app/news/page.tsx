import NewsList from "../_components/NewsList";
import { getNewsList } from "../_libs/microcms";

export const revalidate = 0

export default async function Page() {
  const { contents: news } = await getNewsList()
  return <NewsList news={news}/>
}