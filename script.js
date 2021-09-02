setInterval(() => {
    mainselect = document.getElementById('mains')
    tempall = document.getElementById('tempfull')
    lengthall = document.getElementById('lengthfull')
    massall = document.getElementById('massfull')


    if (mainselect.value == 'length1') {


        lengthall.style.display = 'block'
        tempall.style.display = 'none'
        massall.style.display = 'none'
        
        
        
        lengthselect = document.getElementById('lengthselect')
        inkm = document.getElementById('inkm')
        
        ininch = document.getElementById('ininch')
        incm = document.getElementById('incm')
        infeet = document.getElementById('infeet')
        inmeter = document.getElementById('inmeter')
        
        
        
        
        if (lengthselect.value == 'meter') {
            inkm.value = inmeter.value / 1000
            incm.value = inmeter.value * 100
            ininch.value = (inmeter.value * 39.3701)
            infeet.value = inmeter.value * 3.28084
            
            inmeter.readOnly = false;
            inkm.readOnly = true;
            ininch.readOnly = true;
            infeet.readOnly = true;
            incm.readOnly = true;
            // console.log('it mmmmme sulavv made by')
            
            
        }
        else if (lengthselect.value == 'CM') {
            inmeter.value = incm.value / 100
            inkm.value = inmeter.value / 1000
            ininch.value = inmeter.value * 39.3701
            infeet.value = inmeter.value * 3.28084
            
            inmeter.readOnly = true;
            inkm.readOnly = true;
            ininch.readOnly = true;
            infeet.readOnly = true;
            incm.readOnly = false;
        }
        else if (lengthselect.value == 'Inch') {
            inmeter.value = ininch.value / 39.3701
            inkm.value = inmeter.value / 1000
            incm.value = inmeter.value * 100
            infeet.value = ininch.value / 12
            
            
            inmeter.readOnly = true;
            inkm.readOnly = true;
            ininch.readOnly = false;
            infeet.readOnly = true;
            incm.readOnly = true;
            
        }
        else if (lengthselect.value == 'Feet') {
            inmeter.value = infeet.value / 3.28084
            inkm.value = inmeter.value / 1000
            incm.value = inmeter.value * 100
            ininch.value = infeet.value * 12
            console.log('hhhhiii')
            
            
            inmeter.readOnly = true;
            inkm.readOnly = true;
            ininch.readOnly = true;
            infeet.readOnly = false;
            incm.readOnly = true;
            
        }
        
        else if (lengthselect.value == 'km') {
            inmeter.value = inkm.value * 1000
            incm.value = inmeter.value * 100
            ininch.value = inmeter.value * 39.3701
            infeet.value = (inmeter.value * 3.28084)
            
            inmeter.readOnly = true;
            inkm.readOnly = false;
            ininch.readOnly = true;
            infeet.readOnly = true;
            incm.readOnly = true;
        }
        
        
        
        
    }
    else if (mainselect.value == 'temp2') {
        
        lengthall.style.display = 'none'
        massall.style.display = 'none'
        tempall.style.display = 'block'
        
        
        
        
        tempselect = document.getElementById('tempselect')
        inkelvin = document.getElementById('inkelvin')
        
        incel = document.getElementById('incel')
        infer = document.getElementById('infer')
        
        if (tempselect.value == 'FR') {
            incel.value = (infer.value - 32) / 1.8
            inkelvin.value = (infer.value - 32) * 5 / 9 + 273.15
            
            
            incel.readOnly = true;
            inkelvin.readOnly = true;
            infer.readOnly = false;
            // console.log('it mmmmme sulavv made by')
            
            
        }
        else if (tempselect.value == 'Cl') {
            infer.value = (incel.value * 9 / 5) + 32
            inkelvin.value = (incel.value * 1) + 273.15
            
            
            incel.readOnly = false;
            inkelvin.readOnly = true;
            infer.readOnly = true;
            // console.log('it mmmmme sulavv made by')
            
            
        }
        else if (tempselect.value == 'KL') {
            incel.value = 273.15 - (inkelvin.value * 1)
            infer.value = (incel.value * 9 / 5) + 32
            
            
            incel.readOnly = true;
            inkelvin.readOnly = false;
            infer.readOnly = true;
            // console.log('it mmmmme sulavv made by')
            
            
        }
        
        
    }
    
    
    
    
    
    else if (mainselect.value == 'mass3') {
        
        lengthall.style.display = 'none'
        tempall.style.display = 'none'
        massall.style.display = 'block'
        
        
        
        
        
        
        
        
        massselect = document.getElementById('massselect')
        inkg = document.getElementById('inkg')
        
        ingr = document.getElementById('ingr')
        inpd = document.getElementById('inpd')
        inou = document.getElementById('inou')
        
        if (massselect.value == 'KG') {
           

            ingr.value = inkg.value*1000
            inpd.value = inkg.value*2.20462262185
            inou.value = inpd.value*16 


            ingr.readOnly = true;
            inpd.readOnly = true;
            inou.readOnly = true;
            inkg.readOnly = false;
            // console.log('it mmmmme sulavv made by')


        }
       else if (massselect.value == 'GR') {
           

            inkg.value = ingr.value/1000
            inpd.value = inkg.value*2.20462262185
            inou.value = inpd.value*16 


            ingr.readOnly = false;
            inpd.readOnly = true;
            inou.readOnly = true;
            inkg.readOnly = true;
            // console.log('it mmmmme sulavv made by')


        }
       else if (massselect.value == 'PD') {
           

           inkg.value = inpd.value*2.20462262185
           ingr.value = inkg.value*1000
            inou.value = inpd.value*16 


            ingr.readOnly = true;
            inpd.readOnly = false;
            inou.readOnly = true;
            inkg.readOnly = true;
            // console.log('it mmmmme sulavv made by')


        }
       else if (massselect.value == 'OU') {
           

           inpd.value = inou.value*16 
           inkg.value = inpd.value*2.20462262185
           ingr.value = inkg.value*1000


            ingr.readOnly = true;
            inpd.readOnly = true;
            inou.readOnly = false;
            inkg.readOnly = true;
            // console.log('it mmmmme sulavv made by')


        }
       
    }
}, 1);