import Sidebarfrom from "../Sidebar";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiShare } from "react-icons/fi";
import Desctiption from "../AirportDetailsFeature/Description";
import Lounge from "../AirportDetailsFeature/Lounge";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CartComponent from "../CartFunctionality";
import { Link } from "react-router-dom";
import Head from "../Header";

import {
  Provider,
  Switch,
  TextField,
  Button,
  Flex,
  defaultTheme,
  View,
  Heading,
  Item,
  TabList,
  TabPanels,
  Tabs,
  Image,
  Text,
  ComboBox,
  FileTrigger,
} from "@adobe/react-spectrum";

const AirportDetail = () => {
  const { id } = useParams();

  const [selectedTerminal] = useState(id);

  const gotIndex = selectedTerminal.indexOf("_");

  const [terminalName] = useState(selectedTerminal.slice(gotIndex + 1));

  return (
    <Provider
      theme={defaultTheme}
      UNSAFE_style={{ width: "100vw", minheight: "110vh" }}
    >
      <Head />
      <Flex direction="row">
        <Sidebarfrom />
        <View flex={2} marginTop={10} marginX={10}>
          <View>
            <Flex justifyContent={"flex-end"}>
              <Link to="/">
                <Button UNSAFE_className="pointerBt">Back</Button>
              </Link>
            </Flex>
          </View>

          <View>
            <Heading level={2}>
              Airports {">"} {terminalName}
            </Heading>
          </View>
          <View>
            <Heading level={1}>{terminalName}</Heading>
          </View>
          {/* -------Tab starting */}
          <View>
            <Tabs aria-label="History of Ancient Rome">
              <TabList>
                <Item key="FoR">Terminals</Item>
                <Item key="MaR">Transport</Item>
                <Item key="Emp">Contact details</Item>
              </TabList>
              <TabPanels>
                <Item key="FoR">
                  <View marginTop={30}>
                    <Flex alignItems={"center"}>
                      <View
                        borderWidth="thin"
                        borderColor="white"
                        maxWidth={320}
                        margin={20}
                      >
                        <Flex>
                          <View marginEnd={10} padding={10}>
                            <Image
                              maxWidth={50}
                              maxHeight={80}
                              src="https://plus.unsplash.com/premium_photo-1661340638286-7ce343262c4c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Terminal"
                              objectFit="cover"
                            />
                          </View>

                          <View>
                            <View paddingEnd={10}>
                              <Flex
                                alignItems={"center"}
                                justifyContent={"space-between"}
                              >
                                <Heading level={2}>Terminal 1</Heading>
                                <HiDotsHorizontal />
                              </Flex>
                            </View>

                            <View>
                              <Text>Optional MetaData should be two lines</Text>
                            </View>
                          </View>
                        </Flex>
                      </View>

                      <View
                        borderWidth="thin"
                        borderColor="white"
                        maxWidth={320}
                        margin={20}
                      >
                        <Flex>
                          <View marginEnd={10} padding={10}>
                            <Image
                              maxWidth={50}
                              maxHeight={80}
                              src="https://plus.unsplash.com/premium_photo-1661340638286-7ce343262c4c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Terminal"
                              objectFit="cover"
                            />
                          </View>

                          <View>
                            <View paddingEnd={10}>
                              <Flex
                                alignItems={"center"}
                                justifyContent={"space-between"}
                              >
                                <Heading level={2}>Terminal 2</Heading>
                                <HiDotsHorizontal />
                              </Flex>
                            </View>

                            <View>
                              <Text>Optional MetaData should be two lines</Text>
                            </View>
                          </View>
                        </Flex>
                      </View>

                      <View>
                        {/* <Button variant="primary">
                          <Text> + Add Terminal</Text>
                        </Button> */}
                        <CartComponent />
                      </View>
                    </Flex>
                  </View>
                </Item>
                <Item key="MaR">Senatus Populusque Romanus.</Item>
                <Item key="Emp">Alea jacta est.</Item>
              </TabPanels>
            </Tabs>
          </View>
          {/*---------------------------------------- tab ends */}
          <View>
            <Heading level={1}>Services</Heading>

            <View borderBottomWidth={1} borderBottomColor={"white"}>
              <Heading level={2}>Lost & Found</Heading>
            </View>

            {/* --------------------------------options */}

            <View>
              <Flex
                direction={"row"}
                alignItems={"center"}
                wrap={"wrap"}
                justifyContent={"space-between"}
              >
                <View>
                  <Flex direction={"column"}>
                    <Text>Service Name</Text>
                    <TextField defaultValue="Lost & Found" isReadOnly />
                  </Flex>
                </View>
                {/* ---------------------Category */}
                <View>
                  <Flex direction={"column"}>
                    <Text>Category</Text>
                    <ComboBox defaultSelectedKey={"red panda"}>
                      <Item key="red panda">Option 1</Item>
                      <Item key="cat">Option 2</Item>
                      <Item key="dog">Option 3</Item>
                      <Item key="aardvark">Option 4</Item>
                      <Item key="kangaroo">Option 5</Item>
                      <Item key="snake">Option 6</Item>
                    </ComboBox>
                  </Flex>
                </View>
                {/* ---------------------------------------Sub Category */}
                <View>
                  <Flex direction={"column"}>
                    <Text>Sub Category</Text>
                    <ComboBox defaultSelectedKey={"red panda"}>
                      <Item key="red panda">Option 1</Item>
                      <Item key="cat">Option 2</Item>
                      <Item key="dog">Option 3</Item>
                      <Item key="aardvark">Option 4</Item>
                      <Item key="kangaroo">Option 5</Item>
                      <Item key="snake">Option 6</Item>
                    </ComboBox>
                  </Flex>
                </View>

                {/* upload file */}
                <View>
                  <FileTrigger allowsMultiple>
                    <Button variant="primary">
                      {" "}
                      <FiShare />
                      Upload Image
                    </Button>
                  </FileTrigger>
                </View>

                {/* Switch Button */}
                <View>
                  <Switch>Show Image</Switch>
                </View>
              </Flex>
            </View>
          </View>
          {/* ---------------------------------------------------------Description */}
          <View>
            <Desctiption />
          </View>
          <View marginTop={20} marginBottom={30}>
            <Lounge />
          </View>
        </View>
      </Flex>
    </Provider>
  );
};

export default AirportDetail;
