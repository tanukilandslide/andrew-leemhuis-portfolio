import { createRouter, createWebHistory } from 'vue-router'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "Resume" */ './pages/homepage/Homepage.vue'),
    },
    {
      path: '/resume',
      component: () => import(/* webpackChunkName: "Resume" */ './pages/resume/Resume.vue'),
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "about" */ './pages/about/AboutPage.vue'),
    },
    {
      path: '/blog',
      component: () => import(/* webpackChunkName: "Blog" */ './pages/blog/PortfolioBlog.vue'),
    },
    {
      path: '/zaiko-admin',
      component: () => import(/* webpackChunkName: "Zaiko" */ './pages/zaiko-admin/ZaikoAdmin.vue'),
    },
    {
      path: '/astrazeneca',
      component: () =>
        import(/* webpackChunkName: "AstraZeneca" */ './pages/astrazenica/AstraZeneca.vue'),
    },
    {
      path: '/loan-progress-simulator',
      component: () =>
        import(
          /* webpackChunkName: "LoanProgressSimulator" */ './pages/loan-progress-simulator/LoanProgressSimulator.vue'
        ),
    },
    {
      path: '/acquisition-fee-waivers',
      component: () =>
        import(
          /* webpackChunkName: "AcqFeeWaivers" */ './pages/acquisition-fee-waivers/AcquisitionFeeWaivers.vue'
        ),
    },
    {
      path: '/linkshme-website',
      children: [
        {
          path: '',
          name: 'linkshme-overview',
          component: () =>
            import(
              /* webpackChunkName: "LinksIntro" */ './pages/linkshme-website/LinksHMEWebsite.vue'
            ),
        },
        {
          path: 'research',
          component: () =>
            import(
              /* webpackChunkName: "LinksResearch" */ './pages/linkshme-website/LinksResearch.vue'
            ),
        },
        {
          path: 'concept-development',
          component: () =>
            import(
              /* webpackChunkName: "LinksConceptDevelopment" */ './pages/linkshme-website/LinksConceptDevelopment.vue'
            ),
        },
        {
          path: 'visual-style-development',
          component: () =>
            import(
              /* webpackChunkName: "LinksStyleDevelopment" */ './pages/linkshme-website/LinksVisualStyleDevelopment.vue'
            ),
        },
      ],
    },
    {
      path: '/personal-projects',
      component: () =>
        import(
          /* webpackChunkName: "PersonalProjects" */ './pages/personal-projects/PersonalProjects.vue'
        ),
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
