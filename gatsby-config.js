/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    pages: [
      {
        title: 'Developer Enablement',
        path: '/'
      },
      {
        title: 'Courses',
        path: '/courses/'        
      },
      {
        title: 'Experience Blueprints',
        path: 'https://experienceleague.adobe.com/docs/blueprints-learn/architecture/overview.html?lang=en'
      },
      {
        title: 'Developer Webhook',
        path: '/webhook/'
      },
      /*      
      {
        title: 'Developer Toolkit',
        path: '/devtoolkit/'
      },
      */
      {
        title: 'Guides',
        path: '/guides/'
      },    
      {
        title: 'API Reference',
        path: '/experience-platform-apis/'
      }
    ],
    subPages: [
      {
        title: 'Overview',
        path: '/guides/'
      },
      /*
      {
        title: 'Developer App',
        path: '/guides/developer-app/getting-started/',
        pages: [
          {
            title: 'Getting Started',
            path: '/guides/developer-app/getting-started/',
          },
          {
            title: 'Install & Setup',
            path: '/guides/developer-app/install-setup/',
          },
          {
            title: 'Utilizing with Postman',
            path: '/guides/developer-app/setup-app/',
          }                          
        ]
      },
      */
      {
        title: 'Developer Conosle',
        path: '/guides/dev-console/getting-started',
        pages: [
          {
            title: 'Getting Started',
            path: '/guides/dev-console/getting-started'
          },
          {
            title: 'Create Project',
            path: '/guides/dev-console/create-project'
          }
        ]
      },
      {
        title: 'Working with Postman',
        path: '/guides/postman/getting-started',
        pages: [
          {
            title: 'Getting Started',
            path: '/guides/postman/getting-started'
          },
          {
            title: 'Download and Install',
            path: '/guides/postman/download-install'
          },
          {
            title: 'Setup Environment',
            path: '/guides/postman/setup-environment'
          },
          {
            title: 'Authenticate',
            path: '/guides/postman/authenticate'
          },
          /*
          {
            title: 'Import Collections',
            path: '/guides/postman/import-collections'
          }
          */
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/dep/'
};
