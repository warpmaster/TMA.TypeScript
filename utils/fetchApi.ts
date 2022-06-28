export enum API {
    JSONPLACEHOLDER = 'https://jsonplaceholder.typicode.com/posts',
}

interface IAppRequestInit extends RequestInit {
    body: any;
}

export async function fetchApi<T>(url: API, options?: IAppRequestInit): Promise<T> {
    const fetchOptions = options ? { ...options } : ({} as IAppRequestInit);
    const response = await fetch(url, fetchOptions);

    return response.json();
}
