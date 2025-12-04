//@title Ghostlight Pursuit
//@by Shaym


// 120 BPM en 4 temps par cycle -> setCps(120 / 60 / 4)
setcps(140 / 60 / 4) // équivalent à setcps(0.5) ; ou setcpm(30)

// banque de sons (optionnel) : tr909 par exemple
// bank("RolandTR909")

stack(
  // Kick 4/4 (une note par temps du cycle)
  s("bd bd bd bd").gain(1.0),

  // Basse grave : notes longues / pulsées en contre-temps
  s("[~ bassdrum1:4 ~ bassdrum1:3]*2").gain(0.9).vib(-1).attack(0.01).release(0.4),

  // Hi-hat rapide en doubles-croches (16e)
  s("hh*8").gain(0.35).sometimesBy(.22, x => x.ply("2 | 4")), // petites variations occasionnelles

  s("~ ~ oh ~")
    .gain(0.4)
    .rarely(x => x.ply(2)),
  
  // two voices: une à l'octave de base + une transposée d'une octave et une autre transposée 2 octaves
  note("<c3 eb3 f3>")
  .slow(1)
  .layer(
    x => x.s("gm_synth_choir").vib(4),             // voix 1 (base)
    x => x.add(12).s("gm_synth_choir").vib(3),       // +1 octave (12 demi-tons)
    x => x.add(36).s("gm_synth_choir").vib(5),
    x => x.add(24).s("gm_synth_choir").vib(2)      // +2 octaves (24 demi-tons)
  )
  .gain(perlin.range(0.4, 0.6))
  .lpf(perlin.range(1200, 2000))
  .room(0.6)
  ._scope(),
  
  note("<c4 eb4 g4 bb4>")
    .s("sawtooth")
    .slow(0.25)
    .lpf(800)
    .gain(0.25)
    .delay(0.5)
    .room(0.8),

  // Snare/clap fantomatique occasionnel
  s("~ ~ [~ sd] ~")
    .gain(0.6)
    .sometimesBy(0.4, x => x.speed(perlin.range(0.8, 1.2)))
    .delay(0.3),

  s("~ ~ ~ <cp rim>")
    .gain(perlin.range(0.3, 0.5))
    .degradeBy(0.4)
    .pan(rand),
  
  s("~ ~ [gm_breath_noise:8 ~]/2")
    .gain(perlin.range(1.5, 2))
    .speed(perlin.range(0.4, 0.8))
    .pan(sine.slow(8)),

  note("<~ c5 ~ eb5 ~ g5 ~ bb5>")
    .s("gm_whistle")
    .degradeBy(0.5)
    .gain(0.35)
    .delay(0.6)
    .speed(perlin.range(0.98, 1.02))

).pianoroll()
