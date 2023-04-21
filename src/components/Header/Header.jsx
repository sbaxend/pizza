import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

function Header() {
  const totalCost = useSelector((store) => store.totalCost);
  const customersPizza = useSelector((store) => store.customersPizza);

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          position: "fixed",
          top: 20,
          right: 20,
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {customersPizza.length === 1
          ? `Your Total: $${totalCost}`
          : "Waiting For Selection"}
      </Typography>
    </>
  );
}

export default Header;
