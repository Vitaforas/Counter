function MatPo_Weiterleitung(Adresse, Sekunden)
{
	InSekunden = Sekunden + '000';
	ZuAdresse = "window.location.href='"+Adresse+"'";
  window.setTimeout(ZuAdresse, InSekunden);
}	

function MatPo_Aus_Ein_Blenden (FeldAusblenden, FeldEinblenden) {  
  FeldAusblenden = document.getElementById(FeldAusblenden);
	FeldAusblenden.style.display = 'none';
	
  FeldEinblenden = document.getElementById(FeldEinblenden);
	FeldEinblenden.style.display = 'block';
}
var CoundownZeit = 'start';
function MatPo_Countdown(CoundownStart)
{
	var FeldWartenText = document.getElementById('warte_text');
	if (CoundownZeit == 'start')
	{
		CoundownZeit = CoundownStart;
		setTimeout("MatPo_Countdown('play')", 1000);
	}
	else
	{
		--CoundownZeit;
		FeldWartenText.innerHTML = CoundownZeit;
		
	  if (CoundownZeit > 0)
	  {
	  	setTimeout("MatPo_Countdown('play')", 1000);
	  }
	  else
	  {
	  	document.getElementById('Warten').style.display = 'none';
	  	document.getElementById('Downloaden').style.display = 'block';
	  }
  }
}

