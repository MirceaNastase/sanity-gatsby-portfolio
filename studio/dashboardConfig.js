export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2f8d29fe2951a559573c20',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6tfdfeen',
                  apiId: '378e7a3a-a7ed-49d6-bf29-65022e6ff89e'
                },
                {
                  buildHookId: '5f2f8d2af5cc1f54e5ffda64',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rcz1e29u',
                  apiId: 'e8783817-8d6f-4dc2-b13f-ee655b3fc9cc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MirceaNastase/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rcz1e29u.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
