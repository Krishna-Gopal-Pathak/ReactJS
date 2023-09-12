export const routes=[
    {
        id:1,
        name:'Home',
        link:'/',
    },
    {
        id:2,
        name:'Services',
        link:'/',
        subRoutes:
        [
            {
                id:1,
                name:'Web Development',
                link:'/services/web-development',
            },
            {
                id:2,
                name:'Android Development',
                link:'/services/android-development',
            },
        ],
    },
    {
        id:3,
        name:'Products',
        link:'/products',
    },
];