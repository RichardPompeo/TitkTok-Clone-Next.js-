import {  
  Container,
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  Links
} from './styles'

import User from '../user'

export default function Sidebar() {
  return (
    <Container>
      <MenuItem active>
        <img src="/images/homeIcon.svg" />
        <span>Para você</span>
      </MenuItem>
      <MenuItem>
        <img src="/images/peopleIcon.svg" />
        <span>Seguindo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>
          Suas principais contas
        </FollowingHeader>
        <User user={{
          name: 'Will Smith',
          username: 'willsmith',
          avatar: 'https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/1646315618666501~c5_100x100.jpeg'
        }}>

        </User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Início</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>2021 TikTok</a>
        </Links>
      </InfoContainer>
    </Container>
  )
}