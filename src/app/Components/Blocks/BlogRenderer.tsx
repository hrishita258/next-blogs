'use client'

import EditorJS from '@editorjs/editorjs'
import React from 'react'

interface BlogRendererProps {
  data: any
}

function BlogRenderer({ data }: BlogRendererProps) {
  const editorRef: any = React.useRef()

  React.useEffect(() => {
    if (data && data.blocks) {
      const editor = new EditorJS({
        holder: 'editor',
        readOnly: true, // make editor read-only
        tools: {
          list: require('@editorjs/list'),
          code: require('@calumk/editorjs-codeflask'),
          quote: require('@editorjs/quote'),
          warning: require('@editorjs/warning'),
          delimiter: require('@editorjs/delimiter'),
          inlineCode: require('@editorjs/inline-code'),
          linkTool: require('@editorjs/link'),
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

      return () => {
        editor.destroy()
      }
    }
  }, [data])

  return <div id="editor" className="prose w-full mt-12"></div>
}

export default BlogRenderer
