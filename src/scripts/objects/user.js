const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [
        {
            name: '',
            htmlUrl: '',
            forksCount: '',
            starsCount: '',
            watchersCount: '',
            language: '',
        }
    ],
    events: [
        {
            repoName: '',
            message: '',
        },
    ],

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
    },
    setRepositories(repositories) {
        this.repositories = repositories.map(function (repository) {
            return {
                name: repository.name,
                htmlUrl: repository.html_url,
                forksCount: repository.forks_count,
                starsCount: repository.stargazers_count,
                watchersCount: repository.watchers_count,
                language: repository.language,
            }
        });
    },
    setEvents(events) {
        this.events = events
            .filter(function (event) {
                return event.type === 'CreateEvent' || event.type === 'PushEvent';
            })
            .map(function (event) {
                return {
                    repoName: event.repo.name,
                    message:
                        event.type === 'CreateEvent'
                            ? event.payload.description
                            : event.payload.commits[0].message,
                };
            });
    },
};

export { user };
