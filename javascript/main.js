let Ts=0.001;
let disj1=1, disj2=0;
let gen1=1, gen2=0;
let n1=0, n2=0;
let volt1=0, volt2=0;
let sp_n1=1800, sp_n2=1810;
let theta1=0, theta2=0;
let sp_volt1= 460, sp_volt2 = 0;
let P1, Q1, I1, P2, Q2, I2;
const Pc=1, Qc=0.2;
const P_noLoad = 0, P_fullLoad=1, n_noLoad=2000, n_fullLoad=1800;
const Q_noLoad = 0, Q_fullLoad=0.2, v_noLoad=480, v_fullLoad=460;

let permition_to_close_1 = false;
let permition_to_close_2 = false;

let Sc=0;



setInterval(()=>{
    let ref_volt1, ref_volt2, ref_n1, ref_n2, ref_P1, ref_P2, ref_Q1, ref_Q2;
    sp_volt1 =  getVoltageSP('1');
    sp_volt2 =  getVoltageSP('2');
    sp_n1 = getSpeedSP('1');
    sp_n2 = getSpeedSP('2');


    disj1 = getOnOffStatus('disj1');
    disj2 = getOnOffStatus('disj2');
    gen1 = getOnOffStatus('gen1');
    gen2 = getOnOffStatus('gen2');

    // ******************Intertravamentos ****************
    permition_to_close_1 = false;
    permition_to_close_2 = false;

    let phi = Math.abs(theta2 - theta1)%360;
    let N= 32;
    let n_phi = Math.round(mapRange(phi, 0, 360, 0, N))%N;

    let cond1 = n_phi == 0;
    let cond2 = (Math.abs(volt1-volt2)<15);
    if(disj1==0 && disj2==0){
        if(gen1 > 0){
            permition_to_close_1 = true; 
        }
        if(gen2 > 0){
            permition_to_close_2 = true; 
        }
    } else if(cond1&&cond2){
        if(gen1 > 0){
            permition_to_close_1 = true; 
        }
        if(gen2 > 0){
            permition_to_close_2 = true; 
        }
        permition_to_close_1 = true; 
    }



//    ***************************************************



    if(disj1==0){
        ref_volt1 = sp_volt1;
        ref_n1 = sp_n1;

        n1 = computeVel(n1, ref_n1, gen1);
        P1 = 0;
        Q1=0;
        volt1 = ref_volt1 * (n1/1800);

        I1=0;
        
    }else if(disj2==0){
        if(gen1){
            ref_P1=Pc;
            ref_Q1=Qc;

            ref_n1 = sp_n1 + (n_fullLoad-n_noLoad)/(P_fullLoad-P_noLoad)*ref_P1;
            ref_volt1 = sp_volt1 + (v_fullLoad-v_noLoad)/(Q_fullLoad-Q_noLoad)* ref_Q1;      
    
            n1 = computeVel(n1, ref_n1, gen1);

            volt1 = ref_volt1 * (n1/1800);

            P1 = n1/ref_n1 * ref_P1  * Math.pow(volt1/460,2);
            Q1 = ref_Q1 * Math.pow(volt1/460,2);
            
            I1=computeI(P1,Q1,volt1);

        } else{
            P1=0;
            Q1=0;
            ref_volt1 = 0;
            ref_n1 = 0;

            n1 = computeVel(n1, ref_n1, gen1);
            volt1 = sp_volt1 * (n1/1800);

            I1=0;
        }

    }

    if(disj2==0){
        // ref_P1=0;
        // ref_Q1=0;
        ref_volt2 = sp_volt2;
        ref_n2 = sp_n2;

        n2 = computeVel(n2, ref_n2, gen2);
        P2 = 0;
        Q2=0;
        volt2 = ref_volt2 * (n2/1800);

        I2=0;
        
    }else if(disj1==0){
        if(gen2){
            ref_P2=Pc;
            ref_Q2=Qc;

            ref_n2 = sp_n2 + (n_fullLoad-n_noLoad)/(P_fullLoad-P_noLoad)*ref_P2;
            ref_volt2 = sp_volt2 + (v_fullLoad-v_noLoad)/(Q_fullLoad-Q_noLoad)* ref_Q2;
           
    
            n2 = computeVel(n2, ref_n2, gen2);
            volt2 = ref_volt2 * (n2/1800);

            P2 = n2/ref_n2 * ref_P2 * Math.pow(volt2/460,2);
            Q2 = ref_Q2 * Math.pow(volt2/460,2);
            
    
            I2=computeI(P2,Q2,volt2);

        } else{
            P2=0;
            Q2=0;
            ref_volt2 = 0;
            ref_n2 = 0;

            n2 = computeVel(n2, ref_n2, gen2);
            volt2 = sp_volt2 * (n2/1800);

            I2=0;
        }

    }

    if(disj1==1 && disj2 ==1){
        theta2 = theta1;
        let n = 1/2 * (sp_n1 + sp_n2) + 1/2 * (n_fullLoad-n_noLoad)/(P_fullLoad-P_noLoad) * Pc;
        let volt = 1/2 * (sp_volt1 + sp_volt2) + 1/2 * (v_fullLoad-v_noLoad)/(Q_fullLoad-Q_noLoad) * Qc;

        ref_n1 = n;
        ref_n2 = n;

        ref_volt1 = volt;
        ref_volt2 = volt;

        ref_P1 = P_noLoad  + (P_fullLoad-P_noLoad) / (n_fullLoad-n_noLoad) * (n - sp_n1);

        ref_P2 = P_noLoad  + (P_fullLoad-P_noLoad) / (n_fullLoad-n_noLoad) * (n - sp_n2);

        ref_Q1 = Q_noLoad  + (Q_fullLoad-Q_noLoad) / (v_fullLoad-v_noLoad) * (volt - sp_volt1);
        
        ref_Q2 = Q_noLoad  + (Q_fullLoad-Q_noLoad) / (v_fullLoad-v_noLoad) * (volt - sp_volt2);

        n1 = computeVel(n1, ref_n1, gen2);
        n2 = computeVel(n2, ref_n2, gen2);

        volt1 = ref_volt1 * (n1/1800);
        volt2 = ref_volt2 * (n2/1800);

        P1 = n1/ref_n1 * ref_P1 * Math.pow(volt1/460,2);
        Q1 = ref_Q1 * Math.pow(volt1/460,2);

        P2 = n2/ref_n2 * ref_P2 * Math.pow(volt2/460,2);
        Q2 = ref_Q2 * Math.pow(volt2/460,2);

        I1=computeI(P1,Q1,volt1);
        I2=computeI(P2,Q2,volt2);

        console.log(P1+P2, Q1+Q2);
    }
    



    let pc = P1+P2;
    let qc = Q1+Q2;
    Sc = Math.sqrt(pc*pc + qc*qc)/Math.sqrt(Pc*Pc + Qc*Qc);


},Ts*1000);

function computeVel(n, sp, status){
    let m=1, k=20;
    let F;
    if(status>0){
        F = k * (sp - n);
    } else{
        F= -200*k*m;
    }
    return Math.max(n + F / m * Ts, 0); 
}


function computeI(P,Q,V){
    return 1000*Math.sqrt(P*P + Q*Q)/( Math.sqrt(3) * V);
    
}


