# Getting Started

## Create `.env`

You can copy `.env.sample`.
```sh
cd /path/to/cycletime
cp .env.sample .env
```

You need a personal access token.
reference: Creating a personal access token - GitHub Docs https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

Edit `.env`.
```
GITHUB_TARGET_REPOSITORY={owner}/{target-repository}
GITHUB_ACCESS_TOKEN=xxxxxxxxxxxx
```

## Run in Docker Compose

Example:
```bash
docker-compose up
cycletime-app-1  | PR: 過去制作物紹介ページを作成する: 4 d 1 h
cycletime-app-1  | ------------------------
cycletime-app-1  | | Commit message | Date |
cycletime-app-1  | | リンクが内部サイトの場合のハンドリング | 2021-04-22T13:42:08Z |
cycletime-app-1  | | 実績ページ用のアイコン・ページ追加 | 2021-04-22T13:42:37Z |
cycletime-app-1  | | アイコン全体をクリックできるよう修正 | 2021-04-23T12:49:22Z |
cycletime-app-1  | | ロゴのテキストシャドウを除去 | 2021-04-23T13:38:59Z |
cycletime-app-1  | | 実績コンテンツ用lコンポーネント作成 | 2021-04-24T14:11:02Z |
cycletime-app-1  | | worksのレイアウト作成 | 2021-04-25T08:58:22Z |
cycletime-app-1  | | 幅と画像サイズの微調整 | 2021-04-25T21:51:38Z |
cycletime-app-1  | | フレームを追加 | 2021-04-25T22:02:53Z |
cycletime-app-1  | | Work追加とContentful周りのリファクタリング | 2021-04-26T13:27:07Z |
cycletime-app-1  | | containerを微調整 | 2021-04-26T13:38:49Z |
cycletime-app-1  | | サイズを微調整 | 2021-04-26T13:39:05Z |
cycletime-app-1  | | デザイン調整 | 2021-04-26T13:40:50Z |
cycletime-app-1  | | ビルドエラーになる原因修正 | 2021-04-26T13:43:27Z |
cycletime-app-1  | | console.log削除 | 2021-04-26T13:43:56Z |
cycletime-app-1  | | 参照file名の先頭を大文字に修正 | 2021-04-26T13:57:21Z |
cycletime-app-1  | | containerのmax-widthを微調整 | 2021-04-26T14:04:08Z |
cycletime-app-1  | | message | date |
cycletime-app-1  | ========================
cycletime-app-1  | 
```
