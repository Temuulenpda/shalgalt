class Capabilities {
  constructor(id, chadvar,zurag) {
    this.id = id;
    this.chadvar = chadvar;
    this.zurag = zurag;
  }

  // Convert Firestore document to Hobbies instance
  static fromFirestore(doc) {
    const data = doc.data ? doc.data() : doc;
    return new Capabilities(
      doc.id || data.id,
      data.chadvar,
      data.zurag,
    );
  }
}
export default Capabilities;