# Folium 網站

[Folium](https://chung223.github.io/folium/)（iPhone、iPad、Mac 上的 PDF 與手寫 App）的官網，用 GitHub Pages 從 `main` 分支的根目錄發佈。

| 路徑 | 內容 |
|---|---|
| `index.html` | 首頁 |
| `privacy/` | 隱私權政策（中文＋英文）。App 裡「設定 > 隱私權政策」是同一份內容，**兩邊要一起改** |
| `support/` | 支援與常見問題（App Store 的「支援網址」） |
| `404.html` | 找不到頁面 |
| `assets/` | 樣式 `site.css`、圖示、分享預覽圖 `og.png` |
| `tools/og.html` | 分享預覽圖的原稿 |

App Store Connect 用的網址：

- 行銷網址：https://chung223.github.io/folium/
- 隱私權政策：https://chung223.github.io/folium/privacy/
- 支援網址：https://chung223.github.io/folium/support/

## 設計

「紙與墨」：暖白紙面、墨黑文字，靛藍是筆，朱紅是印章，顏色和 App 的 `Theme` 同一組（淺色、深色都有）。
標題用思源宋體（Noto Serif TC），手寫的註記用霞鶩文楷（LXGW WenKai TC），英文字標用 Fraunces，都從 Google Fonts 載入。
沒有 JavaScript；動畫只用 CSS，系統開了「減少動態效果」就直接顯示結果。

## 本機預覽

```bash
python3 -m http.server 4321 --directory ..
```

打開 http://localhost:4321/folium/ （和線上一樣在 `/folium/` 底下，`404.html` 用的是絕對路徑）。

## 分享預覽圖

改了首屏的示意圖之後，重做 `assets/og.png`（1200×630）：

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1200,630 --virtual-time-budget=9000 --screenshot=assets/og.png http://localhost:4321/folium/tools/og.html
```

## 授權

網站的文字、圖片與設計 © 2026 Folium，保留所有權利。
