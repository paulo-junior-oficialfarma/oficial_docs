// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Oficial Docs",
  tagline: "Conhecimento a um clique de distância",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/undraw_oficialfarma_logo.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "oficial-farma", // Usually your GitHub org/user name.
  projectName: "oficial-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/paulo-junior-oficialfarma/oficial_docs/tree/master/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Oficial Docs",
        logo: {
          alt: "OficialFarma Logo",
          src: "img/undraw_oficialfarma_logo.svg",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Documentações",
          // },
          {
            type: "dropdown",
            label: "Documentações",
            position: "left",
            items: [
              {
                label: "Projeto Influenciadores",
                to: "docs/category/projeto-influenciadores"
              },
              {
                label: "Integrador Oficial",
                to: "docs/category/integrador-oficial"
              },
              {
                label: "Master",
                to: "docs/category/master"
              },
              {
                label: "Medicator",
                to: "docs/category/medicator"
              },
              {
                label: "E-Ship",
                to: "docs/category/e-ship"
              },
              {
                label: "Salesforce",
                to: "docs/category/salesforce"
              },
            ]
          },
          {
            type: "dropdown",
            label: "API",
            position: "left",
            items: [
              {
                label: "Projeto Influenciadores",
                to: "/docs/projeto_influencers/influencers_api/influencers-api-rest-endpoints"
              },
              {
                label: "Integrador Oficial",
                to: "/docs/category/integrador-oficial"
              }
            ]
          },

          {
            href: "https://github.com/oficialfarma-projetos",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/oficialfarma-projetos",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          petstore: {
            specPath: "examples/petstore.yaml",
            outputDir: "docs/petstore",
            downloadUrl:
              "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          influencers: {
            specPath: "api/influencers.yaml",
            outputDir: "docs/projeto_influencers/influencers_api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
