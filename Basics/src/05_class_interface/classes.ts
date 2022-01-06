class Department {
    
    protected employees: string[] = [];
    
    constructor(private readonly id: number, public name: string) {
        this.id = id;
        this.name = name;
    }
    
    describe() {
        console.log("department: " + this.name);
    }
    
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    
    showEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}



class ITDepartment extends Department {
    constructor(id: number, public name: string, public admins: string[]) {
        super(id, name);
        this.admins = admins;
    }
}


class AccountingDepartment extends Department {

    private lastReport: string;

    // getter
    get mostRecentReport() {
        if (this.lastReport) return this.lastReport;
        throw new Error("No report found");
    }

    // setter
    set mostRecentReport(report: string) {
        this.reports.push(report);
        this.lastReport = report;
    }

    constructor(id: number, public name: string, public reports: string[]) {
        super(id, name);
        this.reports = reports;
        this.lastReport = reports[0];
    }
}


const department = new Department(13, "Docker");
department.describe();
department.addEmployee("Bingo");
department.showEmployeeInfo();


const itDepartment = new ITDepartment(14, "Kubernetes", ["kublet1", "kublet2"]);
itDepartment.describe();
console.log(itDepartment.admins);


const accounting = new AccountingDepartment(15, "Accountancy", ["Sample 1 report", "Sample 2 report"]);
console.log(accounting.mostRecentReport);

accounting.mostRecentReport = "Sample 3 report";
console.log(accounting.mostRecentReport);