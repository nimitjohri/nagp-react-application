import React from "react";
 
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PageHeader from "./PageHeader";
import SearchBar from "../Search/SearchBar";
 
configure({ adapter: new Adapter() });




describe("<PageHeader />", () => {
  it("should one Search Bar", () => {
    const wrapper =  shallow(<PageHeader/>);
    expect(wrapper.find(<SearchBar/>)).toHaveLength(1) 
  });
});