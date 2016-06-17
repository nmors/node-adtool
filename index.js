'use strict'

/** Modules **/
const fs = require('fs'),
      child_process = require('child_process');

/** Config **/
const adToolPath = './bin/linux/bin/adtool',
      defaultConfig = {
	
      };

let cfg = defaultConfig;

module.exports = {

  config(config){
    if(config){
      cfg = config;
    }
    return cfg;
  },
  
  createUser(username, path){
    child_process.exec(adToolPath + ' useradd ' + username + ' ' + path, function(){
	/** ... CREATE USER **/
    })
  },

  setPassword(username, password){
    child_process.exec(adToolPath + ' setpass ' + username + ' ' + password, function(){
	/** ... Set Password **/
    })
  },

  unlockUser(username){
    child_process.exec(adToolPath + ' unlock ' + username, function(){
	/** ... Unlock User Account**/
    })
  },

  addUserToGroup(username, group){
    child_process.exec(adToolPath + ' groupadd ' + group + ' ' + username, function(){
	/** ... Add user to group **/
    })
  },

  setAttrib(username, attribute, value){
    child_process.exec(adToolPath + ' attributereplace ' + username + ' ' + attribute + ' ' + value, function(){
	/** ... Set Attribute **/
    })
  },

  searchObjects(path){
    child_process.exec(adToolPath + ' list ' + path, function(){
	/** ... AD List **/
    })
  },

  createOU(name, path){
    child_process.exec(adToolPath + ' oucreate ' + name + ' ' + path, function(){
	/** ... Create OU **/
    })
  },

  
}


