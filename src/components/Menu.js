
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Menu.css";
import {Image} from 'react-image';




const Menu = () => {
    return(
        
        
        
        
            
        
        
            <section class="header">
                <nav>
                    <a image src="../classroom/image/im1.jpg"></a>
                    <div class="nav-links" id="navLinks">
                        <i class="fa fa-times" ></i>
                        <ul>
                              
                            <li><a href="../classroom/page/administrateur/addcon.html">ADMINISTRATEUR</a></li>
                            <li><a href="../Header.js">CONNEXION</a></li>
                        </ul>
        
                    </div>  
                    
                    <i class="fa fa-bars" ></i>
                </nav>   
        
                <div class="text-box">
                    <h1>MI-HOTEL</h1>
                    <p>
                        Bonjour et bienvenue  "MI". 
                       Si vous voulez plus de detail, visitez sur 
                    </p>
                    <a href="" class="hero-btn">Apropos</a>
                </div>
        
            </section>
            
        
        
        
        


        
        

        
    )
}
export default Menu