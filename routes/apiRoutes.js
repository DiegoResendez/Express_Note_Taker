const router = require("express").Router();
const notes = require("./../db/notes");


router.get("/notes", (req, res) => {

    notes.getNotes().then((data) => {
        res.json(data);
    });
    
});

router.post("/notes", (req, res) => {

    notes.addNote(req.body).then((note) => {
        res.json(note);
    });
    
});

router.delete("/notes/:id", (req, res) => {

    notes.deleteNote(req.params.id).then((note) => {
        res.json(note);
    });

});

module.exports = router;