import Card from "@mui/material/Card";

import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
function OrderItem({ selectPizzas, pizza }) {
  return (
    <Card sx={{ height: 375, bgcolor: "#f0f0f0" }}>
      <CardActions sx={{ position: "relative" }}>
        <Typography variant="body2" color="text.secondary">
          Price: {pizza.price}
        </Typography>
        <Button
          sx={{ marginLeft: "auto" }}
          onClick={(event) => selectPizzas(event, pizza)}
        >
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
      <CardMedia
        height="140"
        component="img"
        image={pizza.image_path}
        alt={pizza.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pizza.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pizza.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OrderItem;
