// SurakshaSaathi - Audio & TTS Synthesis Controller
// Uses Web Speech API with fallback synthetic sound tones via Web Audio API

class AudioController {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.isSpeaking = false;
    this.currentUtterance = null;
    this.audioCtx = null;
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  // Synthesize pleasant sound effects without external MP3 files (100% offline!)
  playFeedbackSound(isSuccess) {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (isSuccess) {
        // Cheerful two-tone chime (C5 -> G5)
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.45);
      } else {
        // Warning buzz (low sawtooth tone)
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(140, now + 0.3);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.4);
      }
    } catch (e) {
      console.warn('[AudioController] Web Audio error:', e);
    }
  }

  // Speak text in vernacular language (Telugu, Kannada, or English)
  speak(text, lang = 'en', onStart = null, onEnd = null) {
    if (!this.synth) {
      console.warn('[AudioController] SpeechSynthesis not supported');
      if (onEnd) onEnd();
      return;
    }

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance = utterance;

    // Map language code to BCP 47 tags
    let langTag = 'en-IN';
    if (lang === 'te') langTag = 'te-IN';
    else if (lang === 'kn') langTag = 'kn-IN';

    utterance.lang = langTag;
    // Elder-friendly pacing: 0.9x speed for crystal-clear clarity
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    // Pick best matching voice if available
    const voices = this.synth.getVoices();
    const matchedVoice = voices.find(v => v.lang === langTag || v.lang.startsWith(lang));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = (err) => {
      console.warn('[AudioController] Speech error:', err);
      this.isSpeaking = false;
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.currentUtterance = null;
    }
  }

  toggle(text, lang, onStart, onEnd) {
    if (this.isSpeaking) {
      this.stop();
      if (onEnd) onEnd();
    } else {
      this.speak(text, lang, onStart, onEnd);
    }
  }
}

window.audioCtrl = new AudioController();
