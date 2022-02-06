export const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

export const findComponentByPath = (
  path: string,
  routes: {
    path: string;
    component: {     
      listen: () => void; 
      render: () => string;
    };
  }[]
) => routes.find((r: { path: string }) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;