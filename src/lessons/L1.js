import React from "react";
import LessonWrapper from "../components/LessonWrapper";
import Definition from "../components/Definition";
import Label from "../components/Label";
import { List } from "reactstrap";

const L1 = () => {
  return (
    <LessonWrapper
      chapter="Chapter 1"
      lesson="Lesson 1.1: Traditional Energy Sources"
    >
      <Label>Introduction</Label>
      <span className="fparagraph">
        Electricity generation was something that started in the 1800s with the
        dawn of the industrial revolution, using coal and later oil for
        electricity generation. For some parts of our electricity generation, we
        still use the same technologies that have been around for a few
        centuries, despite their clear issues.
      </span>
      <Definition title="Coal">
        Coal is a combustible black or dark brown rock consisting mostly of
        carbonized plant matter, found mainly in underground deposits and widely
        used as fuel.
      </Definition>
      <span className="fparagraph">
        Coal has been used on a large scale for hundreds of years since it is
        one of the easiest fuels that can be used for energy production and it
        is relatively easy to process compared to natural gas and petroleum.
        After coal is mined it is sent to a facility where rocks and other
        unwanted materials are removed and then it is ready to be burned. Coal
        is one of the easiest materials for countries to burn for energy which
        is why it was the main source of energy in the beginning of the
        industrial revolution. Although in the past coal was used to directly
        power machines, today it is mostly used to produce electricity.
        <br />
        <br />
        Coal has been a resource the US has relied on for many years, but
        reliance on Coal is shifting in favor of other sources. It is still used
        in many different states, accounting for about 19% of the national
        energy production. Most states still rely on coal for at least a small
        portion of their energy production. As of 2020, the top coal-producing
        states are:
        <List>
          <li>Wyoming</li>
          <li>West Virginia</li>
          <li>Pennsylvania</li>
          <li>Illinois</li>
        </List>
      </span>
      <Label>Drawbacks</Label>
      <span className="fparagraph">
        The amount of pollution that coal produces is the main reason why
        production is shifting away from coal. Burning coal in power plants
        pollutes the air and water, releasing pollutants such as carbon dioxide,
        sulfur dioxide, nitrogen oxides, and general particulate matter. Coal
        mining is also very dangerous. It not only has health effects on those
        who work in that industry, but it damages local ecosystems and
        contaminates groundwater and other water sources in the areas that it
        occurs in.
      </span>
      <Definition title="Oil">
        Oil comes from petroleum which is a liquid mixture of hydrocarbons that
        can be extracted from the earth and refined to produce fuels like
        gasoline, diesel fuel, and other oils.
      </Definition>
      <span className="fparagraph">
        Petroleum is typically found in large deposits in the earth's crust and
        is the result of large quantities of dead organisms being buried and
        undergoing prolonged heat and pressure. It is extracted from the earth
        in a process called oil drilling. In oil drilling, crude oil is
        extracted from the earth then transported to processing and refinement
        facilities where it is turned into many different types of fuels and
        oils. These fuels and oils can then be used for energy production or
        used as oil for machines. When petroleum based fuels are burned they
        release carbon dioxide and other pollutants Support for oil as an
        electricity source has dwindled over the past few decades. It was once
        one of the top sources for electricity, but now it has been replaced
        mostly by natural gas, and more recently, renewables. Oil and natural
        gas are fundamentally very similar, but the emissions from natural gas
        are far more tame, which stirred the transition to oil from natural gas.
        Oil accounts for just 1% of electricity produced in the US. Although oil
        is used very little for electricity, it still has widespread use, in the
        form of gasoline for cars - though this is outside the scope of this
        course.
      </span>
      <br />
      <br />
      <Label>Drawbacks</Label>
      <span className="fparagraph">
        Oil power generation is associated with significant air and water
        pollution, including greenhouse gas emissions that contribute to climate
        change, and the release of pollutants such as sulfur dioxide, nitrogen
        oxides, and particulate matter that can harm human health and the
        environment. Spills and leaks during extraction also happen, impacting
        ecosystems on land and water.
      </span>
    </LessonWrapper>
  );
};

export default L1;
