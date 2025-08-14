# Go/No-Go Task Training App 🧠

認知機能トレーニング、リハビリテーション、スポーツトレーニングなど、様々な用途で使用できるGo/No-Goタスクアプリケーションです。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

## 🎯 概要

Go/No-Goタスクは、特定の刺激（Go刺激）に対して素早く反応し、それ以外の刺激（No-Go刺激）には反応を抑制する認知課題です。このアプリは、視覚・聴覚刺激を用いた包括的なトレーニング環境を提供します。

## ✨ 主な機能

### 視覚刺激の種類
- **4色モード** - 赤・青・緑・黄の色刺激
- **矢印2種** - 左右の矢印
- **矢印4種** - 上下左右の矢印  
- **図形4種** - 円・四角・三角・ダイヤモンド
- **数字** - ランダムな奇数・偶数

### カスタマイズ可能な設定
- **刺激間隔**
  - 固定間隔: 0.3秒〜3秒
  - ランダム間隔: 1-5秒、3-10秒
- **トレーニング時間** - 1分〜10分
- **Go刺激の選択** - 任意の刺激をGo刺激に設定可能
- **反応モード**
  - アクティブモード（キー/タップで反応）
  - パッシブモード（観察のみ・日常タスクと併用可能）

### 追加機能
- 🔊 **音声フィードバック** - 刺激変更音と正誤判定音
- 🎵 **聴覚Go/No-Go** - ランダムな音による聴覚刺激モード
- 📱 **全画面表示** - 没入感のあるトレーニング環境
- 📊 **リアルタイム統計** - 正答数、誤答数、正答率、残り時間
- 📱 **モバイル最適化** - スマートフォン・タブレット対応

## 🚀 使い方

### オンラインで使用
1. HTMLファイルをWebブラウザで開く
2. 設定を調整
3. 「スタート」ボタンをクリック
4. Go刺激が表示されたらスペースキー/画面タップ
5. No-Go刺激が表示されたら反応しない

### ローカルで使用
```bash
# リポジトリをクローン
git clone https://github.com/yourusername/gonogo-task-app.git

# ディレクトリに移動
cd gonogo-task-app

# ブラウザで開く
open index.html  # Mac
start index.html # Windows
```

### PWAとして使用（スマートフォン）

#### iOS (Safari)
1. Safariでアプリを開く
2. 共有ボタンをタップ
3. 「ホーム画面に追加」を選択

#### Android (Chrome)
1. Chromeでアプリを開く
2. メニューから「ホーム画面に追加」を選択

## 🎮 操作方法

| 操作 | デスクトップ | モバイル |
|------|------------|----------|
| Go反応 | スペースキー | 画面タップ |
| 全画面切替 | ボタンクリック | ボタンタップ |
| メニュー表示/非表示 | - | メニューボタン |

## 💡 活用例

### スポーツトレーニング
- 瞬間的な判断力の向上
- 反応速度の改善
- 集中力の維持

### 認知リハビリテーション
- 注意機能の改善
- 衝動性の制御
- 実行機能の強化

### 教育・学習支援
- 集中力の向上
- ADHD支援
- 学習前のウォーミングアップ

### 日常生活での活用
- 仕事中の認知機能維持（パッシブモード）
- ストレス解消
- 脳トレーニング

## 🛠️ 技術仕様

### 必要環境
- モダンWebブラウザ（Chrome, Firefox, Safari, Edge）
- JavaScript有効
- HTML5対応

### 使用技術
- HTML5
- CSS3（アニメーション、グラデーション）
- Vanilla JavaScript（フレームワーク不使用）
- Web Audio API（音声生成）
- Fullscreen API

## 📊 パフォーマンス指標

アプリは以下の認知機能指標を測定します：

- **正答率** - Go刺激への適切な反応率
- **お手つきエラー** - No-Go刺激への誤反応（衝動性の指標）
- **見逃しエラー** - Go刺激への無反応（注意力の指標）
- **反応時間** - 刺激提示から反応までの時間

## 🔧 カスタマイズ

### 刺激の追加
`stimuli`オブジェクトに新しい刺激タイプを追加できます：

```javascript
const stimuli = {
    yourNewType: [
        { type: 'yourType', value: 'value1', label: 'ラベル1' },
        { type: 'yourType', value: 'value2', label: 'ラベル2' }
    ]
};
```

### デザインの変更
CSSセクションでカラーテーマやアニメーションをカスタマイズ可能です。

## 📝 ライセンス

MIT License - 自由に使用、改変、配布が可能です。

## 🤝 貢献

プルリクエストを歓迎します！大きな変更の場合は、まずissueを開いて変更内容について議論してください。

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 バグ報告

バグを発見した場合は、[Issues](https://github.com/yourusername/gonogo-task-app/issues)ページで報告してください。

## 📮 連絡先

- プロジェクトリンク: [https://github.com/yourusername/gonogo-task-app](https://github.com/yourusername/gonogo-task-app)

## 🙏 謝辞

このアプリは認知心理学の研究成果に基づいて開発されました。Go/No-Goタスクの科学的背景については以下の文献を参照してください：

- Donders, F. C. (1969). On the speed of mental processes.
- Logan, G. D. (1994). On the ability to inhibit thought and action.

---

**注意事項**: このアプリは医療機器ではありません。医療目的で使用する場合は、必ず専門家の指導のもとで使用してください。
