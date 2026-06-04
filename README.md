# 李镇雄个人主页

这是一个零成本静态学术主页，可直接部署到 GitHub Pages、Cloudflare Pages、Netlify 或 Vercel。

## 本地预览

直接用浏览器打开：

```text
C:\Users\oxygen\Documents\GAN\personal-homepage\index.html
```

如果浏览器限制本地脚本，可在该目录运行：

```powershell
python -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 文件结构

```text
personal-homepage
├── index.html
├── styles.css
├── app.js
├── README.md
└── assets
    ├── avatar.png
    └── cv-li-zhenxiong.pdf
```

## 修改内容

- 个人信息：编辑 `index.html` 和 `app.js` 中的姓名、简介、邮箱、链接。
- 学习笔记：编辑 `app.js` 里的 `notes` 数组。
- 资源导航：编辑 `app.js` 里的 `resources` 数组。
- 项目展示：编辑 `app.js` 里的 `projects` 数组。
- 头像：替换 `assets/avatar.png`。
- 简历：替换 `assets/cv-li-zhenxiong.pdf`。

## GitHub Pages 部署

1. 新建 GitHub 仓库，例如 `syslizhx.github.io`。
2. 上传本文件夹内的所有文件到仓库根目录。
3. 在 GitHub 仓库进入 `Settings -> Pages`。
4. `Build and deployment` 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待部署完成。

仓库名使用 `syslizhx.github.io` 时，默认网址是：

```text
https://syslizhx.github.io
```
