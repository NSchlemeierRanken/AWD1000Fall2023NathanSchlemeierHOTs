let str = "";

for (let lcv = 1; lcv <= 100; ++lcv)
{
    if (lcv % 2 !==0){
        str += lcv + " ";
    }
}
document.write(str)