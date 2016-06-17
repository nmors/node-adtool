'use strict'

/** Modules **/
const fs = require('fs'),
      child_process = require('child_process')

/** Config **/
const adToolPath = "bin/adtool";


module.exports = {
  
  createUser(){
    
    child_process.exec(adToolPath, function(){
	/** ... **/

    })
  }
  
}


/**

Example usage
$adtool list ou=user,dc=example,dc=com
CN=allusers,OU=user,DC=example,DC=com
OU=finance,OU=user,DC=example,DC=com
OU=administration,OU=user,DC=example,DC=com

$adtool oucreate marketing ou=user,dc=example,dc=com
$adtool useradd jsmith ou=marketing,ou=user,dc=example,dc=com
$adtool setpass jsmith banana
$adtool unlock jsmith
$adtool groupadd allusers jsmith
$adtool attributereplace jsmith telephonenumber 123
$adtool attributereplace jsmith mail jsmith@example.com

**/
