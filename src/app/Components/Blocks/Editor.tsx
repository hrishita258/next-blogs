'use client'

import EditorJS from '@editorjs/editorjs'

import * as React from 'react'

interface EditorProps {
  initialValue?: string
  onChange?: (value: string) => void
}

// const post = {
//   time: 1647331200000,
//   blocks: [
//     {
//       type: 'header',
//       data: {
//         text: 'Building a Simple Blog App with Next.js, Prisma, and TypeScript',
//         level: 1
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: "In this tutorial, we'll build a simple blog app with Next.js, Prisma, and TypeScript. The app will allow users to create, read, update, and delete blog posts."
//       }
//     },
//     {
//       type: 'header',
//       data: {
//         text: 'Getting Started',
//         level: 2
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'Before we start building the app, make sure you have the following installed on your computer:'
//       }
//     },
//     {
//       type: 'list',
//       data: {
//         style: 'unordered',
//         items: [
//           'Node.js (version 14 or higher)',
//           'npm (version 7 or higher)',
//           'Next.js (version 11 or higher)',
//           'Prisma (version 3 or higher)'
//         ]
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'Once you have these installed, you can create a new Next.js app with the following command:'
//       }
//     },
//     {
//       type: 'code',
//       data: {
//         code: 'npx create-next-app my-blog-app --typescript'
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'This will create a new Next.js app with TypeScript support.'
//       }
//     },
//     {
//       type: 'header',
//       data: {
//         text: 'Setting up Prisma',
//         level: 2
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: "Prisma is a tool that allows us to easily work with databases in a type-safe way. We'll use Prisma to create and manage our blog posts."
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'To set up Prisma, first install the Prisma CLI with the following command:'
//       }
//     },
//     {
//       type: 'code',
//       data: {
//         code: 'npm install prisma --save-dev'
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'Next, create a new file called `schema.prisma` in the root of your project with the following content:'
//       }
//     },
//     {
//       type: 'code',
//       data: {
//         code: 'datasource db {\n  provider = "postgresql"\n  url = env("DATABASE_URL")\n}\n\nmodel Post {\n  id        Int      @id @default(autoincrement())\n  title     String\n  content   String\n  createdAt DateTime @default(now())\n}'
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'This file defines our database schema. It creates a `Post` model with `id`, `title`, `content`, and `createdAt` fields.'
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'Once we have our schema defined, we need to generate our Prisma client to interact with our database. We can do this by running the following command in our terminal:'
//       }
//     },
//     {
//       type: 'code',
//       data: {
//         code: 'npx prisma generate',
//         language: 'bash'
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'This will create a node_modules/@prisma/client directory in our project, which contains the generated Prisma client code.'
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: "Now that our Prisma client is generated, we can use it to interact with our database. Let's create a simple API endpoint in our Next.js app to retrieve all posts from the database."
//       }
//     },
//     {
//       type: 'code',
//       data: {
//         code: "import { PrismaClient } from '@prisma/client';\n\nconst prisma = new PrismaClient();\n\nexport default async function handler(req, res) {\n const posts = await prisma.post.findMany();\n res.status(200).json(posts);\n}",
//         language: 'javascript'
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'In this code, we first import the PrismaClient from the @prisma/client package. We then create a new instance of the PrismaClient, which we can use to interact with our database.'
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'Our API endpoint is a simple async function that retrieves all posts from the database using the findMany() method on the post model in our Prisma client. We then return the posts as JSON in the response.'
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: "Now that we have an API endpoint to retrieve posts, let's create a page in our Next.js app to display them."
//       }
//     },
//     {
//       type: 'code',
//       data: {
//         code: "import { GetServerSideProps } from 'next';\nimport { PrismaClient } from '@prisma/client';\n\nconst prisma = new PrismaClient();\n\nexport const getServerSideProps: GetServerSideProps = async () => {\n const posts = await prisma.post.findMany();\n return {\n props: {\n posts,\n },\n };\n};\n\nexport default function PostsPage({ posts }) {\n return (\n <div>\n {posts.map(post => (\n <div key={post.id}>\n <h2>{post.title}</h2>\n <p>{post.content}</p>\n </div>\n ))}\n </div>\n );\n}",
//         language: 'javascript'
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'In this code, we first import the GetServerSideProps type from Next.js and the PrismaClient from the @prisma/client package. We then create a new instance of the PrismaClient.'
//       }
//     },
//     {
//       type: 'code',
//       data: {
//         code: "import { GetServerSideProps } from 'next'\nimport { PrismaClient } from '@prisma/client'\n\nconst prisma = new PrismaClient()\n",
//         language: 'javascript'
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'Next, we define the getServerSideProps function. This function is called on the server-side and is used to fetch data that is required for the page. In this case, we fetch all the posts from the database using the prisma.post.findMany method.'
//       }
//     },
//     {
//       type: 'code',
//       data: {
//         code: "export const getServerSideProps: GetServerSideProps = async () => {\n const posts = await prisma.post.findMany({\n orderBy: {\n createdAt: 'desc'\n }\n })\n\n return {\n props: {\n posts\n }\n }\n}\n",
//         language: 'javascript'
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'Finally, we export the HomePage component which renders the list of posts. We map over the posts array and render each post title and content in a div element.'
//       }
//     },
//     {
//       type: 'code',
//       data: {
//         code: 'interface Props {\n posts: {\n id: number,\n title: string,\n content: string,\n createdAt: Date\n }[]\n}\n\nexport default function HomePage({ posts }: Props) {\n return (\n <div>\n {posts.map(post => (\n <div key={post.id}>\n <h2>{post.title}</h2>\n <p>{post.content}</p>\n </div>\n ))}\n </div>\n )\n}\n',
//         language: 'jsx'
//       }
//     },
//     {
//       type: 'paragraph',
//       data: {
//         text: 'In conclusion, we have built a simple blog app using Next.js, Prisma, and TypeScript. We learned how to set up the project, create a database schema using Prisma, and define server-side rendering using GetServerSideProps in Next.js. We also explored how to create a new blog post, retrieve blog posts from the database, and display them on the home page. With this foundation, you can build upon this app to add more features such as authentication, pagination, and searching. I hope this blog helped you get started with building your own blog app. Happy coding!'
//       }
//     }
//   ]
// }

const post = {
  time: 1678907890432,
  blocks: [
    {
      type: 'header',
      data: {
        text: 'Using Prisma ORM to build a Node.js application with MySQL',
        level: 3
      }
    },
    {
      type: 'image',
      data: {
        text: 'Photo by <a href="https://unsplash.com/@sharonmccutcheon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sharon McCutcheon</a> on <a href="https://unsplash.com/s/photos/prism?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        file: { url: '1*Ws3eWfzfq2F_7R65mKCunQ.jpeg' },
        caption:
          'Photo by <a href="https://unsplash.com/@sharonmccutcheon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sharon McCutcheon</a> on <a href="https://unsplash.com/s/photos/prism?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        withBorder: false,
        withBackground: false,
        stretched: true
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Productivity is important for developers, and when it comes to building an application that interacts database, there is CRUD (Create, Read, Update, Delete) actions that are repetitive; this task can be boring for those who already know SQL and want to focus on the business logic. \nMoreover, the SQL written can be exposed to SQL injection if we don’t pay attention. Another issue is when you want to change the database, you are obliged to rewrite your SQL queries for the target database. These are problems <a href="https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping">ORM</a>s try to solve.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'There are many ORM in the Node.js ecosystems, and today, we will focus on <a href="https://www.prisma.io/">Prisma</a>, which is one of the best of the class.'
      }
    },
    { type: 'header', data: { text: 'Prisma features', level: 3 } },
    {
      type: 'paragraph',
      data: {
        text: 'Prisma provides features other ORMs in a different way. Database migration and Typescript support are interesting features. Prisma also provides tools to follow who throughout the development lifecycle. Check this <a href="https://www.prisma.io/docs/concepts/overview/why-prisma">link</a> to know more about it.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'When I write this, Prisma supports MySQL, PostgresSQL, Microsoft SQL Server, and MongoDB. Check out this <a href="https://www<strong>.prisma.io/docs/reference/database-reference/supporte</strong>d-databases">link</a> to see the database version supported.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'About programming language, only Javascript and Typescript are supported. A Prisma client for GoLand is available in early access.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'With Prisma, you define the schema of your database using the Prisma Schema Language (PSL). This schema is used to generate the code related to Database Access Layer and also migrations every time you update the schema:'
      }
    },
    {
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          '<a href="https://www.prisma.io/docs/concepts/components/prisma-client/">Pris<strong>ma Client</a></strong>: Auto-generated and type-safe database client for use in your application.',
          '<a href="https://www.prisma.io/docs/concepts/components/prisma-migrate/">Pris<strong>ma Migrate</a></strong>: A declarative data modeling and migration tool.',
          '<a href="https://www.prisma.io/docs/concepts/components/prisma-studio/">Pris<strong>ma Studio</a></strong>: A modern GUI for browsing and managing data in your database.'
        ]
      }
    },
    { type: 'header', data: { text: 'Prerequisites', level: 3 } },
    {
      type: 'paragraph',
      data: { text: 'To follow this tutorial, you need to have' }
    },
    {
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          'Node.js >= 12.2',
          'Typescript >= 4.1',
          'Yarn >= 1.19.2',
          'MySQL >= 5.6 follow <a href="https://www.prisma.io/dataguide/mysql/setting-up-a-local-mysql-database">this tutorial</a> to install on your computer, or if you have Docker, launch a Docker container for MySQL 8 with this command.'
        ]
      }
    },
    {
      data: {
        text: 'docker run -it -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=hotels --name prisma_db -p 3307:3306 mysql:8.0'
      }
    },
    { type: 'header', data: { text: 'What we build', level: 3 } },
    {
      type: 'paragraph',
      data: {
        text: 'To see Prisma in action, we are going to build a minimal product inventory system.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'A product belongs to a category and can have many tags. Here is the database schema draw <a href="https://drawsql.app/teco/diagrams/product-inventory">drawSQL</a>. We will use Prisma to create migrations then performs some CRUD.'
      }
    },
    {
      type: 'image',
      data: {
        text: 'Database schema to build with Prisma',
        file: { url: '1*3nWw3npZ9GbzXKtwtaiKGA.png' },
        caption: 'Database schema to build with Prisma',
        withBorder: false,
        withBackground: false,
        stretched: true
      }
    },
    { type: 'header', data: { text: 'Setup the project', level: 3 } },
    {
      type: 'paragraph',
      data: {
        text: 'To start, we will use a boilerplate for the Node.js project we built on this <a href="https://blog.tericcabrel.com/set-up-a-nodejs-project-with-typescript-eslint-and-prettier/">tutorial</a>.'
      }
    },
    {
      data: {
        text: 'git clone <a href="https://github.com/tericcabrel/node-ts-starter.git">https://github.com/tericcabrel/node-ts-starter.git</a> node-prisma-mysql'
      }
    },
    { data: { text: 'cd node-prisma-mysql' } },
    { data: { text: 'yarn install' } },
    { data: { text: 'yarn start' } },
    {
      type: 'paragraph',
      data: {
        text: 'If everything works as expected, let’s continue by installing Prisma CLI.'
      }
    },
    { data: { text: 'yarn add -D prisma' } },
    {
      type: 'paragraph',
      data: {
        text: 'Run the command below to create the basic <a href="https://www.prisma.io/docs/concepts/components/prisma-schema/">Prisma schema</a>'
      }
    },
    { data: { text: 'yarn prisma init' } },
    { type: 'paragraph', data: { text: 'We got the output below:' } },
    {
      type: 'image',
      data: {
        text: 'Install and initialize Prisma',
        file: { url: '1*cj80zjJ_F0y-LAkaR8m6jQ.png' },
        caption: 'Install and initialize Prisma',
        withBorder: false,
        withBackground: false,
        stretched: true
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'A folder named <strong>prisma</strong> was created, and inside there is a file named <strong>schema.prisma</strong> where we will write the definition of our database. Also, a file .env was created which contains the connection string to the database. Let’s update to match our local database.'
      }
    },
    {
      data: {
        text: 'DATABASE_URL="mysql://root:secret@localhost:3307/prisma_db"'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'This configuration matches with the MySQL instance running by Docker. I gave the command to launch this container upper.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Now, open the file schema.prisma and replace the property’s value called provider by <strong>mysql</strong> (actually <strong>postgresql</strong>).'
      }
    },
    {
      type: 'header',
      data: { text: 'Create Category and Tags table', level: 3 }
    },
    {
      type: 'paragraph',
      data: {
        text: 'We will use the Prisma Schema Language to write the structure of our table. Check out this <a href="https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference">link</a> to all the capabilities of the Schema Language since we can’t cover all of them.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'There is a plugin for PSL for some editors we can use for a better experience. Check out this <a href="https://www.prisma.io/docs/concepts/more/editor-setup">link</a> to find the instructions for your editor. I use the plugin for Webstorm.'
      }
    },
    {
      type: 'paragraph',
      data: { text: 'Open the file schema.prisma and the code below:' }
    },
    { type: 'embed', data: { text: '' } },
    {
      type: 'paragraph',
      data: {
        text: 'We create the model Category and Tag with their properties. But let’s explain what does<strong> @map</strong> and <strong>@@map</strong>.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Imagine when designing your database, you want to have the table’s name in plural and lowercase. <strong>@@map</strong> Map, the Category model to a database table named categories.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '<strong>@map</strong> does the same thing but for the table columns.'
      }
    },
    { type: 'header', data: { text: 'Run the migration', level: 3 } },
    {
      type: 'paragraph',
      data: { text: 'Run the command to create migration and execute' }
    },
    {
      data: {
        text: 'yarn prisma migrate dev --name create-categories-and-tags-table'
      }
    },
    { type: 'paragraph', data: { text: 'This command will do two things:' } },
    {
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          'Generate the migration for these tables (prisma generate is executed under the hood)',
          'Once the migration is generated, it will be executed.'
        ]
      }
    },
    {
      type: 'image',
      data: {
        text: 'Run migration with Prisma',
        file: { url: '1*zJ-oBR3QhV4nkq-UP3rENQ.png' },
        caption: 'Run migration with Prisma',
        withBorder: false,
        withBackground: false,
        stretched: true
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'A folder named migrations is created at the root of the project folder.'
      }
    },
    { type: 'header', data: { text: 'Create Products table', level: 3 } },
    {
      type: 'paragraph',
      data: {
        text: 'Open the file <strong>schema.prisma</strong> and add the code below:'
      }
    },
    { type: 'embed', data: { text: '' } },
    {
      type: 'paragraph',
      data: {
        text: 'Here is the final file of the <strong>schema.prisma</strong>. Run the migration:'
      }
    },
    { data: { text: 'yarn prisma migrate dev --name create-products-table' } },
    { type: 'header', data: { text: 'Working with Prisma client', level: 3 } },
    {
      type: 'paragraph',
      data: {
        text: 'Now we have our database schema created. We will use Prisma client to store data and retrieve them. Run the command below to install:'
      }
    },
    {
      data: {
        text: 'yarn add <a href="http://twitter.com/prisma/client">@prisma/client</a>'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '<strong>Note:</strong> If you ran yarn prisma migrate before running this command, the Prisma client is already installed because it is required when generating the migration.'
      }
    },
    { type: 'header', data: { text: 'Seeding database', level: 3 } },
    {
      type: 'paragraph',
      data: {
        text: 'We want to add categories and tags before we launch the application to have predefined values. To do that, we need to seed the database with these data. Let’s create a file <strong>seed.ts</strong> inside the folder <strong>prisma</strong> and add the code below:'
      }
    },
    { type: 'embed', data: { text: '' } },
    {
      type: 'paragraph',
      data: {
        text: 'Run the command below to seed the database and verify the data inserted:'
      }
    },
    { data: { text: 'yarn prisma db seed --preview-feature' } },
    {
      type: 'paragraph',
      data: {
        text: '<strong>Note1:</strong> The property skipDuplicates prevents the insertion of data if they already exist. It is useful when you update the script with new data to be inserted and re-run it.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '<strong>Note2:</strong> The flag <strong>“preview-feature”</strong> is required because this feature is still in testing.'
      }
    },
    {
      data: {
        text: '<strong>Update 2022:</strong> Database seed is no longer in preview so, no need to add the flag --preview-feature'
      }
    },
    { type: 'header', data: { text: 'Insert data', level: 3 } },
    {
      type: 'paragraph',
      data: {
        text: 'Inserting data is pretty straightforward with the Prisma client. Create a file <strong>insert-data.ts</strong> inside the <strong>src</strong> folder and add the code below:'
      }
    },
    { type: 'embed', data: { text: '' } },
    {
      type: 'paragraph',
      data: {
        text: 'Run the file with the command ts-node src/insert-data and see the output.'
      }
    },
    {
      type: 'image',
      data: {
        text: 'Insert data with Prisma',
        file: { url: '1*0KY7oTp3yNXvBYTA6OOY-Q.png' },
        caption: 'Insert data with Prisma',
        withBorder: false,
        withBackground: false,
        stretched: true
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '<strong>Note:</strong> the property <strong>reference</strong> in the product has a value, yet we didn’t provide one when inserting the data. It is because we defined it as auto-generated with a random UUID. Check out the Prisma schema to see it.'
      }
    },
    { type: 'header', data: { text: 'Update data', level: 3 } },
    {
      type: 'paragraph',
      data: {
        text: 'Create a file <strong>update-data.ts</strong> inside the <strong>src</strong> folder and add the code below:'
      }
    },
    { type: 'embed', data: { text: '' } },
    {
      type: 'paragraph',
      data: {
        text: 'Run the file with the command ts-node src/update-data.ts and see the output.'
      }
    },
    { type: 'header', data: { text: 'Delete data', level: 3 } },
    {
      type: 'paragraph',
      data: {
        text: 'Create a file <strong>delete-data.ts</strong> inside the <strong>src</strong> folder and add the code below:'
      }
    },
    { type: 'embed', data: { text: '' } },
    {
      type: 'paragraph',
      data: {
        text: 'Run the file with the command ts-node src/delete-data.ts and see the output.'
      }
    },
    { type: 'header', data: { text: 'Retrieve data', level: 3 } },
    {
      type: 'paragraph',
      data: {
        text: 'Create a file <strong>retrieve-data.ts</strong> inside the <strong>src</strong> folder and add the code below:'
      }
    },
    { type: 'embed', data: { text: '' } },
    {
      type: 'paragraph',
      data: {
        text: 'Run the file with the command ts-node src/retrieve-data.ts and see the output.'
      }
    },
    { type: 'header', data: { text: 'Conclusion', level: 3 } },
    {
      type: 'paragraph',
      data: {
        text: 'We reached the end of this tutorial, where we have seen how to use Prisma with a MySQL database. Here are some important key points:'
      }
    },
    {
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          'The Prisma Schema removes the need to create a class to map our database.<a href="https://www.prisma.io/docs/concepts"></a>',
          'It provides database versioning through migration.<a href="https://www.prisma.io/docs/concepts"></a>',
          'The Prisma client auto-generated from the schema has a good API and provides autocom<a href="https://www.prisma.io/docs/concepts">pletion which is ess</a>ential for productivity.'
        ]
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'There are many capabilities I didn’t cover, and I highly recommend checking out the <a href="https://www.prisma.io/docs/concepts">Prisma documentation</a>, which I found very well written.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Find the source code on the <a href="https://github.com/tericcabrel/blog-tutorials/tree/main/node-prisma-mysql">GitHub repository</a>.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'This post was originally published on my blog <a href="https://blog.tericcabrel.com">https://blog.tericcabrel.com</a> where I write about building the Backend applications.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Please, follow me on <a href="https://twitter.com/intent/user?screen_name=tericcabrel">Twitter</a> or subscribe to <a href="https://newsletter.tericcabrel.com/">my newsletter</a> to get notified when I publish a new post.'
      }
    },
    { type: 'paragraph', data: { text: 'Happy to see you soon 😉' } }
  ]
}

const Editor: React.FC<EditorProps> = ({ initialValue, onChange }) => {
  const editorRef = React.useRef<EditorJS>()

  React.useEffect(() => {
    editorRef.current = new EditorJS({
      holder: 'editor',
      placeholder: 'Type something here...',
      onChange: () => {
        editorRef?.current?.save().then(outputData => {
          console.log(outputData?.blocks)
          if (onChange) {
            onChange(
              outputData?.blocks.map(block => block.data.text).join('\n')
            )
          }
        })
      },
      // data: {
      //   blocks: [
      //     {
      //       type: 'header',
      //       data: {
      //         text: 'File Upload in Next.js: Best Ways',
      //         level: 1
      //       }
      //     },
      //     {
      //       type: 'paragraph',
      //       data: {
      //         text: "Next.js is a popular framework for building React applications. One common requirement for many web applications is the ability to upload files. In this article, we'll explore the best ways to implement file uploads in Next.js."
      //       }
      //     },
      //     {
      //       type: 'delimiter',
      //       data: {}
      //     },
      //     {
      //       type: 'header',
      //       data: {
      //         text: '1. Using a Third-Party Package',
      //         level: 2
      //       }
      //     },
      //     {
      //       type: 'paragraph',
      //       data: {
      //         text: 'The simplest way to handle file uploads in Next.js is to use a third-party package. One popular package for this is multer, which is a middleware for handling multipart/form-data.'
      //       }
      //     },
      //     {
      //       type: 'paragraph',
      //       data: {
      //         text: 'To use multer in Next.js, you can install it using npm or yarn:'
      //       }
      //     },
      //     {
      //       type: 'code',
      //       data: {
      //         code: 'npm install multer\n\n# or\n\nyarn add multer',
      //         language: 'bash'
      //       }
      //     },
      //     {
      //       type: 'paragraph',
      //       data: {
      //         text: "Then, you can create an API route in Next.js that uses multer to handle file uploads. Here's an example:"
      //       }
      //     },
      //     {
      //       type: 'code',
      //       data: {
      //         code: "import multer from 'multer'\nimport { NextApiRequest, NextApiResponse } from 'next'\n\nconst upload = multer({ dest: 'uploads/' })\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n  upload.single('file')(req, res, err => {\n    if (err) {\n      res.status(500).send(err)\n    } else {\n      const { file } = req\n      res.status(200).json({ file })\n    }\n  })\n}",
      //         language: 'typescript'
      //       }
      //     },
      //     {
      //       type: 'paragraph',
      //       data: {
      //         text: "This API route uses multer to handle file uploads. The uploaded file is stored in the 'uploads/' directory, and the file object is returned in the response. You can then use this file object to do whatever you need with the uploaded file."
      //       }
      //     },
      //     {
      //       type: 'delimiter',
      //       data: {}
      //     },
      //     {
      //       type: 'header',
      //       data: {
      //         text: '2. Using a Cloud Storage Service',
      //         level: 2
      //       }
      //     },
      //     {
      //       type: 'paragraph',
      //       data: {
      //         text: "If you're not comfortable hosting files on your own server, or if you don't have a server, you can use a cloud storage service instead. There are many cloud storage services available, such as Amazon S3, Google Cloud Storage, and Microsoft Azure Storage. These services allow you to upload files to their servers and then access them from anywhere in the world using an internet connection."
      //       }
      //     },
      //     {
      //       type: 'paragraph',
      //       data: {
      //         text: "To use a cloud storage service, you'll need to sign up for an account with the service of your choice and then follow their instructions for uploading and accessing files. Many cloud storage services offer free tiers with limited storage and features, as well as paid plans with more storage and advanced features."
      //       }
      //     },
      //     {
      //       type: 'paragraph',
      //       data: {
      //         text: "When using a cloud storage service, it's important to consider the security and privacy of your files. Make sure you choose a reputable service with strong security measures in place, and consider encrypting your files before uploading them to the cloud."
      //       }
      //     },
      //     {
      //       type: 'paragraph',
      //       data: {
      //         text: "Now that we've covered some of the on-premise solutions for file uploading, let's take a look at cloud-based solutions. Cloud-based file upload services have become increasingly popular over the past few years, and for good reason. They offer a number of benefits, including:"
      //       }
      //     },
      //     {
      //       type: 'list',
      //       data: {
      //         style: 'unordered',
      //         items: [
      //           'Scalability: Cloud services are designed to handle large amounts of data and can easily scale up or down depending on your needs.',
      //           'Accessibility: Cloud services can be accessed from anywhere with an internet connection, making it easy to collaborate with team members and clients from around the world.',
      //           'Reliability: Cloud services are typically hosted on redundant servers, meaning that even if one server fails, your data will still be safe and accessible.',
      //           'Cost-effectiveness: Cloud services can often be more cost-effective than on-premise solutions, as you only pay for the resources you use.'
      //         ]
      //       }
      //     },
      //     {
      //       type: 'paragraph',
      //       data: {
      //         text: 'There are a number of cloud-based file upload services available, each with its own strengths and weaknesses. Some of the most popular options include:'
      //       }
      //     },
      //     {
      //       type: 'list',
      //       data: {
      //         style: 'unordered',
      //         items: [
      //           'Amazon S3: A scalable and cost-effective object storage service that can be used to store and retrieve any amount of data.',
      //           'Google Cloud Storage: A secure and durable object storage service that is designed for high durability, availability, and scalability.',
      //           'Microsoft Azure Blob Storage: A fully-managed service for storing large amounts of unstructured data, such as text or binary data.',
      //           'Dropbox API: A flexible and powerful API that allows you to integrate Dropbox into your application and provide users with the ability to upload and access files.'
      //         ]
      //       }
      //     },
      //     {
      //       type: 'paragraph',
      //       data: {
      //         text: "Each of these services has its own set of features and pricing options, so it's important to carefully evaluate your needs before choosing a solution. Regardless of which service you choose, there are a few best practices to keep in mind when using cloud-based file upload services:"
      //       }
      //     },
      //     {
      //       type: 'list',
      //       data: {
      //         style: 'ordered',
      //         items: [
      //           'Ensure that your data is encrypted both in transit and at rest.',
      //           'Set up access controls to ensure that only authorized users can access your data.',
      //           'Use a content delivery network (CDN) to ensure that your files are delivered quickly and reliably to users around the world.',
      //           'Regularly back up your data to ensure that you can recover it in the event of a disaster.'
      //         ]
      //       }
      //     },
      //     {
      //       type: 'paragraph',
      //       data: {
      //         text: 'By following these best practices, you can ensure that your files are secure, accessible, and reliable, no matter where they are stored.'
      //       }
      //     }
      //   ]
      // },
      data: post,
      tools: {
        header: {
          class: require('@editorjs/header'),
          config: {
            placeholder: 'Enter a heading...',
            levels: [1, 2, 3, 4],
            defaultLevel: 2
          }
        },
        list: {
          class: require('@editorjs/list'),
          inlineToolbar: true
        },
        code: require('@calumk/editorjs-codeflask'),
        quote: {
          class: require('@editorjs/quote'),
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: "Quote's author"
          }
        },
        warning: {
          class: require('@editorjs/warning'),
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+W',
          config: {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message'
          }
        },
        delimiter: {
          class: require('@editorjs/delimiter'),
          inlineToolbar: true
        },
        inlineCode: {
          class: require('@editorjs/inline-code'),
          shortcut: 'CMD+SHIFT+C'
        },
        linkTool: {
          class: require('@editorjs/link'),
          config: {
            endpoint: 'http://localhost:3000/api/links/fetch'
          }
        },
        image: {
          class: require('@editorjs/image'),
          config: {
            uploader: {
              uploadByFile(file: File) {
                const formData = new FormData()
                formData.append('image', file)

                return fetch('http://localhost:3000/api/images/upload', {
                  method: 'POST',
                  body: formData
                })
                  .then(response => response.json())
                  .then(data => {
                    return {
                      success: 1,
                      file: {
                        url: data.url
                      }
                    }
                  })
                  .catch(() => {
                    return {
                      success: 0,
                      message: 'Image upload failed'
                    }
                  })
              },
              uploadByUrl(url: string) {}
            }
          }
        },
        embed: {
          class: require('@editorjs/embed'),
          config: {
            services: {
              youtube: true,
              coub: true,
              codepen: true,
              instagram: true,
              twitter: true,
              facebook: true,
              vk: true,
              twitch: true
            }
          }
        }
      }
    })

    return () => {
      editorRef?.current?.destroy()
    }
  }, [initialValue, onChange])

  return <div id="editor" className="prose" />
}

export default Editor
