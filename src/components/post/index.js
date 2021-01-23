import { useRef, useState } from 'react'
import {
  Container,
  Header,
  PersonContainer,
  ButtonContainer,
  Avatar,
  Info,
  Author,
  Description,
  Content,
  Song,
  Tag,
  VideoContainer,
  Video,
  ActionsContainer,
  PlayerIcon,
  Actions,
  Action
} from './styles'

import Button from '../button'

export default function Post({ post }) {
  const videoRef = useRef()
  const [running, setRunning] = useState(false)

  const toggleAction = () => {
    if (videoRef?.current != null) {
      if (!running) videoRef.current.play()
      else videoRef.current.pause()

      setRunning(!running)
    }
  }

  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={post?.author?.avatar} />
          <Info>
            <Author>
              {post?.author?.username}
              <span>{post?.author?.name}</span>
            </Author>
            <Description>
              <span>{post?.description}</span>
              {post?.tags.map((tag, index) => {
                return (
                  <Tag key={index}>
                    {tag.title}
                  </Tag>
                )
              })}
            </Description>
          </Info>
        </PersonContainer>
        <ButtonContainer>
          <Button fontSize={14} outlined>Seguir</Button>
        </ButtonContainer>
      </Header>
      <Content>
        <Song>
          <img src='/images/songIcon.svg' />
          <a>{post?.songName}</a>
        </Song>
        <VideoContainer>
          <Video
            ref={videoRef}
            src={post?.videoUrl}
            webkit-playsinline='true'
            playsinline=''
            loop={true}
            preload='metadata'
          />
          <ActionsContainer onClick={toggleAction}>
            <PlayerIcon src={running ? "/images/pauseIcon.svg" : "/images/playIcon.svg"} />
          </ActionsContainer>
        </VideoContainer>
      </Content>
      <Actions>
        <Action>
          <img src="/images/heartIcon.svg" />
          <a>{post?.likes}</a>
        </Action>
        <Action>
          <img src='/images/bubbleIcon.svg' />
          <a>{post?.comments}</a>
        </Action>
        <Action>
          <img src='/images/arrowIcon.svg' />
          <a>{post?.replies}</a>
        </Action>
      </Actions>
    </Container>
  )
}