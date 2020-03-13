import React from "react";
import { withRouter, Link } from "react-router-dom";
import { get, close, reopen } from "../api";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { Container } from "react-bootstrap";
import './IssueDetail.css';
import { axiosChangeState, axiosGetById } from './IssueApiList';

var ID = null;

class IssueDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = { issue: [] };

    ID = this.props.match.params.issueId;
  }

  componentDidMount() {
    //this.loadIssue();
    this.obtenerIssue();
  }

  obtenerIssue(){
    console.log("Item api por id:");
    axiosGetById(ID).then(issueFiltrado => {console.log("result get: ", issueFiltrado);
    
    this.setState({ issue: issueFiltrado });
  });
    
  }


  onCerrar() {
    axiosChangeState(ID, "closed");
    /*const { issue } = this.state;
    close(issue.id);
    this.loadIssue();*/
  }

  onReabrir() {
    axiosChangeState(ID, "open");
  }

  render() {
    const { issue } = this.state;
    return (
      <div className="issue-detail">
        <Container>
        <Link to="/" className="issue-volver">&lt; Volver</Link>
          {issue &&
            <div>
              <h3>{issue.titulo} <span className="issue-id espacio  "><small>{`#${issue.id}`}</small></span></h3>
              {issue.estado === 'open' && <Badge pill variant="success">Abierto</Badge>}
              {issue.estado === 'closed' && <Badge pill variant="danger">Cerrado</Badge>}
              <span className="issue-usuario"> {issue.usuario}</span>
              <span className="issue-fecha"> abrió este issue {moment.unix(issue.fecha).fromNow()}</span>
              <div className="issue-contenido espacio">
                <Card>
                  <Card.Body>
                    <ReactMarkdown className="espacio" source={issue.contenido} />
                  </Card.Body>
                </Card>
              </div>
              {console.log("issue.estado:"), console.log(issue.estado) }
              {issue.estado === 'closed' &&
                <div className="issue-estado espacio">
                  <Button onClick={this.onReabrir.bind(this)}>Reabrir</Button>
                  <span className="espacio" title={moment.unix(issue.modificado).format('LLLL')}>
                    Cerrado {moment.unix(issue.modificado).fromNow()}
                  </span>
                </div>
              }
              {issue.estado === 'open' &&
                <div className="issue-estado espacio">
                  <Button onClick={this.onCerrar.bind(this)}>Cerrar</Button>
                  {issue.modificado &&
                    <span className="espacio" title={moment.unix(issue.modificado).format('LLLL')}>
                      Reabierto {moment.unix(issue.modificado).fromNow()}
                    </span>
                  }
                </div>
              }
            </div>
          }
        </Container>
      </div>
    );
  }

}
/**
 * <Link to="/" className="issue-volver">&lt; Volver</Link>
          {issue &&
            <div>
              <h3>{issue.titulo} <span className="issue-id espacio  ">{`#${issue.id}`}</span></h3>
              {issue.estado === 'open' && <Badge pill variant="success">Abierto</Badge>}
              {issue.estado === 'closed' && <Badge pill variant="danger">Cerrado</Badge>}
              <span className="issue-usuario"> {issue.usuario}</span>
              <span className="issue-fecha"> abrió este issue {moment.unix(issue.fecha).fromNow()}</span>
              <div className="issue-contenido espacio">
                <Card>
                  <Card.Body>
                    <ReactMarkdown className="espacio" source={issue.contenido} />
                  </Card.Body>
                </Card>
              </div>
              {issue.estado === 'closed' &&
                <div className="issue-estado espacio">
                  <Button onClick={this.onReabrir.bind(this)}>Reabrir</Button>
                  <span className="espacio" title={moment.unix(issue.modificado).format('LLLL')}>
                    Cerrado {moment.unix(issue.modificado).fromNow()}
                  </span>
                </div>
              }
              {issue.estado === 'open' &&
                <div className="issue-estado espacio">
                  <Button onClick={this.onCerrar.bind(this)}>Cerrar</Button>
                  {issue.modificado &&
                    <span className="espacio" title={moment.unix(issue.modificado).format('LLLL')}>
                      Reabierto {moment.unix(issue.modificado).fromNow()}
                    </span>
                  }
                </div>
              }
            </div>
          }
 * 
 */
export default withRouter(IssueDetail);