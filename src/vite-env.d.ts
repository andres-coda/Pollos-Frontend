/// <reference types="vite/client" />
/// <reference types="vite/client" />

declare module '*.svg?react' {
  import * as React from 'react'
  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default Component
}

declare module '*.svg' {
  const src: string
  export default src
}