import "../src/assets/css/styles.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import {Image} from 'react-image';

function App() {
  return (

    <section name="boite">
    <div class="p-3 mb-2 bg-transparent text-dark">
      
      
      <Menu />
      <Header />

    </div>
    </section>
  );
}

export default App;
