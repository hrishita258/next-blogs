import prisma from '../../../../prisma/client'

export async function GET(request: Request) {
  const data = [
    {
      data: {
        tagFeed: {
          items: [
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '854e05ff6ca5',
                creator: {
                  __typename: 'User',
                  name: 'Coinscapture',
                  username: 'coinscapture',
                  id: 'dc9f8db02ffc',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 1687,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'coinscapture.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Coinscapture is the best, real-time, high-quality cryptocurrency market data provider, by listing 2000+ cryptocurrency globally. https://coinscapture.com/',
                  imageId: '1*xiMJSE4dK16XP4xRUIp8bw.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'a4f1',
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
                        id: '371891d74e49_preview_0',
                        name: '2945',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Building a Billion-Dollar Economy in Indian Fintech',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '371891d74e49_preview_1',
                        name: 'c4fa',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*r5vhPOm2GKsIN20yMwHymA.jpeg',
                          originalHeight: 1078,
                          originalWidth: 2346,
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
                        id: '371891d74e49_preview_2',
                        name: '9b86',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Growth in India’s financial technology industry is skyrocketing. India has just surpassed China as Asia’s leading fintech market, and has become the globe’s second economy, behind only the United States. Across the financial services industry in India, fintech firms are utilizing cutting-edge technology to expand their reach, enhance their customer…',
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
                  subtitle: ''
                },
                __typename: 'Post',
                firstPublishedAt: 1678273842518,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1678273842518,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*r5vhPOm2GKsIN20yMwHymA.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 4.166037735849057,
                sequence: null,
                title: 'Building a Billion-Dollar Economy in Indian Fintech',
                uniqueSlug:
                  'building-a-billion-dollar-economy-in-indian-fintech-854e05ff6ca5',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://coinscapture.medium.com/building-a-billion-dollar-economy-in-indian-fintech-854e05ff6ca5',
                voterCount: 0,
                recommenders: [],
                clapCount: 0,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'india',
                    displayTitle: 'India',
                    normalizedTagSlug: 'india'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-economy',
                    displayTitle: 'Indian Economy',
                    normalizedTagSlug: 'indian-economy'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-blogger',
                    displayTitle: 'Indian Blogger',
                    normalizedTagSlug: 'indian-blogger'
                  },
                  {
                    __typename: 'Tag',
                    id: 'fintech',
                    displayTitle: 'Fintech',
                    normalizedTagSlug: 'fintech'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '1e8255686ba6',
                creator: {
                  __typename: 'User',
                  name: 'Suvangi',
                  username: 'soumyasuvangi',
                  id: '7b76545dba23',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 6,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'soumyasuvangi.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Hey! I am a 21-year-old bookworm and full-time professional content writer. Crafting clever quips and diving deep into complex subjects comes easily to me!',
                  imageId: '0*EyRKQjwr5NdwtHiK'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'b342',
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
                        id: '82f2ad80d0e3_preview_0',
                        name: 'd091',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Manto’s Mottled Dawn',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '82f2ad80d0e3_preview_1',
                        name: '53f3',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Independence comes at a price. The cleaving of the golden bird will spill blood but free her from her cage. One little moment has the capacity of snowballing into an avalanche. Who knew traders from a company will one day have the country closed in their fists?',
                        hasDropCap: true,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'EM',
                            start: 0,
                            end: 261,
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
                        id: '82f2ad80d0e3_preview_2',
                        name: '9a21',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*fbYpmUaFBSTi3CAYJN-kAA.jpeg',
                          originalHeight: 600,
                          originalWidth: 455,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Saadat Hasan Manto…',
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
                    'Independence comes at a price. The cleaving of the golden bird will spill blood but free her from her cage. One little moment has the…'
                },
                __typename: 'Post',
                firstPublishedAt: 1676737320565,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1676737533145,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 1677262708606,
                previewImage: {
                  id: '1*ZYnHEoqUars2yqLQNy3Vig.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 3.054716981132075,
                sequence: null,
                title: 'Manto’s Mottled Dawn',
                uniqueSlug: 'mantos-mottled-dawn-1e8255686ba6',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 2,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://soumyasuvangi.medium.com/mantos-mottled-dawn-1e8255686ba6',
                voterCount: 6,
                recommenders: [],
                clapCount: 6,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'literature',
                    displayTitle: 'Literature',
                    normalizedTagSlug: 'literature'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-literature',
                    displayTitle: 'Indian Literature',
                    normalizedTagSlug: 'indian-literature'
                  },
                  {
                    __typename: 'Tag',
                    id: 'book-review',
                    displayTitle: 'Book Review',
                    normalizedTagSlug: 'book-review'
                  },
                  {
                    __typename: 'Tag',
                    id: 'books',
                    displayTitle: 'Books',
                    normalizedTagSlug: 'books'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'e8fdd820a6d0',
                creator: {
                  __typename: 'User',
                  name: 'Jairam R Prabhu',
                  username: 'jairamrprabhu',
                  id: '1788b9e1965',
                  mediumMemberAt: 1657911068000,
                  socialStats: {
                    followerCount: 5523,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'jairamrprabhu.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Blogger|Podcaster|Student|Engineer|Content Writing. Writes on Science, Elections, Technology, Politics, International Relations|Runs Journal of Knowledge',
                  imageId: '0*iC5snBC2_aYDxkTo.'
                },
                collection: {
                  name: 'ILLUMINATION',
                  id: 'eca1ba5ae1ca',
                  domain: null,
                  slug: 'illumination',
                  __typename: 'Collection'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '5a88',
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
                        id: 'c3b48902309_preview_0',
                        name: 'a0bc',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Takeaways from Indian Financial Budget 2023',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'c3b48902309_preview_1',
                        name: '4219',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Deconstructing India’s Budget for the year 2023–2024',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'c3b48902309_preview_2',
                        name: 'e101',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'On February 1st 2023, the Finance Minister of India, Mrs Nirmala Sitharaman, presented the financial budget for the financial year 2023–2024. It was a well-sought-after budget this time as the world is recovering from the biggest pandemic of the century as well as the war in Ukraine.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'c3b48902309_preview_3',
                        name: 'f84e',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'On January 31st…',
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
                    'Deconstructing India’s Budget for the year 2023–2024'
                },
                __typename: 'Post',
                firstPublishedAt: 1676709866103,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1676709866103,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '0*y7wLhbanlUoELtME.jpg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 5.649056603773585,
                sequence: null,
                title: 'Takeaways from Indian Financial Budget 2023',
                uniqueSlug:
                  'takeaways-from-indian-financial-budget-2023-e8fdd820a6d0',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 16,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/illumination/takeaways-from-indian-financial-budget-2023-e8fdd820a6d0',
                voterCount: 102,
                recommenders: [],
                clapCount: 3703,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'india',
                    displayTitle: 'India',
                    normalizedTagSlug: 'india'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'economics',
                    displayTitle: 'Economics',
                    normalizedTagSlug: 'economics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'finance',
                    displayTitle: 'Finance',
                    normalizedTagSlug: 'finance'
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
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '8f67f6cc3a2',
                creator: {
                  __typename: 'User',
                  name: 'Ayub Khan',
                  username: 'ayubkhan2020',
                  id: '4f3199ca5d17',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 3,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: '',
                  imageId: '1*2Q7sbzsH4xNKLgmfUwsCcg.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'c0ae',
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
                        id: '9e5011913922_preview_0',
                        name: 'd74e',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Hyderabad Mystery: The Case of Missing Documents from Andhra Pradesh State Archives',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'STRONG',
                            start: 0,
                            end: 83,
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
                        id: '9e5011913922_preview_1',
                        name: '9cef',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'by Ayub Khan',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '9e5011913922_preview_2',
                        name: '26a0',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Footnotes make for interesting reading, and I always read them first before reading the actual book. They provide important information on the author’s sources and open new avenues of research. When I read footnote 29…',
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
                  subtitle: 'by Ayub Khan'
                },
                __typename: 'Post',
                firstPublishedAt: 1675992154170,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1675992154170,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*r14_mB4gdg3JoEslVeXYgg.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 2.7660377358490567,
                sequence: null,
                title:
                  'Hyderabad Mystery: The Case of Missing Documents from Andhra Pradesh State Archives',
                uniqueSlug:
                  'hyderabad-mystery-the-case-of-missing-documents-from-andhra-pradesh-state-archives-8f67f6cc3a2',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/@ayubkhan2020/hyderabad-mystery-the-case-of-missing-documents-from-andhra-pradesh-state-archives-8f67f6cc3a2',
                voterCount: 0,
                recommenders: [],
                clapCount: 0,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'hyderabad',
                    displayTitle: 'Hyderabad',
                    normalizedTagSlug: 'hyderabad'
                  },
                  {
                    __typename: 'Tag',
                    id: 'lucien-benichou',
                    displayTitle: 'Lucien Benichou',
                    normalizedTagSlug: 'lucien-benichou'
                  },
                  {
                    __typename: 'Tag',
                    id: 'research-ethics',
                    displayTitle: 'Research Ethics',
                    normalizedTagSlug: 'research-ethics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '15dbace609a4',
                creator: {
                  __typename: 'User',
                  name: 'Can Hoang Tran',
                  username: 'canhoangtran',
                  id: 'ef32a4ab36ed',
                  mediumMemberAt: 1638549668000,
                  socialStats: {
                    followerCount: 198,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'canhoangtran.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Veteran citizen journalist who enjoys martial arts, indie & foreign film, anime, manga, gaming, music, and martial arts. https://ko-fi.com/aeonxtrigger',
                  imageId: '0*E4JBjFpezxV0Tqbu.'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'bfb4',
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
                        id: '9eaceae741d8_preview_0',
                        name: '8d6c',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: '“Honor” & “Prestige” Are Subjective BS, Open To Interpretation — Part 2.2',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '9eaceae741d8_preview_1',
                        name: 'db6c',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'India happens to have the largest English-speaking population in the world but it is a byproduct of the oppression by the British Empire, which resulted in the deaths of tens of millions of Indian citizens.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '9eaceae741d8_preview_2',
                        name: 'd4b6',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '0*U1VGO2xTHdsqawGD',
                          originalHeight: 4000,
                          originalWidth: 5073,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Photo by Debashis RC Biswas on Unsplash',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 9,
                            end: 27,
                            href: 'https://unsplash.com/@rcsalbum?utm_source=medium&utm_medium=referral',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'A',
                            start: 31,
                            end: 39,
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
                        id: '9eaceae741d8_preview_3',
                        name: 'fa37',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Continuing on from 2.1, which focused on the atrocities committed against First Nation Canadians (the Indigenous peoples of Canada for the uninformed), the British Empire committed further atrocities across the globe.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '9eaceae741d8_preview_4',
                        name: '4969',
                        type: 'MIXTAPE_EMBED',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: '“Honor” & “Prestige” Are Subjective BS, Open To Interpretation — Part 2.1\nPart 2 of this series is dedicated to the British Royal Family with 2.1 focused on its role in the oppression and…canhoangtran.medium.com',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 0,
                            end: 211,
                            href: 'https://canhoangtran.medium.com/honor-prestige-are-subjective-bs-open-to-interpretation-part-2-1-2b0a9583fa1a',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'STRONG',
                            start: 0,
                            end: 73,
                            href: null,
                            anchorType: null,
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'EM',
                            start: 74,
                            end: 188,
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
                          href: 'https://canhoangtran.medium.com/honor-prestige-are-subjective-bs-open-to-interpretation-part-2-1-2b0a9583fa1a',
                          mediaResource: {
                            mediumCatalog: null,
                            __typename: 'MediaResource'
                          },
                          __typename: 'MixtapeMetadata',
                          thumbnailImageId: '0*rjAOu7DQcu6Q9gFc'
                        }
                      },
                      {
                        id: '9eaceae741d8_preview_5',
                        name: 'd3ab',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'A friend and mentor once told me that the largest English-speaking population lives in India which initially surprised me…',
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
                    'India happens to have the largest English-speaking population in the world but it is a byproduct of the oppression by the British Empire…'
                },
                __typename: 'Post',
                firstPublishedAt: 1675966201141,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1677001954985,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '0*U1VGO2xTHdsqawGD',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 5.94622641509434,
                sequence: null,
                title:
                  '“Honor” & “Prestige” Are Subjective BS, Open To Interpretation — Part 2.2',
                uniqueSlug:
                  'honor-prestige-are-subjective-bs-open-to-interpretation-part-2-2-15dbace609a4',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://canhoangtran.medium.com/honor-prestige-are-subjective-bs-open-to-interpretation-part-2-2-15dbace609a4',
                voterCount: 4,
                recommenders: [],
                clapCount: 89,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'queen-elizabeth-ii',
                    displayTitle: 'Queen Elizabeth Ii',
                    normalizedTagSlug: 'queen-elizabeth-ii'
                  },
                  {
                    __typename: 'Tag',
                    id: 'british-royal-family',
                    displayTitle: 'British Royal Family',
                    normalizedTagSlug: 'british-royal-family'
                  },
                  {
                    __typename: 'Tag',
                    id: 'british-empire',
                    displayTitle: 'British Empire',
                    normalizedTagSlug: 'british-empire'
                  },
                  {
                    __typename: 'Tag',
                    id: 'india',
                    displayTitle: 'India',
                    normalizedTagSlug: 'india'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '9630994f8b81',
                creator: {
                  __typename: 'User',
                  name: 'Jaimine',
                  username: 'jaiminism',
                  id: 'dc6a98b5467b',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 155,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'jaiminism.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'A libertarian professor based in Mumbai, youtubing at times, and reading books all-the-time. I write too. Dhamma practitioner.',
                  imageId: '1*7g93WY1HO3KCe2O7_WIdfw.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'c7da',
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
                        id: '30d51a2921bb_preview_0',
                        name: '4811',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Why Delhi Police Didn’t Generate Hash Value After Seizing My Cellphone?',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '30d51a2921bb_preview_1',
                        name: '9497',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Having recovered from COVID-19, around 15:45 pm, on 22nd January 2022, two police personnel from the Intelligence Fusion and Strategic Operations (IFSO) unit of the Delhi Police knocked on my door. I was deep asleep, amid the recent chaos. They had come home to investigate my whistleblowing activity, which went…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 277,
                            end: 300,
                            href: 'https://www.youthkiawaaz.com/2022/01/how-i-exposed-anti-muslim-views-on-the-clubhouse-app-because-silence-cannot-be-golden/',
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
                    'The avoidance of the Delhi Police in the Sulli Deals case did not indelibly deter the Bulli Bai case or the Clubhouse hate chat case.'
                },
                __typename: 'Post',
                firstPublishedAt: 1675741207628,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1675741207628,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*Jj6InX_fbaEew7SyQ-2Zhg.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 4.811320754716982,
                sequence: null,
                title:
                  'Why Delhi Police Didn’t Generate Hash Value After Seizing My Cellphone?',
                uniqueSlug:
                  'why-delhi-police-didnt-generate-hash-value-after-seizing-my-cellphone-9630994f8b81',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://jaiminism.medium.com/why-delhi-police-didnt-generate-hash-value-after-seizing-my-cellphone-9630994f8b81',
                voterCount: 1,
                recommenders: [],
                clapCount: 10,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'islamophobia',
                    displayTitle: 'Islamophobia',
                    normalizedTagSlug: 'islamophobia'
                  },
                  {
                    __typename: 'Tag',
                    id: 'hate-crimes',
                    displayTitle: 'Hate Crimes',
                    normalizedTagSlug: 'hate-crimes'
                  },
                  {
                    __typename: 'Tag',
                    id: 'hate-speech',
                    displayTitle: 'Hate Speech',
                    normalizedTagSlug: 'hate-speech'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'modi',
                    displayTitle: 'Modi',
                    normalizedTagSlug: 'modi'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'b7e7f5002973',
                creator: {
                  __typename: 'User',
                  name: 'The Overthinker',
                  username: 'theoverthinker4',
                  id: '7d4ada2bfa91',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 0,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: '',
                  imageId: '0*B8jW_Bcngdb6j-gr'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'f44a',
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
                        id: '8fa70cb08527_preview_0',
                        name: '5612',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Indian Journalism as understood by me.',
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
                        id: '8fa70cb08527_preview_1',
                        name: '2279',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Everyone has heard the line that Media is the fourth pillar of Democracy. Media, in particular Journalism, is thus considered an important part of any democratically ruled nation. Since Independence, Media has been an integral part of this country. Whether Media is truly a part of Democracy or not is…',
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
                    'Everyone has heard the line that Media is the fourth pillar of Democracy. Media, in particular Journalism, is thus considered an important…'
                },
                __typename: 'Post',
                firstPublishedAt: 1675670230185,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1675670230185,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*57OeURSNswNbewcJntb10w.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 3.818867924528302,
                sequence: null,
                title: 'Indian Journalism as understood by me.',
                uniqueSlug:
                  'indian-journalism-as-understood-by-me-b7e7f5002973',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/@theoverthinker4/indian-journalism-as-understood-by-me-b7e7f5002973',
                voterCount: 1,
                recommenders: [],
                clapCount: 1,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'journalism',
                    displayTitle: 'Journalism',
                    normalizedTagSlug: 'journalism'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian',
                    displayTitle: 'Indian',
                    normalizedTagSlug: 'indian'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-journalism',
                    displayTitle: 'Indian Journalism',
                    normalizedTagSlug: 'indian-journalism'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '2c9f831761b4',
                creator: {
                  __typename: 'User',
                  name: 'Your buddy shivam',
                  username: 'nitroskj51',
                  id: 'dc85e37fe6d',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 555,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'nitroskj51.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'I love writing, but not in examination hall.',
                  imageId: '1*b6MdWFVXc9ZAHVSYVmFStA.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'bb21',
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
                        id: 'e9051e7fd3b7_preview_0',
                        name: 'edd5',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Geopolitical facts on India',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'e9051e7fd3b7_preview_1',
                        name: '3694',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '0*onSpvAiIXjYt5Raj',
                          originalHeight: 3216,
                          originalWidth: 4856,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Photo by Naveed Ahmed on Unsplash',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 9,
                            end: 21,
                            href: 'https://unsplash.com/@naveedahmed?utm_source=medium&utm_medium=referral',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'A',
                            start: 25,
                            end: 33,
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
                        id: 'e9051e7fd3b7_preview_2',
                        name: '8cef',
                        type: 'OLI',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'India is the largest democracy in the world, with a federal parliamentary system of government that divides power between the central government and the states. The head of state is the President, while the head of government is the Prime Minister. The Parliament consists of two houses: the Lok Sabha…',
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
                    'India is the largest democracy in the world, with a federal parliamentary system of government that divides power between the central…'
                },
                __typename: 'Post',
                firstPublishedAt: 1675617791042,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1675617791042,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '0*onSpvAiIXjYt5Raj',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 2.1245283018867926,
                sequence: null,
                title: 'Geopolitical facts on India',
                uniqueSlug: 'geopolitical-facts-on-india-2c9f831761b4',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 1,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://nitroskj51.medium.com/geopolitical-facts-on-india-2c9f831761b4',
                voterCount: 3,
                recommenders: [],
                clapCount: 6,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'geopolitics',
                    displayTitle: 'Geopolitics',
                    normalizedTagSlug: 'geopolitics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian',
                    displayTitle: 'Indian',
                    normalizedTagSlug: 'indian'
                  },
                  {
                    __typename: 'Tag',
                    id: 'narendra-modi',
                    displayTitle: 'Narendra Modi',
                    normalizedTagSlug: 'narendra-modi'
                  },
                  {
                    __typename: 'Tag',
                    id: 'pm-of-india',
                    displayTitle: 'Pm Of India',
                    normalizedTagSlug: 'pm-of-india'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '19a81f754c08',
                creator: {
                  __typename: 'User',
                  name: 'Sagnik Chatterjee',
                  username: 'Sagnik.Chatterjee',
                  id: '5317a0a475d3',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 55,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'I am Sagnik Chatterjee and I love to create any form of content.',
                  imageId: '1*nqB_tocP0FYOVsh4Bhq-2A.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '0bbd',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      },
                      {
                        name: 'c50e',
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
                        id: 'fb2d1e88f3e1_preview_0',
                        name: 'b445',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Measuring the Success of Bharat Jodo Yatra',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'fb2d1e88f3e1_preview_1',
                        name: 'cc7a',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'The Bharat Jodo Yatra that began on 7th September, 2022 has now come to an end. Rahul Gandhi has covered 4084 kilometers, starting from Kanyakumari to Srinagar, on foot, as promised by him.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 80,
                            end: 92,
                            href: 'https://en.wikipedia.org/wiki/Rahul_Gandhi',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'A',
                            start: 136,
                            end: 147,
                            href: 'https://en.wikipedia.org/wiki/Kanyakumari',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'A',
                            start: 151,
                            end: 159,
                            href: 'https://en.wikipedia.org/wiki/Srinagar',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'STRONG',
                            start: 4,
                            end: 21,
                            href: null,
                            anchorType: null,
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'STRONG',
                            start: 80,
                            end: 92,
                            href: null,
                            anchorType: null,
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'STRONG',
                            start: 136,
                            end: 147,
                            href: null,
                            anchorType: null,
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'STRONG',
                            start: 151,
                            end: 159,
                            href: null,
                            anchorType: null,
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'EM',
                            start: 36,
                            end: 55,
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
                        id: 'fb2d1e88f3e1_preview_2',
                        name: 'fcb2',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*rcFsOYWiLANi9xSuXPtZ3A.png',
                          originalHeight: 617,
                          originalWidth: 996,
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
                        id: 'fb2d1e88f3e1_preview_3',
                        name: 'c71c',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'What is the Bharat Jodo Yatra?',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'fb2d1e88f3e1_preview_4',
                        name: 'b9e4',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'According to the official website of the Bharat Jodo Yatra,',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'STRONG',
                            start: 41,
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
                        id: 'fb2d1e88f3e1_preview_5',
                        name: 'd407',
                        type: 'BQ',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'The aim of this Yatra is to…',
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
                    'The Bharat Jodo Yatra was a non-political movement started by Rahul Gandhi of the Indian National Congress on 7th September, 2022.'
                },
                __typename: 'Post',
                firstPublishedAt: 1675484977928,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1675681573755,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*rcFsOYWiLANi9xSuXPtZ3A.png',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 5.226415094339623,
                sequence: null,
                title: 'Measuring the Success of Bharat Jodo Yatra',
                uniqueSlug:
                  'measuring-the-success-of-bharat-jodo-yatra-19a81f754c08',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/@Sagnik.Chatterjee/measuring-the-success-of-bharat-jodo-yatra-19a81f754c08',
                voterCount: 1,
                recommenders: [],
                clapCount: 7,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'india',
                    displayTitle: 'India',
                    normalizedTagSlug: 'india'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'bharat-jodo-yatra',
                    displayTitle: 'Bharat Jodo Yatra',
                    normalizedTagSlug: 'bharat-jodo-yatra'
                  },
                  {
                    __typename: 'Tag',
                    id: 'rahul-gandhi',
                    displayTitle: 'Rahul Gandhi',
                    normalizedTagSlug: 'rahul-gandhi'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-national-congress',
                    displayTitle: 'Indian National Congress',
                    normalizedTagSlug: 'indian-national-congress'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'd36606dffc6e',
                creator: {
                  __typename: 'User',
                  name: 'Doogie',
                  username: 'Doogie33',
                  id: '18736e531170',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 229,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'Certified Crypto Genie | Follow and subscribe to stay up to date on everything Crypto! Support the articles here - https://medium.com/@Doogie33/membership',
                  imageId: '1*P44qerXONd7cOzg1jxkdBw.png'
                },
                collection: {
                  name: 'Coinmonks',
                  id: '721b17443fd5',
                  domain: null,
                  slug: 'coinmonks',
                  __typename: 'Collection'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '4216',
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
                        id: 'ea3391f13f94_preview_0',
                        name: '7ebd',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'India Wants G20 Members To Agree On Cryptocurrency Regulations',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'ea3391f13f94_preview_1',
                        name: 'bac2',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*X6hjJ9lncJaEYqZWkIU-gw.png',
                          originalHeight: 1024,
                          originalWidth: 1024,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'If you want to support these articles, and you want access to millions of articles…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 141,
                            end: 180,
                            href: 'https://medium.com/@Doogie33/membership',
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
                        id: 'ea3391f13f94_preview_2',
                        name: '8002',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'India is making efforts to bring the G20 member nations to a unified agreement on the regulations of digital assets, as reported by the Economic Times of India on February 2nd, 2023. India assumed the presidency of the G20 in December of 2022, which has put India in a crucial…',
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
                  subtitle: ''
                },
                __typename: 'Post',
                firstPublishedAt: 1675356476008,
                isLocked: true,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1675356801480,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*X6hjJ9lncJaEYqZWkIU-gw.png',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 1.230188679245283,
                sequence: null,
                title:
                  'India Wants G20 Members To Agree On Cryptocurrency Regulations',
                uniqueSlug:
                  'india-wants-g20-members-to-agree-on-cryptocurrency-regulations-d36606dffc6e',
                visibility: 'LOCKED',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/coinmonks/india-wants-g20-members-to-agree-on-cryptocurrency-regulations-d36606dffc6e',
                voterCount: 2,
                recommenders: [],
                clapCount: 14,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'india',
                    displayTitle: 'India',
                    normalizedTagSlug: 'india'
                  },
                  {
                    __typename: 'Tag',
                    id: 'cryptocurrency-news',
                    displayTitle: 'Cryptocurrency News',
                    normalizedTagSlug: 'cryptocurrency-news'
                  },
                  {
                    __typename: 'Tag',
                    id: 'cryptocurrency-investment',
                    displayTitle: 'Cryptocurrency Investment',
                    normalizedTagSlug: 'cryptocurrency-investment'
                  },
                  {
                    __typename: 'Tag',
                    id: 'cryptocurrency',
                    displayTitle: 'Cryptocurrency',
                    normalizedTagSlug: 'cryptocurrency'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '217efb9faec7',
                creator: {
                  __typename: 'User',
                  name: 'Srikari Rallabandi',
                  username: 'sreeku.ralla',
                  id: '8f480f7ab25c',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 141,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: "Hi! Welcome! is this page going to be abstract? technical? random anecdotes? it's going to be all of them!",
                  imageId: '1*44__sG7amjplIVDxJztMug.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '588a',
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
                        id: '42d874d21df3_preview_0',
                        name: '9f26',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'From India to Bharat — A ‘millennial’s view.’',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '42d874d21df3_preview_1',
                        name: '18a6',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'When I woke up today, I wanted to write something different from my regular blogs on Technology. I couldn’t find a better topic than today’s title. Then I thought, what qualifies me to write on this matter? The following struck.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '42d874d21df3_preview_2',
                        name: '983b',
                        type: 'ULI',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'I witnessed the formation of Telangana.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 29,
                            end: 38,
                            href: 'https://en.wikipedia.org/wiki/Telangana',
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
                        id: '42d874d21df3_preview_3',
                        name: '8245',
                        type: 'ULI',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Observed the movement from…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 100,
                            end: 109,
                            href: 'https://en.wikipedia.org/wiki/Bharat_Rashtra_Samithi',
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
                    'When I woke up today, I wanted to write something different from my regular blogs on Technology. I couldn’t find a better topic than…'
                },
                __typename: 'Post',
                firstPublishedAt: 1674710094149,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1674710094149,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '0*jVlFpQBaEVM-nsA_',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 3.5839622641509434,
                sequence: null,
                title: 'From India to Bharat — A ‘millennial’s view.’',
                uniqueSlug:
                  'from-india-to-bharat-a-millennials-view-217efb9faec7',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/@sreeku.ralla/from-india-to-bharat-a-millennials-view-217efb9faec7',
                voterCount: 10,
                recommenders: [],
                clapCount: 45,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'bharat',
                    displayTitle: 'Bharat',
                    normalizedTagSlug: 'bharat'
                  },
                  {
                    __typename: 'Tag',
                    id: 'india',
                    displayTitle: 'India',
                    normalizedTagSlug: 'india'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian',
                    displayTitle: 'Indian',
                    normalizedTagSlug: 'indian'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-economy',
                    displayTitle: 'Indian Economy',
                    normalizedTagSlug: 'indian-economy'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'a4062ed168e4',
                creator: {
                  __typename: 'User',
                  name: 'Ankita Bose',
                  username: 'ankitabose',
                  id: '24d19385f1d8',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 98,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'ankitabose.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Ankita is a middle-class Bengali woman whose eyelids are painted with yet-to-be fulfilled dreams. An avowed reader, she only wants to learn and write in life.',
                  imageId: '1*vS09IeuXmBUPn1xoQd5YJA.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'bed4',
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
                        id: 'fa933ed8c628_preview_0',
                        name: '97cc',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Of Beauty And Ugliness: A Journalist’s Journey',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'fa933ed8c628_preview_1',
                        name: 'a47e',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*E3kuivmrPLFy6iY-zEBj0A.jpeg',
                          originalHeight: 1488,
                          originalWidth: 1631,
                          focusPercentX: -1,
                          focusPercentY: -1,
                          alt: '',
                          __typename: 'ImageMetadata'
                        },
                        text: 'Artwork by Baibhab Bose',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'fa933ed8c628_preview_2',
                        name: '506c',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Her fingers were stout and slender at the same time. One can hardly fathom how these two could fit together. She had bulgy fingers which were short. They were slender in itself but obscure when compared to her skeletal frame. Her fingers were ugly, she thought. The one part of…',
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
                    'Her fingers were stout and slender at the same time. One can hardly fathom how these two could fit together. She had bulgy fingers which…'
                },
                __typename: 'Post',
                firstPublishedAt: 1674690036447,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1677137677564,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*E3kuivmrPLFy6iY-zEBj0A.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 5.867924528301887,
                sequence: null,
                title: 'Of Beauty And Ugliness: A Journalist’s Journey',
                uniqueSlug:
                  'of-beauty-and-ugliness-a-journalists-journey-a4062ed168e4',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://ankitabose.medium.com/of-beauty-and-ugliness-a-journalists-journey-a4062ed168e4',
                voterCount: 1,
                recommenders: [],
                clapCount: 1,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'republic-day',
                    displayTitle: 'Republic Day',
                    normalizedTagSlug: 'republic-day'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'journalism',
                    displayTitle: 'Journalism',
                    normalizedTagSlug: 'journalism'
                  },
                  {
                    __typename: 'Tag',
                    id: 'stream-of-conciousness',
                    displayTitle: 'Stream Of Conciousness',
                    normalizedTagSlug: 'stream-of-conciousness'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-independence',
                    displayTitle: 'Indian Independence',
                    normalizedTagSlug: 'indian-independence'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'bffd3b435968',
                creator: {
                  __typename: 'User',
                  name: 'Anurag Singh Tomar',
                  username: 'anuragsinghtomar_41628',
                  id: 'b565f688a83c',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 74,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: '',
                  imageId: '0*Z6tgHLNtHNGVU8eX.'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'cab0',
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
                        id: '730cc045409d_preview_0',
                        name: 'd4f2',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Lifting foot off India’s brake pedals',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '730cc045409d_preview_1',
                        name: 'c354',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '0*fa5sZqr04k65Dwl_',
                          originalHeight: 380,
                          originalWidth: 725,
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
                        id: '730cc045409d_preview_2',
                        name: '38d5',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'What actually makes the world beautiful and meaningful? Among many other responses, Diversity and Novelty in life are a couple of answers to the above questions. New ideas, new innovations, constant progress, diversity of art forms, and diversity of opinions and options are what make life feel interesting and kicking…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'EM',
                            start: 84,
                            end: 93,
                            href: null,
                            anchorType: null,
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'EM',
                            start: 98,
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
                    'What actually makes the world beautiful and meaningful? Among many other responses, Diversity and Novelty in life are a couple of answers…'
                },
                __typename: 'Post',
                firstPublishedAt: 1674715986637,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1674715986637,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '0*fa5sZqr04k65Dwl_',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 5.184905660377359,
                sequence: null,
                title: 'Lifting foot off India’s brake pedals',
                uniqueSlug: 'lifting-foot-off-indias-brake-pedals-bffd3b435968',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/@anuragsinghtomar_41628/lifting-foot-off-indias-brake-pedals-bffd3b435968',
                voterCount: 0,
                recommenders: [],
                clapCount: 0,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'india',
                    displayTitle: 'India',
                    normalizedTagSlug: 'india'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-history',
                    displayTitle: 'Indian History',
                    normalizedTagSlug: 'indian-history'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian',
                    displayTitle: 'Indian',
                    normalizedTagSlug: 'indian'
                  },
                  {
                    __typename: 'Tag',
                    id: 'india-rising',
                    displayTitle: 'India Rising',
                    normalizedTagSlug: 'india-rising'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '635b4b4200ee',
                creator: {
                  __typename: 'User',
                  name: 'Jaimine',
                  username: 'jaiminism',
                  id: 'dc6a98b5467b',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 155,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'jaiminism.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'A libertarian professor based in Mumbai, youtubing at times, and reading books all-the-time. I write too. Dhamma practitioner.',
                  imageId: '1*7g93WY1HO3KCe2O7_WIdfw.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '31c3',
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
                        id: '410d40068d27_preview_0',
                        name: '5161',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Is Taxation A System Of Legal Robbery?',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '410d40068d27_preview_1',
                        name: '733d',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'The most reliable source of revenue for the government is “tax”, and the act of charging tax is Taxation. Taxes are classified into two categories: Direct Taxes are those that are levied on the income or profits of a person and include Income Tax, Property Tax, and Entitlement Tax among…',
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
                    'So, if you are eating a cake for Rs 300, the government has eaten a pastry out of it already.'
                },
                __typename: 'Post',
                firstPublishedAt: 1674010815000,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1674010846919,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*l4Y04GyEWwCq9CMBzCluGg.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 6.832389937106918,
                sequence: null,
                title: 'Is Taxation A System Of Legal Robbery?',
                uniqueSlug:
                  'is-taxation-a-system-of-legal-robbery-635b4b4200ee',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://jaiminism.medium.com/is-taxation-a-system-of-legal-robbery-635b4b4200ee',
                voterCount: 1,
                recommenders: [],
                clapCount: 1,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'taxation-is-theft',
                    displayTitle: 'Taxation Is Theft',
                    normalizedTagSlug: 'taxation-is-theft'
                  },
                  {
                    __typename: 'Tag',
                    id: 'taxes',
                    displayTitle: 'Taxes',
                    normalizedTagSlug: 'taxes'
                  },
                  {
                    __typename: 'Tag',
                    id: 'economics',
                    displayTitle: 'Economics',
                    normalizedTagSlug: 'economics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-economy',
                    displayTitle: 'Indian Economy',
                    normalizedTagSlug: 'indian-economy'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'ecf7f69407b1',
                creator: {
                  __typename: 'User',
                  name: 'Politics For India',
                  username: 'politicsforindia',
                  id: 'ea8cdd56098a',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 149,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: '',
                  imageId: '1*Alg3EBSqlu1aNYc1SXjSdw.png'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'fb24',
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
                        id: '312b410871f9_preview_0',
                        name: '9482',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Caste census: Revival of Mandal Politics?',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '312b410871f9_preview_1',
                        name: '4f85',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*zRCEINBodKau9KcBJKOCAA.jpeg',
                          originalHeight: 540,
                          originalWidth: 720,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Even today, caste forms an inseparable part of Indian society.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '312b410871f9_preview_2',
                        name: '4c18',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Across religions, caste is an intrinsic part of Indian society. A mere name of a person tells everything about their social, political and economic location. Thus, to understand Indian society and politics, understanding caste is imperative.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '312b410871f9_preview_3',
                        name: '02e4',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'A caste census was proposed after the release of the Mandal Commission report. Since…',
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
                    'Across religions, caste is an intrinsic part of Indian society. A mere name of a person tells everything about their social, political and…'
                },
                __typename: 'Post',
                firstPublishedAt: 1673956968327,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1673956968327,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*zRCEINBodKau9KcBJKOCAA.jpeg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 5.313207547169812,
                sequence: null,
                title: 'Caste census: Revival of Mandal Politics?',
                uniqueSlug:
                  'caste-census-revival-of-mandal-politics-ecf7f69407b1',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 1,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/@politicsforindia/caste-census-revival-of-mandal-politics-ecf7f69407b1',
                voterCount: 1,
                recommenders: [],
                clapCount: 5,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'census',
                    displayTitle: 'Census',
                    normalizedTagSlug: 'census'
                  },
                  {
                    __typename: 'Tag',
                    id: 'caste-systems',
                    displayTitle: 'Caste Systems',
                    normalizedTagSlug: 'caste-systems'
                  },
                  {
                    __typename: 'Tag',
                    id: 'politics',
                    displayTitle: 'Politics',
                    normalizedTagSlug: 'politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'india',
                    displayTitle: 'India',
                    normalizedTagSlug: 'india'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '7e16cf79ac05',
                creator: {
                  __typename: 'User',
                  name: 'IndicVoices',
                  username: 'indicvoices',
                  id: '909e6f1cf762',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 0,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'Software Engineer by profession. Writer by passion. Write primarily on Indian history and politics while covering world affairs as well. www.indicvoices.com',
                  imageId: '1*O33_gWeW0A7QxrQ1AfZePQ.png'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'af2a',
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
                        id: '4ad61a1531f9_preview_0',
                        name: 'ac09',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'GENESIS OF INDIAN NATIONAL CONGRESS',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '4ad61a1531f9_preview_1',
                        name: 'a554',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Recently Indian National Congress has chosen its 98th president. After 24 years, Congress is going to have a non-Gandhi party president. Indian National Congress — a party that was founded on 1885 by a British civil service officer named Allan Octavian Hume; a party that had 6 European born persons…',
                        hasDropCap: true,
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
                    '“But one thing is clear, that the Congress was started more with the object of saving the British Empire…” — Lala Lajpat Rai'
                },
                __typename: 'Post',
                firstPublishedAt: 1674010941646,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1674010941646,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*GYMjwr1b_q6Y7oB5skzjWw.png',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 9.976729559748428,
                sequence: null,
                title: 'GENESIS OF INDIAN NATIONAL CONGRESS',
                uniqueSlug: 'genesis-of-indian-national-congress-7e16cf79ac05',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/@indicvoices/genesis-of-indian-national-congress-7e16cf79ac05',
                voterCount: 0,
                recommenders: [],
                clapCount: 0,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'politics',
                    displayTitle: 'Politics',
                    normalizedTagSlug: 'politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-national-congress',
                    displayTitle: 'Indian National Congress',
                    normalizedTagSlug: 'indian-national-congress'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-freedom-struggle',
                    displayTitle: 'Indian Freedom Struggle',
                    normalizedTagSlug: 'indian-freedom-struggle'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-history',
                    displayTitle: 'Indian History',
                    normalizedTagSlug: 'indian-history'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'f9628d54401a',
                creator: {
                  __typename: 'User',
                  name: 'Ambuj Shukla',
                  username: 'ambuj4373',
                  id: '42afa3eb420b',
                  mediumMemberAt: 1675428601000,
                  socialStats: {
                    followerCount: 301,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'ambuj4373.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'I write about Data Science, Psychology, Politics and some Random stuffs',
                  imageId: '1*t9ZAdmbA0hw3mmTsLiL79w.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: 'f630',
                        startIndex: 0,
                        textLayout: null,
                        imageLayout: null,
                        backgroundImage: null,
                        videoLayout: null,
                        backgroundVideo: null,
                        __typename: 'Section'
                      },
                      {
                        name: '44ca',
                        startIndex: 3,
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
                        id: '18a14e42454a_preview_0',
                        name: 'c8b9',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Onions Prices and Indian Politics',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '18a14e42454a_preview_1',
                        name: 'b2f1',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'A simple EDA of onion prices dataset from 2020 in R and it’s role in Indian Politics',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '18a14e42454a_preview_2',
                        name: '497e',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*KbS4URlRsWgGAp1N_kzWQw.png',
                          originalHeight: 494,
                          originalWidth: 604,
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
                        id: '18a14e42454a_preview_3',
                        name: 'ab60',
                        type: 'H4',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'About Dataset',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '18a14e42454a_preview_4',
                        name: '2337',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'This dataset has daily/weekly market prices of onion from various markets of India for the year 2020. The data is collected from data.gov.in website. It consists of 9 columns:',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '18a14e42454a_preview_5',
                        name: '7f32',
                        type: 'BQ',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Name of State',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '18a14e42454a_preview_6',
                        name: 'fc01',
                        type: 'BQ',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'District',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '18a14e42454a_preview_7',
                        name: '2a1c',
                        type: 'BQ',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: '…',
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
                    'A simple EDA of onion prices dataset from 2020 in R and it’s role in Indian Politics'
                },
                __typename: 'Post',
                firstPublishedAt: 1673873571019,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1673912574225,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '1*KbS4URlRsWgGAp1N_kzWQw.png',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 3.436792452830189,
                sequence: null,
                title: 'Onions Prices and Indian Politics',
                uniqueSlug: 'onions-prices-and-indian-politics-f9628d54401a',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://ambuj4373.medium.com/onions-prices-and-indian-politics-f9628d54401a',
                voterCount: 2,
                recommenders: [],
                clapCount: 72,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'india',
                    displayTitle: 'India',
                    normalizedTagSlug: 'india'
                  },
                  {
                    __typename: 'Tag',
                    id: 'politics',
                    displayTitle: 'Politics',
                    normalizedTagSlug: 'politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'data',
                    displayTitle: 'Data',
                    normalizedTagSlug: 'data'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'psychology',
                    displayTitle: 'Psychology',
                    normalizedTagSlug: 'psychology'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '38abae60d3bf',
                creator: {
                  __typename: 'User',
                  name: 'Amrit Hallan',
                  username: 'amritsupdates',
                  id: 'b2c91c26325',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 1285,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'amritsupdates.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'I don’t care much about being politically correct. Things are just right or wrong and yes, sometimes there are grey areas in this is why we write, don’t we?',
                  imageId: '1*Vq0e_U1LRt6_Asp7nPTGCA.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '1e47',
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
                        id: '21e88d262ee0_preview_0',
                        name: '57e3',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'About the Ram Charitmanas controversy',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '21e88d262ee0_preview_1',
                        name: 'fdde',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '0*s7Itw2e0MGJ9wQVZ.jpg',
                          originalHeight: 675,
                          originalWidth: 1200,
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
                        id: '21e88d262ee0_preview_2',
                        name: 'abfd',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Nupur Sharma offended the Muslim community by quoting something from Quran.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '21e88d262ee0_preview_3',
                        name: 'e090',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Irrespective of whether what she quoted exists or not in Quran, offense was taken and she had to go underground.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '21e88d262ee0_preview_4',
                        name: '2e22',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Death threats were issued. She was removed from the party post. Multiple people were killed just for supporting her.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '21e88d262ee0_preview_5',
                        name: 'b052',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: '…',
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
                    'Nupur Sharma offended the Muslim community by quoting something from Quran.'
                },
                __typename: 'Post',
                firstPublishedAt: 1673780880487,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1673780880487,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '0*s7Itw2e0MGJ9wQVZ.jpg',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 4.233962264150944,
                sequence: null,
                title: 'About the Ram Charitmanas controversy',
                uniqueSlug:
                  'about-the-ram-charitmanas-controversy-38abae60d3bf',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://amritsupdates.medium.com/about-the-ram-charitmanas-controversy-38abae60d3bf',
                voterCount: 1,
                recommenders: [],
                clapCount: 16,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'hinduism',
                    displayTitle: 'Hinduism',
                    normalizedTagSlug: 'hinduism'
                  },
                  {
                    __typename: 'Tag',
                    id: 'hindu-mythology',
                    displayTitle: 'Hindu Mythology',
                    normalizedTagSlug: 'hindu-mythology'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'mythology',
                    displayTitle: 'Mythology',
                    normalizedTagSlug: 'mythology'
                  },
                  {
                    __typename: 'Tag',
                    id: 'casteism',
                    displayTitle: 'Casteism',
                    normalizedTagSlug: 'casteism'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'c93beadc1cc2',
                creator: {
                  __typename: 'User',
                  name: 'Arvind Rishi',
                  username: 'arowrayne',
                  id: 'e5731d75b80c',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 115,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'Full Stack Developer — No Slack Hustler | Cryptocurrency | Blockchain | Spring Boot | Java | UI |Linkedin — https://www.linkedin.com/in/arvind-rishi-71451b168/',
                  imageId: '1*gv0XOTkCvCuEYVVBPE9HeA.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '2b07',
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
                        id: '65c963b37e23_preview_0',
                        name: 'aeba',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Decoding India’s Tech Stack: BharatNet — Revolutionizing Rural Connectivity',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '65c963b37e23_preview_1',
                        name: 'cba7',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Explore the impact and potential of BharatNet, the National Optical Fibre Network initiative connecting all of India’s village councils to high-speed broadband internet.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'EM',
                            start: 0,
                            end: 169,
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
                        id: '65c963b37e23_preview_2',
                        name: '5acd',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Learn how it’s revolutionizing rural connectivity and enabling digital access to e-governance, e-commerce, e-education, and e-healthcare.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'EM',
                            start: 0,
                            end: 137,
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
                        id: '65c963b37e23_preview_3',
                        name: '9645',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'What is BharatNet Project?',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '65c963b37e23_preview_4',
                        name: 'adeb',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'The BharatNet project, also known as the National Optical Fibre Network…',
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
                    'Explore BharatNet, the National Optical Fibre Network initiative connecting all of India’s village councils to high-speed broadband…'
                },
                __typename: 'Post',
                firstPublishedAt: 1673501225365,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1673501225365,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 1673502071317,
                previewImage: {
                  id: '1*EJog4-HwJgSDTO_3JD4NVA.png',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 2.839937106918239,
                sequence: null,
                title:
                  'Decoding India’s Tech Stack: BharatNet — Revolutionizing Rural Connectivity',
                uniqueSlug:
                  'decoding-indias-tech-stack-bharatnet-revolutionizing-rural-connectivity-c93beadc1cc2',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/@arowrayne/decoding-indias-tech-stack-bharatnet-revolutionizing-rural-connectivity-c93beadc1cc2',
                voterCount: 2,
                recommenders: [],
                clapCount: 2,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'india',
                    displayTitle: 'India',
                    normalizedTagSlug: 'india'
                  },
                  {
                    __typename: 'Tag',
                    id: 'technology',
                    displayTitle: 'Technology',
                    normalizedTagSlug: 'technology'
                  },
                  {
                    __typename: 'Tag',
                    id: 'rural-development',
                    displayTitle: 'Rural Development',
                    normalizedTagSlug: 'rural-development'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-government',
                    displayTitle: 'Indian Government',
                    normalizedTagSlug: 'indian-government'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'a3b26a78bc3a',
                creator: {
                  __typename: 'User',
                  name: 'Snigdha Bhatnagar',
                  username: 'snigdha9bhatnagar',
                  id: '7fbf95f49bad',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 18,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'snigdha9bhatnagar.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'Starting afresh',
                  imageId: '0*1oyx9TLzxC8tvoOx.jpg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '78a6',
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
                        id: '717d2d50e3bc_preview_0',
                        name: '8bbd',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'The Battle of the Viruses',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'STRONG',
                            start: 0,
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
                        id: '717d2d50e3bc_preview_1',
                        name: '1963',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'If we talk about one of the most widely used words in recent years, it needs to have “virus” on the list.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '717d2d50e3bc_preview_2',
                        name: '7b11',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Privileged was the virus, as it did capture its well-deserved limelight and found its space to hit it to the headlines for months, every day (It still is)…',
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
                    'If we talk about one of the most widely used words in recent years, it needs to have “virus” on the list.'
                },
                __typename: 'Post',
                firstPublishedAt: 1673211973810,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1673211973810,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 2.8075471698113206,
                sequence: null,
                title: 'The Battle of the Viruses',
                uniqueSlug: 'the-battle-of-the-viruses-a3b26a78bc3a',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://snigdha9bhatnagar.medium.com/the-battle-of-the-viruses-a3b26a78bc3a',
                voterCount: 1,
                recommenders: [],
                clapCount: 1,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'democracy',
                    displayTitle: 'Democracy',
                    normalizedTagSlug: 'democracy'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'society',
                    displayTitle: 'Society',
                    normalizedTagSlug: 'society'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'ebd94b9eec06',
                creator: {
                  __typename: 'User',
                  name: 'Abhinav Jain',
                  username: 'sirabhinavjain',
                  id: '46f0a6ddb572',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 93,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'sirabhinavjain.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: 'https://www.yourquote.in/abhinav-jain-jk5/quotes',
                  imageId: '0*uraWdQ5cms4xuxYW.'
                },
                collection: {
                  name: 'CryptoStars',
                  id: 'f99bf723d1f5',
                  domain: 'blog.cryptostars.is',
                  slug: 'cryptostars',
                  __typename: 'Collection'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '0499',
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
                        id: 'dd9a3575b517_preview_0',
                        name: '2aea',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Are our public spaces movement-friendly, especially for women?',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'dd9a3575b517_preview_1',
                        name: 'b294',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'A picture is worth a thousand words — How is India transforming?',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'dd9a3575b517_preview_2',
                        name: '7b38',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'India, despite being the world’s 5th largest economy, is a poor country. Most of its people don’t have access to necessities — food, housing, education, and health care. …',
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
                    'A picture is worth a thousand words — How is India transforming?'
                },
                __typename: 'Post',
                firstPublishedAt: 1673247114713,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1673302078109,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '0*wyvD1a3kqWfv9NyT',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 4.607547169811321,
                sequence: null,
                title:
                  'Are our public spaces movement-friendly, especially for women?',
                uniqueSlug:
                  'are-our-public-spaces-movement-friendly-especially-for-women-ebd94b9eec06',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://blog.cryptostars.is/are-our-public-spaces-movement-friendly-especially-for-women-ebd94b9eec06',
                voterCount: 4,
                recommenders: [],
                clapCount: 105,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'india',
                    displayTitle: 'India',
                    normalizedTagSlug: 'india'
                  },
                  {
                    __typename: 'Tag',
                    id: 'womens-health',
                    displayTitle: 'Womens Health',
                    normalizedTagSlug: 'womens-health'
                  },
                  {
                    __typename: 'Tag',
                    id: 'womens-rights',
                    displayTitle: 'Womens Rights',
                    normalizedTagSlug: 'womens-rights'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'change-management',
                    displayTitle: 'Change Management',
                    normalizedTagSlug: 'change-management'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'd3997b5628b2',
                creator: {
                  __typename: 'User',
                  name: 'GowthamLabs',
                  username: 'gowthamlabs',
                  id: '70e7e52bfc4f',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 130,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'Astrologer | Enterprise Architect',
                  imageId: '2*wWJSjfLRqesOxA37mmlxeQ.jpeg'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '624d',
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
                        id: '5475c3c113a4_preview_0',
                        name: 'f9b1',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: '2023 Astrology Predictions — On Global, and India as well as Indian Stock Markets',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '5475c3c113a4_preview_1',
                        name: '93c3',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'View my 2022 Global & India level predictions here',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 0,
                            end: 50,
                            href: 'https://medium.com/@gowthamlabs/india-2030-from-astrological-lenses-a0bbfdc82331',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'STRONG',
                            start: 0,
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
                        id: '5475c3c113a4_preview_2',
                        name: '4a1a',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: '2022 Predictions v/s Happened',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '5475c3c113a4_preview_3',
                        name: '201a',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'People who wish to know how my 2022 prediction worked can explore it here',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '5475c3c113a4_preview_4',
                        name: 'bfe8',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '1*roHBnAILSTfiJAL6LDbr6A.png',
                          originalHeight: 629,
                          originalWidth: 995,
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
                        id: '5475c3c113a4_preview_5',
                        name: '98cf',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'My 2022 prediction’s & news references in internet',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '5475c3c113a4_preview_6',
                        name: '2ad3',
                        type: 'OLI',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Prediction 1: High chance of re-election in Bihar during 2022–23',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 14,
                            end: 64,
                            href: 'https://en.wikipedia.org/wiki/Nitish_Kumar#Sixth_Term_(2022_-_present)',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'STRONG',
                            start: 0,
                            end: 12,
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
                        id: '5475c3c113a4_preview_7',
                        name: '43e1',
                        type: 'OLI',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Prediction 2:INDIA would establish a framework for MAKE IN INDIA type\u200b',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 13,
                            end: 70,
                            href: 'https://www.weforum.org/agenda/2022/11/india-rolls-first-f-its-digital-rupee-currency/',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'STRONG',
                            start: 0,
                            end: 12,
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
                        id: '5475c3c113a4_preview_8',
                        name: '3c3d',
                        type: 'OLI',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Prediction 3:Corona/virus would be controlled through…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 13,
                            end: 130,
                            href: 'https://www.who.int/publications/m/item/weekly-epidemiological-update-on-covid-19---11-may-2022',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'STRONG',
                            start: 0,
                            end: 12,
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
                  subtitle: 'View my 2022 Global & India level predictions here'
                },
                __typename: 'Post',
                firstPublishedAt: 1671863468901,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1673924702751,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 1673921658373,
                previewImage: {
                  id: '1*roHBnAILSTfiJAL6LDbr6A.png',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 8.35377358490566,
                sequence: null,
                title:
                  '2023 Astrology Predictions — On Global, and India as well as Indian Stock Markets',
                uniqueSlug:
                  '2023-astrology-predictions-on-global-and-india-as-well-as-indian-stock-markets-d3997b5628b2',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/@gowthamlabs/2023-astrology-predictions-on-global-and-india-as-well-as-indian-stock-markets-d3997b5628b2',
                voterCount: 1,
                recommenders: [],
                clapCount: 1,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: '2023',
                    displayTitle: '2023',
                    normalizedTagSlug: '2023'
                  },
                  {
                    __typename: 'Tag',
                    id: 'astrology-services',
                    displayTitle: 'Astrology Services',
                    normalizedTagSlug: 'astrology-services'
                  },
                  {
                    __typename: 'Tag',
                    id: 'nifty-trading-tips',
                    displayTitle: 'Nifty Trading Tips',
                    normalizedTagSlug: 'nifty-trading-tips'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'trumpism',
                    displayTitle: 'Trumpism',
                    normalizedTagSlug: 'trumpism'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'dec017e20a4b',
                creator: {
                  __typename: 'User',
                  name: 'Rajveer Sharma',
                  username: 'rajveer761sharma',
                  id: '9b50ba5958c0',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 12,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: 'CFA Level 1 Cleared | Software Developer @Tata Cliq | NITW@2022 | LifeLong Physics Student | Movies and Book Geek | Flutter | Finance | Entrepreneurship | Life',
                  imageId: '0*LPTu8524gL6bFWAt'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '8904',
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
                        id: 'ac92b0203762_preview_0',
                        name: 'd0b5',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Taxes Explained: Part 2| Direct Taxes…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'ac92b0203762_preview_1',
                        name: 'f8dc',
                        type: 'BQ',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Hi Readers, It has been a while since I last posted on topic taxes!! So, let me continue with the same topic in this blog. We will be going through a little advance in this blog.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'STRONG',
                            start: 61,
                            end: 69,
                            href: null,
                            anchorType: null,
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'STRONG',
                            start: 71,
                            end: 73,
                            href: null,
                            anchorType: null,
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'EM',
                            start: 61,
                            end: 69,
                            href: null,
                            anchorType: null,
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'EM',
                            start: 71,
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
                        id: 'ac92b0203762_preview_2',
                        name: '12e4',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '0*Yb6qws5cfjEqua98',
                          originalHeight: 3334,
                          originalWidth: 5943,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Photo by Cytonn Photography on Unsplash',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 9,
                            end: 27,
                            href: 'https://unsplash.com/es/@cytonn_photography?utm_source=medium&utm_medium=referral',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'A',
                            start: 31,
                            end: 39,
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
                        id: 'ac92b0203762_preview_3',
                        name: 'bc26',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Index :',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'STRONG',
                            start: 0,
                            end: 7,
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
                        id: 'ac92b0203762_preview_4',
                        name: '5d5d',
                        type: 'OLI',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Definition for 5 Year Old',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'EM',
                            start: 0,
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
                        id: 'ac92b0203762_preview_5',
                        name: '0327',
                        type: 'OLI',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Types/ Forms (We will Leave tax calculations…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'EM',
                            start: 0,
                            end: 61,
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
                    'Hi Readers, It has been a while since I last posted on topic taxes!! So, let me continue with the same topic in this blog. We will be going…'
                },
                __typename: 'Post',
                firstPublishedAt: 1670845895180,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1670845895180,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '0*Yb6qws5cfjEqua98',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 2.3386792452830187,
                sequence: null,
                title: 'Taxes Explained: Part 2| Direct Taxes…',
                uniqueSlug: 'taxes-explained-part-2-direct-taxes-dec017e20a4b',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 1,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/@rajveer761sharma/taxes-explained-part-2-direct-taxes-dec017e20a4b',
                voterCount: 2,
                recommenders: [],
                clapCount: 2,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'taxes',
                    displayTitle: 'Taxes',
                    normalizedTagSlug: 'taxes'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian',
                    displayTitle: 'Indian',
                    normalizedTagSlug: 'indian'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-economy',
                    displayTitle: 'Indian Economy',
                    normalizedTagSlug: 'indian-economy'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-tax-law',
                    displayTitle: 'Indian Tax Law',
                    normalizedTagSlug: 'indian-tax-law'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: 'e0deb632bab5',
                creator: {
                  __typename: 'User',
                  name: 'MURTUZA BORIWALA',
                  username: 'murtuza.bori24',
                  id: 'd5d7ed40b4f6',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 3,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: null,
                  hasSubdomain: false,
                  bio: '',
                  imageId: '0*7Iv_FHEbAPT_FeQi'
                },
                collection: null,
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '91da',
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
                        id: 'accf6e8d1c8d_preview_0',
                        name: 'e899',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Votes manipulation — A Story of Current Gujarat Election',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'accf6e8d1c8d_preview_1',
                        name: '888e',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Let’s investigate the case using the data.',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'accf6e8d1c8d_preview_2',
                        name: '3f97',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Motivation',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: 'accf6e8d1c8d_preview_3',
                        name: 'b73b',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'The Netflix series “Connected” explores the idea that everything is connected in some way or the other. In the episode “Digits,” the statistical technique known as Benford’s Law is explored in depth and the people who are using it interviewed. This law states…',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'STRONG',
                            start: 438,
                            end: 452,
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
                  subtitle: 'Let’s investigate the case using the data.'
                },
                __typename: 'Post',
                firstPublishedAt: 1670761964187,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1670761964187,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '0*SyXqWdMyeibyc6Gc',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 6.718867924528302,
                sequence: null,
                title:
                  'Votes manipulation — A Story of Current Gujarat Election',
                uniqueSlug:
                  'votes-manipulation-a-story-of-current-gujarat-election-e0deb632bab5',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: null,
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/@murtuza.bori24/votes-manipulation-a-story-of-current-gujarat-election-e0deb632bab5',
                voterCount: 3,
                recommenders: [],
                clapCount: 3,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'data-visualization',
                    displayTitle: 'Data Visualization',
                    normalizedTagSlug: 'data-visualization'
                  },
                  {
                    __typename: 'Tag',
                    id: 'data-analysis',
                    displayTitle: 'Data Analysis',
                    normalizedTagSlug: 'data-analysis'
                  },
                  {
                    __typename: 'Tag',
                    id: 'scraping-with-python',
                    displayTitle: 'Scraping With Python',
                    normalizedTagSlug: 'scraping-with-python'
                  },
                  {
                    __typename: 'Tag',
                    id: 'gujarat-elections-2022',
                    displayTitle: 'Gujarat Elections 2022',
                    normalizedTagSlug: 'gujarat-elections-2022'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  }
                ]
              },
              __typename: 'TagFeedItem'
            },
            {
              feedId: '6e96f01a-d75d-45ea-bb21-2b6daf408c22',
              reason: 84,
              moduleSourceEncoding: 17,
              postProviderExplanation: {
                reason: null,
                topic: null,
                __typename: 'PostProviderExplanation'
              },
              post: {
                id: '6447864ae10a',
                creator: {
                  __typename: 'User',
                  name: 'Bhuvani',
                  username: 'ammukupsc',
                  id: '2905a4eeba33',
                  mediumMemberAt: 0,
                  socialStats: {
                    followerCount: 37,
                    __typename: 'SocialStats'
                  },
                  verifications: {
                    isBookAuthor: false,
                    __typename: 'VerifiedInfo'
                  },
                  customDomainState: {
                    live: {
                      domain: 'ammukupsc.medium.com',
                      __typename: 'CustomDomain'
                    },
                    __typename: 'CustomDomainState'
                  },
                  hasSubdomain: true,
                  bio: '',
                  imageId: '0*-hVcIR-J6_xq-NP6.jpg'
                },
                collection: {
                  name: 'Medpage',
                  id: 'a9d15b4f9201',
                  domain: null,
                  slug: 'medpage',
                  __typename: 'Collection'
                },
                extendedPreviewContent: {
                  bodyModel: {
                    sections: [
                      {
                        name: '3840',
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
                        id: '269b7237ff98_preview_0',
                        name: 'dcce',
                        type: 'H3',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'The Doctor (Dr. B.R. Ambedkar)',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '269b7237ff98_preview_1',
                        name: 'd453',
                        type: 'IMG',
                        href: null,
                        layout: 'INSET_CENTER',
                        metadata: {
                          id: '0*SREdG1nfPDRV30OE',
                          originalHeight: 5568,
                          originalWidth: 3712,
                          focusPercentX: null,
                          focusPercentY: null,
                          alt: null,
                          __typename: 'ImageMetadata'
                        },
                        text: 'Photo by Ashkan Forouzani on Unsplash',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [
                          {
                            type: 'A',
                            start: 9,
                            end: 25,
                            href: 'https://unsplash.com/@ashkfor121?utm_source=medium&utm_medium=referral',
                            anchorType: 'LINK',
                            userId: null,
                            linkMetadata: null,
                            __typename: 'Markup'
                          },
                          {
                            type: 'A',
                            start: 29,
                            end: 37,
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
                        id: '269b7237ff98_preview_2',
                        name: 'c446',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'The Unfathomable deprivation of Knowledge\nThe Inglorious dispossession by the varna\nThe innumerous insinuation of not being wanted\nThe forced inculcation of subservience\nThe elegy in him emerged into an erudition',
                        hasDropCap: null,
                        dropCapImage: null,
                        markups: [],
                        __typename: 'Paragraph',
                        codeBlockMetadata: null,
                        iframe: null,
                        mixtapeMetadata: null
                      },
                      {
                        id: '269b7237ff98_preview_3',
                        name: '89a0',
                        type: 'P',
                        href: null,
                        layout: null,
                        metadata: null,
                        text: 'Venerated yet alienated by his own people\nFor the Scholastic did not fit the body politick\nA jurist with no equal…',
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
                    'The Unfathomable deprivation of Knowledge\nThe Inglorious dispossession by the varna\nThe innumerous insinuation of not being wanted\nThe…'
                },
                __typename: 'Post',
                firstPublishedAt: 1670773464793,
                isLocked: false,
                isSeries: false,
                isShortform: false,
                latestPublishedAt: 1670773464793,
                inResponseToCatalogResult: null,
                pinnedAt: 0,
                pinnedByCreatorAt: 0,
                previewImage: {
                  id: '0*SREdG1nfPDRV30OE',
                  focusPercentX: null,
                  focusPercentY: null,
                  __typename: 'ImageMetadata'
                },
                readingTime: 0.9245283018867925,
                sequence: null,
                title: 'The Doctor (Dr. B.R. Ambedkar)',
                uniqueSlug: 'the-doctor-dr-b-r-ambedkar-6447864ae10a',
                visibility: 'PUBLIC',
                pendingCollection: null,
                statusForCollection: 'APPROVED',
                isPublished: true,
                allowResponses: true,
                postResponses: {
                  count: 0,
                  __typename: 'PostResponses'
                },
                isLimitedState: false,
                mediumUrl:
                  'https://medium.com/medpage/the-doctor-dr-b-r-ambedkar-6447864ae10a',
                voterCount: 2,
                recommenders: [],
                clapCount: 61,
                inResponseToEntityType: null,
                tags: [
                  {
                    __typename: 'Tag',
                    id: 'political',
                    displayTitle: 'Political',
                    normalizedTagSlug: 'political'
                  },
                  {
                    __typename: 'Tag',
                    id: 'india',
                    displayTitle: 'India',
                    normalizedTagSlug: 'india'
                  },
                  {
                    __typename: 'Tag',
                    id: 'indian-politics',
                    displayTitle: 'Indian Politics',
                    normalizedTagSlug: 'indian-politics'
                  },
                  {
                    __typename: 'Tag',
                    id: 'philosophy',
                    displayTitle: 'Philosophy',
                    normalizedTagSlug: 'philosophy'
                  },
                  {
                    __typename: 'Tag',
                    id: 'medpage',
                    displayTitle: 'Medpage',
                    normalizedTagSlug: 'medpage'
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
          content: post.extendedPreviewContent?.subtitle,
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
