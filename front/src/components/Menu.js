
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Menu.css";
import Login from './login';

function Menu() {
    return(
            <section class="header">
                <nav>
                    <div class="nav-links" id="navLinks">
                        <ul>
                              
                            <li><a href={Login}><h4>ADMINISTRATEUR</h4></a></li>
                            <li><a href={Login}><h4>NOUVEAU</h4></a></li>
                        </ul>
                    </div>  

                </nav>   
            </section>      
    )
}
export default Menu