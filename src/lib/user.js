import { browser } from "$app/environment";
import { writable } from "svelte/store";


/* initialize the users to "" if the users has not already been stored */
const users = browser ? window?.localStorage.getItem('users') ?? "" : ""

const chats = browser ? window?.localStorage.getItem('chats') ?? "" : ""

const recentSearches = browser ? window?.sessionStorage.getItem('recentSearches') ?? "" : ""


export const users_store = writable(users)
export const chat_store = writable(chats)
export const search_store = writable(recentSearches)

if (browser) {
        /* https://svelte.dev/tutorial/auto-subscriptions */
        users_store.subscribe((value) => {
                /* on changes to the users_store, update the localStorage in the browser. */
                window?.localStorage.setItem('users', value);
        })

        chat_store.subscribe((value) => {
                /* on changes to the users_store, update the localStorage in the browser. */
                window?.localStorage.setItem('chats', value);
        })
        search_store.subscribe((value) => {
                /* on changes to the users_store, update the localStorage in the browser. */
                window?.sessionStorage.setItem('recentSearches', value);
        })
}

