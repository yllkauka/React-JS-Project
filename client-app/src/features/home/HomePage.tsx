import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom"
import { Button, Container, Header, Segment,Image } from "semantic-ui-react"
import { useStore } from "../../app/stores/store";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";


export default observer(function HomePage() {
    const {userStore, modalStore} = useStore();
    return (
<Segment inverted textAlign='center' vertical className='masthead'>
    <Container text>
        <Header as='h1' inverted>
            <Image size='massive' src='/assets/1.jpeg' alt='logo' style={{marginBottom:12}}/>
       Aktivtietet
      </Header>
      {userStore.isLoggendIn ? (
          <>
         <Header as='h2' inverted content = 'Eja Shiko Aktivitetet' />
         <Button as={Link} to='/activities' size='huge' inverted>
        Shiko me shume 
          </Button>
         
          </>
               ) : (
               
           <>
             <Button  onClick={() => modalStore.openModal(<LoginForm/>)} size='huge' inverted>
                  Login!
              </Button>
              <Button  onClick={() => modalStore.openModal(< RegisterForm/>)} size='huge' inverted>
            Register!
               </Button>
            
            
             
          </>    
      )}
      </Container>
    </Segment>
    )
})