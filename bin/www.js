"use strict";

const app = require("../app");

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`
    ############################################
        Server listening on port : ${PORT}
        http://localhost:${PORT}
    ############################################
    `);
});

// export.moudle =