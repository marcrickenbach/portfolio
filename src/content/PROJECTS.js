import klimaImg from './images/klima_blue.jpg'
import klimaImg2 from './images/klima_2.jpg'

import ideinImg from './images/idein_green.jpg'
import ideinImg2 from './images/idein_2.jpg'

import kielImg from './images/kiel_peach.jpg'
import sorelleImg from './images/sorelle_red.jpg'
import dateinImg from './images/datein_screen.png'
import rumoriImg from './images/Rumori_1.jpg'
import terpsichoreImg from './images/terpsichore_1.jpg'
import usqImg from './images/usq_1.jpg'

export const PROJECTS = [
    {
        id: 0,
        name: "Klima",
        image: klimaImg,
        image2: klimaImg2,
        shortDesc: "Atmospheric Logic",
        longDesc: "KLIMA is the first of many experiments that welcomes in the surrounding atmosphere as a fundamental building block for modular patches. Inspired by traditional logic modules and based on the Bosch BME280 sensor, KLIMA derives random gates by comparing analog signals to the ambient temperature, humidity, atmospheric pressure and relative altitude. Klima makes a gesture towards moving the environment, its weather and atmosphere away from its position as backdrop or object of representation, to an active agent of music-making. Expand KLIMA with the Kiel module to turn your gates into random stepped CV."

    },
    {
        id: 1,
        name: "Idein",
        image: ideinImg,
        image2: ideinImg2,
        shortDesc: "Optic Gate Generator",
        longDesc: "Idein is an autonomous module that requires no user-input aside from light. With an All-Light Sensor monitoring levels of the Red, Green, Blue (RGB) and Infrared (IR) spectrums, Idein detects changes in light-color and compares this information to the threshold set by the light sensitivity knobs. When a threshold is passed, a gate is opened, and a corresponding trigger is sent. Simply put, Idein is a series of comparators that produce quasi-random gates and triggers based on the color light spectrum of the surrounding environment. The big eye translates light to voltage and can be used to trigger events based on visual information, making unthought and seemingly passive movements of your patching an active source for musical events. Like its companion Kilma, the atmospheric logic module that precedes it, the idea behind Idein is to chip away at the boundary between environment and music-making, as well as to lean into what makes modular synthesis so exciting: randomness, spontaneity and (often) the impossibility of reproducibility."
    },
    {
        id: 2,
        name: "Kiel",
        image: kielImg,
        shortDesc: "Klima-Idein Expander Link",
        longDesc: "The Klima-Idein Expander Link is a 2hp expander module for use with the atmospheric logic module Klima, or the optic gate trigger Idein. Based on a Parallel In Parallel Out (PIPO) Shift Register circuit, KIEL receives the gate outputs from either of the aforementioned modules (not both) through a connector on the back panel, and converts those random gates into two related channels of random stepped voltages. Using the controls on the front panel, one can affect the global range of both channels and modify which gates control which bits for different flavors of randomness. Two separate clock inputs for each channel allows for asynchronous stepping and, finally, a loop lock knob makes it possible to lock in voltage sequences from 4 to 32 steps. Ultimately, Kiel allows for the possibility to add melodies and dynamic voltages alongside Klima- and Idein-produced gates and triggers. The operation of Kiel is straightforward and operates on a bit-wise principle. Each of the input gates that it receives from either Klima or Idein toggles a single bit of a 4-bit value. When the module detects a clock trigger, this 4-bit value is processed to produce a finer resolution 10-bit value. This value is then sent to a DAC and output as voltage between 0 and 5V."
    },
    {
        id: 3,
        name: "Sorelle",
        image: sorelleImg,
        shortDesc: "Analog Multi-Comparator",
        longDesc: "Sorelle produces a variety of modulation sources, including ring modulation, a unique bi-polar envelope summing circuit, two voltage comparators, a phase comparator and a weighted binary sequencer and gate output with CV range control. Each input signal is routed through an attenuverter and DC Offset circuit, allowing for manual modulation of the inputs before they sit down together to hash things out. From there, the buffered input signals are sent to the following circuits: (1) a four-quadrant multiplier (ring modulation) between the two incoming signals, A and B; (2) a voltage comparator between A and B that outputs high only when A is high; (3) a voltage comparator between A or B and an internal voltage reference set by the user that, at low frequencies, can output gates to trigger events, and at high frequencies, track an incoming pitch with a square waveform; (4) a phase comparator between A and B that outputs a gate during a phase difference interval; (5) a unique bi-polar envelope summing circuit for unusual CV waveforms, and (6) an unquantized binary weighted sequencer A little more on these last two: the bi-polar envelope summing circuit sums the positive envelope pole of signal A and the negative envelope pole of signal B into one bi-polar signal that is output at the En output, with the inversion of this signal output at the - En jack. At low frequencies, these two outputs offer mirrored control voltages allowing for, among other things, interesting crossfading and VCA control possibilities. The binary weighted sequencer is based on a simple DAC (digital to analog) circuit that sums various high and low values, and outputs a pseudo-random voltage. This sequencer takes its binary source information from the three comparators and the positive n output. Taken together, the randomly occurring configurations of high (or On) signals determine the voltage level at the output. The initial range of the output is set to 0-8V. A potentiometer allows you to set this range, as does a dedicated CV input to expand the possible output voltages. When a control voltage is present at this input, the potentiometer acts as an attenuator of the incoming signal. Alongside the sequencer output is a gate output that goes high only when the unattenuated sequencer signal passes a +2.5V threshold. All in all, there’s a lot to be overheard in a conversation between two signals."
    },
    {
        id: 4,
        name: "Datein",
        image: dateinImg,
        shortDesc: "JavaScript Synth App",
        longDesc: "DATEIN (German n. pl. 'data, data sets, files') is a JavaScript-based web app that allows for playful data-mining of user-supplied files that results in accidental rhythms and sequences. To use it, load a file, toggle the WRITE function, then start selecting your binary loops for each channel. Controls: [A...D]: Activate Channels A-D. [WRITE]: Toggles Write Function. [PLAY/PAUSE]: Plays or Pauses Loop. [BPM]: Determines global playspeed of loop. Each step represents one eighth note. The sliding controls, in order from left to right, determine BPM, the note duration of each step from whole note (1) to 16th note, and the gain for each channel. You can manually type in a value by double clicking on the control. The sound design was developed with the Tone.js library. The VIZ feature was developed using P5.js and represents a visual abstraction of the sequences currently playing."
    },
    {
        id: 5,
        name: "Rumori",
        image: rumoriImg,
        shortDesc: "Eavesdropping Voltage Source",
        longDesc: "This is where the more detailed description will go"
    },
    {
        id: 6,
        name: "Terpischore",
        image: terpsichoreImg,
        shortDesc: "Signal Animator",
        longDesc: "This is where the more detailed description will go"
    },
    {
        id: 7,
        name: "USQ",
        image: usqImg,
        shortDesc: "Unclocked Sequencer",
        longDesc: "This is where the more detailed description will go"
    },

]