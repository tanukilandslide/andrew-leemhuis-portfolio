import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./pages/homepage/Homepage.vue";
import About from "./pages/about/About.vue";
import AquisitionFeeWaivers from "./pages/aquisition-fee-waivers/AquisitionFeeWaivers.vue";
import AstraZeneca from "./pages/astrazenica/AstraZeneca.vue";
import LinksHMEWebsite from "./pages/linkshme-website/LinksHMEWebsite.vue";
import PersonalProjects from "./pages/personal-projects/PersonalProjects.vue";
import Resume from "./pages/resume/Resume.vue";
import LoanProgressSimulator from "./pages/loan-progress-simulator/LoanProgressSimulator.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: Homepage},
    {path: '/resume', component: Resume},
    {path: '/about', component: About},
    {path: '/astrazeneca', component: AstraZeneca},
    {path: '/loan-progress-simulator', component: LoanProgressSimulator},
    {path: '/aquisition-fee-waivers', component: AquisitionFeeWaivers},
    {path: '/linkshme-website', component: LinksHMEWebsite},
    {path: '/personal-projects', component: PersonalProjects},
    {path: '/:notFound(.*)', component: NotFound}
  ]
})

export default router
