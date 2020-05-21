/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.json'
declare module 'filestack-react'
declare module 'react-scroll'
declare module 'lodash'

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test'
        readonly PUBLIC_URL: string
    }
}
