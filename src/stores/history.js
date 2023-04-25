import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('history', () => {

    let history = {
        'about me': [
            ['experience', 'developing, testing, supporting and debugging user interface'],
            ['current job', 'front-end developer'],
            ['email', 'trufikao@gmail.com'],
            ['phone', '+(380) 95 35 94 732'],
            ['residence', 'Lutsk, Ukraine'],
            ['age', new Date(1997, 11, 3)],
            ['hobby', 'kickboxing, basketball, workout and running']
        ],
        'education': {
            'name': 'Lesya Ukrainka Volyn National University',
            'date': '2015-2021',
            'position': 'Bachelor and Master’s degree, Computer Sciences and Information Technologies',
            'icon': 'study',
        },
        'work experience': [
            {
                'company': 'Sport club "ISKA"',
                'icon': 'box',
                'position': 'Freelancer',
                'startTime': new Date(2019, 4, 10),
                'endTime': new Date(2019, 7, 1),
                'description': [
                    'Experience in developing web-application.',
                    'An application has been created for sorting an array of athletes and creating a league of athletes.'
                ],
                'city': 'Lutsk'
            },
            {
                'company': 'Web studio "WEBMAESTRO"',
                'icon': 'webmaestro',
                'position': 'Front-end developer',
                'startTime': new Date(2020, 10, 1),
                'description': [
                    'Developing and supporting websites.',
                    'Experience is updating, testing and layout websites.',
                    'Layouts type of websites: eCommerce, Business, Portfolio.'
                ],
                'city': 'Lutsk'
            }
        ]
    }

  return { history }
})