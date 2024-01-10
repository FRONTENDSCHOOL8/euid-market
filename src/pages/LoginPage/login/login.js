
// import { generateRandomCode, phoneNumFormat } from '/src/pages/LoginPage/util/'; 
import {getNode, tiger} from '/src/lib/'

const loginbutton = getNode('.login')

function handleLogin(e){
  e.preventDefault();

  tiger.post(`${import.meta.env.VITE_PB_API}/collections/users/auth-with-password`,{
    identity: 01011112222
  })
}








