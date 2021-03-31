export class Nivel2 extends Phaser.Scene{
    constructor ()
    {
        super({ key: 'Nivel2' });
        this.item;
        this.i = 0;
        this.yy;
        this.text11;
this.cadena;
        this.frases;
        this.musicPasarNivel;
        /////////////////
        let info;
            this.temporizador;
            let letra='';
            this.alive = 0;
            let cantSimbolos;
            this.simbolos=new Map();
            this.musicaFondo;
            this.musicPerdiste;
            this.musicReventar;
            this.musicLetra=new Map();
            this.debug;
            this.text;
            this.tiempo;
            this.tiempoLimite;
            var timedEvent;
            /////////////////////////////
            ////////////////////
            this.octopus1;
            this.octopus2;
            this.octopus3;
            this.octopus4;
            this.octopus5;
            this.octopus6;
            this.ray;
        /////////////////////
        this.textTiempo ;

    this.timedEventTiempo;
    ////////////////////
    this.vectorCaracteresFrase=new Map();
    }

    preload ()
    {
        this.load.audio('theme','assets/audio/audio1.mp3');
        this.load.audio('paseNivel','assets/audio/ganador.mp3');
        
        //////////////////////
        this.cantSimbolos=26;
        this.yy=1;
       // this.cadena='UNO';
       //'UNO','DOS','TRES','CUATRO','CINCO','SEIS',
        this.frases=['SI UN PROBLEMA TIENE SOLUCIÓN, ¿PARA QUÉ PREOCUPARSE? Y, SI NO LO TIENE, ¿PARA QUÉ PREOCUPARSE?. NO DEBEMOS DEJARNOS LLEVAR POR LAS DUDAS Y PREOCUPACIONES, SINO ENSEÑAR A NUESTROS HIJOS A SER DECIDIDOS.','EL SOL NO SABE DE BUENOS, EL SOL NO SABE DE MALOS. EL SOL ILUMINA Y CALIENTA A TODOS POR IGUAL. QUIEN SE ENCUENTRA A SÍ MISMO, ES COMO EL SOL. NO DEBEN IMPORTARNOS LAS DIFERENCIAS, DEBEMOS ENSEÑAR A LOS NIÑOS A RESPETAR A TODOS POR IGUAL.','HASTA EL VIAJE MÁS LARGO COMIENZA CON UN SOLO PASO. AUNQUE PAREZCA QUE LA META ES INALCANZABLE, DEBEMOS MOTIVAR A NUESTROS HIJOS PARA QUE LO INTENTEN.','NADIE TROPIEZA MIENTRAS ESTÁ ACOSTADO EN LA CAMA. HAY QUE ARRIESGARSE, Y SOBRE TODO, ESFORZARNOS PARA LOGRAR NUESTROS OBJETIVOS.','LA FELICIDAD VIENE A LA CASA DONDE RÍEN. DEBEMOS ENSEÑAR A NUESTROS HIJOS A SER OPTIMISTAS.','SI PREGUNTAS SENTIRÁS VERGÜENZA UN MINUTO, SI NO LO HACES SENTIRÁS VERGÜENZA TODA LA VIDA','VERIFICA SIETE VECES ANTES DE CUESTIONAR A UNA PERSONA. HAY QUE RESPETAR LAS OPINIONES DE LOS DEMÁS.','HAZ TODO LO QUE PUEDAS, LO DEMÁS DÉJASELO AL DESTINO. SI HAS HECHO TODO LO POSIBLE POR LOGRAR TU OBJETIVO, SIÉNTETE ORGULLOSO DE TI MISMO, INCLUSO AUNQUE NO SALGA COMO ESPERAS.','EL QUE QUIERE SUBIR, INVENTA LA ESCALERA. DEBEMOS MOTIVAR A NUESTROS HIJOS PARA QUE SE SOBREPONGAN A LOS OBSTÁCULOS DE LA VIDA.','LAS FLORES BONITAS NO DAN BUENOS FRUTOS. NO HAY QUE DEJARSE LLEVAR POR LAS APARIENCIAS.','PROVERBIOS JAPONESES'];
        console.log(this.frases.length+'  FRASES NIVEL 2');
        this.cadena=this.frases[Phaser.Math.Between(0, 10)];

            this.letra='0';
            this.alive=0;
            this.load.audio('perdiste','sound/perdiste.mp3');
            this.load.audio('reventar','sound/popp.mp3');

            for (var i = 0; i < this.cantSimbolos; i++)
            {
                this.load.audio(String.fromCharCode(65+i),'sound/'+String.fromCharCode(97+i)+'.mp3');
            }
            
        /////////////////////////

        this.load.atlas('sea', 'assets/animations/seacreatures_json.png', 'assets/animations/seacreatures_json.json');

        //  Just a few images to use in our underwater scene
        this.load.image('undersea', 'assets/pics/undersea.jpg');
        this.load.image('coral', 'assets/pics/seabed.png');
    }
    onEvent ()
    {
        
    }
    create ()
    {
        this.add.image(0, 0, 'undersea').setOrigin(0)
        let kvArray = [{key: 1, value: 10},
            {key: 2, value: 20},
            {key: 3, value: 30}]
        this.vectorCaracteresFrase.set('Á','Á');
        this.vectorCaracteresFrase.set('É','É');
        this.vectorCaracteresFrase.set('Í','Í');
        this.vectorCaracteresFrase.set('Ó','Ó');
        this.vectorCaracteresFrase.set('Ú','Ú');

        this.vectorCaracteresFrase.set(',',',');
        this.vectorCaracteresFrase.set('.','.');
        this.vectorCaracteresFrase.set('!','!');
        this.vectorCaracteresFrase.set('¡','¡');
        this.vectorCaracteresFrase.set('?','?');
        this.vectorCaracteresFrase.set('¿','¿');
        this.vectorCaracteresFrase.set('Ü','Ü');
        

        this.textTiempo = this.add.text(32, 100);

    this.timedEventTiempo = this.time.addEvent({ delay: 2000, callback: this.onEvent, callbackScope: this, repeat: 10 });
    
    this.musicaFondo = this.sound.add('theme');
        this.musicPasarNivel = this.sound.add('paseNivel');
        
        this.anims.create({ key: 'octopus', frames: this.anims.generateFrameNames('sea', { prefix: 'octopus', end: 24, zeroPad: 4 }), repeat: -1 });

        this.anims.create({ key: 'stingray', frames: this.anims.generateFrameNames('sea', { prefix: 'stingray', end: 23, zeroPad: 4 }), repeat: -1 });

        this.ray = this.add.sprite(100, 300, 'seacreatures').play('stingray');
       
        this.octopus1 = this.add.sprite(300, 100, 'seacreatures').play('octopus');
        this.octopus2 = this.add.sprite(400, 100, 'seacreatures').play('octopus');
        this.octopus3 = this.add.sprite(500, 100, 'seacreatures').play('octopus');
        this.octopus4 = this.add.sprite(600, 100, 'seacreatures').play('octopus');
        this.octopus5 = this.add.sprite(700, 100, 'seacreatures').play('octopus');
        
        //octopus1.setTintFill(0xffff00, 0xffff00, 0xff0000, 0xff0000);
        this.octopus1.setTintFill(0xffffff);        
        this.octopus1.setAlpha(0.5);
        this.octopus2.setTintFill(0xffffff);        
        this.octopus2.setAlpha(0.5);
        this.octopus3.setTintFill(0xffffff);        
        this.octopus3.setAlpha(0.5);
        this.octopus4.setTintFill(0xffffff);        
        this.octopus4.setAlpha(0.5);
        this.octopus5.setTintFill(0xffffff);        
        this.octopus5.setAlpha(0.5);
        
        
        this.add.image(0, 466, 'coral').setOrigin(0);
        ///////////////////////////////////////
        this.musicPerdiste=this.sound.add('perdiste');
        this.musicReventar=this.sound.add('reventar');
        for (var i = 0; i < 26; i++)
            {
                //console.log(String.fromCharCode(65+i)+'------'+(String.fromCharCode(65+i)));
                this.musicLetra.set(String.fromCharCode(65+i),this.sound.add(String.fromCharCode(65+i)));
            }
//////////////////////////////////
this.musicLetra.set('Á',this.sound.add('A'));
this.musicLetra.set('É',this.sound.add('E'));
this.musicLetra.set('Í',this.sound.add('I'));
this.musicLetra.set('Ó',this.sound.add('O'));
this.musicLetra.set('Ú',this.sound.add('U'));
this.musicLetra.set('Ü',this.sound.add('U'));

        this.musicLetra.set(',',this.sound.add('reventar'));
        this.musicLetra.set('.',this.sound.add('reventar'));
        this.musicLetra.set('!',this.sound.add('reventar'));
        this.musicLetra.set('¡',this.sound.add('reventar'));
        this.musicLetra.set('?',this.sound.add('reventar'));
        this.musicLetra.set('¿',this.sound.add('reventar'));
//////////////////////////////////////
this.colocarFrase();        
this.cargarAlfabeto();

this.reiniciarTemporizador();

//
       
    }
    colocarFrase(){
        //this.text11.setVisible();
             /////////////////////////////////////
             this.hsv = Phaser.Display.Color.HSVColorWheel();

             //  Rainbow Text
             this.text1 = this.add.text(10, 450, this.cadena, { font: "50px Arial Black", fill: "#fff" });
             this.text1.setStroke('#00f', 16);
             this.text1.setShadow(2, 2, "#333333", 2, true, true);
             ///////////////////////////////////////////
    }
    reiniciarTemporizador(){
        // this.gem is a local variable.

this.debug = this.add.graphics();
this.temporizador=this.frases.length *12;
            this.tiempo=1;
            this.text = this.add.text(32, 32);

    this.timedEvent = this.time.addEvent({ delay: 1000,  onEvent ()
        {
            this.tiempo+=1;
        }, callbackScope: this, repeat: 10*this.temporizador });

this.timer = this.time.addEvent({ delay: 10000*this.temporizador, callback: this.gameOver, callbackScope: this });

//////////*********
    }
    cargarAlfabeto(){
        /////////////cargar burbujas de letras
        
            //this.alive=0;
            this.cadena = this.cadena.trim(); 
            
            var x = 50;
            var y = 130;
            //  Create a bunch of images
            for (var i = 0; i < this.cantSimbolos; i++)
            {
                
                if(x>=500){
y=y+80;
x=50;
                }

                this.text11 = this.add.text(x, y, String.fromCharCode(65+i), { font: "74px Arial Black", fill: "#fff" });
                this.text11.setStroke('#00f', 16);
                this.text11.setShadow(2, 2, "#333333", 2, true, true);
x=x+70;
                
                this.text11.setInteractive();
    
                var string='Á';
                const result = string.charCodeAt(0);
                //console.log("codigo ascii de á : "+result);
               for(var a=0;a<this.cadena.length;a++){
                    if(this.cadena.charAt(a)===String.fromCharCode(65+i)){
                        this.text11.on('clicked', this.clickHandler, this);
                        //this.alive++;

                    }
                    else{
                        this.text11.setAlpha(1);
                    }
                }
                
                
                    
    //console.log(this.alive+'   esperando restante de letras');
                
                this.simbolos.set(String.fromCharCode(65+i),this.text11);
            }
            this.colocarVectorCaracteresAcentoFrase();
            //  If a Game Object is clicked on, this event is fired.
            //  We can use it to emit the 'clicked' event on the game object itself.
            this.input.on('gameobjectup', function (pointer, gameObject)
            {
                gameObject.emit('clicked', gameObject);
            }, this);
    
    }
    colocarVectorCaracteresAcentoFrase(){
    var x = 600;
            var y = 150;
            //  Create a bunch of images
            for (var [clave, valor] of this.vectorCaracteresFrase) {
                //console.log(clave + " = " + valor);
                if(x>750){
                    y=y+70;
                    x=600;
                }
                                    this.text11 = this.add.text(x, y,valor, { font: "60px Arial Black", fill: "#fff" });
                                    this.text11.setStroke('#00f', 16);
                                    this.text11.setShadow(2, 2, "#333333", 2, true, true);
                                    x=x+70;
                                    this.text11.setInteractive();
                                    
                                            this.text11.on('clicked', this.clickHandler, this);
                                            
                this.simbolos.set(clave,this.text11);
              }
            
        }

    update ()
    {
        this.ray.tilePositionX+=1;
        //console.log(this.ray.tilePositionX);
        this.alive=this.cadena.length;
        
        const top = this.hsv[this.i].color;
        const bottom = this.hsv[359 - this.i].color;

        this.text1.setTint(top, top, bottom, bottom);
        
        this.i++;

        if (this.i === 360)
        {
            this.i = 0;
        }
        /////////////////////////////////////
        if(this.alive==0){
            
            this.letra='0';
            this.alive=0;
            for (var i = 0; i < this.cantSimbolos; i++)
            {
                var text11=this.simbolos.get(String.fromCharCode(65+i));
                text11.off('clicked', this.clickHandler);
                text11.input.enabled = false;
                text11.setVisible(false);
                
               
            }
            
            this.tiempo=0;
            this.tiempoLimite=0;
            this.musicPasarNivel.play();
            //console.log('aumentar pulpos.....');
            if(this.yy==1)
            {
                this.octopus1.clearTint();      
                this.octopus1.setAlpha(1);
                var x = Phaser.Math.Between(100, 700);
                var y = Phaser.Math.Between(500, 600);
                const smallCrab = this.add.sprite(x, y, 'seacreatures').setOrigin(0).play('crab');
            }else{
                if(this.yy==2)
                {
                    this.octopus2.clearTint();      
                this.octopus2.setAlpha(1);
                }else{
                    if(this.yy==3)
                    {
                        this.octopus3.clearTint();      
                    this.octopus3.setAlpha(1);
                    var x = Phaser.Math.Between(100, 700);
                var y = Phaser.Math.Between(500, 600);
                const smallCrab = this.add.sprite(x, y, 'seacreatures').setScale(0.5).setOrigin(0).play('crab');
                    }else{
                        if(this.yy==4)
                        {
                            this.octopus4.clearTint();      
                        this.octopus4.setAlpha(1);
                        
                
                this.anims.create({ key: 'purpleFish', frames: this.anims.generateFrameNames('sea', { prefix: 'purpleFish', end: 20, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'stingray', frames: this.anims.generateFrameNames('sea', { prefix: 'stingray', end: 23, zeroPad: 4 }), repeat: -1 });

        var x = Phaser.Math.Between(10, 50);
                var y = Phaser.Math.Between(50, 600);
        const fish = this.add.sprite(x, y, 'seacreatures').play('purpleFish');
        var x = Phaser.Math.Between(750, 800);
                var y = Phaser.Math.Between(100, 600);
        const ray = this.add.sprite(x, y, 'seacreatures').play('stingray');

                        }else{
                            //if(this.yy==5)
                            //{
                                this.octopus5.clearTint();      
                            this.octopus5.setAlpha(1);
                            this.gameOver();
                            
                        }
                    }
                }
            }
            this.yy++;
            this.cadena=Phaser.Math.Between(0, 10);
            
            this.cargarAlfabeto();
            this.colocarFrase();

            
        }

        

        this.tiempoLimite=this.timedEvent.repeatCount;
            this.text.setText('Pendiente: ' + this.alive + '\nTiempo: ' +this.tiempoLimite + '\nELIMINADO : ' +this.letra );
            
            const size = 700;

        this.debug.fillStyle(0x2d2d2d);
        this.debug.fillRect(50,10, size, 20);
//console.log('es el ..  '+this.timedEvent.repeatCount);
        this.debug.fillStyle(0x2dff2d);
        this.debug.fillRect(50, 10, size-(this.timedEvent.repeatCount)*this.temporizador*10, 20);
        ///////////////////////////////////////////
        
    }
    clickHandler (text11)
        {
            this.musicReventar.play();

            
            for (var [clave, valor] of this.simbolos) {
                //console.log(clave + " = " + valor.gameObject);
                if(this.simbolos.get(clave)===text11)
                {
                    
                    this.letra=clave;
                   
                    this.musicLetra.get(clave).play();
    
                if(clave===this.cadena.substr(0,1)){
                    this.cadena=this.cadena.substr(1,this.cadena.lenght);
                    if(this.cadena.substr(0,1)===' '){
                        this.cadena=this.cadena.substr(1,this.cadena.lenght);
                        this.alive--;
                    }
                    this.alive--;
                }
                
                //console.log(this.cadena);
                this.text1.setText(this.cadena);
                }
            
            }
            
        }
        gameOver ()
        {
            
           
                this.input.off('gameobjectup');
            this.musicPerdiste.play();
           
           this.input.off('gameobjectup');
           this.musicPerdiste.play();
             
   console.log(this.alive+'   ooo game over 33333 ooo  '+this.tiempoLimite);
           this.registry.set('score', this.alive);
           this.registry.set('tiempo', this.tiempoLimite);
   
           this.scene.pause();
           this.scene.run('gameOver3');
           //this.scene.start('gameOver3');
            
        }
}