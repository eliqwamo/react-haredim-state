import { ListGroup, Badge } from "react-bootstrap";
import geodist from 'geodist';

const Gitem = props => {

  const tcb_coords = {lat: 31.25102071516075, lon: 34.79095229229478};
  const user_coords = {lat: props.emp.address.geo.lat, lon: props.emp.address.geo.lng};
  const distance = geodist(tcb_coords, user_coords);
  let textColor = "#000000";

  if (distance > 8000) {
    textColor = "#99cc00";
  } else {
    textColor = "#9900cc"
  }

  return (
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold" style={{color:textColor}}>{props.emp.name}</div>
        {props.emp.email}
        <br />
        <i>{props.emp.address.city} | {props.emp.phone}<br/></i>
        {distance}km
      </div>
      <Badge bg={props.emp.isLogged ? "success" : "danger"} pill>
        {props.emp.isLogged ? "Online" : "Offline"}
      </Badge>
    </ListGroup.Item>
  );
};

export default Gitem;
