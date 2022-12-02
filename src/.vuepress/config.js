const { description } = require('../../package')
const pluginsConfig = require("./config/plugins");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '集める',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],


  locales: {
    '/': {
      lang: 'en-US'
    },
    '/ru/': {
      lang: 'ru-RU'
    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    overrideTheme: 'dark',
    smoothScroll: true,
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/assets/media/logo.png',

    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        nav: [
          {
            text: 'Home',
            link: '/',
          },
          {
            text: 'Installation',
            link: '/installation/',
          },
          {
            text: 'Guides',
            link: '/guides/',
          },
          {
            text: 'Telegram',
            link: 'https://t.me/atsumeru_app'
          }
        ],
        sidebar: {
          '/glossary/': [
            {
              title: 'Home',
              path: '/',
            },
            {
              title: 'Glossary',
              collapsable: false,
              sidebarDepth: 2,
              children: [
                '',
                'sort-types',
                'content-types',
                'genres',
                'metadata-categories'
              ]
            },
            {
              title: 'Installation',
              path: '/installation/'
            },
            {
              title: 'Guides',
              path: '/guides/',
            }
          ],
          '/installation/': [
            {
              title: 'Home',
              path: '/',
            },
            {
              title: 'Glossary',
              path: '/glossary/'
            },
            {
              title: 'Installation',
              collapsable: false,
              sidebarDepth: 2,
              children: [
                '',
                'jar',
                'access-server',
                'server-settings',
                'https'
              ]
            },
            {
              title: 'Guides',
              path: '/guides/',
            }
          ],
          '/guides/': [
            {
              title: 'Home',
              path: '/'
            },
            {
              title: 'Glossary',
              path: '/glossary/'
            },
            {
              title: 'Installation',
              path: '/installation/'
            },
            {
              title: 'Guides',
              collapsable: false,
              sidebarDepth: 2,
              children: [
                '',
                'users',
                'import',
                'library',
                'metadata',
                'read-progress',
                'admin',
                'samba',
                'google-drive',
                'book-info-scheme',
                'rest-api'
              ]
            }
          ],
        }
      },
      '/ru/': {
        // text for the language dropdown
        selectText: 'Языки',
        // label for this locale in the language dropdown
        label: 'Русский',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Языки',
        nav: [
          {
            text: 'Домашняя страница',
            link: '/ru/',
          },
          {
            text: 'Установка',
            link: '/ru/installation/',
          },
          {
            text: 'Инструкции',
            link: '/ru/guides/',
          },
          {
            text: 'Telegram',
            link: 'https://t.me/atsumeru_app'
          }
        ],
        sidebar: {
          '/ru/glossary/': [
            {
              title: 'Домашняя страница',
              path: '/',
            },
            {
              title: 'Глоссарий',
              collapsable: false,
              sidebarDepth: 2,
              children: [
                '',
                'sort-types',
                'content-types',
                'genres',
                'metadata-categories'
              ]
            },
            {
              title: 'Установка',
              path: '/ru/installation/'
            },
            {
              title: 'Инструкции',
              path: '/ru/guides/',
            }
          ],
          '/ru/installation/': [
            {
              title: 'Домашняя страница',
              path: '/',
            },
            {
              title: 'Глоссарий',
              path: '/ru/glossary/'
            },
            {
              title: 'Установка',
              collapsable: false,
              sidebarDepth: 2,
              children: [
                '',
                'jar',
                'access-server',
                'server-settings',
                'https'
              ]
            },
            {
              title: 'Инструкции',
              path: '/ru/guides/',
            }
          ],
          '/ru/guides/': [
            {
              title: 'Домашняя страница',
              path: '/ru/'
            },
            {
              title: 'Глоссарий',
              path: '/ru/glossary/'
            },
            {
              title: 'Установка',
              path: '/ru/installation/'
            },
            {
              title: 'Инструкции',
              collapsable: false,
              sidebarDepth: 2,
              children: [
                '',
                'users',
                'import',
                'library',
                'metadata',
                'read-progress',
                'admin',
                'samba',
                'google-drive',
                'book-info-scheme',
                'rest-api'
              ]
            }
          ],
        }
      }
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: pluginsConfig
}
