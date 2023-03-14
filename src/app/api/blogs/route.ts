import prisma from '../../../../prisma/client'

export async function GET(request: Request) {
  // const data = [
  //   {
  //     data: {
  //       tagFeed: {
  //         items: [
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '629c57e73e42',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Linus Schlumberger',
  //                 username: 'LinusSchlumberger',
  //                 id: '8fd06e48978e',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 20,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: 'Web Developer & Student in AI',
  //                 imageId: '1*eKlxioCvDYPiMUjdc1K8YQ.jpeg'
  //               },
  //               collection: {
  //                 __typename: 'Collection',
  //                 id: 'd0b105d10f0a',
  //                 name: 'Better Programming',
  //                 domain: 'betterprogramming.pub',
  //                 slug: 'better-programming'
  //               },
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '6cc9',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: '12d00519f67a_preview_0',
  //                       name: '8982',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'All JavaScript and TypeScript Features From the Last 3 Years',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '12d00519f67a_preview_1',
  //                       name: '936a',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '1*2yo_1MdBQE1pOYWV4ueyfQ.png',
  //                         originalHeight: 512,
  //                         originalWidth: 512,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: 'TypeScript as envisioned by Stable Diffusion',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '12d00519f67a_preview_2',
  //                       name: 'e852',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'This article goes through almost all of the changes of the last 3 years (and some from earlier) in JavaScript / ECMAScript and TypeScript.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 112,
  //                           end: 123,
  //                           href: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'A',
  //                           start: 127,
  //                           end: 137,
  //                           href: 'https://www.typescriptlang.org/',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '12d00519f67a_preview_3',
  //                       name: '7f15',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Not all of the following features will be relevant to you or even practical, but they should instead serve to show what’s possible and to deepen…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle: ''
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678358020648,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678452393013,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '1*2yo_1MdBQE1pOYWV4ueyfQ.png',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 29.255974842767294,
  //               sequence: null,
  //               title:
  //                 'All JavaScript and TypeScript Features From the Last 3 Years',
  //               uniqueSlug:
  //                 'all-javascript-and-typescript-features-of-the-last-3-years-629c57e73e42',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: 'APPROVED',
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://betterprogramming.pub/all-javascript-and-typescript-features-of-the-last-3-years-629c57e73e42',
  //               clapCount: 163,
  //               voterCount: 25,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 4,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'javascript',
  //                   displayTitle: 'JavaScript',
  //                   normalizedTagSlug: 'javascript'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'typescript',
  //                   displayTitle: 'Typescript',
  //                   normalizedTagSlug: 'typescript'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'programming',
  //                   displayTitle: 'Programming',
  //                   normalizedTagSlug: 'programming'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'software-development',
  //                   displayTitle: 'Software Development',
  //                   normalizedTagSlug: 'software-development'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '37a8e5c26d81',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Nicholas Roberto Drabowski',
  //                 username: 'nicholas.drabowski',
  //                 id: 'e56ace1270e8',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 102,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: 'My life goal is to improve lives at scale through healthcare engineering while having fun on the journey! https://www.linkedin.com/in/ndrabowski/',
  //                 imageId: '1*-zLvdiqmFI_ciUZeVrcPfQ.png'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '8fb8',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: 'b171bbc666ae_preview_0',
  //                       name: '33e1',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Calling All Developers: Help Us Make a Difference with Open Source Healthcare Technology',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'b171bbc666ae_preview_1',
  //                       name: '045e',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '1*dGHL9OpyXsnSwVdaV9w3QA.png',
  //                         originalHeight: 498,
  //                         originalWidth: 1301,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: 'The cost of ineffective action is a continuation of global cycles of poverty and social…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'b171bbc666ae_preview_2',
  //                       name: '6853',
  //                       type: 'H4',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Dear Developers,',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'b171bbc666ae_preview_3',
  //                       name: '6fbd',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'are you ready to make a difference in healthcare technology? Join our open-source initiative to improve the quality of healthcare for children worldwide.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'b171bbc666ae_preview_4',
  //                       name: '9930',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'At the heart of this initiative is a telehealth platform called Portal Telemedicine, which integrates data from over 30M patients to provide quality healthcare access in underserved…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'Learn how we are helping improve the health of children with tech.'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678394208375,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678394208375,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '1*dGHL9OpyXsnSwVdaV9w3QA.png',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 4.2650943396226415,
  //               sequence: null,
  //               title:
  //                 'Calling All Developers: Help Us Make a Difference with Open Source Healthcare Technology',
  //               uniqueSlug:
  //                 'calling-all-developers-help-us-make-a-difference-with-open-source-healthcare-technology-37a8e5c26d81',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/@nicholas.drabowski/calling-all-developers-help-us-make-a-difference-with-open-source-healthcare-technology-37a8e5c26d81',
  //               clapCount: 5,
  //               voterCount: 1,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'technology',
  //                   displayTitle: 'Technology',
  //                   normalizedTagSlug: 'technology'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'self-improvement',
  //                   displayTitle: 'Self Improvement',
  //                   normalizedTagSlug: 'self-improvement'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'python',
  //                   displayTitle: 'Python',
  //                   normalizedTagSlug: 'python'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'development',
  //                   displayTitle: 'Development',
  //                   normalizedTagSlug: 'development'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '1cd633b9755a',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Syed Mohsin',
  //                 username: 'syedmohsin',
  //                 id: '8008fa80c712',
  //                 mediumMemberAt: 1671284486000,
  //                 socialStats: {
  //                   followerCount: 149,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: "Engineering Leader | Full-Stack Engineer | Player-Coach — I write about engineering lessons I don't want to forget https://linktr.ee/syedbmohsin",
  //                 imageId: '1*gK7meSLQYjD66P6_9HjKLw.jpeg'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: 'fe7d',
  //                       startIndex: 0,
  //                       textLayout: 'FLOW',
  //                       imageLayout: 'NONE',
  //                       backgroundImage: null,
  //                       videoLayout: 'NO_VIDEO',
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: 'ec9851d9119d_preview_0',
  //                       name: '3f40',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Writing a Pragmatic Tech Spec',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'ec9851d9119d_preview_1',
  //                       name: '9c7e',
  //                       type: 'H4',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Find joy in writing specs and avoid the waterfall trap.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'ec9851d9119d_preview_2',
  //                       name: 'dc1b',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '0*tfBHQx2TTSSkuf7_',
  //                         originalHeight: 563,
  //                         originalWidth: 1000,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: 'From Daniel McCullough on Unsplash',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 5,
  //                           end: 22,
  //                           href: 'https://unsplash.com/@d_mccullough',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'A',
  //                           start: 26,
  //                           end: 34,
  //                           href: 'https://unsplash.com/photos/-FPFq_trr2Y',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'ec9851d9119d_preview_3',
  //                       name: 'c28c',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Few things deflated my excitement faster than a manager announcing “let’s write a tech spec for this new project.”',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'ec9851d9119d_preview_4',
  //                       name: 'fb3c',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'When a meaty project lands on my desk, my brain goes into overdrive wrestling with the various approaches I could take.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'ec9851d9119d_preview_5',
  //                       name: '309d',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'My fingers itch to find a keyboard so I can…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'Find joy in writing specs and avoid the waterfall trap.'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678461686505,
  //               isLocked: true,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678461686505,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '0*tfBHQx2TTSSkuf7_',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 8.647169811320754,
  //               sequence: null,
  //               title: 'Writing a Pragmatic Tech Spec',
  //               uniqueSlug: 'writing-a-pragmatic-tech-spec-1cd633b9755a',
  //               visibility: 'LOCKED',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/@syedmohsin/writing-a-pragmatic-tech-spec-1cd633b9755a',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'software-development',
  //                   displayTitle: 'Software Development',
  //                   normalizedTagSlug: 'software-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'programming',
  //                   displayTitle: 'Programming',
  //                   normalizedTagSlug: 'programming'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'javascript',
  //                   displayTitle: 'JavaScript',
  //                   normalizedTagSlug: 'javascript'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'software-engineering',
  //                   displayTitle: 'Software Engineering',
  //                   normalizedTagSlug: 'software-engineering'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: 'f69fdb09c976',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Balaji Dharma',
  //                 username: 'balajidharma',
  //                 id: '17217f29618a',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 351,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: {
  //                   live: {
  //                     domain: 'balajidharma.medium.com',
  //                     __typename: 'CustomDomain'
  //                   },
  //                   __typename: 'CustomDomainState'
  //                 },
  //                 hasSubdomain: true,
  //                 bio: 'Web developer. https://github.com/balajidharma Join Medium https://bit.ly/3SEeYvx Buy me a coffee https://bit.ly/41q4dku',
  //                 imageId: '1*IZNRy-dku7WW2-hWe4CcJA.jpeg'
  //               },
  //               collection: {
  //                 __typename: 'Collection',
  //                 id: '4e2c1156667e',
  //                 name: 'Dev Genius',
  //                 domain: 'blog.devgenius.io',
  //                 slug: 'dev-genius'
  //               },
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '8794',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: 'd995108026b4_preview_0',
  //                       name: '3735',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Laravel creates a chatGPT application using OpenAI API',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'd995108026b4_preview_1',
  //                       name: 'f3d9',
  //                       type: 'H4',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'build a ChatGPT application using Laravel — Part 1 Installation',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'd995108026b4_preview_2',
  //                       name: 'c087',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '0*3OLyNnh5VX__Cw9q',
  //                         originalHeight: 3456,
  //                         originalWidth: 4608,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: 'Photo by Emiliano Vittoriosi on Unsplash',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 9,
  //                           end: 28,
  //                           href: 'https://unsplash.com/pt-br/@emilianovittoriosi?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'A',
  //                           start: 32,
  //                           end: 40,
  //                           href: 'https://unsplash.com?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'd995108026b4_preview_3',
  //                       name: '0355',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'The ChatGPT is an Artificial Intelligence(AI) chatbot launched by OpenAI. It is built on top of OpenAI’s GPT-3.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 66,
  //                           end: 72,
  //                           href: 'https://openai.com/',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'd995108026b4_preview_4',
  //                       name: '11bc',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'You can try the ChatGPT on https://chat.openai.com/chat',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 27,
  //                           end: 55,
  //                           href: 'https://chat.openai.com/chat',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'd995108026b4_preview_5',
  //                       name: 'ba0a',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Already I have published articles to create a chatGPT application using python.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'd995108026b4_preview_6',
  //                       name: 'e3e8',
  //                       type: 'ULI',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Create an Application In ChatGPT using OpenAI API and Python flask framework.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 0,
  //                           end: 77,
  //                           href: 'https://medium.com/geekculture/how-to-create-an-application-in-chatgpt-using-openai-api-5d3f3d4be2d2',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'd995108026b4_preview_7',
  //                       name: 'c247',
  //                       type: 'ULI',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Create…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 0,
  //                           end: 60,
  //                           href: 'https://medium.com/geekculture/how-to-create-an-application-in-chatgpt-using-openai-api-and-django-be7d5e36fbd7',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'build a ChatGPT application using Laravel — Part 1 Installation'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678447000928,
  //               isLocked: true,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678447000928,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '0*3OLyNnh5VX__Cw9q',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 3.9141509433962263,
  //               sequence: null,
  //               title: 'Laravel creates a chatGPT application using OpenAI API',
  //               uniqueSlug:
  //                 'laravel-creates-a-chatgpt-application-using-openai-api-f69fdb09c976',
  //               visibility: 'LOCKED',
  //               pendingCollection: null,
  //               statusForCollection: 'APPROVED',
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://blog.devgenius.io/laravel-creates-a-chatgpt-application-using-openai-api-f69fdb09c976',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'laravel',
  //                   displayTitle: 'Laravel',
  //                   normalizedTagSlug: 'laravel'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'php',
  //                   displayTitle: 'PHP',
  //                   normalizedTagSlug: 'php'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'chatgpt',
  //                   displayTitle: 'Chatgpt',
  //                   normalizedTagSlug: 'chatgpt'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'laravel-framework',
  //                   displayTitle: 'Laravel Framework',
  //                   normalizedTagSlug: 'laravel-framework'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: 'fa70f12b08a0',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Raphael Aleixo',
  //                 username: 'raphaelaleixo',
  //                 id: '11e9d366bb39',
  //                 mediumMemberAt: 1505235030000,
  //                 socialStats: {
  //                   followerCount: 163,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: {
  //                   live: {
  //                     domain: 'raphaelaleixo.medium.com',
  //                     __typename: 'CustomDomain'
  //                   },
  //                   __typename: 'CustomDomainState'
  //                 },
  //                 hasSubdomain: true,
  //                 bio: '',
  //                 imageId: '0*N24595m8q1L2lBYV.jpg'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '55fc',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: '92e7294863fb_preview_0',
  //                       name: '2d79',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Using React, Google Sheets, and CSS to create a dynamic cv and cover letter generator.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '92e7294863fb_preview_1',
  //                       name: 'af89',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '1*a1Jyu1wp1SoscuQaL8NO-w.png',
  //                         originalHeight: 1164,
  //                         originalWidth: 2000,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: '',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '92e7294863fb_preview_2',
  //                       name: 'f76b',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'The last few months have not been easy for those working in the tech industry. Week after week, we read news about hundreds of good professionals being left without jobs because of a new layoff.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '92e7294863fb_preview_3',
  //                       name: 'c4ec',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'And now, with an excedent of good talent free in the job market, hunting jobs…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'STRONG',
  //                           start: 97,
  //                           end: 216,
  //                           href: null,
  //                           anchorType: null,
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'The last few months have not been easy for those working in the tech industry. Week after week, we read news about hundreds of good…'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678394234588,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678420372079,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '1*a1Jyu1wp1SoscuQaL8NO-w.png',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 2.8852201257861636,
  //               sequence: null,
  //               title:
  //                 'Using React, Google Sheets, and CSS to create a dynamic cv and cover letter generator.',
  //               uniqueSlug:
  //                 'using-react-google-sheets-and-css-to-create-a-dynamic-cv-and-cover-letter-generator-fa70f12b08a0',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://raphaelaleixo.medium.com/using-react-google-sheets-and-css-to-create-a-dynamic-cv-and-cover-letter-generator-fa70f12b08a0',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'javascript',
  //                   displayTitle: 'JavaScript',
  //                   normalizedTagSlug: 'javascript'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'job-hunting',
  //                   displayTitle: 'Job Hunting',
  //                   normalizedTagSlug: 'job-hunting'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'react',
  //                   displayTitle: 'React',
  //                   normalizedTagSlug: 'react'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'product-design',
  //                   displayTitle: 'Product Design',
  //                   normalizedTagSlug: 'product-design'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: 'cf7c5054d607',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Dmitrijus Glezeris',
  //                 username: 'kerneldemon',
  //                 id: 'a1995838e051',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 0,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: '',
  //                 imageId: '0*RHHEtrXvFoi5Nlz5'
  //               },
  //               collection: {
  //                 __typename: 'Collection',
  //                 id: '96ddce6ad17f',
  //                 name: 'Nord Security tech blog',
  //                 domain: null,
  //                 slug: 'nord-security-tech-blog'
  //               },
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '2391',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: '256f16833c2d_preview_0',
  //                       name: 'd1c9',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Tips for tool-building using OpenAPI',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '256f16833c2d_preview_1',
  //                       name: '6d69',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '1*4czGjRPzNmzS43843o3f8w.jpeg',
  //                         originalHeight: 720,
  //                         originalWidth: 1280,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: '',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '256f16833c2d_preview_2',
  //                       name: 'fece',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'The main reason I became a developer was to build interesting things. But as with every job, you quickly realize that repetitive tasks are a big part of your life. …',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'Engineering Manager Dmitrijus Glezeris walks us through how to create client SDKs for APIs and keep them up to date'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678457498910,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678457498910,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '1*4czGjRPzNmzS43843o3f8w.jpeg',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 7.5122641509433965,
  //               sequence: null,
  //               title: 'Tips for tool-building using OpenAPI',
  //               uniqueSlug: 'tips-for-tool-building-using-openapi-cf7c5054d607',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: 'APPROVED',
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/nord-security-tech-blog/tips-for-tool-building-using-openapi-cf7c5054d607',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'software-development',
  //                   displayTitle: 'Software Development',
  //                   normalizedTagSlug: 'software-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'api',
  //                   displayTitle: 'API',
  //                   normalizedTagSlug: 'api'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'api-development',
  //                   displayTitle: 'Api Development',
  //                   normalizedTagSlug: 'api-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'sdk',
  //                   displayTitle: 'Sdk',
  //                   normalizedTagSlug: 'sdk'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '43f608a0e8b5',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Himanshutiwary',
  //                 username: 'himanshutiwary666',
  //                 id: '9ae7e70c5ac4',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 0,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: 'Google Cloud certified Professional DevOps Engineer | Cloud Network Engineer | Programmer Analyst at Cognizant',
  //                 imageId: '0*z9iQucKFxA9FGLDK'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '1577',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: '3eab2a64ec5f_preview_0',
  //                       name: 'e97a',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Hosting a Static Website using IIS and GCP Load Balancer',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '3eab2a64ec5f_preview_1',
  //                       name: 'f6d1',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '0*I4X-xF5NoFGEgcth.png',
  //                         originalHeight: 333,
  //                         originalWidth: 500,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: '',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '3eab2a64ec5f_preview_2',
  //                       name: 'f686',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Hosting a static website on the internet is a simple task. However, when it comes to deploying it on a production-level, load-balanced environment, it requires some expertise. …',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'Hosting a static website on the internet is a simple task. However, when it comes to deploying it on a production-level, load-balanced…'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678455510763,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678455510763,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '0*I4X-xF5NoFGEgcth.png',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 4.6745283018867925,
  //               sequence: null,
  //               title:
  //                 'Hosting a Static Website using IIS and GCP Load Balancer',
  //               uniqueSlug:
  //                 'hosting-a-static-website-using-iis-and-gcp-load-balancer-43f608a0e8b5',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/@himanshutiwary666/hosting-a-static-website-using-iis-and-gcp-load-balancer-43f608a0e8b5',
  //               clapCount: 13,
  //               voterCount: 1,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'gcp',
  //                   displayTitle: 'Gcp',
  //                   normalizedTagSlug: 'gcp'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'devops',
  //                   displayTitle: 'DevOps',
  //                   normalizedTagSlug: 'devops'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '3e0c12a654e',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Nikhil Karve',
  //                 username: 'nikhilkarve007',
  //                 id: 'f3eed6b09899',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 9,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: 'MSCS student at GSU. Writing: Machine Learning, Frontend Development.',
  //                 imageId: '1*JEUMqfJTSmbx4nhSiK6lwQ.jpeg'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: 'ad51',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: 'fa8891ad253_preview_0',
  //                       name: '9409',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Why do we need to understand JS deeply?',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'fa8891ad253_preview_1',
  //                       name: '6fc1',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'This is going to be a short and quick read.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'fa8891ad253_preview_2',
  //                       name: 'e290',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '1*LlwIBSR3hKwy_YGIH61H2Q.png',
  //                         originalHeight: 1280,
  //                         originalWidth: 1024,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: '[Ref — https://torquemag.io/2016/01/torque-toons-learn-javascript-deeply/]',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 7,
  //                           end: 73,
  //                           href: 'https://torquemag.io/2016/01/torque-toons-learn-javascript-deeply/',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'fa8891ad253_preview_3',
  //                       name: '3254',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Why should we learn and understand JS deeply before moving onto a new fancy framework?',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'fa8891ad253_preview_4',
  //                       name: 'c76d',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'If you are writing JS for long, you must have come across some weird part of code where it was a very simple thing in…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle: 'This is going to be a short and quick read.'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678423112338,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678423112338,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '1*LlwIBSR3hKwy_YGIH61H2Q.png',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 1.2792452830188679,
  //               sequence: null,
  //               title: 'Why do we need to understand JS deeply?',
  //               uniqueSlug:
  //                 'why-do-we-need-to-understand-js-deeply-3e0c12a654e',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/@nikhilkarve007/why-do-we-need-to-understand-js-deeply-3e0c12a654e',
  //               clapCount: 1,
  //               voterCount: 1,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 1,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'javascript',
  //                   displayTitle: 'JavaScript',
  //                   normalizedTagSlug: 'javascript'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'front-end-development',
  //                   displayTitle: 'Front End Development',
  //                   normalizedTagSlug: 'front-end-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'react',
  //                   displayTitle: 'React',
  //                   normalizedTagSlug: 'react'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'typescript',
  //                   displayTitle: 'Typescript',
  //                   normalizedTagSlug: 'typescript'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '9305cb274bf9',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Babylon.js',
  //                 username: 'babylonjs',
  //                 id: 'efd98bd3d8f4',
  //                 mediumMemberAt: 1549267200000,
  //                 socialStats: {
  //                   followerCount: 1544,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: {
  //                   live: {
  //                     domain: 'babylonjs.medium.com',
  //                     __typename: 'CustomDomain'
  //                   },
  //                   __typename: 'CustomDomainState'
  //                 },
  //                 hasSubdomain: true,
  //                 bio: 'Babylon.js: Powerful, Beautiful, Simple, Open — Web-Based 3D At Its Best. https://www.babylonjs.com/',
  //                 imageId: '2*O78yas4rOMHlTTy5PzcOIA.png'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: 'a68d',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: '7f4c7ef8236_preview_0',
  //                       name: '3567',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'POC: The Potato Optimized Carver',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '7f4c7ef8236_preview_1',
  //                       name: '2340',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'This weekend, while cooking for my daughter, we decided to whip up some delicious french fries (or, as they should rightly be called, Belgium fries!). As we were cutting them up, I showed her how to carve a face into a potato — and that’s when it hit me. Why…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'This weekend, while cooking for my daughter, we decided to whip up some delicious french fries (or, as they should rightly be called…'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678376923319,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678376939541,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '1*OSWkLrDqUtwYluI-MMcPEQ.png',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 3.7,
  //               sequence: null,
  //               title: 'POC: The Potato Optimized Carver',
  //               uniqueSlug: 'poc-the-potato-optimized-carver-9305cb274bf9',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://babylonjs.medium.com/poc-the-potato-optimized-carver-9305cb274bf9',
  //               clapCount: 2,
  //               voterCount: 1,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'babylonjs',
  //                   displayTitle: 'Babylonjs',
  //                   normalizedTagSlug: 'babylonjs'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'webgl',
  //                   displayTitle: 'Webgl',
  //                   normalizedTagSlug: 'webgl'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: '3d',
  //                   displayTitle: '3d',
  //                   normalizedTagSlug: '3d'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '1e8772fe2dc0',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Ace D Baugh',
  //                 username: 'ace.d.baugh',
  //                 id: '109cc43a00d4',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 5,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: 'I am a Fine Art Photographer and Fine Code Programmer. I shoot Sony Raw and am a Full Stack Web Developer',
  //                 imageId: '0*d3R932sPuHrikXjG'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: 'ab88',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: '883773780c5_preview_0',
  //                       name: '62e2',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Angular RouterOutlet',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '883773780c5_preview_1',
  //                       name: '4137',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '0*q_vgoXsnWi5qKmu6',
  //                         originalHeight: 4935,
  //                         originalWidth: 3037,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: 'Photo by Joel Filipe on Unsplash',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 9,
  //                           end: 20,
  //                           href: 'https://unsplash.com/de/@joelfilip?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'A',
  //                           start: 24,
  //                           end: 32,
  //                           href: 'https://unsplash.com?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '883773780c5_preview_2',
  //                       name: '4c5b',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'A route in an Angular app can be defined using the RouterOutlet directive. This directive creates an in-app navigation system by dynamically inserting components wherever specified in the template. The RouterOutlet directive indicates a location in the template where a component should be inserted based on the current route. …',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'A route in an Angular app can be defined using the RouterOutlet directive. This directive creates an in-app navigation system by…'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678411996310,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678411996310,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '0*q_vgoXsnWi5qKmu6',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 1.6943396226415093,
  //               sequence: null,
  //               title: 'Angular RouterOutlet',
  //               uniqueSlug: 'angular-routeroutlet-1e8772fe2dc0',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/@ace.d.baugh/angular-routeroutlet-1e8772fe2dc0',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'bellevue-university',
  //                   displayTitle: 'Bellevue University',
  //                   normalizedTagSlug: 'bellevue-university'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-425',
  //                   displayTitle: 'Web 425',
  //                   normalizedTagSlug: 'web-425'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'discussion-post',
  //                   displayTitle: 'Discussion Post',
  //                   normalizedTagSlug: 'discussion-post'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'router-outlet',
  //                   displayTitle: 'Router Outlet',
  //                   normalizedTagSlug: 'router-outlet'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '5cb43ef147ac',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Erwin',
  //                 username: 'erwin_17615',
  //                 id: '680ab6f6b2eb',
  //                 mediumMemberAt: 1595813272000,
  //                 socialStats: {
  //                   followerCount: 206,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: '',
  //                 imageId: '0*mLxsFFLjxOaiOTfm'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '07aa',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: '2200c33a9d76_preview_0',
  //                       name: '57fe',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Distinguishing Websites and Web Apps for Better Performance',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '2200c33a9d76_preview_1',
  //                       name: '3a70',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '1*Uw3IaV-wHnYkMUrLBVTfpg.jpeg',
  //                         originalHeight: 3648,
  //                         originalWidth: 5472,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: '',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '2200c33a9d76_preview_2',
  //                       name: '4944',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'I recently listened to an interesting podcast episode that highlighted the fact that only a small percentage of internet users browse the web using the newest devices. In fact, most people access the internet with relatively slow smartphones. …',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 38,
  //                           end: 53,
  //                           href: 'https://topenddevs.com/podcasts/javascript-jabber/episodes/web-performance-with-alex-russell-jsj-569',
  //                           anchorType: 'LINK',
  //                           userId: '',
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'I recently listened to an interesting podcast episode that highlighted the fact that only a small percentage of internet users browse the…'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678400626794,
  //               isLocked: true,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678436901900,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '1*Uw3IaV-wHnYkMUrLBVTfpg.jpeg',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 1.7547169811320755,
  //               sequence: null,
  //               title:
  //                 'Distinguishing Websites and Web Apps for Better Performance',
  //               uniqueSlug:
  //                 'web-performance-101-distinguishing-websites-and-web-apps-for-success-5cb43ef147ac',
  //               visibility: 'LOCKED',
  //               pendingCollection: {
  //                 id: '4b3a1ed4f11c',
  //                 creator: {
  //                   id: 'a7b125868703',
  //                   __typename: 'User'
  //                 },
  //                 name: 'JavaScript in Plain English',
  //                 __typename: 'Collection'
  //               },
  //               statusForCollection: 'PENDING',
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/@erwin_17615/web-performance-101-distinguishing-websites-and-web-apps-for-success-5cb43ef147ac',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'javascript',
  //                   displayTitle: 'JavaScript',
  //                   normalizedTagSlug: 'javascript'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'react',
  //                   displayTitle: 'React',
  //                   normalizedTagSlug: 'react'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: 'd29e40226e50',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Aravind',
  //                 username: 'aravind16101800',
  //                 id: '92bddb167d49',
  //                 mediumMemberAt: 1677868512794,
  //                 socialStats: {
  //                   followerCount: 107,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: 'I am a Fullstack web developer working in HCL technology. I have published articles on web development, system design, productivity and finance.',
  //                 imageId: '1*C7tfaNf8ZKMYrJNb9m_7Bg.jpeg'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '5ffc',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: 'fedbf2b284e_preview_0',
  //                       name: '3ecc',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'FreeCodeCamp vs The Odin Project: The Ultimate Web Development Showdown!',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'fedbf2b284e_preview_1',
  //                       name: 'df3a',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '0*__57h0CCTqkOX5qy',
  //                         originalHeight: 4000,
  //                         originalWidth: 6000,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: 'Photo by GR Stocks on Unsplash',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 9,
  //                           end: 18,
  //                           href: 'https://unsplash.com/@grstocks?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'A',
  //                           start: 22,
  //                           end: 30,
  //                           href: 'https://unsplash.com?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'fedbf2b284e_preview_2',
  //                       name: '6ebb',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Web development has become a highly sought-after skill in recent years, with many individuals looking to learn the ins and outs of coding and website design.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'fedbf2b284e_preview_3',
  //                       name: 'ea47',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'There are many resources available for those looking to learn web development, but two of the most popular options are FreeCodeCamp and The Odin…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'Web development has become a highly sought-after skill in recent years, with many individuals looking to learn the ins and outs of coding…'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678456437102,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678456437102,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '0*__57h0CCTqkOX5qy',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 2.8965408805031445,
  //               sequence: null,
  //               title:
  //                 'FreeCodeCamp vs The Odin Project: The Ultimate Web Development Showdown!',
  //               uniqueSlug:
  //                 'freecodecamp-vs-the-odin-project-the-ultimate-web-development-showdown-d29e40226e50',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/@aravind16101800/freecodecamp-vs-the-odin-project-the-ultimate-web-development-showdown-d29e40226e50',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'programming',
  //                   displayTitle: 'Programming',
  //                   normalizedTagSlug: 'programming'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'coding',
  //                   displayTitle: 'Coding',
  //                   normalizedTagSlug: 'coding'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'learning-to-code',
  //                   displayTitle: 'Learning To Code',
  //                   normalizedTagSlug: 'learning-to-code'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'tech',
  //                   displayTitle: 'Tech',
  //                   normalizedTagSlug: 'tech'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: 'd25c75d3ac87',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Lovejot singh',
  //                 username: 'lovejot.singh',
  //                 id: '19d7e7ae1978',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 5,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: 'Javascript developer @Kochartech pvt ltd || Innovative web developer with a passion for coding and building exceptional apps, hailing from Punjab, India.',
  //                 imageId: '1*3O82le3dUmWS_rFYNnrKlQ.jpeg'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '8add',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: '75a3bcff5a7c_preview_0',
  //                       name: '0ce0',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Exploring the Power of Iterators and Generators in JavaScript || Advanced JavaScript Iteration Techniques Using Iterators and Generators.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'STRONG',
  //                           start: 0,
  //                           end: 65,
  //                           href: '',
  //                           anchorType: 'LINK',
  //                           userId: '',
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '75a3bcff5a7c_preview_1',
  //                       name: '548f',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: '“After reading this, I guarantee you’ll feel more confident.”',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '75a3bcff5a7c_preview_2',
  //                       name: '22d9',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '1*dGsH9FGDEGMZArC4ATXdog.jpeg',
  //                         originalHeight: 500,
  //                         originalWidth: 888,
  //                         focusPercentX: -1,
  //                         focusPercentY: -1,
  //                         alt: '',
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: '',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '75a3bcff5a7c_preview_3',
  //                       name: '1bb2',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'What are iterators?',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '75a3bcff5a7c_preview_4',
  //                       name: '82b0',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'An iterator is an object that provides a way to access the elements of a collection, one at a time, without exposing the underlying data structure. …',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'CODE',
  //                           start: 208,
  //                           end: 216,
  //                           href: null,
  //                           anchorType: null,
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   '“After reading this, I guarantee you’ll feel more confident.”'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678433366421,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678434138123,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '1*dGsH9FGDEGMZArC4ATXdog.jpeg',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 3.9433962264150946,
  //               sequence: null,
  //               title:
  //                 'Exploring the Power of Iterators and Generators in JavaScript || Advanced JavaScript Iteration…',
  //               uniqueSlug:
  //                 'exploring-the-power-of-iterators-and-generators-in-javascript-advanced-javascript-iteration-d25c75d3ac87',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/@lovejot.singh/exploring-the-power-of-iterators-and-generators-in-javascript-advanced-javascript-iteration-d25c75d3ac87',
  //               clapCount: 10,
  //               voterCount: 1,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'javascript',
  //                   displayTitle: 'JavaScript',
  //                   normalizedTagSlug: 'javascript'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'javascript-tips',
  //                   displayTitle: 'Javascript Tips',
  //                   normalizedTagSlug: 'javascript-tips'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'javascript-development',
  //                   displayTitle: 'Javascript Development',
  //                   normalizedTagSlug: 'javascript-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'react',
  //                   displayTitle: 'React',
  //                   normalizedTagSlug: 'react'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '6503649e7bb6',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Yeyu Huang',
  //                 username: 'wenbohuang0307',
  //                 id: '36da9d8de7e',
  //                 mediumMemberAt: 1669604112000,
  //                 socialStats: {
  //                   followerCount: 54,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: 'Leading software program development for over 10 years, but still vibrant with coding, writing, consulting and knowledge sharing',
  //                 imageId: '1*56MoILoyaRDA-_NLG2N8pg.jpeg'
  //               },
  //               collection: {
  //                 __typename: 'Collection',
  //                 id: '5517fd7b58a6',
  //                 name: 'Level Up Coding',
  //                 domain: 'levelup.gitconnected.com',
  //                 slug: 'gitconnected'
  //               },
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: 'fe4e',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: '1fe579d7e776_preview_0',
  //                       name: '0510',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'It’s Time To Create A Private ChatGPT For Yourself Today',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '1fe579d7e776_preview_1',
  //                       name: '036f',
  //                       type: 'H4',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'A step-by-step guide for building a chatbot website powered by gpt-3.5-turbo API',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '1fe579d7e776_preview_2',
  //                       name: 'd9b6',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '1*SzsM17bNDXaC_jhZJ5hrCA.png',
  //                         originalHeight: 698,
  //                         originalWidth: 983,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: 'image by author',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '1fe579d7e776_preview_3',
  //                       name: 'f8ad',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: "After “ChatGPT API” was released on Mar.1, 2023, thousands of applications around the APIs have been developed, opening up a new era of possibilities for businesses and individuals. With GPT-3.5's natural language processing capabilities, users can create chatbots that can seamlessly interact with people, for various purposes like answering questions…",
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'A step-by-step guide for building a chatbot website powered by gpt-3.5-turbo API'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678459723595,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678459723595,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '1*SzsM17bNDXaC_jhZJ5hrCA.png',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 6.59433962264151,
  //               sequence: null,
  //               title:
  //                 'It’s Time To Create A Private ChatGPT For Yourself Today',
  //               uniqueSlug:
  //                 'its-time-to-create-a-private-chatgpt-for-yourself-today-6503649e7bb6',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: 'APPROVED',
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://levelup.gitconnected.com/its-time-to-create-a-private-chatgpt-for-yourself-today-6503649e7bb6',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 1,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'chatbots',
  //                   displayTitle: 'Chatbots',
  //                   normalizedTagSlug: 'chatbots'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'chatgpt',
  //                   displayTitle: 'Chatgpt',
  //                   normalizedTagSlug: 'chatgpt'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'python-programming',
  //                   displayTitle: 'Python Programming',
  //                   normalizedTagSlug: 'python-programming'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'streamlit',
  //                   displayTitle: 'Streamlit',
  //                   normalizedTagSlug: 'streamlit'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '7522fc9f771e',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Philip Wilkinson',
  //                 username: 'philip-wilkinson',
  //                 id: 'ec0e018f30da',
  //                 mediumMemberAt: 1585995079395,
  //                 socialStats: {
  //                   followerCount: 2053,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: {
  //                   live: {
  //                     domain: 'philip-wilkinson.medium.com',
  //                     __typename: 'CustomDomain'
  //                   },
  //                   __typename: 'CustomDomainState'
  //                 },
  //                 hasSubdomain: true,
  //                 bio: 'CASA PhD student, Spatial Analysis, Data Science and Software Engineering. 400,000+ views. Connect on: www.linkedin.com/in/philip-wilkinson1',
  //                 imageId: '1*JlXwVf5GztcY3BfL5xfdtw.jpeg'
  //               },
  //               collection: {
  //                 __typename: 'Collection',
  //                 id: '7f60cf5620c9',
  //                 name: 'Towards Data Science',
  //                 domain: 'towardsdatascience.com',
  //                 slug: 'towards-data-science'
  //               },
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '4e41',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: '787afba0ef3b_preview_0',
  //                       name: 'a09a',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Setting up a flask application for Data Science',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '787afba0ef3b_preview_1',
  //                       name: 'cfe6',
  //                       type: 'H4',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'The basic structure of a flask application to allow for modular development',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '787afba0ef3b_preview_2',
  //                       name: 'dcd7',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '0*L9QqARSjQOb8VK2J',
  //                         originalHeight: 4468,
  //                         originalWidth: 6702,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: 'Photo by KOBU Agency on Unsplash',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 9,
  //                           end: 20,
  //                           href: 'https://unsplash.com/@kobuagency?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'A',
  //                           start: 24,
  //                           end: 32,
  //                           href: 'https://unsplash.com?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '787afba0ef3b_preview_3',
  //                       name: '9099',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'A Data Science workflow often involves the use of notebooks and python scripts. These are great tools but it often means that your outputs can often remain in those files without seeing the light of day. A good way to change that however is by creating a website to show…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'The basic structure of a flask application to allow for modular development'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678462326857,
  //               isLocked: true,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678462326857,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '0*L9QqARSjQOb8VK2J',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 8.576415094339623,
  //               sequence: null,
  //               title: 'Setting up a flask application for Data Science',
  //               uniqueSlug:
  //                 'setting-up-a-flask-application-for-data-science-7522fc9f771e',
  //               visibility: 'LOCKED',
  //               pendingCollection: null,
  //               statusForCollection: 'APPROVED',
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://towardsdatascience.com/setting-up-a-flask-application-for-data-science-7522fc9f771e',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'flask',
  //                   displayTitle: 'Flask',
  //                   normalizedTagSlug: 'flask'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'software-development',
  //                   displayTitle: 'Software Development',
  //                   normalizedTagSlug: 'software-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'software-architecture',
  //                   displayTitle: 'Software Architecture',
  //                   normalizedTagSlug: 'software-architecture'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'hands-on-tutorials',
  //                   displayTitle: 'Hands On Tutorials',
  //                   normalizedTagSlug: 'hands-on-tutorials'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: 'fc44211fa8e1',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Eric Chung',
  //                 username: 'ericchungdesign',
  //                 id: 'bc5a56cb6bfe',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 2188,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: 'Product Designer. Writing about UX, business, career advice, and more!',
  //                 imageId: '1*11Rp411_VMkg9TY0R_5Byw.jpeg'
  //               },
  //               collection: {
  //                 __typename: 'Collection',
  //                 id: '819cc2aaeee0',
  //                 name: 'UX Planet',
  //                 domain: 'uxplanet.org',
  //                 slug: 'ux-planet'
  //               },
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '667c',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: 'b9f000461e9d_preview_0',
  //                       name: 'e05b',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Designing Side Panels That Add Value to Your Website’s UX',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'b9f000461e9d_preview_1',
  //                       name: 'a574',
  //                       type: 'H4',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Best practices and use cases for effective side panel design',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'b9f000461e9d_preview_2',
  //                       name: '1214',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '0*SIe2D_-jfaPsX2Rc',
  //                         originalHeight: 3264,
  //                         originalWidth: 4896,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: 'Photo by Danist Soh on Unsplash',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 9,
  //                           end: 19,
  //                           href: 'https://unsplash.com/@danist07?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'A',
  //                           start: 23,
  //                           end: 31,
  //                           href: 'https://unsplash.com?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'b9f000461e9d_preview_3',
  //                       name: 'bfd0',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Side panels are exactly what they sound like: a panel on one side of a screen. They typically contain secondary navigation, contextual information, or additional tools that are related to the primary content on the page. …',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 307,
  //                           end: 321,
  //                           href: 'https://www.justinmind.com/blog/tap-or-swipe-mobile-gestures-which-one-should-you-design-with/#:~:text=Mobile%20gestures%20are%20the%20movements,%2C%20and%20rotating%20the%20device).',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'A',
  //                           start: 349,
  //                           end: 376,
  //                           href: 'https://www.usability.gov/how-to-and-tools/methods/user-interface-elements.html',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'Designing Side Panels That Add Value to Your Website’s UX'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678360770126,
  //               isLocked: true,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678360770126,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '0*SIe2D_-jfaPsX2Rc',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 7.570754716981132,
  //               sequence: null,
  //               title:
  //                 'Designing Side Panels That Add Value to Your Website’s UX',
  //               uniqueSlug:
  //                 'designing-side-panels-that-add-value-to-your-websites-ux-fc44211fa8e1',
  //               visibility: 'LOCKED',
  //               pendingCollection: null,
  //               statusForCollection: 'APPROVED',
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://uxplanet.org/designing-side-panels-that-add-value-to-your-websites-ux-fc44211fa8e1',
  //               clapCount: 340,
  //               voterCount: 7,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'ux',
  //                   displayTitle: 'UX',
  //                   normalizedTagSlug: 'ux'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'design',
  //                   displayTitle: 'Design',
  //                   normalizedTagSlug: 'design'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'ui',
  //                   displayTitle: 'UI',
  //                   normalizedTagSlug: 'ui'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'startup',
  //                   displayTitle: 'Startup',
  //                   normalizedTagSlug: 'startup'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: 'efd8863a0c1',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Josef Cruz',
  //                 username: 'imjosef',
  //                 id: 'd446e1b4a70b',
  //                 mediumMemberAt: 1612230926000,
  //                 socialStats: {
  //                   followerCount: 10929,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: {
  //                   live: {
  //                     domain: 'imjosef.medium.com',
  //                     __typename: 'CustomDomain'
  //                   },
  //                   __typename: 'CustomDomainState'
  //                 },
  //                 hasSubdomain: true,
  //                 bio: 'Entrepreneur, coder, husband, father. I spend my days on the web learning and sharing information across the globe.',
  //                 imageId: '1*RvB7OCsPIBQwZpVMW3UEeg.jpeg'
  //               },
  //               collection: {
  //                 __typename: 'Collection',
  //                 id: '4b3a1ed4f11c',
  //                 name: 'JavaScript in Plain English',
  //                 domain: 'javascript.plainenglish.io',
  //                 slug: 'javascript-in-plain-english'
  //               },
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '30e3',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     },
  //                     {
  //                       name: '441a',
  //                       startIndex: 4,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: '3b171617b9da_preview_0',
  //                       name: '3937',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'The Difficulty of Learning Programming Across the Ages',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '3b171617b9da_preview_1',
  //                       name: '2310',
  //                       type: 'H4',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'From kids, youth, adults, and the elderly.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '3b171617b9da_preview_2',
  //                       name: 'dbae',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '0*J8yySvaASArFFN4B',
  //                         originalHeight: 3975,
  //                         originalWidth: 5300,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: 'Photo by Austin Distel on Unsplash',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 9,
  //                           end: 22,
  //                           href: 'https://unsplash.com/@austindistel?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'A',
  //                           start: 26,
  //                           end: 34,
  //                           href: 'https://unsplash.com?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '3b171617b9da_preview_3',
  //                       name: '4d04',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'It is believed that you can become a successful programmer in only up to 30–40 years, but this is not entirely true. Finding a well-paid job after forty will be more complicated than for young professionals. Otherwise, there are no restrictions.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '3b171617b9da_preview_4',
  //                       name: '764b',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Programming for kids',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'STRONG',
  //                           start: 0,
  //                           end: 20,
  //                           href: null,
  //                           anchorType: null,
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '3b171617b9da_preview_5',
  //                       name: '4333',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Programming requires a particular way of thinking from a…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle: 'From kids, youth, adults, and the elderly.'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678421800663,
  //               isLocked: true,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678421800663,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '0*J8yySvaASArFFN4B',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 3.9547169811320755,
  //               sequence: null,
  //               title: 'The Difficulty of Learning Programming Across the Ages',
  //               uniqueSlug:
  //                 'the-difficulty-of-learning-programming-across-the-ages-efd8863a0c1',
  //               visibility: 'LOCKED',
  //               pendingCollection: null,
  //               statusForCollection: 'APPROVED',
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://javascript.plainenglish.io/the-difficulty-of-learning-programming-across-the-ages-efd8863a0c1',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'programming',
  //                   displayTitle: 'Programming',
  //                   normalizedTagSlug: 'programming'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'technology',
  //                   displayTitle: 'Technology',
  //                   normalizedTagSlug: 'technology'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'software-development',
  //                   displayTitle: 'Software Development',
  //                   normalizedTagSlug: 'software-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'javascript',
  //                   displayTitle: 'JavaScript',
  //                   normalizedTagSlug: 'javascript'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: 'df444463813a',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Mobiux labs',
  //                 username: 'mobiux-labs',
  //                 id: '8559c312d908',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 5,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: {
  //                   live: {
  //                     domain: 'mobiux-labs.medium.com',
  //                     __typename: 'CustomDomain'
  //                   },
  //                   __typename: 'CustomDomainState'
  //                 },
  //                 hasSubdomain: true,
  //                 bio: 'We design brands, build apps, platforms, portals and websites. We keep it simple while delivering results & delighting customers. For you and your business.',
  //                 imageId: '0*QzPXL-IOb0CjQzHW'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: 'ee15',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: 'd0ac6041c85f_preview_0',
  //                       name: '0f87',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Things to make use of when using Firebase in app development',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'd0ac6041c85f_preview_1',
  //                       name: 'd601',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'By Bhuvan BN',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 0,
  //                           end: 12,
  //                           href: 'https://www.linkedin.com/in/bhuvan-nagaraj/',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'd0ac6041c85f_preview_2',
  //                       name: '729e',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '1*BzEPlndhdok5JNAWLIA-3A.png',
  //                         originalHeight: 402,
  //                         originalWidth: 680,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: '',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'd0ac6041c85f_preview_3',
  //                       name: 'f52e',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'As far as app development platforms go, one may argue that Firebase has it all — a serverless way to build and deploy secure apps at a global scale, host databases in the cloud and sync data across online and offline devices. But that is not all…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'As far as app development platforms go, one may argue that Firebase has it all — a serverless way to build and deploy secure apps at a…'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678442856866,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678443645307,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '1*BzEPlndhdok5JNAWLIA-3A.png',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 2.450943396226415,
  //               sequence: null,
  //               title:
  //                 'Things to make use of when using Firebase in app development',
  //               uniqueSlug:
  //                 'things-to-make-use-of-when-using-firebase-in-app-development-df444463813a',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://mobiux-labs.medium.com/things-to-make-use-of-when-using-firebase-in-app-development-df444463813a',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'firebase',
  //                   displayTitle: 'Firebase',
  //                   normalizedTagSlug: 'firebase'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'firebase-cloud-functions',
  //                   displayTitle: 'Firebase Cloud Functions',
  //                   normalizedTagSlug: 'firebase-cloud-functions'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'firebaserealtimedatabase',
  //                   displayTitle: 'Firebaserealtimedatabase',
  //                   normalizedTagSlug: 'firebaserealtimedatabase'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'app-development',
  //                   displayTitle: 'App Development',
  //                   normalizedTagSlug: 'app-development'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '7723dddcc9ec',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Cihan',
  //                 username: 'chntrks',
  //                 id: 'cd37469d190',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 206,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: {
  //                   live: {
  //                     domain: 'chntrks.medium.com',
  //                     __typename: 'CustomDomain'
  //                   },
  //                   __typename: 'CustomDomainState'
  //                 },
  //                 hasSubdomain: true,
  //                 bio: '💻 Freelance Creative Developer 🙌 • 💯 Focus | Action | Disciplined Life | Level-up Your Mindset ⚡',
  //                 imageId: '1*_J48tIzU2xnjcEt9V1qbTg.jpeg'
  //               },
  //               collection: {
  //                 __typename: 'Collection',
  //                 id: '3aa1515439cc',
  //                 name: 'Interesting Coding',
  //                 domain: null,
  //                 slug: 'fullstack-programming-in-english'
  //               },
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: 'b920',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: 'cf590179a021_preview_0',
  //                       name: 'e957',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Mastering JavaScript Array Methods: A Step-by-Step Guide to Implementing map, filter, find, findIndex, and reduce Methods',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'cf590179a021_preview_1',
  //                       name: '320f',
  //                       type: 'H4',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Streamline your code, solve complex problems with ease, and take your coding game to the next level!',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'cf590179a021_preview_2',
  //                       name: 'd3fb',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '0*I_dBp_jqPXQvje5n',
  //                         originalHeight: 2349,
  //                         originalWidth: 3152,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: 'Photo by Robert Bye on Unsplash',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 9,
  //                           end: 19,
  //                           href: 'https://unsplash.com/@robertbye?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'A',
  //                           start: 23,
  //                           end: 31,
  //                           href: 'https://unsplash.com?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'cf590179a021_preview_3',
  //                       name: 'b17c',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: "I have a question for you: have you ever thought about how to code the built-in JavaScript methods map, filter, find, findIndex, and reduce? Here's a great practical application for you. If you can code these methods yourself, you've covered the basics! of JavaScript. These are some of the most…",
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'CODE',
  //                           start: 99,
  //                           end: 102,
  //                           href: null,
  //                           anchorType: null,
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'CODE',
  //                           start: 104,
  //                           end: 110,
  //                           href: null,
  //                           anchorType: null,
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'CODE',
  //                           start: 112,
  //                           end: 116,
  //                           href: null,
  //                           anchorType: null,
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'CODE',
  //                           start: 118,
  //                           end: 127,
  //                           href: null,
  //                           anchorType: null,
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'CODE',
  //                           start: 133,
  //                           end: 139,
  //                           href: null,
  //                           anchorType: null,
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'CODE',
  //                           start: 246,
  //                           end: 253,
  //                           href: null,
  //                           anchorType: null,
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'Streamline your code, solve complex problems with ease, and take your coding game to the next level!'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678450890404,
  //               isLocked: true,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678450912842,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 1678451199905,
  //               pinnedByCreatorAt: 1678451261959,
  //               previewImage: {
  //                 id: '0*I_dBp_jqPXQvje5n',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 5.7622641509433965,
  //               sequence: null,
  //               title:
  //                 'Mastering JavaScript Array Methods: A Step-by-Step Guide to Implementing map, filter, find…',
  //               uniqueSlug:
  //                 'mastering-javascript-array-methods-a-step-by-step-guide-to-implementing-map-filter-find-7723dddcc9ec',
  //               visibility: 'LOCKED',
  //               pendingCollection: null,
  //               statusForCollection: 'APPROVED',
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/fullstack-programming-in-english/mastering-javascript-array-methods-a-step-by-step-guide-to-implementing-map-filter-find-7723dddcc9ec',
  //               clapCount: 93,
  //               voterCount: 2,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'javascript',
  //                   displayTitle: 'JavaScript',
  //                   normalizedTagSlug: 'javascript'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'technology',
  //                   displayTitle: 'Technology',
  //                   normalizedTagSlug: 'technology'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'programming',
  //                   displayTitle: 'Programming',
  //                   normalizedTagSlug: 'programming'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'software-development',
  //                   displayTitle: 'Software Development',
  //                   normalizedTagSlug: 'software-development'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '503f828233fa',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Josef Cruz',
  //                 username: 'imjosef',
  //                 id: 'd446e1b4a70b',
  //                 mediumMemberAt: 1612230926000,
  //                 socialStats: {
  //                   followerCount: 10929,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: {
  //                   live: {
  //                     domain: 'imjosef.medium.com',
  //                     __typename: 'CustomDomain'
  //                   },
  //                   __typename: 'CustomDomainState'
  //                 },
  //                 hasSubdomain: true,
  //                 bio: 'Entrepreneur, coder, husband, father. I spend my days on the web learning and sharing information across the globe.',
  //                 imageId: '1*RvB7OCsPIBQwZpVMW3UEeg.jpeg'
  //               },
  //               collection: {
  //                 __typename: 'Collection',
  //                 id: '4b3a1ed4f11c',
  //                 name: 'JavaScript in Plain English',
  //                 domain: 'javascript.plainenglish.io',
  //                 slug: 'javascript-in-plain-english'
  //               },
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: 'b57c',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: 'a48ea045c53c_preview_0',
  //                       name: '520e',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'If Programming Is Hard, Why Is Finding a Job Much Harder',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'a48ea045c53c_preview_1',
  //                       name: '0a21',
  //                       type: 'H4',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'I’ll tell you why.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'a48ea045c53c_preview_2',
  //                       name: 'e78b',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '0*kIDJNrAHDa3Rd4sy',
  //                         originalHeight: 3072,
  //                         originalWidth: 4812,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: 'Photo by the blowup on Unsplash',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 9,
  //                           end: 19,
  //                           href: 'https://unsplash.com/@theblowup?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'A',
  //                           start: 23,
  //                           end: 31,
  //                           href: 'https://unsplash.com?utm_source=medium&utm_medium=referral',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'a48ea045c53c_preview_3',
  //                       name: '5b22',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'The labor market is not accessible, and sometimes even the most qualified candidate is often rejected by the employer. I passed dozens of interviews and interviews, but there has yet to be a result! In such a situation, any specialist will be slightly confused, and in his head, he will…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle: 'I’ll tell you why.'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678436209150,
  //               isLocked: true,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678436209150,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '0*kIDJNrAHDa3Rd4sy',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 4.060377358490566,
  //               sequence: null,
  //               title:
  //                 'If Programming Is Hard, Why Is Finding a Job Much Harder',
  //               uniqueSlug:
  //                 'if-programming-is-hard-why-is-finding-a-job-much-harder-503f828233fa',
  //               visibility: 'LOCKED',
  //               pendingCollection: null,
  //               statusForCollection: 'APPROVED',
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://javascript.plainenglish.io/if-programming-is-hard-why-is-finding-a-job-much-harder-503f828233fa',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'programming',
  //                   displayTitle: 'Programming',
  //                   normalizedTagSlug: 'programming'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'technology',
  //                   displayTitle: 'Technology',
  //                   normalizedTagSlug: 'technology'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'software-development',
  //                   displayTitle: 'Software Development',
  //                   normalizedTagSlug: 'software-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'javascript',
  //                   displayTitle: 'JavaScript',
  //                   normalizedTagSlug: 'javascript'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '6a3a59665355',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Daniel Ekechukwu',
  //                 username: 'creativedannyk',
  //                 id: 'fc7477bbf130',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 13,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: 'I am web developer, tech enthusiast. I love sports and games as well',
  //                 imageId: '1*ZN2K4xPdZLkjPLLdSFTUZA.jpeg'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '6573',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: '872590a0fefa_preview_0',
  //                       name: '25de',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '1*XgrEAQTunVFqZZVDOfkWgg.jpeg',
  //                         originalHeight: 3448,
  //                         originalWidth: 4592,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: '',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '872590a0fefa_preview_1',
  //                       name: '7803',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'MAXIMIZING EFFICIENCY',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '872590a0fefa_preview_2',
  //                       name: '9107',
  //                       type: 'H4',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'HOW TO CURB DISTRACTIONS',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '872590a0fefa_preview_3',
  //                       name: '9125',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'In whatever field we find ourselves, productivity is demanded and it can be measured in various ways. I have come to understand that our productivity is directly proportional to our efficiency. Efficiency in itself is a broad spectrum of different ideologies but personally, I believe it is a function of…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle: 'HOW TO CURB DISTRACTIONS'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678384829093,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678384829093,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '1*XgrEAQTunVFqZZVDOfkWgg.jpeg',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 3.900943396226415,
  //               sequence: null,
  //               title: 'MAXIMIZING EFFICIENCY',
  //               uniqueSlug: 'maximizing-efficiency-6a3a59665355',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/@creativedannyk/maximizing-efficiency-6a3a59665355',
  //               clapCount: 51,
  //               voterCount: 2,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'work-life-balance',
  //                   displayTitle: 'Work Life Balance',
  //                   normalizedTagSlug: 'work-life-balance'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'efficient-working',
  //                   displayTitle: 'Efficient Working',
  //                   normalizedTagSlug: 'efficient-working'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'tech',
  //                   displayTitle: 'Tech',
  //                   normalizedTagSlug: 'tech'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'productivity',
  //                   displayTitle: 'Productivity',
  //                   normalizedTagSlug: 'productivity'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '13b94bd7fe95',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Wasp Lang',
  //                 username: 'WaspLang',
  //                 id: '5c776237f273',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 80,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: '',
  //                 imageId: '1*3TpKA6DStJlcZy9yGiNEhw.jpeg'
  //               },
  //               collection: {
  //                 __typename: 'Collection',
  //                 id: '4e2c1156667e',
  //                 name: 'Dev Genius',
  //                 domain: 'blog.devgenius.io',
  //                 slug: 'dev-genius'
  //               },
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '7c32',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: 'b9f99d9de6e3_preview_0',
  //                       name: 'b7fb',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Building a full-stack app for learning Italian: Supabase vs. Wasp',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'b9f99d9de6e3_preview_1',
  //                       name: '5ec8',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '1*XyTM4h-4GcaNaYlOvF1T5Q.jpeg',
  //                         originalHeight: 637,
  //                         originalWidth: 1000,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: '',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'b9f99d9de6e3_preview_2',
  //                       name: 'd2bb',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Intro',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'b9f99d9de6e3_preview_3',
  //                       name: 'f460',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'What to expect\u200b',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 14,
  //                           end: 15,
  //                           href: 'https://wasp-lang.dev/blog/2023/03/08/building-a-full-stack-app-supabase-vs-wasp#what-to-expect',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'b9f99d9de6e3_preview_4',
  //                       name: '5244',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'In this blog post, I will explain how I created the Phrase Tutor app for learning Italian phrases using two different technologies. I will share some code snippets to show what was required to build the app with both Wasp and Supabase.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'A',
  //                           start: 52,
  //                           end: 64,
  //                           href: 'https://phrasetutor.com/',
  //                           anchorType: 'LINK',
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'Comparing Wasp and Supabase when building a side-project for learning Italian'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678458853884,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678458853884,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '1*XyTM4h-4GcaNaYlOvF1T5Q.jpeg',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 10.087735849056605,
  //               sequence: null,
  //               title:
  //                 'Building a full-stack app for learning Italian: Supabase vs. Wasp',
  //               uniqueSlug:
  //                 'building-a-full-stack-app-for-learning-italian-supabase-vs-wasp-13b94bd7fe95',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: 'APPROVED',
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://blog.devgenius.io/building-a-full-stack-app-for-learning-italian-supabase-vs-wasp-13b94bd7fe95',
  //               clapCount: 51,
  //               voterCount: 2,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'wasp-lang',
  //                   displayTitle: 'Wasp Lang',
  //                   normalizedTagSlug: 'wasp-lang'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'supabase',
  //                   displayTitle: 'Supabase',
  //                   normalizedTagSlug: 'supabase'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'full-stack',
  //                   displayTitle: 'Full Stack',
  //                   normalizedTagSlug: 'full-stack'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'react',
  //                   displayTitle: 'React',
  //                   normalizedTagSlug: 'react'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '8c3a0418841f',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Grace Nieboer',
  //                 username: 'grace.nieboer',
  //                 id: '5798fb1831de',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 4,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: 'A baby dev writing just for fun, relating everything to food. I love meeting new people! Connect w/me here: https://www.linkedin.com/in/gracenieboer/',
  //                 imageId: '1*HX9MS-ETGMY6fG0A8ezyNQ.png'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '07e8',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: 'fe36e56868bd_preview_0',
  //                       name: '07ca',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Controlling Forms in React, One Input at a Time',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'fe36e56868bd_preview_1',
  //                       name: '9c70',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Controlled Inputs: what are they, and when should they be used?',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [
  //                         {
  //                           type: 'STRONG',
  //                           start: 19,
  //                           end: 23,
  //                           href: null,
  //                           anchorType: null,
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         },
  //                         {
  //                           type: 'STRONG',
  //                           start: 38,
  //                           end: 42,
  //                           href: null,
  //                           anchorType: null,
  //                           userId: null,
  //                           linkMetadata: null,
  //                           __typename: 'Markup'
  //                         }
  //                       ],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'fe36e56868bd_preview_2',
  //                       name: '4c6e',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'A few weeks ago from the time I write this, I found myself in a position many other developers face when peering out from under the safety blanket of vanilla JavaScript to look at React.js: shook. After the initial…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'Controlled Inputs: what are they, and how can their power be leveraged?'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678459011571,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678459267287,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 3.241509433962264,
  //               sequence: null,
  //               title:
  //                 'Ultimate Control Over Forms in React.js, One Input at a Time',
  //               uniqueSlug:
  //                 'ultimate-control-over-forms-in-react-js-one-input-at-a-time-8c3a0418841f',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/@grace.nieboer/ultimate-control-over-forms-in-react-js-one-input-at-a-time-8c3a0418841f',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'javascript',
  //                   displayTitle: 'JavaScript',
  //                   normalizedTagSlug: 'javascript'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'react',
  //                   displayTitle: 'React',
  //                   normalizedTagSlug: 'react'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'reactjs',
  //                   displayTitle: 'Reactjs',
  //                   normalizedTagSlug: 'reactjs'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'forms',
  //                   displayTitle: 'Forms',
  //                   normalizedTagSlug: 'forms'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '646d057d67d',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Canopus',
  //                 username: 'Canopus22515',
  //                 id: 'a7ecf5988d88',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 1,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: 'I write articles based on my experience and knowledge. To enhance my way of expressing my self and to improve my writing skills.',
  //                 imageId: '1*vmlD-FvJ6MES25T9eqaUDw.jpeg'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '705c',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: '456547f01091_preview_0',
  //                       name: '4b99',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'OSS-Open Source Software',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '456547f01091_preview_1',
  //                       name: 'd637',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Hello readers.. In this article I am going to tell you about open source in a very simplified way.',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: '456547f01091_preview_2',
  //                       name: '4ea9',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Open Source is a concept of software development where the source code is available free to every one to view, edit and contribute to it. Some of the very famous example…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'Hello readers.. In this article I am going to tell you about open source in a very simplified way.'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678439307096,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678439678567,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 1678439187104,
  //               previewImage: {
  //                 id: '1*Vlwb5YzwhlPggLR5fxiMrA.jpeg',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 2.377358490566038,
  //               sequence: null,
  //               title: 'OSS-Open Source Software',
  //               uniqueSlug: 'oss-open-source-software-646d057d67d',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/@Canopus22515/oss-open-source-software-646d057d67d',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'open-source',
  //                   displayTitle: 'Open Source',
  //                   normalizedTagSlug: 'open-source'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'technology',
  //                   displayTitle: 'Technology',
  //                   normalizedTagSlug: 'technology'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'coding',
  //                   displayTitle: 'Coding',
  //                   normalizedTagSlug: 'coding'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'github',
  //                   displayTitle: 'Github',
  //                   normalizedTagSlug: 'github'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           },
  //           {
  //             feedId: 'f840ced5-bf04-4660-a14e-2fbffba65b9c',
  //             reason: 84,
  //             moduleSourceEncoding: 17,
  //             postProviderExplanation: {
  //               reason: null,
  //               topic: null,
  //               __typename: 'PostProviderExplanation'
  //             },
  //             post: {
  //               id: '16acf522ab2d',
  //               creator: {
  //                 __typename: 'User',
  //                 name: 'Geeks Academy',
  //                 username: 'geeksacademy-en',
  //                 id: '8d8b19798e01',
  //                 mediumMemberAt: 0,
  //                 socialStats: {
  //                   followerCount: 3,
  //                   __typename: 'SocialStats'
  //                 },
  //                 verifications: {
  //                   isBookAuthor: false,
  //                   __typename: 'VerifiedInfo'
  //                 },
  //                 customDomainState: null,
  //                 hasSubdomain: false,
  //                 bio: 'Geeks Academy, international network for digital education: Cybersecurity & Cloud, AI & Big Data, Blockchain & Coding, Gaming & Metaverse, Technology Management',
  //                 imageId: '1*an_1615mHNWp6OOBfrUQgw.png'
  //               },
  //               collection: null,
  //               extendedPreviewContent: {
  //                 bodyModel: {
  //                   sections: [
  //                     {
  //                       name: '5742',
  //                       startIndex: 0,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     },
  //                     {
  //                       name: '71b5',
  //                       startIndex: 3,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     },
  //                     {
  //                       name: 'c31f',
  //                       startIndex: 4,
  //                       textLayout: null,
  //                       imageLayout: null,
  //                       backgroundImage: null,
  //                       videoLayout: null,
  //                       backgroundVideo: null,
  //                       __typename: 'Section'
  //                     }
  //                   ],
  //                   paragraphs: [
  //                     {
  //                       id: 'e77031df1b1b_preview_0',
  //                       name: 'ac09',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Javascript: web development and beyond',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'e77031df1b1b_preview_1',
  //                       name: '541b',
  //                       type: 'IMG',
  //                       href: null,
  //                       layout: 'INSET_CENTER',
  //                       metadata: {
  //                         id: '1*T_OnlPrOyLMJ2D2xPaqyyg.png',
  //                         originalHeight: 1080,
  //                         originalWidth: 1080,
  //                         focusPercentX: null,
  //                         focusPercentY: null,
  //                         alt: null,
  //                         __typename: 'ImageMetadata'
  //                       },
  //                       text: '',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'e77031df1b1b_preview_2',
  //                       name: '68e5',
  //                       type: 'BQ',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'JavaScript was invented for frontend web development. Due to its simplicity, it has become the choice number one for website building. Let’s discover its potential!',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'e77031df1b1b_preview_3',
  //                       name: '8550',
  //                       type: 'H3',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'Discover Geeks Academy’s articles on: Blockchain, Coding, Cybersecurity, Cloud, Big Data, Artificial Intelligence, Gaming, Digital Innovation, Metaverse',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     },
  //                     {
  //                       id: 'e77031df1b1b_preview_4',
  //                       name: '821a',
  //                       type: 'P',
  //                       href: null,
  //                       layout: null,
  //                       metadata: null,
  //                       text: 'improvement is therefore a key feature and programming languages, in an attempt to keep up with this endless race, often suffer the weight of a…',
  //                       hasDropCap: null,
  //                       dropCapImage: null,
  //                       markups: [],
  //                       __typename: 'Paragraph',
  //                       codeBlockMetadata: null,
  //                       iframe: null,
  //                       mixtapeMetadata: null
  //                     }
  //                   ],
  //                   __typename: 'RichText'
  //                 },
  //                 isFullContent: false,
  //                 __typename: 'PreviewContent',
  //                 subtitle:
  //                   'JavaScript was invented for frontend web development. Due to its simplicity, it has become the choice number one for website building…'
  //               },
  //               __typename: 'Post',
  //               firstPublishedAt: 1678456398249,
  //               isLocked: false,
  //               isSeries: false,
  //               isShortform: false,
  //               latestPublishedAt: 1678456398249,
  //               inResponseToCatalogResult: null,
  //               pinnedAt: 0,
  //               pinnedByCreatorAt: 0,
  //               previewImage: {
  //                 id: '1*T_OnlPrOyLMJ2D2xPaqyyg.png',
  //                 focusPercentX: null,
  //                 focusPercentY: null,
  //                 __typename: 'ImageMetadata'
  //               },
  //               readingTime: 4.466981132075472,
  //               sequence: null,
  //               title: 'Javascript: web development and beyond',
  //               uniqueSlug:
  //                 'javascript-web-development-and-beyond-16acf522ab2d',
  //               visibility: 'PUBLIC',
  //               pendingCollection: null,
  //               statusForCollection: null,
  //               isPublished: true,
  //               mediumUrl:
  //                 'https://medium.com/@geeksacademy-en/javascript-web-development-and-beyond-16acf522ab2d',
  //               clapCount: 0,
  //               voterCount: 0,
  //               recommenders: [],
  //               allowResponses: true,
  //               postResponses: {
  //                 count: 0,
  //                 __typename: 'PostResponses'
  //               },
  //               isLimitedState: false,
  //               inResponseToEntityType: null,
  //               tags: [
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'javascript',
  //                   displayTitle: 'JavaScript',
  //                   normalizedTagSlug: 'javascript'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'coding',
  //                   displayTitle: 'Coding',
  //                   normalizedTagSlug: 'coding'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'programming-languages',
  //                   displayTitle: 'Programming Languages',
  //                   normalizedTagSlug: 'programming-languages'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'developer',
  //                   displayTitle: 'Developer',
  //                   normalizedTagSlug: 'developer'
  //                 },
  //                 {
  //                   __typename: 'Tag',
  //                   id: 'web-development',
  //                   displayTitle: 'Web Development',
  //                   normalizedTagSlug: 'web-development'
  //                 }
  //               ]
  //             },
  //             __typename: 'TagFeedItem'
  //           }
  //         ],
  //         pagingInfo: {
  //           next: {
  //             limit: 25,
  //             to: '25',
  //             __typename: 'PageParams'
  //           },
  //           __typename: 'Paging'
  //         },
  //         __typename: 'TagFeedResult'
  //       }
  //     }
  //   }
  // ]

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
  const users = [
    {
      data: {
        tagTopWriters: [
          {
            __typename: 'User',
            id: 'e43895122f94',
            algoliaObjectId: null,
            name: 'Will Lockett',
            bio: 'Journalist passionate about cutting edge technology, space and fighting climate change. Buy my latest book at https://www.amazon.com/dp/B0BRPPVR5Z',
            imageId: '1*V0qWMQ8V5_NaF9yUoHAdyg.jpeg',
            mediumMemberAt: 1591366308000,
            username: 'wlockett',
            customDomainState: {
              live: {
                domain: 'wlockett.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: true,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'dfa24df0c833',
            algoliaObjectId: null,
            name: 'Jayden Levitt',
            bio: 'Top writer in Bitcoin, Finance, Business, Technology, NFTs, Crypto, Web3, Investing, Self Improvement - Join my Substack FREE https://jaydenlevitt.substack.com/',
            imageId: '1*97YUgQYxsyHO66CzJOWdCw@2x.jpeg',
            mediumMemberAt: 1644022548000,
            username: 'jayden_levitt',
            customDomainState: null,
            hasSubdomain: false,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'fb44e21903f3',
            algoliaObjectId: null,
            name: 'The PyCoach',
            bio: '8M+ Views in more than 200 Medium articles || Code Less, Earn More: Make money using your tech skills 👉 http://bit.ly/3ZRfGb4',
            imageId: '1*veEX4-CiLz5jqUjwWfQo_Q.jpeg',
            mediumMemberAt: 1676735732000,
            username: 'frank-andrade',
            customDomainState: {
              live: {
                domain: 'frank-andrade.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '408663adc71c',
            algoliaObjectId: null,
            name: 'Nikhil Vemu',
            bio: 'Apple Geek. | Support the Apple literacy movement 👉 https://nikhilvemu.medium.com/membership',
            imageId: '1*2rBQc171nwxUfGiqCOVReg.jpeg',
            mediumMemberAt: 1677728413490,
            username: 'nikhilvemu',
            customDomainState: {
              live: {
                domain: 'nikhilvemu.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'e119a26506e3',
            algoliaObjectId: null,
            name: 'Admiral Cloudberg',
            bio: 'Analyzer of plane crashes. Contact me via @Admiral_Cloudberg on Reddit, @KyraCloudy on Twitter, or by email at kyracloudy97@gmail.com.',
            imageId: '2*pZPMtIONqtJYi2xHYD_Ivg.jpeg',
            mediumMemberAt: 0,
            username: 'admiralcloudberg',
            customDomainState: {
              live: {
                domain: 'admiralcloudberg.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '9c6cbf57703',
            algoliaObjectId: null,
            name: 'Nitin Sharma',
            bio: '8x Top Writer, Developer. Get in touch: linktr.ee/nitinfab.',
            imageId: '1*-z7GUMUUq8maKPDl8jL21A.jpeg',
            mediumMemberAt: 0,
            username: 'nitinfab',
            customDomainState: {
              live: {
                domain: 'nitinfab.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '9b351e8113e9',
            algoliaObjectId: null,
            name: 'Ignacio de Gregorio',
            bio: "Crypto & AI insights curated so that you're prepared for the digital economy. Opinions are my own. Sign up for my newsletter at https://www.thetechoasis.com",
            imageId: '1*ksXslfo6uLdzsHrr5bgBQQ.png',
            mediumMemberAt: 1655026315000,
            username: 'ignacio.de.gregorio.noblejas',
            customDomainState: null,
            hasSubdomain: false,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'e0297a7f5699',
            algoliaObjectId: null,
            name: 'Michael King',
            bio: 'Average dude with some not so average thoughts… Top-Writer for Technology, Art, Design, Books and Reading topics',
            imageId: '1*j8S9i89lwpd7uzHByeGg9A.jpeg',
            mediumMemberAt: 1555052400000,
            username: 'neonforge',
            customDomainState: null,
            hasSubdomain: false,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'b6d641be1066',
            algoliaObjectId: null,
            name: 'Tim Denning',
            bio: 'Aussie Blogger with 500M+ views — Writer for CNBC & Business Insider. Inspiring the world through Personal Development and Entrepreneurship — timdenning.com/mb',
            imageId: '1*bfllCILGW4yHKXgFo8JkHg.jpeg',
            mediumMemberAt: 1633604147000,
            username: 'timdenning',
            customDomainState: {
              live: {
                domain: 'timdenning.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '15fb24a3ff0d',
            algoliaObjectId: null,
            name: 'Michael Burnett',
            bio: 'Author and startup design leader. Head of Design @ Plastiq, formerly Credit Sesame, IMVU, Tango, Miles. MBA, Masters in Design Strategy @ CCA. STEAM nerd.',
            imageId: '1*_nRlSLLxOANILDkX_ubCqQ.png',
            mediumMemberAt: 1642273825000,
            username: 'dtls',
            customDomainState: null,
            hasSubdomain: false,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '819323b399ac',
            algoliaObjectId: null,
            name: 'Jim Clyde Monge',
            bio: '4X Top Writer. Software Engineer, Artist, Writer. Join me in medium: https://jimclydemonge.medium.com/membership',
            imageId: '1*y21asU2FcaTTiDiyXbJK9A.jpeg',
            mediumMemberAt: 1626224300000,
            username: 'jimclydemonge',
            customDomainState: {
              live: {
                domain: 'jimclydemonge.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '6026e0e2a201',
            algoliaObjectId: null,
            name: 'The Useful Tech',
            bio: 'Everything from the latest updates on Android and iOS, to AI and Cybersecurity. Follow to Stay updated on the latest tech trends and impress your friends!',
            imageId: '1*huaATcaUP76fICcfufubLw.png',
            mediumMemberAt: 1632575898000,
            username: 'theusefultech',
            customDomainState: {
              live: {
                domain: 'theusefultech.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '665f2b5379e3',
            algoliaObjectId: null,
            name: 'Mark Ellis',
            bio: 'Tech reviewer and Medium entrepreneur. Register for my FREE Medium webinars ➡️ https://www.soloclub.online/',
            imageId: '1*J5nlHK-FENqXcx7CaT3gOA.jpeg',
            mediumMemberAt: 1592500299000,
            username: 'markellisreviews',
            customDomainState: {
              live: {
                domain: 'markellisreviews.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '24f5f16be697',
            algoliaObjectId: null,
            name: 'Bennett Garner',
            bio: 'DeveloperPurpose.com — Email course on how to build a tech career with meaning and purpose 💻 Top writer in technology ✍️',
            imageId: '1*88pnNcBd1mdOJhsri4lCHg.png',
            mediumMemberAt: 1587300738623,
            username: 'bennettgarner',
            customDomainState: {
              live: {
                domain: 'bennettgarner.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '71154650ecd4',
            algoliaObjectId: null,
            name: 'The woman',
            bio: 'Programming | AI | Data Science | Blockchain -> contact: the.woman.from.medium@gmail.com',
            imageId: '1*qz8tfR0xm0p7NDodpbr_5Q.jpeg',
            mediumMemberAt: 0,
            username: 'thefemaleprogrammer',
            customDomainState: {
              live: {
                domain: 'thefemaleprogrammer.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'd3c270f2cefd',
            algoliaObjectId: null,
            name: 'Yancy Dennis',
            bio: 'MIT graduate, author and entrepreneur',
            imageId: '1*Oh9b3kP25xyBUBuw_4oOOA.jpeg',
            mediumMemberAt: 1597593651000,
            username: 'dennisyd',
            customDomainState: null,
            hasSubdomain: false,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'd8fc5db9b016',
            algoliaObjectId: null,
            name: 'Sanjay Priyadarshi',
            bio: 'Join a Community of People Who Love Javascript, Programming and Technology — codertoentrepreneurs.substack.com',
            imageId: '1*XutiHXIrmXbyn2h1ss34TA.png',
            mediumMemberAt: 1669606832000,
            username: 'priyadarshisanjay',
            customDomainState: {
              live: {
                domain: 'priyadarshisanjay.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '7ba6be8a3022',
            algoliaObjectId: null,
            name: 'Alberto Romero',
            bio: 'AI & Tech | Analyst at CambrianAI | Weekly AI Newsletter: https://thealgorithmicbridge.substack.com/ | Contact: alber.romgar@gmail.com',
            imageId: '2*oMdIZBsnK8EFhQLUaAB5ZA.jpeg',
            mediumMemberAt: 1523202691000,
            username: 'albertoromgar',
            customDomainState: {
              live: {
                domain: 'albertoromgar.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '30834bcaf46a',
            algoliaObjectId: null,
            name: 'The Secret Developer',
            bio: 'A top software developer who has worked for some of the biggest tech companies (yes, that one too) reveals the stories behind Big Tech and software engineering.',
            imageId: '1*dmbNkD5D-u45r44go_cf0g.png',
            mediumMemberAt: 0,
            username: 'tsecretdeveloper',
            customDomainState: null,
            hasSubdomain: false,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '58c3f2972f73',
            algoliaObjectId: null,
            name: 'Leon Zucchini',
            bio: 'Founder at Curiosity',
            imageId: '1*PZkj4N9rMfWz9JZSMxTIdQ.png',
            mediumMemberAt: 0,
            username: 'leonzucchini',
            customDomainState: null,
            hasSubdomain: false,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '114c2684cfef',
            algoliaObjectId: null,
            name: 'Tom Smykowski',
            bio: 'Subscribe To Stay Up To Date With Software Engineering',
            imageId: '1*QBY4yLB-8qciSZmu9tYqpA.jpeg',
            mediumMemberAt: 0,
            username: 'tomaszs2',
            customDomainState: {
              live: {
                domain: 'tomaszs2.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'fd0cc3d61f6e',
            algoliaObjectId: null,
            name: 'Jakub Jirak',
            bio: "Regular guy who likes technology, innovation, the future and science and decided to share his knowledge with others. Don't forget to clap and follow.",
            imageId: '1*5nKuUg38Hy8RaGKdL6Rr8A.png',
            mediumMemberAt: 1632988071000,
            username: 'jakubjirak',
            customDomainState: {
              live: {
                domain: 'jakubjirak.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'fe89705f4c85',
            algoliaObjectId: null,
            name: 'Clark',
            bio: 'I admire technological advancements and write about them on Medium.',
            imageId: '1*5c1ehGuOFj_z-PB_nFefyA@2x.jpeg',
            mediumMemberAt: 1677284801000,
            username: 'cercinus',
            customDomainState: {
              live: {
                domain: 'cercinus.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'ba2dc92083b9',
            algoliaObjectId: null,
            name: 'That Guy, Noah',
            bio: 'Your fellow friend, that is interested in current world wide news, science and astronomy!',
            imageId: '1*c2FbMUkVqohifIlnN17_fw.png',
            mediumMemberAt: 0,
            username: 'ThatGuyNoah',
            customDomainState: null,
            hasSubdomain: false,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'a148fd75c2e9',
            algoliaObjectId: null,
            name: 'Alexander Nguyen',
            bio: '120K Followers on LinkedIn Ideas about technology, software engineering and life https://www.linkedin.com/in/alxngu/',
            imageId: '1*cwYWYCjbeXNc_pAtTeq_Zg.jpeg',
            mediumMemberAt: 0,
            username: 'alexcancode',
            customDomainState: {
              live: {
                domain: 'alexcancode.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '76398be9016',
            algoliaObjectId: null,
            name: 'Devansh- Machine Learning Made Simple',
            bio: 'Deep Insights about Artificial Intelligence (AI), Machine Learning, Software Engineering, and the Tech Industry. Follow me to come out on top',
            imageId: '1*xiFRgHfgfMR7S111UB2hMw.jpeg',
            mediumMemberAt: 0,
            username: 'machine-learning-made-simple',
            customDomainState: {
              live: {
                domain: 'machine-learning-made-simple.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '20ae431f4bdc',
            algoliaObjectId: null,
            name: 'Ilma Andrade',
            bio: 'Top Writer in the Topics of Technology and Art - UX Designer B2B - Traveling the world with my computer and a 40L backpack',
            imageId: '1*RHhq3pIoCERqgp8SLfiS-w.jpeg',
            mediumMemberAt: 1668628828000,
            username: 'zidailma',
            customDomainState: {
              live: {
                domain: 'zidailma.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'd446e1b4a70b',
            algoliaObjectId: null,
            name: 'Josef Cruz',
            bio: 'Entrepreneur, coder, husband, father. I spend my days on the web learning and sharing information across the globe.',
            imageId: '1*RvB7OCsPIBQwZpVMW3UEeg.jpeg',
            mediumMemberAt: 1612230926000,
            username: 'imjosef',
            customDomainState: {
              live: {
                domain: 'imjosef.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '3c78414cd174',
            algoliaObjectId: null,
            name: 'Michael Swengel',
            bio: 'Tech enthusiast. Entrepreneur. Writing about tech, side hustles, and design. https://sidehustleroad.com | https://www.youtube.com/@spareroomtech',
            imageId: '1*CLxCRj6o12Fb4tas0w7c6A@2x.jpeg',
            mediumMemberAt: 1652545847000,
            username: 'michaelswengel',
            customDomainState: null,
            hasSubdomain: false,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '2696f801a31a',
            algoliaObjectId: null,
            name: 'Christianlauer',
            bio: 'Big Data Enthusiast based in Hamburg and Kiel. Thankful if you would support my writing via: https://christianlauer90.medium.com/membership',
            imageId: '1*el0BA70BDU6wLvgrlTfEkA.jpeg',
            mediumMemberAt: 1585216353763,
            username: 'christianlauer90',
            customDomainState: {
              live: {
                domain: 'christianlauer90.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'df29d70fb6bd',
            algoliaObjectId: null,
            name: 'Grant Piper',
            bio: 'Thought provoking articles daily. Guaranteed.',
            imageId: '2*zTS3pOZe1sMk9TmESAX5uQ.jpeg',
            mediumMemberAt: 1580776849000,
            username: 'grantpiperwriting',
            customDomainState: {
              live: {
                domain: 'grantpiperwriting.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'd4352eb68115',
            algoliaObjectId: null,
            name: 'Clive Thompson',
            bio: 'I write 2X a week on tech, science, culture — and how those collide. Writer at NYT mag/Wired; author, “Coders”. @clive@saturation.social clive@clivethompson.net',
            imageId: '1*C6KlQUX7cSZiV7VlS12Vyw.jpeg',
            mediumMemberAt: 1540914629000,
            username: 'clivethompson',
            customDomainState: {
              live: {
                domain: 'clivethompson.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: true,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'ab8db76f5314',
            algoliaObjectId: null,
            name: 'Yang Zhou',
            bio: 'Full-Stack Engineer 🥷| Top Writer🏆',
            imageId: '2*LGEGZoQWcwrCYPOxGsacCg.jpeg',
            mediumMemberAt: 1598114306495,
            username: 'yangzhou1993',
            customDomainState: {
              live: {
                domain: 'yangzhou1993.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'd662dd6a4ca8',
            algoliaObjectId: null,
            name: 'SwitchUpCB',
            bio: 'You.',
            imageId: '1*nZY8Iir9G0sgC1liAlVHlw.png',
            mediumMemberAt: 0,
            username: 'switchupcb',
            customDomainState: {
              live: {
                domain: 'switchupcb.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'cb79355beb87',
            algoliaObjectId: null,
            name: 'Irtiza Hafiz',
            bio: 'I write about tech, productivity, intentional living, sustainability, personal finance, heath and other topics related to personal growth.',
            imageId: '0*zyHb8yqCDszgfGj3',
            mediumMemberAt: 1653289697000,
            username: 'irtizahafiz',
            customDomainState: {
              live: {
                domain: 'irtizahafiz.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'f3e08a9cbae5',
            algoliaObjectId: null,
            name: 'Noah',
            bio: 'I write articles on productivity, personal development and technology. The tech world is what fascinates me https://medium.com/@nhshinwari21/membership',
            imageId: '1*SON5ddYxH8Wru-hrubxkuA.png',
            mediumMemberAt: 1675023088000,
            username: 'nhshinwari21',
            customDomainState: null,
            hasSubdomain: false,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '5253c50d76c1',
            algoliaObjectId: null,
            name: 'John Au-Yeung',
            bio: 'Web developer. Check out https://thewebdev.info. Email me at hohanga@gmail.com',
            imageId: '2*FG4lpTG6MxKsIj_BBTqwRg.jpeg',
            mediumMemberAt: 0,
            username: 'hohanga',
            customDomainState: {
              live: {
                domain: 'hohanga.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '8f67d94fbbe9',
            algoliaObjectId: null,
            name: 'Isaiah McCall',
            bio: 'Former USA Today Journalist and NYC Comedian | Also on Substack: https://isaiahmccall.substack.com/ mccallisaiah@gmail.com',
            imageId: '1*zOvMfJZ8SLUlLE--q6iYpQ.jpeg',
            mediumMemberAt: 1590171892612,
            username: 'mccallisaiah',
            customDomainState: {
              live: {
                domain: 'mccallisaiah.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '5372db97c9da',
            algoliaObjectId: null,
            name: 'Faisal Khan',
            bio: 'A devout futurist keeping a keen eye on the latest in Emerging Tech, Global Economy, Space, Science, Cryptocurrencies & more',
            imageId: '1*zTg8HJw7-OAGn3swR20B2A@2x.jpeg',
            mediumMemberAt: 1557212400000,
            username: 'khanfk',
            customDomainState: {
              live: {
                domain: 'khanfk.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'e8bf59ddaa70',
            algoliaObjectId: null,
            name: 'Farhan Tanvir',
            bio: 'Believes in learn by doing . Currently working as a software engineer in japan . Passionate about mobile application development .',
            imageId: '1*v0f_R_HRzNOKCqI-sBoqcA.jpeg',
            mediumMemberAt: 1594861955000,
            username: 'farhan-tanvir',
            customDomainState: {
              live: {
                domain: 'farhan-tanvir.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '2415c881fd51',
            algoliaObjectId: null,
            name: 'Jacob Ferus',
            bio: 'Looking outside the box and making sense of the world using data.',
            imageId: '1*kBjZOzA4VnMIigyfQz5-KQ.png',
            mediumMemberAt: 1662585074000,
            username: 'dreamferus',
            customDomainState: null,
            hasSubdomain: false,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'bc7e14e8bd25',
            algoliaObjectId: null,
            name: 'Dineshchandgr - A Top writer in Technology',
            bio: 'Principal Software Engineer and Technical Lead focussed on Backend Engineering who likes to upgrade the tech skills and share knowledge to the community',
            imageId: '1*EFU5pbJHa2uJKiUYddz3Rg.jpeg',
            mediumMemberAt: 1636505327413,
            username: 'dineshchandgr',
            customDomainState: {
              live: {
                domain: 'dineshchandgr.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '864ac3f74bd4',
            algoliaObjectId: null,
            name: 'Tristan Wolff',
            bio: 'Writer of screenplays & audio serials exploring stuff. Delving into sci-fi themes & 🤖 /🧠 symbiosis. https://medium.com/@tristwolff/membership',
            imageId: '1*Sroq2nC2n-In-UBpTfVKbg.png',
            mediumMemberAt: 1669719090000,
            username: 'tristwolff',
            customDomainState: null,
            hasSubdomain: false,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '209207e81261',
            algoliaObjectId: null,
            name: 'Hunter Walk',
            bio: 'You’ll find me @homebrew , Seed Stage Venture Fund w @satyap . Previously made products at YouTube, Google & SecondLife. Married to @cbarlerin .',
            imageId: '1*RpIdeVkdL6-4tJ6x5q17gw.jpeg',
            mediumMemberAt: 1507996438000,
            username: 'hunterwalk',
            customDomainState: {
              live: {
                domain: 'hunterwalk.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '7c1ab936a5cc',
            algoliaObjectId: null,
            name: 'Ellane W',
            bio: 'Designer and educational publisher for 30 years+. Plain-text advocate. Still using paper, but less of it. https://linktr.ee/miscellaneplans',
            imageId: '1*ioxfmwpYXaaQV-mVPkLQOQ.jpeg',
            mediumMemberAt: 1592868470898,
            username: 'miscellaneplans',
            customDomainState: {
              live: {
                domain: 'miscellaneplans.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '2053aaf853f5',
            algoliaObjectId: null,
            name: 'Attila Vágó',
            bio: 'Pragmatic software engineer, editor, writer and occasional music critic. LEGO and Mac fan. Accessibility advocate. Life enthusiast. 10x+ Top Writer, 1M+ views',
            imageId: '1*Ilzy6aGvG__n7QzdkiL41A.jpeg',
            mediumMemberAt: 1637502714000,
            username: 'attilavago',
            customDomainState: {
              live: {
                domain: 'attilavago.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '67a9c31b5a5f',
            algoliaObjectId: null,
            name: 'Entreprogrammer',
            bio: 'Tech entrepreneur | Change maker | Enthusiastic about AI and Blockchain',
            imageId: '1*wbXofMkhXcYHsjFctIwMSA.png',
            mediumMemberAt: 1663316770000,
            username: 'abrarmasum',
            customDomainState: {
              live: {
                domain: 'abrarmasum.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'bf735f6b3d8a',
            algoliaObjectId: null,
            name: 'David Lewis',
            bio: 'Youtuber and blogger https://www.youtube.com/c/DavidLewistalkingtechandaudio',
            imageId: '1*h8LV969KwCPvflAPs99zgQ.jpeg',
            mediumMemberAt: 1630484462000,
            username: 'Davidtalkingtech',
            customDomainState: null,
            hasSubdomain: false,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: 'd28939b5ab78',
            algoliaObjectId: null,
            name: 'LucianoSphere',
            bio: 'https://www.lucianoabriata.com | Nature, science, technology, programming, biotech, bioinformatics.| Have a job for me? Contact me in ES FR EN IT',
            imageId: '1*_D6QHa8RBbslpMmy3jOGtw.jpeg',
            mediumMemberAt: 1669412521000,
            username: 'lucianosphere',
            customDomainState: {
              live: {
                domain: 'lucianosphere.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          },
          {
            __typename: 'User',
            id: '58c587b768b6',
            algoliaObjectId: null,
            name: 'Stephen Moore',
            bio: 'Sassy takes on Big Tech, the Metaverse, NFTs and more. Currently: editor @Entrepreneur’s Handbook | Previously: editor @Medium | Contact: stephen@sjmblog.com',
            imageId: '1*S8My2cbR0NUBgnj8BvLLDA.png',
            mediumMemberAt: 1500307716000,
            username: 'stephenmoore',
            customDomainState: {
              live: {
                domain: 'stephenmoore.medium.com',
                __typename: 'CustomDomain'
              },
              __typename: 'CustomDomainState'
            },
            hasSubdomain: true,
            verifications: {
              isBookAuthor: false,
              __typename: 'VerifiedInfo'
            }
          }
        ]
      }
    }
  ]

  const result = await prisma.user.createMany({
    data: users[0].data.tagTopWriters.map(user => {
      return {
        image: 'https://miro.medium.com/v2/' + user.imageId,
        email: user.id + '@sanchaar.com',
        username: user.username,
        bio: user.bio,
        password: '123456',
        name: user.name
      }
    })
  })
  return new Response(JSON.stringify(result))
}
