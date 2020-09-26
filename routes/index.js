const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Department = require('../models/department')
const Employee = require('../models/employee')




// Home
router.get('/', (req, res) => {
  Department.find()
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    console.log("Error when retreving the Department  " + err)
  })
})

// Create
// post/department
router.post('/post/department', (req, res) => {

    const department =  new Department({
      name: req.body.name,
      time : String(new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/'))
    })
    department.save()
    .then(data => {
      res.json(data)
    })
    .catch(err =>{
      res.status(400)
    })

})

// delete department
// department/:id
router.delete('/department/:id', function (req, res) {
  const departmentId = req.params.id;
  Department.findOne({_id: departmentId}, function(err, department) {
    if (err) {
      res.json({"message": "Error when deleting department"})
    }
    department.delete()
    .then(data => {
      res.json("Department deleted")
    })
    .catch(err => {
      res.status(400)
    })
  })
})




// Update department
// department/:id
router.put('/department/:id', function(req, res, next) {
  const departmentId = req.params.id;

  const updateDepartment = {
     name  : req.body.name
  }
  Department.findOneAndUpdate({_id: departmentId}, updateDepartment, {new: true})
  .then(data => {
    res.json("Department updated")
  })
  .catch( err => {
    res.status(400)
  } )

});











//////////////////////////////////// Employee //////////////////////////









// Get employee
// employee/:id
router.get('/employee/:id', function(req, res, next) {
    const departmentId = req.params.id;
    Department.findOne({_id: departmentId}, function(err, post) {
      if (err) {
        console.log("Error when retreving the department  " + err)
      }
    })
    .populate('employee').sort()
    .exec(function(err, department) {
    res.json(department.employee);
    });
});


// Create employee
// post/employee
router.post('/employee/:id', function(req, res, next) {
  const name         = req.body.name;
  const age          = req.body.age;
  const position     = req.body.position;
  const supervisor   = req.body.supervisor;
  const schedule     = req.body.schedule;
  const departmentId = req.params.id;

    new Employee({
       name       :name,
       age        :age,
       position   :position,
       supervisor :supervisor,
       schedule   :schedule
    }).save()
    .then(newEmployee => {
      Department.findOne({_id:departmentId},function(err, department) {
        if (err) {
          console.log("Error searching the departments   "  +  err)
        }
          department.employee.push(newEmployee);
          department.save(function(err) {
            if (err) {
              console.log("Error traying to update department   " + err)
            }
            res.send(department)
          })
      })
     })
     .catch(error => {
       res.status(400)
     })

});



// Update employee
// employee/:id
router.put('/employee/:id', function(req, res, next) {
  const employeeId = req.params.id;

  const updateEmployee = {
     name         : req.body.name,
     age          : req.body.age,
     position     : req.body.position,
     supervisor   : req.body.supervisor,
     schedule     : req.body.schedule,
  }
  Employee.findOneAndUpdate({_id: employeeId}, updateEmployee, {new: true})
  .then(data => {
    res.send(data)
  })
  .catch( err => {
    res.status(400)
  } )

});



// delete employee
// employee/:id
router.delete('/employee/:id', function (req, res) {
  const employeeId = req.params.id;
  Employee.findOne({_id: employeeId}, function(err, employee) {
    if (err) {
      res.json({"message": "Error when deleting employee"})
    }
    employee.delete()
    .then(data => {
      res.json("Employee deleted")
    })
    .catch(err => {
      res.status(400)
    })
  })
})




module.exports = router;
