import slugify from 'slugify'
import prisma from '../../../../prisma/client'

export async function GET(request: Request) {
  // const data = [
  //   {
  //     data: {
  //       sequenceStreamConnection: {
  //         stream: [
  //           {
  //             itemType: {
  //               __typename: 'StreamItemSequence',
  //               sequence: {
  //                 slug: 'all-rise',
  //                 eyebrow: 'Column',
  //                 title: 'All Rise',
  //                 subtitle: 'How the law upholds the patriarchy.',
  //                 description:
  //                   'Many fetishize the law as a universe based entirely on logic and reason and insulated from emotion and bias (despite that human conflict is at the heart of all legal disputes). Thankfully, books like The New Jim Crow and documentaries like 13th have begun to shed light on the widespread racial injustices in our legal system, but fewer have recognized the patriarchal underpinnings upon which the law rests. In this column, Anna Dorn explores how misogyny steeps into our criminal justice system by examining a range of defendants.',
  //                 updatedAt: 1571335951715,
  //                 featuredUserTitle: null,
  //                 featuredUserCustomBio: null,
  //                 color: '#FFF85F5F',
  //                 bgColor: '#FFFFFDFD',
  //                 hideIndex: false,
  //                 postIds: [
  //                   'ba9e5448acb9',
  //                   '7984bd98b184',
  //                   '320c10b24969',
  //                   '7bf8461bc7d4',
  //                   '4119b44d992b',
  //                   '71eca6fa9f42',
  //                   'b8fd85647305'
  //                 ],
  //                 coverImage: {
  //                   id: '1*y4dkN_oxwLaeG9VSMO2mcg@2x.png',
  //                   __typename: 'ImageMetadata'
  //                 },
  //                 __typename: 'Sequence'
  //               }
  //             },
  //             __typename: 'StreamItem'
  //           },
  //           {
  //             itemType: {
  //               __typename: 'StreamItemSequence',
  //               sequence: {
  //                 slug: 'notes-on-changing-your-life',
  //                 eyebrow: 'Anthology',
  //                 title: 'Notes on Changing Your Life',
  //                 subtitle:
  //                   'Stories exploring the whys and hows of habits, selected by Medium’s editors.',
  //                 description:
  //                   'Stories exploring the whys and hows of habits, selected by Medium’s editors.',
  //                 updatedAt: 1569257917833,
  //                 featuredUserTitle: null,
  //                 featuredUserCustomBio: null,
  //                 color: '#FF4285F4',
  //                 bgColor: null,
  //                 hideIndex: false,
  //                 postIds: [
  //                   '6036f9cd9ef7',
  //                   '74b42574318c',
  //                   '8ad3d9ed1333',
  //                   '7f53c54aad88',
  //                   '934d96613a52',
  //                   '75e9dc1ad3c2',
  //                   '143e1e21ecbc',
  //                   '7f1fdfdb6081',
  //                   'd4110e73ebea',
  //                   '11114005114e',
  //                   '6a08b22b9689',
  //                   '72819896215d',
  //                   'dc0039b66923',
  //                   'b7e996313c39',
  //                   '3f4b7f5d3b33'
  //                 ],
  //                 coverImage: {
  //                   id: '1*BGcYQ_l6eDs0S2TM-HzdQg@2x.png',
  //                   __typename: 'ImageMetadata'
  //                 },
  //                 __typename: 'Sequence'
  //               }
  //             },
  //             __typename: 'StreamItem'
  //           },
  //           {
  //             itemType: {
  //               __typename: 'StreamItemSequence',
  //               sequence: {
  //                 slug: 'cointalk',
  //                 eyebrow: 'PODCAST',
  //                 title: 'CoinTalk',
  //                 subtitle: 'A new podcast about fake internet money.',
  //                 description:
  //                   'Come ride the crypto rollercoaster with hosts Aaron Lammer and Jay Kang (and guests) as they laugh their way through the week in Bitcoin and beyond.',
  //                 updatedAt: 1568081313971,
  //                 featuredUserTitle:
  //                   'Hosted by Aaron Lammer and Jay Caspian Kang',
  //                 featuredUserCustomBio:
  //                   'The official podcast of Bitcoin crashes.  Mailbag/contact: hi@cointalk.show',
  //                 color: '#FF057464',
  //                 bgColor: '#FFFFFFFF',
  //                 hideIndex: false,
  //                 postIds: [
  //                   '5492627df41e',
  //                   'd635c0410b63',
  //                   'd2a6b061fb09',
  //                   '51e41e1c87df',
  //                   '32773f6ee889',
  //                   '44d777ea6d39',
  //                   '4bdc53802fa2',
  //                   '759e6862eba2',
  //                   'ba8e8cbc3d4a',
  //                   'ddb4f2d38155',
  //                   'b488d04a07bb',
  //                   '95430f482e2f',
  //                   '5ba8fbce4a2b',
  //                   '3c9e8db93fd',
  //                   'e730a020f08c',
  //                   '7cbd335789a1',
  //                   '31ba67f5476e',
  //                   '8949a25982e0',
  //                   '50a90c3c13',
  //                   '64cdea0195ad',
  //                   '22e913acdbe6',
  //                   'f4498a2085c',
  //                   '90220f283a57',
  //                   '5b20d9a7910d',
  //                   '47595a6c84d5',
  //                   '72a36c1d82b',
  //                   '93d47d22b0f9',
  //                   'fd7f3a789842',
  //                   'f56862e9118d',
  //                   '75fe92ed41cf',
  //                   'a687b7c2959f',
  //                   '77ee1256aeb7',
  //                   'c33752c9c363',
  //                   'cd4242706b33',
  //                   'bb0389604f7f',
  //                   '9d7b34c1bda5',
  //                   'b42293422bbf',
  //                   '4128e2cc7385',
  //                   'e0890a77c65b',
  //                   '2b25c0e1f40e',
  //                   '239364e3ebd5',
  //                   'de53e4ebe2b4',
  //                   'cd1e2e7d62b5',
  //                   '1a37507c2313',
  //                   'ad9de8faf634',
  //                   '7b0376514372',
  //                   'b61b8221b104',
  //                   'e5e9f87f24e3',
  //                   '4eda76b43b0b',
  //                   'c7f6bcd55a89',
  //                   '4f5cda373118',
  //                   '58458081de0f',
  //                   'fc4ce3a86c16',
  //                   'c2d062080c2f',
  //                   'd38d7db33d8f',
  //                   '82d529907499',
  //                   '2254252ee6ff',
  //                   'ed25fb7eab37',
  //                   '39652a6612e5',
  //                   'abbbd3c53e10',
  //                   'e36c66b4392b',
  //                   'eaf69e061178',
  //                   'fc0c096583e9',
  //                   '7761ef08d9f5',
  //                   'e18916298d9b',
  //                   '44652b88526f',
  //                   '33abbcd65b57',
  //                   'a0b9ef7981eb',
  //                   '59c9aa0e192b',
  //                   'be3072fd2668',
  //                   'fd68d6699e05',
  //                   'cedf82567a7c',
  //                   'd3a22a4a3d94',
  //                   '1deada76e091',
  //                   '9a8226e2b802',
  //                   '22d62d1639a4',
  //                   '8f32bcb08273',
  //                   'e89c5c5f69b1',
  //                   'dedc38e9413b',
  //                   '62f62b65aefb',
  //                   'c94fa9c4226',
  //                   'a02bc72da6e1',
  //                   '913435b278c1',
  //                   '5017b84a7ba3',
  //                   'baf00bf05134',
  //                   '324e2dd2229c',
  //                   'ab5adf8d3a97',
  //                   'ef94876ff3b7',
  //                   '5156fa9ff431',
  //                   'f3e2c7aebbc2',
  //                   '39244e61a5f8',
  //                   '8ab23de3e1d9',
  //                   '87a94922bc72',
  //                   'ea8f0dbd9230',
  //                   '497f51ccd31c'
  //                 ],
  //                 coverImage: {
  //                   id: '1*viK1YLaRfqtEvEVWOYXfnA@2x.png',
  //                   __typename: 'ImageMetadata'
  //                 },
  //                 __typename: 'Sequence'
  //               }
  //             },
  //             __typename: 'StreamItem'
  //           },
  //           {
  //             itemType: {
  //               __typename: 'StreamItemSequence',
  //               sequence: {
  //                 slug: 'radical-spirits',
  //                 eyebrow: 'Collection',
  //                 title: 'Radical Spirits',
  //                 subtitle:
  //                   'PEN Award-winning historian Mitch Horowitz explores the strange (and getting stranger) nexus between alt-spirituality and politics.',
  //                 description:
  //                   'Exploring the strange (and getting stranger) nexus between alt-spirituality and politics.',
  //                 updatedAt: 1566502107022,
  //                 featuredUserTitle: 'Author',
  //                 featuredUserCustomBio: 'PEN Award-winning historian',
  //                 color: '#FF372685',
  //                 bgColor: null,
  //                 hideIndex: false,
  //                 postIds: [
  //                   '7a6a73903278',
  //                   'eea5a1a24550',
  //                   '57394d369757',
  //                   '3ddcf1afbbb3',
  //                   'a25946836300',
  //                   '476579837499',
  //                   'f33f675e9ab8',
  //                   '914078802371',
  //                   'ad58cd485fb9'
  //                 ],
  //                 coverImage: {
  //                   id: '1*f6bLkyp2-a3JU3ciY5SkpA@2x.png',
  //                   __typename: 'ImageMetadata'
  //                 },
  //                 __typename: 'Sequence'
  //               }
  //             },
  //             __typename: 'StreamItem'
  //           },
  //           {
  //             itemType: {
  //               __typename: 'StreamItemSequence',
  //               sequence: {
  //                 slug: 'the-long-middle',
  //                 eyebrow: 'Collection',
  //                 title: 'The Long Middle',
  //                 subtitle: 'Women and the in-between.',
  //                 description:
  //                   "Though every woman's aging charts a unique and personal journey, persistent and universal themes come into view. From the worry stone of challenging change, to the happy surprise of enhanced creativity, the landscape of midlife rolls by in a bizarre and ever-shifting blur. Lisa Renee shares a bit of her own odyssey and illuminates some of the history, humor and horrors of midlife in a female body. If you are a woman, or you know one, here are some useful notes from the in-between.",
  //                 updatedAt: 1565634073529,
  //                 featuredUserTitle: null,
  //                 featuredUserCustomBio: null,
  //                 color: '#FF000000',
  //                 bgColor: '#FFFFFADC',
  //                 hideIndex: false,
  //                 postIds: [
  //                   '9798df07ec1a',
  //                   'c0ad2af5a944',
  //                   '4509c2f65c1d',
  //                   '278e08bd4d1',
  //                   '58563855f797',
  //                   '37a13c786c43',
  //                   'be3f77700f14',
  //                   'b17b65c84a9d',
  //                   'fe92d9bbf563',
  //                   'e817875d1c5c'
  //                 ],
  //                 coverImage: {
  //                   id: '1*EzoJGHA8kSYr6OoUrc3jRw@2x.png',
  //                   __typename: 'ImageMetadata'
  //                 },
  //                 __typename: 'Sequence'
  //               }
  //             },
  //             __typename: 'StreamItem'
  //           },
  //           {
  //             itemType: {
  //               __typename: 'StreamItemSequence',
  //               sequence: {
  //                 slug: 'buy-yourself',
  //                 eyebrow: 'Column',
  //                 title: 'Buy Yourself',
  //                 subtitle: 'The economics of life online.',
  //                 description:
  //                   'The internet is designed to give us what we want: validation, connection, thumbs-up, and animated hearts. But what are its hidden costs? In this column, Zander Nethercutt explores how tech platforms, advertising, and optimization influence who we are and how we interact.',
  //                 updatedAt: 1561498330191,
  //                 featuredUserTitle: null,
  //                 featuredUserCustomBio: null,
  //                 color: '#FFFF7E60',
  //                 bgColor: null,
  //                 hideIndex: false,
  //                 postIds: [
  //                   'd41a3e7cc25a',
  //                   'ca1e59a37672',
  //                   'e6f16ac1e8f',
  //                   '32b238c116e6',
  //                   '13a75174e782',
  //                   'b6b31cfc4099',
  //                   'e6004f092856',
  //                   'd481390bfcee',
  //                   '26d406b853a2',
  //                   'd259be6ad90b',
  //                   'bd858bc3b413',
  //                   '7beb90c1e743',
  //                   '8b9cbf15642',
  //                   'd8579a843f80',
  //                   '7555f9f7543'
  //                 ],
  //                 coverImage: {
  //                   id: '1*GK25ddkxi0W3vTVjt1AeEA@2x.png',
  //                   __typename: 'ImageMetadata'
  //                 },
  //                 __typename: 'Sequence'
  //               }
  //             },
  //             __typename: 'StreamItem'
  //           },
  //           {
  //             itemType: {
  //               __typename: 'StreamItemSequence',
  //               sequence: {
  //                 slug: 'user-friendly',
  //                 eyebrow: 'Anthology',
  //                 title: 'User Friendly',
  //                 subtitle:
  //                   'Perspectives on all things UX, selected by Medium’s editors.',
  //                 description:
  //                   'Perspectives on all things UX, selected by Medium’s editors.',
  //                 updatedAt: 1560977394947,
  //                 featuredUserTitle: null,
  //                 featuredUserCustomBio: null,
  //                 color: '#FF6EC48E',
  //                 bgColor: null,
  //                 hideIndex: false,
  //                 postIds: [
  //                   'f0ae1773dd77',
  //                   '13c0387190b9',
  //                   '4fdfc6b7de23',
  //                   '1381784fd679',
  //                   '9f878d0bff80',
  //                   '6a025bc330a',
  //                   'c47defb033d2',
  //                   'e646ab1b0211',
  //                   '759c0e4ba2b3',
  //                   'cf30df9fb45a',
  //                   '84e411784894',
  //                   'eacf251d78ad',
  //                   'b4295a07afdc'
  //                 ],
  //                 coverImage: {
  //                   id: '1*7WZutZWxSFNphqSDnFxGNg@2x.png',
  //                   __typename: 'ImageMetadata'
  //                 },
  //                 __typename: 'Sequence'
  //               }
  //             },
  //             __typename: 'StreamItem'
  //           },
  //           {
  //             itemType: {
  //               __typename: 'StreamItemSequence',
  //               sequence: {
  //                 slug: 'nautilus-home',
  //                 eyebrow: 'Nautilus Collection',
  //                 title: 'Home',
  //                 subtitle: 'The places that matter',
  //                 description: 'The places that matter',
  //                 updatedAt: 1559777574103,
  //                 featuredUserTitle: null,
  //                 featuredUserCustomBio: null,
  //                 color: null,
  //                 bgColor: null,
  //                 hideIndex: false,
  //                 postIds: [
  //                   '7d916351d94d',
  //                   '7bae9b0e1eb5',
  //                   '9ac9d751fa34',
  //                   '83ca338fb2e2',
  //                   '97233d1f8a',
  //                   'c21d5fa14fd',
  //                   'c183ae5a9e34'
  //                 ],
  //                 coverImage: {
  //                   id: '1*Wxd4wJQwvZDT7CCNjUGJQA@2x.png',
  //                   __typename: 'ImageMetadata'
  //                 },
  //                 __typename: 'Sequence'
  //               }
  //             },
  //             __typename: 'StreamItem'
  //           },
  //           {
  //             itemType: {
  //               __typename: 'StreamItemSequence',
  //               sequence: {
  //                 slug: 'nautilus-learning',
  //                 eyebrow: 'Nautilus Collection',
  //                 title: 'Learning',
  //                 subtitle: 'New lessons',
  //                 description: 'New lessons',
  //                 updatedAt: 1559777295874,
  //                 featuredUserTitle: null,
  //                 featuredUserCustomBio: null,
  //                 color: null,
  //                 bgColor: null,
  //                 hideIndex: false,
  //                 postIds: [
  //                   '32dab1d08bdc',
  //                   'bb8b03fd896b',
  //                   'f9cb59baedac',
  //                   '2321bc75887d',
  //                   '48b2e7bedb14',
  //                   'fe8ef573f326',
  //                   '87de9ce8b54',
  //                   'eda16bcf3eef',
  //                   '3f2357502a73',
  //                   'c7a56512bc47',
  //                   '30ca52508d22',
  //                   'a4645ed4b3cf'
  //                 ],
  //                 coverImage: {
  //                   id: '1*7WG9hwvbhQfMzpYvVaG-pQ@2x.png',
  //                   __typename: 'ImageMetadata'
  //                 },
  //                 __typename: 'Sequence'
  //               }
  //             },
  //             __typename: 'StreamItem'
  //           },
  //           {
  //             itemType: {
  //               __typename: 'StreamItemSequence',
  //               sequence: {
  //                 slug: 'nautilus-adaptation',
  //                 eyebrow: 'Nautilus Collection',
  //                 title: 'Adaptation',
  //                 subtitle: 'Fitting in',
  //                 description: 'Fitting in',
  //                 updatedAt: 1559777184354,
  //                 featuredUserTitle: null,
  //                 featuredUserCustomBio: null,
  //                 color: null,
  //                 bgColor: null,
  //                 hideIndex: false,
  //                 postIds: ['d704b2a3fa39', 'e9d1fde0eb6e'],
  //                 coverImage: {
  //                   id: '1*hqrhRp24nQJPDZFQAu7nng@2x.png',
  //                   __typename: 'ImageMetadata'
  //                 },
  //                 __typename: 'Sequence'
  //               }
  //             },
  //             __typename: 'StreamItem'
  //           }
  //         ],
  //         pagingInfo: {
  //           next: {
  //             limit: 10,
  //             page: null,
  //             source: null,
  //             to: '1559777184354',
  //             ignoredIds: null,
  //             __typename: 'PageParams'
  //           },
  //           __typename: 'Paging'
  //         },
  //         __typename: 'StreamConnection'
  //       }
  //     }
  //   }
  // ]
  // const posts = await prisma.post.findMany()
  // const postIds = posts.map(post => post.id)
  // const users = await prisma.user.findMany()
  // const result = await prisma.collection.createMany({
  //   data: data[0]?.data?.sequenceStreamConnection?.stream?.map(item => {
  //     const sequence = item.itemType.sequence
  //     return {
  //       slug: sequence.slug,
  //       name: sequence.title,
  //       subtitle: sequence.subtitle,
  //       description: sequence.description,
  //       image: 'https://miro.medium.com/v2/' + sequence.coverImage.id,
  //       textColor: sequence.color,
  //       bgColor: sequence.bgColor,
  //       authorId: users[Math.floor(Math.random() * 25)].id
  //     }
  //   })
  // })
  // const collections = await prisma.collection.findMany()
  // const posts = await prisma.post.findMany()
  // const result = await prisma.collectionPost.createMany({
  //   data: posts.map(post => {
  //     return {
  //       collectionId: collections[Math.floor(Math.random() * 10)].id,
  //       postId: post.id,
  //       authorId: post.authorId
  //     }
  //   })
  // })
  // return new Response(JSON.stringify(result))
  const users = await prisma.user.findMany()

  for (const user of users) {
    const name = user.name
    const firstInitial = name[0]
    const lastName = name?.split(' ').pop()?.toLowerCase()
    const randomInt = Math.floor(Math.random() * 10000)
    const mediumUsername = slugify(`@${firstInitial}${lastName}${randomInt}`, {
      lower: true
    })

    console.log(
      await prisma.user.update({
        where: { id: user.id },
        data: {
          username: mediumUsername
        }
      })
    )
  }
}
