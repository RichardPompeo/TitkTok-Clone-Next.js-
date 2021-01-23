import Header from '../header'
import Sidebar from '../sidebar'
import { Container, SidebarContainer, ContentContainer } from './styles'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    </>
  )
}