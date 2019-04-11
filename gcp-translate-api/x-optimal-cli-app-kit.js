#!/usr/bin/env node
//@stcgoal Optimal way to create command line app
/* /mycommand */
const CMD = require('cmd-line').default;

const cmdtest = new CMD('mycommand'); //@s located into ./commands/mycommand.js
let promise = cmdtest.loadcommands(__dirname)
    .includehostcommands()
    .execute(process.argv);