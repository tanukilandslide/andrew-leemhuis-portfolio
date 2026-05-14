import { createRouter, createWebHistory } from 'vue-router'

import Homepage from './pages/homepage/Homepage.vue'
import About from './pages/about/About.vue'
import AcquisitionFeeWaivers from './pages/acquisition-fee-waivers/AcquisitionFeeWaivers.vue'
import AstraZeneca from './pages/astrazenica/AstraZeneca.vue'
import LinksHMEWebsite from './pages/linkshme-website/LinksHMEWebsite.vue'
import LinksResearch from './pages/linkshme-website/LinksResearch.vue'
import LinksConceptDevelopment from './pages/linkshme-website/LinksConceptDevelopment.vue'
import LinksVisualStyleDevelopment from './pages/linkshme-website/LinksVisualStyleDevelopment.vue'
import PersonalProjects from './pages/personal-projects/PersonalProjects.vue'
import Resume from './pages/resume/Resume.vue'
import LoanProgressSimulator from './pages/loan-progress-simulator/LoanProgressSimulator.vue'
import NotFound from './pages/NotFound.vue'
import PortfolioBlog from './pages/blog/PortfolioBlog.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Homepage },
    { path: '/resume', component: Resume },
    { path: '/about', component: About },
    { path: '/blog', component: PortfolioBlog },
    { path: '/astrazeneca', component: AstraZeneca },
    { path: '/loan-progress-simulator', component: LoanProgressSimulator },
    { path: '/acquisition-fee-waivers', component: AcquisitionFeeWaivers },
    {
      path: '/linkshme-website',
      children: [
        { path: '', name: 'linkshme-overview', component: LinksHMEWebsite },
        { path: 'research', component: LinksResearch },
        { path: 'concept-development', component: LinksConceptDevelopment },
        { path: 'visual-style-development', component: LinksVisualStyleDevelopment },
      ],
    },
    { path: '/personal-projects', component: PersonalProjects },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
