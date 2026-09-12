# Instagram最新投稿表示の調査メモ

## 確認日

2026-09-12

## 公式仕様で確認した事項

- Meta公式のInstagram oEmbedは、公開されている個別投稿・リール・プロフィールの埋め込みHTMLを取得して表示できる。
- oEmbedは対象となる投稿URLを指定する方式であり、プロフィールから「常に最新の複数投稿」を自動選択する用途ではない。
- Instagram Graph APIの `/<IG_USER_ID>/media` は、認証したInstagramユーザーのメディア一覧を取得できる。
- Graph APIにはユーザーアクセストークンと `instagram_basic`、`pages_read_engagement` または `pages_show_list` 等の権限が必要。
- 静的サイトのフロントエンドにアクセストークンを埋め込むことは安全ではないため、自動取得にはバックエンドまたは外部フィードサービスが必要。
- 現在のManus Instagram連携は無効で、説明上は投稿作成・公開向け。サイトへの安全なフィード配信にそのまま使えるかは未確定。
- `@hita_illuminage` は公開のプロフェッショナルアカウントとして確認でき、現時点で投稿7件が公開されている。
- Instagram公式ヘルプでは、公開プロフィール自体をWebサイトへ直接埋め込めることが明記されている。埋め込みにはユーザー名とInstagramへのリンクが含まれる。
- プロフィール埋め込みは追加の第三者サービスを使わない軽量な選択肢だが、サイト独自のカードデザインや表示投稿数の細かな制御はできない。
- ブラウザでログイン中の所有者プロフィールを確認したところ、公開プロフェッショナルアカウントとして表示されている。所有者用オプションメニューには埋め込みコード項目が表示されないため、公式の標準プロフィール埋め込みマークアップをサイト側で使用する方針とする。

## 公式情報源

- https://developers.facebook.com/documentation/instagram-platform/oembed
- https://developers.facebook.com/documentation/instagram-platform/instagram-graph-api/reference/ig-user/media
- https://help.instagram.com/620154495870484/

## 実装候補

1. 公式Graph APIと安全なバックエンドを使い、最新投稿を自動取得する。最も制御しやすいが、Instagramプロアカウント・Metaアプリ・権限・アクセストークン管理が必要。
2. 公開投稿のURLを指定して公式埋め込みを表示する。追加認証は不要だが、新しい投稿への自動更新はできず、投稿URLの差し替えが必要。
3. 外部のInstagramフィード埋め込みサービスを利用する。導入は容易だが、第三者サービス依存・無料枠制限・ロゴ表示・将来の料金変更の可能性がある。
