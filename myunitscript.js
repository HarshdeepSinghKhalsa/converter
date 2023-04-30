var feet=document.getElementById('feet');
var inch=document.getElementById('inch');
var kmeter=document.getElementById('kmeter');
var meter=document.getElementById('meter');
var kmeter=document.getElementById('hour');
var meter=document.getElementById('minut');
feet.addEventListener('input',function(){
let f=this.value;
let i=f*12;
inch.value=i;
});
inch.addEventListener('input',function(){
let i=this.value;
let f =i/12;
if(!Number.isInteger(f)){
    f=f.toFixed(2);
    feet.value=f;
}
else{
    feet.value=f;
}

feet.value=f;
});
kmeter.addEventListener('input',function(){
    let f=this.value;
    let i=f*1000;
    meter.value=i;
    });
    meter.addEventListener('input',function(){
        let i=this.value;
        let f =i/1000;
        if(!Number.isInteger(f)){
            f=f.toFixed(3);
            kmeter.value=f;
        }
        else{
            kmeter.value=f;
        }
        
        
        });
hour.addEventListener('input',function(){
            let f=this.value;
            let i=f*60;
            minut.value=i;
            });
 minut.addEventListener('input',function(){
                let i=this.value;
                let f =i/60;
                if(!Number.isInteger(f)){
                    f=f.toFixed(2) ;
                    hour.value=f;
                }
                else{
                    hour.value=f;
                }
                
                
                });