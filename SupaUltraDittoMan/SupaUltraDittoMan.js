var cmbot = require('cmbot');
var supaUltraDittoMan = new cmbot({
    // This will put the settings & dj files in the same directory where this script is
    settings_file: __dirname + '/settings.json', 
    dj_file: __dirname + '/djs.json',

    bot: {
        auth: 'LvcfeHHhyjFSaqGgYdgrcUID',
        userid: '51a89a01aaa5cd6281cbaaea',
        roomid: '4e0c976814169c30e7004cc4'
    },
    modules_directory: __dirname + '/modules',
    autoload_modules: true, // If set to true, scans the modules_directory for any .js files and loads any custom commands/events they contain
    queue_enabled: true, // Set to false to never use the queue.
    autodj: true, // Automatically DJ if 2 spots open up.
    snag_threshold: 4, // How many votes a song must get for the bot to add it to it's queue.
    set_limit: 5, // How many songs each person can play before they have to step down from the decks. Set to false for unlimited.
    // If either of the following are set to false, only awesome for the other. If both are set to false, never autobop. If both are set, autobop for whichever is lowest.
    autobop_threshold_number: 5, // How many other users must awesome before the bot awesomes
    autobop_threshold_percentage: 20, // The percentage of the room's population that must awesome before the bot awesomes
    master_userid: ['4e0c97e2a3f751467d1265af'], // Who runs the bot should have extra privileges. Put your userid here. Can be a single userid (a string) or an array of them.
    ffa: [2], // Array of days of the week for free for all. Sunday = 0, Monday = 1, etc. Set to false for none.
    ffa_text: 'It\'s Free For All Day! No Queue today.', // The bot will display this when someone tries to manipulate or show the queue on an FFA day. 
    timezone: 'CST', // The default timezone for modpm
    modpm_superusers: true, // Set to false to exclude superusers from modpm
    allow_mobile_djs: true, // Set to false to require users to be whitelisted in order to DJ from a mobile device (mods are exempt)
    lastfm: {
        enabled: false,
        username: 'dj708',
        password: '7d0j8',
        api_key: '84f64c67f681c264b77659ddd90ad04f',
        api_secret: '8f3961f2e563fe930e468105cf899a8f',
        session_key: false,
        earliest_scrobble: '' // If you want /plays to add that the number of plays shown is from the date of your first scrobble, put it here, and it will append it ("since _____")
    },
    scrobble: true, // Set to false to not have the bot scrobble tracks to last.fm
    playsMode: 'lastfm', // use either 'lastfm' or 'mysql' or 'sqlite'
    songkick: {
        api_key: 'ntoMOPxHGAtz9CNE' // Get an API key here: http://www.songkick.com/developer/
    },
    google: {
        url_shorten_api_key: 'AIzaSyCgS_W9UZYBhl3d8cLxxPYo1IaX6WzwJbc' // Go ahead and use this api key
    },
    mysql: {
        enabled: false, // Change to true and fill out details below to enable mysql logging of song plays
        host: 'donkeigy.endofinternet.net',
        database: 'DittoBotNation',
        user: 'dj708',
        password: '7d0j8'
    },
    sqlite: {
        enabled: false, // Set to true to log all song plays to a sqlite database
        file: __dirname + '/mybot.db'
    },

    /*
     * Messages:
     * This should be an array of text that the bot will say in the chat room periodically, such as reminding 
     * users of the rules, how the queue works, etc.
     */
    messages: [
        'Welcome to Sup Home! Let\'s play some Music!'
    ],

    /*
     * Sets how often the messages should display, in minutes. After the bot starts up, it waits the interval time,
     * then speaks the first message (in the array above) out into chat. It then waits the interval time again until 
     * displaying the next message in the array (if there is one). So, the amount of time between each time a 
     * specific message is displayed is dependent on both the message interval (defined below) and the number of 
     * different messages in the array. If there are two messages, and the interval is 15 minutes each message 
     * will be displayed every 30 minutes - the first one 15 minutes after the bot starts, and the next one 15 
     * minutes later, then the first one in another 15 minutes, etc.
     */
    message_interval: 15, // Number of minutes between each informational message

    // index of which messages should be hidden when it's FFA (free for all) mode (if the queue is disabled, 
    // this setting doesn't do anything - every message will display)
    messages_hide_ffa: [], 

    /*
     * The first time a user dj's in your room, you can have the bot PM them an introductory message, 
     * for instance to remind them of what type of music is welcome in the room. to disable, just set this to false.
     */
    new_dj_message: 'Whatever you play.... Make it hot.',

    twitter: {
        consumer_key: 'xxxx',
        consumer_secret: 'xxxx',
        access_token_key: 'xxxx',
        access_token_secret: 'xxxx',
        tweet_songs: false, // Set this to true to make the bot tweet each song play
        tweet_text: '%djname% is spinning \'%song%\' by %artist% in the %roomname%: %roomurl%'
    }
});