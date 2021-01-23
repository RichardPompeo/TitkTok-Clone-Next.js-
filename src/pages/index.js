import Layout from '../components/layout/index'
import Feed from '../components/feed'
import Suggestions from '../components/suggestions'
import { OpenDB } from '../lib/opendb'

export default function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts} />
      <Suggestions />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const db = await OpenDB()
  const data = await db.collection('feed').find().toArray()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data))
    }
  }
}
