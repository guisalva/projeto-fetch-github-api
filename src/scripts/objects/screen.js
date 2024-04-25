const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        let profileItens = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                    <div class="social">
                        <p>👥 ${user.followers} seguidores</p>
                        <p>👥 ${user.following} seguindo</p>
                    </div>
                </div>
            </div>
        `;
        this.userProfile.innerHTML = profileItens;

        let repositoriesItens = '';
        user.repositories.forEach((repo) => {
            repositoriesItens += `
                <li>
                    <a href="${repo.htmlUrl}" target="_blank">
                        ${repo.name}
                        <div class="repository-info">
                            <span>🍴 ${repo.forksCount}</span>
                            <span>⭐ ${repo.starsCount}</span>
                            <span>👀 ${repo.watchersCount}</span>
                            <span>👨‍💻 ${repo.language}</span>
                        </div>
                    </a>
                </li>
            `;
        });
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
                <div class="repositories section">
                    <h2>Repositórios</h2>
                    <ul>${repositoriesItens}</ul>
                </div>
            `;
        }

        let eventsItens = '';
        user.events.forEach((event) => {
            eventsItens += `
                <li>
                    <strong>${event.repoName}<strong>
                    <span>- ${event.message}<span>
                </li>
            `;
        });
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `
                <div class="events section">
                    <h2>Eventos</h2>
                    <ul>${eventsItens}</ul>
                </div>
            `;
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>';
    },
};

export { screen };
