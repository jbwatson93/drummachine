var wave = ['triangle','sine','square'];
var hello  = document.getElementById("wave").value;
var synth = new Tone.MonoSynth().toMaster();
function waveform(){
    var wave = ['triangle','sine','square'];
    var hello  = document.getElementById("wave").value;
    console.log(hello);
    console.log(wave[hello]);
     synth = new Tone.MonoSynth({
        "oscillator" : {
            "type" : wave[hello]
     }}).toMaster();
     document.getElementById("waveform").innerHTML = wave[hello]
    }
    function filter(){
        filterfreq = document.getElementById("filter").value;
        filattack = document.getElementById("filattack").value/100;
        synth = new Tone.MonoSynth({
            filterEnvelope  : {
                attack  : filattack ,
                decay  : 0.2 ,
                sustain  : 0.5 ,
                release  : 2 ,
                baseFrequency  : filterfreq ,
                octaves  : 7 ,
                exponent  : 2
                }
            }).toMaster();
        
    }
    // var synth = new Tone.MonoSynth({
    //     "oscillator" : {
    //         "type" : wave[hello]
    //  }}).toMaster();
     
function sequencer(){
    const kick = new Tone.Player("../audio/808kick.wav").toMaster();
    const snare = new Tone.Player("../audio/Snare.wav").toMaster();
    const hats = new Tone.Player("../audio/hat.wav").toMaster();
    const openhats = new Tone.Player("../audio/oh.wav").toMaster();
    const shaker = new Tone.Player("../audio/shaker.wav").toMaster();
    

// function waveform(){
//     var wave = ['triangle','sine','square'];
//     // var hello  = document.getElementById("wave").value;
//     console.log(hello);
//     console.log(wave[hello]);
   
//     }
    // var synth = new Tone.MonoSynth({
    //     "oscillator" : {
    //         "type" : wave[hello]
    //  }}).toMaster();
// synth.triggerAttackRelease("C4", "8n");
    let index = 0;

    Tone.Transport.scheduleRepeat(repeat, "8n");
    Tone.Transport.start();
    
    function repeat(){
        let step = index % 16;
        // console.log(step);
        let kickinputs = document.querySelector(`.kick input:nth-child(${step + 1})`);//'.kick input:nth-child(${step + 1})'// );

        let snareinputs = document.querySelector(`.snare input:nth-child(${step + 1})`);

        let hatsinputs = document.querySelector(`.hats input:nth-child(${step + 1})`);

        let openhatsinputs = document.querySelector(`.openhats input:nth-child(${step + 1})`);

        let shakerinputs = document.querySelector(`.shaker input:nth-child(${step + 1})`);

        let c2inputs = document.querySelector(`.c2 input:nth-child(${step + 1})`);

        let csinputs = document.querySelector(`.cs input:nth-child(${step + 1})`);

        let d3inputs = document.querySelector(`.d3 input:nth-child(${step + 1})`);

        let dsinputs = document.querySelector(`.ds input:nth-child(${step + 1})`);

        let e3inputs = document.querySelector(`.e3 input:nth-child(${step + 1})`);

        let f3inputs = document.querySelector(`.f3 input:nth-child(${step + 1})`);

        let fsinputs = document.querySelector(`.fs input:nth-child(${step + 1})`);

        let g3inputs = document.querySelector(`.g3 input:nth-child(${step + 1})`);

        let gsinputs = document.querySelector(`.gs input:nth-child(${step + 1})`);

        let a3inputs = document.querySelector(`.a3 input:nth-child(${step + 1})`);

        let asinputs = document.querySelector(`.as input:nth-child(${step + 1})`);
        
        let b3inputs = document.querySelector(`.b3 input:nth-child(${step + 1})`);
        if(kickinputs.checked){
            kick.start();
        }
        if(snareinputs.checked){
            snare.start();
        }
        if(hatsinputs.checked){
            hats.start();
        }
        if(openhatsinputs.checked){
            openhats.start();
        }
        if(shakerinputs.checked){
            shaker.start();
        } 
        if(c2inputs.checked){
            synth.triggerAttackRelease("C3", "8n")
        }
        if(csinputs.checked){
            synth.triggerAttackRelease("C#3", "8n")
        }
        if(d3inputs.checked){
            synth.triggerAttackRelease("D3", "8n")
        }
        if(dsinputs.checked){
            synth.triggerAttackRelease("D#3", "8n")
        }
        if(e3inputs.checked){
            synth.triggerAttackRelease("E3", "8n")
        }
        if(f3inputs.checked){
            synth.triggerAttackRelease("F3", "8n")
        }
        if(fsinputs.checked){
            synth.triggerAttackRelease("F#3", "8n")
        }
        if(g3inputs.checked){
            synth.triggerAttackRelease("G3", "8n")
        }
        if(gsinputs.checked){
            synth.triggerAttackRelease("G#3", "8n")
        }
        if(a3inputs.checked){
            synth.triggerAttackRelease("A3", "8n")
        }
        if(asinputs.checked){
            synth.triggerAttackRelease("A#3", "8n")
        }
        if(b3inputs.checked){
            synth.triggerAttackRelease("B3", "8n")
        }
        index++;
    }
}
function speed(){
    Tone.Transport.bpm.value = document.getElementById("bpm").value;
    }
function swing(){
        Tone.Transport.swing.value = document.getElementById("swing").value/ 100;
        }

        
        
sequencer();

// (() => {
//     const synth = new Tone.PolySynth( 10, Tone.AMSynth );
//     synth.toMaster();
  
//     onKeyDown( synth );
//     onKeyUp( synth );
//   })();



  