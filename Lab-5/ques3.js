// Question 2: Program to log the system uptime in a user-friendly format (days,
//     hours, minutes).
    
const os=require('os');
const uptime=os.uptime();
console.log(uptime);
const days = Math.floor(uptime / (24 * 3600));
const hours = Math.floor((uptime % (24 * 3600)) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
console.log(`System uptime: ${days} days, ${hours} hours, ${minutes} minutes`);
 