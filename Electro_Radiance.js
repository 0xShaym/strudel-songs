//@title Electro Radiance
//@by Shaym
//Inspired from Rhythms by Switch Angel

const dbank = "tr909"
const melo = "gm_synth_brass_2"
setCps(140/60/4)

stack(
  sound("hh*8").gain(.2).sometimesBy(.1, x => x.ply("2 | 4")),
  sound("bd").beat("0, 7.3, 10", 16).n(irand(6).ribbon(200, 2)).bank(dbank),
  sound("sd").bank(dbank).beat("4, 12", 16),
  sound("cp!16?".degradeBy(slider(0.491, 0, 1)).ribbon(16, 2)).gain(.5),
  voicing("<C Am F G>").sound("gm_lead_1_square:1").gain(.4).slow(1),
  n("0 1 2 3 <4 5> 1 [2 5] 3").chord("<C Am F G>").sound(melo).voicing().gain(1.5)
).pianoroll()
