#!/usr/bin/env sh

# 忽略错误
# set -e

# 构建
pnpm run build:prince_ui
# 切换官方源
pnpm config set registry https://registry.npmjs.org
# 版本发布
pnpm run publish:prince_ui
# 切回淘宝源
pnpm config set registry https://registry.npm.taobao.org

# cd -