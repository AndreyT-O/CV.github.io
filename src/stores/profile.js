import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {

    let profile = {
        'name': 'Andrii Trofimuk',
        'img': './img/profile.gif',
        'socials': [
            {
                'icon': 'linkedin',
                'src': 'linkedin.com/in/andrey-trofimuk-422a39201'
            },
            {
                'icon': 'django',
                'src': 'https://djinni.co/q/d1233d2127/'
            },
            {
                'icon': 'gmail',
                'src': 'mailto:trufikao@gmail.com'
            },
            {
                'icon': 'telegram',
                'src': 'https://t.me/T_Andrey_Tr'
            },
        ]
    }

  return { profile }
})
