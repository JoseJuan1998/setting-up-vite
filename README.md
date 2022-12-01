# Rigging Workspace

## System setup

#### Dependencies: 
  1. *eslint*
  2. *prettier*
  3. *eslint-config-prettier*
  4. *eslint-plugin-prettier*
  5. *vitest*
  6. *react-router-dom*
  7. *@testing-library/react*
  8. *@testing-library/jest-dom*

#### 1. Eslint configuration.

For *eslint* to make the initial configuration in the project run:

  *pnpm*

    pnpm exec eslint --init
   
  *npm*

    npx eslint --init

Add `".eslintrc.cjs"` to the `include` section in the file `tsconfig.json`.

Add `project: './tsconfig.json'` to the `parserOptions` in the file `.eslintrc.cjs`.

#### 2. Prettier configuration.

Create your file named `.prettierrc.cjs` and add the *rules* you want or need.

Add `'plugin:prettier/recommended'` to the section `extends` in your `.eslintrc.cjs` file

#### 3. Vitest configuration.

Create a new file in your `src` folder with the following content and named it as `setupTests.ts`

    /* eslint-disable import/no-extraneous-dependencies */
    import matchers from '@testing-library/jest-dom/matchers';
    import { expect } from 'vitest';  

    expect.extend(matchers);

Modify your 'vite.config.ts' with the following code:

    /* eslint-disable import/no-extraneous-dependencies */
    /// <reference types="vitest" />
    /// <reference types="vite/client" />

    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setupTests.ts'],
      },
    });

