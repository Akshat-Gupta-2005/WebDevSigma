import PropsNavbar from './components/PropsNavbar';
import List from './components/List';
import BootStrapNavbar from './components/BootStrapNavbar';
import HooksStates from './components/HooksStates';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  return (
    <>
      <Router>

        <BootStrapNavbar />

        <div className="App">
          <Routes>
            <Route exact path='/list' element={
              <>
                <PropsNavbar />
                <List />
              </>

            } />

            <Route exact path='/' element={
              <>
                <PropsNavbar headingText="First Heading" name="Akshat" />

                <HooksStates heading="This is states" />
              </>
            } />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
