import React, {useState} from "react";
import { Button, Container, Row, Col, ListGroup, Spinner } from "react-bootstrap";
import Gitem from "./components/Gitem";
import axios from "axios";

const App = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((results) => {
        setUsers(results.data)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <br/><br/>

            {
              isLoading 
                ? <Spinner variant="danger" /> 
                : <Button onClick={loadData} variant="success">Load Data</Button>
            }
            <br/><br/>
            
            <ListGroup as="ol" numbered>
                {
                  users?.map((emp) => (
                    <Gitem key={emp.id} emp={emp} number={23} />
                  ))
                }
                </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
