import express from "express";
import cors from "cors";
import path from "path";

const app = express(); // ✅ create the app first

// ✅ then use middleware
app.use(cors());
app.use(express.json());

// serve static images (example)
app.use("/images", express.static(path.join(process.cwd(), "images")));

// routes
app.get("/meals", (req, res) => {
  res.json([
    { id: 1, name: "Pizza", price: 10, image: "images/pizza.jpg" },
    { id: 2, name: "Burger", price: 8, image: "images/burger.jpg" },
  ]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
