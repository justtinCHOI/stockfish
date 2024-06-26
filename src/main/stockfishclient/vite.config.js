import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure: false,
            },
        },
    },
    build: {
        outDir: '../resources/static',
    },
});



//Spring Boot 서버와 동일한 포트 사용
// server: {
//     https: true,
//     port: 8080,
// },



// import mkcert from "vite-plugin-mkcert";
// import fs from 'fs';
// import path from 'path';
// const keyPath = 'D:/stockfishserver/localhost.key';
// const certPath = 'D:/stockfishserver/localhost.crt';
//
// export default defineConfig({
//     plugins: [react(), mkcert()],
//     //Spring Boot : 8080, client : 5173
//     server: {
//         // https: {
//         //     key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
//         //     cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt')),
//         // },
//         https: {
//             key: fs.readFileSync(path.resolve(keyPath)),
//             cert: fs.readFileSync(path.resolve(certPath)),
//         },
//         // https: true,
//         port: 5173,
//         proxy: {
//             '/api': {
//                 target: 'https://localhost:8080',
//                 changeOrigin: true,
//                 secure: false,
//                 rewrite: (path) => path.replace(/^\/api/, '/api/')
//             }
//         }
//     },
//
//     build: {
//         outDir: 'src/main/resources/static',
//     }
// })
