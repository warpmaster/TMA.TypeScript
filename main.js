var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchApi, API } from './utils/fetchApi.js';
function renderList() {
    return __awaiter(this, void 0, void 0, function* () {
        let users = yield fetchApi(API.JSONPLACEHOLDER);
        const root = document.querySelector('.root');
        if (!root)
            return;
        for (const user of users) {
            let listItem = document.createElement('div');
            listItem.classList.add('list-item');
            listItem.innerHTML = `<div>userId: ${user.userId}</div>
                              <div>id: ${user.id}</div>
                              <div>title: ${user.title}</div>
                              <div>body: ${user.body}</div>`;
            root.append(listItem);
        }
    });
}
try {
    (() => __awaiter(void 0, void 0, void 0, function* () { return yield renderList(); }))();
}
catch (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) {
        message = error.message;
    }
    console.error(message);
}
