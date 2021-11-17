import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'UserLayout',
    component: () => import('../components/Layout/UserLayout'),
    children: [
      {
        path: '/cabinet',
        name: 'Cabinet',
        component: () => import('../views/User/Cabinet')
      },
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/User/Home')
      },
      {
        path: '/poster',
        name: 'Poster',
        component: () => import('../views/User/Poster/Poster'),
        children: [
          {
            path: '/poster',
            name: 'PosterNow',
            component: () => import('../views/User/Poster/PosterNow')
          },
          {
            path: 'soon',
            name: 'PosterSoon',
            component: () => import('../views/User/Poster/PosterSoon')
          }
        ]
      },
      {
        path: '/schedule',
        name: 'Schedule',
        component: () => import('../views/User/Schedule')
      },
      {
        path: '/order/:id',
        name: 'Order',
        component: () => import('../views/User/Order'),
        props: true
      },
      {
        path: '/films/:actual/:id',
        name: 'FilmPage',
        component: () => import('../views/User/FilmPage'),
        props: true
      },
      {
        path: '/cinemas',
        name: 'CinemasUser',
        component: () => import('../views/User/Cinemas/CinemasUser'),
      },
      {
        path: '/cinemas/:id',
        name: 'CinemasPage',
        component: () => import('../views/User/Cinemas/CinemasPage'),
        props: true
      },
      {
        path: '/cinemas/:cinemaID/halls/:hallID',
        name: 'HallsPage',
        component: () => import('../views/User/Cinemas/HallsPage'),
        props: true
      },
      {
        path: '/sales',
        name: 'SalesUser',
        component: () => import('../views/User/Sales/SalesUser')
      },
      {
        path: '/sales/:id',
        name: 'SalesPage',
        component: () => import('../views/User/Sales/SalesPage'),
        props: true
      },
      {
        path: '/news',
        name: 'NewsUser',
        component: () => import('../views/User/Pages/NewsUser')
      },
      {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('../views/User/Pages/Contacts')
      },
      {
        path: '/pages/:id',
        name: 'UserPage',
        component: () => import('../views/User/Pages/UserPage'),
        props: true
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import('../views/User/Search'),
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPassword')
  },
  {
    path: '/admin',
    name: 'AdminLayout',
    component: () => import('../components/Layout/AdminLayout'),
    children: [
      {
        path: 'stats',
        name: 'Stats',
        component: () => import('../views/Admin/Stats'),
      },
      {
        path: 'banners',
        name: 'Banners',
        component: () => import('../views/Admin/Banners')
      },
      {
        path: 'films',
        name: 'Films',
        component: () => import('../views/Admin/Films/Films')
      },
      {
        path: 'films-editor/:path/:id',
        name: 'FilmsEditor',
        component: () => import('../views/Admin/Films/FilmsEditor'),
        props: true,
      },
      {
        path: 'cinemas',
        name: 'Cinemas',
        component: () => import('../views/Admin/Cinemas/Cinemas')
      },
      {
        path: 'cinemas-edit/:id',
        name: 'CinemasEdit',
        component: () => import('../views/Admin/Cinemas/CinemasEdit'),
        props: true,
      },
      {
        path: 'cinemas-edit-halls/:path/:id',
        name: 'CinemasEditHalls',
        component: () => import('../views/Admin/Cinemas/CinemasEditHalls'),
        props: true,
      },
      {
        path: 'schedule',
        name: 'ScheduleCinema',
        component: () => import('../views/Admin/Schedule/ScheduleCinema')
      },
      {
        path: 'schedule/:id/halls',
        name: 'ScheduleHalls',
        component: () => import('../views/Admin/Schedule/ScheduleHalls'),
        props: true
      },
      {
        path: 'schedule/:cinemasID/halls/:hallsID',
        name: 'ScheduleFilms',
        component: () => import('../views/Admin/Schedule/ScheduleFilms'),
        props: true
      },
      {
        path: 'schedule/:cinemasID/halls/:hallsID/films/:filmsID',
        name: 'ScheduleEdit',
        component: () => import('../views/Admin/Schedule/ScheduleEdit'),
        props: true
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('../views/Admin/News/News')
      },
      {
        path: 'news-edit/:id',
        name: 'NewsEdit',
        component: () => import('../views/Admin/News/NewsEdit'),
        props: true
      },
      {
        path: 'sales',
        name: 'Sales',
        component: () => import('../views/Admin/Sales/Sales')
      },
      {
        path: 'sales-edit/:id',
        name: 'SalesEdit',
        component: () => import('../views/Admin/Sales/SalesEdit'),
        props: true
      },
      {
        path: 'pages',
        name: 'Pages',
        component: () => import('../views/Admin/Pages/Pages')
      },
      {
        path: 'pages-edit/:id',
        name: 'PagesEdit',
        component: () => import('../views/Admin/Pages/PagesEdit'),
        props: true
      },
      {
        path: 'pages-edit/0',
        name: 'PagesEditMain',
        component: () => import('../views/Admin/Pages/PagesEditMain'),
      },
      {
        path: 'pages-edit/2',
        name: 'PagesEditContacts',
        component: () => import('../views/Admin/Pages/PagesEditContacts'),
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('../views/Admin/Users/Users')
      },
      {
        path: 'users-edit/:id',
        name: 'UsersEditMain',
        component: () => import('../views/Admin/Users/UsersEdit'),
        props: true
      },
      {
        path: 'mailing',
        name: 'Mailing',
        component: () => import('../views/Admin/Mailing/Mailing')
      },
      {
        path: 'mailing-users/:type',
        name: 'UsersSelect',
        component: () => import('../views/Admin/Users/UsersSelect'),
        props: true
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
