import prisma from '../../../../prisma/client'

export async function GET(request: Request) {
  const data = [
    {
      data: {
        tagFeed: {
          items: [
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'a9f5bb589bd3',
                creator: {
                  __typename: 'User',
                  name: 'umair haque',
                  username: 'umairh',
                  id: '41e01d325219',
                  mediumMemberAt: 1602677875000,
                  socialStats: {
                    followerCount: 193922,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'vampire.',
                  imageId: '1*N3XzP2bucTYwTm8ZmUZkUA.jpeg'
                },
                collection: {
                  __typename: 'Collection',
                  id: '9b4cc1c6abbd',
                  name: 'Eudaimonia and Co',
                  domain: 'eand.co',
                  slug: 'eudaimonia-co'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'a15d',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: '3cb45a7701e5_preview_0',
                        name: '17ce',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'We’re Watching American Fascism Become Nazism Right Before Our Eyes',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '3cb45a7701e5_preview_1',
                        name: 'c1f1',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'What Do You Call an Organized Political Movement Dedicated to…Ending People’s Rights to Exist?',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '3cb45a7701e5_preview_2',
                        name: 'e8be',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*IyuLM7ZjlgjPnfpCnhfikA.jpeg',
                          originalHeight: 556,
                          originalWidth: 989,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Image Credit: Michael Brochstein',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 14,
                            end: 32,
                            href: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjhvN3F48f9AhVkTKQEHUbABP0QFnoECA8QAQ&url=https%3A%2F%2Fwww.michaelbrochstein.com%2F&usg=AOvVaw2krVdkwaf2fJBn314EgHkr',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'STRONG',
                            start: 14,
                            end: 32,
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
                        id: '3cb45a7701e5_preview_3',
                        name: 'd4d6',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'By now, you might have heard what happened over the weekend. A speaker at CPAC — the big conservative conference — said: “for the good of society … transgenderism must be eradicated from public life entirely — the whole preposterous ideology, at every level.” The internet went into an uproar…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 115,
                            end: 119,
                            href: 'https://www.rollingstone.com/politics/politics-news/cpac-speaker-transgender-people-eradicated-1234690924/',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'EM',
                            start: 427,
                            end: 438,
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
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'What Do You Call an Organized Political Movement Dedicated to…Ending People’s Rights to Exist?'
                },
                __typename: 'Post',
                firstPublishedAt: 1678122241601,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678122241601,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*IyuLM7ZjlgjPnfpCnhfikA.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 10.252830188679244,
                sequence: null,
                title:
                  'We’re Watching American Fascism Become Nazism Right Before Our Eyes',
                uniqueSlug:
                  'were-watching-american-fascism-become-nazism-right-before-our-eyes-a9f5bb589bd3',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                mediumUrl:
                  'https://eand.co/were-watching-american-fascism-become-nazism-right-before-our-eyes-a9f5bb589bd3',
                clapCount: 758,
                voterCount: 52,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 12,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'news',
                    displayTitle: 'News',
                    normalizedTagSlug: 'news'
                  },
                  {
                    __typename: 'Tag',
                    id: 'leadership',
                    displayTitle: 'Leadership',
                    normalizedTagSlug: 'leadership'
                  },
                  {
                    __typename: 'Tag',
                    id: 'culture',
                    displayTitle: 'Culture',
                    normalizedTagSlug: 'culture'
                  },
                  {
                    __typename: 'Tag',
                    id: 'politics',
                    displayTitle: 'Politics',
                    normalizedTagSlug: 'politics'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '758e322117a8',
                creator: {
                  __typename: 'User',
                  name: 'Sean Kernan',
                  username: 'seanjkernan',
                  id: '51e7eb466f57',
                  mediumMemberAt: 1570133380000,
                  socialStats: {
                    followerCount: 76670,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'seanjkernan.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Always on the hunt for a good story. That guy from Quora. Writing out of Tampa, Florida.',
                  imageId: '1*3Z4Lk-vUNLQoVoWZOr3wVA.jpeg'
                },
                collection: {
                  __typename: 'Collection',
                  id: 'b5717b16a765',
                  name: 'Mind Cafe',
                  domain: null,
                  slug: 'mind-cafe'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '69cb',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: '6339d93cd41c_preview_0',
                        name: 'f235',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Self | Depression',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '6339d93cd41c_preview_1',
                        name: 'a517',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'What Two Men Who Survived Jumping Off The Golden Gate Bridge Learned',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '6339d93cd41c_preview_2',
                        name: '9129',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'It’s never too late — until it is.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '6339d93cd41c_preview_3',
                        name: '04c7',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*e8m4WxaFHMz2MEZwVN0RfA.jpeg',
                          originalHeight: 3750,
                          originalWidth: 6000,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Editorial rights purchased via Pexels Images',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 31,
                            end: 44,
                            href: 'https://www.pexels.com/photo/golden-gate-bridge-san-francisco-california-1141853/',
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
                        id: '6339d93cd41c_preview_4',
                        name: 'c410',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Ken Baldwin stood on the edge of the Golden Gate Bridge.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '6339d93cd41c_preview_5',
                        name: '6241',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Several people had pulled over and urged him to come back. He ignored them and looked down into the rippling cold wars of San Francisco Bay.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '6339d93cd41c_preview_6',
                        name: '5ce6',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'It was a 220-foot fall. Your odds of death were 97% — but…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle: 'It’s never too late — until it is.'
                },
                __typename: 'Post',
                firstPublishedAt: 1678133953167,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678137342473,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*e8m4WxaFHMz2MEZwVN0RfA.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 4.398427672955975,
                sequence: null,
                title:
                  'What Two Men Who Survived Jumping Off The Golden Gate Bridge Learned',
                uniqueSlug:
                  'what-two-men-who-survived-jumping-off-the-golden-gate-bridge-learned-758e322117a8',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                mediumUrl:
                  'https://medium.com/mind-cafe/what-two-men-who-survived-jumping-off-the-golden-gate-bridge-learned-758e322117a8',
                clapCount: 721,
                voterCount: 41,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 14,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'self',
                    displayTitle: 'Self',
                    normalizedTagSlug: 'self'
                  },
                  {
                    __typename: 'Tag',
                    id: 'self-improvement',
                    displayTitle: 'Self Improvement',
                    normalizedTagSlug: 'self-improvement'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'mental-health',
                    displayTitle: 'Mental Health',
                    normalizedTagSlug: 'mental-health'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life-lessons',
                    displayTitle: 'Life Lessons',
                    normalizedTagSlug: 'life-lessons'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'e30e47138993',
                creator: {
                  __typename: 'User',
                  name: 'The PyCoach',
                  username: 'frank-andrade',
                  id: 'fb44e21903f3',
                  mediumMemberAt: 1676735732000,
                  socialStats: {
                    followerCount: 36000,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'frank-andrade.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: '8M+ Views in more than 200 Medium articles || Code Less, Earn More: Make money using your tech skills 👉 http://bit.ly/3hb06X4',
                  imageId: '1*veEX4-CiLz5jqUjwWfQo_Q.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '6a8a',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: 'ad9965ba5f6c_preview_0',
                        name: 'a66d',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'I’m Happy I Just Canceled These 4 Paid Subscriptions',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'ad9965ba5f6c_preview_1',
                        name: '7166',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Some of them were overpriced, sketchy, or changed their policies, while others became less useful.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'ad9965ba5f6c_preview_2',
                        name: '1f07',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*W48BRAql7BCx7_xZDdKP_A.jpeg',
                          originalHeight: 4000,
                          originalWidth: 6000,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Image licensed from Shutterstock',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 20,
                            end: 32,
                            href: 'https://www.shutterstock.com/image-photo/keyboard-red-cancel-button-concept-any-1664760805',
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
                        id: 'ad9965ba5f6c_preview_3',
                        name: '8405',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'I don’t have anything against the subscription economy. In fact, there are 5 paid subscriptions that I’d probably never cancel because they’re worth every penny.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 101,
                            end: 126,
                            href: 'https://medium.com/geekculture/my-top-5-paid-subscriptions-ill-never-cancel-as-a-programmer-251b3294e079',
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
                        id: 'ad9965ba5f6c_preview_4',
                        name: 'beec',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'However, when I discover a service is overpriced, sketchy, or suddenly changes its policies, I think it’s fair to reconsider whether it’s worth paying a…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'Some of them were overpriced, sketchy, or changed their policies, while others became less useful.'
                },
                __typename: 'Post',
                firstPublishedAt: 1678021810977,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678021810977,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*W48BRAql7BCx7_xZDdKP_A.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 4.055660377358491,
                sequence: null,
                title: 'I’m Happy I Just Canceled These 4 Paid Subscriptions',
                uniqueSlug:
                  'im-happy-i-just-canceled-these-4-paid-subscriptions-e30e47138993',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://frank-andrade.medium.com/im-happy-i-just-canceled-these-4-paid-subscriptions-e30e47138993',
                clapCount: 255,
                voterCount: 32,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 3,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'technology',
                    displayTitle: 'Technology',
                    normalizedTagSlug: 'technology'
                  },
                  {
                    __typename: 'Tag',
                    id: 'python',
                    displayTitle: 'Python',
                    normalizedTagSlug: 'python'
                  },
                  {
                    __typename: 'Tag',
                    id: 'data-science',
                    displayTitle: 'Data Science',
                    normalizedTagSlug: 'data-science'
                  },
                  {
                    __typename: 'Tag',
                    id: 'money',
                    displayTitle: 'Money',
                    normalizedTagSlug: 'money'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'ad4bad1e2594',
                creator: {
                  __typename: 'User',
                  name: 'Beth Levall',
                  username: 'levall-beth',
                  id: '6a9646a2ae20',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 0,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'levall-beth.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'I am a wife, a mother (both to humans and dogs), and an HR Manager. Writing has always been my happy place.',
                  imageId: '1*PITjAWkpxfwzxFg6UOI7xg@2x.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '2ec2',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      },
                      {
                        name: '031d',
                        startIndex: 6,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: 'af5361493064_preview_0',
                        name: '570f',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Big Life?',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'af5361493064_preview_1',
                        name: '9f42',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*8U1Ua4H7duhNe7m6BrCpkQ.jpeg',
                          originalHeight: 3088,
                          originalWidth: 2316,
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
                        id: 'af5361493064_preview_2',
                        name: 'd426',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'When I was little, I expected I’d live a BIG life',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'af5361493064_preview_3',
                        name: '9017',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Full of fame, fortune, and recognition.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'af5361493064_preview_4',
                        name: '851b',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'And I judged those who wanted less',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'af5361493064_preview_5',
                        name: 'e118',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'They just lacked ambition and direction.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'af5361493064_preview_6',
                        name: '7054',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Graduate college.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'af5361493064_preview_7',
                        name: '1778',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Find a sexy career.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'af5361493064_preview_8',
                        name: 'edbf',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Get married.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'af5361493064_preview_9',
                        name: '5472',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Have babies.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'af5361493064_preview_10',
                        name: '5006',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Climb the corporate ladder.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'af5361493064_preview_11',
                        name: '0665',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Become a BOSS.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'af5361493064_preview_12',
                        name: 'c9d5',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Work until you’re…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle: 'When I was little, I expected I’d live a BIG life'
                },
                __typename: 'Post',
                firstPublishedAt: 1678149554363,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678149996039,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*8U1Ua4H7duhNe7m6BrCpkQ.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 1.9169811320754717,
                sequence: null,
                title: 'Big Life?',
                uniqueSlug: 'big-life-ad4bad1e2594',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://levall-beth.medium.com/big-life-ad4bad1e2594',
                clapCount: 0,
                voterCount: 0,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'parenting',
                    displayTitle: 'Parenting',
                    normalizedTagSlug: 'parenting'
                  },
                  {
                    __typename: 'Tag',
                    id: 'parenthood',
                    displayTitle: 'Parenthood',
                    normalizedTagSlug: 'parenthood'
                  },
                  {
                    __typename: 'Tag',
                    id: 'working-mothers',
                    displayTitle: 'Working Mothers',
                    normalizedTagSlug: 'working-mothers'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'feelings',
                    displayTitle: 'Feelings',
                    normalizedTagSlug: 'feelings'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '8683ad8dbd',
                creator: {
                  __typename: 'User',
                  name: 'Tim Denning',
                  username: 'timdenning',
                  id: 'b6d641be1066',
                  mediumMemberAt: 1633604147000,
                  socialStats: {
                    followerCount: 312398,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'timdenning.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Aussie Blogger with 500M+ views — Writer for CNBC & Business Insider. Inspiring the world through Personal Development and Entrepreneurship — timdenning.com/mb',
                  imageId: '1*bfllCILGW4yHKXgFo8JkHg.jpeg'
                },
                collection: {
                  __typename: 'Collection',
                  id: '7038e003d060',
                  name: 'Better Humans',
                  domain: 'betterhumans.pub',
                  slug: 'better-humans'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'c7fb',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: 'b40287b29764_preview_0',
                        name: 'c663',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'It’s Been 1281 Days Since I Last Drank Alcohol',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'b40287b29764_preview_1',
                        name: '6492',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'This is how to reach a point where you never want to drink again',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'b40287b29764_preview_2',
                        name: 'a44f',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*4C34isGwT4G2U-uDjNKRyw.jpeg',
                          originalHeight: 775,
                          originalWidth: 1206,
                          focusPercentX: 31,
                          focusPercentY: 15,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Photo by Blake Wisz on Unsplash',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 9,
                            end: 19,
                            href: 'https://unsplash.com/es/@blakewisz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'A',
                            start: 23,
                            end: 31,
                            href: 'https://unsplash.com/photos/NfdA1l_7R9Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
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
                        id: 'b40287b29764_preview_3',
                        name: '4a76',
                        type: 'PQ',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Alcohol is the only drug where if you don’t do it people think you have a problem — Andrew Huberman',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'b40287b29764_preview_4',
                        name: 'cf4d',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Alcohol is evil.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'b40287b29764_preview_5',
                        name: '4c96',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'I learned that lesson by spending my youth working in seedy nightclubs. No joke, I saw grown men dump a s**t on the dance floor because they…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'This is how to reach a point where you never want to drink again'
                },
                __typename: 'Post',
                firstPublishedAt: 1678119472274,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678133887558,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*4C34isGwT4G2U-uDjNKRyw.jpeg',
                  focusPercentX: 31,
                  focusPercentY: 15,
                  __typename: 'ImageMetadata'
                },
                readingTime: 4.962264150943397,
                sequence: null,
                title: 'It’s Been 1281 Days Since I Last Drank Alcohol',
                uniqueSlug:
                  'its-been-1281-days-since-i-last-drank-alcohol-8683ad8dbd',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                mediumUrl:
                  'https://betterhumans.pub/its-been-1281-days-since-i-last-drank-alcohol-8683ad8dbd',
                clapCount: 329,
                voterCount: 25,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 8,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'health',
                    displayTitle: 'Health',
                    normalizedTagSlug: 'health'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'alcohol',
                    displayTitle: 'Alcohol',
                    normalizedTagSlug: 'alcohol'
                  },
                  {
                    __typename: 'Tag',
                    id: 'society',
                    displayTitle: 'Society',
                    normalizedTagSlug: 'society'
                  },
                  {
                    __typename: 'Tag',
                    id: 'productivity',
                    displayTitle: 'Productivity',
                    normalizedTagSlug: 'productivity'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'ae4e1a5e2945',
                creator: {
                  __typename: 'User',
                  name: 'Tim Denning',
                  username: 'timdenning',
                  id: 'b6d641be1066',
                  mediumMemberAt: 1633604147000,
                  socialStats: {
                    followerCount: 312398,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'timdenning.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Aussie Blogger with 500M+ views — Writer for CNBC & Business Insider. Inspiring the world through Personal Development and Entrepreneurship — timdenning.com/mb',
                  imageId: '1*bfllCILGW4yHKXgFo8JkHg.jpeg'
                },
                collection: {
                  __typename: 'Collection',
                  id: 'b5717b16a765',
                  name: 'Mind Cafe',
                  domain: null,
                  slug: 'mind-cafe'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'a461',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: '69b8b9969881_preview_0',
                        name: '8a19',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: '14 Lessons I Will Teach My 100 Day Old Daughter About Life Before It’s Too Late',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '69b8b9969881_preview_1',
                        name: '7f60',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'They’re useful lessons for adults too',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '69b8b9969881_preview_2',
                        name: '9cd0',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*6Stq2P7eQQiYFYGeQd97EQ.jpeg',
                          originalHeight: 2000,
                          originalWidth: 1500,
                          focusPercentX: 42,
                          focusPercentY: 16,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Image supplied by author (pictured: my daughter and me)',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '69b8b9969881_preview_3',
                        name: '4ce1',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'My wife and I burst into tears.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '69b8b9969881_preview_4',
                        name: 'b100',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'It was time to throw the bassinet in the bin. The new cot entered our bedroom. It towered over our bed. She was gone.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '69b8b9969881_preview_5',
                        name: '339a',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Our little girl had gone. She’d been replaced by a big girl.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '69b8b9969881_preview_6',
                        name: '8456',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'A grown-up girl. It’s the first time…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle: 'They’re useful lessons for adults too'
                },
                __typename: 'Post',
                firstPublishedAt: 1678126730877,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678126730877,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*6Stq2P7eQQiYFYGeQd97EQ.jpeg',
                  focusPercentX: 42,
                  focusPercentY: 16,
                  __typename: 'ImageMetadata'
                },
                readingTime: 6.775786163522013,
                sequence: null,
                title:
                  '14 Lessons I Will Teach My 100 Day Old Daughter About Life Before It’s Too Late',
                uniqueSlug:
                  '14-lessons-i-will-teach-my-100-day-old-daughter-about-life-before-its-too-late-ae4e1a5e2945',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                mediumUrl:
                  'https://medium.com/mind-cafe/14-lessons-i-will-teach-my-100-day-old-daughter-about-life-before-its-too-late-ae4e1a5e2945',
                clapCount: 190,
                voterCount: 14,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 4,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life-lessons',
                    displayTitle: 'Life Lessons',
                    normalizedTagSlug: 'life-lessons'
                  },
                  {
                    __typename: 'Tag',
                    id: 'relationships',
                    displayTitle: 'Relationships',
                    normalizedTagSlug: 'relationships'
                  },
                  {
                    __typename: 'Tag',
                    id: 'social-media',
                    displayTitle: 'Social Media',
                    normalizedTagSlug: 'social-media'
                  },
                  {
                    __typename: 'Tag',
                    id: 'self-improvement',
                    displayTitle: 'Self Improvement',
                    normalizedTagSlug: 'self-improvement'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'ba2cb8dc8ed9',
                creator: {
                  __typename: 'User',
                  name: 'Juan Camilo Barrera',
                  username: 'juancamilo994',
                  id: '9b6f1a31e9dc',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 4,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'In the constant quest for happiness, meaning and purpose. I spend my life learning, doing marketing, and enjoying as much of my time here.',
                  imageId: '0*lqDuq1VpGzggKdvO'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '4619',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: 'cd7231986fc7_preview_0',
                        name: '8446',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*Uf4Z5SHhEQOtDxNDfBGBoA.jpeg',
                          originalHeight: 800,
                          originalWidth: 1280,
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
                        id: 'cd7231986fc7_preview_1',
                        name: 'fd4f',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Finding your purpose (in case the cheesy one of your childhood didn’t work out)',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'cd7231986fc7_preview_2',
                        name: '217b',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'You probably won’t work on the jobs that you dressed up like when you were a kid and, even if you do, you probably will change roles a couple of times in your life. So, if you’re in the “unlucky” majority of people that is not a celebrity, a firefighter…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'You probably won’t work on the jobs that you dressed up like when you were a kid. Here’s how to find your purpose today.'
                },
                __typename: 'Post',
                firstPublishedAt: 1678059171379,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678070878049,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 1678107903682,
                previewImage: {
                  id: '1*Uf4Z5SHhEQOtDxNDfBGBoA.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 2.566037735849057,
                sequence: null,
                title:
                  'Finding your purpose (in case the cheesy one of your childhood didn’t work out)',
                uniqueSlug:
                  'finding-your-purpose-in-case-the-cheesy-one-of-your-childhood-didnt-work-out-ba2cb8dc8ed9',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://medium.com/@juancamilo994/finding-your-purpose-in-case-the-cheesy-one-of-your-childhood-didnt-work-out-ba2cb8dc8ed9',
                clapCount: 0,
                voterCount: 0,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 1,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'personal-development',
                    displayTitle: 'Personal Development',
                    normalizedTagSlug: 'personal-development'
                  },
                  {
                    __typename: 'Tag',
                    id: 'self-improvement',
                    displayTitle: 'Self Improvement',
                    normalizedTagSlug: 'self-improvement'
                  },
                  {
                    __typename: 'Tag',
                    id: 'work',
                    displayTitle: 'Work',
                    normalizedTagSlug: 'work'
                  },
                  {
                    __typename: 'Tag',
                    id: 'purpose',
                    displayTitle: 'Purpose',
                    normalizedTagSlug: 'purpose'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '4cc7235d54ef',
                creator: {
                  __typename: 'User',
                  name: 'Alexander Semenyuk',
                  username: 'alex_semenyuk',
                  id: '7a7508d0f923',
                  mediumMemberAt: 1656785501000,
                  socialStats: {
                    followerCount: 7167,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'Top writer in multiple topics. Bestselling Ukrainian-American fiction author. Unlimited reads here: https://medium.com/@alex_semenyuk/membership',
                  imageId: '1*n951CjUjVG9jWaVLuh84ag@2x.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '4e00',
                        startIndex: 0,
                        textLayout: 'FLOW',
                        imageLayout: 'NONE',
                        backgroundImage: null,
                        videoLayout: 'NO_VIDEO',
                        backgroundVideo: null,
                        __typename: 'Section'
                      },
                      {
                        name: 'd80b',
                        startIndex: 3,
                        textLayout: 'FLOW',
                        imageLayout: 'NONE',
                        backgroundImage: null,
                        videoLayout: 'NO_VIDEO',
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: 'e743c6b5fc01_preview_0',
                        name: '7dc8',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*jMXVoYB8jScyEcga4lnXjg@2x.jpeg',
                          originalHeight: 1728,
                          originalWidth: 2592,
                          focusPercentX: -1,
                          focusPercentY: -1,
                          alt: '',
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
                        id: 'e743c6b5fc01_preview_1',
                        name: '7f5b',
                        type: 'PRE',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'photo by author',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: {
                          mode: 'AUTO',
                          lang: 'csharp',
                          __typename: 'CodeBlockMetadata'
                        },
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'e743c6b5fc01_preview_2',
                        name: '5769',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Wish for more bad luck',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'e743c6b5fc01_preview_3',
                        name: '27df',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'On a dark eastern highway a tired man is driving his family home. The rain is pouring without mercy. His eyes are fixed on the yellow line, he cannot see much of anything else. The car is going at an abnormal speed. Kids are sleeping in the…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'On a dark eastern highway a tired man is driving his family home. The rain is pouring without mercy. His eyes are fixed on the yellow line…'
                },
                __typename: 'Post',
                firstPublishedAt: 1678141340199,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678141340199,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*jMXVoYB8jScyEcga4lnXjg@2x.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 2.316981132075472,
                sequence: null,
                title: 'Wish for more bad luck',
                uniqueSlug: 'wish-for-more-bad-luck-4cc7235d54ef',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://medium.com/@alex_semenyuk/wish-for-more-bad-luck-4cc7235d54ef',
                clapCount: 507,
                voterCount: 13,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 1,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'advice',
                    displayTitle: 'Advice',
                    normalizedTagSlug: 'advice'
                  },
                  {
                    __typename: 'Tag',
                    id: 'ideas',
                    displayTitle: 'Ideas',
                    normalizedTagSlug: 'ideas'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life-lessons',
                    displayTitle: 'Life Lessons',
                    normalizedTagSlug: 'life-lessons'
                  },
                  {
                    __typename: 'Tag',
                    id: 'medium',
                    displayTitle: 'Medium',
                    normalizedTagSlug: 'medium'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '49a5625326c8',
                creator: {
                  __typename: 'User',
                  name: 'Zeenat Fatma',
                  username: 'zeenatfatma',
                  id: 'b690368693f4',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 252,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'An aspiring poet who wants to share her ideas.',
                  imageId: '1*q9IZ-pKCSNG_NKcmVaeQag.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '6a8b',
                        startIndex: 0,
                        textLayout: 'FLOW',
                        imageLayout: 'NONE',
                        backgroundImage: null,
                        videoLayout: 'NO_VIDEO',
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: 'e172c5a581b5_preview_0',
                        name: '4e70',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*Gt1PBAZSSeJda_EN3diHpw.png',
                          originalHeight: 4408,
                          originalWidth: 3464,
                          focusPercentX: -1,
                          focusPercentY: -1,
                          alt: '',
                          __typename: 'ImageMetadata'
                        },
                        text: 'Photo by Michael Dziedzic on Unsplash',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'e172c5a581b5_preview_1',
                        name: 'b724',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'DECEPTION',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'e172c5a581b5_preview_2',
                        name: '77fc',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'His feelings were midnight rainbow\nThey never really existed\nHe was after nothing\nbut was chasing everything\nIn a constant demand of change \nHow a human like that could exist? \nTalking sober but drunk till neck\nWanting new from the old\nLying to his lover\nabout having a feeling of no feeling \nTalking of nothingness but\nfilled…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'His feelings were midnight rainbow\nThey never really existed\nHe was after nothing\nbut was chasing everything\nIn a constant demand of change…'
                },
                __typename: 'Post',
                firstPublishedAt: 1678112295776,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678112295776,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 1678124448827,
                previewImage: {
                  id: '1*Gt1PBAZSSeJda_EN3diHpw.png',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 0.8150943396226416,
                sequence: null,
                title: 'DECEPTION',
                uniqueSlug: 'deception-49a5625326c8',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://medium.com/@zeenatfatma/deception-49a5625326c8',
                clapCount: 310,
                voterCount: 11,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'deception',
                    displayTitle: 'Deception',
                    normalizedTagSlug: 'deception'
                  },
                  {
                    __typename: 'Tag',
                    id: 'poem',
                    displayTitle: 'Poem',
                    normalizedTagSlug: 'poem'
                  },
                  {
                    __typename: 'Tag',
                    id: 'poems-on-medium',
                    displayTitle: 'Poems On Medium',
                    normalizedTagSlug: 'poems-on-medium'
                  },
                  {
                    __typename: 'Tag',
                    id: 'emptiness',
                    displayTitle: 'Emptiness',
                    normalizedTagSlug: 'emptiness'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'c7305ea0575f',
                creator: {
                  __typename: 'User',
                  name: 'Greg Bauch',
                  username: 'gregbauch',
                  id: '3bc58c080b56',
                  mediumMemberAt: 1674569437000,
                  socialStats: {
                    followerCount: 45,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'Idiot thriving in the era of the flawed protagonist.',
                  imageId: '0*mIqAKTx4uvQEM60w'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '2b85',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: 'b0da9adce568_preview_0',
                        name: 'dd74',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Hungry in a Buick LeSabre',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'b0da9adce568_preview_1',
                        name: '1c8a',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*GG6zSJPpTq8qv61G4HSIxw.jpeg',
                          originalHeight: 3024,
                          originalWidth: 4032,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Actual fax message sent to a radio station (Photo by confused author)',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'b0da9adce568_preview_2',
                        name: 'bb39',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'When I was 22, my brother gave me a free 1979 Buick LeSabre. It was the size of a battleship and smelled like the air vent was packed with Marlboros. I was the fourth member of our family to own it. …',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'I am a terrible football reporter because I hate bothering people and I don’t know anything about football.'
                },
                __typename: 'Post',
                firstPublishedAt: 1678063627474,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678063627474,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*GG6zSJPpTq8qv61G4HSIxw.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 3.475471698113208,
                sequence: null,
                title: 'Hungry in a Buick LeSabre',
                uniqueSlug: 'hungry-in-a-buick-lesabre-c7305ea0575f',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://medium.com/@gregbauch/hungry-in-a-buick-lesabre-c7305ea0575f',
                clapCount: 51,
                voterCount: 2,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 2,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'memoir',
                    displayTitle: 'Memoir',
                    normalizedTagSlug: 'memoir'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'radio',
                    displayTitle: 'Radio',
                    normalizedTagSlug: 'radio'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'c5f094c4f05d',
                creator: {
                  __typename: 'User',
                  name: 'Sad NoCoiner',
                  username: 'sadnocoiner',
                  id: 'c428e6d1d7ba',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 3242,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'sadnocoiner.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Providing you with detailed insights into long-term, buy-and-hold investment opportunities.',
                  imageId: '2*gvp9DEUx5MNSWjdIvFToLA.png'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'c603',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: '24583f1db2ad_preview_0',
                        name: '8d3d',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Mini Farming: Self-Sufficiency on 1/4 Acre (Review)',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '24583f1db2ad_preview_1',
                        name: 'a6c4',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*YMxXOKY_i2Cyt9P7YKHqng.png',
                          originalHeight: 450,
                          originalWidth: 805,
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
                        id: '24583f1db2ad_preview_2',
                        name: 'dd52',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'What’s the easiest 10x investment you can make?',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '24583f1db2ad_preview_3',
                        name: '979c',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Planting a potato.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '24583f1db2ad_preview_4',
                        name: '27d8',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Gardening is often dismissed as “a waste of time.” Meanwhile, food prices steadily increase and shortages become more and more common.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '24583f1db2ad_preview_5',
                        name: 'd71e',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Last March, I wrote an article explaining why backyard chickens are the best inflation hedge you can make…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 46,
                            end: 105,
                            href: 'https://sadnocoiner.medium.com/the-1-way-to-play-inflation-8be7ba64dc4f?sk=5d29f5cd50b6f1fca15a86dff8c40123',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'STRONG',
                            start: 46,
                            end: 105,
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
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'What’s the easiest 10x investment you can make? Mini Farming shows you how to run an effective backyard garden that out-earns most jobs…'
                },
                __typename: 'Post',
                firstPublishedAt: 1678112972050,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678113522841,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*YMxXOKY_i2Cyt9P7YKHqng.png',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 4.444339622641509,
                sequence: null,
                title: 'Mini Farming: Self-Sufficiency on 1/4 Acre (Review)',
                uniqueSlug:
                  'mini-farming-self-sufficiency-on-1-4-acre-review-c5f094c4f05d',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://sadnocoiner.medium.com/mini-farming-self-sufficiency-on-1-4-acre-review-c5f094c4f05d',
                clapCount: 31,
                voterCount: 1,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'money',
                    displayTitle: 'Money',
                    normalizedTagSlug: 'money'
                  },
                  {
                    __typename: 'Tag',
                    id: 'food',
                    displayTitle: 'Food',
                    normalizedTagSlug: 'food'
                  },
                  {
                    __typename: 'Tag',
                    id: 'gardening',
                    displayTitle: 'Gardening',
                    normalizedTagSlug: 'gardening'
                  },
                  {
                    __typename: 'Tag',
                    id: 'personal-finance',
                    displayTitle: 'Personal Finance',
                    normalizedTagSlug: 'personal-finance'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '2ee888b3fee1',
                creator: {
                  __typename: 'User',
                  name: 'umair haque',
                  username: 'umairh',
                  id: '41e01d325219',
                  mediumMemberAt: 1602677875000,
                  socialStats: {
                    followerCount: 193922,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'vampire.',
                  imageId: '1*N3XzP2bucTYwTm8ZmUZkUA.jpeg'
                },
                collection: {
                  __typename: 'Collection',
                  id: '9b4cc1c6abbd',
                  name: 'Eudaimonia and Co',
                  domain: 'eand.co',
                  slug: 'eudaimonia-co'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'c51a',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: '71796eaa5f9b_preview_0',
                        name: '020d',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Welcome to the GOP’s Vision for an Authoritarian America',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '71796eaa5f9b_preview_1',
                        name: 'cb99',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'The GOP’s Blitzkrieg of Hate on Peaceful, Innocent People — And Why It’s Fascism',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '71796eaa5f9b_preview_2',
                        name: 'df36',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*uq4EDAKttqRC6YRsDpA_QA.jpeg',
                          originalHeight: 1099,
                          originalWidth: 1099,
                          focusPercentX: 49,
                          focusPercentY: 48,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Image Credit',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 0,
                            end: 12,
                            href: 'https://twitter.com/asho_ohsa/status/1631733749355347987?s=61&t=QPY95fY_lab8MZ7exUUXvw',
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
                        id: '71796eaa5f9b_preview_3',
                        name: '4a7e',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Sorry guys, that’s it. I guess I can’t write about Ron DeStalin — sorry, I meant DeSantis — anymore. Maybe you didn’t hear, but Florida Republicans want to pass a bill that makes anyone…blogging…about…them…well, they have to “register” with the state. If that sounds absurd, funny, sinister, and a little…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 186,
                            end: 194,
                            href: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjQz83OxML9AhXDNOwKHbczAqgQFnoECA4QAQ&url=https%3A%2F%2Fwww.nbcnews.com%2Fpolitics%2Fpolitics-news%2Fflorida-bill-require-bloggers-write-governor-legislators-register-stat-rcna73191&usg=AOvVaw36wmsv7bFF18Ye9uTc7I6r',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'EM',
                            start: 339,
                            end: 370,
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
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'The GOP’s Blitzkrieg of Hate on Peaceful, Innocent People — And Why It’s Fascism'
                },
                __typename: 'Post',
                firstPublishedAt: 1677952775563,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1677952775563,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*uq4EDAKttqRC6YRsDpA_QA.jpeg',
                  focusPercentX: 49,
                  focusPercentY: 48,
                  __typename: 'ImageMetadata'
                },
                readingTime: 7.80377358490566,
                sequence: null,
                title:
                  'Welcome to the GOP’s Vision for an Authoritarian America',
                uniqueSlug:
                  'welcome-to-the-gops-vision-for-an-authoritarian-america-2ee888b3fee1',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                mediumUrl:
                  'https://eand.co/welcome-to-the-gops-vision-for-an-authoritarian-america-2ee888b3fee1',
                clapCount: 1890,
                voterCount: 155,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 29,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'news',
                    displayTitle: 'News',
                    normalizedTagSlug: 'news'
                  },
                  {
                    __typename: 'Tag',
                    id: 'leadership',
                    displayTitle: 'Leadership',
                    normalizedTagSlug: 'leadership'
                  },
                  {
                    __typename: 'Tag',
                    id: 'culture',
                    displayTitle: 'Culture',
                    normalizedTagSlug: 'culture'
                  },
                  {
                    __typename: 'Tag',
                    id: 'politics',
                    displayTitle: 'Politics',
                    normalizedTagSlug: 'politics'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '43954b5a7421',
                creator: {
                  __typename: 'User',
                  name: 'Rocco Pendola',
                  username: 'roccopendola',
                  id: '5320ecb977d9',
                  mediumMemberAt: 1595869758000,
                  socialStats: {
                    followerCount: 43510,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'roccopendola.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'I write about living the semi-retired life, money and cities on Medium, at https://roccopendola.substack.com. Creator of City Life, https://medium.com/city-life',
                  imageId: '1*ayiF0nprICnmN7rfxz2Erw.png'
                },
                collection: {
                  __typename: 'Collection',
                  id: '9350d123beb6',
                  name: 'Making of a Millionaire',
                  domain: 'themakingofamillionaire.com',
                  slug: 'makingofamillionaire'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '5f31',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: '28ea497060f0_preview_0',
                        name: '426a',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'With Things About To Crash Forget About The American Dream Because It’s Dead',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '28ea497060f0_preview_1',
                        name: '345e',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'If you’re of modest means, but make decent or better money, it might be time for some change',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '28ea497060f0_preview_2',
                        name: 'ec0e',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*Ll8ng9wUXVWVyzkaLl1yCA.png',
                          originalHeight: 1306,
                          originalWidth: 1006,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Source: Author / Barcelona, Spain',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'STRONG',
                            start: 0,
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
                        id: '28ea497060f0_preview_3',
                        name: '405a',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'No, it’s not hyperbole. Things are about to crash.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'STRONG',
                            start: 24,
                            end: 50,
                            href: null,
                            anchorType: null,
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'EM',
                            start: 24,
                            end: 50,
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
                        id: '28ea497060f0_preview_4',
                        name: 'af62',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Not the market (it’ll be fine), but for individuals.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '28ea497060f0_preview_5',
                        name: '8f95',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'For a whole slew of people who thought they were doing the right thing. Chasing the double whammy of saving for traditional retirement while saving for or servicing a lofty mortgage payment…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 80,
                            end: 97,
                            href: 'https://roccopendola.substack.com/p/never-retire-the-double-whammy-of',
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
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'If you’re of modest means, but make decent or better money, it might be time for some change'
                },
                __typename: 'Post',
                firstPublishedAt: 1678113998662,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678113998662,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*Ll8ng9wUXVWVyzkaLl1yCA.png',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 4.554716981132076,
                sequence: null,
                title:
                  'With Things About To Crash Forget About The American Dream Because It’s Dead',
                uniqueSlug:
                  'with-things-about-to-crash-forget-about-the-american-dream-because-its-dead-43954b5a7421',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                mediumUrl:
                  'https://themakingofamillionaire.com/with-things-about-to-crash-forget-about-the-american-dream-because-its-dead-43954b5a7421',
                clapCount: 312,
                voterCount: 18,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 4,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'money',
                    displayTitle: 'Money',
                    normalizedTagSlug: 'money'
                  },
                  {
                    __typename: 'Tag',
                    id: 'personal-finance',
                    displayTitle: 'Personal Finance',
                    normalizedTagSlug: 'personal-finance'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'retirement',
                    displayTitle: 'Retirement',
                    normalizedTagSlug: 'retirement'
                  },
                  {
                    __typename: 'Tag',
                    id: 'housing',
                    displayTitle: 'Housing',
                    normalizedTagSlug: 'housing'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '84b8f69158df',
                creator: {
                  __typename: 'User',
                  name: 'Avi Loeb',
                  username: 'avi-loeb',
                  id: 'adb0e108a94b',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 4832,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'avi-loeb.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Avi Loeb is the Frank B. Baird Jr Professor of Science and Institute director at Harvard University and is the bestselling author of “Extraterrestrial”.',
                  imageId: '1*upiboNSChj1BIvycXiID7w.png'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'd920',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: '131fd57f676c_preview_0',
                        name: 'abb2',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Separating Science from Fiction',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'EM',
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
                        id: '131fd57f676c_preview_1',
                        name: '77fd',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*A8e9UITo4DwvGjtqwdprHQ.png',
                          originalHeight: 2038,
                          originalWidth: 3180,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Credit: Britannica',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 8,
                            end: 18,
                            href: 'https://www.britannica.com/art/science-fiction',
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
                        id: '131fd57f676c_preview_2',
                        name: 'daa7',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Magical thinking posits that everything imaginable is possible. It is an addictive recreational drug consumed not only by non-professionals but also by some mainstream scientists who believe in the multiverse and argue that “anything that can happen will happen an infinite number of times.”',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 225,
                            end: 290,
                            href: 'https://blogs.scientificamerican.com/observations/a-cosmic-controversy/',
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
                        id: '131fd57f676c_preview_3',
                        name: 'c638',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'In a recent interview with Stephen…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 3,
                            end: 21,
                            href: 'https://twitter.com/colbertlateshow/status/1631526565673594880',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'A',
                            start: 76,
                            end: 105,
                            href: 'https://www.dni.gov/files/ODNI/documents/assessments/Unclassified-2022-Annual-Report-UAP.pdf',
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
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'Magical thinking posits that everything imaginable is possible. It is an addictive recreational drug consumed not only by non-professionals…'
                },
                __typename: 'Post',
                firstPublishedAt: 1678036117274,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678055546243,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*A8e9UITo4DwvGjtqwdprHQ.png',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 4.965094339622642,
                sequence: null,
                title: 'Separating Science from Fiction',
                uniqueSlug: 'separating-science-from-fiction-84b8f69158df',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://avi-loeb.medium.com/separating-science-from-fiction-84b8f69158df',
                clapCount: 50,
                voterCount: 12,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 6,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'space',
                    displayTitle: 'Space',
                    normalizedTagSlug: 'space'
                  },
                  {
                    __typename: 'Tag',
                    id: 'astronomy',
                    displayTitle: 'Astronomy',
                    normalizedTagSlug: 'astronomy'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'spirituality',
                    displayTitle: 'Spirituality',
                    normalizedTagSlug: 'spirituality'
                  },
                  {
                    __typename: 'Tag',
                    id: 'artificial-intelligence',
                    displayTitle: 'Artificial Intelligence',
                    normalizedTagSlug: 'artificial-intelligence'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'ece93afa1b00',
                creator: {
                  __typename: 'User',
                  name: 'Patrick Nafziger',
                  username: 'patricknafziger',
                  id: '8bb36a8bb361',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 2,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'I am a pastor, a social worker, a father, a writer, and an overall overthinker. Follow me for equal parts inspiration, challenge, and exploration of the absurd!',
                  imageId: '0*oUJn445PoHpwBo0k'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '12d1',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: '9d778a49cb92_preview_0',
                        name: 'd95e',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Memory Lane',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '9d778a49cb92_preview_1',
                        name: 'b980',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'I remember well the day I became an underachiever. I was in elementary school. …',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'I remember well the day I became an underachiever. I was in elementary school. I can’t remember the grade I was in, but I do remember that…'
                },
                __typename: 'Post',
                firstPublishedAt: 1678113549909,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678113549909,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 2.1547169811320757,
                sequence: null,
                title: 'Memory Lane',
                uniqueSlug: 'memory-lane-ece93afa1b00',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://medium.com/@patricknafziger/memory-lane-ece93afa1b00',
                clapCount: 0,
                voterCount: 0,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'mediocrity',
                    displayTitle: 'Mediocrity',
                    normalizedTagSlug: 'mediocrity'
                  },
                  {
                    __typename: 'Tag',
                    id: 'failure',
                    displayTitle: 'Failure',
                    normalizedTagSlug: 'failure'
                  },
                  {
                    __typename: 'Tag',
                    id: 'elementary-school',
                    displayTitle: 'Elementary School',
                    normalizedTagSlug: 'elementary-school'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'theology',
                    displayTitle: 'Theology',
                    normalizedTagSlug: 'theology'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'bb121dfa5ffc',
                creator: {
                  __typename: 'User',
                  name: 'David B. Clear',
                  username: 'davidbclear',
                  id: '6c268c2ef0e1',
                  mediumMemberAt: 1572535920000,
                  socialStats: {
                    followerCount: 24837,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'davidbclear.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: "Cartoonist, science fan, PhD, eukaryote. Doesn't eat cats, dogs, nor other animals. 1,000x Bottom Writer. davidbclear.com",
                  imageId: '1*5Y4Ycvman1k4QsRT8cpPjA@2x.jpeg'
                },
                collection: {
                  __typename: 'Collection',
                  id: '10deb73f8a76',
                  name: 'Everything Fun',
                  domain: null,
                  slug: 'everything-fun'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'd86b',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: '9a2494ffcd4d_preview_0',
                        name: '9e12',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*4ClNC7cIsq1YCqUFTcja-A.png',
                          originalHeight: 1668,
                          originalWidth: 2224,
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
                        id: '9a2494ffcd4d_preview_1',
                        name: 'e068',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Eternal Wisdom from a Wise Man',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '9a2494ffcd4d_preview_2',
                        name: '25ce',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'A comic',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle: 'A comic'
                },
                __typename: 'Post',
                firstPublishedAt: 1678129378679,
                isLocked: true,
                isSeries: false,
                isShortform: true,
                latestPublishedAt: 1678129378679,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*4ClNC7cIsq1YCqUFTcja-A.png',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 1.4141509433962265,
                sequence: null,
                title: 'Eternal Wisdom from a Wise Man',
                uniqueSlug: 'eternal-wisdom-from-a-wise-man-bb121dfa5ffc',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                mediumUrl:
                  'https://medium.com/everything-fun/eternal-wisdom-from-a-wise-man-bb121dfa5ffc',
                clapCount: 607,
                voterCount: 15,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 7,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'humor',
                    displayTitle: 'Humor',
                    normalizedTagSlug: 'humor'
                  },
                  {
                    __typename: 'Tag',
                    id: 'comics',
                    displayTitle: 'Comics',
                    normalizedTagSlug: 'comics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'wisdom',
                    displayTitle: 'Wisdom',
                    normalizedTagSlug: 'wisdom'
                  },
                  {
                    __typename: 'Tag',
                    id: 'funny',
                    displayTitle: 'Funny',
                    normalizedTagSlug: 'funny'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '6a0a5777faf8',
                creator: {
                  __typename: 'User',
                  name: 'Race Bannon',
                  username: 'racebannon',
                  id: '4e2d891d5a21',
                  mediumMemberAt: 1524091481000,
                  socialStats: {
                    followerCount: 275,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'racebannon.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'I find all of life fascinating and write about it. Patreon: https://www.patreon.com/RaceBannon',
                  imageId: '1*mkZS1qmT7-SIHIwRTq9gsA.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '2441',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: '63ba5706293b_preview_0',
                        name: '9788',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'The Uniqueness That Is You',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '63ba5706293b_preview_1',
                        name: 'a9ba',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Why resisting conformity is a good thing',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'STRONG',
                            start: 0,
                            end: 40,
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
                        id: '63ba5706293b_preview_2',
                        name: '23ed',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*2LppfZdZxa17fpwjiJzBSA.jpeg',
                          originalHeight: 1936,
                          originalWidth: 2938,
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
                        id: '63ba5706293b_preview_3',
                        name: 'bf5d',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: '“Today you are You, that is truer than true. There is no one alive who is Youer than You.” Dr. Seuss',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'EM',
                            start: 0,
                            end: 90,
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
                        id: '63ba5706293b_preview_4',
                        name: '9557',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'The pressure to conform is all around us. Our friends, families, employers, schools, religions, governments, and organizations all take part in this…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle: 'Why resisting conformity is a good thing'
                },
                __typename: 'Post',
                firstPublishedAt: 1678132527809,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678132645626,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*2LppfZdZxa17fpwjiJzBSA.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 2.479245283018868,
                sequence: null,
                title: 'The Uniqueness That Is You',
                uniqueSlug: 'the-uniqueness-that-is-you-6a0a5777faf8',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://racebannon.medium.com/the-uniqueness-that-is-you-6a0a5777faf8',
                clapCount: 0,
                voterCount: 0,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'individuality',
                    displayTitle: 'Individuality',
                    normalizedTagSlug: 'individuality'
                  },
                  {
                    __typename: 'Tag',
                    id: 'uniqueness',
                    displayTitle: 'Uniqueness',
                    normalizedTagSlug: 'uniqueness'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'conformity',
                    displayTitle: 'Conformity',
                    normalizedTagSlug: 'conformity'
                  },
                  {
                    __typename: 'Tag',
                    id: 'self-improvement',
                    displayTitle: 'Self Improvement',
                    normalizedTagSlug: 'self-improvement'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '357a0fea2f71',
                creator: {
                  __typename: 'User',
                  name: 'Adelia Ritchie',
                  username: 'adeliaritchie',
                  id: '249feadaec11',
                  mediumMemberAt: 1631736776000,
                  socialStats: {
                    followerCount: 1219,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'adeliaritchie.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Science lover, contributing editor at SalishMagazine.org, co-editor of The Open Kimono. Send us your edgiest stuff! https://medium.com/the-open-kimono',
                  imageId: '1*ujz_bzABB2iDtfHwQQ6ISA.jpeg'
                },
                collection: {
                  __typename: 'Collection',
                  id: 'eca1ba5ae1ca',
                  name: 'ILLUMINATION',
                  domain: null,
                  slug: 'illumination'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'f198',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: '352f69a0905_preview_0',
                        name: '2342',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'A Seniors Moment',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '352f69a0905_preview_1',
                        name: '105f',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'I Wrote a Poem Just Now',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '352f69a0905_preview_2',
                        name: '08d0',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'A text conversation between two ancient, stoner friends',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '352f69a0905_preview_3',
                        name: 'a68f',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*NP6GVHiLd7fDvwwaoopoMw.jpeg',
                          originalHeight: 2592,
                          originalWidth: 1936,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Photo by Shadowgnosis',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 9,
                            end: 21,
                            href: null,
                            anchorType: 'USER',
                            userId: 'd84b30037097',
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
                        id: '352f69a0905_preview_4',
                        name: 'aa8e',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Adelia: It just occurred to me that we rely more and more on emoticons in texts than actual words. Who needs words when AI can do it? This is my new panic.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'STRONG',
                            start: 0,
                            end: 8,
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
                        id: '352f69a0905_preview_5',
                        name: '0525',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Dan: I wrote a poem just now.',
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
                          }
                        ],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '352f69a0905_preview_6',
                        name: 'b0eb',
                        type: 'PQ',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'I know you because I know me\nI know the despair of…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'A text conversation between two ancient, stoner friends'
                },
                __typename: 'Post',
                firstPublishedAt: 1678092450346,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678127687149,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*NP6GVHiLd7fDvwwaoopoMw.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 2,
                sequence: null,
                title: 'I Wrote a Poem Just Now',
                uniqueSlug: 'i-wrote-a-poem-just-now-357a0fea2f71',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                mediumUrl:
                  'https://medium.com/illumination/i-wrote-a-poem-just-now-357a0fea2f71',
                clapCount: 150,
                voterCount: 3,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 3,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'seniors',
                    displayTitle: 'Seniors',
                    normalizedTagSlug: 'seniors'
                  },
                  {
                    __typename: 'Tag',
                    id: 'poem',
                    displayTitle: 'Poem',
                    normalizedTagSlug: 'poem'
                  },
                  {
                    __typename: 'Tag',
                    id: 'poetry-on-medium',
                    displayTitle: 'Poetry On Medium',
                    normalizedTagSlug: 'poetry-on-medium'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life-lessons',
                    displayTitle: 'Life Lessons',
                    normalizedTagSlug: 'life-lessons'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '61d4b5a200bf',
                creator: {
                  __typename: 'User',
                  name: 'B Kean',
                  username: 'brian-kean',
                  id: 'ae911bc78bf7',
                  mediumMemberAt: 1649260701000,
                  socialStats: {
                    followerCount: 3589,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'brian-kean.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'The past holds the answers to today’s problems. “Be curious, not judgmental,” at least until you have all the facts. Think and stop watching cable news.',
                  imageId: '1*GTpsHF3GrVrWrwW2E2PDDg.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '16df',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: 'b6062dd8aa3e_preview_0',
                        name: '37f1',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'My Close Friend, a 54-year-old Chain-Smoking English Teacher Has Been Conscripted',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'b6062dd8aa3e_preview_1',
                        name: '31f4',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'The Russian army has so lowered its requirements that now it just requires a beating heart',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'b6062dd8aa3e_preview_2',
                        name: 'df89',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '0*jcTH-nREQ5h_TfGB',
                          originalHeight: 6000,
                          originalWidth: 4000,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Photo by Robina Weermeijer on Unsplash',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 9,
                            end: 26,
                            href: 'https://unsplash.com/fr/@averey?utm_source=medium&utm_medium=referral',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'A',
                            start: 30,
                            end: 38,
                            href: 'https://unsplash.com?utm_source=medium&utm_medium=referral',
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
                        id: 'b6062dd8aa3e_preview_3',
                        name: 'c348',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'They only need from each soldier a couple hundred thousand beats of the heart. That will be enough to get that soldier close enough to a Ukrainian defender to distract him or kill him before the attacking Russian soldier is killed.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'b6062dd8aa3e_preview_4',
                        name: 'e018',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'This is not official policy but it is the…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'The Russian army has so lowered its requirements that now it just requires a beating heart'
                },
                __typename: 'Post',
                firstPublishedAt: 1678056986016,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678056986016,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '0*jcTH-nREQ5h_TfGB',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 4.132075471698113,
                sequence: null,
                title:
                  'My Close Friend, a 54-year-old Chain-Smoking English Teacher Has Been Conscripted',
                uniqueSlug:
                  'my-close-friend-a-54-year-old-chain-smoking-english-teacher-has-been-conscripted-61d4b5a200bf',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://brian-kean.medium.com/my-close-friend-a-54-year-old-chain-smoking-english-teacher-has-been-conscripted-61d4b5a200bf',
                clapCount: 520,
                voterCount: 47,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 13,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'friendship',
                    displayTitle: 'Friendship',
                    normalizedTagSlug: 'friendship'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'war',
                    displayTitle: 'War',
                    normalizedTagSlug: 'war'
                  },
                  {
                    __typename: 'Tag',
                    id: 'russia',
                    displayTitle: 'Russia',
                    normalizedTagSlug: 'russia'
                  },
                  {
                    __typename: 'Tag',
                    id: 'politics',
                    displayTitle: 'Politics',
                    normalizedTagSlug: 'politics'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '7d710d4c60b8',
                creator: {
                  __typename: 'User',
                  name: 'Simran Gujral',
                  username: 'gujralsimran19',
                  id: '179cf019bbe9',
                  mediumMemberAt: 1597257309000,
                  socialStats: {
                    followerCount: 28,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'Random thoughts, structured opinions',
                  imageId: '1*EZ-zcHkOXMDcZr5oDlAeQQ@2x.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'e262',
                        startIndex: 0,
                        textLayout: 'FLOW',
                        imageLayout: 'NONE',
                        backgroundImage: null,
                        videoLayout: 'NO_VIDEO',
                        backgroundVideo: null,
                        __typename: 'Section'
                      },
                      {
                        name: '9efa',
                        startIndex: 2,
                        textLayout: 'FLOW',
                        imageLayout: 'NONE',
                        backgroundImage: null,
                        videoLayout: 'NO_VIDEO',
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: 'f86c11307d23_preview_0',
                        name: 'c9af',
                        type: 'H2',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'So you found someone to love you, now what?',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'f86c11307d23_preview_1',
                        name: 'aa15',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*Ze2iz7_Y4JcTnEsRf3lD2w@2x.jpeg',
                          originalHeight: 602,
                          originalWidth: 1012,
                          focusPercentX: -1,
                          focusPercentY: -1,
                          alt: '',
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
                        id: 'f86c11307d23_preview_2',
                        name: 'e085',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Do you remember the butterflies you felt when someone you liked looked at you? You blushed and you felt flushed all over. You thought about them day in and day out, waiting for their texts and they kept running around in your head all day long. This is a heady…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'Do you remember the butterflies you felt when someone you liked looked at you? You blushed and you felt flushed all over. You thought about…'
                },
                __typename: 'Post',
                firstPublishedAt: 1678021865267,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678026467949,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*Ze2iz7_Y4JcTnEsRf3lD2w@2x.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 4.758490566037736,
                sequence: null,
                title: 'So you found someone to love you, now what?',
                uniqueSlug:
                  'so-you-found-someone-to-love-you-now-what-7d710d4c60b8',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://medium.com/@gujralsimran19/so-you-found-someone-to-love-you-now-what-7d710d4c60b8',
                clapCount: 141,
                voterCount: 18,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 4,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'humor',
                    displayTitle: 'Humor',
                    normalizedTagSlug: 'humor'
                  },
                  {
                    __typename: 'Tag',
                    id: 'self',
                    displayTitle: 'Self',
                    normalizedTagSlug: 'self'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life-lessons',
                    displayTitle: 'Life Lessons',
                    normalizedTagSlug: 'life-lessons'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'relationships',
                    displayTitle: 'Relationships',
                    normalizedTagSlug: 'relationships'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '58d89ebb7a58',
                creator: {
                  __typename: 'User',
                  name: 'Annie Tanasugarn, PhD',
                  username: 'thrivewithannie',
                  id: 'ec3e666d9386',
                  mediumMemberAt: 1592068749000,
                  socialStats: {
                    followerCount: 66985,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'thrivewithannie.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Psychologist. Certified Trauma & Relationship Specialist. https://behaviorthrive.com/',
                  imageId: '1*C2z6wuBRia1UfTYOq-SLNg.png'
                },
                collection: {
                  __typename: 'Collection',
                  id: 'b224b324ef5',
                  name: 'Invisible Illness',
                  domain: null,
                  slug: 'invisible-illness'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'a633',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: 'deec7ef2bb59_preview_0',
                        name: 'a483',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: '4 Low-key Signs of Unresolved Trauma in Your Relationship',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'deec7ef2bb59_preview_1',
                        name: 'e292',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'If there’s unhealed trauma in your relationship, here’s how you’ll know.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'deec7ef2bb59_preview_2',
                        name: 'a078',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*fj0PO7c46tcfI1ll9GrMfQ.png',
                          originalHeight: 1080,
                          originalWidth: 1080,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'tmokolo/unsplash',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'deec7ef2bb59_preview_3',
                        name: '1268',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Small traumas can affect our lives as much (or more) than isolated, large traumas. We may not know that these traumas are affecting how we engage in our relationships, our choice in partner, or the effects of unhealed trauma on our ability to connect with those in our lives. If…',
                        hasDropCap: true,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'EM',
                            start: 47,
                            end: 51,
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
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'If there’s unhealed trauma in your relationship, here’s how you’ll know.'
                },
                __typename: 'Post',
                firstPublishedAt: 1677980253011,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678032985313,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*fj0PO7c46tcfI1ll9GrMfQ.png',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 4.80377358490566,
                sequence: null,
                title:
                  '4 Low-key Signs of Unresolved Trauma in Your Relationship',
                uniqueSlug:
                  '4-low-key-signs-of-unresolved-trauma-in-your-relationship-58d89ebb7a58',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                mediumUrl:
                  'https://medium.com/invisible-illness/4-low-key-signs-of-unresolved-trauma-in-your-relationship-58d89ebb7a58',
                clapCount: 558,
                voterCount: 48,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 10,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'relationships',
                    displayTitle: 'Relationships',
                    normalizedTagSlug: 'relationships'
                  },
                  {
                    __typename: 'Tag',
                    id: 'mental-health',
                    displayTitle: 'Mental Health',
                    normalizedTagSlug: 'mental-health'
                  },
                  {
                    __typename: 'Tag',
                    id: 'psychology',
                    displayTitle: 'Psychology',
                    normalizedTagSlug: 'psychology'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'trauma',
                    displayTitle: 'Trauma',
                    normalizedTagSlug: 'trauma'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'f0c5255fee1',
                creator: {
                  __typename: 'User',
                  name: 'Melissa Timberlake',
                  username: 'melissatimberlake',
                  id: 'deec27289a45',
                  mediumMemberAt: 1631395657000,
                  socialStats: {
                    followerCount: 64,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'A professional Life Coach making every day extraordinary with passion, purpose & positivity. https://www.lifelaunchme.com/melissa IG: Melissatlake',
                  imageId: '1*QK0HGAAEMlrXEUjjwws0ig.jpeg'
                },
                collection: {
                  __typename: 'Collection',
                  id: 'eca1ba5ae1ca',
                  name: 'ILLUMINATION',
                  domain: null,
                  slug: 'illumination'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'bf4f',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: '1868cc3d6fc3_preview_0',
                        name: 'b427',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: '5 Things You’re Doing That Make Others Think You’re Toxic',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '1868cc3d6fc3_preview_1',
                        name: '7b39',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '0*ffDO48VA4_j90jBW',
                          originalHeight: 1635,
                          originalWidth: 2796,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Photo by SHTTEFAN on Unsplash',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 9,
                            end: 17,
                            href: 'https://unsplash.com/@shttefan?utm_source=medium&utm_medium=referral',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'A',
                            start: 21,
                            end: 29,
                            href: 'https://unsplash.com?utm_source=medium&utm_medium=referral',
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
                        id: '1868cc3d6fc3_preview_2',
                        name: '3982',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'These days, we’re bombarded with toxicity. We consume it. Are shocked by it. And often, it entertains us. However, your life is not Instagram or TikToK. In real life, you don’t get “likes” for being angry, outrageous, crass, rude, aggressive, or demanding. Although that crap may go viral on social…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'STRONG',
                            start: 153,
                            end: 256,
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
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'A practical guide to understanding toxic behaviors and how they could be ruining your relationships.'
                },
                __typename: 'Post',
                firstPublishedAt: 1678153472967,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678157399762,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '0*ffDO48VA4_j90jBW',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 5.180188679245283,
                sequence: null,
                title:
                  '5 Things You’re Doing That Make Others Think You’re Toxic',
                uniqueSlug:
                  '5-things-youre-doing-that-make-others-think-you-re-toxic-f0c5255fee1',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                mediumUrl:
                  'https://medium.com/illumination/5-things-youre-doing-that-make-others-think-you-re-toxic-f0c5255fee1',
                clapCount: 100,
                voterCount: 2,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 1,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'self-improvement',
                    displayTitle: 'Self Improvement',
                    normalizedTagSlug: 'self-improvement'
                  },
                  {
                    __typename: 'Tag',
                    id: 'relationships',
                    displayTitle: 'Relationships',
                    normalizedTagSlug: 'relationships'
                  },
                  {
                    __typename: 'Tag',
                    id: 'psychology',
                    displayTitle: 'Psychology',
                    normalizedTagSlug: 'psychology'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life-lessons',
                    displayTitle: 'Life Lessons',
                    normalizedTagSlug: 'life-lessons'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '8ff36572cc1f',
                creator: {
                  __typename: 'User',
                  name: 'Rhonda McGee',
                  username: '_RhondaMcGee',
                  id: '86a05e946737',
                  mediumMemberAt: 1672244933000,
                  socialStats: {
                    followerCount: 307,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'Thinking deeply about technology, security & privacy.',
                  imageId: '1*uLgYMfvnF-7iSV1Z9u6ZNA.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '4d48',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      },
                      {
                        name: 'b0f3',
                        startIndex: 2,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: 'ed18ff019386_preview_0',
                        name: '5184',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'In Memorandum',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'ed18ff019386_preview_1',
                        name: 'c341',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '0*PpMeJOGh2LNeBYSq',
                          originalHeight: 3648,
                          originalWidth: 5472,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Photo by Patrick Tomasso on Unsplash',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 9,
                            end: 24,
                            href: 'https://unsplash.com/@impatrickt?utm_source=medium&utm_medium=referral',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'A',
                            start: 28,
                            end: 36,
                            href: 'https://unsplash.com?utm_source=medium&utm_medium=referral',
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
                        id: 'ed18ff019386_preview_2',
                        name: '51d2',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'I’ve caressed you many times.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'ed18ff019386_preview_3',
                        name: '628a',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Our encounters, your recollections underneath flimsy white sheets.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'ed18ff019386_preview_4',
                        name: '68da',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'I’m with you because of your willingness to tell me your last remaining words. As you end one thought and move to another, I release you, lightly dropping your bound together, once loose leaf pages, one on…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle: 'I’ve caressed you many times.'
                },
                __typename: 'Post',
                firstPublishedAt: 1678131238939,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678135247345,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '0*PpMeJOGh2LNeBYSq',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 1.211320754716981,
                sequence: null,
                title: 'In Memorandum',
                uniqueSlug: 'in-memorandum-8ff36572cc1f',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://medium.com/@_RhondaMcGee/in-memorandum-8ff36572cc1f',
                clapCount: 0,
                voterCount: 0,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'books',
                    displayTitle: 'Books',
                    normalizedTagSlug: 'books'
                  },
                  {
                    __typename: 'Tag',
                    id: 'reading',
                    displayTitle: 'Reading',
                    normalizedTagSlug: 'reading'
                  },
                  {
                    __typename: 'Tag',
                    id: 'poetry',
                    displayTitle: 'Poetry',
                    normalizedTagSlug: 'poetry'
                  },
                  {
                    __typename: 'Tag',
                    id: 'culture',
                    displayTitle: 'Culture',
                    normalizedTagSlug: 'culture'
                  },
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: 'b9bc8067-4c43-4338-8e88-c2ebf287c48b',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '9371bc8a15f8',
                creator: {
                  __typename: 'User',
                  name: 'ebelechukwu monye',
                  username: 'ebelemonye',
                  id: 'bb967967a47e',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 73,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'ebelemonye.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Impact storyteller & development analyst | In Identity, Oliver De Coque sings about me | Creating safe spaces @mygradschoolbud | .25(GEAC Foundation)',
                  imageId: '1*xL-tJgkOzOQQW0RoTtJ-sw.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '99c7',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      }
                    ],
                    paragraphs: [
                      {
                        id: '5e7e421d5d59_preview_0',
                        name: '2955',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'I made peace with it, but how?',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '5e7e421d5d59_preview_1',
                        name: '588b',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Before peace comes chaos, but after chaos comes peace.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '5e7e421d5d59_preview_2',
                        name: '71b3',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'The first time I tried therapy, I remember sliding into the building as smoothly as possible, looking embarrassingly from left to right with the hope that no one I knew from school would recognize me and learn that I was seeking help. …',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      }
                    ],
                    __typename: 'RichText'
                  },
                  isFullContent: false,
                  __typename: 'PreviewContent',
                  subtitle:
                    'Before peace comes chaos, but after chaos comes peace.'
                },
                __typename: 'Post',
                firstPublishedAt: 1678140389940,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678140389940,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*07cuGZtkhgai-o5GxFMqiQ.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 3.9952830188679247,
                sequence: null,
                title: 'I made peace with it, but how?',
                uniqueSlug: 'i-made-peace-with-it-but-how-9371bc8a15f8',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                mediumUrl:
                  'https://ebelemonye.medium.com/i-made-peace-with-it-but-how-9371bc8a15f8',
                clapCount: 0,
                voterCount: 0,
                recommenders: [],
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'life',
                    displayTitle: 'Life',
                    normalizedTagSlug: 'life'
                  },
                  {
                    __typename: 'Tag',
                    id: 'lifestyle',
                    displayTitle: 'Lifestyle',
                    normalizedTagSlug: 'lifestyle'
                  },
                  {
                    __typename: 'Tag',
                    id: 'peace',
                    displayTitle: 'Peace',
                    normalizedTagSlug: 'peace'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            }
          ],
          pagingInfo: {
            next: {
              limit: 25,
              to: '25',
              __typename: 'PageParams'
            },
            __typename: 'Paging'
          },
          __typename: 'TagFeedResult'
        }
      }
    }
  ]

  const users = await prisma.user.findMany()
  const tags = await prisma.tag.findMany()

  const posts = await Promise.all(
    data[0].data.tagFeed.items.map(async (postData, i) => {
      const { post } = postData as any
      const user = users[(Math.random() * users.length) | 0].id
      return await prisma.post.create({
        data: {
          authorId: user,
          title: post.title,
          slug: post.uniqueSlug,
          bannerImage: 'https://miro.medium.com/v2/' + post.previewImage.id,
          image: '',
          isFeatured: i % 2 === 0,
          isPremium: i % 3 === 0,
          published: true,
          isPublic: true,
          content: '',
          PostTag: {
            createMany: {
              data: post.tags.map((tag: any) => {
                const tagId = tags.find(
                  t => t.normalizedTagSlug === tag.normalizedTagSlug
                )?.id
                return { tagId }
              })
            }
          }
        }
      })
    })
  )

  return new Response(JSON.stringify(posts))
}
