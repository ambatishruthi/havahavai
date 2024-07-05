import { Flex, View, Text, Heading } from "@adobe/react-spectrum";
import { IoMdHome } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";

import "./index.css";

const Sidebar = () => {
  return (
    <View flex={0.2} padding="size-200" UNSAFE_className="border-Right">
      <Flex direction="column" marginBottom={20} UNSAFE_className="fontSizeCSs">
        <Text elementType="p">
          <IoMdHome /> Home
        </Text>
        <Text elementType="p">
          <RxDashboard /> Dashboard
        </Text>
      </Flex>

      <Flex direction="column" marginBottom={20} UNSAFE_className="fontSizeCSs">
        <Heading level={4}>Services</Heading>
        <Text elementType="p">Airports</Text>
        <Text elementType="p">Videos</Text>
      </Flex>

      <Flex direction="column" marginBottom={20} UNSAFE_className="fontSizeCSs">
        <Heading level={4}>Others</Heading>
        <Text elementType="p">List 1</Text>
        <Text elementType="p">List 2</Text>
        <Text elementType="p">List 3</Text>
      </Flex>
    </View>
  );
};

export default Sidebar;
