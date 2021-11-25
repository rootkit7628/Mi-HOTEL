
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
                            <li><a href="connexion.php">CONNEXION</a></li>
                        </ul>
        
                    </div>  
                    
                    <i class="fa fa-bars" ></i>
                </nav>   
        
                
        
            </section>
            
        
        
        
        


        
        

        
    )
}
export default Menu