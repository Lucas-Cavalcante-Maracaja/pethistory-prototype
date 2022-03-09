import LoginForm from "../components/Login/LoginFormComponent"
import { Box} from '@skynexui/components';
import UserTest from '../components/Login/UserTestComponent';


export default function Home() {
  return (
      <>
        <Box
          styleSheet={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexDirection: {
              xs:'column',
              sm: 'row',
            }
          }}
          
        >
          <LoginForm />
          <UserTest />
          
        </Box>

      </>
     
      
      
  )
}
