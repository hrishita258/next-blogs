import BlogRenderer from '@/app/Components/Blocks/BlogRenderer'

const Blogs = () => {
  return (
    <div className="relative">
      <div className="wp-block-group container">
        <div className="wp-block-group__inner-container">
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-8 col-span-12">
              <BlogRenderer
                key={'hh'}
                data={{
                  time: 1647331200000,
                  blocks: [
                    {
                      type: 'header',
                      data: {
                        text: 'Building a Simple Blog App with Next.js, Prisma, and TypeScript',
                        level: 1
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: "In this tutorial, we'll build a simple blog app with Next.js, Prisma, and TypeScript. The app will allow users to create, read, update, and delete blog posts."
                      }
                    },
                    {
                      type: 'header',
                      data: {
                        text: 'Getting Started',
                        level: 2
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'Before we start building the app, make sure you have the following installed on your computer:'
                      }
                    },
                    {
                      type: 'list',
                      data: {
                        style: 'unordered',
                        items: [
                          'Node.js (version 14 or higher)',
                          'npm (version 7 or higher)',
                          'Next.js (version 11 or higher)',
                          'Prisma (version 3 or higher)'
                        ]
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'Once you have these installed, you can create a new Next.js app with the following command:'
                      }
                    },
                    {
                      type: 'code',
                      data: {
                        code: 'npx create-next-app my-blog-app --typescript'
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'This will create a new Next.js app with TypeScript support.'
                      }
                    },
                    {
                      type: 'header',
                      data: {
                        text: 'Setting up Prisma',
                        level: 2
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: "Prisma is a tool that allows us to easily work with databases in a type-safe way. We'll use Prisma to create and manage our blog posts."
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'To set up Prisma, first install the Prisma CLI with the following command:'
                      }
                    },
                    {
                      type: 'code',
                      data: {
                        code: 'npm install prisma --save-dev'
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'Next, create a new file called `schema.prisma` in the root of your project with the following content:'
                      }
                    },
                    {
                      type: 'code',
                      data: {
                        code: 'datasource db {\n  provider = "postgresql"\n  url = env("DATABASE_URL")\n}\n\nmodel Post {\n  id        Int      @id @default(autoincrement())\n  title     String\n  content   String\n  createdAt DateTime @default(now())\n}'
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'This file defines our database schema. It creates a `Post` model with `id`, `title`, `content`, and `createdAt` fields.'
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'Once we have our schema defined, we need to generate our Prisma client to interact with our database. We can do this by running the following command in our terminal:'
                      }
                    },
                    {
                      type: 'code',
                      data: {
                        code: 'npx prisma generate',
                        language: 'bash'
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'This will create a node_modules/@prisma/client directory in our project, which contains the generated Prisma client code.'
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: "Now that our Prisma client is generated, we can use it to interact with our database. Let's create a simple API endpoint in our Next.js app to retrieve all posts from the database."
                      }
                    },
                    {
                      type: 'code',
                      data: {
                        code: "import { PrismaClient } from '@prisma/client';\n\nconst prisma = new PrismaClient();\n\nexport default async function handler(req, res) {\n const posts = await prisma.post.findMany();\n res.status(200).json(posts);\n}",
                        language: 'javascript'
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'In this code, we first import the PrismaClient from the @prisma/client package. We then create a new instance of the PrismaClient, which we can use to interact with our database.'
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'Our API endpoint is a simple async function that retrieves all posts from the database using the findMany() method on the post model in our Prisma client. We then return the posts as JSON in the response.'
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: "Now that we have an API endpoint to retrieve posts, let's create a page in our Next.js app to display them."
                      }
                    },
                    {
                      type: 'code',
                      data: {
                        code: "import { GetServerSideProps } from 'next';\nimport { PrismaClient } from '@prisma/client';\n\nconst prisma = new PrismaClient();\n\nexport const getServerSideProps: GetServerSideProps = async () => {\n const posts = await prisma.post.findMany();\n return {\n props: {\n posts,\n },\n };\n};\n\nexport default function PostsPage({ posts }) {\n return (\n <div>\n {posts.map(post => (\n <div key={post.id}>\n <h2>{post.title}</h2>\n <p>{post.content}</p>\n </div>\n ))}\n </div>\n );\n}",
                        language: 'javascript'
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'In this code, we first import the GetServerSideProps type from Next.js and the PrismaClient from the @prisma/client package. We then create a new instance of the PrismaClient.'
                      }
                    },
                    {
                      type: 'code',
                      data: {
                        code: "import { GetServerSideProps } from 'next'\nimport { PrismaClient } from '@prisma/client'\n\nconst prisma = new PrismaClient()\n",
                        language: 'javascript'
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'Next, we define the getServerSideProps function. This function is called on the server-side and is used to fetch data that is required for the page. In this case, we fetch all the posts from the database using the prisma.post.findMany method.'
                      }
                    },
                    {
                      type: 'code',
                      data: {
                        code: "export const getServerSideProps: GetServerSideProps = async () => {\n const posts = await prisma.post.findMany({\n orderBy: {\n createdAt: 'desc'\n }\n })\n\n return {\n props: {\n posts\n }\n }\n}\n",
                        language: 'javascript'
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'Finally, we export the HomePage component which renders the list of posts. We map over the posts array and render each post title and content in a div element.'
                      }
                    },
                    {
                      type: 'code',
                      data: {
                        code: 'interface Props {\n posts: {\n id: number,\n title: string,\n content: string,\n createdAt: Date\n }[]\n}\n\nexport default function HomePage({ posts }: Props) {\n return (\n <div>\n {posts.map(post => (\n <div key={post.id}>\n <h2>{post.title}</h2>\n <p>{post.content}</p>\n </div>\n ))}\n </div>\n )\n}\n',
                        language: 'jsx'
                      }
                    },
                    {
                      type: 'paragraph',
                      data: {
                        text: 'In conclusion, we have built a simple blog app using Next.js, Prisma, and TypeScript. We learned how to set up the project, create a database schema using Prisma, and define server-side rendering using GetServerSideProps in Next.js. We also explored how to create a new blog post, retrieve blog posts from the database, and display them on the home page. With this foundation, you can build upon this app to add more features such as authentication, pagination, and searching. I hope this blog helped you get started with building your own blog app. Happy coding!'
                      }
                    }
                  ]
                }}
              />
            </div>
            <div className="lg:col-span-4 border-l p-9 pt-0 hidden lg:block">
              <aside className="sticky top-[80px] self-start w-full"></aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Blogs
