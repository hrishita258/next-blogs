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
        id: '298c7d4f054e_0',
        name: '2783',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Building a tunable and configurable custom objective function for XGBoost',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 0,
            end: 73,
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
        id: '298c7d4f054e_1',
        name: '0367',
        type: 'IMG',
        href: null,
        layout: 'INSET_CENTER',
        metadata: {
          id: '1*xZwILfjIelT3G7CyoD3c8Q.png',
          originalHeight: 735,
          originalWidth: 1400,
          focusPercentX: null,
          focusPercentY: null,
          alt: null,
          __typename: 'ImageMetadata'
        },
        text: '',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_2',
        name: 'b959',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Extreme Gradient Boosting, or XGBoost, has gained immense popularity in recent years for solving a wide range of problems involving tabular data. With its ability to handle missing values, feature selection, and parallel processing, XGBoost has emerged as a top choice among data scientists and machine learning practitioners.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_3',
        name: '29b3',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'This blog post will focus on building advanced custom objective functions; we will discuss a few best practices for implementing them and integrating them into the hyperparameter tuning process.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_4',
        name: 'de24',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'XGBoost and objective functions',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 0,
            end: 31,
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
        id: '298c7d4f054e_5',
        name: '6b90',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'This post will not cover the full mechanism of XGBoost or dive deep into its mathematics. However, one concept worth mentioning is how XGBoost uses its defined loss function. Basically, XGBoost uses an approximation of the loss function based on Taylor’s expansion up to the second derivative. Then, when minimizing the approximated loss, the relevant equations required for building the trees can be done using the first and second derivatives, also known as Gradient and Hessian, respectively. Don’t worry, we will demonstrate how to use the gradient and hessian in this blog post. (visit here to learn more about the XGBoost mechanism).',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 591,
            end: 595,
            href: 'https://towardsdatascience.com/de-mystifying-xgboost-part-i-f37c5e64ec8e',
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
        id: '298c7d4f054e_6',
        name: 'd379',
        type: 'BQ',
        href: null,
        layout: null,
        metadata: null,
        text: 'The XGBoost library comes with several built-in objective functions, each designed for a different use case. For example, the “reg:squarederror” objective is usually used for regression problems. The “binary:logistic” objective, on the other hand, is used for binary classification problems (more objective functions can be found in the XGBoost’s documentation).',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 347,
            end: 360,
            href: 'https://xgboost.readthedocs.io/en/stable/parameter.html',
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
        id: '298c7d4f054e_7',
        name: '4ee5',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Why use built-in objective functions? Well, for one thing, they can be easily defined in the hyperparameters configuration of the XGBoost model. That being said, if we decide to use a built-in objective function, we must make sure that the chosen objective is the right one for our predictive task. Otherwise, the training will not yield a very useful model.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_8',
        name: 'b5be',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'The biggest drawback of using built-in objectives is that they aren’t always capable of dealing with complex problems. Occasionally, business requirements might require us to focus on specific KPIs, making the built-in objective note suitable.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_9',
        name: '9ed7',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'One way of overcoming such challenges is to build a custom objective function that follows the required business needs. The ability to customize the objective function of the XGBoost makes it a very useful tool for solving unique and complex problems while leveraging the power and ease of use of the entire XGBoost library.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_10',
        name: '5069',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Is hyperparameter tuning relevant to our objective function?',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 0,
            end: 60,
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
        id: '298c7d4f054e_11',
        name: '9d38',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'The answer is yes. XGBoost has a large number of hyperparameters that can be tuned to optimize the model’s performance, such as the learning rate, maximum depth of trees, and regularization strength. Choosing the right ones can improve the model’s predictive power and reduce overfitting.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_12',
        name: '4eb7',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'But what about custom objective functions? Well, in some cases, objective functions might contain their own hyperparameters that need to be tuned. One example is the “reg:tweedie” objective, which has the “tweedie_variance_power” parameter that controls variance power of the distribution. While the “tweedie_variance_power” is a built-in parameter that can be defined easily via the model’s parameters dictionary, when constructing a custom objective with new custom parameters, things become more complicated.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'EM',
            start: 167,
            end: 178,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 206,
            end: 228,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 301,
            end: 323,
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
        id: '298c7d4f054e_13',
        name: 'cbb9',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Being able to tune these custom objective functions allows data scientists to tailor their models to their specific needs and optimize performance for their specific use cases. In the following sections, we will explain how we can tune new hyperparameters that we’ve added to our custom objective function, thus making our XGBoost models better than ever!',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_14',
        name: '6812',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Implementing custom objective function',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 0,
            end: 38,
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
        id: '298c7d4f054e_15',
        name: '269c',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Let’s start by understanding how to implement our own simple objective function for our XGBoost model. For simplicity, let’s look at the squared error objective that tries to minimize the mean squared error metric (MSE), which is defined by the following equation:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'EM',
            start: 215,
            end: 218,
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
        id: '298c7d4f054e_16',
        name: '9c5a',
        type: 'IMG',
        href: null,
        layout: 'INSET_CENTER',
        metadata: {
          id: '1*rqr87SrvLa44qv8GSGQDSw.png',
          originalHeight: 268,
          originalWidth: 1900,
          focusPercentX: null,
          focusPercentY: null,
          alt: null,
          __typename: 'ImageMetadata'
        },
        text: 'Fig. 1 — Y_pred and y_actual denote the vector of predictions and labels respectively, n is the number of samples in the data',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 0,
            end: 9,
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
        id: '298c7d4f054e_17',
        name: 'c881',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'To implement it as an objective function, we will need to calculate the first and second derivatives of the squared error term w.r.t y_pred:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 133,
            end: 139,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 133,
            end: 139,
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
        id: '298c7d4f054e_18',
        name: 'e03e',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'import numpy as np\nimport xgboost as xgb\nfrom typing import Tuple\n\ndef my_squared_error(y_pred:np.ndarray,\n                     dtrain:xgb.DMatrix) -> Tuple[np.ndarray, np.ndarray]:\n    y_true = dtrain.get_label()\n    grad = 2*(y_pred - y_true)\n    hess = np.repeat(2, y_true.shape[0])\n    return grad, hess',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: {
          mode: 'EXPLICIT',
          lang: 'python',
          __typename: 'CodeBlockMetadata'
        },
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_19',
        name: '5cc3',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'grad represents the first-order derivative of the squared error term w.r.t to y_pred, and hess is the second-order derivative.',
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
          },
          {
            type: 'STRONG',
            start: 78,
            end: 84,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 90,
            end: 94,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 0,
            end: 4,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 78,
            end: 84,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 90,
            end: 94,
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
        id: '298c7d4f054e_20',
        name: 'f702',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'A few things to keep in mind regarding the objective function:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_21',
        name: '4a8b',
        type: 'OLI',
        href: null,
        layout: null,
        metadata: null,
        text: 'The order of the function’s argument must remain as shown in the code, starting with the y_pred vector followed by dtrain which is a DMatrix of the train data.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 89,
            end: 95,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 115,
            end: 121,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 89,
            end: 95,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 115,
            end: 121,
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
        id: '298c7d4f054e_22',
        name: '3c7c',
        type: 'OLI',
        href: null,
        layout: null,
        metadata: null,
        text: 'The function must return two arguments, the first-order derivative of the loss term (gradient) and the second-order derivative (Hessian).',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_23',
        name: 'add4',
        type: 'OLI',
        href: null,
        layout: null,
        metadata: null,
        text: 'Pay attention to the sign of the gradients and Hessians according to the position of the y_pred vector in the error term.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 89,
            end: 95,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 89,
            end: 95,
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
        id: '298c7d4f054e_24',
        name: 'edf2',
        type: 'OLI',
        href: null,
        layout: null,
        metadata: null,
        text: 'The grad and hess variables are vectors with length of the number of samples in the train data',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 4,
            end: 8,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 13,
            end: 17,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 4,
            end: 8,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 13,
            end: 17,
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
        id: '298c7d4f054e_25',
        name: 'f88f',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'In order to train the XGBoost model with our implementation of the objective function, we can pass our function to the train method via the “obj” argument as follows:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'EM',
            start: 141,
            end: 144,
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
        id: '298c7d4f054e_26',
        name: '711f',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'params = {\n    "max_depth":5,\n    "eta":0.15,\n    "eval_metric":"rmse"\n}\n\nmodel = xgb.train(params=params,\n                  dtrain=dtrain,\n                  num_boost_round=100,\n                  obj=my_squared_error)',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: {
          mode: 'EXPLICIT',
          lang: 'python',
          __typename: 'CodeBlockMetadata'
        },
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_27',
        name: '98d9',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Let’s look at the following synthesized example were the target variable is users’ life-time value (LTV) in USD($), fitting our model to this data resulted in the following plot:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_28',
        name: 'e3c5',
        type: 'IMG',
        href: null,
        layout: 'INSET_CENTER',
        metadata: {
          id: '1*9udEB3zFawwp-VylE1V_7Q.png',
          originalHeight: 990,
          originalWidth: 1676,
          focusPercentX: null,
          focusPercentY: null,
          alt: null,
          __typename: 'ImageMetadata'
        },
        text: 'Fig. 2— X-axis represents the actual values in $, Y-axis represents the predicted values in $ and the 45 degree red line represent a perfect result',
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
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_29',
        name: 'ed6f',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'The above plot shows that our own implementation of the squared error objective function worked as expected. While trying to minimize the MSE, the predictions are pretty much symmetrically scattered around the 45-degree line without any visible success predicting the high LTV users. That was pretty simple, right?',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_30',
        name: 'a9d6',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Taking the custom objective to the next level',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_31',
        name: '40cb',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Now, let’s make things more complicated. Assuming fitting a simple regressor to our data is not enough, and we want to build an objective function that follows certain business needs. For example, let’s define a “valuable user” as one that spent more than a certain amount of $. Our goal is to avoid underestimating the potential revenue for these users as much as possible.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_32',
        name: '2453',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'We can write the equation of our new asymmetric custom loss as follows:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_33',
        name: 'f34d',
        type: 'IMG',
        href: null,
        layout: 'INSET_CENTER',
        metadata: {
          id: '1*jQ8p9A-SVnoi2v3mteDAvQ.png',
          originalHeight: 200,
          originalWidth: 1584,
          focusPercentX: null,
          focusPercentY: null,
          alt: null,
          __typename: 'ImageMetadata'
        },
        text: 'Fig. 3— delta denotes the level of “punishment” for under-predicting valuable users, and tau denotes the amount of $ over which a user is defined as valuable',
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
            start: 8,
            end: 13,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 89,
            end: 92,
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
        id: '298c7d4f054e_34',
        name: '96de',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Before jumping into the objective function implementation, it is important to note two important aspects:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_35',
        name: '6dad',
        type: 'OLI',
        href: null,
        layout: null,
        metadata: null,
        text: 'Two new variables have been added to the objective function, in addition to the y_pred vector and the dtrain object. The first variable is tau, which is the threshold defining a “valuable user”. This variable is configurable and decided based on business logic. The second variable is delta which is the level of “punishment” for under-predicting the “valuable users”. The delta is a new hyperparameter and its value should be decided based on the hyperparameter tuning procedure.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 80,
            end: 86,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 102,
            end: 108,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 139,
            end: 144,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 285,
            end: 290,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 373,
            end: 378,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 80,
            end: 86,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 102,
            end: 108,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 139,
            end: 144,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 285,
            end: 290,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 373,
            end: 378,
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
        id: '298c7d4f054e_36',
        name: '6ce3',
        type: 'OLI',
        href: null,
        layout: null,
        metadata: null,
        text: 'The new variables cannot be passed to the function at the current setup since the custom objective function must remain with the structure presented earlier. The “obj” argument of the XGBoost’s train method, once invoked, will expect a Callable object with the exact structure as mentioned above.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'EM',
            start: 163,
            end: 166,
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
        id: '298c7d4f054e_37',
        name: '70e9',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'To overcome this challenge, we will leverage Python Closures functions and wrap the implementation of the gradient and hessian with another function that takes as arguments the additional variables.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_38',
        name: '8dde',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'def my_assymetric_error_wrapper(tau, delta):\n    def my_assymetric_error(y_pred, dtrain):\n        y_true = dtrain.get_label()\n        error = (y_pred - y_true)\n        grad = np.where(((y_true>tau)&(error<0)), delta*2*error, 2*error)\n        hess = np.where(((y_true>tau)&(error<0)), delta*2, 2)\n        return grad, hess\n    return my_assymetric_error',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: {
          mode: 'EXPLICIT',
          lang: 'python',
          __typename: 'CodeBlockMetadata'
        },
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_39',
        name: '0ffe',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Now, we can easily use our new asymmetric custom objective within the train method of the XGBoost while the values of tau and delta can be set outside of the function. This technique enables to either configure a parameter (tau) or to tune one (delta). For example purposes, let’s set the tau=8$ and delta=10:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 118,
            end: 121,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 126,
            end: 131,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 224,
            end: 227,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 245,
            end: 250,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 289,
            end: 292,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 300,
            end: 305,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 118,
            end: 121,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 126,
            end: 131,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 224,
            end: 227,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 245,
            end: 250,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 289,
            end: 292,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 300,
            end: 305,
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
        id: '298c7d4f054e_40',
        name: '7b15',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'params = {\n    "max_depth":5,\n    "eta":0.15,\n    "eval_metric":"rmse"\n}\n\nmodel = xgb.train(params=params,\n                      dtrain=dtrain,\n                      num_boost_round=150,\n                      obj = my_assymetric_error_wrapper(tau=8, delta=10))',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: {
          mode: 'EXPLICIT',
          lang: 'python',
          __typename: 'CodeBlockMetadata'
        },
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_41',
        name: '1681',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'The training will now be based on our new custom objective logic while using the defined values of tau and delta. Fitting the model on our data resulted in the following:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 99,
            end: 102,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 107,
            end: 112,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 99,
            end: 102,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 107,
            end: 112,
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
        id: '298c7d4f054e_42',
        name: '30e1',
        type: 'IMG',
        href: null,
        layout: 'INSET_CENTER',
        metadata: {
          id: '1*QjTrOhU4NTPPkJP8Q2zkcA.png',
          originalHeight: 1068,
          originalWidth: 1600,
          focusPercentX: null,
          focusPercentY: null,
          alt: null,
          __typename: 'ImageMetadata'
        },
        text: 'Fig. 4— Presents the effect of the new asymmetric custom objective function on the model’s predictions.',
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
          }
        ],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_43',
        name: '8faf',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'We can see that the new asymmetric custom objective did a good job of avoiding (as much as possible) under-estimating the valuable users (revenue > 8$) while behaving pretty much the same way as the “squarederror” objective for the rest of them.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'EM',
            start: 200,
            end: 212,
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
        id: '298c7d4f054e_44',
        name: '8bdf',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Tune the new hyperparameter',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_45',
        name: 'a1b3',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Following our previous example, we can understand that tau is a configurable parameter that can be determined based on some business logic. On the other hand, determining the value of delta is much harder as it behaves more like a hyperparameter of the model. Therefore, the delta parameter needs to be tuned together with the other hyperparameters of the model.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 55,
            end: 58,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 184,
            end: 189,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 275,
            end: 280,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 55,
            end: 58,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 184,
            end: 189,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 275,
            end: 280,
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
        id: '298c7d4f054e_46',
        name: 'd613',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'But should we worry about the fact that delta is a new hyperparameter and it is not part of the built-in parameters of the XGBoost library? Not at all, since we used Python Closures to implement our new custom objective function, we are now able to pass any value to our new parameter. Thus, we can leverage this capability in a hyperparameters tuning procedure and optimize our model’s performance.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 40,
            end: 45,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 40,
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
        id: '298c7d4f054e_47',
        name: 'a773',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'In this blog post, we chose to use Optuna, which is an open-source hyperparameter optimization framework. It provides several sampling and pruning algorithms and supports various machine learning and deep learning frameworks. One of the key advantages of Optuna is that it is highly customizable, allowing users to define their own search spaces, objective functions, and optimization strategies. Optuna also supports parallel and distributed computing, making it scalable and able to handle large-scale hyperparameter optimization tasks.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 35,
            end: 41,
            href: 'https://optuna.org/',
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
        id: '298c7d4f054e_48',
        name: 'cc2d',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'Custom objective function + Optuna',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_49',
        name: '1a34',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'The first step in working with Optuna is to implement the optimization objective, which is the core logic of the optimization process. It is constructed of three main components:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_50',
        name: 'b637',
        type: 'OLI',
        href: null,
        layout: null,
        metadata: null,
        text: 'Setting the hyperparameters sampling space. Here we can define which hyperparameters we want to tune and their value space. In our case, besides setting the XGBoost built-in hyperparameters, we will set a sampling space for our new hyperparameter delta. Notice that we didn’t define the delta parameter in the XGBoost param dict since it’s not a built-in hyperparameter, and it is being fed to the model through the custom objective function.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 247,
            end: 252,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 287,
            end: 292,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 247,
            end: 252,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 287,
            end: 292,
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
        id: '298c7d4f054e_51',
        name: '7f59',
        type: 'OLI',
        href: null,
        layout: null,
        metadata: null,
        text: 'Training the XGBoost model. Here we will initialize the training using our new asymmetric custom objective where the delta parameter is changing based on the optimization process.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 117,
            end: 122,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 117,
            end: 122,
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
        id: '298c7d4f054e_52',
        name: '05cf',
        type: 'OLI',
        href: null,
        layout: null,
        metadata: null,
        text: 'Defining a score metric. This score will be used to determine the best trial of the tuning process.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_53',
        name: 'd63e',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'We will use Python closures again to wrap the objective with another function that will get as an arguments, the train and validation set, and also the configurable variable of our new XGBoost’s custom objective, the tau.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 217,
            end: 220,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 217,
            end: 220,
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
        id: '298c7d4f054e_54',
        name: '5dd8',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: 'def objective_wrapper(dtrain, dval, tau):\n    def objective(trial):\n        # 1. setting parameters sampling space\n        param = {\n            "subsample" : trial.suggest_float("subsample", 0.0, 1.0),\n            "max_depth" : trial.suggest_int("max_depth", 1, 9),\n            "eta" : trial.suggest_float("eta", 0.005, 0.35),\n            "gamma" : trial.suggest_float("gamma", 1, 10.0),\n        }\n        \n        # our new hyper-parameter\n        delta = trial.suggest_int("delta", 1, 50, step=5)\n        \n        # 2. model training using the custom objective\n        model = xgb.train(param,\n                          dtrain,\n                          num_boost_round = 100,\n                          obj = my_assymetric_error_wrapper(tau=tau,\n                                                            delta=delta))\n        \n        # 3. calculate score on validation set\n        preds = model.predict(dval)\n        labels = dval.get_label()\n        mse = np.mean((preds-labels)**2)\n        return mse\n    return objective',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: {
          mode: 'EXPLICIT',
          lang: 'python',
          __typename: 'CodeBlockMetadata'
        },
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_55',
        name: '1751',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Now that the optimization objective function is built, we can initialize the Optuna study. When initializing a study, it is possible to choose a specific sampler and pruners, and of course to set the direction of optimization. For simplicity, we will use the default TPE sampler, and since we implemented the MSE as our evaluation score, we will set the optimization direction to “minimize”. We set the tau=8$ and optimized for 10 trials:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 403,
            end: 407,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 403,
            end: 407,
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
        id: '298c7d4f054e_56',
        name: '4b70',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: "import optuna\n\nstudy = optuna.create_study(sampler=optuna.samplers.TPESampler(seed=42),\n                            direction='minimize')\nstudy.optimize(objective_wrapper(dtrain, dval, tau=8), n_trials=10)",
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: {
          mode: 'EXPLICIT',
          lang: 'python',
          __typename: 'CodeBlockMetadata'
        },
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_57',
        name: 'd84d',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'The outputs of the tuning process will look something like this:',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_58',
        name: '0cf8',
        type: 'PRE',
        href: null,
        layout: null,
        metadata: null,
        text: "[I 2023-02-15 09:17:36,163] A new study created in memory with name: demo\n[I 2023-02-15 09:17:37,556] Trial 0 finished with value: 0.8846970796585083 and parameters: {'subsample': 0.3745401188473625, 'max_depth': 9, 'eta': 0.25753790992493475, 'gamma': 6.387926357773329, 'delta': 6}. Best is trial 0 with value: 0.8846970796585083.\n[I 2023-02-15 09:17:37,960] Trial 1 finished with value: 2.7566282749176025 and parameters: {'subsample': 0.15599452033620265, 'max_depth': 1, 'eta': 0.3038307702923526, 'gamma': 6.41003510568888, 'delta': 36}. Best is trial 0 with value: 0.8846970796585083.\n[I 2023-02-15 09:17:38,749] Trial 2 finished with value: 5.54156494140625 and parameters: {'subsample': 0.020584494295802447, 'max_depth': 9, 'eta': 0.2921927110761455, 'gamma': 2.9110519961044856, 'delta': 6}. Best is trial 0 with value: 0.8846970796585083.\n[I 2023-02-15 09:17:39,232] Trial 3 finished with value: 1.1226681470870972 and parameters: {'subsample': 0.18340450985343382, 'max_depth': 3, 'eta': 0.18604096891312205, 'gamma': 4.887505167779041, 'delta': 11}. Best is trial 0 with value: 0.8846970796585083.\n[I 2023-02-15 09:17:39,716] Trial 4 finished with value: 1.5384970903396606 and parameters: {'subsample': 0.6118528947223795, 'max_depth': 2, 'eta': 0.10578990374465026, 'gamma': 4.297256589643226, 'delta': 21}. Best is trial 0 with value: 0.8846970796585083.\n[I 2023-02-15 09:17:40,218] Trial 5 finished with value: 0.8311933279037476 and parameters: {'subsample': 0.7851759613930136, 'max_depth': 2, 'eta': 0.182410881252696, 'gamma': 6.331731119758382, 'delta': 1}. Best is trial 5 with value: 0.8311933279037476.\n[I 2023-02-15 09:17:40,709] Trial 6 finished with value: 2.2779664993286133 and parameters: {'subsample': 0.6075448519014384, 'max_depth': 2, 'eta': 0.02744279957992143, 'gamma': 9.539969835279999, 'delta': 46}. Best is trial 5 with value: 0.8311933279037476.\n[I 2023-02-15 09:17:41,295] Trial 7 finished with value: 1.5023095607757568 and parameters: {'subsample': 0.8083973481164611, 'max_depth': 3, 'eta': 0.03869687933220243, 'gamma': 7.158097238609412, 'delta': 21}. Best is trial 5 with value: 0.8311933279037476.\n[I 2023-02-15 09:17:41,870] Trial 8 finished with value: 1.3249372243881226 and parameters: {'subsample': 0.12203823484477883, 'max_depth': 5, 'eta': 0.016864039784750345, 'gamma': 9.18388361870904, 'delta': 11}. Best is trial 5 with value: 0.8311933279037476.\n[I 2023-02-15 09:17:42,435] Trial 9 finished with value: 0.8856847286224365 and parameters: {'subsample': 0.662522284353982, 'max_depth': 3, 'eta': 0.18442346730634473, 'gamma': 5.920392514089517, 'delta': 6}. Best is trial 5 with value: 0.8311933279037476.",
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: {
          mode: 'AUTO',
          lang: 'yaml',
          __typename: 'CodeBlockMetadata'
        },
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_59',
        name: '8dd3',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'You can see that alongside the built-in hyperparameters like “max_depth” and “eta”, our new hyperparameter delta was tuned as different possible values of it were evaluated.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 107,
            end: 112,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 62,
            end: 71,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 78,
            end: 81,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 107,
            end: 112,
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
        id: '298c7d4f054e_60',
        name: 'e8f9',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Further examining the output logs, we can see that the chosen value of delta in the best trial (trial #5) was 1. Meaning that we don’t apply any extra “punishment” for under-predicting valuable users. How is it possible? Well, that leads me to the next point, which is that when using a custom objective that follows a certain business logic, it’s important to align our evaluation to it. Here, since we used MSE as our evaluation score in the tuning process, it makes sense that the chosen value of delta is 1 since it converts our custom objective function back to the normal “squarederror” which is designed to minimize MSE. Isn’t that cool?',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'STRONG',
            start: 71,
            end: 76,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 500,
            end: 505,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 71,
            end: 76,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 500,
            end: 505,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 579,
            end: 591,
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
        id: '298c7d4f054e_61',
        name: '7871',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'Thus, it is important to define an evaluation score that reflects the same business logic as the custom objective function. Aside from the evaluation score of the tuning process, the “eval_metric” parameter of the XGBoost should also follow the same business logic since it affects the early_stopping mechanism of the training process. How can we do that? It will be saved for a future blog post.',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'EM',
            start: 184,
            end: 195,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 286,
            end: 300,
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
        id: '298c7d4f054e_62',
        name: '3d00',
        type: 'P',
        href: null,
        layout: null,
        metadata: null,
        text: 'You’re now ready to create your own awesome custom objective function and to tune all of its new hyperparameters!',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_63',
        name: 'a49a',
        type: 'H3',
        href: null,
        layout: null,
        metadata: null,
        text: 'References',
        hasDropCap: null,
        dropCapImage: null,
        markups: [],
        __typename: 'Paragraph',
        codeBlockMetadata: null,
        iframe: null,
        mixtapeMetadata: null
      },
      {
        id: '298c7d4f054e_64',
        name: '0713',
        type: 'MIXTAPE_EMBED',
        href: null,
        layout: null,
        metadata: null,
        text: 'What makes “XGBoost” so Extreme ?\nA comprehensive guide to the inner workings of XGBoostmedium.com',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 0,
            end: 98,
            href: 'https://medium.com/analytics-vidhya/what-makes-xgboost-so-extreme-e1544a4433bb',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 0,
            end: 33,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 34,
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
        mixtapeMetadata: {
          href: 'https://medium.com/analytics-vidhya/what-makes-xgboost-so-extreme-e1544a4433bb',
          mediaResource: {
            mediumCatalog: null,
            __typename: 'MediaResource'
          },
          __typename: 'MixtapeMetadata',
          thumbnailImageId: '1*EJzzS8zqWL8VBN7rLr-xGg.png'
        }
      },
      {
        id: '298c7d4f054e_65',
        name: '6f9f',
        type: 'MIXTAPE_EMBED',
        href: null,
        layout: null,
        metadata: null,
        text: 'De-Mystifying XGBoost I\nGo under the hood of XGBoost to understand the math, visually, and consider why and how it behaves like it behaves.towardsdatascience.com',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 0,
            end: 161,
            href: 'https://towardsdatascience.com/de-mystifying-xgboost-part-i-f37c5e64ec8e',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 0,
            end: 23,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 24,
            end: 139,
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
        mixtapeMetadata: {
          href: 'https://towardsdatascience.com/de-mystifying-xgboost-part-i-f37c5e64ec8e',
          mediaResource: {
            mediumCatalog: null,
            __typename: 'MediaResource'
          },
          __typename: 'MixtapeMetadata',
          thumbnailImageId: '1*__E4zRwPxEAV4q5UgKBU2A.png'
        }
      },
      {
        id: '298c7d4f054e_66',
        name: '622e',
        type: 'MIXTAPE_EMBED',
        href: null,
        layout: null,
        metadata: null,
        text: 'XGBoost Parameters - xgboost 1.7.4 documentation\nBefore running XGBoost, we must set three types of parameters: general parameters, booster parameters and task…xgboost.readthedocs.io',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 0,
            end: 182,
            href: 'https://xgboost.readthedocs.io/en/stable/parameter.html',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 0,
            end: 48,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 49,
            end: 160,
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
        mixtapeMetadata: {
          href: 'https://xgboost.readthedocs.io/en/stable/parameter.html',
          mediaResource: {
            mediumCatalog: null,
            __typename: 'MediaResource'
          },
          __typename: 'MixtapeMetadata',
          thumbnailImageId: '0*FDpEsMcwjkLdNFt-'
        }
      },
      {
        id: '298c7d4f054e_67',
        name: '7846',
        type: 'MIXTAPE_EMBED',
        href: null,
        layout: null,
        metadata: null,
        text: 'Optuna - A hyperparameter optimization framework\nOptuna is an automatic hyperparameter optimization software framework, particularly designed for machine learning. It…optuna.org',
        hasDropCap: null,
        dropCapImage: null,
        markups: [
          {
            type: 'A',
            start: 0,
            end: 177,
            href: 'https://optuna.org/',
            anchorType: 'LINK',
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'STRONG',
            start: 0,
            end: 48,
            href: null,
            anchorType: null,
            userId: null,
            linkMetadata: null,
            __typename: 'Markup'
          },
          {
            type: 'EM',
            start: 49,
            end: 167,
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
        mixtapeMetadata: {
          href: 'https://optuna.org/',
          mediaResource: {
            mediumCatalog: null,
            __typename: 'MediaResource'
          },
          __typename: 'MixtapeMetadata',
          thumbnailImageId: '0*tQBo2L79YJgdrAJc'
        }
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
    H6: 'header',
    PQ: 'quote',
    MIXTAPE_EMBED: 'linkTool',
    PRE: 'code',
    BQ: 'quote'
  }
  function applyMarkups(text: string, markups: any[]) {
    let result = text
    const priority: {
      [key: string]: number
    } = { A: 1, STRONG: 2, EM: 3, CODE: 4 }
    markups.sort((a, b) => {
      if (a.start !== b.start) {
        return b.start - a.start
      } else {
        return priority[a.type] - priority[b.type]
      }
    })
    for (const markup of markups) {
      const { type, start: originalStart, end: originalEnd } = markup
      let openTag = `<${type.toLowerCase()}>`
      let closeTag = `</${type.toLowerCase()}>`
      if (type === 'A') {
        openTag = `<a href="${markup.href}">`
        closeTag = '</a>'
      } else if (type === 'CODE') {
        openTag = '<code class="inline-code">'
        closeTag = '</code>'
      }

      let start = originalStart
      let end = originalEnd

      // Adjust start and end positions based on previously applied markups
      for (let i = 0; i < result.length && i < start; i++) {
        if (result[i] === '<') {
          while (i < result.length && result[i] !== '>') {
            i++
            start++
            end++
          }
        }
      }

      for (let i = start; i < result.length && i < end; i++) {
        if (result[i] === '<') {
          while (i < result.length && result[i] !== '>') {
            i++
            end++
          }
        }
      }

      // Apply current markup
      result =
        result.slice(0, start) +
        openTag +
        result.slice(start, end) +
        closeTag +
        result.slice(end)
    }

    return result
  }

  async function convertToEditorJSData(data: any) {
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
                items: list.items
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
          block.data.file = {
            url: 'https://miro.medium.com/v2/' + item.metadata.id
          }
          block.data.caption = applyMarkups(item.text, item.markups)
          block.data.withBorder = false
          block.data.withBackground = false
          block.data.stretched = true
        }

        if (block.type === 'embed') {
          block.data.service = 'youtube'
          block.data.source = item.iframe.mediaResource.iframeSrc
          block.data.embed = item.iframe.mediaResource.iframeSrc
        }

        if (block.type === 'linkTool') {
          const res = await fetch(
            'http://localhost:3000/api/linkTool?url=' +
              item.mixtapeMetadata.href
          )
          const data = await res.json()
          block.data = data
          block.data.link = item.mixtapeMetadata.href
        }

        if (block.type === 'code') {
          block.data.code = item.text
          block.data.showlinenumbers = false
          block.data.language = item?.codeBlockMetadata?.lang || ''
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
          items: list
        }
      })
    }

    return result
  }

  return new Response(
    JSON.stringify(await convertToEditorJSData(data.paragraphs))
  )
}
