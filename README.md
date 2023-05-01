# Twitter Clone アプリケーション
- まだ作成途中です。
- 随時更新します。
## 技術スタック
- React
- Next.js
- Typescript
- Emotion
  - CSS in JS
- Redux
  - 導入検討中
- Firebase
- Storybook
- ESLint
- Prettier
- テスト周り
  - jest
  - react-testing-library
  - react-hooks-testing-library

## 導入予定
  - react-hooks-form
  - zod

## 残りTODO
- フォーローしているユーザーのツイートを表示する
  - コレクション users作成
  - サブコレクション作成
    - follow情報のコレクション作成
    - follower情報のコレクション作成
- プロフィール ユーザー情報を
- ツイートのいいね機能
  - お気に入りコレクションを作成
- 通知ページ作成
  - 通知 API
- 検索ページ作成
  - 全部のツイートを検索
- DMページ作成

- テスト周り
  - Unit Testの実装
  - hooksのテスト
  - Storybookを用いたインタラクションのテスト作成

## 仕様検討中
- バックエンドをFirebaseからフルスクラッチで実装するか
  - 言語: Node.js
  - フレームワーク: Nest.js
  - TypeORM: Prisma
  - DB: MySQL
