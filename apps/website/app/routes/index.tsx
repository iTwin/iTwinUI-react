import { json, Link, LinksFunction, LoaderFunction, Outlet, useLoaderData } from 'remix';
import styles from './index.min.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const loader: LoaderFunction = async () => {
  const contents = await fetch(`https://api.github.com/repos/iTwin/iTwinUI-react/contents/src/core`);
  if (contents.ok) {
    return json(
      ((await contents.json()) as Array<{ name: string; type: string }>)
        .filter(({ name, type }) => type === 'dir' && name !== 'utils')
        .map(({ name }) => name)
    );
  }
  return [];
};

export default function Index() {
  const components = useLoaderData() as string[];
  return (
    <main>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Under_construction_animated.gif'
        alt='Under construction'
      />
      <h1>Welcome to iTwinUI</h1>
      <section>
        <h2>Packages</h2>
        <ul>
          <li>
            <a target='_blank' href='https://itwin.github.io/iTwinUI' rel='noreferrer'>
              iTwinUI-css
            </a>
          </li>
          <li>
            <a target='_blank' href='https://github.com/iTwin/iTwinUI-react' rel='noreferrer'>
              iTwinUI-react
            </a>
          </li>
          <li>
            <a target='_blank' href='https://itwin.github.io/iTwinUI-icons/' rel='noreferrer'>
              iTwinUI-icons
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Components</h2>
        <ul>
          {components.map((name) => (
            <li key={name}>
              <Link to={name}>{name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <Outlet />
    </main>
  );
}
