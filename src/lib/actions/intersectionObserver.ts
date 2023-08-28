import type { Action } from "svelte/action"

export let observer: IntersectionObserver;
type ObserverCallBack={
    node: IntersectionObserverEntry;
    isIntersecting: boolean;
}

export const observerAction:Action<HTMLElement, { prop:IntersectionObserverInit }, { 'on:observe': (e: CustomEvent<ObserverCallBack>) => void}>=(node: HTMLElement,{ prop }) => {
    //create custom event to dispatch
    const load = (node: HTMLElement, entry:IntersectionObserverEntry) => {
        const event = new CustomEvent('observe', {
            detail: {
                node:entry,
                isIntersecting: entry.isIntersecting,
            }
        })
        node.dispatchEvent(event)
    }

    //observer callback function
    const callback = (entries: IntersectionObserverEntry[])=> {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // console.log('isIntersecting', entry)
                load(node as HTMLElement, entry)
            } else {
                // console.log('is not Intersecting', entry)
                load(node as HTMLElement, entry)
            }
        })
    }

    //check if observer is already created or create new one
    if(!observer) {
        observer = new IntersectionObserver(callback, {root:node, ...prop})
    }

    //observe the children of the node
    const children = node.children;
    for (let index = 0; index < children.length; index++) {
        const element = children[index];
        observer.observe(element as HTMLElement);
        
    }
    return {
        destroy: () => {
            observer.unobserve(node);
        }
    }
}