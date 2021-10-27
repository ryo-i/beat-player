import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = 'ビートの種類';
const pageText = '変更可能なビートの種類は下記になります。オレンジ＝強拍（キック）、弱拍＝黄色（スネア）、グレー＝それ以外（ハイハット）。';
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
                <h3>1拍子（全音符）</h3>
                <p>1小節に全音符が一つだけ入る。強拍、弱拍のアクセントもない。一番シンプルなリズム。</p>
                <figure>
                    <img src="img/beat1.jpg" alt="1拍子" />
                </figure>
            </section>
            <section>
                <h3>2拍子（二分音符）</h3>
                <p>二分音符のリズムで、1拍子目が強拍、2拍子目が弱拍になる。</p>
                <figure>
                    <img src="img/beat2.jpg" alt="2拍子" />
                </figure>
            </section>
            <section>
                <h3>3拍子（ワルツ）</h3>
                <p>1拍目の強拍、2・3拍目の弱拍になる。いわゆる「ワルツ」のビート。</p>
                <figure>
                    <img src="img/beat3.jpg" alt="3拍子" />
                </figure>
            </section>
            <section>
                <h3>4拍子（マーチ）</h3>
                <p>4分音符が4つで1小節。1、3拍目が強拍、2、4拍目が弱拍。拍子のアクセントが倍になっている。マーチなどの行進曲みたいなビート。</p>
                <figure>
                    <img src="img/beat4.jpg" alt="4拍子" />
                </figure>
            </section>
            <section>
                <h3>5拍子（ハチロク-1）</h3>
                <p>8拍子が5つで「5/8拍子」。3拍子と2拍子の組み合わせた変拍子。後述の「6拍子（ハチロク）」から最後の1拍を抜いたリズム。</p>
                <figure>
                    <img src="img/beat5.jpg" alt="5拍子" />
                </figure>
            </section>
            <section>
                <h3>6拍子（ハチロク）</h3>
                <p>「ハチロク」とは8分音符が6つで1小節、という意味で「6/8拍子」になる。ブルースやバラードなどで使われるリズム。</p>
                <figure>
                    <img src="img/beat6.jpg" alt="6拍子" />
                </figure>
            </section>
            <section>
                <h3>7拍子（エイトビート-1）</h3>
                <p>8拍子が7つで「7/8拍子」。4拍子と3拍子の組み合わせた変拍子。後述するエイトビートから最後の1拍を抜いたリズム。</p>
                <figure>
                    <img src="img/beat7.jpg" alt="7拍子" />
                </figure>
            </section>
            <section>
                <h3>8拍子（エイトビート）</h3>
                <p>8分音符が8つで1小節なので8/8拍子。アクセント的には4拍子と同じだがハイハットの刻みが倍の8つになっている。ロックやポップスでよく使われる一般的なリズム。</p>
                <figure>
                    <img src="img/beat8.jpg" alt="8拍子" />
                </figure>
            </section>
            <section>
                <h3>12拍子（12/16拍子）</h3>
                <p>16部音符が12個（12/16拍子）。アクセントは6/8拍子の倍になっている。</p>
                <figure>
                    <img src="img/beat12.jpg" alt="12拍子" />
                </figure>
            </section>
            <section>
                <h3>シャッフル</h3>
                <p>12拍子だとハイハットが忙しいため、ハイハットで3拍の間の1つを抜くとシャッフルビートになる。ブギウギや早めのブルースなどで使われる。</p>
                <figure>
                    <img src="img/beatShuffle.jpg" alt="シャッフル" />
                </figure>
            </section>
            <section>
                <h3>16拍子（16ビート）</h3>
                <p>16部音符が16個でいわゆる16ビート。アクセント的には8拍子と同じだがハイハットの刻みが倍になっている。ボサノバやフュージョンなど。</p>
                <figure>
                    <img src="img/beat16.jpg" alt="16拍子" />
                </figure>
            </section>
            <section>
                <h3>24拍子（24/32拍子）</h3>
                <p>24拍子は32分音符が1小節に24個！ここら辺になると両手でもハイハットがかなり忙しい。</p>
                <figure>
                    <img src="img/beat24.jpg" alt="24拍子" />
                </figure>
            </section>
            <section>
                <h3>ハネた16（24/32拍子）</h3>
                <p>24拍子からハイハット3拍の真ん中1音抜いてシャッフルしている。均一な16ビートよりもグルーヴ感がある。ヒップホップやゆったりめのファンク。</p>
                <figure>
                    <img src="img/beatSwing16.jpg" alt="ハネた16" />
                </figure>
            </section>
            <section>
                <h3>32拍子（32ビート）</h3>
                <p>16ビートを倍にしてみる。32分音符が1小節に32個。ハイハットがプロペラ音みたいになり現実的にはあまり使われることはない。</p>
                <figure>
                    <img src="img/beat32.jpg" alt="32拍子" />
                </figure>
            </section>
            <p>※参考：<a href="https://www.i-ryo.com/entry/2020/05/31/194741">【Tone.js】Tone.Part()でいろいろなリズムを鳴らす ※1〜8拍子編 - クモのようにコツコツと</a></p>
            <p>※参考：<a href="https://www.i-ryo.com/entry/2020/06/08/060621">【Tone.js】Tone.Part()でいろいろなリズムを鳴らす ※12〜32拍子&シャッフル編 - クモのようにコツコツと</a></p>
            <Profile />
        </Main>
        <Footer />
        </>
    );
}

export default About;