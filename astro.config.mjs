import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fandm-college.github.io',
  base: '/rcs-website/',
  output: 'static',
  // RStudio and WeBWorK were merged into one service page; keep old links working.
  redirects: {
    '/services/rstudio': '/rcs-website/services/rstudio-webwork/',
    '/services/webwork': '/rcs-website/services/rstudio-webwork/'
  }
});
