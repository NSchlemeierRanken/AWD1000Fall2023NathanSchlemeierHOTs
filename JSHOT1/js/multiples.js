let str = "";

for (let lcv = 1; lcv <= 100; ++lcv)
{
   // str += lcv + " ";
    if (lcv % 15 ==0){
        str += lcv + " ";
    }
}
document.write(str);