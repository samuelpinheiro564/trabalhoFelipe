import Emp from '../Models/Emp'; 
class EmpRepository {
    constructor() {
        this.emps = [];
    }

    addEmp(EmpData) {
        if(this.getAllEmps().length == 0){
        const newEmp = new Emp(EmpData);
        this.emps.push(newEmp);
        return this; 
        }else{
            this.deleteAllEmps();
        }
    }
    getByCnpj(cnpj){
        this.emps = this.emps.find(Emp => Emp.cnpj === cnpj);
        return this;
    }
    getAllEmps() {
        return this.emps;
    }
    deleteEmp(cnpj) {
        this.emps = this.emps.filter(Emp => Emp.cnpj !== cnpj);
        return this; 
    }
    deleteAllEmps() {
        this.emps = [];
        return this;
    }
}

export default EmpRepository;
