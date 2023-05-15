class MockData {
  #name;
  #autor;
  #file;
  #img;
  get Name() {
    return this.#name;
  }
  set Name(value) {
    this.#name = value;
  }

  get Author() {
    return this.#autor;
  }
  set Author(value) {
    this.#autor = value;
  }

  get File() {
    return this.#file;
  }
  set File(value) {
    this.#file = value;
  }
  get Image() {
    return this.#img;
  }
  set Image(value) {
    this.#img = value;
  }

  constructor(name, author, file, img) {
    this.Name = name;
    this.Author = author;
    this.File = file;
    this.Image = img;
  }
}
