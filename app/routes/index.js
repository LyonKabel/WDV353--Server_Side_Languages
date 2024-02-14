const express = require('express');
const router = express.Router();
let todos = [];
let idCounter = 1;

// localhost:3000/api
router.get('/', (req, res) => {
    res.status(200).json({message: "From the API"});
    console.log('From the API');
})

// localhost:3000/api/:id
// post by id
router.post('/', (req, res) => {
    console.log('Request body >>>', req.body);
    const {data} = req.body;
    const newTodo = {id: idCounter++, data}
    todos.push(newTodo);
    res.status(200).json({message: "We got the request", data: newTodo });
});




// localhost:3000/api/:city
// router.get('/:city', (req, res) => {
//     const city = req.params.city;
//     console.log("params >>> " , city)
//     res.status(200).json({message: "From the API"});
// })


// localhost:3000/api/:id
// delete by id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    todos = todos.filter(todo => todo.id !==parseInt(id));
    console.log("Deleted API >>> " , id)
    res.status(200).json({message: "Deleted sucessfully"});
    
})


// localhost:3000/api/:id
// get by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === parseInt(id));
    if(!todo){
        res.status(404).json({message: "Not Found"});

    }
    else{
        res.status(200).json(todo);

    }
    console.log("Get API >>> " , id)
})

// localhost:3000/api/:id
// patch by id
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const index = todos.findIndex(todo => todo.id === parseInt(id));
    if (index === -1) {
        res.status(404).json({ message: "Not Found" });
    } else {
        todos[index] = { ...todos[index], ...updatedData };
        res.status(200).json(todos[index]);
    }
    console.log("Patch API >>> ", id);
});


module.exports = router;