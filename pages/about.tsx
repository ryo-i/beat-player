import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = 'このアプリについて';
const pageText = 'いろいろな拍子のビートをBPMを変更しながら再生できるビートプレイヤーです。';
const headTitle = pageTitle + ' | ' + headerTitle;


const Main = styled.main`
    section {

    }
    h2 {
        background: #eee;
        margin: 60px 0 20px;
        padding: 10px;
        border-radius: 3px;
    }
    h3 {
        margin: 40px 0 10px;
        padding: 0 0 10px;
        border-bottom: 1px solid #ddd;
    }
    figure {
        margin: 0 0 30px;
        img {
            width: 100%;
            box-shadow: 0 0 15px 2px rgb(0 0 0 / 10%);
        }
    }
`;



// Component
function About() {
    return (
        <>
        <Head>
            <title>{ headTitle }</title>
            <meta name="description" content={ pageText } />
            <meta property="og:title" content={ headTitle } />
            <meta property="og:description" content={ pageText } />
        </Head>

        <Header />
        <Main>
            <h1>{ pageTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
            <section>
                <h2>使い方</h2>
                <section>
                    <h3>用途</h3>
                    <p>下記のような用途に活用できます。</p>
                    <ul>
                        <li>楽器やボーカルの練習用のメトロノームとして使う</li>
                        <li>既存の曲のBPM（Beats Per Minute：テンポ、速度）を調べる</li>
                        <li>同じBPMの拍子（リズム）を変えるとどんなビートになるか確認できる</li>
                    </ul>
                </section>
                <section>
                    <h3>ビートの再生/停止</h3>
                    <p>再生ボタン（▶︎）を押すとビートを再生します。</p>
                    <figure>
                        <img src="img/play_button.jpg" alt="再生ボタン" />
                    </figure>
                    <p>停止ボタン（■）を押すとビートを停止します。</p>
                    <figure>
                        <img src="img/stop_button.jpg" alt="停止ボタン" />
                    </figure>
                    <p>※再生/停止ボタンは交互に切り替わります</p>
                </section>
                <section>
                    <h3>BPMの変更</h3>
                    <p>BPM変更レンジを左右に動かすとBPM（ビートの速度）を変更できます。</p>
                    <figure>
                        <img src="img/bpm_range.jpg" alt="BPM変更レンジ" />
                    </figure>
                    <p>BPM初期値は120でBPMの範囲はBPM30〜240です。</p>
                    <p>音楽ジャンルによって使われるBPMが異なります。</p>
                    <p>※参考：<a href="https://note.com/sagahajime/n/nf294904123d0">【効果絶大！？ - BPM（テンポ）設定集 -】</a></p>
                </section>
                <section>
                    <h3>ビートの変更</h3>
                    <p>リズムセレクトボタンを押すとビートを変更できます。</p>
                    <figure>
                        <img src="img/rhythm_select.jpg" alt="リズムセレクト" />
                    </figure>
                    <p>ビートの初期値は8拍子（エイトビート）です（ビートの種類は下記を参照）</p>
                </section>
            </section>
            <section>
                <h2>課題</h2>
                <p>2021/09/14現在、ハイハットの音がズレるという課題が残っている。特に「はねた16ビート」が顕著に感じる。「チッキチッキチッキチッキ」がたまに「チキッチキッチキッチキッ」みたいな感じにズレる。</p>
                <p>この問題はCodePen時代はあまり起こっていなかったため、Tone.jsとReact/Next.jsとの相性の問題かもしれない。</p>
                <p>※参考：<a href="https://www.i-ryo.com/entry/2020/06/20/055657">【Tone.js】いろいろなリズムが鳴らせるビート・プレイヤーを作った（BPM切り替え可能） - クモのようにコツコツと</a></p>
            </section>
            <section>
                <h2>詳細</h2>
                <section>
                    <h3>ブログ</h3>
                    <p><a href="https://www.i-ryo.com/entry/2021/09/16/072438">【React & Tone.js】ビートプレイヤーを作った（ビートとBPMを変更可能） - クモのようにコツコツと</a></p>
                </section>
                <section>
                    <h3>ソースコード（GitHub）</h3>
                    <p><a href="https://github.com/ryo-i/beat-player">リポジトリ</a></p>
                </section>
            </section>
            <Profile />
        </Main>
        <Footer />
        </>
    );
}

export default About;