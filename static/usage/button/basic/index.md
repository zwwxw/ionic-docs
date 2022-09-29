import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';
import angular from './angular.md';

import imageSvg from '!!raw-loader!./image.svg';

<Playground
  code={{
    javascript,
    react: {
      files: {
        'src/main.tsx': react,
      },
      assets: {
        'public/assets/image.svg': imageSvg,
      },
    },
    vue: {
      files: {
        'src/components/Example.vue': vue,
      },
      assets: {
        'src/assets/image.svg': imageSvg,
      },
    },
    angular: {
      files: {
        'src/app/example.component.html': angular,
      },
      assets: {
        'src/assets/image.svg': imageSvg,
      },
    },
  }}
  src="usage/button/basic/demo.html"
/>
