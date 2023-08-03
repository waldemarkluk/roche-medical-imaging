export interface Annotation {
  id: string,
  x: number,
  y: number,
  radiusX: number,
  radiusY: number
}

export interface AnnotationStore {
  annotations: Array<Annotation>
}