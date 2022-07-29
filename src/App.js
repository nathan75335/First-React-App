
import './App.css';
import Header from "./Header"

function App() {

   function MainContent(){
    return(
      
        <div className='Maincontent'>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    
    )
   }
   function Footer(){
    return(
      <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
   }
   
  return (
    <div>
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
  );
}

export default App;
