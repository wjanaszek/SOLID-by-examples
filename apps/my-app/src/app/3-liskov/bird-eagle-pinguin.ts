class Bird {
  fly(speed: number) {
    return `Flying at ${speed} km/h`;
  }
}

class Eagle extends Bird {
  dive() {
    // ...
  }

  override fly(speed: number) {
    return `Soaring through the sky at ${speed}`;
  }
}

// LSP Violation:
class Penguin extends Bird {
  override fly() {
    return new Error('Sorry, I cant fly');
  }
}
