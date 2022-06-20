// Your code here

// Employee record
const createEmployeeRecord = function(testEmployee){
    return {
        firstName : testEmployee[0],
        familyName : testEmployee[1],
        title : testEmployee[2],
        payPerHour : testEmployee[3],
        timeInEvents : [],
        timeOutEvents : []
    };
};

// Employee records
const createEmployeeRecords = (employeesData) => {
    return employeesData.map(testEmployee => {
        return createEmployeeRecord(testEmployee)
    });
};

//Time in event
const createTimeInEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
};

//time out event
const createTimeOutEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
};

//Hours worked on date 
const hoursWorkedOnDate = (employee, onDate) => {
    let inEvent = employee.timeInEvents.find((event) => {
        return event.date === onDate
    })

    let outEvent = employee.timeOutEvents.find((event) => {
        return event.date === onDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

const wagesEarnedOnDate = (employee, onDate) => {
    return hoursWorkedOnDate(employee, onDate) * employee.payPerHour
};

function allWagesFor(record){
    let datesPresent = []
    let wages = 0
    record.timeOutEvents.forEach((timeOut)=>{
        datesPresent.push(timeOut.date)
    });
    datesPresent.forEach((date) => {
        wages = wages + wagesEarnedOnDate(record, date)
    });
    return wages;
};

const calculatePayroll = () => {
    return
};