## other languages
if you need a Chinese version instructions please check it here[README_CN.md](README_CN.md)。
if you need a Japanese version instructions please check it here[README_JP.md](README_JP.md)。

# Sep Weather

<div align="center">
  <img width="80" src="./public/images/sep-weather-logo.png" alt="Sep Weather Logo">
</div>

**Sep Weather** is a weather web application that provides users with up-to-date weather information in a user-friendly interface.

You can experience the application online at [Sep Weather Online](https://sep-weather.netlify.app/).

## Features

- [x] Search Weather by Location
- [x] Display Current Weather
- [x] Show Today's Hourly Weather
- [x] Provide 10-Day Weather Forecast
- [x] Show Detailed Weather Forecast for a Specific Date
- [ ] Implement Weather Alert Component
- [ ] Implement i18n Support
- [ ] Make Weather Details More Visual.
- [ ] Introduce AI Functionality to Recommend Suitable Events, Clothing ...
- [ ] ...

## Tech Stacks

- TypeScript
- React.js
- Next.js
- Vitest
- SWR
- Axios
- Jotai
- Sass
- CSS Modules
- [weatherapi](https://www.weatherapi.com/)

## Getting Started

```bash
git clone https://github.com/NansenHo/sep-weather.git

pnpm i

pnpm run dev

pnpm run build
```

## Additional Information

> - 課題の取り組み開始から完了までに要した合計時間（2024-9-22（日）から、1 日半ぐらい）
>   - 期間内に終わらなければ、未完成部分の展望について共有ください
>     - 要求されている内容は完成していたと思いますが、以下の機能をさらに追加していきたいです。
>       - i18n
>       - さらに多くの気象コンポーネント、例えば悪天候アラート
>       - 天気詳細情報をもっと可視化にする
>       - AI 機能を導入し、適するイベント、服などをお勧めする
> - 初めて使用する技術があれば、それが何かとその代わりとなる経験があるかを
>   - 初めて使用する技術がないです。
> - 追加した npm パッケージがあれば、その選定理由と役割について共有してください
>   - React, Typescript, テストツール以外で
>     - SWR（キャッシュー、パフォーマンス、リクエストの重複排除、リアクティブな動作の実現）
>     - Axios（自動で JSON データを変換）
>     - Jotai（Atom ベース、useState のようにシンプルな使い方、サイズが小さい、コードが短くて美しい）
>     - Sass + CSS Modules（パフォーマンスが CSS-in-JS より高い、スタイルとロジックの分離でメンテナンスしやすい、複雑なスタイルが可能）
> - LLM を課題提出の過程で使用した場合。その活用方法と有効性
>   - LLM の使用は必須ではありません
>     - LLM はまだ入れていないです。
