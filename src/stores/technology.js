import { defineStore } from 'pinia'

export const useTechnologyStore = defineStore('technology', () => {

    let technology = {
        'front-end': [
            'HTML (BEM, Mobile first)', 'JS Native', 'Vue 3 (composition)', 'React (composition)', 'CSS', 'SCSS', 'Less' 
        ],
        'framework': [
            'Laravel', 'Vue 3'
        ],
        'back-end': [
            'Node.js', 'Express.js', 'Nuxt.js'
        ],
        'module builder': [
            'webpack (laravel)', 'gulp', 'vite'
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
        'version controll system': [
            'git (git flow)'
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
