import React from "react"
import "./App.css"

export default function App() {
  return (
    <div className="ft-root">
      <header className="ft-header">
        <div className="ft-brand">
          <div className="ft-brand-mark">FT</div>
          <span>FocusTime</span>
        </div>
        <a className="ft-header-link" href="#cta">アプリをダウンロード</a>
      </header>

      <main className="ft-main">
        <section className="ft-hero">
          <div className="ft-hero-copy">
            <span className="ft-eyebrow">集中を、よりやさしく</span>
            <h1>シンプルに続けられる、集中の習慣。</h1>
            <p className="ft-lead">
              FocusTime は、iPhoneに寄り添うデザインで集中セッションを記録し、振り返りを美しく整えます。
            </p>

            <div className="ft-hero-actions">
              <a className="ft-button" href="#cta">無料で始める</a>
              <a className="ft-link-button" href="#features">機能を見る</a>
            </div>

            <div className="ft-store-row">
              <div className="ft-store-pill">
                <span className="ft-pill-badge"></span>
                <div>
                  <p className="ft-pill-label">App Store</p>
                  <p className="ft-pill-note">近日公開</p>
                </div>
              </div>
              <div className="ft-store-pill">
                <span className="ft-pill-badge">▶︎</span>
                <div>
                  <p className="ft-pill-label">Google Play</p>
                  <p className="ft-pill-note">Android対応予定</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ft-hero-visual">
            <div className="ft-phone-shell">
              <div className="ft-phone-notch" />
              <div className="ft-phone-screen">
                <div className="ft-phone-header">
                  <span>Today</span>
                  <span>9:00</span>
                </div>
                <div className="ft-ring-card">
                  <div className="ft-ring"></div>
                  <div className="ft-ring-copy">
                    <strong>45:00</strong>
                    <span>集中中</span>
                  </div>
                </div>
                <div className="ft-phone-info">
                  <div>
                    <p>休憩</p>
                    <strong>15分</strong>
                  </div>
                  <div>
                    <p>達成率</p>
                    <strong>82%</strong>
                  </div>
                </div>
                <div className="ft-phone-list">
                  <div className="ft-phone-list-item">
                    <span>集中モード</span>
                    <strong>有効</strong>
                  </div>
                  <div className="ft-phone-list-item">
                    <span>通知制御</span>
                    <strong>ON</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ft-features" id="features">
          <div className="ft-section-header">
            <p className="ft-eyebrow">特徴</p>
            <h2>集中の質を上げる4つの体験</h2>
          </div>

          <div className="ft-feature-grid">
            <article className="ft-feature-card">
              <div className="ft-feature-icon">⏱️</div>
              <h3>時間をきれいに記録</h3>
              <p>作業と休憩を分けて、集中時間を自然に振り返れるようにします。</p>
            </article>
            <article className="ft-feature-card">
              <div className="ft-feature-icon">🧭</div>
              <h3>操作を迷わせない</h3>
              <p>視線が定まるUIで、日々の集中状態へすぐに戻れます。</p>
            </article>
            <article className="ft-feature-card">
              <div className="ft-feature-icon">📈</div>
              <h3>成果をやさしく可視化</h3>
              <p>進捗をシンプルに示し、続けるための手応えを届けます。</p>
            </article>
            <article className="ft-feature-card">
              <div className="ft-feature-icon">🔒</div>
              <h3>雑念を整える</h3>
              <p>通知や気になる情報を整理して、集中を阻害しづらくします。</p>
            </article>
          </div>
        </section>

        <section className="ft-screenshots">
          <div className="ft-section-header">
            <p className="ft-eyebrow">画面例</p>
            <h2>iPhoneモックで見せる、使い勝手の丁寧さ</h2>
          </div>

          <div className="ft-screenshot-grid">
            <div className="ft-screenshot-card">
              <div className="ft-screenshot-phone">
                <div className="ft-screenshot-title">Today</div>
                <div className="ft-screenshot-bar" />
                <div className="ft-screenshot-line" />
                <div className="ft-screenshot-line short" />
              </div>
              <p>集中の状態と今日の実績をひと目で把握できます。</p>
            </div>
            <div className="ft-screenshot-card">
              <div className="ft-screenshot-phone">
                <div className="ft-screenshot-title">Focus</div>
                <div className="ft-screenshot-ring" />
                <div className="ft-screenshot-line" />
                <div className="ft-screenshot-line short" />
              </div>
              <p>タイマーとセッション管理が、直感的に操作できます。</p>
            </div>
            <div className="ft-screenshot-card">
              <div className="ft-screenshot-phone">
                <div className="ft-screenshot-title">Analytics</div>
                <div className="ft-screenshot-chart" />
                <div className="ft-screenshot-line" />
                <div className="ft-screenshot-line short" />
              </div>
              <p>週ごとの集中傾向を、美しいグラフで振り返れます。</p>
            </div>
          </div>
        </section>

        <section className="ft-faq">
          <div className="ft-section-header">
            <p className="ft-eyebrow">よくある質問</p>
            <h2>最初の一歩がわかりやすい</h2>
          </div>

          <div className="ft-faq-grid">
            <article className="ft-faq-card">
              <h3>どのような時間が記録できますか？</h3>
              <p>作業、読書、学習など、集中したい時間をまとめて記録できます。</p>
            </article>
            <article className="ft-faq-card">
              <h3>スマホだけで使えますか？</h3>
              <p>iPhoneに最適化されたUIで、スムーズに操作できるように設計しました。</p>
            </article>
            <article className="ft-faq-card">
              <h3>データは安全ですか？</h3>
              <p>個人の集中記録を大切に扱い、シンプルな管理を目指しています。</p>
            </article>
            <article className="ft-faq-card">
              <h3>継続のサポートはありますか？</h3>
              <p>目標に応じて振り返りやリマインドを用意し、習慣化を促します。</p>
            </article>
          </div>
        </section>
      </main>

      <section className="ft-cta" id="cta">
        <div className="ft-cta-card">
          <div>
            <p className="ft-eyebrow">今すぐ始める</p>
            <h2>集中のリズムを、今日からシンプルに。</h2>
            <p className="ft-cta-copy">
              FocusTime は、すっきりとしたUIで集中体験を支えます。まずは画面を触って、習慣を育ててみてください。
            </p>
          </div>
          <div className="ft-cta-actions">
            <a className="ft-button ft-button-large" href="#">無料で始める</a>
            <span>iOS / Android 対応</span>
          </div>
        </div>
      </section>
    </div>
  )
}
