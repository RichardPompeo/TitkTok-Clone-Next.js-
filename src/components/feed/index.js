import {
  Container
} from './styles'

import Post from '../post'

export default function Feed({ posts }) {
  return (
    <Container>
      {posts.map((post, index) => {
        return (
          <Post key={index} post={post} />
        )
      })}
    </Container>
  )
}