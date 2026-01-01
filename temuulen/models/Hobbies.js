class Hobbies {
  constructor(id, title, imageUrl,) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
  }

  // Convert Firestore document to Hobbies instance
  static fromFirestore(doc) {
    const data = doc.data ? doc.data() : doc;
    return new Hobbies(
      doc.id || data.id,
      data.title,
      data.imageUrl,
    );
  }
}
export default Hobbies;