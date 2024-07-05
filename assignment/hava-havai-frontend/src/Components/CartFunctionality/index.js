import {
  DialogTrigger,
  Dialog,
  Text,
  FileTrigger,
  ButtonGroup,
  Button,
  Divider,
  Content,
  //   View,
  //   Flex,
  Heading,
} from "@adobe/react-spectrum";

import { FiShare } from "react-icons/fi";

const CartComponent = () => {
  return (
    <DialogTrigger>
      <Button variant="primary">
        <Text> + Add Terminal</Text>
      </Button>
      {(close) => (
        <Dialog>
          <Heading level={1}>Terminal Title</Heading>

          <Divider />
          <Content>
            <Text>Description </Text>
          </Content>
          <ButtonGroup>
            <FileTrigger allowsMultiple>
              <Button variant="primary" UNSAFE_className="">
                <FiShare />
                Upload Image
              </Button>
            </FileTrigger>

            <Button variant="secondary" onPress={close}>
              Cancel
            </Button>

            <Button variant="accent" onPress={close} autoFocus>
              Confirm
            </Button>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
  );
};

export default CartComponent;
