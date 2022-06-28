import { fetchApi, API } from './utils/fetchApi.js'

type User = {
    userId: number,
    id: number,
    title: string,
    body: string
}

async function renderList() {
    let users: User[] = await fetchApi<User[]>(API.JSONPLACEHOLDER);
    const root = document.querySelector('.root');

    if ( !root ) return;

    for (const user of users) {
        let listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.innerHTML = `<div>userId: ${user.userId}</div>
                              <div>id: ${user.id}</div>
                              <div>title: ${user.title}</div>
                              <div>body: ${user.body}</div>`;
        root.append(listItem);
    }
}

try {
    (async () => await renderList())();
} catch (error) {
    let message = 'Unknown Error';

    if (error instanceof Error) {
        message = error.message;
    }
    console.error(message);
}


