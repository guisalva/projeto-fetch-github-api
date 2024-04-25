import { baseUrl, repositoriesAndEventsQuantity } from '/src/scripts/variables.js';

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesAndEventsQuantity}`);
    return await response.json();
}

export { getEvents };
