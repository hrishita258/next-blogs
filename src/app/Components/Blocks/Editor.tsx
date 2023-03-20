'use client'

import EditorJS from '@editorjs/editorjs'

import * as React from 'react'

interface EditorProps {
  initialValue?: string
  onChange?: (value: string) => void
}

const post = {
  time: 1678988884075,
  blocks: [
    {
      type: 'header',
      data: {
        text: 'Automatic preloading in Rails: the dream that came true.',
        level: 3
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Recently, I published an article about “<a href="https://medium.com/@evgeniydemin/stop-using-eager-loading-in-your-rails-application-use-this-instead-b837f0246033">Stop using manual preloading in your Rails application; use this instead.</a>” Many people were interested, but I failed to explain <strong>the ultimate solution</strong>. Considering that I still see posts about ActiveRecord <code class="inline-code">includes</code>, I want to elaborate on the idea deeply.'
      }
    },
    {
      type: 'image',
      data: {
        text: 'Generated on <a href="https://imgflip.com/memegenerator">https://imgflip.com/memegenerator</a>',
        file: {
          url: 'https://miro.medium.com/v2/1*kn1MI1althbmEdrSpogYmA.jpeg'
        },
        caption:
          'Generated on <a href="https://imgflip.com/memegenerator">https://imgflip.com/memegenerator</a>',
        withBorder: false,
        withBackground: false,
        stretched: true
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '<em>If you haven’t read the original article, please do so. However, this is not required to understand the subject.</em>'
      }
    },
    {
      type: 'linkTool',
      data: {
        success: 1,
        meta: {
          title:
            'Stop using manual preloading in your Rails application; use this instead.',
          description:
            'It’s a popular internet recommendation to use preloading in Ruby on Rails applications to eliminate the N+1 query problem. It may seem like…',
          image: {
            url: 'https://miro.medium.com/v2/resize:fit:918/1*RRKDoqNIzR6MD7WcE-Ml1g.png'
          }
        }
      }
    },
    {
      type: 'paragraph',
      data: { text: 'Without further ado, let’s get into the topic.' }
    },
    {
      type: 'paragraph',
      data: {
        text: '<em>Skip the next section if you are well familiar with N+1 issues.</em>'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'I’m sure you’ve all heard of N+1 issues here. In case you don’t, putting it simply, I would say:'
      }
    },
    {
      type: 'quote',
      data: {
        text: '“The code executes many similar inefficient database queries/HTTP requests/complex calculations.”'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Most often, in the Ruby on Rails world, it’s all about database queries so we will stop on that part. Ruby on Rails offers a <a href="https://guides.rubyonrails.org/active_record_querying.html#eager-loading-associations">built-in solution</a> for dealing with N+1 issues regarding fetching associations.'
      }
    },
    { type: 'paragraph', data: { text: 'Now, let’s look at the example.' } },
    {
      type: 'code',
      data: {
        text: 'class User < ActiveRecord::Base\n  has_many :accounts\nend\n\nclass Account < ActiveRecord::Base\n  has_many :contacts\nend\n\nclass Contact < ActiveRecord::Base\nend',
        code: 'class User < ActiveRecord::Base\n  has_many :accounts\nend\n\nclass Account < ActiveRecord::Base\n  has_many :contacts\nend\n\nclass Contact < ActiveRecord::Base\nend',
        showlinenumbers: false,
        language: 'ruby'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Somewhere in the code, you want to show your users’ accounts’ contacts.'
      }
    },
    {
      type: 'code',
      data: {
        text: 'users = User.all \n\nusers.each do |user|\n  user.accounts.each do |account|\n    p account.contact\n  end\nend',
        code: 'users = User.all \n\nusers.each do |user|\n  user.accounts.each do |account|\n    p account.contact\n  end\nend',
        showlinenumbers: false,
        language: 'ruby'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '<em>If you didn’t spot the issue yet, please stop here for a moment, look carefully at the code above, and try to find it.</em>'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'The problem is that for every user, there will be a query to a database to fetch accounts; moreover, for every account then, there will be a query to fetch its contacts.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'As you can see, this chain of calls can grow as a snowball, leading to hundreds or even thousands of requests.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Rails’ solution is to use <code class="inline-code"><a href="https://guides.rubyonrails.org/active_record_querying.html#includes">include</code>s</a> at the very beginning of the chain. The fixed code would look like this:'
      }
    },
    {
      type: 'code',
      data: {
        text: 'users = User.includes(accounts: :contacts).all\n# ...',
        code: 'users = User.includes(accounts: :contacts).all\n# ...',
        showlinenumbers: false,
        language: 'ruby'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'This code will preload all needed data in <strong>only three queries:</strong> all users, their accounts and contacts.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '<em>If you have ever worked with <code class="inline-code">includes</code> before, please pause here and remember what you didn’t like about i</em>t.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'To keep the post concise and focused on <strong>the elegant solution</strong> we are looking at soon, I will shortly share mine:'
      }
    },
    {
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          'you have to accurately and manually keep your beginning point <strong>consistent</strong> with the rest during the execution. If you no longer need down-the-road <code class="inline-code">contacts</code>, you better update <code class="inline-code">includes</code>, too; otherwise, you load extra data for no reason. If you need more data, let’s say <code class="inline-code">referrals</code>, you must update <code class="inline-code">includes</code>, or you get another N+1 issue. The effort required for consistency depends on how much the execution trace is spread along the project, but it isn’t trivial.',
          '<code class="inline-code">includes</code> fetches all the data immediately. Sometimes, we need to show information under the conditions. Following our case, what if <code class="inline-code">contacts </code>should only be displayed for primary accounts? It’s possible to do partial includes by directly calling <code class="inline-code">ActiveRecord::Associations::Preloader</code>, but this way isn’t convenient nor recommended by the guidelines.'
        ]
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Now, when we recall the N+1 problem and its most-popular Rails-way solution for that, let’s look at <strong>the proposed standard</strong>.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'The Ruby on Rails framework is all about a convention and fast delivery. The goal is to focus closely on the business rather than technical aspects. With this in mind, let’s look at the fix provided by <code class="inline-code">includes</code>.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'When I look at it, I wonder: if the only thing needed to avoid the N+1 problem is to type <code class="inline-code">includes</code> with specified associations, why can’t Rails do that for me? Is it possible?'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Gladly, it is! It’s already production-proven and awaits you at zero integration cost.'
      }
    },
    {
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'Add <code class="inline-code">gem "ar_lazy_preload”</code> to your <code class="inline-code">Gemfile</code>.',
          'Enable auto-preloading globally <code class="inline-code">ArLazyPreload.config.auto_preload = true</code>',
          'Remove redundant <code class="inline-code">includes</code>'
        ]
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '<em>Chain your loading with <code class="inline-code">.preload_associations_lazily</code> If you don’t want to enable auto-preloading globally. For example, <code class="inline-code">User.preload_associations_lazily.all</code>. Any consequential association loading on every <code class="inline-code">user</code> (and following loaded records) won’t create an N+1 pr</em>oblem.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Let’s investigate what it does to avoid the N+1 problem. I will also show you when it doesn’t work as a bonus.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '<em>Want to read more topics about #ruby and #rails?</em> Please <strong>join</strong> my network:'
      }
    },
    {
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          '<a href="https://evgeniydemin.medium.com/subscribe">Medium</a>',
          '<a href="https://www.linkedin.com/in/evgeniydemin/">LinkedIn</a>',
          '<a href="https://twitter.com/EvgeniyDemin/">Twitter</a>',
          '<a href="https://github.com/djezzzl">GitHub</a>'
        ]
      }
    },
    {
      type: 'paragraph',
      data: { text: 'There are two main parts that make auto-preloading work:' }
    },
    {
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          '<code class="inline-code"><a href="https://github.com/DmitryTsepelev/ar_lazy_preload/blob/master/lib/ar_lazy_preload/contexts/base_context.rb">ArLazyPreload Contex</code>t</a> (it has two implementations: one for globally enabled preloading and another for preloading through <code class="inline-code">.preload_associations_lazily</code>)',
          '<code class="inline-code"><a href="https://github.com/DmitryTsepelev/ar_lazy_preload/blob/master/lib/ar_lazy_preload/active_record/relation.rb">ArLazyPreload Relatio</code>n</a> patch'
        ]
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '<code class="inline-code">Context</code> is an object that stores metadata in with every <code class="inline-code">ActiveRecord</code> instance. It’s stored in <code class="inline-code">.lazy_preload_context</code> instance method. The most important metadata is the list of sibling records.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Sibling records are the records of the same class fetched in the same query and conceptually treated as similar records.'
      }
    },
    {
      type: 'code',
      data: {
        text: 'users = User.preload_associations_lazily.first(5)\n# Records are siblings/Share single Context\nusers.map(&:lazy_preload_context).uniq.count == 1\n\nother_users = User.preload_assocations_lazily.first(5)\n# Records are siblings/Share single Context\nother_users.map(&:lazy_preload_context).uniq.count == 1\n\n# But "users" aren\'t siblings with "other_users" \nusers.first.lazy_preload_context != other_users.first.lazy_preload_context',
        code: 'users = User.preload_associations_lazily.first(5)\n# Records are siblings/Share single Context\nusers.map(&:lazy_preload_context).uniq.count == 1\n\nother_users = User.preload_assocations_lazily.first(5)\n# Records are siblings/Share single Context\nother_users.map(&:lazy_preload_context).uniq.count == 1\n\n# But "users" aren\'t siblings with "other_users" \nusers.first.lazy_preload_context != other_users.first.lazy_preload_context',
        showlinenumbers: false,
        language: 'ruby'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'In the code above, instances in <code class="inline-code">users</code> and <code class="inline-code">other_users</code> groups are sibling records among their groups, but the two groups are not siblings.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '<code class="inline-code"><em>Contex</code>t also keeps track of a tree of already preloaded associations, but this is unnecessary to understand the main point.</em>'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '<code class="inline-code"><a href="https://github.com/DmitryTsepelev/ar_lazy_preload/blob/master/lib/ar_lazy_preload/active_record/relation.rb">Relatio</code>n</a> patches <code class="inline-code">ActiveRecord::Relation</code> class to look into the <code class="inline-code">Context</code> when deciding on loading the association. It will preload the association <strong>in one query for all records</strong> in the context if it exists. New records are properly distributed per referencing instance and cached there as if they would be manually preloaded with <code class="inline-code">includes</code>. After that, it assigns the context to loaded records, <strong>keeping them as siblings</strong> so they won’t produce the N+1 problem too.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Does that mean we don’t need to think about the N+1 at all?'
      }
    },
    { type: 'paragraph', data: { text: '<em>Well, yes and no.</em>' } },
    {
      type: 'paragraph',
      data: {
        text: 'The answer depends on how well you know how <code class="inline-code">includes</code> is working. For example, please, look at the code below and think if it has the N+1 issue.'
      }
    },
    {
      type: 'code',
      data: {
        text: 'users = User.includes(:accounts).all\n\nusers.each do |user|\n  user.accounts.where(primary: true) do |account|\n    p account\n  end\nend',
        code: 'users = User.includes(:accounts).all\n\nusers.each do |user|\n  user.accounts.where(primary: true) do |account|\n    p account\n  end\nend',
        showlinenumbers: false,
        language: 'ruby'
      }
    },
    {
      type: 'paragraph',
      data: { text: 'The answer is <strong>yes</strong>.' }
    },
    {
      type: 'paragraph',
      data: {
        text: '<em>I leave it to you to understand why because this is very important and would help you avoid many pitfalls.</em>'
      }
    },
    {
      type: 'paragraph',
      data: { text: 'There are two main quick solutions:' }
    },
    {
      type: 'paragraph',
      data: {
        text: 'First way is to replace <code class="inline-code">.where</code> with in-memory Ruby filtering by <code class="inline-code">select { |account| account.primary == true }</code>. However, I don’t recommend you this way as it is inefficient.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'The second way is to create a new scoped association in <code class="inline-code">User</code> model and use that instead.'
      }
    },
    {
      type: 'code',
      data: {
        text: 'class User < ActiveRecord::Base\n  has_many :primary_accounts, -> { where(primary: true) }\nend\n\nusers = User.includes(:primary_accounts)\n\nusers.each do |user|\n  user.primary_accounts do |account|\n    p account\n  end\nend',
        code: 'class User < ActiveRecord::Base\n  has_many :primary_accounts, -> { where(primary: true) }\nend\n\nusers = User.includes(:primary_accounts)\n\nusers.each do |user|\n  user.primary_accounts do |account|\n    p account\n  end\nend',
        showlinenumbers: false,
        language: 'ruby'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: '<em>This approach works well. However, it is very negotiable due to software design aspects; therefore, it may or may not be accepted in your project.</em>'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'The same pattern comes when using auto-preloading. You can’t chain associations without declaring a new scoped association to avoid the N+1 issue. It’s simple to do, though.'
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'That’s about it for auto-preloading in ActiveRecord (Rails default ORM). I hope this time I did better in explaining how it works and why you should start using it.'
      }
    },
    {
      type: 'paragraph',
      data: { text: '<em>Please consider <strong>subscribing</em>!</strong>' }
    },
    {
      type: 'paragraph',
      data: {
        text: '<em>And don’t forget to share what you think about the topic. Do you consider N+1 issues to be important in your projects? I would be happy to hear from you.</em>'
      }
    },
    {
      type: 'list',
      data: {
        style: 'unordered',
        items: {
          type: 'unordered',
          items: [
            '<a href="https://evgeniydemin.medium.com/subscribe">Medium</a>',
            '<a href="https://www.linkedin.com/in/evgeniydemin/">LinkedIn</a>',
            '<a href="https://twitter.com/EvgeniyDemin/">Twitter</a>',
            '<a href="https://github.com/djezzzl">GitHub</a>'
          ]
        }
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
            endpoint: 'http://localhost:3001/api/linkTool'
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
              twitch: true,
              github: {
                regex:
                  /https?:\/\/github.com\/([^\/]*)\/([^\/]*)\/(blob|tree)\/([^\/]*)\/(.+)/,
                embedUrl: 'https://github.com/<%= remote_id %>',
                html: "<iframe height='500' frameborder='0' scrolling='no' style='width:100%;'></iframe>",
                height: 500,
                width: 600,
                id: (groups: any[]) =>
                  `github-${groups[1]}-${groups[2]}-${groups[4]}-${groups[5]}`
              },
              medium: {
                regex: /https?:\/\/medium.com\/([\w-]+)\/([\w-]+)-([\w-]+)/,
                embedUrl: 'https://medium.com/media/<%= remote_id %>',
                html: "<iframe src='https://medium.com/media/<%= remote_id %>' frameborder='0' scrolling='auto' height='550' width='100%'></iframe>",
                height: 550,
                width: '100%'
              }
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
