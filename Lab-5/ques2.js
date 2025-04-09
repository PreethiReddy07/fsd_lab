// Question 1: Program to track and display the current memory usage and
// calculate the percentage of free memory for every 5 seconds.


const os=require('os');
function getMemoryInfo(){
    setInterval(()=>{
    const totalMem=os.totalmem();
    const freeMem=os.freemem();
    const usedMem=totalMem-freeMem;
    const memUsage=(usedMem/totalMem)*100;
    const freeMemPer=(freeMem/totalMem)*100;
    console.log(`Current Memory Usage:${memUsage} and Free Memory Percentage:${freeMemPer}`)
    },5000);
}
getMemoryInfo();