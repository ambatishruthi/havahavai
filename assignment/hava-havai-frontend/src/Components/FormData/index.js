import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Form,
  TextField,
  View,
} from "@adobe/react-spectrum";

const FormComponent = (props) => {
  const { formData } = props;

  const [formValues, setFormValues] = useState({
    airportName: "",
    Country: "",
    CountryCode: "",
    Terminals: "",
  });

  const handleChange = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData(formValues);
    setFormValues({
      airportName: "",
      Country: "",
      CountryCode: "",
      Terminals: "",
    });
  };

  const handleReset = () => {
    setFormValues({
      airportName: "",
      Country: "",
      CountryCode: "",
      Terminals: "",
    });
  };

  return (
    <View>
      <Form
        validationBehavior="native"
        maxWidth="size-3000"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Airport-Name"
          name="Airport-Name"
          type="text"
          isRequired
          value={formValues.airportName}
          onChange={(value) => handleChange("airportName", value)}
        />
        <TextField
          label="Country"
          name="Country"
          type="text"
          isRequired
          value={formValues.Country}
          onChange={(value) => handleChange("Country", value)}
        />
        <TextField
          label="Country Code"
          name="CountryCode"
          type="text"
          isRequired
          value={formValues.CountryCode}
          onChange={(value) => handleChange("CountryCode", value)}
        />
        <TextField
          label="Terminals Number"
          name="Terminals"
          type="text"
          isRequired
          value={formValues.Terminals}
          onChange={(value) => handleChange("Terminals", value)}
        />

        <ButtonGroup>
          <Button variant="primary" type="submit">
            Add
          </Button>
          <Button variant="secondary" type="reset" onPress={handleReset}>
            Reset
          </Button>
        </ButtonGroup>
      </Form>
    </View>
  );
};

export default FormComponent;
