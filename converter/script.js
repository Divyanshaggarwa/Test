
let input = document.getElementById('int');
let display = document.getElementById('dis');
let it = document.getElementById('id')
let s = document.getElementById('di')
let hi = document.getElementById('si')
let  i = document.getElementById('yi')
let  is = document.getElementById('is')
var sel = document.getElementById('selh');


input.oninput=function (){

  if(sel.value=='km'){

  let fi = this.value*1000
  let x = this.value*100000
  let y = this.value*1000000
  let z = this.value*3280.84
  let c = this.value*39370.10
  let u = this.value*1
  display.value = fi
  it.value = x
  s.value = y
  hi.value = z
  i.value = c
  is.value = u

    }
    
  }
  
  
  sel.onchange = function(){

    if(sel.value=='m'){

      let ui = input.value/1000
      let we = input.value*1
      let th = input.value*100
      let xy = input.value*1000
      let yu = input.value*3.28024
      let xx = input.value*39.37

      is.value=ui
      display.value = we
      it.value =th 
      s.value=xy
      hi.value=yu
      i.value=xx  
    }

    if(sel.value =='cm'){
      
      let yy = input.value/100000
      let rr = input.value/100
      let qq = input.value*1
      let ee = input.value*10
      let aa = input.value/3048
      let zz = input.value/2.54

      is.value = yy
      display.value=rr
      it.value=qq
      s.value=ee
      hi.value=aa
      i.value=zz
    }

    if (sel.value == 'mm'){

      let nn = input.value/1000000
      let ry = input.value/1000
      let oo = input.value/10
      let ww = input.value*1
      let bb = input.value/304.8
      let jj = input.value/25.4

      is.value = nn
      display.value=ry
      it.value=oo
      s.value=ww
      hi.value=bb
      i.value=jj

    }

    if(sel.value=='f'){

      let qw = input.value/3281
      let sd = input.value/3.281
      let kl = input.value*30.48
      let sc = input.value*304.8
      let rt = input.value*1
      let nb = input.value*12

      is.value=qw
      display.value=sd
      it.value=kl
      s.value=sc
      hi.value=rt
      i.value=nb

    }

    if(sel.value=='i'){

      let li = input.value/39370
      let ri = input.value/39.37
      let gh = input.value*2.54
      let ty = input.value*25.4
      let ry = input.value/12
      let sn = input.value*1

      is.value=li
      display.value=ri
      it.value=gh
      s.value=ty
      hi.value=ry
      i.value=sn
    }

  }
  
  
let inp = document.getElementById('tx')
let d = document.getElementById('kg')
let u = document.getElementById('hf')
let r = document.getElementById('po')
let selg=document.getElementById('sna')


inp.oninput=function(){

  if(selg.value=='kg'){

    let g = inp.value*1
    let p = inp.value*1000
    let k = inp.value*2.2046

    d.value = g
    u.value = p 
    r.value = k
  }
  
}

selg.onchange = function(){

  if(selg.value=='g'){
    let lp = inp.value*1000
    let kl = inp.value*1
    let bn = inp.value/453.6

    d.value=lp
    u.value = kl
    r.value=bn
  }

  if(selg.value=='lb'){
    let vb = inp.value/2.205
    let up = inp.value*453.6
    let uk = inp.value*1

    d.value = vb 
    u.value = up
    r.value = uk 
  }
}


let input2 = document.getElementById('lis')
let doc = document.getElementById('us')
let uid = document.getElementById('ink')
let use = document.getElementById('night')
let selk = document.getElementById('tem')


input2.oninput=function(){

  if(selk.value=='cel'){
    let ll = input2.value*1
    let kk = input2.value*9/5+32
    let tt = input2.value/1+273.15
    
    doc.value=ll
    uid.value=tt
    use.value=kk
  }
  
}

selk.onchange=function (){
  if(selk.value=='kel'){
    let ii = input2.value/1-273.15
    let kr = input2.value*1
    let tr = input2.value/1-273.15*9/5+32
    
    doc.value=ii
    uid.value=kr
    use.value=tr
  }

  if(selk.value=='fra'){
    let pp =input2.value/1-32*5/9
    let vv =input2.value/1-32*5/9+273.15
    let ff = input2.value*1
    
    doc.value=pp
    uid.value=vv
    use.value=ff
  }
}

let into=document.getElementById('lens')
let iu=document.getElementById('toh')
let au=document.getElementById('shy')
let dis3=document.getElementById('kkr')
let submit = document.getElementById('pac')

submit.onclick=function(multiply){
  let am = into.value 
  let cj = iu.value
  let hk = au.value
  let dj = am*cj*hk
  dis3.value=dj
}

let side1=document.getElementById('side1')
let side2=document.getElementById('side2')
let pro=document.getElementById('product')
let submit2=document.getElementById('submit2')

submit2.onclick=function(multiply){
  let sid=side1.value
  let sid2=side2.value
  let prod=sid*sid2
  product.value=prod
}

let length=document.getElementById('length')
let breadth=document.getElementById('breadth')
let areaof=document.getElementById('areaof')
let submit3=document.getElementById('submit3')

submit3.onclick=function(multiply){
  let leng=length.value 
  let brea=breadth.value
  let arear=leng*brea
  areaof.value=arear
}