// import {technical, workshops, cultural, informals} from '$lib/data'
import type { Link } from "./types";
import {facebookSquare, twitterSquare, envelopeSquare} from 'svelte-awesome/icons'

const mediumSquare = {
    'medium': {
        width: 72,
        height: 72,
        paths: [
            {
                d: 'm49.22,4.88c17.54,0 18.91,1.4 18.91,19.33l0,27.02c0,17.93 -1.37,19.33 -18.91,19.33l-26.44,0c-17.54,0 -18.91,-1.4 -18.91,-19.33l0,-27.02c0,-17.93 1.37,-19.33 18.91,-19.33l26.44,0zm-22.4,45.01c6.59,0 11.9,-5.45 11.9,-12.17c0,-6.72 -5.32,-12.17 -11.9,-12.17c-6.57,0 -11.9,5.45 -11.9,12.17c0,6.72 5.33,12.17 11.9,12.17zm18.99,-0.58c3.26,0 5.9,-5.19 5.9,-11.58c0,-6.39 -2.64,-11.58 -5.9,-11.58c-3.26,0 -5.89,5.19 -5.89,11.58c0,6.39 2.63,11.58 5.89,11.58zm9.16,-1.24c1.12,0 2.04,-4.63 2.04,-10.34s-0.92,-10.34 -2.04,-10.34c-1.14,0 -2.04,4.63 -2.04,10.34s0.91,10.34 2.04,10.34z'
            }
        ]
    }
};

// export function getEventDataJS(eventID: string){
//     const Tresult = technical.events.filter((e) => e.id == eventID)
//     if (Tresult.length > 0){
//         return Tresult[0]
//     }
//     const Cresult = cultural.events.filter((e) => e.id == eventID)
//     if (Cresult.length > 0){
//         return Cresult[0]
//     }
//     const Wresult = workshops.workshops.filter((e) => e.id == eventID)
//     if (Wresult.length > 0){
//         return Wresult[0]
//     }
//     const Iresult = informals.filter((e) => e.id == eventID)
//     if (Iresult.length > 0){
//         return Iresult[0]
//     }
// }


export const footerLinks: Array<Link> = [
    {
        url: 'https://www.facebook.com',
        linkText: 'Facebook',
        linkIcon: facebookSquare
    },
    {
        url: 'https://www.twitter.com',
        linkText: 'Twitter',
        linkIcon: twitterSquare 
    },
    {
        url: 'https://www.medium.com',
        linkText: 'Medium',
        linkIcon: mediumSquare
    },
    {
        url: '/contact',
        linkText: 'Contact',
        linkIcon: envelopeSquare
    }
]

export const headerLinks: Array<Link> = [
    {
        url: 'https://petrichor.events/',
        linkText: 'About Us'
    },
    {
        url: 'https://petrichor.events/',
        linkText: 'Event'
    },
    {
        url: 'https://petrichor.events/',
        linkText: 'Workshop'
    },
    {
        url: 'https://petrichor.events/',
        linkText: 'Schedule'
    },
    {
        url: 'https://petrichor.events/',
        linkText: 'Merch'
    }
]