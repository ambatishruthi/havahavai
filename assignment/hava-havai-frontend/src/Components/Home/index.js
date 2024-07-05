import { Component } from "react";
import Sidebarfrom from "../Sidebar";
import FormComponent from "../FormData";
import { v4 as uuid } from "uuid";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import {
  Provider,
  Flex,
  defaultTheme,
  View,
  Heading,
  Button,
  Column,
  TableView,
  TableBody,
  TableHeader,
  Cell,
  Row,
} from "@adobe/react-spectrum";

import Head from "../Header";
import "./index.css";

class Home extends Component {
  state = {
    toAddOrNot: false,
    userFormData: [],
  };

  addBtnCLicked = () => {
    this.setState({ toAddOrNot: true });
  };

  closeFormBtn = () => {
    this.setState({ toAddOrNot: false });
  };

  formData = (formObj) => {
    const myFOrmData = {
      id: uuid(),
      airportName: formObj.airportName,
      Country: formObj.Country,
      CountryCode: formObj.CountryCode,
      Terminals: formObj.Terminals,
    };

    this.setState((prevData) => ({
      userFormData: [...prevData.userFormData, myFOrmData],
      toAddOrNot: false,
    }));
  };

  render() {
    const { toAddOrNot, userFormData } = this.state;
    console.log("stateData", userFormData);

    return (
      <Provider
        theme={defaultTheme}
        UNSAFE_style={{ width: "100vw", minHeight: "100vh" }}
      >
        <Head />
        <Flex direction="row">
          <Sidebarfrom />
          <View flex={2} marginTop={10} marginX={10}>
            <View>
              <Flex direction="row" justifyContent={"space-between"}>
                <View>
                  <Heading level={2}>Airports</Heading>
                </View>
                <View>
                  <Button
                    variant="accent"
                    UNSAFE_className="cursoR"
                    onClick={this.addBtnCLicked}
                  >
                    + Add New
                  </Button>
                </View>
              </Flex>
            </View>

            {/* ------------------------form Toggle */}
            {toAddOrNot && (
              <View
                marginTop={20}
                UNSAFE_className="border-Top"
                marginBottom={20}
              >
                <Button
                  variant="accent"
                  onClick={this.closeFormBtn}
                  marginTop={10}
                  UNSAFE_className="Btn-Cursor"
                >
                  Close
                </Button>
                <Flex justifyContent={"center"} alignItems={"center"}>
                  <FormComponent formData={this.formData} />
                </Flex>
              </View>
            )}

            {/* -----------------tables */}
            <View marginTop={30}>
              <TableView
                aria-label="Example table with static contents"
                selectionMode="multiple"
              >
                <TableHeader>
                  <Column>All Airports</Column>
                  <Column>Country</Column>
                  <Column>Code</Column>

                  <Column align="end">Terminals</Column>
                  <Column align="end"></Column>
                </TableHeader>
                <TableBody>
                  {userFormData.map((mapData) => (
                    <Row key={mapData.id}>
                      <Cell>
                        <Link
                          to={`Airports/${mapData.id}_${mapData.airportName}`}
                        >
                          {" "}
                          {mapData.airportName}{" "}
                        </Link>
                      </Cell>
                      <Cell>{mapData.Country}</Cell>
                      <Cell>{mapData.CountryCode}</Cell>
                      <Cell>{mapData.Terminals}</Cell>
                      <Cell align="end">
                        <Flex direction={"row"} justifyContent={"flex-end"}>
                          <View UNSAFE_className="margin-Right Btn-Cursor">
                            <MdModeEdit size={20} />
                          </View>
                          <View UNSAFE_className="Btn-Cursor">
                            <MdDelete size={20} />
                          </View>
                        </Flex>
                      </Cell>
                    </Row>
                  ))}
                </TableBody>
              </TableView>
            </View>
          </View>
        </Flex>
      </Provider>
    );
  }
}

export default Home;
