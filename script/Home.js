            const text = document.querySelector('.text');
            const txt  =["嵌入式系统训练基地","欢迎你的加入",]; 
            
            var index=0;
            var xiaBiao= 0;
            var huan = true;
         
            setInterval(function(){
               
                if(huan){      
                    text.innerHTML = txt[xiaBiao].slice(0,++index);
                }
                else{
                    text.innerHTML = txt[xiaBiao].slice(0,index--);
                }
    
                if(index==txt[xiaBiao].length+3)
                {
                    huan = false;
                }
                else if(index<0)
                {
                    index = 0;
                    huan = true;
                    xiaBiao++;
                    if(xiaBiao>=txt.length)
                    {
                        xiaBiao=0; 
                    }
                }
    
            },200)
    