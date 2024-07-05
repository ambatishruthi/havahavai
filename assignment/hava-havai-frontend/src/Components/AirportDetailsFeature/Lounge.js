import { Text, View } from "@adobe/react-spectrum";
const Lounge = () => {
  return (
    <View>
      <Text>Lounge</Text>
      <View
        borderBottomColor={"white"}
        borderBottomWidth={2}
        borderTopColor={"white"}
        borderTopWidth={2}
        padding={10}
      >
        <Text>Money Exchange</Text>
      </View>
    </View>
  );
};

export default Lounge;
