import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const workspaceRoot = process.cwd()
const sourceRoot = path.join(workspaceRoot, 'src')
const registryFile = path.join(sourceRoot, '.vitepress', 'content-registry.mjs')

const registryModule = await import(pathToFileURL(registryFile).href)
const entries = registryModule.contentRegistry

const errors = []
const entryIds = new Set()
const entryRoutes = new Set()
const aliasMap = new Map()
const asciiPathPattern = /^[a-z0-9/_-]+$/

function normalizeAlias(alias) {
  return alias.trim().toLowerCase()
}

function resolveRouteToSourceFile(routePath) {
  const normalized = routePath.replace(/^\/|\/$/g, '')

  if (!normalized) {
    return path.join(sourceRoot, 'index.md')
  }

  const indexFile = path.join(sourceRoot, normalized, 'index.md')
  const directFile = path.join(sourceRoot, `${normalized}.md`)

  if (fs.existsSync(indexFile)) {
    return indexFile
  }

  if (fs.existsSync(directFile)) {
    return directFile
  }

  return null
}

for (const entry of entries) {
  if (entryIds.has(entry.id)) {
    errors.push(`Duplicate id: ${entry.id}`)
  }
  entryIds.add(entry.id)

  if (entryRoutes.has(entry.path)) {
    errors.push(`Duplicate route path: ${entry.path}`)
  }
  entryRoutes.add(entry.path)

  if (!entry.path.startsWith('/')) {
    errors.push(`Route must start with "/": ${entry.path}`)
  }

  const pathWithoutSlashes = entry.path.replace(/^\/|\/$/g, '')
  if (pathWithoutSlashes && !asciiPathPattern.test(pathWithoutSlashes)) {
    errors.push(`Route path must be ASCII slug only: ${entry.path}`)
  }

  const sourceFile = resolveRouteToSourceFile(entry.path)
  if (!sourceFile) {
    errors.push(`Missing source file for route: ${entry.path}`)
  }

  for (const alias of entry.aliases) {
    const normalizedAlias = normalizeAlias(alias)

    if (!normalizedAlias) {
      errors.push(`Empty alias found in ${entry.id}`)
      continue
    }

    const existingOwner = aliasMap.get(normalizedAlias)
    if (existingOwner && existingOwner !== entry.id) {
      errors.push(`Duplicate alias "${alias}" used by ${existingOwner} and ${entry.id}`)
      continue
    }

    aliasMap.set(normalizedAlias, entry.id)
  }
}

if (errors.length > 0) {
  console.error('Content registry validation failed:\n')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log(`Content registry OK: ${entries.length} entries validated.`)
