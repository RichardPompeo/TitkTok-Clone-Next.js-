import {
  Container,
  Avatar,
  Info
} from './styles'

export default function User({ user }) {
  return (
    <Container>
      <Avatar src={user.avatar} />
      <Info>
        <a>{user.name}</a>
        <span>{user.username}</span>
      </Info>
    </Container>
  )
}