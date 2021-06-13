import { useState, useEffect } from "react";
import AppNavbar from "./components/AppNavbar";
import ItemList from "./components/ItemList";
import Menu from "./components/Menu";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const path = window.location.pathname.split("/");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (path[1] === "category") {
      setCategory(path[2]);
    }
  }, [path]);
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <Container style={{ marginTop: "32px" }}>
          <Row>
            <Col md="4">
              <Menu />
            </Col>
            <Col md="8">
              <Switch>
                <Route path="/add"></Route>
                <Route path="/">
                  <ItemList category={category} />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
