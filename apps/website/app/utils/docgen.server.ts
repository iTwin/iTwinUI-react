import { parse } from 'react-docgen-typescript';
export default function docgenParse(path: string) {
  const [docs] = parse(path);
  return docs;
}