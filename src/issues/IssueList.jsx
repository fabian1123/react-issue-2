import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';
import './IssueList.css';

function IssueList(props){
    return(
          <ListGroup className="Lista">
          {props.issues && props.issues.map(issueItem => {
            return (
            <ListGroup.Item key={issueItem.id}>
              <h6><Link to={`${props.match.url}/${issueItem.id}`}>{issueItem.titulo}</Link></h6>
              <div>
              #{issueItem.id} {issueItem.estado === "open" ? "abierto" : "cerrado"} {moment.unix(issueItem.estado === "open" ? issueItem.fecha : issueItem.modificado).fromNow()} por {issueItem.usuario}
              </div>
            </ListGroup.Item>
            );
          })}
        </ListGroup>
    );
}

export default withRouter(IssueList);