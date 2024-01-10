// import { resolve } from 'node:path'
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        base: resolve(__dirname, 'index.html'),

        // 메인 페이지
        mainPage: resolve(__dirname, 'src/pages/MainPage/index.html'),
        detailPage: resolve(__dirname, 'src/pages/MainPage/detail/index.html'),
        searchPage: resolve(__dirname, 'src/pages/MainPage/detail/index.html'),

        // 유저 페이지
        userPage: resolve(__dirname, 'src/pages/UserPage/index.html'),
        profileCard: resolve(
          __dirname,
          'src/pages/UserPage/children_pages/profileCard/index.html'
        ),
        profileModify: resolve(
          __dirname,
          'src/pages/UserPage/children_pages/profileModify/index.html'
        ),

        // 게시판 페이지
        boardPage: resolve(__dirname, 'src/pages/BoardPage/index.html'),
        boardContent: resolve(
          __dirname,
          'src/pages/BoardPage/children_pages/boardContent/index.html'
        ),
        createPost: resolve(
          __dirname,
          'src/pages/BoardPage/children_pages/createPost/index.html'
        ),
        postInfo: resolve(
          __dirname,
          'src/pages/BoardPage/children_pages/postInfo/index.html'
        ),

        // 시작 페이지
        startPage: resolve(__dirname, 'src/pages/StartPage/index.html'),
        categoryPage: resolve(
          __dirname,
          'src/pages/LoginPage/category/index.html'
        ),
        registerPage: resolve(
          __dirname,
          'src/pages/LoginPage/signup/index.html'
        ),

      },
    },
  },
});
