import * as request from 'request';
import { Repo } from './Repo';
import { User } from './User';

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}

export class GithubApiService {
    getuserInfo(username: string, cb: (user: User) => any) {
        request.get('https://api.github.com/users/' + username, OPTIONS, (error:any, response: any, body: any) => {
            let user = new User(/*JSON.parse(*/body);
            cb(user);
        })
    }

    getRepos(username: string, cb: (repoArray: Repo[]) => any) {
        request.get('https://api.github.com/users/' + username + '/repos', OPTIONS, (error:any, response: any, body: any) => {
            let repoArray = body.map(repo => new Repo(repo))
            cb(repoArray);
        })
    }
}