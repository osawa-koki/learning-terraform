
const projectName = 'learning-terraform';
const basePath = `/${projectName}`;

const siteUrl = `https://osawa-koki.github.io/${projectName}`;
const githubUrl = `https://github.com/osawa-koki/${projectName}`

const config = {
  gatsby: {
    pathPrefix: `/${projectName}`,
    siteUrl,
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: `${basePath}/Logo.svg`,
    logoLink: siteUrl,
    title: `<a href='${siteUrl}'>🐙🐙🐙</a>`,
    githubUrl,
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction',
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock',
    ],
    links: [{ text: 'Terraform', link: 'https://www.terraform.io/' }],
    frontLine: false,
    ignoreIndex: true,
    title:
      "<a href='https://www.terraform.io/'>Terraform </a><div class='greenCircle'></div><a href='https://developer.hashicorp.com/terraform/docs'>docs</a>",
  },
  siteMetadata: {
    title: 'Learning Terraform | osawa-koki',
    description: "🐙 Let's learn Terraform!",
    ogImage: null,
    docsLocation: `${githubUrl}`,
    favicon: `${basePath}/favicon.ico`,
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: projectName,
      short_name: projectName,
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
