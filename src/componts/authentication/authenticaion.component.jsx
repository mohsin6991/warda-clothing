//import {}from '../../utilts/firebase/firebase-utlits'
import SingupForm from '../singup-component/singupForm';
import Sin from '../singin/singIn.component'
import './authintication.style.scss'
const Authentication=()=>{
    return(
        <div className='authintication'>
            <Sin/>
            <SingupForm/>   
        </div>
    );};
export default Authentication;