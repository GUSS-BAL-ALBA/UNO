export class Boot extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'boot'});
        //super('Boot');
        let info;
            this.temporizador;
            let letra='';
            this.alive = 0;
            
            
            this.musicPerdiste;
            this.musicReventar;
            
            this.debug;
            this.text;
            this.tiempo;
            this.tiempoLimite;
            var timedEvent;
    }

    init ()
    {
        let element = document.createElement('style');

        document.head.appendChild(element);

    }

    preload ()
    {
        this.load.atlas('sea', 'assets/animations/seacreatures_json.png', 'assets/animations/seacreatures_json.json');
        console.log('cargando archivos');
        //this.load.audio('themeF','assets/audio/neriakX_-_Enigma_Gun_Extended_Mix.mp3');
        this.load.audio('theme','assets/audio/audio1.mp3');

        this.load.image('bg', 'assets/pics/undersea.jpg');
        this.load.image('grid', 'assets/pics/seabed.png');
        this.load.image('click1', 'assets/pics/hand1.jpg');
        this.load.image('buscar', 'assets/pics/buscar.png');
        this.load.image('clap', 'assets/pics/clap.png');
        this.load.image('sad', 'assets/pics/sad.png');
        this.load.image('next', 'assets/pics/next.png');
        this.load.image('refresh', 'assets/pics/refresh.png');

        this.load.image('click2', 'assets/pics/click1.jpg');
        this.load.image('caballoInfo', 'assets/sprites/caballito.png');

        this.cantSimbolos=26;
        this.letra='0';
        this.alive=0;
        this.load.audio('perdiste','sound/perdiste.mp3');
        this.load.audio('reventar','sound/popp.mp3');

        for (var i = 0; i < 26; i++)
        {
            this.load.audio(String.fromCharCode(65+i),'alfabeto/'+String.fromCharCode(97+i)+'.mp3');
        }
       
        this.load.script('webfont', 'image/fondo6.png');
        this.load.audio('place', 'sound/popp.mp3');
        this.load.audio('miss','sound/perdiste.mp3');
        this.load.audio('gamelost', 'sound/perdiste.mp3');
        this.load.audio('gamewon', 'sound/popp.mp3');
        console.log(Phaser.Math.Between(0, 10));

        ///////////////////nivel uno
        this.load.audio('paseNivel','assets/audio/ganador.mp3');
        this.load.audio('perdiste','sound/perdiste.mp3');
        this.load.audio('reventar','sound/popp.mp3');

        this.load.atlas('sea', 'assets/animations/seacreatures_json.png', 'assets/animations/seacreatures_json.json');
        this.load.image('undersea', 'assets/pics/undersea.jpg');
        this.load.image('coral', 'assets/pics/seabed.png');
/////////////////////////////////

////////////nnivel dos
//this.load.atlas('sea', 'assets/animations/seacreatures_json.png', 'assets/animations/seacreatures_json.json');
//this.load.audio('paseNivel','assets/audio/ganador.mp3');
       
//this.load.audio('perdiste','sound/perdiste.mp3');
//this.load.audio('reventar','sound/popp.mp3');
/*
for (var i = 0; i < this.cantSimbolos; i++)
{
    this.load.audio(String.fromCharCode(65+i),'sound/'+String.fromCharCode(97+i)+'.mp3');
}*/
//  Just a few images to use in our underwater scene
//this.load.image('undersea', 'assets/pics/undersea.jpg');
//this.load.image('coral', 'assets/pics/seabed.png');
///////////////////////////////

//////////////game 7
this.load.image('donuts', 'image/alfa3.png');
    //this.load.image('fork', 'image/bola2.png');
    
         /*   
            this.load.audio('perdiste','sound/perdiste.mp3');
            this.load.audio('reventar','sound/popp.mp3');

            this.load.atlas('sea', 'assets/animations/seacreatures_json.png', 'assets/animations/seacreatures_json.json');

            //  Just a few images to use in our underwater scene
            this.load.image('undersea', 'assets/pics/undersea.jpg');
            this.load.image('coral', 'assets/pics/seabed.png'); 
*/
////////////////////////////
    }

    create ()
    {
        //console.log(Phaser.Math.Between(0, 10));

        console.log('colocando musica de fondo volumen medio');
        let scene = this.scene;
var music = this.sound.add('theme');
//console.log(Phaser.Math.Between(0, 10));


music.play();

music.volume=0.1;

                scene.start('instructions');

    }
    

}


