import {
  Container,
  Avatar,
  Info
} from './styles'

export default function Recommend({ recommend }) {
  return (
    <Container>
      <Avatar src={recommend?.avatar} />
      <Info>
        <a>{recommend?.title}</a>
        <span>{recommend?.views}</span>
      </Info>
    </Container>
  )
}