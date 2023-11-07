const DEFAULT_ENVIRONMENTS_REGEX: Record<EnvironmentName, string> = {
  local: '^(:?localhost:\\d{2,5}|(?:127|192)(?:\\.[0-9]{1,3}){3})',
  pr: '^(cowfi-git-[\\w\\d-]+|swap-\\w{9}-)cowswap\\.vercel\\.app',
  development: '^(develop.cow.fi|swap-develop.vercel.app)',
  production: '^cow.fi$',
}

function getRegex(env: EnvironmentName) {
  const regex = process.env[`REACT_APP_DOMAIN_REGEX_${env.toUpperCase()}`] || DEFAULT_ENVIRONMENTS_REGEX[env]
  return new RegExp(regex, 'i')
}
export interface EnvironmentChecks {
  isProd: boolean
  isPr: boolean
  isDev: boolean
  isLocal: boolean
}

export function checkEnvironment(host: string, path: string): EnvironmentChecks {
  return {
    // Project environments
    isLocal: getRegex('local').test(host),
    isDev: getRegex('development').test(host),
    isPr: getRegex('pr').test(host),
    isProd: getRegex('production').test(host),
  }
}

const { isLocal, isDev, isPr, isProd } = checkEnvironmentUsingWindow()

function checkEnvironmentUsingWindow() {
  const [host, pathname] =
    typeof window !== 'undefined' ? [window.location.host, window.location.pathname] : [undefined, undefined]
  return checkEnvironment(host, pathname)
}

export const ALL_ENVIRONMENTS: EnvironmentName[] = ['local', 'development', 'pr', 'production']
export type EnvironmentName = 'local' | 'development' | 'pr' | 'production'

export const environmentName: EnvironmentName | undefined = (function () {
  if (isProd) {
    return 'production'
  } else if (isPr) {
    return 'pr'
  } else if (isDev) {
    return 'development'
  } else if (isLocal) {
    return 'local'
  } else {
    return undefined
  }
})()

export { isLocal, isDev, isPr, isProd }
