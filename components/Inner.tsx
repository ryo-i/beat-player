import React, { useEffect }  from 'react';
import Data from '../data/data.json';
import * as Tone from 'tone';


const innerJson = Data.inner;


// Component
function Inner() {
  useEffect(() => {
    // Tone.js Test
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
  });

  return (
    <>
      <section>
            <h2>内容が無いよう</h2>
            <p>へんじがない、ただのしかばねのようだ。</p>
      </section>
    </>
  );
}

export default Inner;
