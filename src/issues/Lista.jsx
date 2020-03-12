import React from 'react';
import { ListGroup } from 'react-bootstrap';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';

function Lista(props){
    return(
        <ListGroup className="Lista">
          {props.data && props.data.map(issueItem => {
            return (
            <ListGroup.Item key={issueItem.fecha}>
              <h6><Link to={`${props.match.url}/${issueItem.fecha}`}>{issueItem.titulo}</Link></h6>
              <div>
              #{issueItem.fecha} {issueItem.estado === "open" ? "abierto" : "cerrado"} {moment.unix(issueItem.estado === "open" ? issueItem.fecha : issueItem.modificado).fromNow()} por {issueItem.usuario}
              </div>
            </ListGroup.Item>
            );
          })}
        </ListGroup>
    );
}

export default withRouter(Lista);