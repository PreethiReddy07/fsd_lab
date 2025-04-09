// Question 12: Write a Node.js script using the os module to display the
// following system information: The hostname of the machine. The platform of
// the system (e.g., Linux, Darwin, Windows). The system's uptime (in seconds).
// The total memory available (in MB) and free memory (in MB).

const os=require('os');
function getMemoryInfo(){
    console.log("hostName :",os.hostname());
    console.log("platform:",os.platform());
    console.log("uptime:",os.uptime());
    console.log(`Total Memory: ${os.totalmem()} `)
    console.log(`Free Memory: ${os.freemem()} `)
}
getMemoryInfo();