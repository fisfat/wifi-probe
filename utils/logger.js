const cliSpinners = require('cli-spinners');
const chalk = require('chalk');
const ora = require('ora')

class Logger {
    constructor({ text, color }){
        this.text = text;
        this.color = color || 'white';
        this.spinnerShape = cliSpinners.triangle;
        this.spinner = null;
        this.spin = null
    }

    setSpin (){
        const { spinnerShape, color, text } = this
        this.spin = ora({ spinner:  spinnerShape, text: chalk[color](text) })
    }

   initiate (){
       this.setSpin()
    const { spin } = this
    this.spinner = spin.start();
   }

   setProperty(ppty, value) {
       this[ppty] = value
   }

   setText (text){
        this.text = text
   }

   setColor (color){
        this.color = color
   }

   updateOra(newText, newColor){
    this.setColor(newColor)
    this.setText(newText)

    const { spinner, text, color } = this
    spinner.text = chalk[color]("Info:") +" "+ chalk['white'](text)
   }

   stop(){
       this.spin.stop()
   }

   stopAndPersist(){
       this.spin.stopAndPersist({
           Symbol: "✅ ",
       })
   }

   succeed(){
       this.spin.succeed();
   }

   fail(){
    this.spin.succeed(); 
   }
}

module.exports = { Logger }