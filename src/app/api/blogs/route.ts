export async function GET(request: Request) {
  // const existingTags = await prisma.tag.findMany({
  //   select: { normalizedTagSlug: true }
  // })
  // const existingTagSlugs = new Set(
  //   existingTags.map(tag => tag.normalizedTagSlug)
  // )

  // const newTags = []
  // for (const item of data[0].data.tagFeed.items) {
  //   for (const tag of item.post.tags) {
  //     if (!existingTagSlugs.has(tag.normalizedTagSlug)) {
  //       existingTagSlugs.add(tag.normalizedTagSlug)
  //       newTags.push({
  //         displayTitle: tag.displayTitle,
  //         normalizedTagSlug: tag.normalizedTagSlug
  //       })
  //     }
  //   }
  // }

  // if (newTags.length > 0) {
  //   await prisma.tag.createMany({
  //     data: newTags
  //   })
  // }

  // const users = await prisma.user.findMany()
  // const tags = await prisma.tag.findMany()

  // const posts = await Promise.all(
  //   data[0].data.tagFeed.items.map(async (postData, i) => {
  //     const { post } = postData as any
  //     const user = users[(Math.random() * 25) | 0].id
  //     return await prisma.post.create({
  //       data: {
  //         authorId: user,
  //         title: post.title,
  //         slug: post.uniqueSlug,
  //         bannerImage: 'https://miro.medium.com/v2/' + post.previewImage.id,
  //         image: '',
  //         isFeatured: i % 2 === 0,
  //         isPremium: i % 3 === 0,
  //         published: true,
  //         isPublic: true,
  //         content: post.extendedPreviewContent?.subtitle,
  //         PostTag: {
  //           createMany: {
  //             data: post.tags.map((tag: any) => {
  //               const tagId = tags.find(
  //                 t => t.normalizedTagSlug === tag.normalizedTagSlug
  //               )?.id
  //               return { tagId }
  //             })
  //           }
  //         }
  //       }
  //     })
  //   })
  // )

  // const result = await prisma.user.createMany({
  //   data: users.map(user => {
  //     return {
  //       image: 'https://miro.medium.com/v2/' + user.imageId,
  //       email: user.id + '@sanchaar.com',
  //       username: user.username,
  //       bio: user.bio,
  //       password: '123456',
  //       name: user.name
  //     }
  //   })
  // })
  const data = {
    paragraphs: [
      {
        id: 'e952669ebf51_0',
        name: 'defd',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Using Prisma ORM to build a Node.js application with MySQL',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_1',
        name: '5a8b',
        type: 'IMG',
        href: null,
        layout: 'INSET_CENTER',
        metadata: {
          id: '1*Ws3eWfzfq2F_7R65mKCunQ.jpeg',
          originalHeight: 3744,
          originalWidth: 5616,
          focusPercentX: null,
          focusPercentY: null,
          alt: null,
          __typename: 'ImageMetadata'
        },
        text: 'Photo by Sharon McCutcheon on Unsplash',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 9,
            end: 26,
            href: 'https://unsplash.com/@sharonmccutcheon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'A',
            start: 30,
            end: 38,
            href: 'https://unsplash.com/s/photos/prism?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_2',
        name: '4a59',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Productivity is important for developers, and when it comes to building an application that interacts database, there is CRUD (Create, Read, Update, Delete) actions that are repetitive; this task can be boring for those who already know SQL and want to focus on the business logic. \nMoreover, the SQL written can be exposed to SQL injection if we don’t pay attention. Another issue is when you want to change the database, you are obliged to rewrite your SQL queries for the target database. These are problems ORMs try to solve.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 511,
            end: 514,
            href: 'https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_3',
        name: 'b481',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'There are many ORM in the Node.js ecosystems, and today, we will focus on Prisma, which is one of the best of the class.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 74,
            end: 80,
            href: 'https://www.prisma.io/',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_4',
        name: 'f1bb',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Prisma features',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_5',
        name: '3dcf',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Prisma provides features other ORMs in a different way. Database migration and Typescript support are interesting features. Prisma also provides tools to follow who throughout the development lifecycle. Check this link to know more about it.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 214,
            end: 218,
            href: 'https://www.prisma.io/docs/concepts/overview/why-prisma',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_6',
        name: 'c5f7',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'When I write this, Prisma supports MySQL, PostgresSQL, Microsoft SQL Server, and MongoDB. Check out this link to see the database version supported.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 105,
            end: 109,
            href: 'https://www.prisma.io/docs/reference/database-reference/supported-databases',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 35,
            end: 88,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_7',
        name: 'cf52',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'About programming language, only Javascript and Typescript are supported. A Prisma client for GoLand is available in early access.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_8',
        name: '4693',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'With Prisma, you define the schema of your database using the Prisma Schema Language (PSL). This schema is used to generate the code related to Database Access Layer and also migrations every time you update the schema:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_9',
        name: '0da5',
        type: 'ULI',
        href: null,
        layout: null,
        metadata: null,
        text: 'Prisma Client: Auto-generated and type-safe database client for use in your application.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 0,
            end: 13,
            href: 'https://www.prisma.io/docs/concepts/components/prisma-client/',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 0,
            end: 13,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_10',
        name: 'dab0',
        type: 'ULI',
        href: null,
        layout: null,
        metadata: null,
        text: 'Prisma Migrate: A declarative data modeling and migration tool.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 0,
            end: 14,
            href: 'https://www.prisma.io/docs/concepts/components/prisma-migrate/',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 0,
            end: 14,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_11',
        name: 'cd86',
        type: 'ULI',
        href: null,
        layout: null,
        metadata: null,
        text: 'Prisma Studio: A modern GUI for browsing and managing data in your database.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 0,
            end: 13,
            href: 'https://www.prisma.io/docs/concepts/components/prisma-studio/',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 0,
            end: 13,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_12',
        name: '3aac',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Prerequisites',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_13',
        name: '75f3',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'To follow this tutorial, you need to have',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_14',
        name: 'ec4b',
        type: 'ULI',
        href: null,
        layout: null,
        metadata: null,
        text: 'Node.js >= 12.2',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_15',
        name: '0cff',
        type: 'ULI',
        href: null,
        layout: null,
        metadata: null,
        text: 'Typescript >= 4.1',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_16',
        name: 'fb7a',
        type: 'ULI',
        href: null,
        layout: null,
        metadata: null,
        text: 'Yarn >= 1.19.2',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_17',
        name: 'f0ee',
        type: 'ULI',
        href: null,
        layout: null,
        metadata: null,
        text: 'MySQL >= 5.6 follow this tutorial to install on your computer, or if you have Docker, launch a Docker container for MySQL 8 with this command.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 20,
            end: 33,
            href: 'https://www.prisma.io/dataguide/mysql/setting-up-a-local-mysql-database',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_18',
        name: 'eddb',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'docker run -it -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=hotels --name prisma_db -p 3307:3306 mysql:8.0',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_19',
        name: '95cb',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'What we build',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_20',
        name: '5146',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'To see Prisma in action, we are going to build a minimal product inventory system.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_21',
        name: 'a4a9',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'A product belongs to a category and can have many tags. Here is the database schema draw drawSQL. We will use Prisma to create migrations then performs some CRUD.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 89,
            end: 96,
            href: 'https://drawsql.app/teco/diagrams/product-inventory',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_22',
        name: '3432',
        type: 'IMG',
        href: null,
        layout: 'INSET_CENTER',
        metadata: {
          id: '1*3nWw3npZ9GbzXKtwtaiKGA.png',
          originalHeight: 1382,
          originalWidth: 2530,
          focusPercentX: null,
          focusPercentY: null,
          alt: null,
          __typename: 'ImageMetadata'
        },
        text: 'Database schema to build with Prisma',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_23',
        name: 'ac7c',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Setup the project',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_24',
        name: '00eb',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'To start, we will use a boilerplate for the Node.js project we built on this tutorial.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 77,
            end: 85,
            href: 'https://blog.tericcabrel.com/set-up-a-nodejs-project-with-typescript-eslint-and-prettier/',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_25',
        name: 'd5f2',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'git clone https://github.com/tericcabrel/node-ts-starter.git node-prisma-mysql',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 10,
            end: 60,
            href: 'https://github.com/tericcabrel/node-ts-starter.git',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_26',
        name: 'fdec',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'cd node-prisma-mysql',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_27',
        name: '0738',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'yarn install',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_28',
        name: '4691',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'yarn start',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_29',
        name: 'd7a9',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'If everything works as expected, let’s continue by installing Prisma CLI.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_30',
        name: '5c53',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'yarn add -D prisma',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_31',
        name: '36ac',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Run the command below to create the basic Prisma schema',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 42,
            end: 55,
            href: 'https://www.prisma.io/docs/concepts/components/prisma-schema/',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_32',
        name: 'bdf8',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'yarn prisma init',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_33',
        name: '3fbd',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'We got the output below:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_34',
        name: '5113',
        type: 'IMG',
        href: null,
        layout: 'INSET_CENTER',
        metadata: {
          id: '1*cj80zjJ_F0y-LAkaR8m6jQ.png',
          originalHeight: 822,
          originalWidth: 2486,
          focusPercentX: null,
          focusPercentY: null,
          alt: null,
          __typename: 'ImageMetadata'
        },
        text: 'Install and initialize Prisma',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_35',
        name: '18b6',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'A folder named prisma was created, and inside there is a file named schema.prisma where we will write the definition of our database. Also, a file .env was created which contains the connection string to the database. Let’s update to match our local database.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 15,
            end: 21,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 68,
            end: 81,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_36',
        name: 'd986',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'DATABASE_URL="mysql://root:secret@localhost:3307/prisma_db"',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_37',
        name: '2382',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'This configuration matches with the MySQL instance running by Docker. I gave the command to launch this container upper.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_38',
        name: '8e20',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Now, open the file schema.prisma and replace the property’s value called provider by mysql (actually postgresql).',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 85,
            end: 90,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 101,
            end: 111,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_39',
        name: 'db84',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Create Category and Tags table',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_40',
        name: 'b68c',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'We will use the Prisma Schema Language to write the structure of our table. Check out this link to all the capabilities of the Schema Language since we can’t cover all of them.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 91,
            end: 95,
            href: 'https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_41',
        name: '1532',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'There is a plugin for PSL for some editors we can use for a better experience. Check out this link to find the instructions for your editor. I use the plugin for Webstorm.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 94,
            end: 98,
            href: 'https://www.prisma.io/docs/concepts/more/editor-setup',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_42',
        name: '704b',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Open the file schema.prisma and the code below:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_43',
        name: '1915',
        type: 'IFRAME',
        href: null,
        layout: 'INSET_CENTER',
        metadata: null,
        text: '',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: {
          mediaResource: {
            id: '0584b4932fba7762a9a0f3c2121662a4',
            iframeSrc: '',
            iframeHeight: 0,
            iframeWidth: 0,
            title: 'node-prisma-install',
            __typename: 'MediaResource'
          },
          __typename: 'Iframe'
        },
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_44',
        name: 'aa1a',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'We create the model Category and Tag with their properties. But let’s explain what does @map and @@map.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 87,
            end: 92,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 97,
            end: 102,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_45',
        name: '105b',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Imagine when designing your database, you want to have the table’s name in plural and lowercase. @@map Map, the Category model to a database table named categories.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 97,
            end: 102,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_46',
        name: 'a189',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: '@map does the same thing but for the table columns.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 0,
            end: 4,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_47',
        name: 'c77e',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Run the migration',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_48',
        name: 'd876',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Run the command to create migration and execute',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_49',
        name: 'dd6f',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'yarn prisma migrate dev --name create-categories-and-tags-table',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_50',
        name: '1807',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'This command will do two things:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_51',
        name: '3d0f',
        type: 'ULI',
        href: null,
        layout: null,
        metadata: null,
        text: 'Generate the migration for these tables (prisma generate is executed under the hood)',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'CODE',
            start: 41,
            end: 56,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_52',
        name: '593e',
        type: 'ULI',
        href: null,
        layout: null,
        metadata: null,
        text: 'Once the migration is generated, it will be executed.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_53',
        name: '7923',
        type: 'IMG',
        href: null,
        layout: 'INSET_CENTER',
        metadata: {
          id: '1*zJ-oBR3QhV4nkq-UP3rENQ.png',
          originalHeight: 670,
          originalWidth: 1648,
          focusPercentX: null,
          focusPercentY: null,
          alt: null,
          __typename: 'ImageMetadata'
        },
        text: 'Run migration with Prisma',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_54',
        name: '38d7',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'A folder named migrations is created at the root of the project folder.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'CODE',
            start: 15,
            end: 25,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_55',
        name: '7dfa',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Create Products table',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_56',
        name: '7ca5',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Open the file schema.prisma and add the code below:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 14,
            end: 27,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_57',
        name: '51f7',
        type: 'IFRAME',
        href: null,
        layout: 'INSET_CENTER',
        metadata: null,
        text: '',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: {
          mediaResource: {
            id: '4af023a471e602a0f3f0a494df4ab962',
            iframeSrc: '',
            iframeHeight: 0,
            iframeWidth: 0,
            title: 'node-prisma-products',
            __typename: 'MediaResource'
          },
          __typename: 'Iframe'
        },
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_58',
        name: '8431',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Here is the final file of the schema.prisma. Run the migration:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 30,
            end: 43,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_59',
        name: '19ae',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'yarn prisma migrate dev --name create-products-table',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_60',
        name: '359b',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Working with Prisma client',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_61',
        name: 'cbd9',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Now we have our database schema created. We will use Prisma client to store data and retrieve them. Run the command below to install:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_62',
        name: '26bd',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'yarn add @prisma/client',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 9,
            end: 23,
            href: 'http://twitter.com/prisma/client',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_63',
        name: 'e6fa',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Note: If you ran yarn prisma migrate before running this command, the Prisma client is already installed because it is required when generating the migration.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'CODE',
            start: 17,
            end: 36,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 0,
            end: 5,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_64',
        name: '295a',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Seeding database',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_65',
        name: 'b0f2',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'We want to add categories and tags before we launch the application to have predefined values. To do that, we need to seed the database with these data. Let’s create a file seed.ts inside the folder prisma and add the code below:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 173,
            end: 180,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 199,
            end: 205,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_66',
        name: '24ac',
        type: 'IFRAME',
        href: null,
        layout: 'INSET_CENTER',
        metadata: null,
        text: '',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: {
          mediaResource: {
            id: '8a3003f96169f36ed0c40b58f57bdac1',
            iframeSrc: '',
            iframeHeight: 0,
            iframeWidth: 0,
            title: 'node-prisma-seed.ts',
            __typename: 'MediaResource'
          },
          __typename: 'Iframe'
        },
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_67',
        name: 'a31a',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Run the command below to seed the database and verify the data inserted:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_68',
        name: 'a50f',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'yarn prisma db seed --preview-feature',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_69',
        name: 'ad37',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Note1: The property skipDuplicates prevents the insertion of data if they already exist. It is useful when you update the script with new data to be inserted and re-run it.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'CODE',
            start: 20,
            end: 34,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 0,
            end: 6,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_70',
        name: '5427',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Note2: The flag “preview-feature” is required because this feature is still in testing.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 0,
            end: 6,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 16,
            end: 33,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_71',
        name: '7cc1',
        type: 'BQ',
        href: null,
        layout: null,
        metadata: null,
        text: 'Update 2022: Database seed is no longer in preview so, no need to add the flag --preview-feature',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 0,
            end: 12,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 0,
            end: 81,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_72',
        name: '215c',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Insert data',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_73',
        name: '9f5b',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Inserting data is pretty straightforward with the Prisma client. Create a file insert-data.ts inside the src folder and add the code below:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 79,
            end: 93,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 105,
            end: 108,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_74',
        name: 'd1dd',
        type: 'IFRAME',
        href: null,
        layout: 'INSET_CENTER',
        metadata: null,
        text: '',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: {
          mediaResource: {
            id: 'ba9ac6301a51d37f6440426b704c02a5',
            iframeSrc: '',
            iframeHeight: 0,
            iframeWidth: 0,
            title: 'node-prisma-insert-data.ts',
            __typename: 'MediaResource'
          },
          __typename: 'Iframe'
        },
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_75',
        name: '41d6',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Run the file with the command ts-node src/insert-data and see the output.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'CODE',
            start: 30,
            end: 53,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_76',
        name: 'dc6b',
        type: 'IMG',
        href: null,
        layout: 'INSET_CENTER',
        metadata: {
          id: '1*0KY7oTp3yNXvBYTA6OOY-Q.png',
          originalHeight: 1392,
          originalWidth: 1648,
          focusPercentX: null,
          focusPercentY: null,
          alt: null,
          __typename: 'ImageMetadata'
        },
        text: 'Insert data with Prisma',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_77',
        name: '427f',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Note: the property reference in the product has a value, yet we didn’t provide one when inserting the data. It is because we defined it as auto-generated with a random UUID. Check out the Prisma schema to see it.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 0,
            end: 5,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 19,
            end: 28,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_78',
        name: 'dfbe',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Update data',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_79',
        name: '37fc',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Create a file update-data.ts inside the src folder and add the code below:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 14,
            end: 28,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 40,
            end: 43,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_80',
        name: 'e219',
        type: 'IFRAME',
        href: null,
        layout: 'INSET_CENTER',
        metadata: null,
        text: '',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: {
          mediaResource: {
            id: '457c0bbbde34f08524fe94e7ff8d2822',
            iframeSrc: '',
            iframeHeight: 0,
            iframeWidth: 0,
            title: 'node-prisma-update-data.ts',
            __typename: 'MediaResource'
          },
          __typename: 'Iframe'
        },
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_81',
        name: 'f544',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Run the file with the command ts-node src/update-data.ts and see the output.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'CODE',
            start: 30,
            end: 56,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_82',
        name: 'c7ec',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Delete data',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_83',
        name: 'aeb7',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Create a file delete-data.ts inside the src folder and add the code below:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 14,
            end: 28,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 40,
            end: 43,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_84',
        name: '83af',
        type: 'IFRAME',
        href: null,
        layout: 'INSET_CENTER',
        metadata: null,
        text: '',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: {
          mediaResource: {
            id: '0465152522335731fd9bd77d0d524107',
            iframeSrc: '',
            iframeHeight: 0,
            iframeWidth: 0,
            title: 'node-prisma-delete-data.ts',
            __typename: 'MediaResource'
          },
          __typename: 'Iframe'
        },
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_85',
        name: '0a0f',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Run the file with the command ts-node src/delete-data.ts and see the output.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'CODE',
            start: 30,
            end: 56,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_86',
        name: '1a37',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Retrieve data',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_87',
        name: 'a53b',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Create a file retrieve-data.ts inside the src folder and add the code below:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 14,
            end: 30,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 42,
            end: 45,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_88',
        name: 'cf4e',
        type: 'IFRAME',
        href: null,
        layout: 'INSET_CENTER',
        metadata: null,
        text: '',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: {
          mediaResource: {
            id: '36082011cafdc4fab5ba63ff79e9b0f6',
            iframeSrc: '',
            iframeHeight: 0,
            iframeWidth: 0,
            title: 'node-prisma-retrieve-data.ts',
            __typename: 'MediaResource'
          },
          __typename: 'Iframe'
        },
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_89',
        name: '072b',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Run the file with the command ts-node src/retrieve-data.ts and see the output.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'CODE',
            start: 30,
            end: 58,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_90',
        name: '623e',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Conclusion',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_91',
        name: '016a',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'We reached the end of this tutorial, where we have seen how to use Prisma with a MySQL database. Here are some important key points:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_92',
        name: '78bc',
        type: 'ULI',
        href: null,
        layout: null,
        metadata: null,
        text: 'The Prisma Schema removes the need to create a class to map our database.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_93',
        name: '70a2',
        type: 'ULI',
        href: null,
        layout: null,
        metadata: null,
        text: 'It provides database versioning through migration.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_94',
        name: '4ecc',
        type: 'ULI',
        href: null,
        layout: null,
        metadata: null,
        text: 'The Prisma client auto-generated from the schema has a good API and provides autocompletion which is essential for productivity.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_95',
        name: '72e7',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'There are many capabilities I didn’t cover, and I highly recommend checking out the Prisma documentation, which I found very well written.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 84,
            end: 104,
            href: 'https://www.prisma.io/docs/concepts',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_96',
        name: 'f60b',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Find the source code on the GitHub repository.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 28,
            end: 45,
            href: 'https://github.com/tericcabrel/blog-tutorials/tree/main/node-prisma-mysql',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_97',
        name: '8748',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'This post was originally published on my blog https://blog.tericcabrel.com where I write about building the Backend applications.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 46,
            end: 74,
            href: 'https://blog.tericcabrel.com',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_98',
        name: '79d6',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Please, follow me on Twitter or subscribe to my newsletter to get notified when I publish a new post.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 21,
            end: 28,
            href: 'https://twitter.com/intent/user?screen_name=tericcabrel',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'A',
            start: 45,
            end: 58,
            href: 'https://newsletter.tericcabrel.com/',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: 'e952669ebf51_99',
        name: '8329',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Happy to see you soon 😉',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      }
    ]
  }

  const mapping: any = {
    P: 'paragraph',
    H3: 'header',
    IFRAME: 'embed',
    H2: 'header',
    H1: 'header',
    ULI: 'list',
    OLI: 'list',
    IMG: 'image',
    CODE: 'code',
    H4: 'header',
    H5: 'header',
    H6: 'header'
  }
  function applyMarkups(text: string, markups: any[]) {
    let result = text
    let offset = 0

    markups.sort((a, b) => a.start - b.start) // Sort markups by start index

    for (const markup of markups) {
      const start = markup.start + offset
      const end = markup.end + offset

      if (markup.type === 'A') {
        result =
          result.substring(0, start) +
          `<a href="${markup.href}">` +
          result.substring(start, end) +
          `</a>` +
          result.substring(end)
        offset += `<a href="${markup.href}"></a>`.length
      } else if (markup.type === 'STRONG') {
        result =
          result.substring(0, start) +
          `<strong>` +
          result.substring(start, end) +
          `</strong>` +
          result.substring(end)
        offset += `<strong></strong>`.length
      }
    }

    return result
  }

  function convertToEditorJSData(data: any) {
    const result: any = {
      time: Date.now(),
      blocks: []
    }

    let lists: { type: string; items: string[] }[] = []

    for (const item of data) {
      if (item.type === 'ULI' || item.type === 'OLI') {
        const listType = item.type === 'ULI' ? 'unordered' : 'ordered'
        const listItemText = applyMarkups(item.text, item.markups)
        const listIndex = lists.findIndex(list => list.type === listType)

        if (listIndex !== -1) {
          // Add item to existing list
          lists[listIndex].items.push(listItemText)
        } else {
          // Create new list
          lists.push({ type: listType, items: [listItemText] })
        }
      } else {
        // Add previous lists
        if (lists.length > 0) {
          for (const list of lists) {
            result.blocks.push({
              type: 'list',
              data: {
                style: list.type,
                items: list.items.map(itemText =>
                  applyMarkups(itemText, item.markups)
                )
              }
            })
          }
          lists = []
        }

        const block: any = {
          type: mapping[item.type],
          data: {
            text: applyMarkups(item.text, item.markups)
          }
        }

        if (block.type === 'header') {
          block.data.level = parseInt(item.type.charAt(1))
        }

        if (block.type === 'image') {
          block.data.file = { url: item.metadata.id }
          block.data.caption = applyMarkups(item.text, item.markups)
          block.data.withBorder = false
          block.data.withBackground = false
          block.data.stretched = true
        }

        result.blocks.push(block)
      }
    }

    // Add final lists
    for (const list of lists) {
      result.blocks.push({
        type: 'list',
        data: {
          style: list.type,
          items: list.items.map(itemText =>
            applyMarkups(itemText, data[data.length - 1].markups)
          )
        }
      })
    }

    return result
  }

  return new Response(JSON.stringify(convertToEditorJSData(data.paragraphs)))
}
