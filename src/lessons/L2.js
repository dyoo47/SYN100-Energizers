import React from "react";
import LessonWrapper from "../components/LessonWrapper";
import Definition from "../components/Definition";
import Label from "../components/Label";
import { List } from "reactstrap";

const L2 = () => {
  return (
    <LessonWrapper
      chapter="Chapter 1"
      lesson="Lesson 1.2: Modern Non-Renewables"
    >
      <Label>Introduction</Label>
      <span className="fparagraph">
        Primary electricity generation has shifted from the traditional methods
        discussed in Lesson 1.1 and has mostly shifted to methods which are
        better than those methods, but are still not fully renewable. Natural
        Gas and Nuclear are often considered stepping stones into a future of
        renewable energy.
      </span>
      <Definition title="Natural Gas">
        Natural gas is a flammable gas consisting largely of methane and other
        hydrocarbons, occurring naturally underground and used as fuel.
      </Definition>
      <span className="fparagraph">
        Natural gas is a non-renewable resource that is formed when large
        deposits of organic matter decompose without any oxygen and are
        subjected to extreme heat and pressure. Natural gas deposits are usually
        found near other fossil fuel deposits. When natural gas deposits are
        found companies drill into them to get the gas out and process the gas
        to make it safer for sale and consumption. In the processing plants they
        remove unwanted matter and add the scent to it.
        <br />
        <br />
        Natural Gas has recently overtaken Coal as the most preferred energy
        source in the country. It is decently priced compared to other options,
        abundant, and has far better emissions than coal. Natural gas makes up
        40% of the national energy production. Although Natural Gas is still a
        polluting energy source and is nonrenewable, it is still considered a
        good stepping stone into fully renewable energy, since it is more
        preferred to Coal. As of 2020, the top natural gas producers are:
        <List>
          <li>Texas</li>
          <li>Pennsylvania</li>
          <li>Oklahoma</li>
          <li>Louisiana</li>
          <li>Ohio</li>
        </List>
      </span>
      <Label>Pollution</Label>
      <span className="fparagraph">
        Natural gas plants generate a lot of greenhouse gasses, though it is
        still lower than the emissions of coal. The extraction and
        transportation of natural gas results in the release of methane, which
        is a potent greenhouse gas not found as readily in coal plant emissions.
        Drilling and fracking, two means of extracting natural gas, can have
        significant impacts on natural surroundings, destroying natural habitats
        and water sources in the area.
      </span>
      <Definition title="Nuclear reactions">
        The 2 main types of nuclear reactions are fission and fusion. Fission
        reactions are chain reactions of neutrons colliding with larger unstable
        atoms which then break apart into smaller atoms. Fusion reactions are
        where smaller atoms combine to form larger atoms but these reactions
        need extremely high pressure and temperatures to occur. One example of a
        fusion reactor is the sun which produced nearly all of the energy for
        earth for hundreds of millions of years.
      </Definition>
      <span className="fparagraph">
        All of the nuclear energy produced today comes from fission reactors but
        it's possible and getting more likely that nuclear fusion reactors will
        be used to produce energy in the future. Fission reactions are much
        easier to use for energy than fusion since it was only recently that a
        nuclear fusion reactor generated more energy than it took to run the
        reactor. Nuclear fission reactors generate much more energy than they
        use and consequently have been in use for a long time.
        <br />
        <br />
        Fuel for nuclear reactors is mined and sent to processing facilities
        where they refine the raw materials into usable forms. For nuclear
        reactors they often uranium-235 which is formed into small pieces and
        put into fuel rods. Many of these rods are then configured into a fuel
        assembly and sent to nuclear power plants.
        <br />
        <br />
        Nuclear power is a prime source of electricity generation in the United
        States, given that the generation itself produces no greenhouse gasses.
        Power stations generate electricity by leveraging the heat from nuclear
        reactions to spin turbines which generate electricity. The fuel used is
        extremely energy dense, meaning you can produce a lot of electricity at
        a fairly small facility. There is a lot of controversy surrounding
        nuclear power, since you need to store the used fuel and it isn’t
        renewable. Nuclear accounted for 20% of the electricity generated in the
        united states, being led by the following states:
        <List>
          <li>Illinois</li>
          <li>Pennsylvania</li>
          <li>South Carolina</li>
        </List>
      </span>
      <Label>Drawbacks</Label>
      <span className="fparagraph">
        Nuclear power produces no greenhouse emissions during operation, but it
        produces waste that cannot easily be disposed of. The waste remains
        radioactive for hundreds of thousands of years, and needs to be managed
        so that it does not contaminate the area that it is stored at. Recent
        developments have made it easier to store waste, and some countries have
        found ways to limit the spread of the waste, some by burying it and
        others by storing it in contained water pools. This will allow for waste
        to not pose as a major issue, at least until a better way of disposal is
        discovered. Another concern with nuclear power is the potential for
        nuclear accidents, even though the accidents that have happened in the
        past are limited to the infancy of nuclear power. Modern nuclear plants
        are far more resistant to potential issues, either in the technology of
        the plants themselves or in the location they are placed in.
      </span>
    </LessonWrapper>
  );
};

export default L2;
