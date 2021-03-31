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
        this.textSignificado;
        this.significadoCadena;
        this.significadoFrase;
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

    
    
    create ()
    {
//////////////////
this.cantSimbolos=26;
        this.yy=1;
       // this.cadena='UNO';
       //'UNO','DOS','TRES','CUATRO','CINCO','SEIS',
        this.frases=['SI UN PROBLEMA TIENE SOLUCIÓN, ¿PARA QUÉ PREOCUPARSE? Y, SI NO LO TIENE, ¿PARA QUÉ PREOCUPARSE?.','EL SOL NO SABE DE BUENOS, EL SOL NO SABE DE MALOS.','HASTA EL VIAJE MÁS LARGO COMIENZA CON UN SOLO PASO.','NADIE TROPIEZA MIENTRAS ESTÁ ACOSTADO EN LA CAMA.','LA FELICIDAD VIENE A LA CASA DONDE RÍEN.','SI PREGUNTAS SENTIRÁS VERGÜENZA UN MINUTO, SI NO LO HACES SENTIRÁS VERGÜENZA TODA LA VIDA','VERIFICA SIETE VECES ANTES DE CUESTIONAR A UNA PERSONA.','HAZ TODO LO QUE PUEDAS, LO DEMÁS DÉJASELO AL DESTINO.','EL QUE QUIERE SUBIR, INVENTA LA ESCALERA.','LAS FLORES BONITAS NO DAN BUENOS FRUTOS.','PROVERBIOS JAPONESES'];

        this.significadoFrase=['NO DEBEMOS DEJARNOS LLEVAR POR LAS DUDAS\nY PREOCUPACIONES, SINO ENSEÑAR A NUESTROS\nHIJOS A SER DECIDIDOS.','EL SOL ILUMINA Y CALIENTA A TODOS POR IGUAL.\n QUIEN SE ENCUENTRA A SÍ MISMO, ES COMO EL SOL. \nNO DEBEN IMPORTARNOS LAS DIFERENCIAS,\nDEBEMOS ENSEÑAR A LOS NIÑOS A RESPETAR A TODOS POR IGUAL.','AUNQUE PAREZCA QUE LA META ES INALCANZABLE, \nDEBEMOS MOTIVAR A NUESTROS HIJOS PARA QUE LO INTENTEN.','HAY QUE ARRIESGARSE, Y SOBRE TODO, ESFORZARNOS \nPARA LOGRAR NUESTROS OBJETIVOS.','DEBEMOS ENSEÑAR A NUESTROS HIJOS A SER OPTIMISTAS.','SI PREGUNTAS SENTIRÁS VERGÜENZA UN MINUTO, \nSI NO LO HACES SENTIRÁS VERGÜENZA TODA LA VIDA','HAY QUE RESPETAR LAS OPINIONES DE LOS DEMÁS.','SI HAS HECHO TODO LO POSIBLE POR LOGRAR TU OBJETIVO, \nSIÉNTETE ORGULLOSO DE TI MISMO, \nINCLUSO AUNQUE NO SALGA COMO ESPERAS.','DEBEMOS MOTIVAR A NUESTROS HIJOS \nPARA QUE SE SOBREPONGAN A LOS OBSTÁCULOS DE LA VIDA.','NO HAY QUE DEJARSE LLEVAR POR LAS APARIENCIAS.','PROVERBIOS JAPONESES'];


        console.log(this.frases.length+'  FRASES NIVEL 2');
        var pos=Phaser.Math.Between(0, 10);
        this.cadena=this.frases[pos];
        this.significadoCadena=this.significadoFrase[pos];

            this.letra='0';
            this.alive=0;
//////////////////////////


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
        ///////////////////
        this.textSignificado = this.add.text(10, 220, '', { font: "20px Arial Black", fill: "#fff" });
        this.textSignificado.setStroke('#00f', 6);
        this.textSignificado.setShadow(2, 2, "#333333", 2, true, true);
        /////////////////////
        this.hsv = Phaser.Display.Color.HSVColorWheel();
             //  Rainbow Text
             this.text1 = this.add.text(10, 150, '', { font: "40px Arial Black", fill: "#fff" });
             this.text1.setStroke('#00f', 16);
             this.text1.setShadow(2, 2, "#333333", 2, true, true);

//////////////////////////////////////
this.colocarFrase(); 
this.colocarSignificadoFrase();       
this.cargarAlfabeto();

this.reiniciarTemporizador();

//
       
    }
    colocarSignificadoFrase()
    {
        this.textSignificado.setText(this.significadoCadena);
    }
    colocarFrase(){
        //this.text11.setVisible();
             /////////////////////////////////////
             this.text1.setText(this.cadena);
             
             //this.colocarSignificadoFrase();
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
            
            var x = 10;
            var y = 300;
            //  Create a bunch of images
            for (var i = 0; i < this.cantSimbolos; i++)
            {
                
                if(x>=500){
y=y+60;
x=10;
                }

                this.text11 = this.add.text(x, y, String.fromCharCode(65+i), { font: "50px Arial Black", fill: "#fff" });
                this.text11.setStroke('#00f', 16);
                this.text11.setShadow(2, 2, "#333333", 2, true, true);
x=x+50;
                
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
    var x = 550;
            var y = 300;
            //  Create a bunch of images
            for (var [clave, valor] of this.vectorCaracteresFrase) {
                //console.log(clave + " = " + valor);
                if(x>750){
                    y=y+60;
                    x=550;
                }
                                    this.text11 = this.add.text(x, y,valor, { font: "50px Arial Black", fill: "#fff" });
                                    this.text11.setStroke('#00f', 16);
                                    this.text11.setShadow(2, 2, "#333333", 2, true, true);
                                    x=x+60;
                                    this.text11.setInteractive();
                                    
                                            this.text11.on('clicked', this.clickHandler, this);
                                            
                this.simbolos.set(clave,this.text11);
              }
            
        }

crearCangrejos()
{
    for (var i = 0; i < 3; i++)
    {
        var x = Phaser.Math.Between(100, 700);
        var y = Phaser.Math.Between(500, 600);
        const smallCrab = this.add.sprite(x, y, 'seacreatures').setOrigin(0).play('crab');
    }
    this.anims.create({ key: 'purpleFish', frames: this.anims.generateFrameNames('sea', { prefix: 'purpleFish', end: 20, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'stingray', frames: this.anims.generateFrameNames('sea', { prefix: 'stingray', end: 23, zeroPad: 4 }), repeat: -1 });

        var x = Phaser.Math.Between(100,800);
                var y = Phaser.Math.Between(300, 500);
        const fish = this.add.sprite(x, y, 'seacreatures').play('purpleFish');
        var x = Phaser.Math.Between(100, 800);
                var y = Phaser.Math.Between(300, 500);
        const ray = this.add.sprite(x, y, 'seacreatures').play('stingray');
        //this.colocarSignificadoFrase();
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
            //this.crearCangrejos();
            
            this.tiempo=0;
            this.tiempoLimite=0;
            this.musicPasarNivel.play();
            //console.log('aumentar pulpos.....');
            if(this.yy==1)
            {
                this.octopus1.clearTint();      
                this.octopus1.setAlpha(1);
                this.crearCangrejos();
                
            }else{
                if(this.yy==2)
                {
                    this.octopus2.clearTint();      
                this.octopus2.setAlpha(1);
                this.crearCangrejos();
                }else{
                    if(this.yy==3)
                    {
                        this.octopus3.clearTint();      
                    this.octopus3.setAlpha(1);
                    this.crearCangrejos();
                    }else{
                        if(this.yy==4)
                        {
                            this.octopus4.clearTint();      
                        this.octopus4.setAlpha(1);
                        
                
                this.crearCangrejos();
                

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

            console.log(this.frases.length+'  FRASES NIVEL 2     yy='+this.yy);
        var pos=Phaser.Math.Between(0, 10);
        this.cadena=this.frases[pos];
        this.significadoCadena=this.significadoFrase[pos];

            this.colocarFrase();
            this.colocarSignificadoFrase();
            this.cargarAlfabeto();
           
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
           // this.significadoCadena='';
          
           //this.colocarSignificadoFrase();
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