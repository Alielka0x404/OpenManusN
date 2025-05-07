<p align="center">
  <img src="assets/logo.jpg" width="200"/>
</p>

中文 | [English](README-en.md)

# 🎉 iHeyTang OpenManus - Suna.so Style Redesign

Manus 非常棒，但 OpenManus 无需邀请码即可实现任何创意 🛫！

(**特别是当他它有了非常出色的前端交互体验，简直太棒了！**)

## 项目愿景

1. 通用领域全能 AI 助手，为 AI 时代的超级个体和一人公司提供最有力的支持
2. 专精领域 AI 智能体的快速开发验证，为垂类 AI Agent 提供最好的效率平台

## 全新 Suna.so 风格界面

本项目包含了一个完整的 OpenManus UI 重新设计，灵感来自 Suna.so 界面。这个重新设计将 OpenManus UI 从传统的浅色主题聊天界面转变为现代、时尚的深色主题界面，具有改进的美学和用户体验。

### 新设计特点

- **深色主题**: 现代深色主题，带有渐变背景和微妙的噪点纹理
- **改进的聊天界面**: 用户和 AI 消息之间更清晰的区分
- **增强的代码块**: 更好的语法高亮和样式
- **浮动输入框**: 现代化、圆角的输入框，样式更佳
- **重新设计的侧边栏**: 更时尚的侧边栏，导航更便捷
- **视觉增强**: 动画、过渡和微交互
- **改进的排版**: 更好的可读性和视觉层次

## 项目特点

1. 简洁优雅的操作界面 - 命令行？不存在的。
2. 多组织、多用户支持 - 这个很棒，每个租户都可以配置自己的 APIKey
3. 后台任务执行 - 提出问题，关掉页面，过会再回来看结果
4. MCP 的快速集成 - MCP 市场快速安装，1 分钟内上手 MCP
5. 以任务为分区的工作区 - 每一个任务的附件都能够单独浏览
6. 多轮对话 - 任务完成的不好？再继续追问

## 安装指南

该项目分为两个部分，分别是 Core (根目录) 和 App (web/)

### OpenManus Core

1. 安装 uv（一个快速的 Python 包管理器）：

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

2. 克隆仓库：

```bash
git clone https://github.com/iHeyTang/OpenManus.git
cd OpenManus
```

3. 创建并激活虚拟环境：

```bash
uv venv --python 3.12
source .venv/bin/activate  # Unix/macOS 系统
# Windows 系统使用：
# .venv\Scripts\activate

# 安装成功后，会有以下提示，可以选择重开Terminal 或 按照以下提示进行操作
#To add $HOME/.local/bin to your PATH, either restart your shell or run:
#    source $HOME/.local/bin/env (sh, bash, zsh)
#    source $HOME/.local/bin/env.fish (fish)

# 验证 uv 安装成功
uv --version
# 输出以下版本号则表示安装成功
# uv 0.6.14 (a4cec56dc 2025-04-09)
```

4. 安装依赖：

```bash
uv pip install -r requirements.txt

### 安装浏览器自动化工具 playwright
```bash
playwright install
```

5. 安装 Docker 环境，windows 推荐 [Docker Desktop](https://www.docker.com/products/docker-desktop/)，MacOS 或 Linux 推荐 [Orbstack](https://orbstack.dev/download)

### OpenManus App

1. 安装 `node` 环境

   方式 1: [推荐] 使用 nvm 包管理器 https://github.com/nvm-sh/nvm
   方式 2: 前往官方下载 https://nodejs.org/en
   方式 3: (Windows 系统) 使用 nvm 包管理器 https://github.com/coreybutler/nvm-windows/releases/tag/1.2.2

```bash
# 按照流程安装完毕后，通过命令确认安装成功
node -v
# 输出版本号表示安装成功
# v20.19.0
```

2. 进入 `web/` 文件夹

```bash
# 如果已经在 web 目录下忽略即可
cd web
```

3. 安装项目依赖

```bash
# 安装项目依赖
npm install
```

4. 生成密钥对

项目需要一对公钥和私钥用于认证，可以通过以下命令生成（有自行生成证书能力的忽略即可）：

```bash
npm run generate-keys

# 这将在 `web/keys` 目录生成：
# - `private.pem`: 私钥文件
# - `public.pem`: 公钥文件
```

5. 数据库初始化

项目使用 PostgreSQL 作为持久化数据库。可使用 [Docker 容器](https://hub.docker.com/_/postgres) 来启动数据库服务

```bash
# 启动 docker 容器 并自动创建 名为 openmanus 的数据库
docker run --name openmanus-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=openmanus -d -p 5432:5432 postgres
```

6. 环境变量配置

在项目根目录创建 `.env` 文件，配置必要的环境变量，具体参考 `/web/.env.example`

```bash
# 若按照 步骤 5 配置数据库，则数据库连接为
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/openmanus?schema=public"
```

7. 生成 Prisma 客户端 & 初始化数据库

```bash
# 若第一次启动项目、重新安装了依赖、schema.prisma 存在更新，需执行此命令更新 Prisma Client
npx prisma generate

# 若第一次启动项目，需要先初始化数据库，此命令会自动将表结构同步进相应配置的数据库中
npx prisma db push
```

## 快速启动

```bash
# OpenManus Core 使用 run_api.py 启动
python run_api.py
```

```bash
# OpenManus App 需要进入 web/ 目录， 使用 npm run dev 启动
cd web
npm run dev
```

启动完毕后，打开 `http://localhost:3000` 即可查看

## UI 重新设计安装

### 自动安装

1. 确保你在 OpenManus 项目的根目录
2. 运行安装脚本：
   ```bash
   chmod +x install-redesign.sh
   ./install-redesign.sh
   ```

### 手动安装

按照 [INSTALLATION.md](./INSTALLATION.md) 文件中的说明进行逐步操作。

## 致谢

本项目起源于 [OpenManus](https://github.com/mannaandpoem/OpenManus) First Hackathon，非常感谢 OpenManus 提供这样的一个平台，得以让本项目有了落地的机会!

UI 重新设计的灵感来自 Suna.so 界面，为 OpenManus 项目提供了现代化的外观和用户体验。