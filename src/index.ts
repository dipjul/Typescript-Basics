import {GithubApiService} from './GithubApiService';
import { Repo } from './Repo';
import { User } from './User';
import * as _ from 'lodash';

let svc = new GithubApiService();

if(process.argv.length < 3){
    console.log('Please pass the username as an argumrnt');
}
else {
    let username = process.argv[2];
    svc.getuserInfo(username, (user: User) => {
        svc.getRepos(username, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
            user.repos = sortedRepos;
            console.log(user);
        })
    });
}


// svc.getRepos('dipjul', (repoArray: Repo[]) => {
//     console.log(repoArray);
// });