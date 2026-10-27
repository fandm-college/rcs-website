export const services = [
  {
    slug: 'hpc',
    icon: '⚙️',
    title: 'AI and HPC',
    summary: 'Run computationally intensive research jobs on shared campus computing resources.',
    audience: 'Faculty, students, and collaborators who need more computing power than a laptop or desktop can provide.',
    tasks: ['Request an HPC account', 'Run batch jobs with Slurm', 'Use installed scientific software', 'Plan computational workflows'],
    links: [{ label: 'Open a support ticket', href: 'https://request.fandm.edu' }]
  },
  {
    slug: 'jupyterhub',
    icon: '📓',
    title: 'JupyterHub',
    summary: 'Use browser-based notebooks for teaching, coursework, workshops, and research.',
    audience: 'Faculty teaching with notebooks and students working in managed course environments.',
    tasks: ['Access course notebooks', 'Request a new course environment', 'Update course rosters', 'Share notebooks with students'],
    links: [{ label: 'JupyterHub faculty guide', href: 'https://fandm-college.github.io/jupyterhub-guide/' }]
  },
  {
    slug: 'globus',
    icon: '🔄',
    title: 'Globus',
    summary: 'Move, share, and manage research data using reliable transfer tools.',
    audience: 'Researchers who need to transfer data between F&M, collaborators, personal computers, or national facilities.',
    tasks: ['Transfer large datasets', 'Share data with collaborators', 'Use Globus Connect Personal', 'Plan data movement workflows'],
    links: [{ label: 'Globus faculty guide', href: 'https://fandm-college.github.io/globus/' }]
  },
  {
    slug: 'rstudio-webwork',
    icon: '📊',
    title: 'Classroom Solutions',
    summary: 'Support for Posit Workbench (RStudio), R, and WeBWorK for instruction and lab learning. Teach R, statistics, and data analysis, and run online math homework and assessment.',
    audience: 'Faculty and students using R in courses and workshops, and faculty using online problem sets in mathematics and quantitative courses.',
    tasks: ['Request a Posit Workbench account', 'Request a course on Posit Workbench or WeBWorK', 'Install R packages for a course', 'Manage WeBWorK problem sets', 'Troubleshoot R projects or assignments'],
    links: [{ label: 'Open a support ticket', href: 'https://request.fandm.edu' }]
  },
  {
    slug: 'software',
    icon: '📦',
    title: 'Software',
    summary: 'Find, request, and use research software across campus computing platforms.',
    audience: 'Researchers who need scientific, statistical, programming, or domain-specific software.',
    tasks: ['Request software installation', 'Find available tools', 'Choose between modules, containers, and environments', 'Plan reproducible workflows'],
    links: [{ label: 'Open a support ticket', href: 'https://request.fandm.edu' }]
  },
  {
    slug: 'national-resources',
    icon: '🌐',
    title: 'External & National Resources',
    summary: 'Connect with national cyberinfrastructure such as ACCESS, Jetstream2, and the Open Science Grid.',
    audience: 'Researchers whose projects need resources beyond local campus capacity.',
    tasks: ['Identify appropriate national resources', 'Plan allocations or access requests', 'Use Jetstream2 cloud resources', 'Explore Open Science Grid workloads'],
    links: [
      { label: 'ACCESS', href: 'https://access-ci.org/' },
      { label: 'Jetstream2', href: 'https://jetstream-cloud.org/' },
      { label: 'Open Science Grid', href: 'https://osg-htc.org/' }
    ]
  },
  {
    slug: 'consulting',
    icon: '💬',
    title: 'Research Consulting',
    summary: 'Work with Research Computing Services to plan, troubleshoot, and improve computational projects.',
    audience: 'Faculty, students, and research groups at any stage of a computational or data-intensive project.',
    tasks: ['Choose computing resources', 'Plan data workflows', 'Design teaching environments', 'Prepare for grants or collaborations'],
    links: [{ label: 'Contact Research Computing', href: 'mailto:dorc@fandm.edu' }]
  }
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}
