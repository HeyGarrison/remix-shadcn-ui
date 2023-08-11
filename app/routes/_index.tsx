import type { V2_MetaFunction } from '@remix-run/node';
import { Button } from '~/components/ui/button';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Remix + Shadcn/ui' },
  ];
};

export default function Index() {
  return (
    <div className="prose max-w-sm p-4">
      <h1>Remix + Shadcn/ui</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <Button>Hello World</Button>
    </div>
  );
}
