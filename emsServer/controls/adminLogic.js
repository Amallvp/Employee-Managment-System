const { json } = require("express")
const admins = require("../models/adminModel")
const employees = require("../models/employeeCollection")



const adminLogin = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json('Datas are required')
    }

    else {
        try {
            const admin = await admins.findOne({ email, password })
            if (admin) {
                res.status(200).json('Login Successfull')
            } else {
                res.status(404).json('Invalid credentials')
            }

        }
        catch {
            res.status(400).json('Error in Connection')
        }
    }

}



//employees addition logic

const addEmployee = async (req, res) => {


    const profile = req.file.filename
    const { fname, lname, email, mobile, gender, status, location } = req.body
    if (!fname || !lname || !email || !mobile || !gender || !status || !location || !profile) {
        res.status(404).json("All Inputs Required")
    }
    else {

        try {
            let preEmployee = await employees.findOne({ email })
            if (preEmployee) {
                res.status(404).json("Employee Already Exist")
            }
            else {
                let newEmployee = new employees({
                    fname, lname, email, mobile, gender, status, location, profile
                })
                await newEmployee.save()
                res.status(200).json(fname)
                // console.log(newEmployee);
            }
        }
        catch {
            res.status(400).json('Error in Connection')
        }

    }
}



const getAllEmployees = async (req, res) => {

    // access query param from Api

    const searchKey = req.query.search

    // regular expression queries

    const query = {
        fname: { $regex: searchKey, $options: 'i' }
    }

    try {
        const result = await employees.find(query)
        res.status(200).json(result)

    }

    catch {
        res.status(400).json('Error in Connection')
    }
}



const getEmployee = async (req, res) => {

    const { id } = req.params

    try {
        const emp = await employees.findOne({ _id: id })

        if (emp) {
            res.status(200).json(emp)
        }
        else {
            res.status(404).json('Connection Error')
        }

    }

    catch {
        res.status(400).json('Error in Connection')
    }
}

const deleteEmployee = async (req, res) => {
    const { id } = req.params
    try {
        deletedData = await employees.findByIdAndDelete({ _id: id })
        if (deletedData) {
            res.status(200).json(deletedData.fname)
        }
        else {
            res.status(404).json("Employee Not Found")
        }

    }

    catch {
        res.status(400).json('Error in Connection')
    }
}


const editEmployee = async (req, res) => {

    const { id } = req.params   // id to get emp details


    const { fname, lname, email, mobile, gender, status, location, user_profile } = req.body    //full info of emp

    const profile = req.file ? req.file.filename : user_profile  // for image 



    // try{
          emp = await employees.findOne({ _id: id })
        if (emp) {

            emp.fname = fname
            emp.lname = lname
            emp.email = email
            emp.gender = gender
            emp.mobile = mobile
            emp.status = status
            emp.location = location
            emp.profile = profile
            await emp.save()
            res.status(200).json(emp)
    
        }
        else {
            res.status(404).json('Employee Not found')
        }

    // }
    // catch{

    //     res.status(400).json('Error in Connection')
    // }

}

const filterEmployee=async (req,res)=>{

   const{filterData}= req.query        // chances to get employees are active or inactive

 const femployee= await employees.find({status:filterData})
   res.status(200).json(femployee)
}


module.exports = { adminLogin, addEmployee, getAllEmployees, getEmployee, deleteEmployee, editEmployee ,filterEmployee}
