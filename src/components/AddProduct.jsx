import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

const AddProduct = ({ handleSubmit }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  }));
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct({ title, price, description });
  }, [title, price, description]);

  return (
    <div id="add-product">
      <TextField
        id="product-title"
        label="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="product-price">Price</InputLabel>
        <Input
          id="product-price"
          startAdornment={<InputAdornment position="start">€</InputAdornment>}
          onChange={(e) => setPrice(e.target.value)}
        />
      </FormControl>
      <TextField
        id="product-description"
        label="Description"
        multiline
        variant="outlined"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" onClick={() => handleSubmit(product)}>
        Submit
      </button>
    </div>
  );
};

export default AddProduct;
