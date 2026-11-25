/// <reference types="vite/client" />

declare const __SERVER_PORT__: string

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string
}
