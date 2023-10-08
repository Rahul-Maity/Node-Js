const express = require('express');
const multer = require('multer');
const path = require("path");
const UPLOADS_FOLDER = "./uploads/";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const filename = file.originalname
            .replace(fileExt, "")
            .toLowerCase()
            .split(" ")
            .join("-") + "-" + Date.now();
        cb(null, filename + fileExt);
    }
})
var upload = multer({
    // dest: UPLOADS_FOLDER,
    storage:storage,
    limits: {
        fileSize:1000000,
    },
    fileFilter: (req, file, cb) => {
        if (file.fieldname === "avatar") {
            
            if (file.mimetype === 'image/jpeg' ||
            file.mimetype==='image/png'
            ) {
                cb(null, true);
            }
            else {
                cb(new Error('Only img format supported'));
            }
        }
        else if (file.fieldname === "doc") {
            if (file.mimetype === "application/pdf") {
                cb(null, true);
            }
            else {
                cb(new Error('Only pdf type supported!'));

            }
        }
        else {
            cb(new Error('There was an unknown error'));
        }
    }
});




const app = express();
app.post('/', upload.fields([
    { name: "avatar", maxCount: 1 },
    {name:"doc",maxCount:1}
]), (req, res) => {
    res.send('uploaded');
});


// app.post('/',upload.array("avatar",3), (req, res) => {
//     res.send('uploaded');
// });


// app.post('/',upload.single("avatar"), (req, res) => {
//     res.send('uploaded');
// });

//Default error handler
app.use((err, req, res,next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send('There was an upload error');
        }
        else {
            res.status(500).send(err.message);
        }
    }
    else{
        res.send("success");

    }
    
})

app.listen(3000, () => {
    console.log('Listning at port 3000');
});