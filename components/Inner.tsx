import React, { useEffect }  from 'react';
import Data from '../data/data.json';
import * as Tone from 'tone';


const innerJson = Data.inner;


// Component
function Inner() {
  useEffect(() => {
    // ページ読み込み時の処理
  });


  // Tone.js Test
  const toneJsTest = () => {
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
  };

  return (
    <>
      <section>
            <h2>Tone.jsテスト</h2>
            <button onClick={toneJsTest}>音を鳴らす♪</button>
      </section>
    </>
  );
}

export default Inner;
