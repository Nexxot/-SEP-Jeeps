import './css/processmap.css';
import './css/navbar.css'
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <div class="parent">
      <div class="headnotes">
          <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
          <div class="navBar">
              <div class="navButton">
                  <Nav.Item>
                      <Nav.Link eventKey="Add">ADD</Nav.Link>
                  </Nav.Item>
              </div>
              <div className="navButton">
                  <Nav.Item>
                      <Nav.Link eventKey="Delete">DELETE</Nav.Link>
                  </Nav.Item>
              </div>
              <div className="navButton">
                  <Nav.Item>
                      <Nav.Link eventKey="Approve">APPROVE</Nav.Link>
                  </Nav.Item>
              </div>
              <div className="navButton">
                  <Nav.Item>
                      <Nav.Link eventKey="Export">EXPORT</Nav.Link>
                  </Nav.Item>
              </div>
              <div className="navButton">
                  <Nav.Item>
                      <Nav.Link eventKey="Settings">SETTINGS</Nav.Link>
                  </Nav.Item>
              </div>
              <div className="navButton" id="userIcon">
                  <Nav.Item>
                      <Nav.Link eventKey="UserIcon"><Image src="default_user_icon.jpeg" rounded></Image></Nav.Link>
                  </Nav.Item>
              </div>
          </div>
          </Nav>
      </div>
      <div class="views">2 </div>
      <div class="processes">3 </div>
      <div class="meta"> 4</div>
      <div class="processmap">5 </div>
    </div>
  );
}

export default App;
