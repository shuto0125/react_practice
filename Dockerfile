# Node.jsのバージョン18.6をベースにする
FROM node:18.6

# ワーキングディレクトリを設定
WORKDIR /usr/src/app

# create-react-appをグローバルにインストール
# RUN npm install -g create-react-app

# ポート3000をエクスポーズ
EXPOSE 3000

# create-react-appで新しいアプリを生成
# CMD npx create-react-app my-app