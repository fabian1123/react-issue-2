import React from 'react';
import { ListGroup } from 'react-bootstrap';

function IssuesList({ data }){
    return(
        <ListGroup>
        {data.map(issueItem => (
          <ListGroup.Item>
            <h6>{issueItem.titulo}</h6>
            <div>
              <span>#{issueItem.id}</span>
                <span>{issueItem.estado === 'open' ? 'abierto' : 'cerrado'}</span>
                <span>por {issueItem.usuario}</span>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
}

export default IssuesList;