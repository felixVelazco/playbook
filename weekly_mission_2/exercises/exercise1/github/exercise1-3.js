const pullRequest = {
  title: "Modify authentication log in",
  author: "Jose",
  branchName: "main",
  dateCreated:"2022-02-27 08:23",
  status:"closed",
  repositoryNameAssociated:"LaunchX",

  getStatus: function(){
    return this.status;
  },
  getTitleAndAuthor: function(){
    return `The pull request "${this.title}" was created by ${this.author}`
  }
}

console.log("Branch name: "+pullRequest.branchName);
console.log(pullRequest.getTitleAndAuthor());
console.log("Status: "+pullRequest.getStatus());

