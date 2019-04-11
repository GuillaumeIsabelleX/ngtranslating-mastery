#!/usr/bin/env node
//@stcgoal Optmal way to create command line app
/* /mycommand */
const CMD = require('cmd-line').default;
const cmdtest = new CMD('mycommand');
let promise = cmdtest.loadcommands(__dirname)
    .includehostcommands()
    .execute(process.argv);