import Express from "express";
import route from "./Routes/router.js";

const app = Express();

const port = process.env.PORT || 3000

app.use(Express.json())
app.use("/recipe", route)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

