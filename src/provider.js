const issues = [
    {
        title: "How do I ask a question ?",
        body: `i created a button in ejs file wich active a function from a js file
the function:

    function signUp(){
    $(\`.container\`).empty()
    $(\`.container\`).append("<%- include ('signUp') %>")}

i have a file in the same main ejs folder file.
wich called "signUp.ejs" that include a form for signing up .
my problem is that my page just shows :
"<%- include ('signUp') %>" as an html text , and not showing the content of the ejs file.
        `,
        author: "Antoine Guillien",
        date: 1533852000000,
        active: 1534151656347,
        viewed: 10
    },
    {
        title: "How do we make babies ?",
        body: `
            It has been argued by some that God is a necessary and sufficient condition for objective morality. I can't accept this, because I don't even know what it means for something to be objectively moral. It seems an ill defined concept. Could someone explain what it would mean for morality to have an objective existence?
        `,
        author: "Pierre Rolland",
        date: 1532852040000,
        active: 1533051356347,
        viewed: 24
    }
];

class Provider{
    constructor(config){
        const defaults = {
          url: 'localhost',
          port: 3000
        };
        this.options = {...defaults, config};
    }

    getLastIssues(){
        return this.request();
    }

    request(){
        return new Promise((res, rej) =>{
            return res(issues);
        });
    }
}

module.exports = new Provider();
