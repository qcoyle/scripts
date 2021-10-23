const express = require("express");
const app = express();

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

const plTeams = [{ id: 1, team: "Arsenal", city: "London" }, { id: 2, team: "Spurs", city: "London" }];


app.get("/plTeams", (req, res, next) => {
    res.send(plTeams);
});
// GET http://127.0.0.1:4001/plTeams


app.put("/plTeams/:id", (req, res, next) => {
    idInt = parseInt(req.params.id); // Convert param id to integer
    let plTeamsUpdate = { id: idInt };

    // Merge objects using spread operator
    plTeamsUpdate = {
        ...plTeamsUpdate,
        ...req.query
    }

    const index = plTeams.map(x => x.id).indexOf(idInt); // Find array index for id
    if (index !== -1) {
        plTeams.splice(index, 1, plTeamsUpdate); // Update from array at index
        res.send(plTeams[index]);
    } else {
        res.status(404).send();
    }
});
// PUT http://127.0.0.1:4001/plTeams/2?name=United&city=Manchester swaps Spurs with Man U


app.post("/plTeams", (req, res, next) => {
    const receivedExpression = createElement(plTeams.length, req.query);
    if (receivedExpression) {
        plTeams.push(receivedExpression);
        res.status(201).send(receivedExpression);
    } else {
        res.status(400).send();
    }
});
// POST http://127.0.0.1:4001/plTeams?name=Chelsea&city=London returns { "id": 3, "name": "Chelsea", "city": "London" }
// Subsequent GET returns an array of 3 objects now


app.delete("/plTeams/:id", (req, res, next) => {
    idInt = parseInt(req.params.id); // Convert id to integer
    console.log(idInt);
    const index = plTeams.map(x => x.id).indexOf(idInt); // Find array index for id
    console.log(index);
    if (index !== -1) {
        plTeams.splice(index, 1); // Remove from array at index
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});
// DELETE http://127.0.0.1:4001/plTeams/2 removes Spurs object. DELETE http://127.0.0.1:4001/plTeams/3 returns a 404


// Utility function for POST
const createElement = (arrayLength, queryArguments) => {
    if (queryArguments.hasOwnProperty('name') && queryArguments.hasOwnProperty('city')) {
        console.log(arrayLength);
        let currentId = arrayLength + 1;
        console.log(currentId);
        return {
            'id': currentId,
            'name': queryArguments.name,
            'city': queryArguments.city,
        };
    } else {
        return false;
    }
};