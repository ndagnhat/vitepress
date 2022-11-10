import { defineConfigWithTheme  } from 'vitepress';

export default defineConfigWithTheme ({
  base: '/vitepress/',
  lang: 'vi-VN',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },
      { text: 'Example1', link: '/example1' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          // ...
        ],
      },
    ],

    i18n: {
      search: '検索',
      menu: 'メニュー',
      toc: '目次',
      returnToTop: '上に戻る',
      appearance: '外観',
      previous: '前のページ',
      next: '次のページ',
      pageNotFound: 'ページが見つかりません',
      deadLink: {
        before: '存在しないリンクです: ',
        link: '',
        after: '',
      },
      deadLinkReport: {
        before: '修正しますので',
        link: 'こちらのリンク',
        after: 'よりお知らせください。',
      },
      footerLicense:{
        before: '',
        link: '',
        after: 'のもとで公開されています。',
      },
    
      ariaAnnouner: {
        before: '',
        link: '',
        after: 'が読み込まれました'
      },
      ariaDarkMode: 'ダークモードの切り替え',
      ariaSkipToContent: '本文へジャンプ',
      ariaToC: '現在のページの目次',
      ariaMainNav: 'メイン・ナビゲーション',
      ariaMobileNav: 'モバイル・ナビゲーション',
      ariaSidebarNav: 'サイドバー・ナビゲーション',
    },
  },
});
