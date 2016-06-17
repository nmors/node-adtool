'use strict'

/** Modules **/
const fs = require('fs'),
      child_process = require('child_process');

/** Config **/
const adToolPath = './bin/linux/bin/adtool';


module.exports = {
  
  createUser(){
    child_process.exec(adToolPath + ' useradd', function(){
	/** ... CREATE USER **/
    })
  }

  setPassword(){
    child_process.exec(adToolPath + ' setpass', function(){
	/** ... Set Password **/
    })
  }

  unlockUser(){
    child_process.exec(adToolPath + ' unlock', function(){
	/** ... Unlock User Account**/
    })
  }

  addUserToGroup(){
    child_process.exec(adToolPath + ' groupadd', function(){
	/** ... Add user to group **/
    })
  }

  setAttribute(){
    child_process.exec(adToolPath + ' attributereplace', function(){
	/** ... Set Attribute **/
    })
  }

  searchObjects(){
    child_process.exec(adToolPath + ' list', function(){
	/** ... AD List **/
    })
  }

   createOU(){
    child_process.exec(adToolPath + ' oucreate', function(){
	/** ... Create OU **/
    })
  }

  
}



/**
  ---------------
   Example usage
  ---------------
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
