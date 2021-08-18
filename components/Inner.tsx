import React, { useEffect }  from 'react';
import { hello } from '../modules/hello/hello';
import Data from '../data/data.json';
import * as Tone from 'tone';


const innerJson = Data.inner;


// Component
function Inner() {
  useEffect(() => {
    hello();

    // Tone.js Test
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
  });

  return (
    <>
      {
        innerJson.length >= 1
          ? innerJson.map((innerJson, index) =>
            <section key={ index }>
              <h2>{ innerJson.title }</h2>
              <p dangerouslySetInnerHTML={{ __html: innerJson.text }}></p>
            </section>
          )
          : <section>
            <h2>内容が無いよう</h2>
            <p>へんじがない、ただのしかばねのようだ。</p>
          </section>
      }
    </>
  );
}

export default Inner;
