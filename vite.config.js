import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa";
import react from '@vitejs/plugin-react'

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "presindo-reactjs",
    short_name: "presindo",
    description: "Frontend Rapid Test",
    icons: [
      {
        "src": "/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/icon-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
})
