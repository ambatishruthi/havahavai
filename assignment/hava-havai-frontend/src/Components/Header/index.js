import { Flex, View, Heading, Image } from "@adobe/react-spectrum";
import "./index.css";

const Head = () => {
  return (
    <View padding="size-200" UNSAFE_className="border-Bottom">
      <Flex direction="row" justifyContent={"space-between"}>
        <View>
          <Heading level={1}>Hava Havai</Heading>
        </View>
        <View borderRadius={12}>
          <Image
            UNSAFE_className="border-Radius"
            maxWidth={50}
            maxHeight={50}
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profile"
            objectFit="cover"
          />
        </View>
      </Flex>
    </View>
  );
};

export default Head;
