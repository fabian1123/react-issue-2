import React from "react";
import { withRouter, Link } from "react-router-dom";
import { get, close, reopen } from "../api";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import moment from "moment";
import ReactMarkdown from "react-markdown";

class IssueDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.loadIssue();
  }

  loadIssue() {
    const id = Number(this.props.match.params.issueId);
    const issue = get(id);
    this.setState({ issue });
  }

  onCerrar() {
    const { issue } = this.state;
    close(issue.id);
    this.loadIssue();
  }

  onReabrir() {
    reopen(this.state.issue.id);
    this.loadIssue();
  }

  render() {
    const { issue } = this.state;
    return (
    <div className="issue-detail">
      <Link to="/" className="issue-volver">&lt; Volver</Link>
      {issue &&
        <div>
          <h3>{issue.titulo} <span className="issue-id">{`#${issue.id}`}</span></h3>
          {issue.estado === 'open' && <Badge variant="success">Abierto</Badge>}
          {issue.estado === 'closed' && <Badge variant="danger">Cerrado</Badge>}
          <span className="issue-usuario">{issue.usuario}</span>
          <span className="issue-fecha">abrió este issue {moment.unix(issue.fecha).fromNow()}</span>
          <div className="issue-contenido">
            <Card>
              <Card.Body>
                <ReactMarkdown source={issue.contenido}/>
              </Card.Body>
            </Card>
          </div>
          {issue.estado === 'closed' &&
            <div className="issue-estado">
              <Button onClick={this.onReabrir.bind(this)}>Reabrir</Button>
              <span title={moment.unix(issue.modificado).format('LLLL')}>
                Cerrado {moment.unix(issue.modificado).fromNow()}
              </span>
            </div>
          }
          {issue.estado === 'open' &&
            <div className="issue-estado">
              <Button onClick={this.onCerrar.bind(this)}>Cerrar</Button>
              {issue.modificado &&
                <span title={moment.unix(issue.modificado).format('LLLL')}>
                  Reabierto {moment.unix(issue.modificado).fromNow()}
                </span>
              }
            </div>
          }
        </div>
      }
    </div>
    );
  }

}

export default withRouter(IssueDetail);