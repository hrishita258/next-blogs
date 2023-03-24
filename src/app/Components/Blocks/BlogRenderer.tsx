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

  const initializeEditor = React.useCallback(async () => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editor',
        onReady() {
          ref.current = editor
        },
        readOnly: true, // make editor read-only
        tools: {
          list: require('@editorjs/list'),
          code: require('@editorjs/code'),
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
  }, [data])

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
        ;(ref as any).current = null
      }
    }
  }, [initializeEditor, isMounted])

  if (!isMounted) {
    return null
  }

  return (
    <div
      id="editor"
      className="prose  lg:prose-lg xl:prose-xl  w-full mt-12"
    ></div>
  )
}

export default BlogRenderer
