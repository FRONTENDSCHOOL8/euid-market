// vite.config.js
import { defineConfig } from "file:///C:/Users/pc/likelion-8/vanilla-project/node_modules/vite/dist/node/index.js";
import { resolve } from "node:path";
var __vite_injected_original_dirname = "C:\\Users\\pc\\likelion-8\\vanilla-project";
var vite_config_default = defineConfig({
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        base: resolve(__vite_injected_original_dirname, "index.html"),
        // 메인 페이지
        mainPage: resolve(__vite_injected_original_dirname, "src/pages/MainPage/index.html"),
        detailPage: resolve(__vite_injected_original_dirname, "src/pages/MainPage/detail/index.html"),
        searchPage: resolve(__vite_injected_original_dirname, "src/pages/MainPage/detail/index.html"),
        // 유저 페이지
        userPage: resolve(__vite_injected_original_dirname, "src/pages/UserPage/index.html"),
        profileCard: resolve(
          __vite_injected_original_dirname,
          "src/pages/UserPage/children_pages/profileCard/index.html"
        ),
        profileModify: resolve(
          __vite_injected_original_dirname,
          "src/pages/UserPage/children_pages/profileModify/index.html"
        ),
        // 게시판 페이지
        boardPage: resolve(__vite_injected_original_dirname, "src/pages/BoardPage/index.html"),
        boardContent: resolve(
          __vite_injected_original_dirname,
          "src/pages/BoardPage/children_pages/boardContent/index.html"
        ),
        createPost: resolve(
          __vite_injected_original_dirname,
          "src/pages/BoardPage/children_pages/createPost/index.html"
        ),
        postInfo: resolve(
          __vite_injected_original_dirname,
          "src/pages/BoardPage/children_pages/postInfo/index.html"
        ),
        questionPage: resolve(
          __vite_injected_original_dirname,
          "src/pages/BoardPage/children_pages/questionPage/index.html"
        ),
        createQuestion: resolve(
          __vite_injected_original_dirname,
          "src/pages/BoardPage/children_pages/createQuestion/index.html"
        ),
        // 시작 페이지
        startPage: resolve(__vite_injected_original_dirname, "src/pages/StartPage/index.html"),
        categoryPage: resolve(
          __vite_injected_original_dirname,
          "src/pages/LoginPage/category/index.html"
        ),
        registerPage: resolve(
          __vite_injected_original_dirname,
          "src/pages/LoginPage/signup/index.html"
        )
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwY1xcXFxsaWtlbGlvbi04XFxcXHZhbmlsbGEtcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxccGNcXFxcbGlrZWxpb24tOFxcXFx2YW5pbGxhLXByb2plY3RcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3BjL2xpa2VsaW9uLTgvdmFuaWxsYS1wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Ly8gaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiAnZG9jcycsXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgYmFzZTogcmVzb2x2ZShfX2Rpcm5hbWUsICdpbmRleC5odG1sJyksXHJcblxyXG4gICAgICAgIC8vIFx1QkE1NFx1Qzc3OCBcdUQzOThcdUM3NzRcdUM5QzBcclxuICAgICAgICBtYWluUGFnZTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMvTWFpblBhZ2UvaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIGRldGFpbFBhZ2U6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzL01haW5QYWdlL2RldGFpbC9pbmRleC5odG1sJyksXHJcbiAgICAgICAgc2VhcmNoUGFnZTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMvTWFpblBhZ2UvZGV0YWlsL2luZGV4Lmh0bWwnKSxcclxuXHJcbiAgICAgICAgLy8gXHVDNzIwXHVDODAwIFx1RDM5OFx1Qzc3NFx1QzlDMFxyXG4gICAgICAgIHVzZXJQYWdlOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9Vc2VyUGFnZS9pbmRleC5odG1sJyksXHJcbiAgICAgICAgcHJvZmlsZUNhcmQ6IHJlc29sdmUoXHJcbiAgICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgICAnc3JjL3BhZ2VzL1VzZXJQYWdlL2NoaWxkcmVuX3BhZ2VzL3Byb2ZpbGVDYXJkL2luZGV4Lmh0bWwnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBwcm9maWxlTW9kaWZ5OiByZXNvbHZlKFxyXG4gICAgICAgICAgX19kaXJuYW1lLFxyXG4gICAgICAgICAgJ3NyYy9wYWdlcy9Vc2VyUGFnZS9jaGlsZHJlbl9wYWdlcy9wcm9maWxlTW9kaWZ5L2luZGV4Lmh0bWwnXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgLy8gXHVBQzhDXHVDMkRDXHVEMzEwIFx1RDM5OFx1Qzc3NFx1QzlDMFxyXG4gICAgICAgIGJvYXJkUGFnZTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMvQm9hcmRQYWdlL2luZGV4Lmh0bWwnKSxcclxuICAgICAgICBib2FyZENvbnRlbnQ6IHJlc29sdmUoXHJcbiAgICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgICAnc3JjL3BhZ2VzL0JvYXJkUGFnZS9jaGlsZHJlbl9wYWdlcy9ib2FyZENvbnRlbnQvaW5kZXguaHRtbCdcclxuICAgICAgICApLFxyXG4gICAgICAgIGNyZWF0ZVBvc3Q6IHJlc29sdmUoXHJcbiAgICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgICAnc3JjL3BhZ2VzL0JvYXJkUGFnZS9jaGlsZHJlbl9wYWdlcy9jcmVhdGVQb3N0L2luZGV4Lmh0bWwnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBwb3N0SW5mbzogcmVzb2x2ZShcclxuICAgICAgICAgIF9fZGlybmFtZSxcclxuICAgICAgICAgICdzcmMvcGFnZXMvQm9hcmRQYWdlL2NoaWxkcmVuX3BhZ2VzL3Bvc3RJbmZvL2luZGV4Lmh0bWwnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBxdWVzdGlvblBhZ2U6IHJlc29sdmUoXHJcbiAgICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgICAnc3JjL3BhZ2VzL0JvYXJkUGFnZS9jaGlsZHJlbl9wYWdlcy9xdWVzdGlvblBhZ2UvaW5kZXguaHRtbCdcclxuICAgICAgICApLFxyXG4gICAgICAgIGNyZWF0ZVF1ZXN0aW9uOiByZXNvbHZlKFxyXG4gICAgICAgICAgX19kaXJuYW1lLFxyXG4gICAgICAgICAgJ3NyYy9wYWdlcy9Cb2FyZFBhZ2UvY2hpbGRyZW5fcGFnZXMvY3JlYXRlUXVlc3Rpb24vaW5kZXguaHRtbCdcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICAvLyBcdUMyRENcdUM3OTEgXHVEMzk4XHVDNzc0XHVDOUMwXHJcbiAgICAgICAgc3RhcnRQYWdlOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9TdGFydFBhZ2UvaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIGNhdGVnb3J5UGFnZTogcmVzb2x2ZShcclxuICAgICAgICAgIF9fZGlybmFtZSxcclxuICAgICAgICAgICdzcmMvcGFnZXMvTG9naW5QYWdlL2NhdGVnb3J5L2luZGV4Lmh0bWwnXHJcbiAgICAgICAgKSxcclxuICAgICAgICByZWdpc3RlclBhZ2U6IHJlc29sdmUoXHJcbiAgICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgICAnc3JjL3BhZ2VzL0xvZ2luUGFnZS9zaWdudXAvaW5kZXguaHRtbCdcclxuICAgICAgICApLFxyXG5cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGVBQWU7QUFGeEIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsTUFBTSxRQUFRLGtDQUFXLFlBQVk7QUFBQTtBQUFBLFFBR3JDLFVBQVUsUUFBUSxrQ0FBVywrQkFBK0I7QUFBQSxRQUM1RCxZQUFZLFFBQVEsa0NBQVcsc0NBQXNDO0FBQUEsUUFDckUsWUFBWSxRQUFRLGtDQUFXLHNDQUFzQztBQUFBO0FBQUEsUUFHckUsVUFBVSxRQUFRLGtDQUFXLCtCQUErQjtBQUFBLFFBQzVELGFBQWE7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGVBQWU7QUFBQSxVQUNiO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQTtBQUFBLFFBR0EsV0FBVyxRQUFRLGtDQUFXLGdDQUFnQztBQUFBLFFBQzlELGNBQWM7QUFBQSxVQUNaO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFlBQVk7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGNBQWM7QUFBQSxVQUNaO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGdCQUFnQjtBQUFBLFVBQ2Q7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBO0FBQUEsUUFHQSxXQUFXLFFBQVEsa0NBQVcsZ0NBQWdDO0FBQUEsUUFDOUQsY0FBYztBQUFBLFVBQ1o7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsY0FBYztBQUFBLFVBQ1o7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BRUY7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
