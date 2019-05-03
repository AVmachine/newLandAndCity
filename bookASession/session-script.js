var sum;
sum = 130;
var base = [130, 160];
var twilight = [0, 100];
var drone = [0, 75, 125];
var virtual = [0, 150];

$('#price').html("$" + sum);

$('#packageOption').on('change',newSum);
$('#twilightOption').on('change', newSum);
$('#droneOption').on('change', newSum);
$('#virtualOption').on('change', newSum); 



function newSum(){
	var $bval = $('#packageOption option:selected').val();
	var $tval = $('#twilightOption option:selected').val();
	var $dval = $('#droneOption option:selected').val();
	var $vval = $('#virtualOption option:selected').val();

	var btot = base[$bval];
	var ttot = twilight[$tval];
	var dtot = drone[$dval];
	var vtot = virtual[$vval];

	sum = btot + ttot + dtot + vtot;
	$('#price').html("$" + sum);

	
}



