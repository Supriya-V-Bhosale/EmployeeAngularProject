import { Department } from "./depatment";

export class Employee {
        empId:number;
        empName: string='';
        designation :string =''
        dateOfJoining:Date ;
        salary:number;
        phoneNumber: string='';
        deptId: number;
        isActive:boolean=true;
        //Object Oriented
        department:Department=new Department();
         
}
