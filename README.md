# Project setup steps

---
## Installation
```
npm create vite
cd ph-university-frontend-redux
npm install
npm install
npm run dev
npm i react-router-dom react-hook-form antd
npm install @reduxjs/toolkit react-redux
```
## Redux setup
---
### Paste this code in store.ts file

```
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer : {}
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
```
### Paste this code in hooks.ts file

```
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
```

## Create git repo and Add project with repo
---

```
echo "# ph-university-frontend-redux" >> README.md
git init
git add
git commit -m "first commit"
git commit -m "first commit"
git push -u origin main
```

## Create all necessary folders and files
--- 
### Folders
---

* ___components___ (for all components) : src > __`components`__ 

* ___pages___ (for all Pages routes) : src > __`pages`__

* ___utils___ (for all utility) : src > __`utils`__

* ___lib___ (for all external libraries) : src > __`lib`__

* ___config___ (for all types of configuration) : src > __`config`__

* ___routes___ (for all types of routes) : src > __`routes`__

* ___redux___ (for all redux application files) : src > __`redux`__

* ___store.ts___ (for store reducer of redux) : src > redux > __`store.ts`__

* ___hooks.ts___ (for hooks reducer of redux) : src > redux > __`hooks.ts`__

* ___styles___ (for all styles) : src > __`styles`__

* ___images___ (for all images) : src > assets > __`images`__

* ___icons___ (for all icons) : src > assets > __`icons`__

* ___ui___ (for all ui) : src > components > __`ui`__

* ___form___ (for all form) : src > components > __`form`__

* ___layout___ (for all layout) : src > components > __`layout`__

* ___hooks___ (for all hooks) : src > __`hooks`__

* ___.env.local___ (for all envitonmnet variable files) :  __`.env.local`__

* ___.env.example___ (for all envitonmnet variable files) :  __`.env.example`__

***
***

- #### Delete App.css file
- #### Delete all from index.css file
- #### Delete all from App.tsx file, just keep the function with a html tag

***
### Files
---
* src > compionents > layouts > MainLayout.tsx