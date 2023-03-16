import React from "react";
import LessonWrapper from "../components/LessonWrapper";
import Definition from "../components/Definition";
import ModelDisplay from "../components/ModelDisplay";
import Label from "../components/Label";
import { List } from "reactstrap";

const L3 = () => {
  return (
    <LessonWrapper chapter="Chapter 1" lesson="Lesson 1.3: Renewables">
      <Label>Introduction</Label>
      <span className="fparagraph">
        Renewable energy is the end goal for our society. Renewable energy means
        that all of the energy produced is naturally generated with sources that
        can be replenished with little to no effort from us. Renewable energy
        also needs to produce very little pollution, as the goal with it is to
        not do more damage than we benefit from. There are many types of
        renewable energy, and the following will discuss the most important
        ones.
      </span>
      <Definition title="solar">
        Solar energy refers to the use of solar panels or photovoltaic cells to
        capture the energy from the sun and convert it to electricity.
      </Definition>
      <span className="fparagraph">
        Although the technology for solar cells that capture the sun's energy
        and convert it to electricity has been around for over 100 years, the
        solar cells have not been efficient until fairly recently. Today solar
        panels typically convert about 20% of the sunlight that hits the panel
        into electricity and new solar panels being developed might even surpass
        40% efficiency.
        <br />
        <br />
        Solar is one of the leading sources of renewable energy in the US, and
        it is rapidly growing in popularity. Solar uses large panels to capture
        energy from the sun and store it in batteries for future use. It is
        considered renewable since the sun will always provide energy. Falling
        costs, technology advances and government subsidies have allowed solar
        to thrive. The potential small scale of solar projects also allows for
        homeowners or small businesses to install solar panels for themselves,
        allowing for solar to grow. The primary reason solar is growing is due
        to the lowering costs of the technology, allowing for it to spread
        faster. The costs are lowering still, allowing for even more people to
        adopt solar in the coming years. States with a lot of sunlight and large
        land areas are favorable for solar production. As of 2020, solar
        accounts for 3% of the electricity generated in the US, and the top
        solar producing states were:
        <List>
          <li>California</li>
          <li>Arizona</li>
          <li>North Carolina</li>
        </List>
      </span>
      <ModelDisplay title="Figure 3:" model={2}>
        Solar panel with football field for scale
      </ModelDisplay>
      <Label>Drawbacks</Label>
      <span className="fparagraph">
        The generation of solar energy releases no pollution, so the polluting
        effects of solar are constrained to the initial manufacture of solar
        panels and the batteries that store the solar energy. The manufacturing
        can release toxic chemicals such as copper, selenium, and lithium, which
        could be harmful in the environments they are mined in. The mines are
        also dangerous to their workers - cobalt mines among others require
        workers to work long hours in unsafe environments.
      </span>
      <Definition title="Wind">
        Wind energy is electrical energy generated from harnessing the kinetic
        energy of the wind via windmills or wind turbines.
      </Definition>
      <span className="fparagraph">
        When light from the sun hits the planet some of its energy is dissipated
        into the atmosphere as heat. The air over land typically heats up faster
        than air over the ocean which leads it to expand and rise. Cooler air
        moves in to fill the space the warm air was leading to wind. Windmills
        have been in use generating electricity for over 100 years and today
        wind turbines convert about 40% of the kinetic energy from the wind into
        electricity.
        <br />
        <br />
        Wind power is one of the major sources of renewable energy in the US.
        Wind power is generated using turbines that are located either onshore
        or offshore, which spin in the presence of wind to capture its energy
        and convert it into electricity. Wind is renewable since it relies on
        the natural wind produced worldwide. Wind turbines can be large and used
        in large farms, or small for individual businesses or homes to use for
        electricity. Wind energy has experienced rapid growth in recent years
        due to falling costs, supportive government policies, and advances in
        technology. As a result, wind energy is expected to continue to grow in
        importance as the United States transitions to cleaner and more
        renewable sources of energy. In 2020, wind accounted for 8% of the
        electricity generated in the United States. States with a lot of land
        are most favorable for wind power generation, and the top states in the
        US which generate wind are:
        <List>
          <li>Texas</li>
          <li>Iowa</li>
          <li>Oklahoma</li>
        </List>
      </span>
      <ModelDisplay title="Figure 4:" model={3}>
        Wind mill with football field for scale
      </ModelDisplay>
      <Label>Drawbacks</Label>
      <span className="fparagraph">
        Wind power generation produces no pollution, and generally does not have
        major environmental effects beyond initial construction and
        installation. However, large scale wind farms can have impacts on
        ecosystems and wildlife - most notable in bird migration patterns.
        Efforts are made to reduce the effects of turbine installation on local
        environments, with research done to make sure the area chosen for
        installation would affect wildlife as little as possible.
      </span>
      <Definition title="Hydroelectric">
        Hydroelectric power refers to energy generated from flowing water that
        is used to drive a turbine.
      </Definition>
      <span className="fparagraph">
        Hydroelectric power is one of the most important renewable energy
        sources that the US uses today. Hydroelectric power plants generate
        electricity by using the energy of falling water to turn turbines, which
        then produce electricity. Hydroelectric power is a renewable source of
        energy, as it relies on the natural water cycle to generate electricity.
        Because of this, the states that can best utilize this are states with
        access to large bodies of water with a lot of natural movement. New
        hydroelectric plans are limited however, due to ecological concerns. In
        2020, Hydroelectric power accounted for 7% of electricity generated in
        the US, with the following states leading:
        <List>
          <li>Washington</li>
          <li>Oregon</li>
          <li>California</li>
        </List>
      </span>
      <Label>Drawbacks</Label>
      <span className="fparagraph">
        Hydroelectric power produces no air pollution, but has effects that make
        it a less favorable energy source. Hydroelectric power plant
        installations often displace the people living near them, since the
        plants are often near people who are there due to the close proximity to
        water. Hydroelectric plants also displace wildlife and make severe
        changes to river ecosystems. Hydroelectric power plants can also have
        severe effects on local water quality and marine ecosystems.
      </span>
    </LessonWrapper>
  );
};
export default L3;
