const mongoose=require('mongoose');
const EmployeeSchema=mongoose.Schema({
    EmpName: String,
    designation: String,
    empId: String,
    img_url: String
})
const EmployeeData=mongoose.model('employeeDetail',EmployeeSchema);
module.exports=EmployeeData