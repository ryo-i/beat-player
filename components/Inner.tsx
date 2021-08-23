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


  // DOM
  const beat = document.querySelector('#beat');
  const BPMVal = document.querySelector('.bpm .val');
  const BPMRange = document.querySelector('.bpm .range');
  const rythmVal = document.querySelector('.rhythm .val');
  const rythmRadio = document.querySelectorAll('.rhythm input[name="beat"]');


  // エンベロープ（キック）
  let membraneKickOpts = {
    pitchDecay: 0.001,
    envelope: {
      attack: 0.001 ,
      decay: 0.75 ,
      sustain: 0.01 ,
      release: 0.01
    },
    volume: 25
  }


  // エンベロープ（スネア）
  let noiseSnareOpts = {
    envelope: {
      attack: 0.001 ,
      decay: 0.5 ,
      sustain: 0.01
    }
  }


  // エンベロープ（ハイハット）
  let noiseHihatOpts = {
    type: "brown",
    envelope: {
      attack: 0.001 ,
      decay: 0.03 ,
      sustain: 0
    }
  }


  // シンセ生成
  const membraneKick = new Tone.MembraneSynth(membraneKickOpts).toMaster();
  const noiseSnare = new Tone.NoiseSynth(noiseSnareOpts).toMaster();
  const noiseHihat = new Tone.NoiseSynth(noiseHihatOpts).toMaster();


  // シンセ実行
  const kickSynth = () => {
    membraneKick.triggerAttackRelease('C0','2n');
  };
  const snareSynth = () => {
    noiseSnare.triggerAttackRelease('8n');
  };
  const hihatSynth = () => {
    noiseHihat.triggerAttackRelease('32n');
  };


  // リズム設定値
  let rhythmData = [
    {
      value: '1拍子',
      beatNumber: 1,
      kickRhythm: [0],
      snareRhythm: []
    },
    {
      value: '2拍子',
      beatNumber: 2,
      kickRhythm: [0],
      snareRhythm: [1]
    },
    {
      value: '3拍子',
      beatNumber: 3,
      kickRhythm: [0],
      snareRhythm: [1, 2]
    },
    {
      value: '4拍子',
      beatNumber: 4,
      kickRhythm: [0, 2],
      snareRhythm: [1, 3]
    },
    {
      value: '5拍子',
      beatNumber: 5,
      kickRhythm: [0],
      snareRhythm: [3]
    },
    {
      value: '6拍子',
      beatNumber: 6,
      kickRhythm: [0],
      snareRhythm: [3]
  },
    {
      value: '7拍子',
      beatNumber: 7,
      kickRhythm: [0, 4],
      snareRhythm: [2, 6]
    },
    {
      value: '8拍子',
      beatNumber: 8,
      kickRhythm: [0, 4],
      snareRhythm: [2, 6]
    },
    {
      value: '12拍子',
      beatNumber: 12,
      kickRhythm: [0, 6],
      snareRhythm: [3, 9]
    },
    {
      value: 'シャッフル',
      beatNumber: 12,
      kickRhythm: [0, 6],
      snareRhythm: [3, 9],
      shaffle: true
    },
    {
      value: '16拍子',
      beatNumber: 16,
      kickRhythm: [0, 8],
      snareRhythm: [4, 12]
    },
    {
      value: '24拍子',
      beatNumber: 24,
      kickRhythm: [0, 12],
      snareRhythm: [6, 18]
    },
    {
      value: 'ハネた16',
      beatNumber: 24,
      kickRhythm: [0, 12],
      snareRhythm: [6, 18],
      shaffle: true
    },
    {
      value: '32拍子',
      beatNumber: 32,
      kickRhythm: [0, 16],
      snareRhythm: [8, 24]
    },
  ];


  // リズム取得
  let getRhythmData = (i) => {
    let data = rhythmData[i];
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
  const setRhythm = (beatNmb, beatLen, Array) => {
    let rhythm = [];
    for(let i = 0; i < Array.length ; i++) {
      rhythm.push('0:' + beatLen * Array[i] + ':0');
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
        rhythm.push('0:' + beatLen * i + ':0');
      }
    }
    return rhythm;
  };


  // ビートリズム設定
  let setBeatRhythm = (i) => {
    let data = getRhythmData(i);
    rythmVal.innerHTML = data.beatVal;
    const beatNum = data.beatNum;
    const beatLen = data.beatLen;
    const kickRhythm = data.kickRhythm;
    const snareRhythm = data.snareRhythm;
    const shaffle = data.shaffle;
    return {
      kick: setRhythm(beatNum, beatLen, kickRhythm),
      snare: setRhythm(beatNum, beatLen, snareRhythm),
      hihat: setHihatRhythm(beatNum, beatLen, shaffle)
    }
  };


  // ビート再生設定
  const playBeat = (kickRtm, snareRtm, hihatRtm) => {
    let kickPart = new Tone.Part(kickSynth, kickRtm).start();
    let snarePart = new Tone.Part(snareSynth, snareRtm).start()
    let hihatPart = new Tone.Part(hihatSynth, hihatRtm).start();
    kickPart.loop = true;
    snarePart.loop = true;
    hihatPart.loop = true;
  }


  // ビート初期値
  let defRhythm = setBeatRhythm(7);
  playBeat(defRhythm.kick, defRhythm.snare, defRhythm.hihat);


  // 再生判定
  let play = false;


  // 再生ボタン
  beat.addEventListener('click', () => {
    if(play){
      play = false;
      beat.innerHTML = "▶︎";
      Tone.Transport.stop();
    } else {
      play = true;
      beat.innerHTML = "■";
      Tone.Transport.start();
    }
  }, false);


  // BPM設定
  let BPMSet = () => {
    let BPMImput = BPMRange.value;
    BPMVal.innerHTML = BPMImput;
    Tone.Transport.bpm.value = BPMImput;
  }
  BPMSet();

  // BPM変更
  BPMRange.addEventListener('input', BPMSet, false);


  // リズム変更
  function selectRythm() {
    for(let i = 0; i < rhythmData.length; i++){
      rythmRadio[i].addEventListener('input', ()=> {
        let beat = setBeatRhythm(i);
        const kick = beat.kick;
        const snare = beat.snare;
        const hihat = beat.hihat;
        if( rythmRadio[i].checked && play ) {
          Tone.Transport.cancel();
          Tone.Transport.start();
          playBeat(kick, snare, hihat);
        } else {
          Tone.Transport.cancel();
          playBeat(kick, snare, hihat);
        }
      }, false);
    }
  }
  selectRythm();


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
