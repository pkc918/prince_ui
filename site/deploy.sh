#!/usr/bin/env sh

# 忽略错误
# set -e

# 构建
pnpm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

git remote add prince_ui https://github.com/easyestui/easyest.git
git add -A
git commit -m 'docs(update):更新文档'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
git push -f prince_ui master

# cd -