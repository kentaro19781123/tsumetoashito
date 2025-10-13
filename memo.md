## tsumetoashito リポジトリ設計・アーキテクチャ概要

- Next.js（App Router・静的エクスポート）をベースにしたWebアプリケーション。
- Atomic Design的な部品分割、関心ごとのディレクトリ整理。
- TypeScript、Jotai、SWR、Tailwind CSS、Vanilla Extract、Storybookなどを活用。
- 型安全・静的解析（TypeScript/ESLint/Prettier）を徹底。
- CI/CDはGitHub Actionsで自動化、AWS S3/CloudFrontデプロイ対応。

### 主なディレクトリ構造

- `app/` … Next.js App Routerのルート。ページ・レイアウト・グローバルCSS等。
  - `_component/` … 再利用可能なUI部品
  - `_const/` … 定数管理
  - `_hooks/` … カスタムフック
  - `_libs/` … APIクライアント等
  - `_store/` … グローバルステート
  - `_utils/` … ユーティリティ関数
  - `(top)/`, `case/`, `contact/`, `formedia/`, `menu/`, `shopinfo/`, `terms/` … 各ページごとに分割
- `public/` … 画像やfavicon等の静的アセット
- `stories/` … Storybook用ストーリー・UIコンポーネント
- `types/` … 型定義
- `.github/` … CI/CDやDependabot等の設定
- `.serena/` … Serena用設定・メモリ

### 設計・運用の特徴

- Atomic Design的なUI部品分割と関心分離
- 型安全・静的解析の徹底
- コード整形・Lint・テスト・Storybookによる品質担保
- CI/CD自動化と本番デプロイの効率化

## 命名規則・関数の書き方の特徴

### 命名規則の特徴

- 関数・変数名はキャメルケース（例: `getContents`, `menuList`, `anchorScroll`）
- Reactコンポーネントはパスカルケース（例: `AboutContents`, `FooterButton`）
- 定数は `const` で宣言し、export時もキャメル/パスカルケース
- クラスはほぼ未使用、関数コンポーネント中心
- プレフィックスに `get` や `use`（カスタムフック）、型定義には `Type` や `Props` サフィックス

### 関数の書き方の特徴

- Reactコンポーネントは `export const ComponentName: React.FC<Props> = (props) => { ... }` 形式
- 非同期コンポーネントも `async () => { ... }` で記述
- ユーティリティ関数は `export const functionName = (args) => { ... }`
- カスタムフックは `use` で始まる（例: `useIsPc`, `useOverflow`）
- Propsや返り値にTypeScript型を明示
- 関数内変数はすべて `const` で宣言、`let`/`var`はほぼ未使用

TypeScript+Reactのモダンな記法・命名規則（キャメルケース/パスカルケース、型注釈、関数コンポーネント中心）が徹底されています。
