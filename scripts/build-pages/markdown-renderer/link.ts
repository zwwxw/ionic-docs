import { resolve } from 'url';

const hasTrailingSlash = /\/$/;
const isAPI = /^\/docs\/(v4\/)?api\/.*/;
const isV3 = /^\/docs\/v3\//;

export default function(href: string, title: string, text: string) {
  const { baseUrl } = this.options;

  if (baseUrl) {
    href = resolve(hasTrailingSlash.test(baseUrl) ? baseUrl : `${baseUrl}/`, href);
  }

  if (isAPI.test(href) && !isV3.test(href)) {

    href = href.replace('docs/api', 'docs/v4/api');
    return `<stencil-route-link url=${href} ${title ? `anchorTitle=${title}` : ''}>${text}</stencil-route-link>`;
  }

  return `<a href=${href} ${title ? `title=${title}` : ''}>${text}</a>`;
}
