import React, { useEffect }  from 'react';
import { hello } from '../modules/hello/hello';
import Data from '../data/data.json';


const innerJson = Data.inner;


// Component
function Inner() {
  useEffect(() => {
    hello();
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
