import { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import AppNavbar from "./components/AppNavbar";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import Menu from "./components/Menu";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const path = window.location.pathname.split("/");
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([
    {
      id: uuid(),
      name: "test",
      path: "text.txt",
      type: "file",
      category: "prg",
      date: "2021-06-12T12:56:59.584Z",
    },
    {
      id: uuid(),
      name: "test2",
      path: "test.py",
      type: "file",
      category: "alg",
      date: "2021-06-13T08:25:59.584Z",
    },
    {
      id: uuid(),
      name: "Google",
      path: "https://google.com/",
      type: "link",
      category: "other",
      date: "2021-06-11T12:56:59.584Z",
    },
  ]);

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
                <Route path="/add">
                  <AddItem />
                </Route>
                <Route path="/">
                  <ItemList items={items} category={category} />
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
