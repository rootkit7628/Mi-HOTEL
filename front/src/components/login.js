import '../styles/login.css'
import profile from '../assets/user.png'
import email from '../assets/email.png'
import pass from '../assets/pass.png'

function Login() {
    return (
        <div className='main'>
            <div className='sub-main'>
                <div className='image'>
                    <div className='container-image'>
                        <img src={profile} alt='profile' className='profile'/>

                    </div>
                </div>
                <div>
                   <h1> Identification </h1> 
                    <div>
                    <img src={email} alt='email' className='email'/>
                    <input type='email' placeholder='Votre adresse email' className='user'/>
                    </div>
                    <div className='sd-input'>
                    <img src={pass} alt='password' className='email'/>
                    <input type='password' placeholder='Votre mot de passe' className='password'/>
                    </div>
                    
                    <div className='sd-input'>
                    <button className='btn'> Se connecter </button>
                    </div>
                    
                        <p className='lien'>
                            <a href='#'> Mot de passe oublié</a> ou <a href='#'>Créer un compte</a>
                        </p>
                    
                </div>
            </div>
        </div>


    )
}

export default Login;