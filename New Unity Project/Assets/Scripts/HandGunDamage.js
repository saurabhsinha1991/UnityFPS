var DamageAmount : int = 5;
var TargetDistance : float;
var AllowedRange : float = 15;

function update(){
	if(Input.GetButtonDown("Fire1")) {

		var Shot : RaycastHit;
			if(Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), Shot)) {
				TargetDistance = Shot.Distance;
					if( TargetDistance < AllowedRange ) {
						Shot.transform.SendMessage("DeductPoints", DamageAmount);
					}
			}
	}
}