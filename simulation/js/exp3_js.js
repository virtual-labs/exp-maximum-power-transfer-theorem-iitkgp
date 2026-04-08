var w,check=0,tab=1;
var f,w,v,xls, xcs, x1, rs, xll, xcl, x2, rl, i,pt,pl,t,e;
/////////////////////////////// The code starts from here/////////////////////////////////////

	function changeImage() 
	{
		var image = document.getElementById('myImage');
		var im1= document.getElementById('v');
		var im2= document.getElementById('f');
		var im3= document.getElementById('rs');
		var im4= document.getElementById('ls');
		var im5= document.getElementById('cs');
		
		if (image.src.match("s1")) {
			image.src = "./images/s2.png";
			im1.setAttribute('readonly', 'readonly'); im2.setAttribute('readonly', 'readonly'); 
			im3.setAttribute('readonly', 'readonly'); im4.setAttribute('readonly', 'readonly'); im5.setAttribute('readonly', 'readonly');
			$('#lsw').attr('disabled', true);
			$('#csw').attr('disabled', true);
			if(tab==1)
			{
			document.getElementById('rl').setAttribute('readonly', 'readonly'); document.getElementById('ll').removeAttribute('readonly'); 
			document.getElementById('cl').removeAttribute('readonly');
			}
			else if(tab==2)
			{
			document.getElementById('rl').removeAttribute('readonly'); document.getElementById('ll').setAttribute('readonly', 'readonly'); 
			document.getElementById('cl').setAttribute('readonly', 'readonly');	
			}
			else if(tab==3)
			{
			document.getElementById('rl').removeAttribute('readonly'); document.getElementById('ll').removeAttribute('readonly'); 
			document.getElementById('cl').removeAttribute('readonly');	
			}
			check=1;
			execute_ckt();
		} else {
			image.src = "./images/s1.png"; cf3=0;
			im1.removeAttribute('readonly'); im2.removeAttribute('readonly'); 
			im3.removeAttribute('readonly'); im4.removeAttribute('readonly'); im5.removeAttribute('readonly');
			document.getElementById('rl').removeAttribute('readonly'); document.getElementById('ll').removeAttribute('readonly'); 
			document.getElementById('cl').removeAttribute('readonly');
			document.f1.v1.value = 0; document.f1.v2.value = 0; document.f1.v3.value = 0;
			document.f1.v4.value = 0; document.f1.v5.value = 0; document.f1.v6.value = 0;
			$('#lsw').attr('disabled', false); $('#csw').attr('disabled', false);
			perform_meter(); check=0;
		}
	}
	function execute_ckt()
	{
		if (check==1)
		{
			f=parseFloat(document.getElementById('f').value);
			w= 2*3.14159265358979*f;
			v = parseFloat(document.getElementById('v').value) / 38.33; 
			xcs =(-1 / (w * parseFloat(document.getElementById('cs').value)))*(!($("#csw").is(":checked"))) ;
			xls =((w * parseFloat(document.getElementById('ls').value))) * (!($("#lsw").is(":checked")));
			x1 = xcs + xls;
			rs = parseFloat(document.getElementById('rs').value);
			
			xcl =(-1 / (w * parseFloat(document.getElementById('cl').value)))*(!($("#clw").is(":checked"))) ;
			xll =((w * parseFloat(document.getElementById('ll').value))) * (!($("#llw").is(":checked")));
			x2 = xcl + xll;
			rl = parseFloat(document.getElementById('rl').value);
			
			i =  (v)/ Math.sqrt(((rs+rl)*(rs+rl))+((x1+x2)*(x1+x2)));
			var xyza=i*rs;
			var xyzb=i*xls;
			var xyzc=i*xcs;
			var xyzd=i*rl;
			var xyze=i*xll;
			var xyzf=i*xcl;
			document.f1.v1.value = xyza.toPrecision(5);
			document.f1.v2.value = xyzb.toPrecision(5);
			document.f1.v3.value = xyzc.toPrecision(5);
			document.f1.v4.value = xyzd.toPrecision(5);
			document.f1.v5.value = xyze.toPrecision(5);
			document.f1.v6.value = xyzf.toPrecision(5);
			perform_meter();
			pt = ((v*v)*(rs+rl)) / (((rs+rl)*(rs+rl))+((x1+x2)*(x1+x2)));
			pl = ((pt*rl)/(rs+rl));
			t = pl/pt;
			e = t*100;
		}
	}
function simulate_ckt(aa)
{
	if(check==1 && aa==1)
	{
		document.f1.x11.value = x1.toPrecision(5);
		document.f1.x21.value = x2.toPrecision(5);
		document.f1.p1.value = pl.toPrecision(5);
		document.f1.p11.value = e.toPrecision(5);
	}
	else if(check==1 && aa==2)
	{
		document.f1.ra2.value = (Math.sqrt((rs*rs) + ((x1+x2)*(x1+x2)))).toPrecision(5);
		document.f1.rl2.value = rl.toPrecision(5);
		document.f1.p2.value = pl.toPrecision(5);
		document.f1.p22.value = e.toPrecision(5);
	}
	else if(check==1 && aa==3)
	{
		document.f1.rs3.value = rs.toPrecision(5);
		document.f1.rl3.value = rl.toPrecision(5);
		document.f1.x13.value = x1.toPrecision(5);
		document.f1.x23.value = x2.toPrecision(5);
		document.f1.p3.value = pl.toPrecision(5);
		document.f1.p33.value = e.toPrecision(5);
	}
	else
	{
		Alert.render("Please switch on the Circuit first to get the readings.");
	}
}
	
	
	
	
function perform_meter()
{
	perform_meter1();
	perform_meter2();
	perform_meter3();
	perform_meter4();
	perform_meter5();
	perform_meter6();
}
function ckt_off()
{
	var image = document.getElementById('myImage');
	var im1= document.getElementById('v');
	var im2= document.getElementById('f');
	var im3= document.getElementById('rs');
	var im4= document.getElementById('ls');
	var im5= document.getElementById('cs');
	image.src = "./images/s1.png"; cf3=0;
	im1.removeAttribute('readonly'); im2.removeAttribute('readonly'); 
	im3.removeAttribute('readonly'); im4.removeAttribute('readonly'); im5.removeAttribute('readonly');
	document.getElementById('rl').removeAttribute('readonly'); document.getElementById('ll').removeAttribute('readonly'); 
	document.getElementById('cl').removeAttribute('readonly');
	document.f1.v1.value = 0; document.f1.v2.value = 0; document.f1.v3.value = 0;
	document.f1.v4.value = 0; document.f1.v5.value = 0; document.f1.v6.value = 0;
	$('#lsw').attr('disabled', false); $('#csw').attr('disabled', false);
	perform_meter(); check=0;
	document.f1.x11.value = '';
		document.f1.x21.value = '';
		document.f1.p1.value = '' ;
	document.f1.ra2.value = '';
		document.f1.rl2.value = '';
		document.f1.p2.value = '';
	document.f1.rs3.value = '';
		document.f1.rl3.value = '';
		document.f1.x11.value = '';
		document.f1.x21.value = '';
		document.f1.p3.value = '';
	document.f1.p11.value = '' ;
	document.f1.p22.value = '' ;
	document.f1.p33.value = '' ;
}


