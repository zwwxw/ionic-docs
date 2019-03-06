import { resolve } from 'path';
import { outputJson, readJson } from 'fs-extra';
import glob from 'fast-glob';

const PAGES_PATH = resolve(__dirname, '../../src/pages');
const INDEX_PATH = resolve(__dirname, '../../src/components/search/data/index.json');

interface SearchRecord {
  title: string;
  href: string;
  type: string;
  tags: string[];
}

export default {
  title: 'Build search index',
  task: () => buildIndex(PAGES_PATH)
};

async function buildIndex(dir) {
  const paths = await getPaths(dir);
  const records = await Promise.all(paths.map(toRecord));
  return outputJson(
    INDEX_PATH,
    records,
    { spaces: 2 }
  );
}

async function toRecord(path): Promise<SearchRecord> {
  const { title, tags = [] } = await readJson(path);
  const href = toHref(path);
  const type = toType(href);
  return {
    title,
    href,
    type,
    tags
  };
}

function getPaths(cwd) {
  return glob('**/*.json', {
    absolute: true,
    cwd
  });
}

const toHref = (path: string) => {
  const [, page] = /\/pages\/(.+)\.json$/.exec(path);
  return `/docs/${page}`;
};

const toType = (href: string) => {
  const isComponent = /^\/docs\/api\/.+$/.test(href);
  return isComponent ? 'component' : 'page';
};
