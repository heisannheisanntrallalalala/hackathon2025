import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"))

const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ****** */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/main.html"));
});

/* ****** */

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});