import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-intro': {
    'menu-intro-what-is': 'https://ionicframework.com/docs/intro',
    'menu-intro-concepts': 'https://ionicframework.com/docs/intro/concepts',
    'menu-intro-your-first-app': 'https://ionicframework.com/docs/intro/first-app',
    'menu-intro-what-are-progressive-web-apps': 'https://ionicframework.com/docs/intro/what-are-progressive-web-apps',
    'menu-intro-browser-support': 'https://ionicframework.com/docs/intro/browser-support',
    'menu-intro-versioning': 'https://ionicframework.com/docs/intro/versioning',
    'menu-intro-release-notes': 'https://ionicframework.com/docs/release-notes',
    'menu-intro-support': 'https://ionicframework.com/docs/intro/support'
  },
  'menu-installation': {
    'menu-installation-cli': 'https://ionicframework.com/docs/installation/cli',
    'menu-installation-cdn': 'https://ionicframework.com/docs/installation/cdn',
    'menu-installation-environment': 'https://ionicframework.com/docs/installation/environment',
    'menu-installation-ios': 'https://ionicframework.com/docs/installation/ios',
    'menu-installation-android': 'https://ionicframework.com/docs/installation/android',
  },
  'menu-building': {
    'menu-building-starting': 'https://ionicframework.com/docs/building/starting',
    'menu-building-scaffolding': 'https://ionicframework.com/docs/building/scaffolding',
    'menu-building-migration': 'https://ionicframework.com/docs/building/migration',
    'menu-building-cross-platform': 'https://ionicframework.com/docs/building/cross-platform',
    'menu-building-running': 'https://ionicframework.com/docs/building/running',
    'menu-building-ios': 'https://ionicframework.com/docs/building/ios',
    'menu-building-android': 'https://ionicframework.com/docs/building/android',
    'menu-building-testing': 'https://ionicframework.com/docs/building/testing',
    'menu-building-contributing': 'https://ionicframework.com/docs/building/contributing',
    'menu-building-webview': 'https://ionicframework.com/docs/building/webview',
    'menu-building-storage': 'https://ionicframework.com/docs/building/storage'
  },
  'menu-layout': {
    'menu-layout-structure': 'https://ionicframework.com/docs/layout/structure',
    'menu-layout-grid': 'https://ionicframework.com/docs/layout/grid',
    'menu-layout-global-stylesheets': 'https://ionicframework.com/docs/layout/global-stylesheets',
    'menu-layout-css-utilities': 'https://ionicframework.com/docs/layout/css-utilities',
  },
  'menu-theming': {
    'menu-theming-basics': 'https://ionicframework.com/docs/theming/basics',
    'menu-theming-platform-styles': 'https://ionicframework.com/docs/theming/platform-styles',
    'menu-theming-css-variables': 'https://ionicframework.com/docs/theming/css-variables',
    'menu-theming-colors': 'https://ionicframework.com/docs/theming/colors',
    'menu-theming-themes': 'https://ionicframework.com/docs/theming/themes',
    'menu-theming-dark-mode': 'https://ionicframework.com/docs/theming/dark-mode',
    'menu-theming-advanced': 'https://ionicframework.com/docs/theming/advanced',
    'menu-theming-color-generator': 'https://ionicframework.com/docs/theming/color-generator',
  },
  'menu-angular': {
    'menu-angular-overview': 'https://ionicframework.com/docs/angular/overview',
    'menu-angular-your-first-app': 'https://ionicframework.com/docs/angular/your-first-app',
    '': {
      'menu-angular-yfa-taking-photos': 'https://ionicframework.com/docs/angular/your-first-app/2-taking-photos',
      'menu-angular-yfa-saving-photos': 'https://ionicframework.com/docs/angular/your-first-app/3-saving-photos',
      'menu-angular-yfa-loading-photos': 'https://ionicframework.com/docs/angular/your-first-app/4-loading-photos',
      'menu-angular-yfa-adding-mobile': 'https://ionicframework.com/docs/angular/your-first-app/5-adding-mobile',
      'menu-angular-yfa-deploying-mobile': 'https://ionicframework.com/docs/angular/your-first-app/6-deploying-mobile',
      'menu-angular-yfa-live-reload': 'https://ionicframework.com/docs/angular/your-first-app/7-live-reload'
    },
    'menu-angular-lifecycle': 'https://ionicframework.com/docs/angular/lifecycle',
    'menu-angular-navigation': 'https://ionicframework.com/docs/angular/navigation',
    'menu-angular-config': 'https://ionicframework.com/docs/angular/config',
    'menu-angular-platform': 'https://ionicframework.com/docs/angular/platform',
    'menu-angular-performance': 'https://ionicframework.com/docs/angular/performance',
    'menu-angular-pwa': 'https://ionicframework.com/docs/angular/pwa'
  },
  'menu-react': {
    'menu-react-overview': 'https://ionicframework.com/docs/react',
    'menu-react-quickstart': 'https://ionicframework.com/docs/react/quickstart',
    'menu-react-your-first-app': 'https://ionicframework.com/docs/react/your-first-app',
    '': {
      'menu-react-yfa-taking-photos': 'https://ionicframework.com/docs/react/your-first-app/2-taking-photos',
      'menu-react-yfa-saving-photos': 'https://ionicframework.com/docs/react/your-first-app/3-saving-photos',
      'menu-react-yfa-loading-photos': 'https://ionicframework.com/docs/react/your-first-app/4-loading-photos',
      'menu-react-yfa-adding-mobile': 'https://ionicframework.com/docs/react/your-first-app/5-adding-mobile',
      'menu-react-yfa-deploying-mobile': 'https://ionicframework.com/docs/react/your-first-app/6-deploying-mobile',
      'menu-react-yfa-live-reload': 'https://ionicframework.com/docs/react/your-first-app/7-live-reload'
    },
    'menu-react-lifecycle': 'https://ionicframework.com/docs/react/lifecycle',
    'menu-react-navigation': 'https://ionicframework.com/docs/react/navigation',
    'menu-react-config': 'https://ionicframework.com/docs/react/config',
    'menu-react-platform': 'https://ionicframework.com/docs/react/platform',
    'menu-react-pwa': 'https://ionicframework.com/docs/react/pwa'

  },
  'menu-vue': {
    'menu-vue-overview': 'https://ionicframework.com/docs/vue/overview',
    'menu-vue-your-first-app': 'https://ionicframework.com/docs/vue/your-first-app',
    'menu-vue-lifecycle': 'https://ionicframework.com/docs/vue/lifecycle',
    'menu-vue-navigation': 'https://ionicframework.com/docs/vue/navigation'
  },
  'menu-publishing': {
    'menu-publishing-progressive-web-app': 'https://ionicframework.com/docs/publishing/progressive-web-app',
    'menu-publishing-app-store': 'https://ionicframework.com/docs/publishing/app-store',
    'menu-publishing-play-store': 'https://ionicframework.com/docs/publishing/play-store',
    'menu-publishing-desktop-app': 'https://ionicframework.com/docs/publishing/desktop-app'
  },
  'menu-faq': {
    'menu-faq-glossary': 'https://ionicframework.com/docs/faq/glossary',
    'menu-faq-build': 'https://ionicframework.com/docs/faq/build',
    'menu-faq-runtime': 'https://ionicframework.com/docs/faq/runtime',
    'menu-faq-native': 'https://ionicframework.com/docs/faq/native',
    'menu-faq-cors': 'https://ionicframework.com/docs/faq/cors',
    'menu-faq-security': 'https://ionicframework.com/docs/faq/security',
    'menu-faq-tips': 'https://ionicframework.com/docs/faq/tips',
    'menu-faq-changelog': 'https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md'
  },
  'menu-resources': {
    'menu-resources-books': 'https://ionicframework.com/docs/developer-resources/books',
    'menu-resources-courses': 'https://ionicframework.com/docs/developer-resources/courses',
    'menu-resources-guides': 'https://ionicframework.com/docs/developer-resources/guides',
    'menu-resources-posts': 'https://ionicframework.com/docs/developer-resources/posts',
    'menu-resources-tools': 'https://ionicframework.com/docs/developer-resources/tools',
    'menu-resources-videos': 'https://ionicframework.com/docs/developer-resources/videos'
  }
};
