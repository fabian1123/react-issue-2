import moment from "moment";

function load() {
  const issuesStr = localStorage.getItem("issues");
  if (issuesStr) {
    return JSON.parse(issuesStr);
  }
  return [];
}

function save(issues) {
  localStorage.setItem("issues", JSON.stringify(issues));
}

export function listIssues() {
  return load();
}

export function addIssue(issue) {
  const issues = load();

  issue.id = issues.length + 1;
  issue.fecha = moment().unix();
  issue.estado = "open";

  issues.push(issue);
  save(issues);
}

export function get(id) {
  const issues = load();
  const filtered = issues.filter(i => i.id === id);
  if (filtered.length > 0) return filtered[0];
  return null;
}

export function close(id) {
  const issues = load();
  const filtered = issues.filter(i => i.id === id);
  if (filtered.length > 0) {
    const issue = filtered[0];
    issue.estado = 'closed';
    issue.modificado = moment().unix();
    save(issues);
  }
}

export function reopen(id) {
  const issues = load();
  const filtered = issues.filter(i => i.id === id);
  if (filtered.length > 0) {
    const issue = filtered[0];
    issue.estado = 'open';
    issue.modificado = moment().unix();
    save(issues);
  }
}