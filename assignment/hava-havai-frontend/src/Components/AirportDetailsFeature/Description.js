import { TextField, View } from "@adobe/react-spectrum";
const Desctiption = () => {
  return (
    <View>
      <TextField
        label="Description"
        name="Description"
        type="text"
        isRequired
      />
    </View>
  );
};

export default Desctiption;
