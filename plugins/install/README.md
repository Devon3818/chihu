phonegap-plugin-install
=======================

This PhoneGap plugin allows you isntall other apk silent or normal.

 > only support android platfrom


#### Installation

Automatically (CLI / Plugman)

download is compatible with Cordova Plugman, compatible with PhoneGap 3.0 CLI, here's how it works with the CLI:

    $ phonegap local plugin add https://github.com/weelion/phonegap-plugin-install.git
or

    $ cordova plugin add https://github.com/weelion/phonegap-plugin-install.git


run this command afterwards (backup your project first!):

    $ cordova prepare

install.js is brought in automatically. There is no need to change or add anything in your html.


#### Usage

js

    // install
    var path = '/sdcart0/test.apk';
    window.install.install(path, function() {
         console.log('install');
    });


#### LICENSE

MIT

#### Have a nice day!
