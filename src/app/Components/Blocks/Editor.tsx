'use client'

import EditorJS from '@editorjs/editorjs'

import * as React from 'react'

interface EditorProps {
  initialValue?: string
  onChange?: (value: string) => void
}

const post = {
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
}

const Editor: React.FC<EditorProps> = ({ initialValue, onChange }) => {
  const editorRef = React.useRef<EditorJS>()

  React.useEffect(() => {
    editorRef.current = new EditorJS({
      holder: 'editor',
      placeholder: 'Type something here...',
      onChange: () => {
        editorRef?.current?.save().then(outputData => {
          console.log(
            outputData?.blocks.map(block => block.data.text).join('\n')
          )
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
