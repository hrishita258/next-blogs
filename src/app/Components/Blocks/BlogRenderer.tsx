'use client'

import EditorJS from '@editorjs/editorjs'
import React from 'react'

interface BlogRendererProps {
  data: any
}

function BlogRenderer({ data }: BlogRendererProps) {
  console.log(data)
  const ref = React.useRef<EditorJS>()
  const [isMounted, setIsMounted] = React.useState<boolean>(false)

  function initializeEditor() {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editor',
        onReady() {
          ref.current = editor
        },
        readOnly: true, // make editor read-only
        tools: {
          list: require('@editorjs/list'),
          code: require('@calumk/editorjs-codeflask'),
          quote: require('@editorjs/quote'),
          warning: require('@editorjs/warning'),
          delimiter: require('@editorjs/delimiter'),
          inlineCode: require('@editorjs/inline-code'),
          linkTool: {
            class: require('@editorjs/link'),
            config: {
              endpoint: 'http://localhost:3000/api/linkTool'
            }
          },
          image: require('@editorjs/image'),
          embed: require('@editorjs/embed'),
          header: {
            class: require('@editorjs/header'),
            config: {
              placeholder: 'Enter a heading...',
              levels: [1, 2, 3, 4],
              defaultLevel: 2
            }
          }
        },
        data
      })
    }
  }

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true)
    }
  }, [])

  React.useEffect(() => {
    if (isMounted) {
      initializeEditor()

      return () => {
        ref.current?.destroy()
        ref.current = null
      }
    }
  }, [isMounted])

  // React.useEffect(() => {
  //   if (data && data.blocks) {
  //     const editor = new EditorJS({
  //       holder: 'editor',
  //       readOnly: true, // make editor read-only
  //       tools: {
  //         list: require('@editorjs/list'),
  //         code: require('@calumk/editorjs-codeflask'),
  //         quote: require('@editorjs/quote'),
  //         warning: require('@editorjs/warning'),
  //         delimiter: require('@editorjs/delimiter'),
  //         inlineCode: require('@editorjs/inline-code'),
  //         linkTool: {
  //           class: require('@editorjs/link'),
  //           config: {
  //             endpoint: 'http://localhost:3000/api/linkTool'
  //           }
  //         },
  //         image: require('@editorjs/image'),
  //         embed: require('@editorjs/embed'),
  //         header: {
  //           class: require('@editorjs/header'),
  //           config: {
  //             placeholder: 'Enter a heading...',
  //             levels: [1, 2, 3, 4],
  //             defaultLevel: 2
  //           }
  //         }
  //       },
  //       data
  //     })

  //     return () => {
  //       editor.destroy()
  //     }
  //   }
  // }, [data])

  if (!isMounted) {
    return null
  }

  return <div id="editor" className="prose w-full mt-12"></div>
}

export default BlogRenderer
