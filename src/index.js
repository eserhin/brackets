module.exports = function check(str, bracketsConfig) {
	var config=[];
    for(var q=0;q<bracketsConfig.length;q++){
    	config.push(bracketsConfig[q][0]+bracketsConfig[q][1]);
    }
    while(config.some(q => str.includes(q))) {
        for(var q = 0; q < config.length; q++) {
                    str = str.replace(config[q],"")
        }
    }
    return !str.length;
}