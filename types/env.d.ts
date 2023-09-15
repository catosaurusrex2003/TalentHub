// created this env.d.ts file to stop the type error while importing '@env'
// Cannot find module '@env' or its corresponding type declarations.ts(2307)
declare module '@env' {
    export const RAPID_API_KEY: string;
  }