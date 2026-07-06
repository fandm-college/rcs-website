export const site = {
  name: 'Research Computing Services',
  college: 'Franklin & Marshall College',
  email: 'dorc@fandm.edu',
  ticketUrl: 'https://request.fandm.edu',
  location: 'Stager Hall, STA007',
  globusGuide: 'https://fandm-college.github.io/globus/',
  jupyterHubGuide: 'https://fandm-college.github.io/jupyterhub-guide/'
};

export function url(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, '')}`;
}
