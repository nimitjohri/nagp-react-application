import React from "react";
 
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchBar from "./SearchBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
 
configure({ adapter: new Adapter() });




describe("<SearchBar />", () => {
  it("should render query on button click", () => {
    const wrapper =  shallow(<SearchBar/>);
    expect(wrapper.find("#searchButton").length).toEqual(1); 
  });
});