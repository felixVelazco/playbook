class Repo {
  constructor(name, author,language,numberOfCommits,stars,forks,issues_open, issues_close){
    this.name = name;
    this.author = author;
    this.language = language;
    this.numberOfCommits = numberOfCommits;
    this.stars = stars;
    this.forks = forks;
    this.issues_open = issues_open;
    this.issues_close = issues_close;
  }
  getTotalIssues() {
    return this.issues_open + this.issues_close
  }
  getGeneralInfo(){
    return `This repository ${this.name} was created by ${this.author}`
  }
}

class Issue{
  constructor(title, labels, author, repositoryNameAssociated){
    this.title = title;
    this.labels = labels;
    this.author = author;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.status = "Open";
    this.numberOfComments = 3;
    this.dateCreated= "2022-04-12 11:41";
    this.lastUpdated = new Date();
  }
  getTitleAndAuthor(){
    return `${this.title} was created by ${this.author}.\n`
  }
  getGeneralInfo(){
    return `Date created: ${this.dateCreated}\nStatus: ${this.status}\nLabels: ${this.labels}\n`
  }
}

class PullRequest{
  constructor(title, author, branch){
    this.title = title;
    this.author = author;
    this.branch = branch;
    this.dateCreated = new Date();
    this.status = "Closed",
    this.repositoryNameAssociated = "LaunchX";
  }
  getStatus(){
    return this.status;
  }
  getTitleAndAuthor(){
    return `The pull request "${this.title}" was created by ${this.author}`
  }
}


const repoCarlo = new Repo("LaunchX", "carlogilmar", "Javascript", 100, 199, 299, 10, 10);
console.log(repoCarlo);
const repoFelix = new Repo("LaunchX", "felixVelazco", ["Javascript", "C++"], 57, 19, 99, 3, 1);
console.log(repoFelix);

const issueFelix = new Issue("Brain not found", ["Bug", "Important", "Security"], "Felix", "LaunchX");
console.log(issueFelix);
console.log(issueFelix.getTitleAndAuthor());

const pullRequestFelix = new PullRequest("Modify authentication log in","Jose","main");
console.log(pullRequestFelix);
console.log(pullRequestFelix.getTitleAndAuthor());


