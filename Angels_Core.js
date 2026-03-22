// @by Shaym
// @title Angels Core

setCpm(124/4)

let harm1 = stack(
  s("bd bd <bd, bd/2> bd, [[hh hh*2 hh hh hh hh*2 hh hh], [<bd sd> <sd bd>, hh*4]]"),
  chord("<Dm Bb F C>").voicing().anchor("d3").s("supersaw").gain(0.3).lpf(1400).attack(0.05).release(0.4),
  chord("<Dm Bb F C>").voicing().arp("0 1 2 1").s("gm_flute").gain(0.35),
  chord("<Dm Bb F C>").voicing().s("gm_brass_section").gain(0.4),
  note("<0 2 4 5 7 5 4 2>").scale("D:minor").s("gm_trumpet").gain(0.55)
)

let harm2 = stack(
  s("bd bd <bd, bd/2> bd, [[hh hh*2 hh hh hh hh*2 hh hh], [<bd sd> <sd bd>, hh*4]]"),
  chord("<Gm Eb Bb F>").voicing().anchor("g3").s("supersaw").detune(0.7).gain(0.35).lpf(900).attack(0.1).release(0.6),
  chord("<Gm Eb Bb F>").voicing().arp("0 3 1 2").s("gm_synth_brass_1").gain(0.45),
  chord("<Gm Eb Bb F>").voicing().s("gm_brass_section").gain(0.45),
  note("<2 5 7 8 10 8 7 5>").scale("G:minor").s("gm_pan_flute").gain(0.5).lpf(1600)
)

let buildup = stack(
  s("[bd ~] [bd ~] [bd ~] [bd bd]").bank("RolandTR909").gain(0.9),
  s("hh*16").bank("RolandTR909").gain(0.3).fast(3),
  chord("<Gm Bb C D>").voicing().s("supersaw").gain(0.28).lpf(sine.range(300,2600).slow(6)).attack(0.1).release(0.4),
  note("<2 3 4*2 2>").scale("G:minor").s("gm_trumpet").gain(0.45).lpf(2000)
)

let transition = stack(
  s("bd ~ bd ~").bank("RolandTR909").gain(0.7),
  s("hh*12").bank("RolandTR909").gain(0.25).slow(1.5),
  chord("<Gm Bb C D>").voicing().s("supersaw").gain(0.22).lpf(sine.range(800,1500).slow(2)).attack(0.2).release(0.5),
  note("<2 4 6 4>").scale("G:minor").s("gm_trumpet").gain(0.38).lpf(1500)
)

let drop1 = stack(
  s("bd*4").bank("RolandTR909").gain(0.98),
  s("~ hh ~ hh").bank("RolandTR909").gain(0.45),
  note("c2 c2 ~ c2").s("sawtooth").lpf(700).gain(0.65),
  chord("<C^7 Am7 F^7 G>").voicing().s("supersaw").detune(0.7).gain(0.32).lpf(1600).attack(0.1).release(0.5)
)

let drop2 = stack(
  s("bd*4").bank("RolandTR909").gain(1),
  s("hh*8").bank("RolandTR909").gain(0.38),
  note("a1 a1 ~ a1").s("sawtooth").lpf(650).gain(0.6).distort(0.1),
  chord("<Am7 F^7 C^7 G>").voicing().s("supersaw").detune(0.55).gain(0.34).lpf(1500).attack(0.12).release(0.45)
)

let drop3 = stack(
  s("bd*4").bank("RolandTR909").gain(0.97),
  s("hh*16").bank("RolandTR909").gain(0.35).fast(1.5),
  note("f2 f2 ~ f2").s("sawtooth").lpf(720).gain(0.62),
  chord("<F^7 Dm7 G C>").voicing().s("supersaw").detune(0.65).gain(0.33).lpf(1550).attack(0.1).release(0.5)
)

let finale = stack(
  s("bd ~ ~ ~").bank("RolandTR909").gain(0.6),
  chord("<Gm F Eb Dm>").voicing().s("supersaw").gain(0.25).lpf(900).attack(0.3).release(1.2),
  note("<2 1 0 -1>").scale("G:minor").s("gm_choir_aahs").gain(0.5).lpf(1200),
  chord("<Gm C Am>").voicing().s("gm_choir_aahs").gain(0.6).attack(0.4).release(2)
)

arrange(
  [8, drop1],
  [8, drop2],
  [8, drop3],
  [4, buildup],
  [4, transition],
  [8, harm1],
  [16, harm2],
  [4, finale],  
)
._pianoroll({ fold: 1 })
