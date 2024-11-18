
import {  useContext, useEffect, useState } from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap'
import './_loginPage.scss'
// import { useDispatch, useSelector } from 'react-redux'
// import { login, signUp } from '../../redux/login/authSlice'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { authenticateYouTube } from '../../components/googleAuth/googleAuthUtils'
import { AuthContext } from '../../components/AuthProvider'


export default function LoginPage() {
  const [formTitle, setFormTitle] = useState('Login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [loading,setLoading]=useState(false)
  const navigate = useNavigate()
  const { currentUser,token } = useContext(AuthContext)
  console.log(currentUser)
  
  useEffect(() => {
    try {

      if (currentUser && token) {
      
         /*
        The replace option comes from React Router's navigation API.
        When you use navigate() from useNavigate() hook, you can pass
        an options object as the second parameter. The replace: true
        option tells the router to replace the current entry in the
        history stack instead of adding a new one.
        */
        navigate('/', { replace: true })
      }
      else {
       navigate('/login')
      }
    } catch (error) {
      console.log(error)
    } 
    
  }, [currentUser, navigate])
  
  const toggleSignUp = () => {
    setFormTitle('SignUp')
  }

  const handleSignUp = async(e) => {
    e.preventDefault()
    
    try {
       await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      await authenticateYouTube(true)
      
    }catch(error){
      console.log('Sign-up error',error)
    } 
  }

  const handleEmailAuth=async  (e) => {
    e.preventDefault()

   
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      await authenticateYouTube(true)
      } catch (error) {
      console.log(error)
    }
    }
  return (
  <div className="login">
      <div className='login_container'>
        <img src="https://www.svgrepo.com/show/380993/google-logo-search-new.svg" alt="" />
        
        <div className='login_form'>
          <div className='login_title'>
            <h1>{formTitle === 'Login' ? 'Login' : 'SignUp'}</h1>
            <p>{formTitle === 'Login' ?
              'Login with your email ' :
              'SignUp with your email'}
              </p>
          </div>
          <div className='form_container'>
            <Form onSubmit={formTitle==='Login'?handleEmailAuth:handleSignUp}>
              <FormGroup controlId='email'>
                <Form.Control onChange={(e)=>setEmail(e.target.value)} className='form_control' type='email' placeholder='Email'/>
              </FormGroup>
               <FormGroup  controlId='password'>
                <Form.Control onChange={(e)=>{setPassword(e.target.value)}} className='form_control' type='password'placeholder='Password'/>
              </FormGroup>
              <div className='button_container'>
                <Button className='signup_button' onClick={toggleSignUp}>{formTitle === 'Login' ? 'Create account' : ''}</Button>
                <Button type='submit' >{formTitle === 'Login' ? 'Login' : 'Sign up'}</Button>
              </div>
              </Form>
          </div>
        </div>
      </div>
</div>
  )
}
