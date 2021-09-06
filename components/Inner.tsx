import React, { useState }  from 'react';
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
    padding: 0;
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
  // Hooks
  const [beatPlay, setBeatPlay] = useState(innerJson.settings.beatPlay);
  const [bpmRange, setBpmRange] = useState(innerJson.settings.bpm);
  const [beatName, setBeatName] = useState(innerJson.settings.beatName);
  const [beatValue, setBeatValue] = useState(innerJson.settings.beatValue);


  // シンセ設定
  let kickSynth, snareSynth, hihatSynth;
  const setSynth = () => {
    const membraneKick = new Tone.MembraneSynth(innerJson.synthParam.membraneKickOpts).toDestination();
    const noiseSnare = new Tone.NoiseSynth(innerJson.synthParam.noiseSnareOpts).toDestination();
    const noiseHihat = new Tone.NoiseSynth(innerJson.synthParam.noiseHihatOpts).toDestination();

    kickSynth = () => {
      membraneKick.triggerAttackRelease('C0','8n');
    };
    snareSynth = () => {
      noiseSnare.triggerAttackRelease('8n');
    };
    hihatSynth = () => {
      noiseHihat.triggerAttackRelease('32n');
    };
  };


  // リズム取得
  let getRhythmData = (className) => {
    let data = innerJson.beatParam[className];
    let beatLen = 4 / data.beatNumber;
    return {
      data: data,
      beatVal: data.value,
      beatNum: data.beatNumber,
      beatLen: beatLen,
      kickRhythm: data.kickRhythm,
      snareRhythm: data.snareRhythm,
      shaffle: data.shaffle
    }
  };


  // キック、スネアリズム設定
  const setRhythm = (beatLen, Array) => {
    let rhythm = [];
    for(let i = 0; i < Array.length ; i++) {
      rhythm.push('0:' + Math.floor((beatLen * Array[i] + 0.02) * 1000) / 1000 + ':0');
    }
    return rhythm;
  }


  // ハイハットリズム設定
  const setHihatRhythm = (beatNmb, beatLen, shaffle) => {
    let rhythm = [];
    for(let i = 0; i < beatNmb ; i++) {
      if (shaffle && i % 3 == 1) {
        // 鳴らさない
      } else {
        rhythm.push('0:' + Math.floor(beatLen * i * 1000) / 1000 + ':0');
      }
    }
    return rhythm;
  };


  // ビートリズム設定
  const setBeatRhythm = (className) => {
    let data = getRhythmData(className);
    setBeatValue(data.beatVal);
    const beatNum = data.beatNum;
    const beatLen = data.beatLen;
    const kickRhythm = data.kickRhythm;
    const snareRhythm = data.snareRhythm;
    const shaffle = data.shaffle;
    return {
      kick: setRhythm(beatLen, kickRhythm),
      snare: setRhythm(beatLen, snareRhythm),
      hihat: setHihatRhythm(beatNum, beatLen, shaffle)
    }
  };


  // ビート再生設定
  const playBeat = (kickRtm, snareRtm, hihatRtm) => {
    setSynth();

    let hihatPart = new Tone.Part(hihatSynth, hihatRtm).start();
    let kickPart = new Tone.Part(kickSynth, kickRtm).start();
    let snarePart = new Tone.Part(snareSynth, snareRtm).start();

    hihatPart.loop = true;
    kickPart.loop = true;
    snarePart.loop = true;
  };


  // 再生ボタン
  let changeBeatPlay = () => {
    if (beatPlay === "▶︎") {
      setBeatPlay("■");
      Tone.Transport.stop();
      Tone.Transport.cancel();
      Tone.Transport.bpm.value = bpmRange;
      const beatRhythm = setBeatRhythm(beatName);
      playBeat(beatRhythm.kick, beatRhythm.snare, beatRhythm.hihat);
      Tone.Transport.start();
    } else if (beatPlay === "■"){
      setBeatPlay("▶︎");
      Tone.Transport.stop();
      Tone.Transport.cancel();
    }
  };


  // BPM変更
  let changeBpm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const BPMImput: number = Number(e.target.value);
    setBpmRange(BPMImput);
    Tone.Transport.bpm.value = BPMImput;
  }


  // リズム変更
  const changeRythm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getClassName: string = String(e.target.className);
    const getValue: string = String(e.target.value);
    const beatRhythm = setBeatRhythm(getClassName);
    setBeatName(getClassName);
    setBeatValue(getValue);

    if(beatPlay === "■") {
      Tone.Transport.stop();
      Tone.Transport.cancel();
      Tone.Transport.start();
      playBeat(beatRhythm.kick, beatRhythm.snare, beatRhythm.hihat);
    } else if (beatPlay === "▶︎") {
      Tone.Transport.cancel();
      playBeat(beatRhythm.kick, beatRhythm.snare, beatRhythm.hihat);
    }
  }


  // JSX
  return (
    <>
      <BeatPlayer>
        <h1>Beat Player</h1>
        <ul id="pad">
          <li id="beat" onClick={changeBeatPlay}>{beatPlay}</li>
        </ul>
        <div className="setting">
          <section className="bpm">
            <h2>BPM: <span className="val">{bpmRange}</span></h2>
            <input type="range" name="range" min="30" max="240" value={bpmRange} className="range" onChange={changeBpm} />
          </section>
          <section className="rhythm">
            <h2>リズム: <span className="val">{beatValue}</span></h2>
            <label><input type="radio" name="beat" className="beat1" value="1拍子" onChange={changeRythm} />1</label>
            <label><input type="radio" name="beat" className="beat2" value="2拍子" onChange={changeRythm} />2</label>
            <label><input type="radio" name="beat" className="beat3" value="3拍子" onChange={changeRythm} />3</label>
            <label><input type="radio" name="beat" className="beat4" value="4拍子" onChange={changeRythm} />4</label>
            <label><input type="radio" name="beat" className="beat5" value="5拍子" onChange={changeRythm} />5</label>
            <label><input type="radio" name="beat" className="beat6" value="6拍子" onChange={changeRythm} />6</label>
            <label><input type="radio" name="beat" className="beat7" value="7拍子" onChange={changeRythm} />7</label>
            <label><input type="radio" name="beat" className="beat8" value="8拍子" onChange={changeRythm} defaultChecked />8</label>
            <label><input type="radio" name="beat" className="beat12" value="12拍子" onChange={changeRythm} />12</label>
            <label><input type="radio" name="beat" className="beatShuffle" value="シャッフル" onChange={changeRythm} />Shuffle</label>
            <label><input type="radio" name="beat" className="beat16" value="16拍子" onChange={changeRythm} />16</label>
            <label><input type="radio" name="beat" className="beat24" value="24拍子" onChange={changeRythm} />24</label>
            <label><input type="radio" name="beat" className="beatSwing16" value="ハネた16" onChange={changeRythm} />Swing16</label>
            <label><input type="radio" name="beat" className="beat32" value="32拍子" onChange={changeRythm} />32</label>
          </section>
        </div>
      </BeatPlayer>
    </>
  );
}

export default Inner;