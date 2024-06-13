export class ChildrenError extends Error {
  constructor(
    message = "⚠️ You can't use children whenever declaring an icon"
  ) {
    super(message);
    this.name = "ChildrenError";
  }
}
