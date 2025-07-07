// @by Shaym
// @title Moonlit Drifting
setCps(140/60/4)

const bass = "gm_synth_bass_1:8"
const melo = "gm_synth_brass_2"

let bass_line = stack(
  note("[d1(3, 8) f1(3, 8) e1(4, 8, 2) a1(3, 8)]/2").off(0.25, x=>x.add(7)).sound(bass).room(0.5).lpf("200 8000".slow(2)).pan("0.4 0.6").gain(1.2),
  note("[d1(3, 8) f1(3, 8) e1(4, 8, 2) a1(3, 8)]/2").off(0.125, x=>x.add(12)).sound(bass).room(0.5).lpf("8000 200".slow(2)).pan("0.4 0.6").gain(1.2),
  sound("[bd*4]").bank("rhodespolaris").gain(2),
  sound("[hh*8?, [- cp]*2]").bank("tr808"),
)

let melo_bass_line = stack(
  note("[d1(3, 8) f1(3, 8) e1(4, 8, 2) a1(3, 8)]/2").off(0.25, x=>x.add(7)).sound(bass).room(0.5).lpf("200 8000".slow(2)).pan("0.4 0.6").gain(1.2),
  note("[d1(3, 8) f1(3, 8) e1(4, 8, 2) a1(3, 8)]/2").off(0.125, x=>x.add(12)).sound(bass).room(0.5).lpf("8000 200".slow(2)).pan("0.4 0.6").gain(1.2),
  sound("[bd*4]").bank("rhodespolaris").gain(2),
  sound("[hh*8?, [- cp]*2]").bank("tr808"),
  note("<e c [b f]>, b a b a").sound(melo).gain(1.5).degradeBy(slider(0, 0, 1)),
  note("c < - [ c a c a]>").sound(melo).gain(2).degradeBy(slider(0, 0, 1))
)

arrange(
  [2, bass_line],
  [32, melo_bass_line]
).pianoroll()
