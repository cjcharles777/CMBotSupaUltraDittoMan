var laptops = {
	'linux' : 'linux',
	'mac' : 'mac', 
	'pc' : 'pc',
	'chrome': 'chrome',
	'iphone':'iphone',
	'android':'android'
};

var laptop_options = [];
for(var laptop in laptops)
	laptop_options.push(laptop);
	
var customCommands = {
    name: 'laptop', // This is what the bot will respond to (ie, /beer)
    command: function(options) {
        if(options.pm) 
        {
        	if(laptops[options.arg] == 'undefined' || options.arg == '') 
        	{
				options.cmbot.bot.pm("Invalid argument. Type '/help laptop' for available arguments.", options.userid);
			} 
			else 
			{
				options.cmbot.bot.pm(laptops[options.arg], options.userid);
				options.cmbot.bot.modifyLaptop(laptops[options.arg]);
			}
		}
    },
    modonly: true,
    pmonly: true,
    hide: true,
    acl: true,
    help: 'Set my laptop. Available options: ' + laptop_options.join(', ')
     // 
};

exports.customCommands = customCommands;