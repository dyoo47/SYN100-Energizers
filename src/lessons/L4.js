import React from "react";
import LessonWrapper from "../components/LessonWrapper";
import Definition from "../components/Definition";
import Label from "../components/Label";
import { List } from "reactstrap";

const L4 = () => {
  return (
    <LessonWrapper chapter="Chapter 1" lesson="Lesson 1.4: Future">
      <span className="fparagraph">
        The future of energy production needs to be clean and renewable, so that
        we can get the energy our society needs without damaging the environment
        further than we already have. Research is already underway to improve
        already existing renewable energy sources, lowering costs and allowing
        for easier acquisition of the resources needed to build such sources.
        But many consider Fusion power to be the final solution we need for
        energy generation.
        <br />
        <br />
        Fusion is an energy source which leverages the “fusion” of hydrogen
        atoms to form helium - similar to how our sun generates electricity. The
        fuel for this is hydrogen, which is virtually unlimited throughout our
        universe. The amount of energy stored in such a reaction is immense, and
        having a viable fusion option would solve our energy issues permanently.
        Fusion is still being researched, and it is not yet a viable option for
        energy production at any scale. Recently, news on this matter has been
        improving. In late 2022, scientists developed the first energy positive
        fusion reaction in a lab, showing that it is definitely possible to have
        such energy production means. It may only be a few decades before we
        start to see Fusion energy start to power our homes and businesses.
      </span>
    </LessonWrapper>
  );
};
export default L4;
