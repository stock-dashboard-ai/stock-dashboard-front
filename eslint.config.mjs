import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Custom rule overrides
  {
    rules: {
      // Allow unused variables that start with underscore (common TS convention)
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      // Warn on explicit `any` type usage
      '@typescript-eslint/no-explicit-any': 'warn',
      // Allow empty interface declarations (common in Next.js pages)
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },

  // Override default ignores of eslint-config-next
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'next-env.d.ts',
    'node_modules/**',
  ]),
])

export default eslintConfig
