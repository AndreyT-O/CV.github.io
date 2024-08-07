import { defineStore } from 'pinia'

export const useTechnologyStore = defineStore('technology', () => {

    let technology = {
        'front-end': [
            'HTML (BEM, Mobile first)', 'JS (Vanilla js)', 'Vue 3 (Nuxt.js)', 'React (Next.js)', 'CSS (SASS, LESS)', 
            'Tanstack query (Vue3, React)', 'Graphql (Apollo Graphql)', 'Laravel Blade' 
        ],
        'back-end': [
            'Node.js', 'Express.js'
        ],
        'framework': [
            'Laravel', 'Vue 3', 'Nuxt.js', 'Next.js'
        ],
        'layout email': [
            'ZUBR Foundation'
        ],
        'graphic editors': [
            'Figma', 'Avocode', 'Photoshop'
        ],
        'web services': [
            'Github', 'Bitbucket'
        ],
        'source code editor': [
            'VS Code', 'PhpStorm'
        ],
        'languages': [
            'Ukrainian (Native)', 'English (Intermediate)'
        ],
        'personal skills': [
            'Responsibility', 'Hardworking', 'Sociability', 'Initiative', 'Mindful', 'Strong problem-solving skills'
        ]
    }

  return { technology }
})
