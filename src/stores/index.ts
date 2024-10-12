import { Storage } from "@plasmohq/storage"

const storage = new Storage()

interface AppConfig {
  get: (key: string) => Promise<{ name: string }>
  set: (key: string, value: any) => Promise<void>
}

export const appConfig: AppConfig = {
  get: async (key: string) => {
    return await storage.get(key)
  },
  set: async (key: string, value: any) => {
    await storage.set(key, value)
  }
}
