import './css/processmap.css';
import './css/navbar.css'
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div class="parent">
      <div class="headnotes">
          <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
              <Nav.Item>
                  <Nav.Link eventKey="Add">ADD</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="Delete">DELETE</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                      Disabled
                  </Nav.Link>
              </Nav.Item>
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
