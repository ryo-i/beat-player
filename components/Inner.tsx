import React, { useEffect }  from 'react';
import styled from 'styled-components';
import Data from '../data/data.json';
import * as Tone from 'tone';


const innerJson = Data.inner;


const BeatPlayer = styled.section`
  {
    background: #333;
    font-family:
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    "Helvetica Neue",
    Arial,Meiryo,
    sans-serif;
    padding: 30px 0;

    h1, h2, p {
      color: #fff;
      text-align: center;
    }

    #pad {
      background: #333;
      padding: 10px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 auto;
      position: relative;
      font-size:30px;
      :hover,
      input:hover {
        cursor: pointer;
      }
    }

    li {
      margin: 5px;
      background: #666;
      border: 0px solid #333;
      width: 100px;
      height: 100px;
      line-height: 100px;
      border-radius: 5px;
      text-align: center;
      display: inline-block;
      color: #fff;
      box-shadow: 5px 5px 5px rgba(0,0,0, 0.3);
      :hover {
        opacity: 0.7;
      }
    }

    .b_key {
      position: absolute;
      z-index: 10;
      top: 10px;
      margin: 0 -20px;
      padding: 0;
      background: #000;
      border: 1px solid #fff;
      color: #fff;
      width: 35px;
      height: 75px;
      text-align: center;
      display: inline-block;
    }

    .range {
      max-width: 300px;
      width: 100%;
      margin: 0 auto;
      }

    .setting {
      text-align: center;
      color: #fff;
      max-width: 300px;
      width: 100%;
      margin: 0 auto;
      label {
        display: inline-block;
      }
      input {
        margin-bottom: 15px;
      }
    }
  }
`;


// Component
function Inner() {
  useEffect(() => {
    // ページ読み込み時の処理
  });


  // JSX
  return (
    <>
      <BeatPlayer>
        <h1>Beat Player</h1>
        <ul id="pad">
          <li id="beat">▶︎</li>
        </ul>
        <div className="setting">
        <section className="bpm">
          <h2>BPM: <span className="val"></span></h2>
          <input type="range" name="range" min="30" max="240" value="120" className="range" />
            </section>
        <section className="rhythm">
          <h2>リズム: <span className="val"></span></h2>
            <label><input type="radio" name="beat" className="beat1" value="1拍子" />1</label>
            <label><input type="radio" name="beat" className="beat2" value="2拍子" />2</label>
            <label><input type="radio" name="beat" className="beat3" value="3拍子" />3</label>
            <label><input type="radio" name="beat" className="beat4" value="4拍子" />4</label>
            <label><input type="radio" name="beat" className="beat5" value="5拍子" />5</label>
            <label><input type="radio" name="beat" className="beat6" value="6拍子" />6</label>
            <label><input type="radio" name="beat" className="beat7" value="7拍子" />7</label>
            <label><input type="radio" name="beat" className="Beat8" value="8拍子" defaultChecked />8</label>
            <label><input type="radio" name="beat" className="beat12" value="12拍子" />12</label>
            <label><input type="radio" name="beat" className="beatShuffle" value="シャッフル" />Shuffle</label>
            <label><input type="radio" name="beat" className="beat16" value="16拍子" />16</label>
            <label><input type="radio" name="beat" className="beat24" value="24拍子" />24</label>
            <label><input type="radio" name="beat" className="beatSwing16" value="ハネた16" />Swing16</label>
            <label><input type="radio" name="beat" className="beat32" value="32拍子" />32</label>
            </section>
        </div>
      </BeatPlayer>
    </>
  );
}

export default Inner;
