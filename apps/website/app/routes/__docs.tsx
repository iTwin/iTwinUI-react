import { LinksFunction, LoaderFunction, useLoaderData, json, Outlet } from 'remix';
import docgenParse from '~/utils/docgen.server';
import styles from './__docs.min.css';
import Sandbox from '~/utils/Sandbox';
import { getComponentPath } from '~/utils/componentPaths';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: Sandbox.styles },
  { rel: 'stylesheet', href: styles },
];

type LoaderData = {
  props: ReturnType<typeof docgenParse>['props'];
};

export const loader: LoaderFunction = async ({ request }) => {
  const component = new URL(request.url).pathname.replace(/^\//, '');
  const path = require.resolve(getComponentPath(component));
  const docs = docgenParse(path);

  return json<LoaderData>({ props: docs.props });
};

export default function Page() {
  const { props } = useLoaderData<LoaderData>();

  return (
    <div className='Content'>
      <Outlet />
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(props).map(([name, value]) => {
            return (
              <tr key={name}>
                <td>{value.name}</td>
                <td>{value.type.name}</td>
                <td>{value.defaultValue?.value ?? ''}</td>
                <td>{value.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
