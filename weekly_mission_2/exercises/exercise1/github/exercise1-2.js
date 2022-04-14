const issue ={
  title: "Brain not found",
  repositoryNameAssociated: "LaunchX",
  status: "Open",
  numberOfComments: 3,
  labels: ["Bug", "Important", "Security"],
  author: "Felix",
  dateCreated: "2022-04-12 11:41",
  lastUpdated: "2022-04-13 19:38",

  getTitleAndAuthor: function(){
    return `${this.title} was created by ${this.author}.\n`
  },
  getGeneralInfo: function(){
    return `Date created: ${this.dateCreated}\nStatus: ${this.status}\nLabels: ${this.labels}\n`
  }
}

console.log("Nombre del issue: "+ issue.title);
console.log("Repositorio asociado: "+issue.repositoryNameAssociated+"\n");
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());